# Como escrever o currículo do Método Rufar

Cada módulo é um arquivo em `js/curriculum/<id>.js` que exporta um objeto por `export default`.
Depois de editar, rode `node tools/validate-curriculum.mjs` (ou só o módulo: `node tools/validate-curriculum.mjs sext`).

## Módulo

```js
import { r, b1, b2, b3, b4, b5, b6, b8, G, rot, seq } from './helpers.js';

export default {
  id: 'sext',                       // igual ao nome do arquivo
  name: 'Sextinas',
  desc: 'Uma frase dizendo o que o módulo ensina.',
  lessons: [ /* lições, em ordem de dificuldade */ ]
};
```

## Lição

```js
{
  id: 'sext-1',                     // começa com o id do módulo
  name: 'Sentir a tercina',
  level: 1,                         // 1 iniciante, 2 intermediário, 3 avançado
  goal: 'Uma frase com o objetivo da lição.',
  text: ['Parágrafo 1', 'Parágrafo 2', '...'],   // explicação: 2 a 5 parágrafos
  steps: ['Passo 1', 'Passo 2', 'Passo 3'],       // como estudar, em ordem (3 a 6)
  mistakes: ['Erro comum e como corrigir', '...'],// 2 a 4
  tips: ['Dica', '...'],                          // 2 a 4
  listen: ['Música — Artista (o que ouvir nela)'],// opcional: referências reais
  ex: [ /* exercícios */ ]
}
```

## Exercício

```js
{
  id: 'sext-1a',                    // único no currículo inteiro
  name: 'Tercinas alternadas',
  desc: 'Uma frase dizendo o que tocar.',
  bpm: [60, 140],                   // [começo sugerido, meta para "dominado"]
  bars: [ b3({ sn: r('Xxx', 4), st: 'DED EDE DED EDE' }) ],
  // opcionais:
  click: 'sub',        // beat (padrão) | sub (todas as subdivisões) | backbeat (2 e 4) | offbeat (contratempo) | one (só no 1) | off
  pad: true,           // exercício de pad: a linha da caixa aparece como "Caixa/pad"
  stl: 'Pés',          // rótulo da linha de manulação quando D/E são os pés
  endurance: 2,        // exercício de resistência: minutos sem parar na meta
  gap: { play: 2, mute: 2 },  // clique que some: 2 compassos com, 2 sem
  staff: true          // abre mostrando a partitura em vez da grade (módulo de leitura)
}
```

## Compasso

`b4({...})` cria um compasso com 4 notas por tempo (semicolcheias). Há `b1` (semínimas), `b2` (colcheias),
`b3` (tercinas), `b4`, `b5` (quintinas), `b6` (sextinas) e `b8` (fusas).

Cada trilha é uma string com **s × b** passos (s = notas por tempo, b = tempos; padrão b = 4).
Espaços e `|` são ignorados, então escreva um grupo por tempo: `'Xxxx xxxx Xxxx xxxx'`.

Trilhas: `cr` prato de ataque, `rd` condução, `rb` sino da condução, `hh` chimbal, `t1` tom 1, `t2` tom 2,
`sn` caixa, `cs` aro (cross-stick), `ft` surdo, `kd` bumbo pé direito, `ke` bumbo pé esquerdo, `hp` chimbal com o pé.

Caracteres: `-` pausa · `x` nota · `X` acento · `g` ghost note · `f` flam · `d` drag · `z` rufo prensado (buzz) · `o` chimbal aberto (só em `hh`).

`st` é a manulação, alinhada passo a passo: `D` direita, `E` esquerda, `B` bumbo, `-` nada.

Compassos diferentes de 4/4: use `b` (tempos), `unit` (4 ou 8) e `acc` (tempos com clique acentuado).
Exemplo 7/8 agrupado 2+2+3, um passo por colcheia: `b1({ b: 7, unit: 8, acc: [0, 2, 4], sn: '...', ... })`.
Com `unit: 8` o BPM é da colcheia.

Grooves prontos em `G`: `G.rock8`, `G.rock8C` (com prato no 1), `G.rock16`, `G.rock16C`, `G.rock6`, `G.rock6C`.
Use `{ ...G.rock16C }` dentro de `b4(...)`.
