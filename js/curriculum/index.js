// Junta todos os módulos do currículo e indexa lições e exercícios.
// Cada módulo é carregado separadamente: se um arquivo tiver erro, os outros continuam funcionando.
import { normBar } from './schema.js';

export const MODULE_IDS = ['fund', 'leitura', 'rud', 'mao', 'sext', 'indep', 'vir', 'pes', 'pd', 'rock', 'gospel', 'br', 'metal', 'odd', 'tempo'];

const loaded = await Promise.allSettled(MODULE_IDS.map(id => import(`./${id}.js`)));
export const PROBLEMS = [];
export const MODULES = [];
loaded.forEach((r, i) => {
  if (r.status === 'fulfilled' && r.value && r.value.default) MODULES.push(r.value.default);
  else PROBLEMS.push(`Módulo "${MODULE_IDS[i]}" não carregou: ${r.reason && r.reason.message ? r.reason.message : 'arquivo ausente'}`);
});

export const MOD = {}, LES = {}, EX = {}, EXLIST = [];
MODULES.forEach((m, mi) => {
  MOD[m.id] = m; m.idx = mi + 1; m.exList = [];
  m.lessons.forEach((l, li) => {
    l.module = m; l.idx = li + 1; LES[l.id] = l;
    for (const e of l.ex) {
      e.lesson = l; e.module = m;
      e.bars = e.bars.map((b, bi) => { const { bar, problems } = normBar(b, `${e.id}[${bi}]`); PROBLEMS.push(...problems); return bar; });
      EX[e.id] = e; EXLIST.push(e); m.exList.push(e);
    }
  });
});
if (PROBLEMS.length) console.warn('Currículo com problemas:', PROBLEMS);

export const TOTAL_EX = EXLIST.length;
