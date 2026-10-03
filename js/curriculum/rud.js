import { r, b2, b3, b4, b6, b8 } from './helpers.js';

export default {
  id: 'rud',
  name: 'Rudimentos',
  desc: 'Paradiddles, rolos, flams e drags: o vocabulário que tira suas viradas e seus grooves do óbvio.',
  lessons: [
    {
      id: 'rud-1',
      name: 'Paradiddles',
      level: 1,
      goal: 'Misturar toques simples e duplos e trocar a mão que conduz a cada grupo.',
      text: [
        'O paradiddle é a mistura mais simples de toques simples e duplos: dois simples e um duplo (D E D D, E D E E). O nome imita o som: "pa-ra" são as duas notas simples e "did-dle" é o duplo. Como o grupo tem quatro notas e termina com duas da mesma mão, o grupo seguinte começa com a outra mão. É isso que o torna tão útil: a mão que conduz troca sozinha.',
        'A lista de 40 rudimentos da Percussive Arts Society (PAS), a referência internacional usada por professores do mundo todo, tem três paradiddles: o simples (nº 16), o duplo (nº 17) e o triplo (nº 18). Os três seguem a mesma lógica, notas alternadas e um duplo no final. O duplo e o triplo só acrescentam mais notas alternadas antes do duplo.',
        'O movimento: o acento é a primeira nota do grupo e as outras três são baixas. A mão que acentua faz um toque para baixo e fica perto da pele, e o duplo que vem depois sai baixo e igual. Quem domina os quatro toques do módulo de fundamentos já tem tudo o que precisa; aqui é só aplicar.',
        'Na música, o paradiddle aparece em toda parte. No groove, com a direita no chimbal e a esquerda na caixa em ghost notes, ele cria uma condução com balanço muito usada em funk, gospel e pop. Nas viradas, levar os acentos para os tons faz a mesma manulação soar completamente nova. É uma das saídas mais rápidas para quem sente que toca sempre as mesmas viradas.'
      ],
      steps: [
        'Fale "pa-ra-di-dle" em voz alta enquanto toca o paradiddle simples a 60 bpm, com acento na primeira nota.',
        'Suba de 5 em 5 bpm até 100 bpm. Confira se os duplos continuam baixos e iguais.',
        'No paradiddle com acentos nos tons, volte para 60 bpm. A direita acentua no surdo, a esquerda no tom 1 e as notas baixas ficam na caixa.',
        'Passe para o triplo paradiddle a 60 bpm. Conte "1 e & a" e note que o acento cai sempre no começo de cada meio compasso.',
        'Metas: simples a 130, com acentos nos tons a 120, triplo a 120.'
      ],
      mistakes: [
        'Acentuar também o duplo. Correção: depois do acento a mão desce e fica embaixo; o duplo é baixo até o próximo acento.',
        'Segunda nota do duplo engolida. Correção: volte ao toque duplo do módulo de fundamentos e reintroduza o paradiddle devagar.',
        'Correr no começo de cada grupo. Correção: metrônomo com clique nas subdivisões até os grupos ficarem regulares.',
        'Nos tons, a mão chega atrasada no tambor. Correção: a mão já se posiciona sobre o tambor durante as notas baixas, antes do acento.'
      ],
      tips: [
        'Os duplos do paradiddle são baixos e os acentos são altos.',
        'Comece metade das vezes pela esquerda (E D E E, D E D D).',
        'Depois de dominar, toque a direita no chimbal e a esquerda na caixa com bumbo no 1 e no 3: você vai ouvir um groove novo.'
      ],
      ex: [
        { id: 'rud-1a', name: 'Paradiddle simples', desc: 'Rudimento PAS nº 16, com acento na primeira nota de cada grupo.', bpm: [60, 130], pad: true, bars: [b4({ sn: 'Xxxx Xxxx Xxxx Xxxx', st: 'DEDD EDEE DEDD EDEE' })] },
        { id: 'rud-1b', name: 'Paradiddle com acentos nos tons', desc: 'O acento da direita vai para o surdo e o da esquerda para o tom 1. As notas baixas ficam na caixa.', bpm: [60, 120], bars: [b4({ ft: 'X--- ---- X--- ----', t1: '---- X--- ---- X---', sn: '-xxx -xxx -xxx -xxx', st: 'DEDD EDEE DEDD EDEE' })] },
        { id: 'rud-1c', name: 'Triplo paradiddle', desc: 'Rudimento PAS nº 18. D E D E D E D D, E D E D E D E E: um grupo a cada dois tempos, com acento na primeira nota.', bpm: [60, 120], pad: true, bars: [b4({ sn: 'Xxxx xxxx Xxxx xxxx', st: 'DEDE DEDD EDED EDEE' })] }
      ]
    },
    {
      id: 'rud-2',
      name: 'Rudimentos de seis notas',
      level: 2,
      goal: 'Dominar os rudimentos que cabem exatamente numa sextina.',
      text: [
        'Três rudimentos têm seis notas por ciclo e encaixam certinho numa sextina: o paradiddle-diddle (D E D D E E, PAS nº 19), o duplo paradiddle (D E D E D D, PAS nº 17) e o six stroke roll (D EE DD E, PAS nº 8). Eles são a ponte entre a técnica de mãos e as viradas em sextina que você ouve no gospel e no rock.',
        'O paradiddle-diddle é o mais usado em viradas rápidas. Ele não troca a mão que conduz: todo grupo começa com a direita. Isso deixa a direita livre para cair sempre no tempo, num tambor diferente a cada tempo, enquanto os dois duplos preenchem. O duplo paradiddle, ao contrário, troca de mão a cada grupo, como o paradiddle simples.',
        'O six stroke roll é um rolo: uma nota simples, dois duplos e outra simples (D EE DD E). Os acentos ficam na primeira e na última nota, então cada grupo começa e termina com um acento, um em cada mão, e os duplos baixos ficam no meio. No kit, esses acentos vão para pratos ou tons e os duplos ficam na caixa, o que rende uma virada cheia com pouco esforço.',
        'Nos três, o segredo é o contraste: acentos altos, duplos baixos e iguais. Em sextinas, a mão tem pouco tempo entre um acento e a nota seguinte, então o toque para baixo depois do acento precisa ser automático. Se os duplos saírem altos, a sextina vira um borrão de notas iguais.'
      ],
      steps: [
        'Ligue o clique nas subdivisões e toque o paradiddle-diddle a 50 bpm, falando "1 ta ka e ta ka".',
        'Passe para o clique só no tempo quando a sextina estiver regular.',
        'No duplo paradiddle, sinta a troca de mão a cada tempo. Conte em voz alta para não perder o 1.',
        'No six stroke roll, toque primeiro sem acentos para igualar os duplos. Depois acrescente os acentos.',
        'Suba de 5 em 5 bpm. Metas entre 110 e 120 bpm, com os duplos baixos e iguais.'
      ],
      mistakes: [
        'Duplos altos que apagam os acentos. Correção: abaixe as mãos nos duplos; eles saem dos dedos, a 3 cm da pele.',
        'Correr na sextina e chegar antes no tempo seguinte. Correção: volte ao clique nas subdivisões e diminua 10 bpm.',
        'No six stroke roll, acento final fraco. Correção: a mão do acento final já sobe durante o duplo anterior, num toque para cima.'
      ],
      tips: [
        'Comece com o clique nas subdivisões e depois passe para o clique só no tempo.',
        'Leve o paradiddle-diddle para o kit: a primeira nota de cada grupo num tambor, o resto na caixa, um tambor diferente a cada tempo.',
        'Toque o six stroke roll com os acentos em dois pratos e os duplos na caixa: é uma virada pronta.'
      ],
      ex: [
        { id: 'rud-2a', name: 'Paradiddle-diddle', desc: 'Rudimento PAS nº 19. D E D D E E em sextinas, com acento no tempo.', bpm: [50, 120], pad: true, bars: [b6({ sn: r('Xxxxxx', 4), st: r('DEDDEE', 4) })] },
        { id: 'rud-2b', name: 'Duplo paradiddle', desc: 'Rudimento PAS nº 17. D E D E D D, E D E D E E: a mão que conduz troca a cada tempo.', bpm: [50, 110], pad: true, bars: [b6({ sn: r('Xxxxxx', 4), st: 'DEDEDD EDEDEE DEDEDD EDEDEE' })] },
        { id: 'rud-2c', name: 'Six stroke roll', desc: 'Rudimento PAS nº 8. D EE DD E, com acento na primeira e na última nota.', bpm: [50, 110], pad: true, bars: [b6({ sn: r('XxxxxX', 4), st: r('DEEDDE', 4) })] }
      ]
    },
    {
      id: 'rud-3',
      name: 'Flams',
      level: 2,
      goal: 'Tocar a nota de enfeite baixa e a principal alta, quase juntas, e usar o flam para engrossar acentos.',
      text: [
        'O flam é uma nota de enfeite, bem baixa e perto da pele, tocada um instante antes da nota principal. Soa como uma nota só, mais grossa: "flam". Na grade, o enfeite aparece como um pontinho antes da nota, e a letra da manulação mostra a mão da nota principal. Um flam de direita tem o enfeite na esquerda.',
        'O segredo é a altura das mãos. A mão do enfeite começa baixa, a 2 ou 3 cm da pele; a mão principal começa alta. As duas descem juntas, com o mesmo movimento, e como uma está mais perto, ela chega primeiro. Você não precisa atrasar nenhuma das mãos: a diferença de altura faz o trabalho.',
        'Para tocar flams seguidos, as mãos trocam de altura depois de cada flam. A mão principal faz um toque para baixo e fica embaixo, pronta para ser o próximo enfeite. A mão do enfeite faz um toque para cima e vai para o alto, pronta para ser a próxima principal. É a lição dos quatro toques aplicada.',
        'Os rudimentos desta lição são o flam (PAS nº 20), o flam accent (nº 21), o flam tap (nº 22) e o flamacue (nº 23). No kit, flams na caixa e nos tons dão peso a viradas lentas, e o flam tap descendo pelos tons é uma virada clássica do rock. Em grooves de gospel e de funk, um flam no backbeat engrossa a caixa sem precisar bater mais forte.'
      ],
      steps: [
        'Sem metrônomo, prepare a posição: direita alta, esquerda a 2 cm. Deixe as duas caírem juntas. Repita até soar "flam", e não "fla-am" nem uma nota só achatada.',
        'Flam alternado a 50 bpm. Depois de cada flam, confira se as mãos trocaram de altura.',
        'Flam tap a 50 bpm. A mão principal faz o flam e logo a nota baixa; a outra mão já se prepara para o próximo flam.',
        'Flam accent em tercinas a 50 bpm: flam no tempo e duas notas baixas.',
        'Flamacue por último: o acento cai na segunda nota, e não no flam. Suba de 5 em 5 bpm. Metas entre 100 e 120 bpm.'
      ],
      mistakes: [
        'Flam achatado, com as duas notas juntas. Correção: abaixe mais a mão do enfeite.',
        'Flam aberto demais, soando como duas notas separadas. Correção: deixe as mãos caírem juntas, no mesmo movimento.',
        'Enfeite alto demais, soando como uma segunda nota principal. Correção: o enfeite começa e termina perto da pele.',
        'Mãos que não trocam de altura nos flams alternados. Correção: pense numa gangorra: quando uma mão desce, a outra sobe.'
      ],
      tips: [
        'Se as duas notas soarem juntas, abaixe mais a mão do enfeite.',
        'Depois de cada flam, as mãos já trocam de altura para o próximo.',
        'Grave em vídeo, de lado: dá para ver com clareza se as alturas estão certas.'
      ],
      ex: [
        { id: 'rud-3a', name: 'Flam alternado', desc: 'Rudimento PAS nº 20. Flams em colcheias, alternando a mão principal.', bpm: [50, 120], pad: true, bars: [b2({ sn: r('ff', 4), st: r('DE', 4) })] },
        { id: 'rud-3b', name: 'Flam tap', desc: 'Rudimento PAS nº 22. Flam seguido de uma nota baixa com a mesma mão.', bpm: [50, 110], pad: true, bars: [b4({ sn: r('fxfx', 4), st: r('DDEE', 4) })] },
        { id: 'rud-3c', name: 'Flam accent', desc: 'Rudimento PAS nº 21. Em tercinas: flam no tempo e duas notas baixas, alternando a mão principal a cada tempo.', bpm: [50, 110], pad: true, bars: [b3({ sn: r('fxx', 4), st: 'DED EDE DED EDE' })] },
        { id: 'rud-3d', name: 'Flamacue', desc: 'Rudimento PAS nº 23. Flam, três semicolcheias com acento na primeira delas e um flam no tempo seguinte.', bpm: [50, 100], pad: true, bars: [b4({ sn: 'fXxx f--- fXxx f---', st: 'DEDE D--- EDED E---' })] }
      ]
    },
    {
      id: 'rud-4',
      name: 'Rolos: simples, duplos, triplos e prensados',
      level: 2,
      goal: 'Controlar os quatro tipos de rolo e passar do lento ao rápido sem perder a regularidade.',
      text: [
        'Rolo é qualquer sequência de notas tão próximas que soa como um som contínuo. Existem quatro maneiras de produzir um rolo: com toques simples (D E D E), com toques duplos (D D E E), com toques triplos (D D D E E E) e com toques múltiplos, o rolo prensado. Cada um tem um som e um uso, e um baterista completo domina os quatro.',
        'O rolo de toques simples (PAS nº 1) é o mais forte e articulado, porque cada nota é um toque de pulso ou de dedos. Dois rudimentos curtos derivam dele: o single stroke four (nº 2), três notas rápidas que caem num acento, e o single stroke seven (nº 3), seis notas rápidas e um acento. São células de virada muito usadas: uma rajada curta que termina num prato.',
        'O rolo de toques duplos (nº 6) soa mais liso, porque cada mão faz duas notas por movimento. O treino clássico é abrir e fechar: começar devagar, com os duplos bem separados, apertar a subdivisão até virar um rolo contínuo e voltar. O rolo de toques triplos (nº 5) segue a mesma ideia com três notas por mão e encaixa naturalmente em tercinas e sextinas.',
        'O rolo prensado (nº 4), também chamado de buzz roll, é diferente: você pressiona levemente a baqueta contra a pele e ela quica várias vezes sozinha, fazendo um "zzz". Alternando as mãos com esses toques prensados, o som fica totalmente contínuo. É o rolo das marchas, das baladas e dos crescendos na caixa antes de a banda entrar. Na grade, ele aparece como "z".',
        'Em todos os rolos a regra é a mesma: as duas mãos têm que soar iguais. Rolo "mancando" é sempre sinal de uma mão mais fraca ou de tensão. Volte ao andamento em que soa igual e suba devagar.'
      ],
      steps: [
        'Single stroke four e single stroke seven a 50 bpm: as notas rápidas baixas, o acento alto. Fale a contagem.',
        'Rolo de toques simples abrindo e fechando a 50 bpm: colcheias, semicolcheias, fusas e volta. Cada degrau dura o compasso inteiro.',
        'Rolo de toques duplos com a mesma escada. Nas fusas, a segunda nota de cada mão sai do rebote e dos dedos.',
        'Rolo de toques triplos a 50 bpm, em tercinas e sextinas. A terceira nota é a que mais some: preste atenção nela.',
        'Rolo prensado a 70 bpm: pressione só o suficiente para a baqueta quicar três ou quatro vezes. Ajuste até as duas mãos soarem iguais e o som ficar contínuo. Em todos, suba de 5 em 5 bpm.'
      ],
      mistakes: [
        'Rolo de toques duplos com a segunda nota fraca. Correção: abra e feche devagar e acentue a segunda nota por algumas repetições.',
        'Rolo prensado com buracos entre os toques. Correção: aumente a pressão ou o andamento até um toque encostar no outro.',
        'Esmagar a baqueta no rolo prensado. Correção: a pressão é leve; se a baqueta não quica, você está apertando demais.',
        'Acelerar ao fechar o rolo e não conseguir abrir de novo. Correção: cada degrau da escada dura um compasso inteiro no andamento do clique.'
      ],
      tips: [
        'Os rolos lentos são de pulso; os rápidos são de dedos e rebote. A dificuldade mora na passagem de um para o outro, no meio da escada.',
        'Abaixo de 70 bpm, o rolo prensado em semicolcheias abre buracos. Nesse caso, use uma subdivisão mais rápida, como sextinas.',
        'Toque os rolos também com crescendo e decrescendo, do quase nada ao forte. É assim que eles aparecem na música.'
      ],
      ex: [
        { id: 'rud-4a', name: 'Single stroke four', desc: 'Rudimento PAS nº 2. Três notas rápidas e baixas que caem num acento no meio de cada tempo.', bpm: [50, 110], pad: true, bars: [b6({ sn: r('xxxX--', 4), st: r('DEDE--', 4) })] },
        { id: 'rud-4b', name: 'Single stroke seven', desc: 'Rudimento PAS nº 3. Seis notas rápidas em sextina e um acento no tempo seguinte, alternando a mão que começa.', bpm: [50, 110], pad: true, bars: [b6({ sn: 'xxxxxx X----- xxxxxx X-----', st: 'DEDEDE D----- EDEDED E-----' })] },
        {
          id: 'rud-4c', name: 'Rolo de toques simples: abrir e fechar', desc: 'Rudimento PAS nº 1. Colcheias, semicolcheias, fusas e de volta às semicolcheias, sem mudar o andamento.', bpm: [50, 90], pad: true,
          bars: [b2({ sn: r('xx', 4), st: r('DE', 4) }), b4({ sn: r('xxxx', 4), st: r('DEDE', 4) }), b8({ sn: r('xxxxxxxx', 4), st: r('DEDEDEDE', 4) }), b4({ sn: r('xxxx', 4), st: r('DEDE', 4) })]
        },
        {
          id: 'rud-4d', name: 'Rolo de toques duplos: abrir e fechar', desc: 'Rudimento PAS nº 6. A mesma escada com D D E E: colcheias, semicolcheias, fusas e volta.', bpm: [50, 90], pad: true,
          bars: [b2({ sn: r('xx', 4), st: 'DD EE DD EE' }), b4({ sn: r('xxxx', 4), st: r('DDEE', 4) }), b8({ sn: r('xxxxxxxx', 4), st: r('DDEEDDEE', 4) }), b4({ sn: r('xxxx', 4), st: r('DDEE', 4) })]
        },
        { id: 'rud-4e', name: 'Rolo de toques triplos', desc: 'Rudimento PAS nº 5. D D D E E E, primeiro em tercinas e depois em sextinas.', bpm: [50, 90], pad: true, bars: [b3({ sn: r('xxx', 4), st: 'DDD EEE DDD EEE' }), b6({ sn: r('xxxxxx', 4), st: r('DDDEEE', 4) })] },
        { id: 'rud-4f', name: 'Rolo prensado', desc: 'Rudimento PAS nº 4. Toques prensados alternados em semicolcheias, formando um som contínuo que termina num acento.', bpm: [70, 120], pad: true, bars: [b4({ sn: r('zzzz', 4), st: r('DEDE', 4) }), b4({ sn: 'zzzz zzzz zzzz X---', st: 'DEDE DEDE DEDE D---' })] }
      ]
    },
    {
      id: 'rud-5',
      name: 'Rolos de cinco, sete e nove toques',
      level: 3,
      goal: 'Tocar rolos curtos e medidos que terminam num acento, a base de muitas viradas e chegadas.',
      text: [
        'Os rolos de toques são rolos curtos e medidos: um número exato de notas que termina num acento. O nome conta as notas. O rolo de cinco toques tem dois duplos e um acento (D D E E D), o de sete tem três duplos e um acento (E E D D E E D) e o de nove tem quatro duplos e um acento (D D E E D D E E D). O six stroke roll, da lição de seis notas, é da mesma família.',
        'Na lista da PAS, eles são o nº 7 (cinco toques), o nº 9 (sete toques) e o nº 10 (nove toques). Os duplos são rápidos e baixos, e o acento final é alto. Todos alternam a mão do acento a cada repetição, então você precisa de duplos iguais e de acentos iguais nas duas mãos.',
        'O ritmo dos duplos depende do andamento e do contexto. Em andamento lento, os duplos podem ser semicolcheias, e o rolo soa aberto, com cada nota clara. Em andamentos médios e rápidos, os duplos viram fusas ou sextinas e o rolo soa fechado, quase contínuo. Esta lição traz as duas versões do rolo de cinco para você sentir a diferença.',
        'Na música, esses rolos são chegadas. O rolo de cinco que termina num acento de prato é uma das viradas curtas mais usadas no rock e no gospel, e o de nove preenche um tempo inteiro antes de uma entrada. Pense neles como frases que apontam para a nota final: o acento é o destino, os duplos são o caminho.'
      ],
      steps: [
        'Rolo de cinco aberto a 60 bpm, com duplos em semicolcheias: quatro notas baixas e iguais, acento alto.',
        'Rolo de cinco fechado, com duplos em fusas, a 50 bpm. A primeira nota de cada duplo vem do pulso e a segunda dos dedos.',
        'Rolo de sete em sextinas a 50 bpm: os três duplos ocupam o tempo inteiro e o acento cai no tempo seguinte.',
        'Rolo de nove em fusas a 50 bpm. Conte "1 e & a" e confira que o acento cai certinho no tempo.',
        'Suba de 5 em 5 bpm. Metas entre 100 e 130 bpm, com o acento sempre no lugar.'
      ],
      mistakes: [
        'O acento final chega antes do tempo. Correção: os duplos têm duração exata; conte e use o clique nas subdivisões.',
        'Duplos desiguais, com a mão fraca mais baixa. Correção: toque só os duplos, sem o acento, até as duas mãos soarem iguais.',
        'Acento final fraco porque a mão ficou presa nos duplos. Correção: a mão do acento já sobe durante o último duplo da outra mão.'
      ],
      tips: [
        'O acento é o destino da frase. Toque os duplos "olhando" para ele.',
        'No kit, toque os duplos na caixa e o acento num prato com o bumbo junto.',
        'Depois de dominar, comece o rolo em outros pontos do compasso para que ele chegue em tempos diferentes.'
      ],
      ex: [
        { id: 'rud-5a', name: 'Rolo de cinco toques aberto', desc: 'Rudimento PAS nº 7 em versão lenta: dois duplos em semicolcheias e o acento no tempo seguinte.', bpm: [60, 130], pad: true, bars: [b4({ sn: 'xxxx X--- xxxx X---', st: 'DDEE D--- EEDD E---' })] },
        { id: 'rud-5b', name: 'Rolo de cinco toques fechado', desc: 'Rudimento PAS nº 7 com os duplos em fusas, ocupando meio tempo, e o acento no "&".', bpm: [50, 100], pad: true, bars: [b8({ sn: r('xxxxX---', 4), st: 'DDEED--- EEDDE--- DDEED--- EEDDE---' })] },
        { id: 'rud-5c', name: 'Rolo de sete toques', desc: 'Rudimento PAS nº 9. Três duplos em sextina e o acento no tempo seguinte.', bpm: [50, 110], pad: true, bars: [b6({ sn: 'xxxxxx X----- xxxxxx X-----', st: 'EEDDEE D----- DDEEDD E-----' })] },
        { id: 'rud-5d', name: 'Rolo de nove toques', desc: 'Rudimento PAS nº 10. Quatro duplos em fusas, um tempo inteiro, e o acento no tempo seguinte.', bpm: [50, 100], pad: true, bars: [b8({ sn: 'xxxxxxxx X------- xxxxxxxx X-------', st: 'DDEEDDEE D------- EEDDEEDD E-------' })] }
      ]
    },
    {
      id: 'rud-6',
      name: 'Drags',
      level: 3,
      goal: 'Tocar duas notas de enfeite rápidas e baixas antes da principal, sem atrapalhar o tempo.',
      text: [
        'O drag é parecido com o flam, mas o enfeite tem duas notas em vez de uma: um duplo bem rápido e baixo, tocado por uma mão, logo antes da nota principal da outra mão. Soa como "drrr-tá". Na grade, o drag aparece como "d", e a letra da manulação mostra a mão da nota principal. Um drag de direita tem o duplo de enfeite na esquerda.',
        'O enfeite é um toque duplo pequeno, quase prensado, tocado perto da pele e saindo dos dedos. A mão principal começa alta e cai no tempo. Como no flam, a diferença de altura é o que separa o enfeite da nota. Se o duplo de enfeite sair alto, ele vira três notas iguais e muda o ritmo.',
        'Os rudimentos desta lição são o drag (PAS nº 31), o single drag tap (nº 32), o lesson 25 (nº 34) e o single ratamacue (nº 38). O lesson 25 e o ratamacue são frases curtas que terminam num acento, ótimas para viradas. O ratamacue, em especial, soa como uma rajada curta de notas com um "rasgado" no começo.',
        'Na música, o drag é ornamento. Um drag na caixa antes do backbeat dá um sotaque de marcha, de rock antigo e de shuffle. Nos tons, cria viradas com uma textura diferente das viradas de toques simples. É um detalhe pequeno que faz quem ouve perceber que você não está tocando sempre a mesma coisa.'
      ],
      steps: [
        'Sem metrônomo, toque só o enfeite: um duplo bem baixo e rápido com a esquerda, seguido da direita alta. Repita até soar como uma coisa só.',
        'Drag alternado a 50 bpm, um por tempo. A mão que tocou a nota principal desce e prepara o próximo enfeite.',
        'Single drag tap a 50 bpm: drag e uma nota baixa, alternando.',
        'Lesson 25 e single ratamacue a 50 bpm. O acento final tem que ser o som mais alto da frase.',
        'Suba de 5 em 5 bpm. Metas entre 100 e 110 bpm, com o enfeite ainda baixo.'
      ],
      mistakes: [
        'Enfeite alto que vira três notas iguais. Correção: o duplo de enfeite sai a 2 cm da pele, tocado com os dedos.',
        'Enfeite aberto demais, que atrasa a nota principal. Correção: o enfeite é rápido e colado na nota principal; pense nele como parte dela.',
        'Perder a nota principal porque a mão estava presa no enfeite. Correção: treine o enfeite isolado até ele sair sem esforço.',
        'Atrasar o tempo quando o drag entra. Correção: a nota principal cai no tempo; o enfeite vem antes e "rouba" um pedacinho do tempo anterior.'
      ],
      tips: [
        'Fale "drrr-tá" enquanto toca.',
        'Toque um drag no backbeat de um rock básico e ouça como o groove muda.',
        'O ratamacue pelos tons, com o acento no surdo, é uma virada curta pronta.'
      ],
      ex: [
        { id: 'rud-6a', name: 'Drag', desc: 'Rudimento PAS nº 31. Um drag por tempo, alternando a mão principal.', bpm: [50, 100], pad: true, bars: [b2({ sn: 'd- d- d- d-', st: 'D- E- D- E-' })] },
        { id: 'rud-6b', name: 'Single drag tap', desc: 'Rudimento PAS nº 32. Drag e uma nota baixa com a outra mão, alternando a cada tempo.', bpm: [50, 100], pad: true, bars: [b2({ sn: r('dx', 4), st: 'DE ED DE ED' })] },
        { id: 'rud-6c', name: 'Lesson 25', desc: 'Rudimento PAS nº 34. Drag, nota baixa e acento: duas semicolcheias e uma colcheia por tempo.', bpm: [50, 110], pad: true, bars: [b4({ sn: r('dxX-', 4), st: 'DED- EDE- DED- EDE-' })] },
        { id: 'rud-6d', name: 'Single ratamacue', desc: 'Rudimento PAS nº 38. Drag no começo de três notas rápidas e acento no meio de cada tempo.', bpm: [50, 100], pad: true, bars: [b6({ sn: r('dxxX--', 4), st: 'DEDE-- EDED-- DEDE-- EDED--' })] }
      ]
    },
    {
      id: 'rud-7',
      name: 'Flams avançados',
      level: 3,
      goal: 'Combinar flams com paradiddles e tercinas para criar texturas de virada que soam diferentes.',
      text: [
        'Com o flam e o flam tap firmes, você pode juntar o flam com outras células. Esta lição traz quatro rudimentos: o flam paradiddle (PAS nº 24), o pataflafla (nº 27), o swiss army triplet (nº 28) e o inverted flam tap (nº 29). Cada um ensina um problema diferente de troca de altura entre as mãos.',
        'O flam paradiddle é o paradiddle com flam na primeira nota. O duplo no fim do grupo é o que torna difícil: a mão que faz o duplo precisa terminar baixa, porque vai ser o enfeite do próximo flam. O pataflafla tem flams na primeira e na última nota de cada grupo de quatro e exige trocas de altura muito rápidas.',
        'O swiss army triplet é uma tercina com flam em que a direita toca duas notas seguidas, o flam e a nota seguinte, e a esquerda faz o enfeite e a terceira nota. Ele soa quase igual ao flam accent, mas não alterna as mãos, o que o deixa mais rápido e prático no kit: a direita pode ficar num prato ou num tom enquanto a esquerda trabalha na caixa.',
        'O inverted flam tap tem o mesmo ritmo do flam tap, mas a nota baixa depois do flam é tocada pela mão que fez o enfeite. Assim, cada mão passa por nota principal, enfeite e nota baixa num ciclo curto. No kit, esses rudimentos rendem viradas cheias e texturas de groove que ninguém espera, ideais para quem quer sair das viradas de sempre.'
      ],
      steps: [
        'Flam paradiddle a 50 bpm, com flam e acento na primeira nota de cada grupo e os duplos baixos.',
        'Pataflafla a 50 bpm. Toque primeiro sem flams (D E D E) e depois acrescente os flams na primeira e na quarta nota.',
        'Swiss army triplet a 50 bpm. Compare com o flam accent da lição de flams: o som é parecido, a manulação não.',
        'Inverted flam tap a 50 bpm. Fale "flam, baixa" a cada par de notas para não se perder.',
        'Suba de 5 em 5 bpm. Metas entre 100 e 120 bpm, com os flams ainda limpos.'
      ],
      mistakes: [
        'No flam paradiddle, o duplo sai alto e o próximo flam fica achatado. Correção: o duplo termina perto da pele, já na posição de enfeite.',
        'No pataflafla, o enfeite do segundo flam some. Correção: diminua o andamento e prepare a troca de altura durante as duas notas do meio.',
        'No swiss army triplet, a esquerda toca o enfeite alto. Correção: a esquerda fica baixa o tempo todo; ela só faz o enfeite e uma nota baixa.',
        'Subir o andamento com flams sujos. Correção: flam ruim rápido é só barulho; volte ao andamento em que eles soam limpos.'
      ],
      tips: [
        'Grave os quatro e compare com o flam accent e o flam tap: ouvir a diferença ajuda a escolher qual usar na música.',
        'No kit, toque o swiss army triplet com a direita no surdo e a esquerda na caixa.',
        'Leve o inverted flam tap para os tons: a mão principal num tom e a nota baixa na caixa.'
      ],
      ex: [
        { id: 'rud-7a', name: 'Flam paradiddle', desc: 'Rudimento PAS nº 24. Paradiddle com flam na primeira nota de cada grupo.', bpm: [50, 110], pad: true, bars: [b4({ sn: r('fxxx', 4), st: 'DEDD EDEE DEDD EDEE' })] },
        { id: 'rud-7b', name: 'Pataflafla', desc: 'Rudimento PAS nº 27. Flam na primeira e na última nota de cada grupo de quatro.', bpm: [50, 100], pad: true, bars: [b4({ sn: r('fxxf', 4), st: r('DEDE', 4) })] },
        { id: 'rud-7c', name: 'Swiss army triplet', desc: 'Rudimento PAS nº 28. Tercinas com flam: a direita toca o flam e a nota seguinte, a esquerda faz o enfeite e a terceira nota.', bpm: [50, 120], pad: true, bars: [b3({ sn: r('fxx', 4), st: r('DDE', 4) })] },
        { id: 'rud-7d', name: 'Inverted flam tap', desc: 'Rudimento PAS nº 29. O ritmo do flam tap, mas a nota baixa é tocada pela mão que fez o enfeite.', bpm: [50, 110], pad: true, bars: [b4({ sn: r('fxfx', 4), st: r('DEED', 4) })] }
      ]
    }
  ]
};
