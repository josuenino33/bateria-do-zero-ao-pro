import { r, b2, b3, b4, G } from './helpers.js';

const BACK8 = '-- X- -- X-';
const BACK = '---- X--- ---- X---';
const HH16 = r('xxxx', 4);
// Groove de shuffle (tercinas: 1ª e 3ª nota de cada tempo no chimbal).
const SHUF = { hh: r('x-x', 4), sn: '--- X-- --- X--', kd: 'x-- --- x-- ---' };
const SHUF_C = { cr: 'x-- --- --- ---', hh: '--x x-x x-x x-x', sn: '--- X-- --- X--', kd: 'x-- --- x-- ---' };
// Balada: condução em colcheias e aro no 2 e no 4.
const BAL_KD = 'x--- ---x x--- ----';
const VERSE = { rd: r('x-x-', 4), cs: '---- x--- ---- x---', kd: BAL_KD };

export default {
  id: 'rock',
  name: 'Rock e pop',
  desc: 'Os grooves que sustentam rock, pop, disco, Motown, balada, shuffle e funk, com o bumbo, a dinâmica e o balanço de cada um.',
  lessons: [
    {
      id: 'rock-1',
      name: 'Rock reto e o bumbo',
      level: 1,
      goal: 'Tocar o rock de colcheias com firmeza e variar o bumbo sem mexer no resto.',
      text: [
        'O rock nasceu nos anos 1950, a partir do rhythm and blues, e a base dele é simples: chimbal em colcheias, caixa no 2 e no 4 e bumbo no 1 e no 3. Essa caixa no 2 e no 4 é o backbeat, o "tapa" que faz o corpo balançar. Quase toda a música pop que você conhece está apoiada nessa fórmula.',
        'O que muda de uma música para outra, na maioria das vezes, é só o bumbo. Um bumbo no "&" do 2 dá um empurrão para o 3. Dois bumbos no 3 deixam o groove mais pesado. Uma frase de dois compassos, com o bumbo diferente no segundo, conversa melhor com o baixo e deixa o groove menos mecânico.',
        'Tocar simples não é tocar fácil. Um rock reto bem tocado tem as colcheias do chimbal iguais, a caixa sempre no mesmo volume e o bumbo colado com o baixo. Isso exige relaxamento: o braço direito solto, a caixa saindo do peso da baqueta e o pé direito pisando sem tensão.',
        'Na prática, a maior parte do seu trabalho em banda vai ser isso: grooves simples tocados por muito tempo sem variar o andamento. Por isso vale estudar esses grooves com o metrônomo, por vários minutos seguidos, prestando atenção na sensação e não só nas notas.'
      ],
      steps: [
        'Toque o rock reto por cinco minutos a 80 bpm sem parar, ouvindo se o chimbal está uniforme.',
        'Troque para o bumbo no "&" do 2 sem parar a música e toque mais cinco minutos.',
        'Na frase de dois compassos, conte "um, dois" a cada compasso para não se perder.',
        'Toque cada groove em três andamentos: 70, 100 e 130 bpm.',
        'Coloque uma música que você conhece e toque o groove que mais combina com ela.'
      ],
      mistakes: [
        'Acentuar sem querer o chimbal junto com a caixa. Correção: mão direita sempre na mesma altura; quem acentua o 2 e o 4 é só a caixa.',
        'O bumbo do "&" do 2 adiantar e virar semicolcheia. Correção: cante "1 e 2 E 3 e 4 e" e toque o bumbo exatamente no "e" falado mais forte.',
        'Acelerar depois de alguns minutos. Correção: deixe o clique só no 2 e no 4 e escute se ele continua junto com a sua caixa.'
      ],
      tips: [
        'Abra um pouco o chimbal (meio solto) nos refrões: o mesmo groove ganha energia.',
        'Toque a caixa no centro, sempre. A diferença de som entre centro e borda é grande no backbeat.'
      ],
      listen: [
        'Back in Black — AC/DC (rock reto e firme de Phil Rudd)',
        'Billie Jean — Michael Jackson (bumbo no 1 e no 3, caixa no 2 e no 4, sem enfeites)'
      ],
      ex: [
        { id: 'rock-1a', name: 'Rock reto', desc: 'Chimbal em colcheias, caixa no 2 e no 4, bumbo só no 1 e no 3. Simples e firme.', bpm: [60, 160], bars: [b2({ hh: r('xx', 4), sn: BACK8, kd: 'x- -- x- --' })] },
        { id: 'rock-1b', name: 'Bumbo no "&" do 2', desc: 'O bumbo ganha uma nota no "&" do 2, empurrando o groove para o 3.', bpm: [60, 150], bars: [b2({ hh: r('xx', 4), sn: BACK8, kd: 'x- -x x- --' })] },
        { id: 'rock-1c', name: 'Frase de dois compassos', desc: 'Primeiro compasso com prato no 1 e bumbo no 1, 3 e "&" do 3; segundo compasso com bumbo no 1, no "&" do 2 e no "&" do 3.', bpm: [60, 150], bars: [b2(G.rock8C), b2({ hh: r('xx', 4), sn: BACK8, kd: 'x- -x -x --' })] }
      ]
    },
    {
      id: 'rock-2',
      name: 'Meio tempo, disco, Motown e train beat',
      level: 1,
      goal: 'Dominar quatro variações clássicas que mudam a sensação do groove sem mudar o andamento.',
      text: [
        'Com o mesmo andamento, quatro grooves diferentes podem fazer a música parecer lenta, dançante, alegre ou correndo. No meio tempo (half-time), a caixa sai do 2 e do 4 e vai só para o 3: o andamento é o mesmo, mas a sensação é de metade da velocidade. É muito usado em refrões pesados de rock, em pontes e em baladas de louvor.',
        'O disco, dos anos 1970, popularizou o "quatro no chão": bumbo em todos os tempos, caixa no 2 e no 4 e o chimbal abrindo em todos os "&". Esse "tsss" no contratempo é o que faz a pista dançar. O mesmo groove voltou na música eletrônica e no pop atual.',
        'Em muitas gravações da Motown, a gravadora de Detroit dos anos 1960, a caixa marca os quatro tempos, muitas vezes dobrada por um pandeiro ou por palmas. A energia fica mais "para cima" e alegre. Já o train beat vem do country: semicolcheias na caixa, com acento no 2 e no 4, imitando o barulho de um trem nos trilhos.',
        'Para tocar bem os quatro, pense no que cada peça imita e no papel dela na música. No disco, o bumbo é o coração da pista. No Motown, a caixa faz o papel das palmas. No train beat, as mãos são as rodas do trem. Entender essa função ajuda a acertar a dinâmica.'
      ],
      steps: [
        'Toque cada groove por três minutos a 90 bpm.',
        'Alterne entre o rock reto e o meio tempo a cada quatro compassos, sem parar.',
        'No disco, treine primeiro só o chimbal abrindo e fechando com o bumbo, sem caixa.',
        'No train beat, mantenha as semicolcheias bem baixas e só o 2 e o 4 fortes.',
        'Escolha um andamento e toque os quatro em sequência, oito compassos cada.'
      ],
      mistakes: [
        'No meio tempo, a caixa do 3 adianta por falta de referência. Correção: conte em voz alta "1 2 3 4" e coloque a caixa no "três" falado.',
        'No disco, o chimbal aberto fica longo e embola com o tempo seguinte. Correção: feche o pé exatamente no tempo, junto com o bumbo.',
        'No train beat, os acentos somem e vira um rufo contínuo. Correção: toque as notas fracas a dois dedos da pele e os acentos de bem mais alto.'
      ],
      tips: [
        'O meio tempo pede um bumbo com mais espaço. Menos notas deixam a sensação mais pesada.',
        'Disco e Motown dependem de muita constância: estude com o clique por cinco minutos seguidos.',
        'No train beat, tente com vassourinhas se tiver: é o som original do estilo.'
      ],
      listen: ['You Can\'t Hurry Love — The Supremes (caixa marcando os quatro tempos)'],
      ex: [
        { id: 'rock-2a', name: 'Meio tempo (half-time)', desc: 'Chimbal em colcheias, caixa só no 3, bumbo no 1, no "&" do 2 e no "&" do 4.', bpm: [60, 140], bars: [b2({ hh: r('xx', 4), sn: '-- -- X- --', kd: 'x- -x -- -x' })] },
        { id: 'rock-2b', name: 'Disco: quatro no chão', desc: 'Bumbo em todos os tempos, caixa no 2 e no 4, chimbal fechado no tempo e aberto em todos os "&".', bpm: [80, 130], bars: [b2({ hh: r('xo', 4), sn: BACK8, kd: r('x-', 4) })] },
        { id: 'rock-2c', name: 'Motown', desc: 'Caixa nos quatro tempos, mais forte no 2 e no 4. Bumbo no 1 e no 3.', bpm: [80, 160], bars: [b2({ hh: r('xx', 4), sn: 'x- X- x- X-', kd: 'x- -- x- --' })] },
        { id: 'rock-2d', name: 'Train beat', desc: 'Semicolcheias alternadas na caixa com acento no 2 e no 4, bumbo no 1 e no 3 e chimbal de pé no 2 e no 4.', bpm: [70, 140], bars: [b4({ sn: 'xxxx Xxxx xxxx Xxxx', kd: 'x--- ---- x--- ----', hp: '---- x--- ---- x---', st: r('DEDE', 4) })] }
      ]
    },
    {
      id: 'rock-3',
      name: 'Pop em semicolcheias',
      level: 2,
      goal: 'Tocar o chimbal em semicolcheias com uma mão e com duas, mantendo o groove leve.',
      text: [
        'Muito pop, R&B e rock dos anos 1970 e 80 em diante usa o chimbal em semicolcheias. Isso deixa o groove mais "andando" e preenche o espaço que a guitarra e o teclado deixam. Há duas formas de tocar: com uma mão só, quando o andamento permite, ou com as duas mãos alternadas, quando é rápido demais.',
        'Com uma mão, a direita faz um movimento de "desce e sobe", a base da técnica Moeller: a nota do tempo e do "&" sai mais forte, com o pulso descendo, e a do "e" e do "a" sai mais leve, com a baqueta subindo. Isso dá um balanço natural e economiza energia. Em geral funciona bem até uns 100 a 110 bpm.',
        'Com duas mãos, o chimbal é tocado D E D E, e no 2 e no 4 a mão direita vai para a caixa. Parece estranho no começo, porque é a direita que faz o backbeat, mas libera muita velocidade e soa muito uniforme. É a escolha certa para pop e disco rápidos.',
        'Em ambos os casos, o chimbal fica num volume médio e a caixa se destaca. O bumbo pode ser mais sincopado, aproveitando as semicolcheias, mas sem atropelar o baixo. Um groove de semicolcheias bem tocado soa leve; se está pesado, você provavelmente está tocando o chimbal forte demais.'
      ],
      steps: [
        'Com uma mão, toque só o chimbal a 70 bpm por dois minutos, fazendo as notas do tempo e do "&" mais fortes.',
        'Junte caixa e bumbo e toque cinco minutos.',
        'Com duas mãos, toque só o chimbal D E D E e depois tire a nota do chimbal no 2 e no 4, levando a direita para a caixa.',
        'Toque o groove sincopado devagar, contando todas as semicolcheias.',
        'Descubra o seu limite com uma mão e passe para duas mãos acima dele.'
      ],
      mistakes: [
        'Com uma mão, todas as notas saem iguais e o braço cansa rápido. Correção: use o sobe e desce do pulso; as notas fracas são quase só a baqueta voltando.',
        'Com duas mãos, a caixa do 2 e do 4 sai mais fraca porque a direita vem do chimbal. Correção: deixe a direita subir um pouco antes da caixa e toque com peso.',
        'O bumbo sincopado empurra o andamento. Correção: diminua o bpm e toque o bumbo junto com a contagem falada.'
      ],
      tips: [
        'Toque o chimbal com a ponta da baqueta na parte de cima do prato para um som mais fino, e com o corpo na borda para um som mais cheio.',
        'Uma mão ou duas é escolha de som, não só de técnica: ouça a diferença e escolha pela música.'
      ],
      ex: [
        { id: 'rock-3a', name: 'Chimbal em semicolcheias com uma mão', desc: 'A direita toca as quatro semicolcheias, mais forte no tempo e no "&". Caixa no 2 e no 4, bumbo no 1, no 3 e no "&" do 3.', bpm: [60, 105], bars: [b4({ hh: r('XxXx', 4), sn: BACK, kd: 'x--- ---- x-x- ----' })] },
        { id: 'rock-3b', name: 'Chimbal com duas mãos', desc: 'Chimbal alternado D E D E. No 2 e no 4 a direita sai do chimbal e toca a caixa.', bpm: [70, 130], bars: [b4({ hh: 'xxxx -xxx xxxx -xxx', sn: BACK, kd: 'x--- ---- x-x- ----', st: r('DEDE', 4) })] },
        { id: 'rock-3c', name: 'Semicolcheias com bumbo sincopado', desc: 'Chimbal com uma mão e bumbo no 1, no "a" do 1, no "&" do 2, no 3, no "a" do 3 e no "&" do 4.', bpm: [60, 100], bars: [b4({ hh: r('XxXx', 4), sn: BACK, kd: 'x--x --x- x--x --x-' })] }
      ]
    },
    {
      id: 'rock-4',
      name: 'Balada: condução, aro e dinâmica',
      level: 2,
      goal: 'Tocar baladas com som controlado no verso e crescer no refrão sem acelerar.',
      text: [
        'Na balada, o mais importante é o espaço. O andamento é lento, as notas duram mais e cada erro aparece. O verso costuma usar o aro (cross-stick): a baqueta da esquerda fica deitada sobre a caixa, com a ponta apoiada na pele e o corpo batendo no aro. O som é seco, parecido com um bloco de madeira, e não compete com a voz.',
        'Para o aro, apoie a palma da mão esquerda sobre a pele, perto da borda, com a baqueta atravessada. Só a parte de trás da baqueta sobe e desce, como uma alavanca, batendo no aro do lado oposto. Procure o ponto da baqueta que dá o som mais cheio, normalmente a uns quatro dedos da ponta de trás.',
        'A condução no prato, em colcheias, dá um som mais aberto que o chimbal. No refrão, você pode alternar entre o sino (cúpula) no tempo e o corpo do prato no "&", o que deixa o groove mais brilhante. Junto com a troca do aro pela caixa cheia, isso cria o crescimento que a música pede.',
        'A passagem do verso para o refrão é o momento crítico: a mão esquerda precisa sair da posição do aro e voltar à pegada normal, geralmente durante uma pequena virada. Treine essa troca até ela ficar invisível. E cuidado com o andamento: em baladas, o crescimento de volume costuma vir acompanhado de pressa.'
      ],
      steps: [
        'Encontre o melhor som de aro: toque só ele no 2 e no 4 por dois minutos a 70 bpm.',
        'Toque o verso com condução e aro por cinco minutos, deixando o bumbo macio.',
        'Toque o refrão com sino, corpo do prato e caixa cheia por cinco minutos.',
        'Na frase completa, treine a troca do aro para a caixa na virada do tempo 4.',
        'Grave a frase e confira se o andamento não sobe no refrão.'
      ],
      mistakes: [
        'O aro sai fraco e sem corpo. Correção: mude o ponto de contato da baqueta no aro e deixe o peso do braço cair, sem apertar.',
        'Na balada, o bumbo fica pesado demais. Correção: toque com o calcanhar baixo e deixe a batedeira voltar sozinha.',
        'O refrão acelera. Correção: deixe o clique no 2 e no 4 e pense em "mais peso, mesma velocidade".'
      ],
      tips: [
        'Em baladas muito lentas, pense nas semicolcheias por dentro, mesmo sem tocá-las. Isso evita apressar.',
        'O sino do prato corta a banda inteira: use no refrão, não no verso.',
        'Se a música pede ainda menos, troque o prato de condução pelo chimbal fechado no verso.'
      ],
      ex: [
        { id: 'rock-4a', name: 'Verso: condução e aro', desc: 'Condução em colcheias, aro no 2 e no 4, bumbo macio no 1, no "a" do 2 e no 3.', bpm: [55, 90], bars: [b4(VERSE)] },
        { id: 'rock-4b', name: 'Refrão: sino e caixa cheia', desc: 'A direita alterna sino da condução nos tempos e corpo do prato nos "&". Caixa cheia no 2 e no 4.', bpm: [55, 90], bars: [b4({ rb: r('x---', 4), rd: r('--x-', 4), sn: BACK, kd: BAL_KD })] },
        { id: 'rock-4c', name: 'Do verso ao refrão', desc: 'Dois compassos de verso, um compasso com virada de caixa no tempo 4 (a esquerda sai do aro) e um compasso de refrão com prato no 1.', bpm: [55, 90], bars: [
          b4(VERSE), b4(VERSE),
          b4({ rd: 'x-x- x-x- x-x- ----', cs: '---- x--- ---- ----', sn: '---- ---- ---- xxxX', kd: BAL_KD, st: '---- ---- ---- DEDE' }),
          b4({ cr: 'x--- ---- ---- ----', rb: '---- x--- x--- x---', rd: r('--x-', 4), sn: BACK, kd: BAL_KD })] }
      ]
    },
    {
      id: 'rock-5',
      name: 'Shuffle e tercinas no rock',
      level: 2,
      goal: 'Sentir o balanço ternário no shuffle, no half-time shuffle e nas viradas de tercina.',
      text: [
        'O shuffle é o groove do blues e do rock antigo: em vez de colcheias retas, o chimbal toca a primeira e a terceira nota de cada tercina. O resultado é o "tum ... ta-tum ... ta" que balança. Ele vem do blues e do swing e está em muito rock, country e gospel.',
        'O half-time shuffle leva a caixa para o 3 e preenche a nota do meio da tercina com ghost notes. É um dos grooves mais difíceis e mais bonitos da bateria. A versão mais famosa leva o nome de Bernard Purdie (o "Purdie shuffle"), e Jeff Porcaro, no Toto, e John Bonham, no Led Zeppelin, gravaram variações que todo baterista estuda.',
        'Fisicamente, a mão direita faz a tercina com um movimento de "cai e puxa" no chimbal, e a esquerda encaixa as ghosts entre as notas da direita. Juntas, as duas mãos tocam todas as notas da tercina, mas em volumes muito diferentes. O pé esquerdo pode fechar o chimbal no 2 e no 4 para dar estabilidade.',
        'A virada de tercina "estilo Bonham" usa D E B: direita e esquerda num tambor e o bumbo completando a tercina. Em tercinas de colcheia, ela soa pesada e rolante, perfeita para shuffle e rock dos anos 1970. Descendo pelos tons, vira uma das viradas mais reconhecíveis do rock.'
      ],
      steps: [
        'Cante o shuffle ("1 . ka 2 . ka") batendo o tempo com o pé antes de tocar.',
        'Toque o shuffle por cinco minutos a 90 bpm, ouvindo se o "ka" não vira semicolcheia.',
        'No half-time shuffle, toque primeiro chimbal e ghosts, sem bumbo e sem a caixa do 3.',
        'Junte tudo a 60 bpm e só depois suba.',
        'Na virada estilo Bonham, toque a célula D E B na caixa antes de descer pelos tons.'
      ],
      mistakes: [
        'O shuffle vira colcheia reta, ou vira semicolcheia pontuada (duro demais). Correção: toque as tercinas completas no chimbal por um minuto e depois tire a do meio.',
        'As ghost notes do half-time shuffle ficam altas e o groove perde o balanço. Correção: as ghosts são quase inaudíveis; a caixa do 3 é a única nota forte.',
        'Na virada D E B, o bumbo atrasa e a tercina manca. Correção: diminua o andamento e toque o bumbo no mesmo volume das mãos.'
      ],
      tips: [
        'O shuffle pede corpo solto. Se estiver tenso, o balanço some.',
        'Pratique o half-time shuffle com o clique só no 3 (o tempo da caixa) depois de dominá-lo.'
      ],
      listen: [
        'Rosanna — Toto (half-time shuffle de Jeff Porcaro)',
        'Fool in the Rain — Led Zeppelin (half-time shuffle de John Bonham)'
      ],
      ex: [
        { id: 'rock-5a', name: 'Shuffle', desc: 'Chimbal em shuffle (1ª e 3ª nota da tercina), caixa no 2 e no 4, bumbo no 1 e no 3.', bpm: [60, 130], bars: [b3(SHUF)] },
        { id: 'rock-5b', name: 'Half-time shuffle', desc: 'Caixa forte só no 3 e ghost notes na nota do meio de cada tercina. Bumbo no 1 e na última tercina do 2.', bpm: [60, 110], bars: [b3({ hh: r('x-x', 4), sn: '-g- -g- Xg- -g-', kd: 'x-- --x --- ---' })] },
        { id: 'rock-5c', name: 'Virada de tercina estilo Bonham', desc: 'Um compasso de shuffle e um de virada em tercinas D E B: duas mãos no tom 1, depois no tom 2 e duas vezes no surdo, com o bumbo fechando cada tercina.', bpm: [60, 120], bars: [b3(SHUF_C), b3({ t1: 'Xx- --- --- ---', t2: '--- Xx- --- ---', ft: '--- --- Xx- Xx-', kd: r('--x', 4), st: r('DEB', 4) })] }
      ]
    },
    {
      id: 'rock-6',
      name: 'Funk e ghost notes',
      level: 3,
      goal: 'Tocar grooves de funk em semicolcheias com ghost notes e bumbo sincopado, mantendo o balanço.',
      text: [
        'O funk nasceu nos anos 1960, principalmente com James Brown e os bateristas da banda dele, como Clyde Stubblefield e Jabo Starks. A ideia central é que cada instrumento toca uma parte curta e sincopada, e tudo se encaixa como engrenagens. Na bateria, isso significa chimbal em semicolcheias, caixa forte no 2 e no 4, ghost notes em volta e bumbo cheio de síncopes.',
        'A dinâmica é tudo no funk. Existem três volumes ao mesmo tempo: a caixa forte (backbeat), o chimbal médio e as ghost notes muito baixas. Se tudo sai no mesmo volume, o groove soa duro e embolado. Se as três camadas estão bem separadas, o groove "respira" mesmo com muitas notas.',
        'O bumbo do funk conversa com o baixo. Ele cai nos "a" e nos "e", antecipa tempos e deixa espaços. Por isso a independência estudada no outro módulo é essencial aqui: a mão direita não pode mudar quando o pé faz síncopes.',
        'O half-time funk leva a caixa para o 3, como no meio tempo do rock, e deixa ainda mais espaço para ghosts e bumbo. Ele é muito usado em hip hop, neo soul e gospel moderno, e é uma ótima ponte para os grooves gospel do próximo módulo.'
      ],
      steps: [
        'Toque só o chimbal em semicolcheias com uma mão a 70 bpm por dois minutos.',
        'Junte a caixa forte no 2 e no 4, depois as ghosts, sem bumbo.',
        'Coloque o bumbo devagar, contando todas as semicolcheias em voz alta.',
        'Toque cinco minutos seguidos do groove completo a 70 bpm.',
        'Suba de 5 em 5 bpm até a meta, gravando a cada etapa para conferir as dinâmicas.'
      ],
      mistakes: [
        'Ghost notes altas que competem com o backbeat. Correção: toque as ghosts com a baqueta a dois centímetros da pele, sem impulso.',
        'O chimbal "tropeça" quando o bumbo sincopa. Correção: toque só chimbal e bumbo até a mão direita ignorar o pé.',
        'O groove fica correndo. Correção: funk é para dançar; pense mais pesado e mais "atrás" do clique, sem atrasar de fato.'
      ],
      tips: [
        'Grave o groove e tente dançar ouvindo. Se não dá vontade de mexer, as dinâmicas ainda não estão certas.',
        'Afine a caixa um pouco mais aguda para funk: o backbeat estala e as ghosts ficam mais claras.'
      ],
      listen: ['Funky Drummer — James Brown (Clyde Stubblefield: semicolcheias no chimbal e ghost notes na caixa)'],
      ex: [
        { id: 'rock-6a', name: 'Funk com ghost notes', desc: 'Chimbal em semicolcheias com uma mão, caixa forte no 2 e no 4, ghosts no "e" do 1, no "a" do 2, no "&" do 3 e no "&" do 4. Bumbo no 1, no "a" do 1, no "&" do 2, no 3 e no "&" do 4.', bpm: [60, 105], bars: [b4({ hh: HH16, sn: '-g-- X--g --g- X-g-', kd: 'x--x --x- x--- --x-' })] },
        { id: 'rock-6b', name: 'Half-time funk', desc: 'Caixa forte só no 3, ghosts em volta e chimbal abrindo no "&" do 4. Bumbo no 1, no "a" do 1, no "&" do 2 e no "a" do 3.', bpm: [60, 100], bars: [b4({ hh: 'xxxx xxxx xxxx xxo-', sn: '---g -g-- X--- -gg-', kd: 'x--x --x- ---x ----' })] }
      ]
    }
  ]
};
