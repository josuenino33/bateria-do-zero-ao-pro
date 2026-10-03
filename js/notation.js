// Notação: grade (passo a passo) e partitura de bateria em SVG.
import { INST, ORDER, SUBNAME, COUNT } from './curriculum/schema.js';
import { esc } from './util.js';

const meterLabel = b => (b.b === 4 && b.unit === 4) ? '' : `${b.b}/${b.unit}`;

/* ================= GRADE ================= */
export function gridHTML(e) {
  const cw = e.bars.some(b => b.s >= 5) ? 22 : 26;
  return `<div class="bars">${e.bars.map((b, bi) => {
    const rows = ORDER.filter(k => b.tracks[k]);
    const ml = meterLabel(b);
    let html = `<div class="barbox" data-bar="${bi}"><div class="bh"><span>Compasso ${bi + 1}${ml ? ' · ' + ml : ''}</span><span>${SUBNAME[b.s] || ''}</span></div><div class="sg" style="grid-template-columns:auto repeat(${b.n}, ${cw}px)">`;
    for (const k of rows) {
      html += `<div class="lab">${k === 'sn' && e.pad ? 'Caixa/pad' : INST[k].short}</div>`;
      for (let i = 0; i < b.n; i++) html += `<div class="c ln ${i % b.s === 0 ? 'bs' : ''}" data-s="${i}">${glyph(k, b.tracks[k][i])}</div>`;
    }
    if (b.st && /[DEB]/.test(b.st)) {
      html += `<div class="lab">${e.stl || 'Mãos'}</div>`;
      for (let i = 0; i < b.n; i++) { const c = b.st[i]; html += `<div class="c st ${i % b.s === 0 ? 'bs' : ''} ${c === 'B' ? 'ft' : ''}" data-s="${i}">${c === '-' ? '' : c}</div>`; }
    }
    html += `<div class="lab">Contagem</div>`;
    const cnt = COUNT[b.s] || [];
    for (let i = 0; i < b.n; i++) {
      const w = cnt[i % b.s], beat = Math.floor(i / b.s), acc = (b.acc || [0]).includes(beat) && b.b !== 4;
      html += `<div class="c ct ${i % b.s === 0 ? 'bs b1' : ''} ${acc && i % b.s === 0 ? 'ac' : ''}" data-s="${i}">${w === '#' ? beat + 1 : esc(w || '')}</div>`;
    }
    return html + `</div></div>`;
  }).join('')}</div>`;
}
function glyph(k, ch) {
  if (!ch || ch === '-') return '';
  if (INST[k].cym) {
    if (ch === 'o') return '<span class="cy op">○</span>';
    return `<span class="cy ${ch === 'X' ? 'acc' : ''} ${ch === 'g' ? 'gh' : ''}">×</span>`;
  }
  if (ch === 'X') return '<span class="nt acc"></span>';
  if (ch === 'g') return '<span class="nt gh"></span>';
  if (ch === 'f') return '<span class="nt fl"></span>';
  if (ch === 'd') return '<span class="nt dr"></span>';
  if (ch === 'z') return '<span class="nt bz"></span>';
  return '<span class="nt"></span>';
}
export const GRID_LEGEND = `<div class="legend"><span><span class="nt"></span>nota</span><span><span class="nt acc"></span>acento</span><span><span class="nt gh"></span>ghost note</span><span><span class="nt fl"></span>flam</span><span><span class="nt dr"></span>drag</span><span><span class="nt bz"></span>rufo prensado</span><span><span class="cy">×</span>prato/chimbal</span><span><span class="cy op">○</span>chimbal aberto</span><span class="mono">D direita · E esquerda · B bumbo</span></div>`;

/* ================= PARTITURA ================= */
const SP = 8, Y0 = 54, H = 140, SCALE = 1.22;
const yOf = p => Y0 + p * SP / 2;
const POS = { cr: -2, hh: -1, rd: 0, rb: 0, t1: 1, t2: 2, sn: 3, cs: 3, ft: 5, kd: 7, ke: 7, hp: 9 };
const XHEAD = new Set(['cr', 'hh', 'rd', 'rb', 'hp', 'cs']);
const UP = ['cr', 'rd', 'rb', 'hh', 't1', 't2', 'sn', 'cs', 'ft'], DOWN = ['kd', 'ke', 'hp'];
const COLW = { 1: 30, 2: 22, 3: 20, 4: 16, 5: 15, 6: 14, 8: 11 };
const UNIT32 = { 1: 8, 2: 4, 3: 4, 4: 2, 5: 2, 6: 2, 8: 1 };
const VALUES = [12, 8, 6, 4, 3, 2, 1];   // em fusas: semínima pontuada, semínima, colcheia pontuada...
const beamsOf = nom => nom >= 8 ? 0 : nom >= 4 ? 1 : nom >= 2 ? 2 : 3;
const splitRest = nom => { const out = []; for (const v of [8, 4, 2, 1]) while (nom >= v) { out.push(v); nom -= v; } return out; };

function restSVG(x, nom) {
  const y = yOf(4);
  if (nom >= 8) return `<path d="M${x - 2} ${y - 13} l5 6 l-4 4 l5 6 l-4 0 q-4 1 -1 6" class="rs" fill="none"/>`;
  const n = beamsOf(nom); let s = `<line x1="${x + 3}" y1="${y - 6}" x2="${x - 1 - n}" y2="${y + 4 + n * 5}" class="rs"/>`;
  for (let i = 0; i < n; i++) s += `<circle cx="${x - 1.5 - i * 1.3}" cy="${y - 5 + i * 5}" r="2.3" class="rd"/>`;
  return s;
}
function headSVG(x, y, inst, ch, small) {
  const r = small ? 0.62 : 1;
  if (XHEAD.has(inst)) { const d = 3.6 * r; return `<path d="M${x - d} ${y - d} L${x + d} ${y + d} M${x - d} ${y + d} L${x + d} ${y - d}" class="xh"/>`; }
  return `<ellipse cx="${x}" cy="${y}" rx="${4.7 * r}" ry="${3.4 * r}" transform="rotate(-20 ${x} ${y})" class="hd"/>`;
}

export function staffHTML(e) {
  const out = [], xs = [], colws = [];
  const hasUp = e.bars.some(b => UP.some(k => b.tracks[k])), hasDown = e.bars.some(b => DOWN.some(k => b.tracks[k]));
  let prevMeter = '';
  e.bars.forEach((b, bi) => {
    const colW = COLW[b.s] || 14, beatW = b.s * colW + 8;
    const meter = `${b.b}/${b.unit}`, showTs = meter !== prevMeter; prevMeter = meter;
    let x0 = 6 + (bi === 0 ? 22 : 0) + (showTs ? 22 : 0);
    const W = Math.round(x0 + b.b * beatW + 14);
    const stepX = []; for (let i = 0; i < b.n; i++) stepX.push(x0 + Math.floor(i / b.s) * beatW + (i % b.s) * colW + colW / 2 + 4);
    xs.push(stepX); colws.push(colW);
    let g = `<rect class="phd" x="0" y="6" width="${colW}" height="${H - 12}" rx="4" visibility="hidden"/>`;
    for (let i = 0; i < 5; i++) g += `<line x1="2" x2="${W - 2}" y1="${Y0 + i * SP}" y2="${Y0 + i * SP}" class="sl"/>`;
    let cx = 6;
    if (bi === 0) { g += `<rect x="${cx + 2}" y="${Y0 + 8}" width="3" height="16" class="cl"/><rect x="${cx + 8}" y="${Y0 + 8}" width="3" height="16" class="cl"/>`; cx += 22; }
    if (showTs) { g += `<text x="${cx + 6}" y="${Y0 + 14}" class="ts" text-anchor="middle">${b.b}</text><text x="${cx + 6}" y="${Y0 + 30}" class="ts" text-anchor="middle">${b.unit}</text>`; }
    const last = bi === e.bars.length - 1;
    if (last) g += `<circle cx="${W - 15}" cy="${Y0 + 12}" r="2" class="rd"/><circle cx="${W - 15}" cy="${Y0 + 20}" r="2" class="rd"/><line x1="${W - 10}" x2="${W - 10}" y1="${Y0}" y2="${Y0 + 32}" class="sl"/><rect x="${W - 7}" y="${Y0}" width="3" height="32" class="cl"/>`;
    else g += `<line x1="${W - 2}" x2="${W - 2}" y1="${Y0}" y2="${Y0 + 32}" class="bl"/>`;

    // valor de um passo (em fusas) e grupos de notas ligadas: um por tempo em x/4, um por grupo de acentos em x/8
    const un = UNIT32[b.s] * (b.unit === 8 ? 0.5 : 1);
    const groups = [];
    if (b.unit === 8) {
      const acc = [...new Set([0, ...(b.acc || [])])].filter(x => x < b.b).sort((p, q) => p - q);
      acc.forEach((st, i) => groups.push([st * b.s, (i + 1 < acc.length ? acc[i + 1] : b.b) * b.s]));
    } else for (let k = 0; k < b.b; k++) groups.push([k * b.s, (k + 1) * b.s]);
    const restsAt = (from, nom, z) => { let pos = from, s = ''; for (const r of splitRest(nom)) { s += restSVG(stepX[Math.min(z - 1, Math.round(pos))], r); pos += r / un; } return s; };

    const voices = [];
    if (hasUp) voices.push({ keys: UP, up: true, rests: true });
    if (hasDown) voices.push({ keys: DOWN, up: !hasUp, rests: !hasUp });
    for (const v of voices) {
      for (const [a, z] of groups) {
        const on = [];
        for (let j = a; j < z; j++) {
          const heads = v.keys.filter(key => b.tracks[key] && b.tracks[key][j] !== '-').map(key => ({ key, ch: b.tracks[key][j], p: POS[key] }));
          if (heads.length) on.push({ j, heads });
        }
        if (!on.length) {
          if (v.rests) g += b.unit === 4 ? restSVG(stepX[a] + (beatW - 8) / 2 - colW / 2, 8) : restsAt(a, (z - a) * un, z);
          continue;
        }
        if (on[0].j > a && v.rests) g += restsAt(a, (on[0].j - a) * un, z);
        on.forEach((n, i) => {
          const u = (i + 1 < on.length ? on[i + 1].j : z) - n.j;
          const nomRaw = (b.unit === 4 && u === b.s && on.length === 1 && n.j === a) ? 8 : u * un;
          n.nom = VALUES.find(val => val <= nomRaw) || 1; n.rem = nomRaw - n.nom; n.x = stepX[n.j];
          n.ys = n.heads.map(h => yOf(h.p));
          n.top = Math.min(...n.ys); n.bot = Math.max(...n.ys);
        });
        const short = on.filter(n => n.nom < 8), beamed = short.length >= 2;
        const sx = n => v.up ? n.x + 4.3 : n.x - 4.3;
        let beamY = v.up ? Math.min(...on.map(n => n.top)) - 28 : Math.max(...on.map(n => n.bot)) + 28;
        if (v.up) beamY = Math.min(beamY, Y0 - 6); else beamY = Math.max(beamY, Y0 + 38);
        for (const n of on) {
          for (let h = 0; h < n.heads.length; h++) {
            const hd = n.heads[h], y = n.ys[h];
            if (hd.p <= -2) g += `<line x1="${n.x - 7}" x2="${n.x + 7}" y1="${yOf(-2)}" y2="${yOf(-2)}" class="sl"/>`;
            g += headSVG(n.x, y, hd.key, hd.ch);
            if (hd.ch === 'g') g += `<text x="${n.x - 9}" y="${y + 4}" class="pa">(</text><text x="${n.x + 6}" y="${y + 4}" class="pa">)</text>`;
            if (hd.ch === 'f' || hd.ch === 'd') {
              const gx = n.x - (hd.ch === 'd' ? 15 : 10);
              g += headSVG(gx, y, hd.key, 'x', true) + `<line x1="${gx + 2.8}" x2="${gx + 2.8}" y1="${y}" y2="${y - 13}" class="st2"/><line x1="${gx - 1}" x2="${gx + 6}" y1="${y - 4}" y2="${y - 10}" class="st2"/>`;
              if (hd.ch === 'd') g += headSVG(gx + 6, y, hd.key, 'x', true) + `<line x1="${gx + 8.8}" x2="${gx + 8.8}" y1="${y}" y2="${y - 13}" class="st2"/><line x1="${gx + 2.8}" x2="${gx + 8.8}" y1="${y - 13}" y2="${y - 13}" class="st2"/>`;
            }
            if (hd.ch === 'o') g += `<text x="${n.x}" y="${Y0 - 34}" class="art" text-anchor="middle">o</text>`;
          }
          if (n.nom === 12 || n.nom === 6 || n.nom === 3) { const dy = n.heads[0].p % 2 === 0 ? -SP / 2 : 0; g += `<circle cx="${n.x + 8}" cy="${n.ys[0] + dy}" r="1.6" class="rd"/>`; }
          const tip = beamed && n.nom < 8 ? beamY : (v.up ? n.top - 28 : n.bot + 28);
          const from = v.up ? n.bot : n.top;
          g += `<line x1="${sx(n)}" x2="${sx(n)}" y1="${from}" y2="${tip}" class="sm"/>`;
          if (n.heads.some(h => h.ch === 'z')) { const zy = v.up ? from - 13 : from + 15; g += `<text x="${sx(n)}" y="${zy}" class="bz" text-anchor="middle">z</text>`; }
          if (!beamed && n.nom < 8) { const c = beamsOf(n.nom); for (let f = 0; f < c; f++) { const fy = v.up ? tip + f * 6 : tip - f * 6; g += v.up ? `<path d="M${sx(n)} ${fy} q7 5 5 13" class="fl"/>` : `<path d="M${sx(n)} ${fy} q7 -5 5 -13" class="fl"/>`; } }
          if (n.heads.some(h => h.ch === 'X')) { const ay = v.up ? Math.min(tip, Y0 - 6) - 9 : Math.max(tip, Y0 + 38) + 12; g += `<text x="${n.x}" y="${ay}" class="art" text-anchor="middle">&gt;</text>`; }
          if (n.rem > 0 && v.rests) g += restsAt(n.j + n.nom / un, n.rem, z);
        }
        if (beamed) {
          const first = short[0], lastN = short[short.length - 1];
          g += `<line x1="${sx(first)}" x2="${sx(lastN)}" y1="${beamY}" y2="${beamY}" class="bm"/>`;
          for (let L = 2; L <= 3; L++) {
            const off = v.up ? (L - 1) * 5.5 : -(L - 1) * 5.5;
            for (let i = 0; i < short.length; i++) {
              const n = short[i]; if (beamsOf(n.nom) < L) continue;
              const nx = short[i + 1], pv = short[i - 1];
              if (nx && beamsOf(nx.nom) >= L) g += `<line x1="${sx(n)}" x2="${sx(nx)}" y1="${beamY + off}" y2="${beamY + off}" class="bm"/>`;
              else if (!(pv && beamsOf(pv.nom) >= L)) { const dir = nx ? 1 : -1; g += `<line x1="${sx(n)}" x2="${sx(n) + dir * 7}" y1="${beamY + off}" y2="${beamY + off}" class="bm"/>`; }
            }
          }
        }
        if (b.unit === 4 && [3, 5, 6].includes(b.s) && !(on.length === 1 && on[0].j === a && on[0].nom === 8)) {
          const mx = (stepX[a] + stepX[z - 1]) / 2, ty = v.up ? beamY - 7 : beamY + 15;
          g += `<text x="${mx}" y="${ty}" class="tu" text-anchor="middle">${b.s}</text>`;
        }
      }
    }
    if (b.st && /[DEB]/.test(b.st)) for (let i = 0; i < b.n; i++) { const c = b.st[i]; if (c !== '-') g += `<text x="${stepX[i]}" y="${H - 6}" class="sk ${c === 'B' ? 'ft' : ''}" text-anchor="middle">${c}</text>`; }
    out.push(`<svg class="stf" data-bar="${bi}" width="${Math.round(W * SCALE)}" height="${Math.round(H * SCALE)}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Compasso ${bi + 1}">${g}</svg>`);
  });
  return { html: `<div class="staffwrap">${out.join('')}</div>`, xs, colws };
}
export const STAFF_LEGEND = `<div class="legend"><span>Chimbal e pratos acima da pauta (×), caixa no 3º espaço, tons acima, surdo no 2º espaço, bumbo no 1º espaço (haste para baixo), chimbal com o pé abaixo da pauta.</span><span class="mono">&gt; acento · ( ) ghost · o chimbal aberto · z rufo prensado</span></div>`;
