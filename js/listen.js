// "Professor que ouve": capta o microfone, detecta cada batida e compara com o tempo certo.
import { AudioEng } from './audio.js';
import { mean, sd, median, clamp } from './util.js';

const WORKLET_URL = new URL('./onset-worklet.js', import.meta.url);

export const Listen = {
  ready: false, stream: null, src: null, node: null, sink: null, filters: [], recorder: null, chunks: [], mime: '',
  onsets: [], onLevel: null, onOnset: null, loaded: false,

  supported() { return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.AudioWorkletNode && window.isSecureContext); },

  async open(sens = 0.5) {
    if (this.ready) return true;
    const ctx = AudioEng.ensure(); if (!ctx) throw new Error('Sem áudio neste navegador.');
    if (!this.loaded) { await ctx.audioWorklet.addModule(WORKLET_URL); this.loaded = true; }
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false } });
    this.src = ctx.createMediaStreamSource(this.stream);
    // dois passa-altas em 3 kHz: o clique (grave, 550–900 Hz) quase some, a batida no pad continua
    const h1 = ctx.createBiquadFilter(); h1.type = 'highpass'; h1.frequency.value = 3000; h1.Q.value = 0.7;
    const h2 = ctx.createBiquadFilter(); h2.type = 'highpass'; h2.frequency.value = 3000; h2.Q.value = 0.7;
    this.node = new AudioWorkletNode(ctx, 'onset-detector', { processorOptions: { sens, refr: 0.04 } });
    this.sink = ctx.createGain(); this.sink.gain.value = 0;
    this.src.connect(h1); h1.connect(h2); h2.connect(this.node); this.node.connect(this.sink); this.sink.connect(ctx.destination);
    this.filters = [h1, h2];
    this.node.port.onmessage = e => {
      const m = e.data;
      if (m.type === 'onset') { this.onsets.push(m.t); this.onOnset && this.onOnset(m); }
      else if (m.type === 'level') this.onLevel && this.onLevel(m.v, m.floor);
    };
    this.ready = true;
    return true;
  },
  close() {
    try { this.recorder && this.recorder.state !== 'inactive' && this.recorder.stop(); } catch {}
    try { this.stream && this.stream.getTracks().forEach(t => t.stop()); } catch {}
    try { this.src && this.src.disconnect(); this.filters.forEach(f => f.disconnect()); this.node && this.node.disconnect(); this.sink && this.sink.disconnect(); } catch {}
    this.ready = false; this.stream = null; this.recorder = null;
  },
  setSens(s) { this.node && this.node.port.postMessage({ sens: s }); },
  setRefr(sec) { this.node && this.node.port.postMessage({ refr: sec }); },

  startTake(record) {
    this.onsets = []; this.chunks = [];
    if (record && window.MediaRecorder && this.stream) {
      const types = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/aac'];
      this.mime = types.find(t => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t)) || '';
      try {
        this.recorder = new MediaRecorder(this.stream, this.mime ? { mimeType: this.mime } : undefined);
        this.recorder.ondataavailable = e => { if (e.data && e.data.size) this.chunks.push(e.data); };
        this.recorder.start(1000);
      } catch { this.recorder = null; }
    }
  },
  stopTake() {
    const onsets = this.onsets.slice();
    const rec = this.recorder;
    const blob = new Promise(res => {
      if (!rec || rec.state === 'inactive') return res(null);
      rec.onstop = () => res(this.chunks.length ? new Blob(this.chunks, { type: rec.mimeType || this.mime || 'audio/webm' }) : null);
      try { rec.stop(); } catch { res(null); }
    });
    this.recorder = null;
    return { onsets, blob };
  }
};

// Latência estimada quando ainda não há calibração.
export function guessLatency() { return AudioEng.outLatency() + 0.012; }

/*
  expected: [{ t, pos, s }] horários (no relógio do áudio) em que cada nota deveria soar
  onsets:   [t] horários detectados no microfone
  latency:  ida e volta (alto-falante + microfone), em segundos
*/
export function analyze(expected, onsets, latency) {
  if (!expected.length || onsets.length < 4) return null;
  const E = expected.map(e => ({ ...e, ta: e.t + latency })).sort((a, b) => a.ta - b.ta);
  const O = onsets.slice().sort((a, b) => a - b);
  const win = i => {
    const prev = i > 0 ? E[i].ta - E[i - 1].ta : 1, next = i < E.length - 1 ? E[i + 1].ta - E[i].ta : 1;
    return Math.min(0.12, 0.45 * Math.min(prev, next));
  };
  const first = O[0], last = O[O.length - 1];
  const used = new Array(O.length).fill(false);
  const matched = []; let misses = 0, considered = 0;
  let k = 0;
  for (let i = 0; i < E.length; i++) {
    const e = E[i], w = win(i);
    if (e.ta < first - w || e.ta > last + w) continue;
    considered++;
    while (k < O.length && O[k] < e.ta - w) k++;
    let best = -1, bd = 1e9;
    for (let j = k; j < O.length && O[j] <= e.ta + w; j++) { if (used[j]) continue; const d = Math.abs(O[j] - e.ta); if (d < bd) { bd = d; best = j; } }
    if (best >= 0) { used[best] = true; matched.push({ dev: (O[best] - e.ta) * 1000, pos: e.pos, s: e.s, t: e.ta }); }
    else misses++;
  }
  const inRange = O.filter(t => t >= first && t <= last).length;
  const extras = Math.max(0, inRange - matched.length);
  if (matched.length < 4) return null;
  const devs = matched.map(m => m.dev), abs = devs.map(Math.abs);
  const meanDev = mean(devs), sdDev = sd(devs), meanAbs = mean(abs);
  const within15 = abs.filter(a => a <= 15).length / abs.length, within30 = abs.filter(a => a <= 30).length / abs.length;
  const missRate = considered ? misses / considered : 0, extraRate = matched.length ? extras / (matched.length + extras) : 0;
  const score = Math.round(clamp(100 - 1.6 * meanAbs - 60 * missRate - 25 * extraRate, 0, 100));
  const groups = {};
  for (const m of matched) { const key = m.s + ':' + m.pos; (groups[key] || (groups[key] = { s: m.s, pos: m.pos, d: [] })).d.push(m.dev); }
  const pos = Object.values(groups).filter(g => g.d.length >= 3).map(g => ({ s: g.s, pos: g.pos, n: g.d.length, mean: Math.round(mean(g.d) * 10) / 10, sd: Math.round(sd(g.d) * 10) / 10 }))
    .sort((a, b) => a.s - b.s || a.pos - b.pos);
  const t0 = matched[0].t;
  return {
    n: matched.length, misses, extras, score,
    mean: Math.round(meanDev * 10) / 10, sd: Math.round(sdDev * 10) / 10, meanAbs: Math.round(meanAbs * 10) / 10,
    within15: Math.round(within15 * 100), within30: Math.round(within30 * 100), pos,
    series: matched.map(m => [Math.round((m.t - t0) * 100) / 100, Math.round(m.dev * 10) / 10])
  };
}

// Calibração automática: o alto-falante toca 8 estalos e o microfone mede quanto demoram para voltar.
export async function calibrateAuto() {
  const ctx = AudioEng.ensure();
  Listen.onsets = [];
  const t0 = ctx.currentTime + 0.6, times = [];
  for (let i = 0; i < 8; i++) { const t = t0 + i * 0.5; times.push(t); AudioEng.burst(t); }
  await new Promise(r => setTimeout(r, (0.6 + 8 * 0.5 + 0.6) * 1000));
  const offs = [];
  for (const t of times) { const o = Listen.onsets.find(x => x >= t && x <= t + 0.35); if (o != null) offs.push(o - t); }
  if (offs.length < 5) return { ok: false, reason: 'O microfone não ouviu os estalos. Use o alto-falante (sem fone), aumente o volume ou a sensibilidade e tente de novo.' };
  const lat = median(offs), spread = sd(offs) * 1000;
  if (spread > 10) return { ok: false, reason: 'As medidas variaram demais. Deixe o ambiente em silêncio e tente de novo.' };
  return { ok: true, latency: lat, method: 'auto', spread: Math.round(spread * 10) / 10 };
}
// Calibração tocando junto: útil com fone de ouvido. Toque 16 vezes junto com o clique.
export function tapCalibrationTimes(ctx, bpm = 90, n = 16) {
  const t0 = ctx.currentTime + 0.8, step = 60 / bpm, times = [];
  for (let i = 0; i < n; i++) { const t = t0 + i * step; times.push(t); AudioEng.click(t, i % 4 === 0 ? 'acc' : 'beat', true); }
  return times;
}
export function finishTapCalibration(times) {
  const offs = [];
  for (const t of times.slice(4)) {
    const cands = Listen.onsets.filter(x => x > t - 0.15 && x < t + 0.45);
    if (cands.length) offs.push(cands.reduce((a, b) => Math.abs(b - t - 0.08) < Math.abs(a - t - 0.08) ? b : a) - t);
  }
  if (offs.length < 8) return { ok: false, reason: 'Poucas batidas detectadas. Toque mais forte no pad ou aumente a sensibilidade.' };
  const lat = median(offs), spread = sd(offs) * 1000;
  if (spread > 30) return { ok: false, reason: 'As batidas ficaram muito irregulares. Toque bem junto com o clique e repita.' };
  return { ok: true, latency: lat, method: 'tap', spread: Math.round(spread * 10) / 10 };
}
