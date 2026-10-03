// Confere o currículo: tamanhos das grades, caracteres, campos obrigatórios e ids únicos.
// Uso: node tools/validate-curriculum.mjs            (todos os módulos)
//      node tools/validate-curriculum.mjs sext pd    (só alguns)
import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { normBar, CLICK_MODES } from '../js/curriculum/schema.js';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'js', 'curriculum');
const skip = new Set(['schema.js', 'helpers.js', 'index.js']);
const args = process.argv.slice(2);
const files = readdirSync(dir).filter(f => f.endsWith('.js') && !skip.has(f)).filter(f => !args.length || args.includes(f.replace(/\.js$/, '')));

const errors = [], warns = [], ids = new Map();
let totalL = 0, totalE = 0;
const nonEmpty = (v, min = 1) => Array.isArray(v) && v.filter(x => typeof x === 'string' && x.trim()).length >= min;

for (const f of files) {
  let m;
  try { m = (await import(pathToFileURL(join(dir, f)).href)).default; }
  catch (e) { errors.push(`${f}: não carregou: ${e.message}`); continue; }
  if (!m || !m.id || !m.name || !m.desc || !Array.isArray(m.lessons) || !m.lessons.length) { errors.push(`${f}: módulo sem id/name/desc/lessons`); continue; }
  if (f !== m.id + '.js') errors.push(`${f}: id do módulo "${m.id}" deve ser igual ao nome do arquivo`);
  let nE = 0;
  for (const l of m.lessons) {
    totalL++;
    const L = `${m.id}/${l.id}`;
    if (!l.id || !l.id.startsWith(m.id + '-')) errors.push(`${L}: id da lição deve começar com "${m.id}-"`);
    if (ids.has(l.id)) errors.push(`${L}: id repetido (também em ${ids.get(l.id)})`); ids.set(l.id, f);
    if (!l.name || !l.goal) errors.push(`${L}: falta name/goal`);
    if (![1, 2, 3].includes(l.level)) errors.push(`${L}: level deve ser 1, 2 ou 3`);
    if (!nonEmpty(l.text, 2)) errors.push(`${L}: text precisa de 2+ parágrafos`);
    if (!nonEmpty(l.steps, 3)) errors.push(`${L}: steps precisa de 3+ passos`);
    if (!nonEmpty(l.mistakes, 2)) errors.push(`${L}: mistakes precisa de 2+ itens`);
    if (!nonEmpty(l.tips, 2)) errors.push(`${L}: tips precisa de 2+ itens`);
    if (l.listen != null && !Array.isArray(l.listen)) errors.push(`${L}: listen deve ser lista`);
    if (!Array.isArray(l.ex) || !l.ex.length) { errors.push(`${L}: sem exercícios`); continue; }
    for (const e of l.ex) {
      totalE++; nE++;
      const E = `${m.id}/${e.id}`;
      if (!e.id || !e.id.startsWith(m.id + '-')) errors.push(`${E}: id deve começar com "${m.id}-"`);
      if (ids.has(e.id)) errors.push(`${E}: id repetido (também em ${ids.get(e.id)})`); ids.set(e.id, f);
      if (!e.name || !e.desc) errors.push(`${E}: falta name/desc`);
      if (!Array.isArray(e.bpm) || e.bpm.length !== 2 || !(e.bpm[0] >= 30 && e.bpm[0] < e.bpm[1] && e.bpm[1] <= 320)) errors.push(`${E}: bpm deve ser [inicio, meta] com 30 <= inicio < meta <= 320`);
      if (e.click != null && !CLICK_MODES.includes(e.click)) errors.push(`${E}: click inválido "${e.click}"`);
      if (e.endurance != null && !(e.endurance > 0)) errors.push(`${E}: endurance deve ser minutos > 0`);
      if (e.gap != null && !(e.gap.play >= 1 && e.gap.mute >= 1)) errors.push(`${E}: gap deve ser {play, mute}`);
      if (!Array.isArray(e.bars) || !e.bars.length) { errors.push(`${E}: sem compassos`); continue; }
      let notes = 0;
      e.bars.forEach((b, bi) => {
        const { bar, problems } = normBar(b, `${E}[${bi}]`);
        errors.push(...problems);
        for (const k in bar.tracks) notes += bar.tracks[k].replace(/-/g, '').length;
        if ((bar.unit === 8 || bar.b !== 4) && !b.acc) warns.push(`${E}[${bi}]: compasso ${bar.b}/${bar.unit} sem "acc" (acentos do clique)`);
        if (bar.st && /[DEB]/.test(bar.st)) {
          for (let i = 0; i < bar.n; i++) {
            const hit = Object.values(bar.tracks).some(t => t[i] !== '-');
            if (bar.st[i] !== '-' && !hit) warns.push(`${E}[${bi}]: manulação no passo ${i + 1} sem nota`);
          }
        }
      });
      if (!notes) errors.push(`${E}: nenhum compasso tem notas`);
    }
  }
  console.log(`${m.id.padEnd(8)} ${String(m.lessons.length).padStart(3)} lições  ${String(nE).padStart(4)} exercícios  (${m.name})`);
}
console.log(`\nTotal: ${files.length} módulos, ${totalL} lições, ${totalE} exercícios`);
if (warns.length) console.log(`\nAvisos (${warns.length}):\n` + warns.slice(0, 60).map(w => '  - ' + w).join('\n'));
if (errors.length) { console.log(`\nERROS (${errors.length}):\n` + errors.slice(0, 120).map(w => '  - ' + w).join('\n')); process.exit(1); }
console.log('\nOK: nenhum erro.');
