// Detector de ataques (onsets) que roda na thread de áudio.
// Recebe o sinal do microfone já filtrado (agudos) e avisa o horário exato de cada batida.
class OnsetDetector extends AudioWorkletProcessor {
  constructor(options) {
    super();
    const o = (options && options.processorOptions) || {};
    this.setSens(o.sens ?? 0.5);
    this.refr = Math.round((o.refr ?? 0.04) * sampleRate);
    this.fast = 0; this.slow = 0.001; this.armed = true; this.since = 1e9;
    this.relFast = Math.exp(-1 / (0.004 * sampleRate));   // 4 ms
    this.coefSlow = 1 / (0.25 * sampleRate);              // 250 ms
    this.peak = 0; this.peakT = 0; this.level = 0; this.levelN = 0;
    this.port.onmessage = e => {
      if (e.data.sens != null) this.setSens(e.data.sens);
      if (e.data.refr != null) this.refr = Math.round(e.data.refr * sampleRate);
    };
  }
  setSens(s) {
    s = Math.max(0, Math.min(1, s));
    this.ratio = 6 - s * 4.2;          // quanto acima do ruído de fundo
    this.absMin = 0.03 - s * 0.027;    // nível mínimo absoluto
  }
  process(inputs) {
    const ch = inputs[0] && inputs[0][0];
    if (!ch) return true;
    for (let i = 0; i < ch.length; i++) {
      const v = Math.abs(ch[i]);
      this.fast = v > this.fast ? v : this.fast * this.relFast;
      const thr = Math.max(this.slow * this.ratio, this.absMin);
      this.since++;
      if (this.armed && this.fast > thr && this.since > this.refr) {
        this.port.postMessage({ type: 'onset', t: (currentFrame + i) / sampleRate, peak: this.fast });
        this.armed = false; this.since = 0;
      } else if (!this.armed && this.fast < thr * 0.6) this.armed = true;
      // o ruído de fundo sobe devagar e não acompanha as batidas
      this.slow += (Math.min(this.fast, this.slow * 3 + 0.0005) - this.slow) * this.coefSlow;
      if (this.fast > this.level) this.level = this.fast;
    }
    if (++this.levelN >= 16) { this.port.postMessage({ type: 'level', v: this.level, floor: this.slow }); this.level = 0; this.levelN = 0; }
    return true;
  }
}
registerProcessor('onset-detector', OnsetDetector);
