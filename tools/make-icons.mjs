// Gera os ícones PNG do app (sem dependências). Uso: node tools/make-icons.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { deflateSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'icons');
mkdirSync(out, { recursive: true });

const BG = [20, 23, 28], BRASS = [221, 169, 74], BRASS_LT = [240, 194, 106], BRASS_DK = [153, 102, 15], STICK = [236, 238, 241];

// distâncias com sinal (negativo = dentro)
const sdRoundRect = (x, y, cx, cy, hw, hh, r) => { const qx = Math.abs(x - cx) - hw + r, qy = Math.abs(y - cy) - hh + r; return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r; };
const sdEllipse = (x, y, cx, cy, rx, ry) => (Math.hypot((x - cx) / rx, (y - cy) / ry) - 1) * Math.min(rx, ry);
const sdCapsule = (x, y, ax, ay, bx, by, r) => { const pax = x - ax, pay = y - ay, bax = bx - ax, bay = by - ay; const h = Math.max(0, Math.min(1, (pax * bax + pay * bay) / (bax * bax + bay * bay))); return Math.hypot(pax - bax * h, pay - bay * h) - r; };

// cena em coordenadas 0..1; s = escala do desenho dentro do ícone (área segura)
function scene(x, y, s) {
  const u = (x - 0.5) / s + 0.5, v = (y - 0.5) / s + 0.5;
  const layers = [];
  // baquetas cruzadas
  layers.push([sdCapsule(u, v, 0.27, 0.13, 0.57, 0.47, 0.03), STICK]);
  layers.push([sdCapsule(u, v, 0.73, 0.13, 0.43, 0.47, 0.03), STICK]);
  // caixa: corpo, pele de cima, aro de baixo
  const body = Math.max(Math.abs(u - 0.5) - 0.27, Math.abs(v - 0.66) - 0.13);
  layers.push([Math.min(body, sdEllipse(u, v, 0.5, 0.79, 0.27, 0.07)), BRASS]);
  for (const lx of [0.33, 0.415, 0.5, 0.585, 0.67]) layers.push([Math.max(Math.abs(u - lx) - 0.012, Math.abs(v - 0.67) - 0.1), BRASS_DK]);
  layers.push([sdEllipse(u, v, 0.5, 0.53, 0.27, 0.07), BRASS_LT]);
  return layers;
}

function render(size, { rounded, scale }) {
  const px = Buffer.alloc(size * size * 4), SS = 4;
  for (let j = 0; j < size; j++) for (let i = 0; i < size; i++) {
    let r = 0, g = 0, b = 0, a = 0;
    for (let sj = 0; sj < SS; sj++) for (let si = 0; si < SS; si++) {
      const x = (i + (si + 0.5) / SS) / size, y = (j + (sj + 0.5) / SS) / size;
      const inBg = rounded ? sdRoundRect(x, y, 0.5, 0.5, 0.5, 0.5, 0.22) <= 0 : true;
      if (!inBg) continue;
      let c = BG;
      for (const [d, col] of scene(x, y, scale)) if (d <= 0) c = col;
      r += c[0]; g += c[1]; b += c[2]; a += 255;
    }
    const n = SS * SS, o = (j * size + i) * 4;
    const cov = a / n;
    px[o] = cov ? Math.round(r / (a / 255)) : 0; px[o + 1] = cov ? Math.round(g / (a / 255)) : 0; px[o + 2] = cov ? Math.round(b / (a / 255)) : 0; px[o + 3] = Math.round(cov);
  }
  return png(size, size, px);
}

const CRC = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc32 = buf => { let c = 0xFFFFFFFF; for (const b of buf) c = CRC[(c ^ b) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
function chunk(type, data) { const len = Buffer.alloc(4); len.writeUInt32BE(data.length); const td = Buffer.concat([Buffer.from(type), data]); const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td)); return Buffer.concat([len, td, crc]); }
function png(w, h, rgba) {
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) { raw[y * (w * 4 + 1)] = 0; rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4); }
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', deflateSync(raw, { level: 9 })), chunk('IEND', Buffer.alloc(0))]);
}

writeFileSync(join(out, 'icon-192.png'), render(192, { rounded: true, scale: 0.86 }));
writeFileSync(join(out, 'icon-512.png'), render(512, { rounded: true, scale: 0.86 }));
writeFileSync(join(out, 'icon-maskable-512.png'), render(512, { rounded: false, scale: 0.68 }));
writeFileSync(join(out, 'apple-touch-icon.png'), render(180, { rounded: false, scale: 0.8 }));
writeFileSync(join(out, 'favicon-32.png'), render(32, { rounded: true, scale: 0.95 }));
console.log('Ícones gerados em', out);
