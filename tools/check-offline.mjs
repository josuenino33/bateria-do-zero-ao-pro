// Confere se todo arquivo do app está na lista do modo offline (sw.js).
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, relative } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sw = readFileSync(join(root, 'sw.js'), 'utf8');
const listed = new Set([...sw.matchAll(/'([^']+\.(?:js|css|png|html|webmanifest))'/g)].map(m => m[1]));
const files = [];
const walk = d => { for (const f of readdirSync(d)) { const p = join(d, f); if (statSync(p).isDirectory()) walk(p); else files.push(relative(root, p).replace(/\\/g, '/')); } };
['js', 'css', 'icons'].forEach(d => walk(join(root, d)));
const missing = files.filter(f => !listed.has(f));
const extra = [...listed].filter(f => f !== 'index.html' && f !== 'manifest.webmanifest' && !files.includes(f));
if (missing.length) console.log('Faltam no sw.js:\n  ' + missing.join('\n  '));
if (extra.length) console.log('Listados no sw.js mas inexistentes:\n  ' + extra.join('\n  '));
if (!missing.length && !extra.length) console.log(`OK: ${files.length} arquivos, todos no modo offline.`);
process.exit(missing.length || extra.length ? 1 : 0);
