// Sala de treino: partitura que toca, metrônomo, professor que ouve e registro do treino.
import { ui, registerActions, renderTab, playIcon, el } from '../ui.js';
import { Store, saveSettings, addLog, addRec, recsAvailable, saveCalib } from '../store.js';
import { EX } from '../curriculum/index.js';
import { stats, suggestBpm, getPlan, QUAL, STATUS_LABEL } from '../stats.js';
import { AudioEng, Engine } from '../audio.js';
import { gridHTML, staffHTML, GRID_LEGEND, STAFF_LEGEND } from '../notation.js';
import { Listen, analyze, guessLatency, calibrateAuto, tapCalibrationTimes, finishTapCalibration } from '../listen.js';
import { timingVerdict } from '../teacher.js';
import { bpmChartSVG, timingSVG } from '../charts.js';
import { esc, clamp, fmtClock, dkey, toast, $, $$ } from '../util.js';

const PR = {
  ex: null, bpm: 80, click: 'beat', trainer: { on: false, step: 4, every: 4, max: 120 }, gapOn: false,
  elapsed: 0, t0: 0, tick: 0, q: 0, regDirty: false, minDirty: false, session: null, cells: [], lastOn: [], staff: null, blockAlerted: false,
  listen: false, record: true, expected: [], result: null, recBlob: null, recUrl: '', starting: false
};
export const isPracticeOpen = () => !!PR.ex && !el('sheet').hidden;

export function openPractice(exId, opts = {}) {
  const e = EX[exId]; if (!e) return;
  if (Engine.playing) Engine.stop();
  const st = stats();
  Object.assign(PR, {
    ex: e, session: opts.session || null, bpm: opts.bpm || suggestBpm(e, st), click: e.click || 'beat',
    trainer: { on: false, step: 4, every: 4, max: e.bpm[1] }, gapOn: !!e.gap, elapsed: 0, t0: 0, q: 0,
    regDirty: false, minDirty: false, blockAlerted: false, result: null, recBlob: null, view: null
  });
  if (PR.recUrl) { URL.revokeObjectURL(PR.recUrl); PR.recUrl = ''; }
  render();
  el('sheet').hidden = false; ui.practiceOpen = true;
  document.body.classList.add('noscroll');
  el('panel').scrollTop = 0;
  setTimeout(() => el('pPlay')?.focus({ preventScroll: true }), 30);
}
export function closePractice() {
  if (Engine.playing && Engine.owner === 'practice') Engine.stop();
  el('sheet').hidden = true; ui.practiceOpen = false; document.body.classList.remove('noscroll');
  PR.ex = null; PR.session = null; clearInterval(PR.tick);
  if (Listen.ready) Listen.close();
  renderTab();
}
export function openBlock(i) {
  const plan = getPlan(false), b = plan.blocks[i]; if (!b) return;
  openPractice(b.ex, { session: { idx: i, min: b.min, kind: b.kind }, bpm: b.bpm });
}

// Exercícios de leitura abrem na partitura; os outros seguem a preferência salva.
const useStaff = () => (PR.view || (PR.ex && PR.ex.staff ? 'staff' : Store.settings.notation)) === 'staff';

function scoreBlock() {
  const e = PR.ex;
  if (useStaff()) { PR.staff = staffHTML(e); return PR.staff.html + STAFF_LEGEND; }
  PR.staff = null; return gridHTML(e) + GRID_LEGEND;
}

function render() {
  const e = PR.ex, plan = getPlan(false), sess = PR.session, S = Store.settings;
  const micOk = Listen.supported();
  el('panel').innerHTML = `
  <div class="ph">
    <div class="minw"><div class="crumb">${esc(e.module.name)} · Lição ${e.lesson.idx}: ${esc(e.lesson.name)}</div><h2 id="pTitle">${esc(e.name)}</h2></div>
    <button class="iconbtn x" data-act="closePractice" aria-label="Fechar">✕</button>
  </div>
  <div class="pb">
    ${sess ? `<div class="sessbar"><span>Aula de hoje · bloco ${sess.idx + 1} de ${plan.blocks.length} · ${sess.kind}</span><span id="pRemain" class="mono">${sess.min}:00 restantes</span><span class="sp"></span>${sess.idx + 1 < plan.blocks.length ? `<button class="btn sm" data-act="nextBlock">Próximo bloco</button>` : `<button class="btn sm" data-act="closePractice">Encerrar aula</button>`}</div>` : ''}
    <div class="howto"><p>${esc(e.desc)}</p>${e.endurance ? `<p><b>Meta:</b> ${e.endurance} minutos sem parar a ${e.bpm[1]} bpm, relaxado.</p>` : ''}
      <p class="small muted">Dica: ${esc(e.lesson.tips[0] || '')}</p></div>
    <div class="row between"><div class="seg" role="group" aria-label="Visualização">
      <button data-act="pView" data-v="grid" aria-pressed="${!useStaff()}">Grade</button><button data-act="pView" data-v="staff" aria-pressed="${useStaff()}">Partitura</button></div>
      <span class="small muted">${e.bars.length} ${e.bars.length === 1 ? 'compasso' : 'compassos'} em loop</span></div>
    <div class="score" id="pScore">${scoreBlock()}</div>
    <div class="card transport">
      <div class="bpmbox">
        <div class="bpm" id="pBpm">${PR.bpm}<small>BPM</small></div>
        <div class="bpmctl"><button class="iconbtn" data-act="pB" data-d="-5" aria-label="Menos 5">−5</button><button class="iconbtn" data-act="pB" data-d="-1" aria-label="Menos 1">−1</button>
          <button class="play" id="pPlay" data-act="pPlay" aria-label="Tocar ou parar">${playIcon(false)}</button>
          <button class="iconbtn" data-act="pB" data-d="1" aria-label="Mais 1">+1</button><button class="iconbtn" data-act="pB" data-d="5" aria-label="Mais 5">+5</button></div>
        <div class="lights" id="pLights"></div>
      </div>
      <div class="stack16 minw">
        <input type="range" id="pRange" min="30" max="300" value="${PR.bpm}" aria-label="Andamento">
        <div class="ctlgrid">
          <label class="switch"><input type="checkbox" id="pSound" ${S.sound ? 'checked' : ''} ${PR.listen ? 'disabled' : ''}>Ouvir a bateria</label>
          <label class="switch"><input type="checkbox" id="pCount" ${S.countIn ? 'checked' : ''}>Contagem de 1 compasso</label>
          <label class="f">Clique<select id="pClick"><option value="beat">Nos tempos</option><option value="sub">Em todas as subdivisões</option><option value="backbeat">Só no 2 e 4</option><option value="offbeat">No contratempo</option><option value="one">Só no 1</option><option value="off">Desligado</option></select></label>
          ${e.gap ? `<label class="switch"><input type="checkbox" id="pGap" ${PR.gapOn ? 'checked' : ''}>Clique some (${e.gap.play} com, ${e.gap.mute} sem)</label>` : ''}
        </div>
        <details class="th"><summary>Acelerador automático</summary>
          <div class="stack10"><label class="switch"><input type="checkbox" id="tOn" ${PR.trainer.on ? 'checked' : ''}>Subir o andamento sozinho</label>
            <div class="trainer"><label class="f">Subir<input type="number" id="tStep" min="1" max="20" value="${PR.trainer.step}"></label>
              <label class="f">A cada (compassos)<input type="number" id="tEvery" min="1" max="64" value="${PR.trainer.every}"></label>
              <label class="f">Até (bpm)<input type="number" id="tMax" min="30" max="300" value="${PR.trainer.max}"></label></div></div>
        </details>
        <div class="row gap10"><span class="small muted">Volume</span>
          <label class="vol">Bateria<input type="range" id="vPat" min="0" max="1" step="0.05" value="${S.patVol}"></label>
          <label class="vol">Clique<input type="range" id="vClick" min="0" max="1" step="0.05" value="${S.clickVol}"></label></div>
      </div>
    </div>
    <div class="card mic">
      <div class="row between"><div><h3>Professor que ouve</h3><div class="sub">${micOk ? 'Mede pelo microfone se você está no tempo. Funciona melhor no pad ou na caixa.' : 'Este navegador não permite usar o microfone aqui. Abra o app pelo endereço https do GitHub Pages.'}</div></div>
        ${micOk ? `<label class="switch"><input type="checkbox" id="mOn" ${PR.listen ? 'checked' : ''}>Ouvir meu treino</label>` : ''}</div>
      <div id="micBody" ${PR.listen && micOk ? '' : 'hidden'}>
        <div class="row gap10">
          <div class="level" aria-hidden="true"><i id="mLvl"></i><b id="mHit"></b></div>
          <label class="vol grow">Sensibilidade<input type="range" id="mSens" min="0" max="1" step="0.05" value="${S.micSens}"></label>
          <label class="switch"><input type="checkbox" id="mRec" ${PR.record ? 'checked' : ''}>Gravar</label>
        </div>
        <p class="small muted" id="mCal">${Store.calib ? `Calibrado (${Math.round(Store.calib.latency * 1000)} ms, ${Store.calib.method === 'auto' ? 'alto-falante' : 'tocando junto'}).` : 'Ainda não calibrado: a medida pode ter um erro fixo de alguns milissegundos.'}
          <button class="btn ghost sm" data-act="calAuto">Calibrar pelo alto-falante</button><button class="btn ghost sm" data-act="calTap">Calibrar tocando</button></p>
        <p class="small muted">Com o microfone ligado, a bateria de exemplo fica muda e o clique fica mais grave para não confundir a medida. Use fone com fio se puder.</p>
      </div>
      <div id="micResult"></div>
    </div>
    <div id="pStats"></div>
    <div class="card stack14">
      <div class="row between"><div><h3>Registrar treino</h3><div class="sub">Anote o maior BPM em que você tocou limpo e como se sentiu.</div></div>
        <div class="row"><span class="timer" id="pTimer">${fmtClock(PR.elapsed)}</span><button class="btn ghost sm" data-act="pTimerReset">Zerar</button></div></div>
      <div class="stack8"><span class="flabel">Como foi?</span>
        <div class="qual" id="pQual">${[1, 2, 3, 4, 5].map(q => `<button data-act="pQ" data-q="${q}" aria-pressed="${PR.q === q}"><b>${q}</b>${QUAL[q]}</button>`).join('')}</div></div>
      <div class="regform">
        <label class="f">BPM limpo<input type="number" id="rBpm" min="20" max="320" value="${PR.bpm}"></label>
        <label class="f">Minutos<input type="number" id="rMin" min="1" max="240" value="${Math.max(1, Math.round(PR.elapsed / 60))}"></label>
        <label class="f wide">Observação (opcional)<input type="text" id="rNote" maxlength="200" placeholder="Ex.: esquerda atrasando no tempo 3"></label>
      </div>
      <div class="row"><button class="btn primary" data-act="pSave">Registrar</button><span class="small muted">Qualidade 4 ou 5 na meta de BPM marca o exercício como dominado.</span></div>
    </div>
  </div>`;
  el('pClick').value = PR.click;
  buildLights(e.bars[0].b); indexCells(); renderStats(); renderResult();
  el('pRange').addEventListener('input', ev => setPracticeBpm(Number(ev.target.value)));
  el('pSound').addEventListener('change', ev => { saveSettings({ sound: ev.target.checked }, true); Engine.setOpt('sound', ev.target.checked && !PR.listen); });
  el('pCount').addEventListener('change', ev => saveSettings({ countIn: ev.target.checked }, true));
  el('pClick').addEventListener('change', ev => { PR.click = ev.target.value; Engine.setOpt('click', PR.click); });
  el('pGap')?.addEventListener('change', ev => { PR.gapOn = ev.target.checked; Engine.setOpt('gap', gapOpt()); });
  const trSync = () => { PR.trainer = { on: el('tOn').checked, step: clamp(+el('tStep').value || 4, 1, 20), every: clamp(+el('tEvery').value || 4, 1, 64), max: clamp(+el('tMax').value || e.bpm[1], 30, 300) }; Engine.setOpt('trainer', { ...PR.trainer }); };
  ['tOn', 'tStep', 'tEvery', 'tMax'].forEach(id => el(id).addEventListener('change', trSync));
  el('vPat').addEventListener('input', ev => { AudioEng.setVol('patVol', +ev.target.value); saveSettings({ patVol: +ev.target.value }, true); });
  el('vClick').addEventListener('input', ev => { AudioEng.setVol('clickVol', +ev.target.value); saveSettings({ clickVol: +ev.target.value }, true); });
  el('rBpm').addEventListener('input', () => { PR.regDirty = true; });
  el('rMin').addEventListener('input', () => { PR.minDirty = true; });
  el('mOn')?.addEventListener('change', ev => toggleListen(ev.target.checked));
  el('mSens')?.addEventListener('input', ev => { Listen.setSens(+ev.target.value); saveSettings({ micSens: +ev.target.value }, true); });
  el('mRec')?.addEventListener('change', ev => { PR.record = ev.target.checked; });
}
const gapOpt = () => PR.ex && PR.ex.gap && PR.gapOn ? { on: true, play: PR.ex.gap.play, mute: PR.ex.gap.mute } : null;

export function renderStats() {
  const e = PR.ex; if (!e) return; const box = el('pStats'); if (!box) return;
  const s = stats().ex[e.id], status = s ? (s.mastered ? 'dominado' : 'pratica') : 'novo';
  box.innerHTML = `<div class="stats4">
    <div><span class="l">Seu melhor (limpo)</span><span class="v">${s && s.best ? s.best : '—'}<small>${s && s.best ? 'bpm' : ''}</small></span></div>
    <div><span class="l">Meta</span><span class="v">${e.bpm[1]}<small>bpm${e.endurance ? ` · ${e.endurance} min` : ''}</small></span></div>
    <div><span class="l">Último registro</span><span class="v">${s ? s.last : '—'}<small>${s ? `bpm · ${QUAL[s.lastQ] || ''}` : ''}</small></span></div>
    <div><span class="l">Situação</span><span class="v sm"><span class="pill ${status}">${STATUS_LABEL[status]}</span> <span class="small muted">${s ? `${s.n} ${s.n === 1 ? 'treino' : 'treinos'}` : ''}</span></span></div>
  </div>${s && s.hist.length > 1 ? `<div class="chart mt12">${bpmChartSVG(s.hist, e.bpm[1], 680, 150)}</div>` : ''}`;
}
function renderResult() {
  const box = el('micResult'); if (!box) return;
  const r = PR.result;
  if (!r) { box.innerHTML = ''; return; }
  if (r.error) { box.innerHTML = `<div class="ins warn mt12"><b>Sem análise</b><p>${esc(r.error)}</p></div>`; return; }
  const v = timingVerdict(r, PR.ex);
  box.innerHTML = `<div class="result mt12">
    <div class="scorebig ${r.score >= 80 ? 'good' : r.score >= 60 ? 'mid' : 'bad'}"><b>${r.score}</b><span>de 100</span></div>
    <div class="stack8 minw">
      <div class="row gap16 small"><span>Média: <b>${r.mean > 0 ? '+' : ''}${r.mean} ms</b></span><span>Desvio: <b>${r.sd} ms</b></span><span>Dentro de ±15 ms: <b>${r.within15}%</b></span><span>Notas: <b>${r.n}</b></span></div>
      ${v.map(x => `<p class="vd ${x.k}">${esc(x.t)}</p>`).join('')}
    </div>
  </div>
  <div class="chart mt12">${timingSVG(r.series, 680, 170)}</div>
  ${PR.recUrl ? `<div class="row mt12"><audio controls src="${PR.recUrl}"></audio>${recsAvailable() ? '<button class="btn sm" data-act="saveRec">Guardar gravação</button>' : ''}</div>` : ''}
  <p class="small muted mt8">Ao registrar, este resultado vai junto com o treino. O BPM do registro foi preenchido com o andamento tocado.</p>`;
}

function setPracticeBpm(v) {
  PR.bpm = clamp(Math.round(v), 30, 300);
  const b = el('pBpm'); if (b) b.firstChild.nodeValue = PR.bpm;
  const r = el('pRange'); if (r && +r.value !== PR.bpm) r.value = PR.bpm;
  if (!PR.regDirty && el('rBpm')) el('rBpm').value = PR.bpm;
  Engine.setBpm(PR.bpm);
}
function buildLights(n) { const l = el('pLights'); if (l) l.innerHTML = Array.from({ length: n }, (_, i) => `<i class="${i === 0 ? 'a' : ''}"></i>`).join('') + '<em id="pCnt" hidden>contagem</em>'; }
function indexCells() {
  PR.lastOn = [];
  if (PR.staff) { PR.cells = $$('#pScore svg.stf').map(svg => svg.querySelector('rect.phd')); return; }
  PR.cells = $$('#pScore .barbox').map(box => { const map = []; $$('.c', box).forEach(c => { const s = +c.dataset.s; (map[s] || (map[s] = [])).push(c); }); return map; });
}

async function toggleListen(on) {
  if (on) {
    try { await Listen.open(Store.settings.micSens); }
    catch (err) {
      PR.listen = false; const c = el('mOn'); if (c) c.checked = false;
      toast(err && err.name === 'NotAllowedError' ? 'Permissão do microfone negada. Libere nas configurações do navegador.' : 'Não foi possível abrir o microfone.');
      return;
    }
    PR.listen = true;
    Listen.onLevel = (v) => { const i = el('mLvl'); if (i) i.style.width = Math.min(100, Math.sqrt(v) * 160) + '%'; };
    Listen.onOnset = () => { const h = el('mHit'); if (h) { h.classList.remove('on'); void h.offsetWidth; h.classList.add('on'); } };
  } else { PR.listen = false; if (Engine.playing && Engine.owner === 'practice') Engine.stop(); Listen.close(); }
  const body = el('micBody'); if (body) body.hidden = !PR.listen;
  const snd = el('pSound'); if (snd) snd.disabled = PR.listen;
}

async function practiceToggle() {
  if (Engine.playing && Engine.owner === 'practice') { Engine.stop(); return; }
  if (PR.starting) return;
  const e = PR.ex, S = Store.settings;
  AudioEng.setVol('patVol', S.patVol); AudioEng.setVol('clickVol', S.clickVol);
  if (PR.listen) {
    PR.starting = true;
    try { await Listen.open(S.micSens); } catch { PR.starting = false; toast('Não foi possível abrir o microfone.'); return; }
    PR.starting = false;
    PR.expected = [];
    const minStep = Math.min(...e.bars.map(b => 60 / PR.bpm / b.s));
    Listen.setRefr(clamp(minStep * 0.55, 0.022, 0.06));
    Engine.setSink(ev => { if (ev.kind === 'note') PR.expected.push(ev); });
    Listen.startTake(PR.record && !!window.MediaRecorder);
    PR.result = null; renderResult();
  } else Engine.setSink(null);
  Engine.start({ bars: e.bars }, { bpm: PR.bpm, sound: S.sound && !PR.listen, click: PR.click, countIn: S.countIn, trainer: { ...PR.trainer }, gap: gapOpt(), accentOne: true, softClick: PR.listen }, 'practice');
}

async function finishListening() {
  Engine.setSink(null);
  const take = Listen.stopTake();
  const lat = Store.calib ? Store.calib.latency : guessLatency();
  const res = analyze(PR.expected, take.onsets, lat);
  PR.result = res || { error: take.onsets.length < 4 ? 'O microfone quase não ouviu batidas. Aumente a sensibilidade, aproxime o celular ou toque mais forte.' : 'Toque por mais tempo (pelo menos 2 compassos) para ter uma análise.' };
  const blob = await take.blob;
  if (PR.recUrl) URL.revokeObjectURL(PR.recUrl);
  PR.recBlob = blob; PR.recUrl = blob ? URL.createObjectURL(blob) : '';
  renderResult();
  if (res) el('micResult')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function startTimer() { PR.t0 = performance.now(); clearInterval(PR.tick); PR.tick = setInterval(updateTimer, 500); }
function stopTimer() { if (PR.t0) { PR.elapsed += (performance.now() - PR.t0) / 1000; PR.t0 = 0; } clearInterval(PR.tick); updateTimer(); }
const curElapsed = () => PR.elapsed + (PR.t0 ? (performance.now() - PR.t0) / 1000 : 0);
function updateTimer() {
  const s = curElapsed(), t = el('pTimer'); if (t) t.textContent = fmtClock(s);
  if (!PR.minDirty && el('rMin')) el('rMin').value = Math.max(1, Math.round(s / 60));
  if (PR.session) {
    const rem = PR.session.min * 60 - s, r = el('pRemain');
    if (r) r.textContent = rem > 0 ? `${fmtClock(rem)} restantes` : 'tempo do bloco concluído';
    if (rem <= 0 && !PR.blockAlerted) { PR.blockAlerted = true; AudioEng.chime(); toast('Tempo do bloco concluído. Registre e siga para o próximo.'); }
  }
}

Engine.on(ev => {
  if (!(ev.owner === 'practice' || Engine.owner === 'practice') || !PR.ex) return;
  if (ev.type === 'start') { const b = el('pPlay'); if (b) { b.classList.add('on'); b.innerHTML = playIcon(true); } startTimer(); }
  if (ev.type === 'stop') {
    const b = el('pPlay'); if (b) { b.classList.remove('on'); b.innerHTML = playIcon(false); }
    stopTimer(); clearHead(); $$('#pLights i').forEach(i => i.classList.remove('on', 'cnt'));
    if (PR.listen) finishListening();
  }
  if (ev.type === 'bpm') setPracticeBpm(ev.bpm);
  if (ev.type === 'step') {
    clearHead();
    if (ev.bar >= 0) {
      if (PR.staff) {
        const r = PR.cells[ev.bar], xs = PR.staff.xs[ev.bar], w = PR.staff.colws[ev.bar];
        if (r && xs) { r.setAttribute('x', xs[ev.step] - w / 2); r.setAttribute('width', w); r.setAttribute('visibility', 'visible'); PR.lastOn = [r]; }
      } else if (PR.cells[ev.bar] && PR.cells[ev.bar][ev.step]) { PR.lastOn = PR.cells[ev.bar][ev.step]; PR.lastOn.forEach(c => c.classList.add('on')); }
    }
    if (ev.beatStart) {
      if ($$('#pLights i').length !== ev.beats) buildLights(ev.beats);
      $$('#pLights i').forEach((i, k) => { i.classList.toggle('on', k === ev.beat && !ev.muted); i.classList.toggle('cnt', ev.count); });
      const cn = el('pCnt'); if (cn) cn.hidden = !ev.count;
    }
  }
});
function clearHead() { for (const c of PR.lastOn) { if (c.tagName === 'rect') c.setAttribute('visibility', 'hidden'); else c.classList.remove('on'); } PR.lastOn = []; }

async function savePractice() {
  const e = PR.ex; if (!e) return;
  if (!PR.q) { toast('Escolha como foi (1 a 5) antes de registrar.'); return; }
  const bpm = clamp(Math.round(+el('rBpm').value || PR.bpm), 20, 320), min = clamp(Math.round(+el('rMin').value || 1), 1, 240);
  const note = (el('rNote').value || '').trim().slice(0, 200);
  const before = stats().ex[e.id]?.mastered, now = new Date();
  const entry = { t: now.toISOString(), d: dkey(now), ex: e.id, bpm, q: PR.q, min };
  if (note) entry.note = note;
  if (PR.result && !PR.result.error) { const { series, ...tm } = PR.result; entry.timing = { ...tm, pos: tm.pos.slice(0, 12) }; }
  await addLog(entry);
  const after = stats().ex[e.id]?.mastered;
  if (after && !before) { AudioEng.chime(); toast(`Exercício dominado: ${e.name}!`); } else toast('Treino registrado.');
  PR.elapsed = 0; if (PR.t0) PR.t0 = performance.now(); PR.q = 0; PR.regDirty = false; PR.minDirty = false; PR.result = null;
  el('rNote').value = ''; $$('#pQual button').forEach(b => b.setAttribute('aria-pressed', 'false')); updateTimer(); renderStats(); renderResult();
}

// Calibração do microfone (também usada em Ajustes).
export async function runCalibration(method, statusEl) {
  const say = t => { if (statusEl) statusEl.textContent = t; };
  try { await Listen.open(Store.settings.micSens); } catch (err) { say(err && err.name === 'NotAllowedError' ? 'Permissão do microfone negada.' : 'Não foi possível abrir o microfone.'); return null; }
  if (Engine.playing) Engine.stop();
  const ctx = AudioEng.ensure();
  let r;
  if (method === 'auto') { say('Ouvindo os estalos… fique em silêncio.'); r = await calibrateAuto(); }
  else {
    say('Toque no pad junto com o clique, 16 vezes.');
    Listen.onsets = [];
    const times = tapCalibrationTimes(ctx, 90, 16);
    await new Promise(res => setTimeout(res, (times[times.length - 1] - ctx.currentTime + 0.8) * 1000));
    r = finishTapCalibration(times);
  }
  if (!PR.listen && !PR.ex) Listen.close();
  if (r && r.ok) { saveCalib({ latency: r.latency, method: r.method, at: dkey(), spread: r.spread }); say(`Calibrado: ${Math.round(r.latency * 1000)} ms de atraso entre som e microfone.`); }
  else say(r ? r.reason : 'Falhou.');
  return r;
}

registerActions({
  openEx: a => openPractice(a.dataset.ex, a.dataset.bpm ? { bpm: +a.dataset.bpm } : {}),
  closePractice: () => closePractice(),
  nextBlock: () => { if (PR.session) openBlock(PR.session.idx + 1); },
  pPlay: () => practiceToggle(),
  pB: a => setPracticeBpm(PR.bpm + Number(a.dataset.d)),
  pQ: a => { PR.q = Number(a.dataset.q); $$('#pQual button').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.q === PR.q))); },
  pSave: () => savePractice(),
  pTimerReset: () => { PR.elapsed = 0; if (PR.t0) PR.t0 = performance.now(); PR.minDirty = false; PR.blockAlerted = false; updateTimer(); },
  pView: a => { if (Engine.playing && Engine.owner === 'practice') Engine.stop(); PR.view = a.dataset.v; if (!PR.ex.staff) saveSettings({ notation: a.dataset.v }, true); el('pScore').innerHTML = scoreBlock(); $$('[data-act="pView"]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.v === (useStaff() ? 'staff' : 'grid')))); indexCells(); },
  calAuto: () => runCalibration('auto', el('mCal')),
  calTap: () => runCalibration('tap', el('mCal')),
  saveRec: async () => {
    if (!PR.recBlob || !PR.ex) return;
    const ok = await addRec({ id: 'r' + Date.now(), t: new Date().toISOString(), d: dkey(), ex: PR.ex.id, name: PR.ex.name, bpm: PR.bpm, mime: PR.recBlob.type, blob: PR.recBlob, score: PR.result && PR.result.score });
    toast(ok ? 'Gravação guardada. Ela aparece em Ajustes.' : 'Não foi possível guardar a gravação.');
  }
});
export const practiceBpmBy = d => setPracticeBpm(PR.bpm + d);
export { practiceToggle };
