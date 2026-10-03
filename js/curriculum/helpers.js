// Atalhos para escrever exercícios de forma legível.

// r('Xxx', 4) -> 'Xxx Xxx Xxx Xxx'  (repete um grupo, um por tempo)
export const r = (s, n) => Array(n).fill(s).join(' ');

// Construtores de compasso por subdivisão (notas por tempo).
export const bar = (s, o = {}) => ({ s, ...o });
export const b1 = o => bar(1, o);
export const b2 = o => bar(2, o);
export const b3 = o => bar(3, o);
export const b4 = o => bar(4, o);
export const b5 = o => bar(5, o);
export const b6 = o => bar(6, o);
export const b8 = o => bar(8, o);

// Grooves de base em 4/4.
export const G = {
  // rock em colcheias (s=2)
  rock8: { hh: 'xx xx xx xx', sn: '-- X- -- X-', kd: 'x- -- xx --' },
  rock8C: { cr: 'x- -- -- --', hh: '-x xx xx xx', sn: '-- X- -- X-', kd: 'x- -- xx --' },
  // rock na grade de semicolcheias (s=4)
  rock16: { hh: 'x-x- x-x- x-x- x-x-', sn: '---- X--- ---- X---', kd: 'x--- ---- x-x- ----' },
  rock16C: { cr: 'x--- ---- ---- ----', hh: '--x- x-x- x-x- x-x-', sn: '---- X--- ---- X---', kd: 'x--- ---- x-x- ----' },
  // rock na grade de sextinas (s=6), chimbal em colcheias
  rock6: { hh: 'x--x-- x--x-- x--x-- x--x--', sn: '------ X----- ------ X-----', kd: 'x----- ------ x--x-- ------' },
  rock6C: { cr: 'x----- ------ ------ ------', hh: '---x-- x--x-- x--x-- x--x--', sn: '------ X----- ------ X-----', kd: 'x----- ------ x--x-- ------' }
};

// Desloca uma trilha (sem espaços) k passos para a direita, circularmente.
export function rot(str, k) {
  const v = str.replace(/[\s|]/g, ''); const n = v.length; k = ((k % n) + n) % n;
  return v.slice(n - k) + v.slice(0, n - k);
}

// Gera n itens com uma função (para exercícios gerados por permutação).
export const seq = (n, fn) => Array.from({ length: n }, (_, i) => fn(i));
