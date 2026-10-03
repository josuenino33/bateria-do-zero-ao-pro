// Utilidades gerais.
export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];
export const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const pad2 = n => String(n).padStart(2, '0');
export const dkey = (d = new Date()) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
export const parseD = k => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
export const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
export const mondayOf = d => { const x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); return addDays(x, -((x.getDay() + 6) % 7)); };
export const fmtDate = k => { const d = parseD(k); return `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}`; };
export const fmtMin = m => { m = Math.round(m); if (m < 60) return `${m} min`; const h = Math.floor(m / 60), mm = m % 60; return mm ? `${h}h${pad2(mm)}` : `${h}h`; };
export const fmtClock = s => `${pad2(Math.floor(s / 60))}:${pad2(Math.floor(s % 60))}`;
export const daysBetween = (a, b) => Math.round((parseD(b) - parseD(a)) / 86400000);
export function hash(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
export function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
export const median = arr => { if (!arr.length) return 0; const s = [...arr].sort((a, b) => a - b); const m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
export const mean = arr => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
export const sd = arr => { if (arr.length < 2) return 0; const m = mean(arr); return Math.sqrt(arr.reduce((a, b) => a + (b - m) ** 2, 0) / (arr.length - 1)); };

// Preferências leves (aba lembrada, avisos vistos). Dados de verdade ficam no store.js.
export const LS = {
  get(k, d) { try { const v = localStorage.getItem('rufar.' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('rufar.' + k, JSON.stringify(v)); } catch {} }
};

let toastT = 0;
export function toast(msg, ms = 2800) {
  const t = document.getElementById('toast'); if (!t) return;
  t.textContent = msg; t.hidden = false; clearTimeout(toastT);
  toastT = setTimeout(() => { t.hidden = true; }, ms);
}

// Markdown simples (títulos, listas, negrito, itálico, código) para as respostas do professor.
export function mdHTML(src) {
  const inline = s => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>').replace(/`([^`]+)`/g, '<code>$1</code>');
  const lines = esc(src).split('\n'); let out = '', list = null;
  const close = () => { if (list) { out += `</${list}>`; list = null; } };
  for (const raw of lines) {
    const l = raw.trimEnd(); let m;
    if (/^#{1,4}\s+/.test(l)) { close(); out += `<h4>${inline(l.replace(/^#{1,4}\s+/, ''))}</h4>`; }
    else if ((m = l.match(/^\s*[-*•]\s+(.*)/))) { if (list !== 'ul') { close(); out += '<ul>'; list = 'ul'; } out += `<li>${inline(m[1])}</li>`; }
    else if ((m = l.match(/^\s*\d+[.)]\s+(.*)/))) { if (list !== 'ol') { close(); out += '<ol>'; list = 'ol'; } out += `<li>${inline(m[1])}</li>`; }
    else if (!l.trim()) close();
    else { close(); out += `<p>${inline(l)}</p>`; }
  }
  close(); return out;
}

export function downloadFile(filename, data, type = 'application/json') {
  const blob = data instanceof Blob ? data : new Blob([data], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click();
  setTimeout(() => { a.remove(); URL.revokeObjectURL(url); }, 1000);
}
