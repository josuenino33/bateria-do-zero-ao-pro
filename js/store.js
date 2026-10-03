// Armazenamento local (IndexedDB), backup e restauração.
// Tudo fica no aparelho. Nada é enviado para servidor nenhum.
import { LS, dkey } from './util.js';

export const DEFAULT_PERFIL = { dailyMin: 30, daysPerWeek: 5, focus: ['sext', 'pd', 'vir', 'gospel'] };
export const DEFAULT_SETTINGS = {
  theme: 'auto', notation: 'grid', sound: true, countIn: true, patVol: 0.8, clickVol: 0.8,
  aiKey: '', aiModel: '', micSens: 0.5
};

export const Store = {
  ready: false, ver: 0, mode: 'idb',
  perfil: { ...DEFAULT_PERFIL }, settings: { ...DEFAULT_SETTINGS }, calib: null, logs: [], lastBackup: null, professor: null
};
const listeners = new Set();
export const onStore = fn => { listeners.add(fn); return () => listeners.delete(fn); };
function changed() { Store.ver++; listeners.forEach(fn => { try { fn(); } catch (e) { console.error(e); } }); }

let db = null;
function idb() {
  return new Promise((res, rej) => {
    if (!('indexedDB' in window)) return rej(new Error('sem IndexedDB'));
    const r = indexedDB.open('metodo-rufar', 1);
    r.onupgradeneeded = () => {
      const d = r.result;
      if (!d.objectStoreNames.contains('kv')) d.createObjectStore('kv');
      if (!d.objectStoreNames.contains('logs')) d.createObjectStore('logs', { keyPath: 't' });
      if (!d.objectStoreNames.contains('recs')) d.createObjectStore('recs', { keyPath: 'id' });
    };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
function tx(store, mode, fn) {
  return new Promise((res, rej) => {
    const t = db.transaction(store, mode); const s = t.objectStore(store); let out;
    const r = fn(s); if (r) r.onsuccess = () => { out = r.result; };
    t.oncomplete = () => res(out); t.onerror = () => rej(t.error); t.onabort = () => rej(t.error);
  });
}
const kvGet = k => tx('kv', 'readonly', s => s.get(k));
const kvSet = (k, v) => tx('kv', 'readwrite', s => s.put(v, k));

// Modo reserva (sem IndexedDB): localStorage, sem gravações.
function saveFallback() { LS.set('fallback', { perfil: Store.perfil, settings: Store.settings, calib: Store.calib, logs: Store.logs, lastBackup: Store.lastBackup, professor: Store.professor }); }

export async function initStore() {
  try {
    db = await idb();
    const [perfil, settings, calib, lastBackup, professor, logs] = await Promise.all([
      kvGet('perfil'), kvGet('settings'), kvGet('calib'), kvGet('lastBackup'), kvGet('professor'), tx('logs', 'readonly', s => s.getAll())
    ]);
    Store.perfil = { ...DEFAULT_PERFIL, ...(perfil || {}) };
    Store.settings = { ...DEFAULT_SETTINGS, ...(settings || {}) };
    Store.calib = calib || null; Store.lastBackup = lastBackup || null; Store.professor = professor || null;
    Store.logs = (logs || []).sort((a, b) => a.t < b.t ? -1 : 1);
    Store.mode = 'idb';
  } catch (e) {
    console.warn('IndexedDB indisponível, usando localStorage', e);
    const f = LS.get('fallback', {}) || {};
    Store.perfil = { ...DEFAULT_PERFIL, ...(f.perfil || {}) };
    Store.settings = { ...DEFAULT_SETTINGS, ...(f.settings || {}) };
    Store.calib = f.calib || null; Store.lastBackup = f.lastBackup || null; Store.professor = f.professor || null;
    Store.logs = Array.isArray(f.logs) ? f.logs : [];
    Store.mode = 'local';
  }
  Store.ready = true;
  try { if (navigator.storage && navigator.storage.persist) Store.persisted = await navigator.storage.persist(); } catch {}
  changed();
}

async function put(kind, key, value) {
  try { if (Store.mode === 'idb') await kvSet(key, value); else saveFallback(); }
  catch (e) { console.error(e); }
  return kind;
}
export function savePerfil(patch) { Store.perfil = { ...Store.perfil, ...patch }; put('kv', 'perfil', Store.perfil); changed(); }
export function saveSettings(patch, quiet) { Store.settings = { ...Store.settings, ...patch }; put('kv', 'settings', Store.settings); if (!quiet) changed(); }
export function saveCalib(c) { Store.calib = c; put('kv', 'calib', c); changed(); }
export function saveProfessor(text) { Store.professor = { text, at: new Date().toISOString() }; put('kv', 'professor', Store.professor); }

export async function addLog(entry) {
  Store.logs = [...Store.logs, entry];
  changed();
  try { if (Store.mode === 'idb') await tx('logs', 'readwrite', s => s.put(entry)); else saveFallback(); }
  catch (e) { console.error(e); }
  return true;
}
export async function deleteLog(t) {
  Store.logs = Store.logs.filter(e => e.t !== t);
  changed();
  try { if (Store.mode === 'idb') await tx('logs', 'readwrite', s => s.delete(t)); else saveFallback(); }
  catch (e) { console.error(e); }
}

// Gravações de áudio (só com IndexedDB).
export const recsAvailable = () => Store.mode === 'idb';
export async function addRec(rec) { if (!recsAvailable()) return false; await tx('recs', 'readwrite', s => s.put(rec)); return true; }
export async function listRecs() {
  if (!recsAvailable()) return [];
  const all = await tx('recs', 'readonly', s => s.getAll());
  return (all || []).map(({ blob, ...meta }) => ({ ...meta, size: blob ? blob.size : 0 })).sort((a, b) => a.t < b.t ? 1 : -1);
}
export async function getRec(id) { if (!recsAvailable()) return null; return tx('recs', 'readonly', s => s.get(id)); }
export async function deleteRec(id) { if (!recsAvailable()) return; await tx('recs', 'readwrite', s => s.delete(id)); }

// Backup: perfil, ajustes (sem a chave da IA), calibração e registros. Gravações ficam de fora.
export function buildBackup() {
  const { aiKey, ...settings } = Store.settings;
  return { app: 'metodo-rufar', formato: 2, exportado: new Date().toISOString(), perfil: Store.perfil, settings, calib: Store.calib, professor: Store.professor, logs: Store.logs };
}
export function markBackup() { Store.lastBackup = dkey(); put('kv', 'lastBackup', Store.lastBackup); changed(); }

// Aceita o backup deste app e o da versão antiga no Claude ({ registros: [...] }).
export function parseBackup(obj) {
  if (!obj || typeof obj !== 'object') throw new Error('Arquivo inválido.');
  const raw = Array.isArray(obj.logs) ? obj.logs : Array.isArray(obj.registros) ? obj.registros : null;
  if (!raw) throw new Error('Este arquivo não parece um backup do Método Rufar.');
  const logs = raw.filter(e => e && typeof e.t === 'string' && typeof e.d === 'string' && e.ex).map(e => ({
    t: e.t, d: e.d, ex: String(e.ex), bpm: Number(e.bpm) || 0, q: Number(e.q) || 3, min: Number(e.min) || 1,
    ...(e.note ? { note: String(e.note).slice(0, 200) } : {}), ...(e.name ? { name: String(e.name) } : {}), ...(e.timing ? { timing: e.timing } : {})
  }));
  return { logs, perfil: obj.perfil || null, settings: obj.settings || null, calib: obj.calib || null, professor: obj.professor || null };
}
export async function importBackup(parsed, mode) {
  const byT = new Map();
  if (mode === 'merge') for (const e of Store.logs) byT.set(e.t, e);
  for (const e of parsed.logs) byT.set(e.t, e);
  const logs = [...byT.values()].sort((a, b) => a.t < b.t ? -1 : 1);
  if (parsed.perfil) Store.perfil = { ...DEFAULT_PERFIL, ...parsed.perfil };
  if (parsed.settings) { const { aiKey, ...rest } = parsed.settings; Store.settings = { ...Store.settings, ...rest }; }
  if (parsed.calib) Store.calib = parsed.calib;
  if (parsed.professor) Store.professor = parsed.professor;
  Store.logs = logs;
  try {
    if (Store.mode === 'idb') {
      await tx('logs', 'readwrite', s => { if (mode === 'replace') s.clear(); for (const e of logs) s.put(e); });
      await Promise.all([kvSet('perfil', Store.perfil), kvSet('settings', Store.settings), kvSet('calib', Store.calib), kvSet('professor', Store.professor)]);
    } else saveFallback();
  } catch (e) { console.error(e); throw new Error('Não foi possível gravar os dados importados.'); }
  changed();
  return logs.length;
}
export async function eraseAll() {
  Store.logs = []; Store.perfil = { ...DEFAULT_PERFIL }; Store.calib = null; Store.professor = null; Store.lastBackup = null;
  try {
    if (Store.mode === 'idb') { await tx('logs', 'readwrite', s => s.clear()); await tx('recs', 'readwrite', s => s.clear()); await tx('kv', 'readwrite', s => { s.delete('perfil'); s.delete('calib'); s.delete('professor'); return s.delete('lastBackup'); }); }
    else saveFallback();
  } catch (e) { console.error(e); }
  changed();
}
