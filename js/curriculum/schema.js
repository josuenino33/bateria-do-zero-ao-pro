// Definições compartilhadas entre o app e o validador do currículo.

// Peças do kit, na ordem em que aparecem na grade (de cima para baixo).
export const INST = {
  cr: { label: 'Prato de ataque', short: 'Prato', cym: true },
  rd: { label: 'Prato de condução', short: 'Condução', cym: true },
  rb: { label: 'Sino da condução', short: 'Sino', cym: true },
  hh: { label: 'Chimbal', short: 'Chimbal', cym: true },
  t1: { label: 'Tom 1', short: 'Tom 1' },
  t2: { label: 'Tom 2', short: 'Tom 2' },
  sn: { label: 'Caixa', short: 'Caixa' },
  cs: { label: 'Aro (cross-stick)', short: 'Aro' },
  ft: { label: 'Surdo', short: 'Surdo' },
  kd: { label: 'Bumbo (pé direito)', short: 'Bumbo D' },
  ke: { label: 'Bumbo (pé esquerdo)', short: 'Bumbo E' },
  hp: { label: 'Chimbal com o pé', short: 'Chimbal pé', cym: true }
};
export const ORDER = ['cr', 'rd', 'rb', 'hh', 't1', 't2', 'sn', 'cs', 'ft', 'kd', 'ke', 'hp'];

// Caracteres válidos em cada passo de uma trilha.
//  -  pausa            x  nota          X  acento        g  ghost note
//  f  flam             d  drag (2 notas de enfeite)        z  rufo prensado (buzz)
//  o  chimbal aberto (só em hh)
export const NOTE_CHARS = '-xXgfdzo';
// Manulação: D direita, E esquerda, B bumbo (mão+pé), - nada.
// Em exercícios só de pés (stl: 'Pés'), D e E são os pés.
export const STICK_CHARS = '-DEB';

export const SUBDIVISIONS = [1, 2, 3, 4, 5, 6, 8];
export const SUBNAME = { 1: 'semínimas', 2: 'colcheias', 3: 'tercinas', 4: 'semicolcheias', 5: 'quintinas', 6: 'sextinas', 8: 'fusas' };
export const COUNT = {
  1: ['#'], 2: ['#', 'e'], 3: ['#', 'ta', 'ka'], 4: ['#', 'e', '&', 'a'], 5: ['#', 'ta', 'ka', 'ti', 'ki'],
  6: ['#', 'ta', 'ka', 'e', 'ta', 'ka'], 8: ['#', '·', 'e', '·', '&', '·', 'a', '·']
};
export const CLICK_MODES = ['beat', 'sub', 'backbeat', 'offbeat', 'one', 'off'];
export const LEVEL_NAME = { 1: 'Iniciante', 2: 'Intermediário', 3: 'Avançado' };

// Normaliza um compasso: remove espaços e barras, confere tamanhos.
// Devolve { s, b, unit, n, acc, tracks, st } e uma lista de problemas.
export function normBar(bar, where = '') {
  const problems = [];
  const s = bar.s, b = bar.b || 4, unit = bar.unit || 4, n = s * b;
  if (!SUBDIVISIONS.includes(s)) problems.push(`${where}: subdivisão inválida ${s}`);
  const fix = (str, key, chars) => {
    let v = String(str).replace(/[\s|]/g, '');
    if (v.length !== n) { problems.push(`${where}.${key}: tem ${v.length} passos, esperado ${n} (s=${s}, b=${b})`); v = (v + '-'.repeat(n)).slice(0, n); }
    for (const ch of v) if (!chars.includes(ch)) problems.push(`${where}.${key}: caractere inválido "${ch}"`);
    if (key !== 'hh' && key !== 'st' && v.includes('o')) problems.push(`${where}.${key}: "o" só vale no chimbal`);
    return v;
  };
  const tracks = {};
  for (const k of Object.keys(bar)) {
    if (['s', 'b', 'unit', 'acc', 'st'].includes(k)) continue;
    if (!INST[k]) { problems.push(`${where}: trilha desconhecida "${k}"`); continue; }
  }
  for (const k of ORDER) if (bar[k] != null) tracks[k] = fix(bar[k], k, NOTE_CHARS);
  const st = bar.st != null ? fix(bar.st, 'st', STICK_CHARS) : null;
  const acc = Array.isArray(bar.acc) ? bar.acc : [0];
  return { bar: { s, b, unit, n, acc, tracks, st }, problems };
}
