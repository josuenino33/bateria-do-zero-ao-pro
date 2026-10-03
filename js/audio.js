// Áudio: bateria sintetizada, clique e o motor de tempo com agendamento antecipado.
import { toast } from './util.js';

export const AudioEng = (() => {
  let ctx = null, master, patBus, clickBus, noiseBuf, keepEl = null;
  const vols = { patVol: 0.8, clickVol: 0.8 };

  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC({ latencyHint: 'interactive' });
      const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -12; comp.ratio.value = 4; comp.connect(ctx.destination);
      master = ctx.createGain(); master.gain.value = 0.9; master.connect(comp);
      patBus = ctx.createGain(); patBus.gain.value = vols.patVol; patBus.connect(master);
      clickBus = ctx.createGain(); clickBus.gain.value = vols.clickVol; clickBus.connect(master);
      const len = Math.floor(ctx.sampleRate * 1.6);
      noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0); for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function env(g, t, peak, decay, attack = 0.002) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(peak, 0.0002), t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
  }
  function noise(t, filters, peak, decay, bus) {
    const src = ctx.createBufferSource(); src.buffer = noiseBuf; let node = src;
    for (const [type, freq, q] of filters) { const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; if (q) f.Q.value = q; node.connect(f); node = f; }
    const g = ctx.createGain(); env(g, t, peak, decay); node.connect(g); g.connect(bus);
    src.start(t, Math.random() * 0.4); src.stop(t + decay + 0.06);
  }
  function tone(t, f0, f1, sweep, peak, decay, type, bus, attack) {
    const o = ctx.createOscillator(); o.type = type || 'sine';
    o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + sweep);
    const g = ctx.createGain(); env(g, t, peak, decay, attack); o.connect(g); g.connect(bus);
    o.start(t); o.stop(t + (attack || 0.002) + decay + 0.06);
  }
  const V = {
    kd: (t, v) => { tone(t, 150, 46, 0.11, v, 0.38, 'sine', patBus); noise(t, [['lowpass', 3000]], v * 0.15, 0.012, patBus); },
    ke: (t, v) => { tone(t, 144, 45, 0.11, v * 0.97, 0.36, 'sine', patBus); noise(t, [['lowpass', 3000]], v * 0.15, 0.012, patBus); },
    sn: (t, v) => { noise(t, [['highpass', 1300], ['lowpass', 9000]], v * 0.75, 0.16, patBus); tone(t, 230, 175, 0.04, v * 0.45, 0.09, 'triangle', patBus); },
    cs: (t, v) => { noise(t, [['bandpass', 1900, 4]], v * 0.9, 0.04, patBus); tone(t, 520, 480, 0.02, v * 0.35, 0.05, 'triangle', patBus); },
    t1: (t, v) => tone(t, 310, 215, 0.06, v * 0.85, 0.34, 'sine', patBus),
    t2: (t, v) => tone(t, 240, 165, 0.06, v * 0.85, 0.38, 'sine', patBus),
    ft: (t, v) => tone(t, 165, 104, 0.07, v * 0.95, 0.46, 'sine', patBus),
    hh: (t, v, open) => noise(t, [['highpass', 7200], ['bandpass', 10000, 0.6]], v * 0.5, open ? 0.32 : 0.045, patBus),
    hp: (t, v) => noise(t, [['highpass', 6000]], v * 0.3, 0.035, patBus),
    rd: (t, v) => { noise(t, [['bandpass', 5200, 1.2]], v * 0.2, 0.45, patBus); tone(t, 3400, 3300, 0.3, v * 0.05, 0.4, 'sine', patBus); },
    rb: (t, v) => { tone(t, 2450, 2440, 0.3, v * 0.22, 0.7, 'sine', patBus); tone(t, 3710, 3700, 0.3, v * 0.12, 0.5, 'sine', patBus); noise(t, [['highpass', 6000]], v * 0.06, 0.08, patBus); },
    cr: (t, v) => noise(t, [['highpass', 3400]], v * 0.42, 1.3, patBus)
  };
  const VEL = { X: 1, x: 0.68, g: 0.2, f: 0.8, d: 0.8, z: 0.55, o: 0.7 };
  // dur = duração do passo (para o buzz)
  function hit(inst, t, ch, dur = 0.1) {
    if (!ctx || !V[inst]) return;
    const v = VEL[ch] ?? 0.68, now = ctx.currentTime;
    if (ch === 'f') { V[inst](Math.max(now, t - 0.026), 0.22); V[inst](t, v); return; }
    if (ch === 'd') { V[inst](Math.max(now, t - 0.06), 0.2); V[inst](Math.max(now, t - 0.035), 0.2); V[inst](t, v); return; }
    if (ch === 'z') { const n = Math.max(3, Math.round(dur * 0.8 / 0.022)); for (let i = 0; i < n; i++) V[inst](t + i * 0.022, v * (i ? 0.32 : 1)); return; }
    V[inst](t, v, ch === 'o');
  }
  // soft = clique de ataque suave e grave, para não confundir o microfone
  function click(t, kind, soft) {
    if (!ctx) return;
    const f = soft ? (kind === 'acc' ? 900 : kind === 'beat' ? 700 : 550) : (kind === 'acc' ? 1950 : kind === 'beat' ? 1400 : 980);
    const p = kind === 'sub' ? 0.32 : kind === 'acc' ? 0.95 : 0.72;
    tone(t, f, f * 0.98, 0.02, p, soft ? 0.05 : 0.032, 'sine', clickBus, soft ? 0.004 : 0.002);
  }
  function burst(t) { if (!ctx) return; noise(t, [['highpass', 2000]], 0.9, 0.025, clickBus); }
  function chime() { if (!ctx) return; const t = ctx.currentTime + 0.02; tone(t, 880, 880, 0.1, 0.4, 0.5, 'sine', clickBus); tone(t + 0.16, 1320, 1320, 0.1, 0.35, 0.7, 'sine', clickBus); }
  function setVol(which, v) { vols[which] = v; if (!ctx) return; (which === 'patVol' ? patBus : clickBus).gain.value = v; }
  function outLatency() { if (!ctx) return 0; return (ctx.outputLatency || 0) + (ctx.baseLatency || 0); }

  // iPhone: um áudio HTML silencioso em loop faz o som sair mesmo com a chave de silencioso ligada.
  function silentWav() {
    const n = 4000, buf = new Uint8Array(44 + n), dv = new DataView(buf.buffer);
    const w = (o, s) => { for (let i = 0; i < s.length; i++) buf[o + i] = s.charCodeAt(i); };
    w(0, 'RIFF'); dv.setUint32(4, 36 + n, true); w(8, 'WAVE'); w(12, 'fmt '); dv.setUint32(16, 16, true); dv.setUint16(20, 1, true); dv.setUint16(22, 1, true);
    dv.setUint32(24, 8000, true); dv.setUint32(28, 8000, true); dv.setUint16(32, 1, true); dv.setUint16(34, 8, true); w(36, 'data'); dv.setUint32(40, n, true); buf.fill(128, 44);
    let bin = ''; for (let i = 0; i < buf.length; i++) bin += String.fromCharCode(buf[i]);
    return 'data:audio/wav;base64,' + btoa(bin);
  }
  function keepAlive(on) {
    try {
      if (on) {
        try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch {}
        if (!keepEl) { keepEl = new Audio(silentWav()); keepEl.loop = true; keepEl.setAttribute('playsinline', ''); }
        const p = keepEl.play(); if (p && p.catch) p.catch(() => {});
      } else if (keepEl) keepEl.pause();
    } catch {}
  }
  return { ensure, hit, click, burst, chime, setVol, outLatency, keepAlive, get ctx() { return ctx; } };
})();

// Motor de tempo. prog = { bars: [compasso normalizado] }.
// opts: bpm, sound, click, countIn, accentOne, trainer {on, step, every, max}, gap {on, play, mute}, softClick
export const Engine = (() => {
  let prog = null, o = null, playing = false, timer = 0, raf = 0, nextT = 0, bar = 0, step = 0, inCount = false, barsPlayed = 0, bpm = 80, queue = [], wake = null, owner = null;
  let sink = null; // recebe {kind:'note'|'click', t, ...} para o microfone
  const subs = new Set();
  const emit = ev => subs.forEach(fn => { try { fn(ev); } catch (e) { console.error(e); } });
  function cur() { if (inCount) { const f = prog.bars[0]; return { s: 1, b: f.b, n: f.b, acc: f.acc, unit: f.unit, tracks: {} }; } return prog.bars[bar]; }
  function clicks(B, t, beatNo) {
    const mode = inCount ? 'beat' : o.click, soft = !!o.softClick;
    const beatDur = 60 / bpm, accent = (o.accentOne !== false) && (B.acc || [0]).includes(beatNo);
    const c = (tt, kind) => { AudioEng.click(tt, kind, soft); if (sink) sink({ kind: 'click', t: tt }); };
    if (mode === 'beat') c(t, accent ? 'acc' : 'beat');
    else if (mode === 'sub') { c(t, accent ? 'acc' : 'beat'); for (let k = 1; k < B.s; k++) c(t + k * beatDur / B.s, 'sub'); }
    else if (mode === 'backbeat') { if (beatNo % 2 === 1) c(t, 'beat'); }
    else if (mode === 'offbeat') c(t + beatDur / 2, 'beat');
    else if (mode === 'one') { if (beatNo === 0) c(t, 'acc'); }
  }
  function schedule() {
    const B = cur(), t = nextT, s = B.s, beatStart = step % s === 0, beatNo = Math.floor(step / s);
    const g = o.gap && o.gap.on ? o.gap : null, cyc = g ? g.play + g.mute : 0;
    const muted = !inCount && cyc > 0 && (barsPlayed % cyc) >= g.play;
    if (beatStart && !muted) clicks(B, t, beatNo);
    if (!inCount) {
      let any = false;
      for (const k in B.tracks) {
        const ch = B.tracks[k][step];
        if (ch && ch !== '-') { any = true; if (o.sound && !muted) AudioEng.hit(k, t, ch, 60 / bpm / s); }
      }
      if (any && sink) sink({ kind: 'note', t, bar, step, pos: step % s, s });
    }
    queue.push({ t, bar: inCount ? -1 : bar, step, beat: beatNo, sub: s, beats: B.b, acc: B.acc, beatStart, muted, count: inCount });
  }
  function advance() {
    const B = cur();
    nextT += 60 / bpm / B.s;
    step++;
    if (step >= B.n) {
      step = 0;
      if (inCount) { inCount = false; bar = 0; return; }
      barsPlayed++;
      bar = (bar + 1) % prog.bars.length;
      const tr = o.trainer;
      if (tr && tr.on && barsPlayed % Math.max(1, tr.every) === 0 && bpm < tr.max) { bpm = Math.min(tr.max, bpm + tr.step); emit({ type: 'bpm', bpm }); }
    }
  }
  function tick() {
    const c = AudioEng.ctx; if (!c) return;
    while (nextT < c.currentTime + 0.12) { schedule(); advance(); }
    // com a tela apagada as animações param; descarta os passos que já passaram para a fila não crescer
    if (document.hidden && queue.length > 256) queue = queue.filter(q => q.t > c.currentTime);
  }
  function draw() { const c = AudioEng.ctx; while (queue.length && queue[0].t <= c.currentTime) emit({ type: 'step', ...queue.shift() }); if (playing) raf = requestAnimationFrame(draw); }
  async function reqWake() { try { wake = await navigator.wakeLock?.request('screen'); } catch { wake = null; } }
  function start(p, opts, who) {
    const c = AudioEng.ensure(); if (!c) { toast('Este navegador não tem suporte a áudio.'); return false; }
    if (playing) stop();
    prog = p; o = opts; owner = who; bpm = opts.bpm; bar = 0; step = 0; barsPlayed = 0; inCount = !!opts.countIn; queue = [];
    nextT = c.currentTime + 0.1; playing = true;
    AudioEng.keepAlive(true);
    timer = setInterval(tick, 25); tick(); raf = requestAnimationFrame(draw); reqWake();
    emit({ type: 'start', owner });
    return true;
  }
  function stop() {
    if (!playing) return;
    playing = false; clearInterval(timer); cancelAnimationFrame(raf); queue = [];
    AudioEng.keepAlive(false);
    try { wake?.release(); } catch {} wake = null;
    emit({ type: 'stop', owner });
  }
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && playing) reqWake(); });
  return {
    start, stop, on: fn => { subs.add(fn); return () => subs.delete(fn); },
    setBpm: v => { bpm = v; }, setOpt: (k, v) => { if (o) o[k] = v; }, setSink: fn => { sink = fn; },
    get playing() { return playing; }, get owner() { return owner; }, get bpm() { return bpm; }
  };
})();
