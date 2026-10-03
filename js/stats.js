// Estatísticas derivadas dos registros, nível, BPM sugerido e a aula do dia.
import { Store } from './store.js';
import { MODULES, MOD, EX, TOTAL_EX } from './curriculum/index.js';
import { dkey, addDays, mondayOf, clamp, hash, rng, LS } from './util.js';

export const QUAL = [null, 'Travado', 'Tenso', 'Ok, com erros', 'Limpo', 'Limpo e relaxado'];
export const STATUS_LABEL = { novo: 'Novo', pratica: 'Em prática', dominado: 'Dominado' };

let cache = { ver: -1, val: null };
export function stats() {
  if (cache.ver === Store.ver && cache.val) return cache.val;
  const all = Store.logs.filter(e => e && e.t).slice().sort((a, b) => a.t < b.t ? -1 : 1);
  const ex = {}, days = {};
  for (const e of all) {
    days[e.d] = (days[e.d] || 0) + (Number(e.min) || 0);
    const X = EX[e.ex]; if (!X) continue;
    const s = ex[e.ex] || (ex[e.ex] = { n: 0, best: 0, last: 0, lastQ: 0, lastAt: '', lastD: '', mins: 0, hist: [], mastered: false, masteredAt: '', verified: false, bestScore: 0 });
    s.n++; s.mins += Number(e.min) || 0; s.last = e.bpm; s.lastQ = e.q; s.lastAt = e.t; s.lastD = e.d; s.hist.push(e);
    if (e.q >= 4 && e.bpm > s.best) s.best = e.bpm;
    if (e.timing && e.timing.score > s.bestScore) s.bestScore = e.timing.score;
    const ok = e.q >= 4 && e.bpm >= X.bpm[1] && (!X.endurance || (Number(e.min) || 0) >= X.endurance);
    if (ok && !s.mastered) { s.mastered = true; s.masteredAt = e.d; }
    if (ok && e.timing && e.timing.score >= 80) s.verified = true;
  }
  const today = dkey();
  let streak = 0; { let d = new Date(); if (!days[dkey(d)]) d = addDays(d, -1); while (days[dkey(d)] > 0) { streak++; d = addDays(d, -1); } }
  const totalMin = all.reduce((a, e) => a + (Number(e.min) || 0), 0);
  const mastered = Object.values(ex).filter(s => s.mastered).length;
  const wk0 = mondayOf(new Date()), weeks = [];
  for (let i = 11; i >= 0; i--) {
    const ws = addDays(wk0, -7 * i); let m = 0, dd = 0;
    for (let j = 0; j < 7; j++) { const k = dkey(addDays(ws, j)); if (days[k]) { m += days[k]; dd++; } }
    weeks.push({ start: dkey(ws), min: m, days: dd });
  }
  const timing = all.filter(e => e.timing && e.timing.n >= 8);
  const val = { all, ex, days, today, streak, totalMin, mastered, weeks, thisWeek: weeks[weeks.length - 1], timing };
  cache = { ver: Store.ver, val };
  return val;
}

const LEVELS = [[0, 'Iniciante'], [0.05, 'Básico'], [0.15, 'Intermediário'], [0.35, 'Avançado'], [0.6, 'Profissional']];
export function level(st) {
  const need = LEVELS.map(([f, n]) => [Math.ceil(f * TOTAL_EX), n]);
  let i = 0; for (let k = 0; k < need.length; k++) if (st.mastered >= need[k][0]) i = k;
  const next = need[i + 1];
  return { name: need[i][1], next: next ? next[1] : null, toNext: next ? next[0] - st.mastered : 0, pct: next ? (st.mastered - need[i][0]) / Math.max(1, next[0] - need[i][0]) : 1 };
}
export function exStatus(id, st) { const s = st.ex[id]; return !s ? 'novo' : s.mastered ? 'dominado' : 'pratica'; }

export function suggestBpm(e, st) {
  const s = st.ex[e.id]; const [b0, tg] = e.bpm;
  if (!s) return b0;
  if (s.mastered) return clamp(Math.max(s.best, tg), b0, tg + 30);
  if (s.lastQ && s.lastQ <= 2) return clamp(Math.round(s.last * 0.9), 30, tg);
  if (s.best) return clamp(s.best + (s.lastQ >= 4 ? 4 : 0), b0, tg);
  return clamp(s.last || b0, 30, tg);
}

// ---------- aula do dia ----------
export const frontierOf = (modId, st) => MOD[modId].exList.filter(e => !st.ex[e.id]?.mastered);

function genPlan(salt) {
  const st = stats(), P = Store.perfil, M = clamp(Number(P.dailyMin) || 30, 10, 120);
  const R = rng(hash(dkey() + ':' + salt));
  const used = new Set(), blocks = [];
  const pickFrom = modId => {
    if (!MOD[modId]) return null;
    const fr = frontierOf(modId, st).filter(e => !used.has(e.id));
    if (fr.length) {
      // exercício travado há várias sessões dá lugar ao próximo de vez em quando
      const first = fr[0], s = st.ex[first.id];
      const stuck = s && s.n >= 5 && fr.length > 1;
      return fr[(stuck && R() > 0.5) || (fr.length > 1 && R() > 0.7) ? 1 : 0];
    }
    const pool = MOD[modId].exList.filter(e => !used.has(e.id));
    return pool.length ? pool[Math.floor(R() * pool.length)] : null;
  };
  const add = (e, kind, w) => { if (!e) return; used.add(e.id); blocks.push({ ex: e.id, kind, w }); };
  add(pickFrom(R() > 0.35 ? 'fund' : 'rud'), 'Aquecimento', 0.14);
  let focus = (P.focus || []).filter(id => MOD[id] && id !== 'fund');
  if (!focus.length) focus = ['sext'];
  const off = Math.floor(R() * focus.length);
  const chosen = focus.length <= 2 ? focus : [focus[off % focus.length], focus[(off + 1) % focus.length]];
  if (chosen.length === 1) { add(pickFrom(chosen[0]), 'Foco', 0.3); add(pickFrom(chosen[0]), 'Foco', 0.25); }
  else chosen.forEach(id => add(pickFrom(id), 'Foco', 0.27));
  // leitura entra a cada dois dias
  const dayN = Math.floor(Date.now() / 86400000);
  if (dayN % 2 === 0 && !chosen.includes('leitura')) add(pickFrom('leitura'), 'Leitura', 0.12);
  const others = MODULES.map(m => m.id).filter(id => !['fund', 'leitura'].includes(id) && !chosen.includes(id));
  if (others.length) add(pickFrom(others[Math.floor(R() * others.length)]), 'Variação', 0.14);
  const rev = Object.entries(st.ex).filter(([id, s]) => s.mastered && !used.has(id) && EX[id]).sort((a, b) => a[1].lastAt < b[1].lastAt ? -1 : 1)[0];
  if (rev) add(EX[rev[0]], 'Revisão', 0.1);
  const tw = blocks.reduce((a, b) => a + b.w, 0);
  for (const b of blocks) { b.min = Math.max(3, Math.round(M * b.w / tw)); b.bpm = suggestBpm(EX[b.ex], st); delete b.w; }
  return blocks;
}

let planMem = null;
export function resetPlan() { planMem = null; LS.set('plan', null); }
export function getPlan(regen) {
  const today = dkey();
  let p = planMem || LS.get('plan', null);
  const valid = p && p.date === today && Array.isArray(p.blocks) && p.blocks.length && p.blocks.every(b => EX[b.ex]);
  if (!Store.ready) return valid ? p : { date: today, salt: 0, blocks: genPlan(0) };
  if (regen || !valid) {
    const salt = valid ? (p.salt || 0) + 1 : (regen ? 1 : 0);
    p = { date: today, salt, blocks: genPlan(salt) };
    LS.set('plan', p);
  }
  planMem = p;
  return p;
}
export const blockDone = (b, st) => st.all.some(e => e.d === st.today && e.ex === b.ex);
