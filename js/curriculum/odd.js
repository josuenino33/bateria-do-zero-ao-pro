import { b1, b2 } from './helpers.js';

// 7/8 agrupado 2+2+3, em semicolcheias (14 passos), para o groove antes da virada.
const G78 = { b: 7, unit: 8, acc: [0, 2, 4] };

export default {
  id: 'odd',
  name: 'Compassos ímpares',
  desc: '3/4, 6/8, 12/8, 5/4, 7/8 e 9/8: sentir os grupos de dois e de três e tocar grooves e viradas sem se perder.',
  lessons: [
    {
      id: 'odd-1',
      name: '3/4: valsa e groove em três',
      level: 1,
      goal: 'Sentir o ciclo de três tempos e tocar a valsa e um groove de rock em 3/4.',
      text: [
        'Até aqui quase tudo foi em 4/4. O 3/4 é o primeiro passo para fora disso: três semínimas por compasso, contadas "1 2 3, 1 2 3". O primeiro tempo é o forte, e o ciclo é mais curto do que o de quatro tempos a que o seu corpo está acostumado.',
        'A valsa é a forma mais tradicional do 3/4: bumbo no 1 e algo leve no 2 e no 3, como um "pum-tchic-tchic". Aqui o 2 e o 3 vão no aro (cross-stick), um som seco e baixo, bom para baladas e para momentos tranquilos do louvor. O chimbal em colcheias mantém o fluxo por cima.',
        'O groove em 3 é o jeito rock de tocar o 3/4: bumbo no 1 e no "&" do 2 e caixa forte no 3. A sensação é diferente da valsa: mais pesada, com a caixa como ponto de chegada de cada compasso. Ele funciona em baladas de rock, pop e louvor escritas em três.',
        'O erro típico é o corpo "querer" o quarto tempo. Quem toca muito 4/4 tende a esticar o compasso ou a chegar no 1 atrasado. Contar em voz alta, com o clique acentuando o 1, resolve rápido: em poucos minutos o ciclo de três passa a soar natural.'
      ],
      steps: [
        'Conte "1 2 3" em voz alta com o clique por um minuto, batendo o pé no 1.',
        'Toque a valsa a 70 bpm. O aro no 2 e no 3 é baixo; o bumbo no 1 é firme.',
        'Toque o groove em 3 e confira se a caixa cai exatamente no 3, sem esperar um quarto tempo.',
        'Alterne 4 compassos de valsa e 4 de groove em 3 sem parar.',
        'Escolha uma música em 3/4 que você conhece e toque junto um dos dois grooves.'
      ],
      mistakes: [
        'Tocar um quarto tempo sem perceber. Correção: conte em voz alta e use o clique com acento no 1.',
        'Na valsa, o aro forte demais, competindo com o bumbo. Correção: toque o aro com pouca altura; ele é um acompanhamento.',
        'No groove em 3, o bumbo do "&" do 2 sair adiantado e colar na caixa. Correção: conte "1 & 2 & 3 &" em voz alta e encaixe o bumbo no "&".',
        'Chegar no 1 atrasado depois da caixa no 3. Correção: pense no 3 como o meio do caminho e no 1 como o destino.'
      ],
      tips: [
        'No cross-stick, deite a baqueta sobre a pele e deixe a parte de trás bater no aro.',
        'Pense no compasso como um círculo: o 1 é o ponto de partida e de chegada.',
        'Muitas músicas em 3/4 ficam ótimas com a condução no prato em vez do chimbal.'
      ],
      ex: [
        { id: 'odd-1a', name: 'Valsa', desc: 'Chimbal em colcheias, bumbo no 1 e aro no 2 e no 3.', bpm: [70, 160], bars: [b2({ b: 3, acc: [0], hh: 'xx xx xx', cs: '-- x- x-', kd: 'x- -- --' })] },
        { id: 'odd-1b', name: 'Groove em 3', desc: 'Chimbal em colcheias, bumbo no 1 e no "&" do 2, caixa no 3.', bpm: [60, 140], bars: [b2({ b: 3, acc: [0], hh: 'xx xx xx', sn: '-- -- X-', kd: 'x- -x --' })] }
      ]
    },
    {
      id: 'odd-2',
      name: '6/8 e 12/8',
      level: 2,
      goal: 'Sentir os grupos de três colcheias e tocar baladas e shuffle em 6/8 e 12/8.',
      text: [
        'No 6/8 e no 12/8, o pulso que você sente não é a semínima, é a semínima pontuada: um grupo de três colcheias. O 6/8 tem dois grupos ("1 2 3 4 5 6", com força no 1 e no 4) e o 12/8 tem quatro. Por isso, nestes exercícios, o clique marca cada colcheia com acento no começo de cada grupo, e o BPM indicado é o da colcheia.',
        'Na prática, o 12/8 é um 4/4 em que cada tempo é dividido em três: exatamente as tercinas que você já conhece. Uma balada em 12/8 tem a caixa na 4ª e na 10ª colcheia, que correspondem ao 2 e ao 4 de um compasso de quatro tempos. O shuffle em 12/8 é o mesmo shuffle de tercinas, escrito de outro jeito.',
        'O 6/8 aparece muito em baladas de louvor e de rock: bumbo no 1, caixa no 4 e chimbal em todas as colcheias. A versão com semicolcheias acrescenta notas rápidas de bumbo e uma ghost note na caixa antes do 1, que dão movimento sem tirar a calma da música.',
        'O cuidado principal é não "endireitar" a divisão. Quem toca muito em semicolcheias tende a transformar os grupos de três em grupos de dois. Conte sempre em voz alta, com o número no começo de cada grupo, até a sensação ternária ficar natural.'
      ],
      steps: [
        'Toque o 6/8 básico a 110 bpm de colcheia, contando "1 2 3 4 5 6" e sentindo o 1 e o 4.',
        'No 6/8 com semicolcheias, toque primeiro só chimbal e bumbo e depois junte a caixa e a ghost note.',
        'No 12/8, conte "1 2 3, 2 2 3, 3 2 3, 4 2 3" para sentir os quatro grupos.',
        'Alterne 4 compassos de balada e 4 de shuffle em 12/8 no mesmo andamento.',
        'Toque junto com uma balada em 6/8 ou 12/8 que você conhece, prestando atenção na caixa no começo do segundo grupo.'
      ],
      mistakes: [
        'Transformar os grupos de três em colcheias retas, de duas em duas. Correção: conte em voz alta e acentue de leve a primeira colcheia de cada grupo no chimbal.',
        'A caixa do 6/8 sair antes da hora, como se fosse o 2 de um 4/4. Correção: conte as seis colcheias e toque a caixa só no 4.',
        'No shuffle, a nota do meio aparecer ou a última nota grudar no tempo seguinte. Correção: fale "1 - 3" em cada grupo e toque só a primeira e a terceira colcheia.',
        'Achar que o andamento está lento e acelerar. Correção: lembre que o BPM é da colcheia; 180 de colcheia é uma balada tranquila.'
      ],
      tips: [
        'Para achar o andamento de uma música em 6/8 ou 12/8, bata palma nos grupos de três e multiplique esse BPM por três.',
        'Na balada em 12/8, a condução no prato em vez do chimbal deixa o som mais aberto.',
        'Se você já toca shuffle em 4/4, você já sabe tocar 12/8. Só a escrita é diferente.'
      ],
      listen: [
        'Nothing Else Matters — Metallica (balada em 6/8)',
        'Since I\'ve Been Loving You — Led Zeppelin (blues lento em 12/8)'
      ],
      ex: [
        { id: 'odd-2a', name: '6/8 básico', desc: 'Chimbal em todas as colcheias, bumbo no 1 e caixa no 4. BPM da colcheia.', bpm: [110, 210], bars: [b1({ b: 6, unit: 8, acc: [0, 3], hh: 'xxx xxx', sn: '--- X--', kd: 'x-- ---' })] },
        { id: 'odd-2b', name: '6/8 com semicolcheias', desc: 'Chimbal em colcheias, bumbo no 1, na semicolcheia antes do 3, no 3 e no 5, caixa no 4 e uma ghost note na semicolcheia antes do 1. BPM da colcheia.', bpm: [80, 150], bars: [b2({ b: 6, unit: 8, acc: [0, 3], hh: 'x- x- x- x- x- x-', sn: '-- -- -- X- -- -g', kd: 'x- -x x- -- x- --' })] },
        { id: 'odd-2c', name: '12/8: balada', desc: 'Chimbal nas 12 colcheias, caixa na 4ª e na 10ª, bumbo na 1ª, 7ª e 9ª. BPM da colcheia.', bpm: [120, 200], bars: [b1({ b: 12, unit: 8, acc: [0, 3, 6, 9], hh: 'xxx xxx xxx xxx', sn: '--- X-- --- X--', kd: 'x-- --- x-x ---' })] },
        { id: 'odd-2d', name: '12/8: shuffle', desc: 'Chimbal na 1ª e na 3ª colcheia de cada grupo, caixa no 2º e no 4º grupo. BPM da colcheia.', bpm: [120, 240], bars: [b1({ b: 12, unit: 8, acc: [0, 3, 6, 9], hh: 'x-x x-x x-x x-x', sn: '--- X-- --- X--', kd: 'x-- --x x-- ---' })] }
      ]
    },
    {
      id: 'odd-3',
      name: '5/4 e 7/8',
      level: 2,
      goal: 'Tocar 5/4 e 7/8 sentindo os grupos de dois e de três, sem contar nota por nota.',
      text: [
        'Compassos como 5/4 e 7/8 parecem estranhos até você perceber que eles são feitos de grupos de dois e de três. O 5/4 quase sempre é sentido como 3+2 ou 2+3. O 7/8 é sentido como 2+2+3, 3+2+2 ou 2+3+2. Ninguém conta "1 2 3 4 5 6 7" em velocidade: o músico sente os grupos.',
        'Por isso o clique destes exercícios acentua o começo de cada grupo. No 5/4 o acento cai no 1 e no 4 (3+2). No 7/8 a unidade é a colcheia, o BPM é o da colcheia, e os acentos mostram o agrupamento: 1ª, 3ª e 5ª colcheias no 2+2+3; 1ª, 4ª e 6ª no 3+2+2. Conte assim: "1 2, 1 2, 1 2 3" ou "1 2 3, 1 2, 1 2".',
        'Os grooves colocam bumbo e caixa justamente no começo dos grupos. Assim o ouvido percebe a divisão sem esforço e você tem pontos de apoio claros. Depois que isso estiver natural, dá para enfeitar à vontade, mas a estrutura dos grupos continua sendo a sua referência.',
        'Compassos ímpares aparecem no rock progressivo, no jazz, no metal e também em arranjos de louvor e de música brasileira que fogem do comum. Mais do que tocar uma música específica, eles treinam algo que vale para tudo: saber exatamente onde está o 1, mesmo quando ele não cai onde você espera.'
      ],
      steps: [
        'Antes de tocar, conte os grupos em voz alta com o clique, batendo palma no começo de cada grupo.',
        'Toque o 5/4 a 70 bpm pensando "1 2 3, 1 2", e não "1 2 3 4 5".',
        'Toque o 7/8 em 2+2+3 a 120 bpm de colcheia até o grupo de três deixar de soar como um tropeço.',
        'Toque o 7/8 em 3+2+2 e compare: são as mesmas sete colcheias com outro balanço.',
        'Alterne 4 compassos de 2+2+3 e 4 de 3+2+2, mantendo o andamento.'
      ],
      mistakes: [
        'Encurtar o grupo de três para ele "caber" como um de dois. Correção: fale o grupo de três mais devagar na cabeça, "1 2 3", e só então volte ao 1.',
        'Contar todas as colcheias seguidas e se perder no meio. Correção: conte os grupos, recomeçando do 1 em cada um.',
        'No 5/4, voltar para o 1 depois do quarto tempo, como se fosse 4/4. Correção: toque o groove com o clique acentuado e marque o 4 (começo do grupo de dois) com o bumbo.',
        'Tocar tenso, com medo de errar a conta. Correção: diminua o andamento até tocar sem pensar e só então suba.'
      ],
      tips: [
        'Cante o agrupamento com sílabas: "ta-ka, ta-ka, ta-ki-ta" para 2+2+3 e "ta-ki-ta, ta-ka, ta-ka" para 3+2+2.',
        'Ouça músicas em compasso ímpar batendo palma nos grupos antes de tentar contar todos os tempos.',
        'No 7/8, o grupo de três é o "respiro" do compasso: deixe ele soar um pouco mais largo na sua cabeça.'
      ],
      listen: [
        'Take Five — Dave Brubeck Quartet (5/4 sentido como 3+2)',
        'Money — Pink Floyd (7/4: o mesmo princípio de sentir um compasso ímpar em grupos)'
      ],
      ex: [
        { id: 'odd-3a', name: '5/4 em 3+2', desc: 'Chimbal em colcheias, bumbo no 1 e no 4, caixa no 2 e no 5.', bpm: [70, 160], bars: [b2({ b: 5, acc: [0, 3], hh: 'xx xx xx xx xx', sn: '-- X- -- -- X-', kd: 'x- -- -- x- --' })] },
        { id: 'odd-3b', name: '7/8 em 2+2+3', desc: 'Chimbal em todas as colcheias, bumbo no 1º e no 3º grupo, caixa no 2º grupo. BPM da colcheia.', bpm: [120, 240], bars: [b1({ b: 7, unit: 8, acc: [0, 2, 4], hh: 'xx xx xxx', sn: '-- X- ---', kd: 'x- -- x--' })] },
        { id: 'odd-3c', name: '7/8 em 3+2+2', desc: 'O grupo de três vem primeiro: bumbo no 1º e no 3º grupo, caixa no 2º grupo. BPM da colcheia.', bpm: [120, 240], bars: [b1({ b: 7, unit: 8, acc: [0, 3, 5], hh: 'xxx xx xx', sn: '--- X- --', kd: 'x-- -- x-' })] }
      ]
    },
    {
      id: 'odd-4',
      name: '9/8 e viradas em compasso ímpar',
      level: 3,
      goal: 'Tocar 9/8 em 2+2+2+3 e fazer viradas em 7/8 que terminam no lugar certo.',
      text: [
        'O 9/8 pode ser sentido de dois jeitos. O mais comum é 3+3+3, que é só um compasso ternário de três grupos. O outro é 2+2+2+3, um agrupamento de origem turca que ficou famoso no jazz com "Blue Rondo à la Turk", do Dave Brubeck Quartet. É esse que você vai tocar aqui: três grupos de dois e um de três no final, que soa como um tropeço proposital.',
        'O groove segue a mesma lógica do 7/8: bumbo e caixa alternando no começo de cada grupo e o grupo de três como um espaço maior antes de voltar ao 1. Como os três primeiros grupos são iguais, o desafio é não deixar o corpo continuar em grupos de dois e "pular" o último de três.',
        'A virada em compasso ímpar é onde muita gente se perde. A regra é simples: a virada também segue os grupos. Em 7/8 (2+2+3), toque um tambor por grupo: caixa no primeiro, tom no segundo e surdo no grupo de três, que tem mais notas. Assim a virada termina naturalmente no lugar certo e você chega no 1 com prato e bumbo.',
        'Quando isso estiver confortável, invente as suas próprias viradas trocando a ordem dos tambores ou colocando acentos no começo de cada grupo. A estrutura de grupos é sempre o seu mapa: enquanto você souber em que grupo está, não se perde.'
      ],
      steps: [
        'Conte o 9/8 em voz alta, "1 2, 1 2, 1 2, 1 2 3", com o clique, antes de tocar.',
        'Toque o groove em 9/8 a 120 bpm de colcheia até o último grupo soar natural.',
        'Na virada em 7/8, toque primeiro só a virada em loop, falando o número de cada grupo.',
        'Junte com o groove: um compasso de groove e um de virada, chegando no 1 com prato e bumbo.',
        'Crie uma virada sua em 7/8 mudando a ordem dos tambores e toque por 2 minutos.'
      ],
      mistakes: [
        'No 9/8, tocar quatro grupos de dois e "perder" uma colcheia. Correção: fale o último grupo mais alto, "1 2 3", até o corpo esperar por ele.',
        'Na virada, distribuir as notas sem pensar nos grupos e chegar no 1 adiantado ou atrasado. Correção: toque um tambor por grupo, como no exercício.',
        'Acelerar no grupo de três da virada, que tem mais notas. Correção: as notas têm todas o mesmo tamanho; o grupo de três só é mais longo.',
        'Esquecer o prato e o bumbo na volta e entrar no groove sem marcar o 1. Correção: treine só o último grupo da virada e o 1 seguinte, em loop.'
      ],
      tips: [
        'Se o 9/8 travar, toque primeiro 3+3+3 e depois troque para 2+2+2+3: a diferença fica bem clara.',
        'Acentos no começo de cada grupo deixam qualquer virada em compasso ímpar mais fácil de acompanhar para a banda.',
        'Grave a virada e confira se o 1 seguinte chega junto com o clique acentuado.'
      ],
      listen: ['Blue Rondo à la Turk — Dave Brubeck Quartet (9/8 agrupado em 2+2+2+3)'],
      ex: [
        { id: 'odd-4a', name: '9/8 em 2+2+2+3', desc: 'Chimbal em todas as colcheias, bumbo no 1º e no 3º grupo, caixa no 2º e no 4º. BPM da colcheia.', bpm: [120, 260], bars: [b1({ b: 9, unit: 8, acc: [0, 2, 4, 6], hh: 'xx xx xx xxx', sn: '-- X- -- X--', kd: 'x- -- x- ---' })] },
        {
          id: 'odd-4b', name: 'Virada em 7/8', desc: 'Um compasso de groove em 7/8 (2+2+3) e uma virada em semicolcheias com um tambor por grupo: caixa, tom 1 e surdo. BPM da colcheia.', bpm: [100, 220], bars: [
            b2({ ...G78, cr: 'x- -- -- -- -- -- --', hh: '-- x- x- x- x- x- x-', sn: '-- -- X- -- -- -- --', kd: 'x- -- -- -- x- -- --' }),
            b2({ ...G78, sn: 'Xx xx -- -- -- -- --', t1: '-- -- Xx xx -- -- --', ft: '-- -- -- -- Xx xx xx', kd: 'x- -- -- -- -- -- --', st: 'DE DE DE DE DE DE DE' })
          ]
        }
      ]
    }
  ]
};
