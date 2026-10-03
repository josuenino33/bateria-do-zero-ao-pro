// Gráficos em SVG desenhados à mão (sem bibliotecas).
import { esc, fmtDate, fmtMin, addDays, mondayOf, dkey } from './util.js';
import { QUAL } from './stats.js';

export function niceStep(v) { if (v <= 0) return 1; const p = Math.pow(10, Math.floor(Math.log10(v))); const n = v / p; return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * p; }

// Curva de BPM de um exercício: ponto cheio = limpo, vazado = com problemas.
export function bpmChartSVG(hist, target, W, H) {
  const pl = 34, pr = 58, pt = 12, pb = 24, iw = W - pl - pr, ih = H - pt - pb;
  const vals = hist.map(h => h.bpm);
  const lo = Math.max(0, Math.floor((Math.min(...vals, target) - 10) / 10) * 10), hi = Math.ceil((Math.max(...vals, target) + 5) / 10) * 10;
  const y = v => pt + ih - (v - lo) / (hi - lo) * ih;
  const x = i => pl + (hist.length === 1 ? iw / 2 : i / (hist.length - 1) * iw);
  const step = niceStep((hi - lo) / 4);
  let g = '';
  for (let v = Math.ceil(lo / step) * step; v <= hi; v += step) g += `<line x1="${pl}" x2="${pl + iw}" y1="${y(v)}" y2="${y(v)}" class="gl"/><text class="tk" x="${pl - 6}" y="${y(v) + 4}" text-anchor="end">${v}</text>`;
  const path = hist.map((h, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(h.bpm).toFixed(1)}`).join('');
  const area = `${path}L${x(hist.length - 1).toFixed(1)},${pt + ih}L${x(0).toFixed(1)},${pt + ih}Z`;
  const pts = hist.map((h, i) => { const c = h.q >= 4; return `<circle cx="${x(i)}" cy="${y(h.bpm)}" r="4.5" fill="${c ? 'var(--accent)' : 'var(--surface)'}" stroke="${c ? 'var(--surface)' : 'var(--accent)'}" stroke-width="2"/><circle cx="${x(i)}" cy="${y(h.bpm)}" r="11" fill="transparent" data-tip="${esc(`${fmtDate(h.d)}: ${h.bpm} bpm · ${QUAL[h.q] || ''}${h.min ? ` · ${h.min} min` : ''}${h.timing ? ` · microfone ${h.timing.score}/100` : ''}`)}"/>`; }).join('');
  const last = hist[hist.length - 1];
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Evolução do BPM">${g}
    <line x1="${pl}" x2="${pl + iw}" y1="${y(target)}" y2="${y(target)}" stroke="var(--good)" stroke-width="1.5"/>
    <text x="${pl + iw + 6}" y="${y(target) + 4}" class="tg">meta ${target}</text>
    <path d="${area}" fill="var(--accent)" opacity=".1"/>
    <path d="${path}" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>${pts}
    <text x="${pl}" y="${H - 6}">${fmtDate(hist[0].d)}</text><text x="${pl + iw}" y="${H - 6}" text-anchor="end">${fmtDate(last.d)}</text>
    ${Math.abs(y(last.bpm) - y(target)) > 12 ? `<text x="${x(hist.length - 1) + 8}" y="${y(last.bpm) + 4}" class="lv">${last.bpm}</text>` : ''}
  </svg>`;
}

// Minutos por semana com a meta.
export function weeksSVG(weeks, goal, W, H) {
  const pl = 34, pr = 40, pt = 14, pb = 26, iw = W - pl - pr, ih = H - pt - pb;
  const mx = niceStep(Math.max(goal, ...weeks.map(w => w.min)) * 1.1 / 4) * 4;
  const y = v => pt + ih - v / mx * ih, band = iw / weeks.length, bw = Math.min(24, band * 0.6);
  let g = '';
  for (let k = 0; k <= 4; k++) { const v = mx * k / 4; g += `<line x1="${pl}" x2="${pl + iw}" y1="${y(v)}" y2="${y(v)}" class="gl"/><text class="tk" x="${pl - 6}" y="${y(v) + 4}" text-anchor="end">${Math.round(v)}</text>`; }
  const bars = weeks.map((w, i) => {
    const cx = pl + band * i + band / 2, top = y(w.min), h = pt + ih - top, cur = i === weeks.length - 1, rr = Math.min(4, h);
    const d = h <= 0 ? '' : `M${cx - bw / 2},${pt + ih}V${top + rr}Q${cx - bw / 2},${top} ${cx - bw / 2 + rr},${top}H${cx + bw / 2 - rr}Q${cx + bw / 2},${top} ${cx + bw / 2},${top + rr}V${pt + ih}Z`;
    return `${d ? `<path d="${d}" fill="${cur ? 'var(--accent)' : 'var(--accent-dim)'}"/>` : ''}<rect x="${cx - band / 2}" y="${pt}" width="${band}" height="${ih}" fill="transparent" data-tip="${esc(`Semana de ${fmtDate(w.start)}: ${fmtMin(w.min)} em ${w.days} ${w.days === 1 ? 'dia' : 'dias'}`)}"/>${i % 2 === 1 || cur ? `<text x="${cx}" y="${H - 8}" text-anchor="middle">${cur ? 'esta' : fmtDate(w.start)}</text>` : ''}`;
  }).join('');
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Minutos por semana">${g}
    <line x1="${pl}" x2="${pl + iw}" y1="${y(goal)}" y2="${y(goal)}" stroke="var(--good)" stroke-width="1.5"/><text x="${pl + iw + 6}" y="${y(goal) + 4}" class="tg">meta</text>
    <line x1="${pl}" x2="${pl + iw}" y1="${pt + ih}" y2="${pt + ih}" class="ax"/>${bars}</svg>`;
}

// Calendário das últimas 18 semanas.
export function heatHTML(days) {
  const today = new Date(), start = addDays(mondayOf(today), -7 * 17), tk = dkey(today), cells = [];
  for (let i = 0; i < 18 * 7; i++) {
    const d = addDays(start, i), k = dkey(d), m = days[k] || 0, fut = d > today && k !== tk;
    const l = m <= 0 ? 0 : m < 15 ? 1 : m < 30 ? 2 : m < 60 ? 3 : 4;
    cells.push(`<i data-l="${l}" class="${k === tk ? 'today' : ''} ${fut ? 'fut' : ''}" data-tip="${fut ? '' : esc(`${d.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit' })}: ${m ? fmtMin(m) : 'sem treino'}`)}"></i>`);
  }
  return `<div class="heatwrap"><div class="heat">${cells.join('')}</div></div>
    <div class="heatlegend"><span>menos</span><i style="background:var(--heat-0)"></i><i style="background:var(--heat-1)"></i><i style="background:var(--heat-2)"></i><i style="background:var(--heat-3)"></i><i style="background:var(--heat-4)"></i><span>mais</span><span class="hl2">(0, até 15, 15–30, 30–60, 60+ min)</span></div>`;
}

// Desvio de cada nota em relação ao tempo (análise do microfone).
export function timingSVG(series, W, H) {
  const pl = 40, pr = 12, pt = 12, pb = 22, iw = W - pl - pr, ih = H - pt - pb;
  const lim = Math.max(30, Math.min(80, Math.ceil(Math.max(...series.map(s => Math.abs(s[1]))) / 10) * 10));
  const T = Math.max(1, series[series.length - 1][0]);
  const x = t => pl + t / T * iw, y = v => pt + ih / 2 - v / lim * (ih / 2);
  let g = `<rect x="${pl}" y="${y(15)}" width="${iw}" height="${y(-15) - y(15)}" fill="var(--good)" opacity=".1"/>`;
  for (const v of [-lim, -lim / 2, 0, lim / 2, lim]) g += `<line x1="${pl}" x2="${pl + iw}" y1="${y(v)}" y2="${y(v)}" class="${v === 0 ? 'ax' : 'gl'}"/><text class="tk" x="${pl - 6}" y="${y(v) + 4}" text-anchor="end">${v > 0 ? '+' : ''}${Math.round(v)}</text>`;
  const pts = series.map(([t, d]) => `<circle cx="${x(t).toFixed(1)}" cy="${y(Math.max(-lim, Math.min(lim, d))).toFixed(1)}" r="2.6" fill="${Math.abs(d) <= 15 ? 'var(--good)' : Math.abs(d) <= 30 ? 'var(--warn)' : 'var(--crit)'}"/>`).join('');
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Desvio de cada nota em milissegundos">${g}${pts}
    <text x="${pl + 4}" y="${pt + 10}">atrasado</text><text x="${pl + 4}" y="${H - pb - 4}">adiantado</text><text x="${pl + iw}" y="${H - 6}" text-anchor="end">${Math.round(T)} s</text></svg>`;
}

// Nota do microfone ao longo do tempo.
export function scoreTrendSVG(entries, W, H) {
  const pl = 34, pr = 16, pt = 12, pb = 24, iw = W - pl - pr, ih = H - pt - pb;
  const y = v => pt + ih - v / 100 * ih, x = i => pl + (entries.length === 1 ? iw / 2 : i / (entries.length - 1) * iw);
  let g = '';
  for (const v of [0, 25, 50, 75, 100]) g += `<line x1="${pl}" x2="${pl + iw}" y1="${y(v)}" y2="${y(v)}" class="gl"/><text class="tk" x="${pl - 6}" y="${y(v) + 4}" text-anchor="end">${v}</text>`;
  const path = entries.map((e, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(e.timing.score).toFixed(1)}`).join('');
  const pts = entries.map((e, i) => `<circle cx="${x(i)}" cy="${y(e.timing.score)}" r="4" fill="var(--accent)" stroke="var(--surface)" stroke-width="2"/><circle cx="${x(i)}" cy="${y(e.timing.score)}" r="10" fill="transparent" data-tip="${esc(`${fmtDate(e.d)}: nota ${e.timing.score} · média ${e.timing.mean > 0 ? '+' : ''}${e.timing.mean} ms · desvio ${e.timing.sd} ms`)}"/>`).join('');
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Nota de tempo do microfone">${g}<path d="${path}" fill="none" stroke="var(--accent)" stroke-width="2"/>${pts}
    <text x="${pl}" y="${H - 6}">${fmtDate(entries[0].d)}</text><text x="${pl + iw}" y="${H - 6}" text-anchor="end">${fmtDate(entries[entries.length - 1].d)}</text></svg>`;
}
