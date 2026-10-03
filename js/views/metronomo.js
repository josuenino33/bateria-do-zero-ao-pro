// Tela: Metrônomo livre.
import { registerView, registerActions, renderTab, playIcon, el, ui } from '../ui.js';
import { Store, saveSettings, addLog } from '../store.js';
import { normBar } from '../curriculum/schema.js';
import { AudioEng, Engine } from '../audio.js';
import { clamp, fmtClock, dkey, toast, LS, $$ } from '../util.js';

const MT = {
  bpm: LS.get('mBpm', 90), beats: LS.get('mBeats', 4), unit: LS.get('mUnit', 4), sub: LS.get('mSub', 1), click: LS.get('mClick', 'sub'), accent: LS.get('mAcc', true),
  trainer: { on: false, step: 4, every: 4, max: 140 }, gap: { on: false, play: 2, mute: 2 }, taps: [], elapsed: 0, t0: 0, tick: 0, minDirty: false
};
const METERS = [[2, 4], [3, 4], [4, 4], [5, 4], [6, 8], [7, 8], [9, 8], [12, 8]];
const accFor = (b, u) => u === 8 ? ({ 6: [0, 3], 7: [0, 2, 4], 9: [0, 2, 4, 6], 12: [0, 3, 6, 9] }[b] || [0]) : b === 5 ? [0, 3] : [0];
const prog = () => ({ bars: [normBar({ s: MT.sub, b: MT.beats, unit: MT.unit, acc: accFor(MT.beats, MT.unit), sn: '-'.repeat(MT.sub * MT.beats) }).bar] });
const mElapsed = () => MT.elapsed + (MT.t0 ? (performance.now() - MT.t0) / 1000 : 0);
export const metroActive = () => ui.tab === 'metronomo' && !ui.practiceOpen;

function render(v) {
  const on = Engine.playing && Engine.owner === 'metro';
  v.innerHTML = `
  <div class="stack8"><div class="eyebrow">Ferramenta</div><h1 class="h-page">Metrônomo</h1>
  <p class="lead">Para estudar músicas, criar viradas ou treinar qualquer coisa fora da trilha. A barra de espaço toca e para.</p></div>
  <div class="metro">
    <div class="card big">
      <div class="bpm" id="mBpm">${MT.bpm}<small>BPM${MT.unit === 8 ? ' (colcheia)' : ''}</small></div>
      <div class="bpmctl"><button class="iconbtn" data-act="mB" data-d="-5">−5</button><button class="iconbtn" data-act="mB" data-d="-1">−1</button>
        <button class="play ${on ? 'on' : ''}" id="mPlay" data-act="mPlay" aria-label="Tocar ou parar">${playIcon(on)}</button>
        <button class="iconbtn" data-act="mB" data-d="1">+1</button><button class="iconbtn" data-act="mB" data-d="5">+5</button></div>
      <input type="range" id="mRange" min="30" max="300" value="${MT.bpm}" aria-label="Andamento" class="maxw420">
      <div class="biglights" id="mLights"></div>
      <div class="row center"><button class="btn" data-act="mTap">Tap tempo</button><span class="small muted">Toque no ritmo da música 4 vezes</span></div>
    </div>
    <div class="stack22">
      <div class="card stack14">
        <h3>Configuração</h3>
        <div class="stack6"><span class="flabel">Compasso</span>
          <div class="seg">${METERS.map(([b, u]) => `<button data-act="mMeter" data-b="${b}" data-u="${u}" aria-pressed="${MT.beats === b && MT.unit === u}">${b}/${u}</button>`).join('')}</div></div>
        <div class="stack6"><span class="flabel">Subdivisão</span>
          <div class="seg">${[[1, 'Nenhuma'], [2, 'Colcheia'], [3, 'Tercina'], [4, 'Semicolcheia'], [5, 'Quintina'], [6, 'Sextina'], [8, 'Fusa']].map(([x, l]) => `<button data-act="mSub" data-v="${x}" aria-pressed="${MT.sub === x}">${l}</button>`).join('')}</div></div>
        <div class="row gap18">
          <label class="f grow">Clique<select id="mClick"><option value="beat">Nos tempos</option><option value="sub">Em todas as subdivisões</option><option value="backbeat">Só no 2 e 4</option><option value="offbeat">No contratempo</option><option value="one">Só no 1</option></select></label>
          <label class="switch"><input type="checkbox" id="mAcc" ${MT.accent ? 'checked' : ''}>Acentuar o 1</label>
        </div>
        <label class="vol">Volume<input type="range" id="mVol" min="0" max="1" step="0.05" value="${Store.settings.clickVol}"></label>
      </div>
      <div class="card stack12">
        <h3>Acelerador e clique que some</h3>
        <label class="switch"><input type="checkbox" id="mtOn" ${MT.trainer.on ? 'checked' : ''}>Subir o andamento sozinho</label>
        <div class="trainer"><label class="f">Subir<input type="number" id="mtStep" min="1" max="20" value="${MT.trainer.step}"></label>
          <label class="f">A cada (compassos)<input type="number" id="mtEvery" min="1" max="64" value="${MT.trainer.every}"></label>
          <label class="f">Até (bpm)<input type="number" id="mtMax" min="30" max="300" value="${MT.trainer.max}"></label></div>
        <label class="switch"><input type="checkbox" id="mgOn" ${MT.gap.on ? 'checked' : ''}>Clique que some</label>
        <div class="trainer two"><label class="f">Compassos com clique<input type="number" id="mgPlay" min="1" max="16" value="${MT.gap.play}"></label>
          <label class="f">Compassos sem clique<input type="number" id="mgMute" min="1" max="16" value="${MT.gap.mute}"></label></div>
      </div>
      <div class="card stack12">
        <div class="row between"><h3>Treino livre</h3><span class="timer" id="mTimer">${fmtClock(mElapsed())}</span></div>
        <div class="regform rf2">
          <label class="f">BPM<input type="number" id="mrBpm" min="20" max="320" value="${MT.bpm}"></label>
          <label class="f">Minutos<input type="number" id="mrMin" min="1" max="240" value="${Math.max(1, Math.round(mElapsed() / 60))}"></label>
          <label class="f wide">O que você estudou<input type="text" id="mrNote" maxlength="200" placeholder="Ex.: música Back in Black"></label>
        </div>
        <div class="row"><button class="btn" data-act="mSave">Registrar treino livre</button><button class="btn ghost sm" data-act="mTimerReset">Zerar tempo</button></div>
      </div>
    </div>
  </div>`;
  el('mClick').value = MT.click;
  lights();
  el('mRange').addEventListener('input', ev => setBpm(+ev.target.value));
  el('mClick').addEventListener('change', ev => { MT.click = ev.target.value; LS.set('mClick', MT.click); if (Engine.owner === 'metro') Engine.setOpt('click', MT.click); });
  el('mAcc').addEventListener('change', ev => { MT.accent = ev.target.checked; LS.set('mAcc', MT.accent); if (Engine.owner === 'metro') Engine.setOpt('accentOne', MT.accent); lights(); });
  el('mVol').addEventListener('input', ev => { AudioEng.setVol('clickVol', +ev.target.value); saveSettings({ clickVol: +ev.target.value }, true); });
  const tr = () => { MT.trainer = { on: el('mtOn').checked, step: clamp(+el('mtStep').value || 4, 1, 20), every: clamp(+el('mtEvery').value || 4, 1, 64), max: clamp(+el('mtMax').value || 140, 30, 300) }; if (Engine.owner === 'metro') Engine.setOpt('trainer', { ...MT.trainer }); };
  ['mtOn', 'mtStep', 'mtEvery', 'mtMax'].forEach(id => el(id).addEventListener('change', tr));
  const gp = () => { MT.gap = { on: el('mgOn').checked, play: clamp(+el('mgPlay').value || 2, 1, 16), mute: clamp(+el('mgMute').value || 2, 1, 16) }; if (Engine.owner === 'metro') Engine.setOpt('gap', { ...MT.gap }); };
  ['mgOn', 'mgPlay', 'mgMute'].forEach(id => el(id).addEventListener('change', gp));
  el('mrMin').addEventListener('input', () => { MT.minDirty = true; });
}
function lights() {
  const l = el('mLights'); if (!l) return;
  const acc = accFor(MT.beats, MT.unit);
  l.innerHTML = Array.from({ length: MT.beats }, (_, i) => `<div class="bt ${MT.accent && acc.includes(i) ? 'a' : ''}"><i></i><div class="subs">${MT.sub > 1 ? '<u></u>'.repeat(MT.sub) : ''}</div></div>`).join('');
}
function setBpm(x) {
  MT.bpm = clamp(Math.round(x), 30, 300); LS.set('mBpm', MT.bpm);
  const b = el('mBpm'); if (b) b.firstChild.nodeValue = MT.bpm;
  const r = el('mRange'); if (r && +r.value !== MT.bpm) r.value = MT.bpm;
  const rb = el('mrBpm'); if (rb) rb.value = MT.bpm;
  if (Engine.owner === 'metro') Engine.setBpm(MT.bpm);
}
export function metroToggle() {
  if (Engine.playing && Engine.owner === 'metro') { Engine.stop(); return; }
  AudioEng.setVol('clickVol', Store.settings.clickVol);
  Engine.start(prog(), { bpm: MT.bpm, sound: false, click: MT.click, countIn: false, trainer: { ...MT.trainer }, gap: { ...MT.gap }, accentOne: MT.accent }, 'metro');
}
export const metroBpm = d => setBpm(MT.bpm + d);
const restart = () => { if (Engine.playing && Engine.owner === 'metro') { Engine.stop(); metroToggle(); } };

Engine.on(ev => {
  if (!(ev.owner === 'metro' || Engine.owner === 'metro')) return;
  if (ev.type === 'start') {
    const b = el('mPlay'); if (b) { b.classList.add('on'); b.innerHTML = playIcon(true); }
    MT.t0 = performance.now(); clearInterval(MT.tick);
    MT.tick = setInterval(() => { const t = el('mTimer'); if (t) t.textContent = fmtClock(mElapsed()); const m = el('mrMin'); if (m && !MT.minDirty) m.value = Math.max(1, Math.round(mElapsed() / 60)); }, 500);
  }
  if (ev.type === 'stop') {
    const b = el('mPlay'); if (b) { b.classList.remove('on'); b.innerHTML = playIcon(false); }
    if (MT.t0) { MT.elapsed += (performance.now() - MT.t0) / 1000; MT.t0 = 0; } clearInterval(MT.tick);
    $$('#mLights .on').forEach(x => x.classList.remove('on'));
  }
  if (ev.type === 'bpm') setBpm(ev.bpm);
  if (ev.type === 'step') {
    const bts = $$('#mLights .bt'); if (!bts.length) return;
    bts.forEach((b, k) => b.classList.toggle('on', k === ev.beat && !ev.muted));
    $$('#mLights u.on').forEach(u => u.classList.remove('on'));
    if (!ev.muted && bts[ev.beat]) { const u = $$('u', bts[ev.beat])[ev.step % ev.sub]; u && u.classList.add('on'); }
  }
});

registerView('metronomo', render);
registerActions({
  mPlay: () => metroToggle(),
  mB: a => setBpm(MT.bpm + Number(a.dataset.d)),
  mMeter: a => { MT.beats = +a.dataset.b; MT.unit = +a.dataset.u; LS.set('mBeats', MT.beats); LS.set('mUnit', MT.unit); renderTab(); restart(); },
  mSub: a => { MT.sub = +a.dataset.v; LS.set('mSub', MT.sub); renderTab(); restart(); },
  mTap: () => { const now = performance.now(); MT.taps = MT.taps.filter(t => now - t < 2500); MT.taps.push(now); if (MT.taps.length >= 2) { const iv = []; for (let i = 1; i < MT.taps.length; i++) iv.push(MT.taps[i] - MT.taps[i - 1]); setBpm(60000 / (iv.reduce((a, b) => a + b, 0) / iv.length)); } },
  mTimerReset: () => { MT.elapsed = 0; if (MT.t0) MT.t0 = performance.now(); MT.minDirty = false; const t = el('mTimer'); if (t) t.textContent = fmtClock(0); },
  mSave: async () => {
    const bpm = clamp(Math.round(+el('mrBpm').value || MT.bpm), 20, 320), min = clamp(Math.round(+el('mrMin').value || 1), 1, 240), note = (el('mrNote').value || '').trim().slice(0, 200);
    const now = new Date(), entry = { t: now.toISOString(), d: dkey(now), ex: 'livre', name: 'Treino livre', bpm, q: 3, min };
    if (note) entry.note = note;
    await addLog(entry); toast('Treino livre registrado.');
    MT.elapsed = 0; if (MT.t0) MT.t0 = performance.now(); MT.minDirty = false; el('mrNote').value = '';
  }
});
