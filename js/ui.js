// Registro compartilhado de telas e ações (evita importações circulares entre as telas).
import { $, $$ } from './util.js';

export const ui = {
  tab: 'hoje',
  views: {},     // nome -> função que desenha a aba dentro do elemento
  actions: {},   // data-act -> função(el, evento)
  afterRender: [],
  practiceOpen: false
};
export const TABS = ['hoje', 'trilha', 'metronomo', 'evolucao', 'professor', 'ajustes'];
export const registerView = (name, fn) => { ui.views[name] = fn; };
export const registerActions = obj => Object.assign(ui.actions, obj);

// Redesenha a aba atual sem perder o que a pessoa está digitando.
export function renderTab(t = ui.tab) {
  const fn = ui.views[t], view = document.getElementById('v-' + t);
  if (!fn || !view) return;
  const keep = {};
  $$('input[type=text], input[type=number], input[type=password], textarea', view).forEach(i => { if (i.id) keep[i.id] = i.value; });
  const act = document.activeElement && view.contains(document.activeElement) ? document.activeElement.id : null;
  fn(view);
  for (const id in keep) { const el = document.getElementById(id); if (el && view.contains(el)) el.value = keep[id]; }
  if (act) { const el = document.getElementById(act); if (el && view.contains(el) && /^(INPUT|TEXTAREA)$/.test(el.tagName)) el.focus(); }
}
export function setTab(t) {
  if (!TABS.includes(t)) t = 'hoje';
  ui.tab = t;
  for (const id of TABS) { const v = document.getElementById('v-' + id); if (v) v.hidden = id !== t; }
  $$('.nav [data-tab]').forEach(b => { if (b.dataset.tab === t) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
  try { history.replaceState(null, '', '#' + t); } catch {}
  renderTab(t);
  window.scrollTo({ top: 0 });
}
export const playIcon = on => on
  ? '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>'
  : '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z"/></svg>';
export const el = id => document.getElementById(id);
export { $ };
