import { r, b2, b3, b4, b6, b8, seq } from './helpers.js';

// Célula de n notas com acento nas posições dadas: acc(4, [1]) -> 'xXxx'.
const acc = (n, pos) => Array.from({ length: n }, (_, i) => (pos.includes(i) ? 'X' : 'x')).join('');

// Uma manulação por compasso, repetida até encher o compasso.
const combo2 = st => b2({ sn: r('xx', 4), st });          // 8 colcheias
const combo4 = st => b4({ sn: r('xxxx', 4), st: r(st, 2) }); // 16 semicolcheias (grupo de 8 repetido)

// Paradiddle e inversões: o acento cai sempre na nota logo depois do duplo.
const PD = [
  { sn: 'Xxxx Xxxx', st: 'DEDD EDEE' }, // original
  { sn: 'xxXx xxXx', st: 'DDED EEDE' }, // 1ª inversão
  { sn: 'xxxX xxxX', st: 'DEED EDDE' }, // 2ª inversão
  { sn: 'xXxx xXxx', st: 'DEDE EDED' }  // 3ª inversão
];
const pd = i => b4({ sn: r(PD[i].sn, 2), st: r(PD[i].st, 2) });

export default {
  id: 'mao',
  name: 'Técnica de mãos avançada',
  desc: 'Combinações de manulação, inversões do paradiddle, tercinas, grades de acento, velocidade e resistência.',
  lessons: [
    {
      id: 'mao-1',
      name: 'Combinações de manulação',
      level: 2,
      goal: 'Trocar de manulação sem pensar, para que a mão nunca seja o obstáculo.',
      text: [
        'Na hora de tocar uma virada, não há tempo para calcular qual mão vai onde. Se uma manulação não está no automático, o corpo volta para a que conhece, e é por isso que as viradas acabam sempre iguais. Esta lição amplia esse repertório: quanto mais combinações estiverem automáticas, mais ideias diferentes chegam às suas mãos.',
        'A ferramenta é simples: combinações de D e E tocadas em notas regulares, todas no mesmo volume, um compasso de cada. Algumas são familiares (D E D E, D D E E), outras parecem estranhas no começo (D E E D, D D D E). O objetivo não é velocidade, é fluidez: passar de uma combinação para a seguinte sem hesitar e sem mudar o som.',
        'O movimento é o mesmo dos fundamentos: toques livres, mesma altura nas duas mãos, rebote aproveitado. A diferença é que agora as mãos não se revezam de forma previsível, e a mão que toca duas ou três vezes seguidas precisa fazer isso sem endurecer. Se uma combinação travar, isole o trecho difícil, quase sempre a passagem de uma mão para a outra depois de um duplo ou de um triplo, e toque só ele.',
        'Depois de automáticas, essas combinações viram material de kit. Coloque a direita no surdo e a esquerda na caixa, ou a direita no prato e a esquerda num tom, e cada linha vira uma virada ou um groove diferente. Muitos padrões que soam complicados na música são só uma destas combinações espalhada pelos tambores.'
      ],
      steps: [
        'Combinações básicas a 70 bpm. Repita cada compasso quatro vezes antes de passar ao próximo; depois toque os quatro em sequência.',
        'Três da mesma mão a 70 bpm: preste atenção na nota que vem depois do triplo, ela costuma sair fraca.',
        'Combinações em semicolcheias a 60 bpm, com o mesmo volume em todas as notas.',
        'Uma combinação por tempo a 60 bpm: a manulação muda a cada tempo e o som continua igual.',
        'Suba de 5 em 5 bpm. Quando estiver confortável, toque as mesmas linhas com a direita no surdo e a esquerda na caixa.'
      ],
      mistakes: [
        'Acentuar sem querer a primeira nota de cada duplo ou triplo. Correção: grave e ouça; todas as notas no mesmo volume.',
        'Parar entre um compasso e outro para pensar na próxima combinação. Correção: leia o compasso seguinte enquanto toca o atual.',
        'Endurecer a mão que toca três vezes seguidas. Correção: o triplo sai do rebote; a mão quase só acompanha a baqueta.'
      ],
      tips: [
        'Toque cada combinação também começando pela esquerda (troque D por E).',
        'Nas primeiras vezes, fale a manulação em voz alta: "direita, direita, esquerda, direita".',
        'Use estas linhas como aquecimento em andamento baixo.'
      ],
      ex: [
        { id: 'mao-1a', name: 'Combinações básicas', desc: 'Quatro manulações em colcheias, um compasso de cada: D E D E, D D E E, D E D D E D E E e D E E D E D D E.', bpm: [70, 160], pad: true, bars: ['DEDE DEDE', 'DDEE DDEE', 'DEDD EDEE', 'DEED EDDE'].map(combo2) },
        { id: 'mao-1b', name: 'Três da mesma mão', desc: 'D D D E, E D D D, E E E D e D E E E em colcheias, um compasso de cada.', bpm: [70, 150], pad: true, bars: ['DDDE DDDE', 'EDDD EDDD', 'EEED EEED', 'DEEE DEEE'].map(combo2) },
        { id: 'mao-1c', name: 'Combinações em semicolcheias', desc: 'D D E D E E D E, quatro de cada mão, duplos deslocados (D E E D) e E D E D D E D E, um compasso de cada.', bpm: [60, 120], pad: true, bars: ['DDED EEDE', 'DDDD EEEE', 'DEED DEED', 'EDED DEDE'].map(combo4) },
        { id: 'mao-1d', name: 'Uma combinação por tempo', desc: 'D E D E, D D E E, D E D D e E D E E, uma por tempo, com acento no começo de cada tempo. No segundo compasso a ordem muda.', bpm: [60, 120], pad: true, bars: [b4({ sn: r('Xxxx', 4), st: 'DEDE DDEE DEDD EDEE' }), b4({ sn: r('Xxxx', 4), st: 'DEDD EDEE DDEE DEDE' })] }
      ]
    },
    {
      id: 'mao-2',
      name: 'Inversões do paradiddle',
      level: 2,
      goal: 'Tocar as quatro formas do paradiddle e entender por que o acento muda de lugar.',
      text: [
        'O paradiddle tem oito notas por ciclo: D E D D E D E E. Se você começar o mesmo ciclo a partir da segunda, da terceira ou da quarta nota (e trocar as mãos para começar sempre pela direita), ganha as inversões. São quatro formas no total: o original (D E D D E D E E), a primeira inversão (D D E D E E D E), a segunda (D E E D E D D E) e a terceira (D E D E E D E D). Cada uma tem o duplo num lugar diferente do grupo. A numeração das inversões muda de um método para outro; o que importa é a manulação.',
        'Uma regra ajuda a tocar e a ouvir as inversões: o acento cai na nota logo depois do duplo. No original, o duplo fecha o grupo e o acento cai no começo do próximo. Na primeira inversão, o duplo abre o grupo e o acento vai para a terceira nota. Na segunda, para a quarta. Na terceira, para a segunda. A manulação gira e o acento gira junto.',
        'Isso funciona fisicamente porque a mão que acabou de fazer o duplo está baixa, enquanto a outra descansou durante o duplo e teve tempo de subir. O acento sai da mão que está pronta. É a lógica dos quatro toques: o duplo é feito de toques baixos, e a nota anterior a ele, na outra mão, é um toque para cima.',
        'Na música, cada inversão produz um som diferente com as mesmas duas mãos. Com a direita no chimbal e a esquerda na caixa, cada uma vira um groove diferente; com os acentos nos tons, cada uma vira uma virada diferente. Ter as quatro no automático multiplica as suas opções sem que você precise aprender um rudimento novo.'
      ],
      steps: [
        'Revise o paradiddle original a 60 bpm, com acento na primeira nota.',
        'Primeira inversão a 60 bpm: toque primeiro sem acentos até a manulação ficar fluida, depois acrescente o acento na terceira nota.',
        'Faça o mesmo com a segunda e a terceira inversão.',
        'As quatro em sequência: um compasso de cada, sem parar entre eles.',
        'Leve a primeira inversão para os tambores, com os acentos no tom 1 e no surdo. Suba de 5 em 5 bpm até a meta de cada exercício.'
      ],
      mistakes: [
        'Acento caindo no lugar do paradiddle original por hábito. Correção: diga a regra em voz alta, "acento depois do duplo", e toque devagar.',
        'Duplo alto junto com o acento. Correção: o duplo é baixo; só a nota seguinte sobe.',
        'Perder o tempo nas inversões que começam com o duplo. Correção: conte "1 e & a" e confira que a primeira nota de cada grupo cai no tempo.'
      ],
      tips: [
        'Escreva as quatro inversões num papel e deixe ao lado do pad até decorar.',
        'Toque cada inversão também com a direita no chimbal, a esquerda na caixa e o bumbo no 1 e no 3.',
        'Comece cada inversão também pela esquerda.'
      ],
      ex: [
        { id: 'mao-2a', name: '1ª inversão: D D E D', desc: 'D D E D E E D E, com acento na terceira nota de cada grupo, logo depois do duplo.', bpm: [60, 120], pad: true, bars: [pd(1)] },
        { id: 'mao-2b', name: '2ª inversão: D E E D', desc: 'D E E D E D D E, com acento na quarta nota de cada grupo.', bpm: [60, 120], pad: true, bars: [pd(2)] },
        { id: 'mao-2c', name: '3ª inversão: D E D E', desc: 'D E D E E D E D, com acento na segunda nota de cada grupo.', bpm: [60, 120], pad: true, bars: [pd(3)] },
        { id: 'mao-2d', name: 'As quatro em sequência', desc: 'Original, 1ª, 2ª e 3ª inversão, um compasso de cada, com o acento sempre depois do duplo.', bpm: [60, 110], pad: true, bars: seq(4, pd) },
        { id: 'mao-2e', name: '1ª inversão nos tambores', desc: 'D D E D E E D E com os acentos fora da caixa: o da esquerda no tom 1 e o da direita no surdo.', bpm: [60, 110], bars: [b4({ sn: r('xx-x xx-x', 2), t1: r('--X- ----', 2), ft: r('---- --X-', 2), st: r('DDED EEDE', 2) })] }
      ]
    },
    {
      id: 'mao-3',
      name: 'Manulações em tercinas',
      level: 2,
      goal: 'Tocar tercinas com manulações diferentes da alternada, para ganhar velocidade e opções no kit.',
      text: [
        'Na tercina alternada (D E D, E D E), o tempo cai uma vez em cada mão. Isso é ótimo para treinar as duas, mas nem sempre é prático: em muitas viradas você quer que a mesma mão caia sempre no tempo, num prato ou num tom. Para isso servem as manulações de tercina com duplos, como D E E e D D E.',
        'Em D E E, a direita marca o tempo e a esquerda faz um duplo. Em D D E, a direita faz um duplo começando no tempo e a esquerda completa. As duas deixam a direita sempre no tempo e soam como tercinas comuns, mas com movimentos muito diferentes. Em E D D é a esquerda que marca o tempo; além de equilibrar as mãos, isso deixa a direita livre para o chimbal ou o prato em certas viradas.',
        'O movimento lembra o Moeller: o acento no tempo é um toque para baixo, e o duplo sai baixo, com rebote e dedos. Mantenha a mão do duplo perto da pele. Se as duas notas do duplo saírem altas, a tercina perde a forma e o acento some.',
        'O exercício de duplos sobre tercinas é o mais difícil da lição: D D E E contínuo, com acento em cada tempo. Como o ciclo de duplos tem quatro notas e a tercina tem três, o acento cai a cada tempo num ponto diferente do duplo, ora na primeira nota, ora na segunda. Acentuar a segunda nota de um duplo exige muito controle de dedos, e é esse controle que deixa rufos e viradas rápidas limpos.'
      ],
      steps: [
        'D E E a 60 bpm, com clique nas subdivisões. Acento na direita, duplo da esquerda baixo e igual.',
        'D D E e E D D a 60 bpm. Compare com o D E E: as três têm que soar iguais.',
        'Uma manulação por tempo a 60 bpm, falando o nome de cada manulação antes de chegar nela.',
        'Duplos sobre tercinas a 50 bpm. Toque primeiro sem acentos, depois com.',
        'Suba de 5 em 5 bpm. Quando estiver firme, leve o D E E para o kit: direita no surdo e duplo da esquerda na caixa.'
      ],
      mistakes: [
        'O duplo acelera e a tercina fica torta. Correção: clique nas subdivisões e "1 ta ka" em voz alta.',
        'Acento aparecendo na mão do duplo. Correção: toque as tercinas sem acento até ficarem iguais e depois volte com o acento.',
        'Nos duplos sobre tercinas, perder o lugar no compasso. Correção: o ciclo completo dura quatro tempos; diga o 1 de cada compasso em voz alta.'
      ],
      tips: [
        'D E E pelos tons, com a direita descendo do tom 1 para o surdo e a esquerda na caixa, é uma virada em tercina que soa grande e é fácil de tocar.',
        'Treine também com o bumbo no tempo, junto com o acento.',
        'Se o duplo da esquerda estiver fraco, toque alguns minutos de E E em tercinas só com a esquerda.'
      ],
      ex: [
        { id: 'mao-3a', name: 'D E E', desc: 'Tercinas com a direita no tempo e um duplo da esquerda.', bpm: [60, 130], pad: true, bars: [b3({ sn: r('Xxx', 4), st: r('DEE', 4) })] },
        { id: 'mao-3b', name: 'D D E', desc: 'Tercinas com um duplo da direita começando no tempo e a esquerda completando.', bpm: [60, 130], pad: true, bars: [b3({ sn: r('Xxx', 4), st: r('DDE', 4) })] },
        { id: 'mao-3c', name: 'E D D', desc: 'A esquerda marca o tempo e a direita faz o duplo.', bpm: [60, 130], pad: true, bars: [b3({ sn: r('Xxx', 4), st: r('EDD', 4) })] },
        { id: 'mao-3d', name: 'Uma manulação por tempo', desc: 'D E D, E D E, D E E e D D E: a manulação muda a cada tempo e o acento fica no tempo.', bpm: [60, 120], pad: true, bars: [b3({ sn: r('Xxx', 4), st: 'DED EDE DEE DDE' })] },
        { id: 'mao-3e', name: 'Duplos sobre tercinas', desc: 'D D E E contínuo sobre tercinas, com acento em cada tempo: o acento cai ora na primeira, ora na segunda nota de um duplo.', bpm: [50, 110], pad: true, bars: [b3({ sn: r('Xxx', 4), st: 'DDE EDD EED DEE' })] }
      ]
    },
    {
      id: 'mao-4',
      name: 'Grades de acento',
      level: 3,
      goal: 'Colocar um acento em qualquer nota, com qualquer mão, sem mudar o andamento.',
      text: [
        'Uma grade de acentos é um exercício em que as notas não mudam, só o lugar do acento. Parece simples, mas é um dos estudos mais completos que existem: obriga cada mão a fazer os quatro toques em todas as posições do tempo. É o caminho para que os acentos das suas viradas e grooves saiam onde você quer, e não onde a mão prefere.',
        'Começamos com acentos em toques duplos. No D D E E, acentuar a primeira nota de um duplo é natural; acentuar a segunda é difícil, porque ela sai do rebote e dos dedos. Depois vêm os acentos duplos, dois acentos seguidos andando pelo tempo, e as grades em tercinas e sextinas, em que o acento passa por cada posição do tempo e troca de mão.',
        'O último exercício agrupa os acentos de três em três e fecha com dois, dentro de semicolcheias contínuas: 3 + 3 + 2. Esse agrupamento cria uma sensação de deslocamento muito usada em viradas e convenções no rock, no gospel e na música brasileira. Ouvir os acentos formarem uma frase por cima das semicolcheias é o primeiro passo para criar as suas próprias frases.',
        'O controle vem do princípio de sempre: alturas. Acento a 25 cm, notas baixas a 3 cm, e a mão que vai acentuar sobe na nota anterior. Quanto maior o contraste, mais musical a grade. Se tudo estiver soando no mesmo volume, abaixe o andamento até o contraste voltar.'
      ],
      steps: [
        'Acento móvel com toque duplo a 60 bpm. Se precisar, repita cada compasso quatro vezes antes de passar ao próximo.',
        'Acentos duplos móveis a 60 bpm: os dois acentos iguais, mesmo quando cada um cai numa mão.',
        'Grades em tercinas e sextinas a 60 e 50 bpm, com clique nas subdivisões no começo.',
        'Acentos em 3 + 3 + 2: conte "1 e & a" em voz alta e perceba que o acento só coincide com o tempo no 1 e no 3.',
        'Suba de 5 em 5 bpm. Metas entre 100 e 120 bpm, com contraste claro entre acento e nota baixa.'
      ],
      mistakes: [
        'O acento puxa o andamento e você acelera. Correção: metrônomo sempre ligado; o acento cai no lugar exato da nota, nem antes nem depois.',
        'Nota depois do acento alta também. Correção: falta o toque para baixo; treine essa nota isolada até a baqueta parar perto da pele.',
        'Acento que não aparece na segunda nota do duplo. Correção: puxe a baqueta com os dedos; revise o duplo com acento na segunda nota, do módulo de fundamentos.',
        'Perder a contagem no 3 + 3 + 2. Correção: toque primeiro só os acentos com o clique, depois preencha com as notas baixas.'
      ],
      tips: [
        'Leve cada grade para o kit: acentos num prato com bumbo junto, notas baixas na caixa.',
        'Grave e ouça sem olhar a grade. Se você não conseguir dizer onde está o acento, o contraste está pequeno.',
        'Comece algumas vezes pela esquerda.'
      ],
      ex: [
        { id: 'mao-4a', name: 'Acento móvel com toque duplo', desc: 'D D E E contínuo com um acento por tempo, que anda uma nota a cada compasso.', bpm: [60, 110], pad: true, bars: seq(4, i => b4({ sn: r(acc(4, [i]), 4), st: r('DDEE', 4) })) },
        { id: 'mao-4b', name: 'Acentos duplos móveis', desc: 'Dois acentos seguidos em semicolcheias alternadas, andando uma nota a cada compasso.', bpm: [60, 110], pad: true, bars: seq(4, i => b4({ sn: r(acc(4, [i, (i + 1) % 4]), 4), st: r('DEDE', 4) })) },
        { id: 'mao-4c', name: 'Grade de acentos em tercinas', desc: 'Tercinas alternadas com o acento na primeira, na segunda e na terceira nota, um compasso de cada.', bpm: [60, 120], pad: true, bars: seq(3, i => b3({ sn: r(acc(3, [i]), 4), st: 'DED EDE DED EDE' })) },
        { id: 'mao-4d', name: 'Grade de acentos em sextinas', desc: 'Sextinas alternadas com dois acentos por tempo, que andam uma nota a cada compasso.', bpm: [50, 100], pad: true, bars: seq(3, i => b6({ sn: r(acc(6, [i, i + 3]), 4), st: r('DEDEDE', 4) })) },
        { id: 'mao-4e', name: 'Acentos em 3 + 3 + 2', desc: 'Semicolcheias alternadas com acentos agrupados de três em três e fechando com dois, duas vezes por compasso.', bpm: [60, 120], pad: true, bars: [b4({ sn: r('XxxXxxXx', 2), st: r('DEDE', 4) })] }
      ]
    },
    {
      id: 'mao-5',
      name: 'Velocidade e resistência',
      level: 3,
      goal: 'Ganhar velocidade com rajadas curtas e resistência com tempo de execução, sem tensão.',
      text: [
        'Velocidade não se constrói tocando rápido o tempo todo. Se você toca no limite por minutos seguidos, o corpo endurece e aprende tensão. As rajadas resolvem isso: um trecho curto na velocidade alvo, seguido de descanso. O músculo experimenta o movimento rápido e solta logo em seguida, e o cérebro aprende o gesto sem a fadiga.',
        'Nas rajadas, a técnica muda com a velocidade. Em semicolcheias rápidas, as notas saem do pulso com ajuda dos dedos. Em fusas, a altura cai para poucos centímetros, os dedos e o rebote assumem e o pulso só guia. A rajada em marchas mostra essa transição dentro de um único compasso: colcheias, semicolcheias, fusas e um acento.',
        'Resistência é outra coisa: é manter um andamento por muito tempo sem perder a qualidade. Num culto, num show ou num ensaio, você toca músicas inteiras sem parar, e a mão não pode cansar no terceiro minuto. O exercício de resistência é medido em tempo: dois minutos de toques simples, sem parar, com o som igual do começo ao fim.',
        'A regra de ouro dos dois treinos: se a tensão aparecer, pare. Sacuda as mãos, respire e recomece num andamento um pouco mais baixo. Tensão acumulada não vira velocidade, vira lesão. O progresso aqui é lento e constante, de 5 em 5 bpm, semana após semana.'
      ],
      steps: [
        'Rajada de semicolcheias a 80 bpm. A rajada é solta e o descanso é de verdade: as mãos param e relaxam.',
        'Rajada de fusas a 50 bpm, com as baquetas a poucos centímetros da pele.',
        'Rajada em marchas a 50 bpm. A passagem de colcheia para semicolcheia e para fusa não pode acelerar o tempo.',
        'Rajada de duplos em fusas a 50 bpm: a segunda nota de cada duplo vem dos dedos.',
        'Resistência: escolha um andamento em que você toca relaxado e mantenha por 2 minutos. Só suba quando terminar os 2 minutos com o som igual ao do começo.'
      ],
      mistakes: [
        'Apertar a baqueta para ganhar velocidade. Correção: velocidade vem de movimentos menores, não de mais força; abaixe as baquetas.',
        'Ficar tenso no descanso da rajada, "se preparando". Correção: no descanso, as mãos ficam paradas e soltas.',
        'Na resistência, aumentar volume e altura sem perceber. Correção: grave os dois minutos e compare o começo com o fim.',
        'Insistir com dor no antebraço. Correção: pare, descanse e diminua o andamento no dia seguinte.'
      ],
      tips: [
        'Faça as rajadas depois do aquecimento, nunca com a mão fria.',
        'Alterne dias de velocidade com dias de controle lento. Um treino ajuda o outro.',
        'Na resistência, preste atenção na respiração: inspire em quatro tempos, solte em quatro.'
      ],
      ex: [
        { id: 'mao-5a', name: 'Rajada de semicolcheias', desc: 'Dois tempos de semicolcheias alternadas, um acento no tempo 3 e descanso até o fim do compasso.', bpm: [80, 160], pad: true, bars: [b4({ sn: 'Xxxx xxxx X--- ----', st: 'DEDE DEDE D--- ----' })] },
        { id: 'mao-5b', name: 'Rajada de fusas', desc: 'Um tempo de fusas alternadas, um acento no tempo 2 e descanso no resto do compasso.', bpm: [50, 95], pad: true, bars: [b8({ sn: 'Xxxxxxxx X------- -------- --------', st: 'DEDEDEDE D------- -------- --------' })] },
        { id: 'mao-5c', name: 'Rajada em marchas', desc: 'Colcheias, semicolcheias e fusas, um tempo de cada, e um acento no tempo 4: a velocidade muda e o tempo não.', bpm: [50, 95], pad: true, bars: [b8({ sn: 'x---x--- x-x-x-x- xxxxxxxx X-------', st: 'D---E--- D-E-D-E- DEDEDEDE D-------' })] },
        { id: 'mao-5d', name: 'Rajada de duplos em fusas', desc: 'Um tempo de D D E E em fusas, um acento no tempo 2 e descanso no resto do compasso.', bpm: [50, 90], pad: true, bars: [b8({ sn: 'Xxxxxxxx X------- -------- --------', st: 'DDEEDDEE D------- -------- --------' })] },
        { id: 'mao-5e', name: 'Resistência: toques simples por 2 minutos', desc: 'Semicolcheias alternadas por 2 minutos sem parar, com o som igual do começo ao fim.', bpm: [80, 140], pad: true, endurance: 2, bars: [b4({ sn: r('xxxx', 4), st: r('DEDE', 4) })] }
      ]
    }
  ]
};
