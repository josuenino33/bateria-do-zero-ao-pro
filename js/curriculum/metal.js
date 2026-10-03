import { r, b2, b3, b4, b6 } from './helpers.js';

// Groove de pedal duplo com prato nas semínimas, usado antes das viradas.
const GROOVE_DB = { cr: 'x--- x--- x--- x---', sn: '---- X--- ---- X---', kd: r('x-x-', 4), ke: r('-x-x', 4) };

export default {
  id: 'metal',
  name: 'Metal',
  desc: 'Skank beat, D-beat, meio-tempo, breakdown, galope, blast beats e viradas com pedal duplo.',
  lessons: [
    {
      id: 'metal-1',
      name: 'Skank beat e D-beat',
      level: 1,
      goal: 'Tocar as duas batidas rápidas mais básicas do thrash e do punk com as mãos e o pé encaixados.',
      text: [
        'O skank beat (também chamado de thrash beat) é a batida mais básica do thrash metal e do punk rápido: bumbo em cada tempo e caixa em cada contratempo, um "pum-tchá pum-tchá" acelerado. O prato ou o chimbal acompanha o bumbo. É simples de entender e difícil de manter limpo em andamento alto, porque mão direita, mão esquerda e pé precisam ficar perfeitamente encaixados.',
        'O D-beat leva o nome da banda inglesa Discharge, que usou essa batida em boa parte das músicas do começo da carreira, e acabou dando nome a um estilo inteiro do punk. Ele é o skank com notas extras de bumbo em semicolcheia: a caixa continua em todos os contratempos, e o bumbo cai no tempo, no "a" e no "e" do tempo seguinte. O resultado é uma levada que empurra para a frente o tempo todo.',
        'Nas duas batidas, o pé direito trabalha com o calcanhar levantado, e a mão direita fica no chimbal ou no prato. A caixa é o que dá energia: ela precisa ser forte, regular e sempre no mesmo lugar, exatamente no meio entre um tempo e outro. Se a caixa "escorrega" para perto do bumbo, a batida perde o balanço.',
        'Na música, o skank aparece nas partes mais rápidas do thrash e do punk, e o D-beat quando se quer a mesma velocidade com mais peso no bumbo. Trocar de um para o outro sem mexer no andamento é um treino ótimo de controle, e é por isso que o terceiro exercício alterna os dois.'
      ],
      steps: [
        'Toque o skank a 100 bpm com o clique no tempo. Conte "1 & 2 &" e confira se a caixa cai exatamente no "&".',
        'Suba de 10 em 10 bpm até onde a caixa continua no meio exato entre os bumbos.',
        'No D-beat, toque primeiro só o bumbo e a caixa, falando "1 e & a" bem devagar, a 70 bpm.',
        'Junte o chimbal em colcheias e suba aos poucos.',
        'Em "Do skank ao D-beat", alterne os dois a cada compasso sem mudar o andamento.'
      ],
      mistakes: [
        'A caixa se aproximar do bumbo e a batida virar um "flam" de bumbo e caixa. Correção: diminua o andamento e conte o "&" em voz alta.',
        'Braço direito duro tentando acompanhar a velocidade. Correção: em andamentos altos, toque o prato com movimento menor, usando mais os dedos e o punho.',
        'No D-beat, as notas extras de bumbo saírem fracas. Correção: toque só os pés da batida com o clique até todas as notas soarem iguais.',
        'Acelerar com a empolgação. Correção: deixe o clique sempre ligado nessas batidas; o skank tende a correr.'
      ],
      tips: [
        'Em andamento muito alto, muitos bateristas tocam o skank com a mão direita no prato de condução ou no ataque, só junto com o bumbo.',
        'No D-beat, ouvir o bumbo como uma frase ("pum, pum-pum") ajuda mais do que contar cada semicolcheia.',
        'Comece todo estudo de metal com 2 minutos de skank lento para aquecer pé e mãos juntos.'
      ],
      listen: ['Angel of Death — Slayer (as partes rápidas, no thrash beat)'],
      ex: [
        { id: 'metal-1a', name: 'Skank beat', desc: 'Bumbo e chimbal em cada tempo, caixa em cada contratempo.', bpm: [100, 220], bars: [b2({ hh: 'x- x- x- x-', sn: '-x -x -x -x', kd: 'x- x- x- x-' })] },
        { id: 'metal-1b', name: 'D-beat', desc: 'Chimbal em colcheias, caixa em todos os contratempos e bumbo no tempo, no "a" e no "e" do tempo seguinte.', bpm: [70, 160], bars: [b4({ hh: r('x-x-', 4), sn: '--x- --x- --x- --x-', kd: 'x--x -x-- x--x -x--' })] },
        {
          id: 'metal-1c', name: 'Do skank ao D-beat', desc: 'Um compasso de skank e um de D-beat, com o chimbal em colcheias nos dois.', bpm: [70, 160], bars: [
            b4({ hh: r('x-x-', 4), sn: '--x- --x- --x- --x-', kd: 'x--- x--- x--- x---' }),
            b4({ hh: r('x-x-', 4), sn: '--x- --x- --x- --x-', kd: 'x--x -x-- x--x -x--' })
          ]
        }
      ]
    },
    {
      id: 'metal-2',
      name: 'Meio-tempo e breakdown',
      level: 2,
      goal: 'Tocar o meio-tempo pesado com pedal duplo e breakdowns com frases de bumbo sincopadas.',
      text: [
        'No meio-tempo (half-time), a caixa cai só no tempo 3, e não no 2 e no 4. A música parece andar na metade da velocidade, mesmo que o andamento não tenha mudado. Com o pedal duplo correndo em semicolcheias por baixo, o resultado é a sensação de peso que o metal adora: lento em cima, rápido embaixo.',
        'O breakdown é a parte da música em que a banda inteira para de "correr" e toca frases curtas e pesadas, geralmente em meio-tempo. O bumbo acompanha as palhetadas da guitarra, com rajadas e pausas. Aqui, mais do que velocidade, conta a precisão: as pausas precisam ser tão exatas quanto as notas.',
        'O prato da mão direita fica nas semínimas, marcando o pulso enquanto os pés fazem frases. Em muitas bandas esse papel é do china, um prato de som mais sujo; use o que tiver no seu kit. A caixa no 3 deve ser forte e "gorda", tocada no centro da pele.',
        'A dificuldade é manter os pés exatos nas pausas. É comum sair do breakdown adiantado, porque o corpo "quer" preencher os silêncios. Conte as semicolcheias por dentro, inclusive nas pausas.'
      ],
      steps: [
        'Toque o meio-tempo a 60 bpm até a caixa no 3 soar firme por cima dos pés.',
        'No breakdown, fale a frase dos pés ("1 e & a, & a, & a") antes de tocar.',
        'Toque só os pés do breakdown com o clique nas subdivisões.',
        'Junte o prato e depois a caixa.',
        'Grave e confira se as pausas têm o tamanho certo: o pé não pode entrar antes da hora.'
      ],
      mistakes: [
        'Pensar o meio-tempo como "mais lento" e atrasar a caixa. Correção: o andamento é o mesmo; só a caixa mudou de lugar.',
        'Encher as pausas do breakdown com notas extras. Correção: conte as semicolcheias em voz alta durante as pausas.',
        'Os pés perderem volume no fim de cada rajada. Correção: acentue de leve a última nota de cada frase.',
        'Prato atrasando por causa dos pés. Correção: toque prato e pés sem a caixa até a mão ficar estável.'
      ],
      tips: [
        'No breakdown, toque como a guitarra: se ela para, você para.',
        'Caixa no centro da pele e baqueta solta: o som do 3 fica muito maior.',
        'Experimente o prato nas colcheias em vez das semínimas: o breakdown fica mais agitado.'
      ],
      ex: [
        { id: 'metal-2a', name: 'Meio-tempo com pedal duplo', desc: 'Prato nas semínimas, caixa só no 3 e pés em semicolcheias.', bpm: [60, 140], bars: [b4({ cr: 'x--- x--- x--- x---', sn: '---- ---- X--- ----', kd: r('x-x-', 4), ke: r('-x-x', 4) })] },
        { id: 'metal-2b', name: 'Breakdown sincopado', desc: 'Meio-tempo com frases de bumbo: semicolcheias no tempo 1 e rajadas curtas no "& a" do 2 e do 4.', bpm: [60, 130], bars: [b4({ cr: 'x--- x--- x--- x---', sn: '---- ---- X--- ----', kd: 'x-x- --x- ---- --x-', ke: '-x-x ---x ---- ---x' })] }
      ]
    },
    {
      id: 'metal-3',
      name: 'Galope e tercinas',
      level: 2,
      goal: 'Colocar o galope e as tercinas de pedal duplo dentro de grooves de metal.',
      text: [
        'O galope (colcheia e duas semicolcheias, "1, &, a") é uma das marcas do heavy metal tradicional. Quando o bumbo galopa junto com o baixo e a guitarra, a música ganha um movimento para a frente muito característico. No módulo de pedal duplo você treinou a figura só nos pés; aqui ela entra no groove, com condução e caixa.',
        'As tercinas no pedal duplo dão outro tipo de peso: em vez de "correr", o bumbo "rola", com três notas por tempo. Em meio-tempo, com a caixa só no 3 e o sino da condução nas semínimas, isso soa enorme mesmo em andamento moderado.',
        'Nos dois grooves, a mão direita marca as semínimas e não deve copiar o ritmo dos pés. Esse é o principal ponto de independência: o prato é o metrônomo, os pés fazem a figura e a caixa marca a música.',
        'Preste atenção na troca entre os pés. No galope, o pé direito faz as colcheias e o esquerdo completa a figura. Nas tercinas, o tempo cai alternando entre os pés, como você treinou antes; dentro do groove, o pé que cai junto com a caixa não pode atrasar.'
      ],
      steps: [
        'Toque só os pés do galope por um minuto, e depois junte o prato de condução.',
        'Com a caixa no 2 e no 4, toque o galope a 80 bpm e suba de 10 em 10.',
        'Nas tercinas, fale "1 ta ka" e toque primeiro só pés e sino.',
        'Junte a caixa no 3 e confira se ela cai junto com o pé certo.',
        'Alterne quatro compassos de cada groove para treinar a troca de figura.'
      ],
      mistakes: [
        'O galope virar tercina no andamento alto. Correção: conte as semicolcheias e use o clique nas subdivisões.',
        'A condução copiar o galope. Correção: toque condução e pés sem caixa, devagar, até a mão ficar independente.',
        'Nas tercinas, a caixa no 3 sair antes do pé. Correção: toque só caixa e pés em loop, ouvindo as duas notas como uma só.',
        'O sino soar fraco perto dos pés. Correção: toque o sino com o ombro da baqueta, com firmeza.'
      ],
      tips: [
        'Ouça como o bumbo e o baixo se encaixam no galope: em banda, os dois tocam a mesma figura.',
        'O galope fica mais claro com o primeiro bumbo de cada tempo um pouco mais forte.'
      ],
      listen: ['Run to the Hills — Iron Maiden (o ritmo de galope)'],
      ex: [
        { id: 'metal-3a', name: 'Groove de galope', desc: 'Condução nas semínimas, caixa no 2 e no 4 e pés em galope: 1, &, a.', bpm: [80, 180], bars: [b4({ rd: 'x--- x--- x--- x---', sn: '---- X--- ---- X---', kd: r('x-x-', 4), ke: r('---x', 4) })] },
        { id: 'metal-3b', name: 'Tercinas em meio-tempo', desc: 'Sino da condução nas semínimas, caixa só no 3 e pés em tercinas alternadas contínuas.', bpm: [60, 140], bars: [b3({ rb: 'x-- x-- x-- x--', sn: '--- --- X-- ---', kd: 'x-x -x- x-x -x-', ke: '-x- x-x -x- x-x' })] }
      ]
    },
    {
      id: 'metal-4',
      name: 'Blast beats',
      level: 3,
      goal: 'Tocar os três blast beats principais, limpos e relaxados, e subir o andamento sem travar.',
      text: [
        'O blast beat nasceu no hardcore e no grindcore dos anos 80 e virou marca do death metal e do black metal. É a batida mais rápida do estilo: bumbo, caixa e prato num fluxo contínuo de notas. Existem várias versões, e as três desta lição são a base de todas.',
        'No blast tradicional, bumbo e caixa se alternam em semicolcheias, e o prato toca junto com o bumbo. No hammer blast, bumbo, caixa e prato tocam juntos em colcheias, todos em uníssono. No bomb blast, a caixa e o prato ficam em colcheias e o pedal duplo corre em semicolcheias por baixo. Aqui o bumbo do tradicional e do hammer está dividido entre os dois pés, para cada pé tocar menos notas; com um pedal só, o pé direito faz todas.',
        'Fisicamente, blast beat é economia de movimento. As baquetas ficam baixas, perto da pele e do prato, e o punho trabalha com o rebote. A mão esquerda costuma ser o limite: se ela endurece, o blast trava. Mantenha os ombros soltos e o banco firme, porque o corpo inteiro precisa estar estável enquanto os quatro membros correm.',
        'Comece devagar, muito mais devagar do que soa como metal. Um blast a 100 bpm parece estranho, mas é ali que você aprende a encaixar as notas. Os profissionais de death metal passam dos 220 bpm, e chegaram lá subindo de pouco em pouco, sem nunca perder a limpeza.'
      ],
      steps: [
        'Toque o blast tradicional a 100 bpm, com o clique no tempo, por 2 minutos.',
        'Grave e confira se a caixa cai exatamente no meio entre dois bumbos.',
        'Toque o hammer blast: os três juntos têm que soar como uma nota só, sem flam.',
        'No bomb blast, toque primeiro só os pés em semicolcheias e depois junte as mãos em colcheias.',
        'Suba de 5 em 5 bpm, alternando entre os três blasts, e pare antes de a mão esquerda endurecer.'
      ],
      mistakes: [
        'Braços altos demais e tensão nos ombros. Correção: baquetas a poucos centímetros da pele e do prato.',
        'No tradicional, caixa e bumbo saírem quase juntos. Correção: diminua o andamento e conte "1 e & a", com bumbo no "1" e no "&".',
        'No hammer, flam entre os membros. Correção: toque só caixa e bumbo, em semínimas, até soarem como uma nota.',
        'Tentar subir rápido demais e desistir porque "não sai". Correção: passe mais tempo no andamento em que está limpo; a velocidade vem com as semanas.'
      ],
      tips: [
        'O prato de condução, tocado no corpo, é o mais fácil para blasts: responde rápido e não embola.',
        'Faça intervalos: 30 segundos de blast e 30 de groove lento, por 5 minutos.',
        'Respire. Prender o ar no blast é o caminho mais rápido para travar.'
      ],
      ex: [
        { id: 'metal-4a', name: 'Blast tradicional', desc: 'Bumbo e caixa alternados em semicolcheias, com o prato junto com o bumbo. Os pés se alternam no bumbo.', bpm: [100, 220], bars: [b4({ rd: r('x-x-', 4), sn: r('-x-x', 4), kd: r('x---', 4), ke: r('--x-', 4), st: r('DEDE', 4) })] },
        { id: 'metal-4b', name: 'Hammer blast', desc: 'Prato, caixa e bumbo juntos em todas as colcheias. Os pés se alternam no bumbo.', bpm: [100, 220], bars: [b2({ rd: r('xx', 4), sn: r('xx', 4), kd: r('x-', 4), ke: r('-x', 4) })] },
        { id: 'metal-4c', name: 'Bomb blast', desc: 'Prato e caixa juntos em colcheias, pedal duplo em semicolcheias por baixo.', bpm: [90, 200], bars: [b4({ rd: r('x-x-', 4), sn: r('x-x-', 4), kd: r('x-x-', 4), ke: r('-x-x', 4) })] }
      ]
    },
    {
      id: 'metal-5',
      name: 'Viradas de metal',
      level: 3,
      goal: 'Fazer viradas que misturam tons e pedal duplo, saindo e voltando do groove sem perder o peso.',
      text: [
        'Nas viradas de metal, o pedal duplo raramente para. Uma das formas mais comuns é deixar os pés correndo em semicolcheias e mover as mãos pelos tons por cima, em colcheias. A virada fica pesada e contínua, e o groove nunca "cai".',
        'Outra forma é o uníssono: mãos e pés tocando juntos em semicolcheias, a mão direita com o pé direito e a esquerda com o esquerdo. Cada nota soa com ataque de tom e grave de bumbo. É exigente, porque os quatro membros precisam estar perfeitamente alinhados, mas o resultado é uma parede de som.',
        'A terceira é linear, em sextinas: uma nota de mão e duas de bumbo, repetidas (D B B E B B). As mãos andam pelos tons e os pés preenchem com um "rolo" grave entre elas. Ela soa muito rápida e não exige mãos rápidas, porque cada mão toca só uma vez a cada meio tempo.',
        'Em todas, a volta é o ponto mais importante: prato e bumbo juntos no 1, e o groove seguindo no mesmo andamento. Uma virada de metal que chega atrasada perde toda a força.'
      ],
      steps: [
        'Toque o groove de pedal duplo sozinho até ficar estável no andamento escolhido.',
        'Toque só a virada em loop, primeiro na caixa e depois pelos tons.',
        'Junte: um compasso de groove e um de virada.',
        'No uníssono, toque a 60 bpm e escute se cada mão sai junto com o pé do mesmo lado.',
        'Na D B B E B B, fale "mão, pé, pé" e mantenha o volume dos pés igual ao das mãos.'
      ],
      mistakes: [
        'Pés parando ou travando quando as mãos vão para os tons. Correção: toque a virada com as mãos só na caixa até os pés ficarem automáticos.',
        'No uníssono, mãos adiantadas em relação aos pés. Correção: diminua o andamento e pense que as mãos "esperam" os pés.',
        'Tons fracos, sumindo no meio do bumbo. Correção: toque os tons com mais firmeza e os pés um pouco mais leves.',
        'Chegar no 1 atrasado. Correção: treine o último tempo da virada e o 1 seguinte em loop.'
      ],
      tips: [
        'Afine os tons com intervalos bem definidos: a descida fica clara mesmo com o bumbo por baixo.',
        'Termine as viradas com prato e bumbo juntos no 1 e deixe o prato soar.',
        'Combine os três tipos: um tempo de cada já é uma virada nova.'
      ],
      ex: [
        {
          id: 'metal-5a', name: 'Tons em colcheias sobre pedal duplo', desc: 'Groove de pedal duplo e uma virada com as mãos em colcheias pelos tons, enquanto os pés seguem em semicolcheias.', bpm: [60, 150], bars: [b4({ ...GROOVE_DB }), b4({
            sn: 'X-x- ---- ---- ----', t1: '---- X-x- ---- ----', t2: '---- ---- X-x- ----', ft: '---- ---- ---- X-x-', kd: r('x-x-', 4), ke: r('-x-x', 4), st: r('D-E-', 4)
          })]
        },
        {
          id: 'metal-5b', name: 'Uníssono de mãos e pés', desc: 'Mãos alternadas em semicolcheias pelos tons, com o pé do mesmo lado tocando junto de cada mão.', bpm: [60, 140], bars: [b4({ ...GROOVE_DB }), b4({
            sn: 'Xxxx ---- ---- ----', t1: '---- Xxxx ---- ----', t2: '---- ---- Xxxx ----', ft: '---- ---- ---- Xxxx', kd: r('x-x-', 4), ke: r('-x-x', 4), st: r('DEDE', 4)
          })]
        },
        {
          id: 'metal-5c', name: 'Mão, pé, pé em sextina', desc: 'D B B E B B: uma nota de mão e dois bumbos alternados, com as mãos descendo pelos tons.', bpm: [50, 110], bars: [b4({ ...GROOVE_DB }), b6({
            sn: 'x--x-- ------ ------ ------', t1: '------ x--x-- ------ ------', t2: '------ ------ x--x-- ------', ft: '------ ------ ------ x--x--', kd: r('-x--x-', 4), ke: r('--x--x', 4), st: r('DBBEBB', 4)
          })]
        }
      ]
    }
  ]
};
