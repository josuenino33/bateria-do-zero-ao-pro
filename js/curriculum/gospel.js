import { r, b3, b4, b6, G } from './helpers.js';

const HH8 = r('x-x-', 4);
const BACK = '---- X--- ---- X---';

// Monta trilhas a partir de uma manulação: cada letra D/E vira nota na peça indicada em `voz`
// (lista com uma peça por passo). O primeiro B de uma sequência vai para o bumbo direito,
// o B seguinte para o esquerdo (pedal duplo).
function chop(st, voz, acc = []) {
  const n = st.replace(/\s/g, '').length, s = st.replace(/\s/g, '');
  const t = {};
  const put = (k, i, ch) => { t[k] = t[k] || Array(n).fill('-'); t[k][i] = ch; };
  let pe = 'ke';
  for (let i = 0; i < n; i++) {
    if (s[i] === 'B') { pe = s[i - 1] === 'B' && pe === 'kd' ? 'ke' : 'kd'; put(pe, i, 'x'); continue; }
    if (s[i] === '-') continue;
    put(voz[i], i, acc.includes(i) ? 'X' : 'x');
  }
  return Object.fromEntries(Object.entries(t).map(([k, v]) => [k, v.join('')]));
}

// D E B B repetido 6 vezes numa sextina (4 contra 6).
const DEBB6 = r('DEBB', 6);
// Frase 3 + 4 + 5: D E B, D E B B, D E D E B (12 notas = dois tempos de sextina).
const F345 = r('DEBDEB BDEDEB', 2);

export default {
  id: 'gospel',
  name: 'Gospel e louvor',
  desc: 'Levadas de louvor, dinâmica de igreja, 6/8, gospel shuffle, grooves com ghost notes e linear, e os chops de mão e bumbo.',
  lessons: [
    {
      id: 'gospel-1',
      name: 'Levada de louvor e pulso no surdo',
      level: 1,
      goal: 'Tocar a levada básica de louvor e o pulso no surdo com som cheio e controle de volume.',
      text: [
        'No louvor, o baterista serve a congregação. A levada precisa ser firme para que todos cantem juntos, e o volume precisa caber no ambiente: uma igreja pequena pede outra bateria que um auditório grande. Por isso, antes de qualquer virada, o que define um bom baterista de igreja é tocar a levada simples com segurança e dinâmica.',
        'A levada básica é parente direta do pop: chimbal em colcheias, caixa no 2 e no 4 e um bumbo que puxa os contratempos ("&" do 2 e do 4). Esses bumbos no contratempo dão movimento para frente, sem pesar, e combinam com o violão e o teclado que normalmente conduzem o louvor.',
        'O pulso no surdo é o som das introduções e das partes que vão crescendo. A mão direita toca colcheias no surdo, o bumbo marca os quatro tempos e a esquerda faz o aro no 2 e no 4. O surdo da bateria, aqui, soa como um tambor grave de percussão e cria expectativa antes da banda entrar.',
        'Para tocar com dinâmica, controle a altura das baquetas e não a força do braço. Verso baixo é baqueta baixa; refrão forte é baqueta alta, com o mesmo relaxamento. Assim o som fica cheio em qualquer volume, e você não se cansa nas ministrações longas.'
      ],
      steps: [
        'Toque a levada básica por cinco minutos a 72 bpm, um andamento comum de louvor.',
        'Toque a mesma levada em três volumes (baixo, médio, forte), dois minutos cada, sem mudar o andamento.',
        'No pulso no surdo, toque primeiro só surdo e bumbo, acentuando o surdo nos tempos.',
        'Coloque o aro no 2 e no 4 e toque quatro minutos.',
        'Alterne quatro compassos de pulso no surdo e quatro de levada, como numa música que cresce.'
      ],
      mistakes: [
        'Tocar sempre no mesmo volume, do começo ao fim do culto. Correção: estude a mesma levada em três volumes e escolha conforme o momento.',
        'O surdo soa "morto" porque a baqueta fica enterrada na pele. Correção: deixe a baqueta voltar; o surdo precisa soar aberto.',
        'O bumbo do contratempo adianta e "atropela" o violão. Correção: toque junto com o violão ou com uma gravação e ouça onde o bumbo encaixa.'
      ],
      tips: [
        'Observe o ministro de louvor: muitas vezes é dele que vem o sinal para crescer ou diminuir.',
        'Num lugar pequeno, use baquetas mais finas ou mais leves em vez de tocar com medo.',
        'O pulso no surdo também funciona com semicolcheias alternadas nas duas mãos, para uma parte ainda mais intensa.'
      ],
      ex: [
        { id: 'gospel-1a', name: 'Levada de louvor', desc: 'Chimbal em colcheias, caixa no 2 e no 4, bumbo no 1, no "&" do 2, no 3 e no "&" do 4.', bpm: [60, 140], bars: [b4({ hh: HH8, sn: BACK, kd: 'x--- --x- x--- --x-' })] },
        { id: 'gospel-1b', name: 'Pulso no surdo', desc: 'Direita no surdo em colcheias (acento nos tempos), bumbo nos quatro tempos e aro no 2 e no 4.', bpm: [60, 140], bars: [b4({ ft: r('X-x-', 4), cs: '---- x--- ---- x---', kd: r('x---', 4) })] }
      ]
    },
    {
      id: 'gospel-2',
      name: 'Dinâmica de igreja e transições',
      level: 1,
      goal: 'Construir uma música do verso ao refrão mudando peças, volume e densidade, e fazer transições claras.',
      text: [
        'A música de igreja costuma crescer em ondas: verso mais calmo, pré-refrão subindo, refrão cheio, e às vezes uma parte final ainda maior. O baterista é o maior responsável por essa sensação. A forma mais eficiente de crescer não é bater mais forte, é trocar de peça: chimbal fechado no verso, condução no pré-refrão, prato de ataque no refrão.',
        'Cada peça tem um "tamanho" de som. O chimbal fechado é curto e discreto. A condução tem mais brilho e sustentação. O prato de ataque tocado em colcheias (às vezes chamado de "condução no ataque") enche o ambiente. Junto com isso, o bumbo ganha notas e a caixa passa do aro para o centro da pele.',
        'A construção a partir do surdo é outro recurso clássico: o pulso no surdo cresce, a caixa entra no 2 e no 4, depois a caixa passa a tocar colcheias e por fim semicolcheias, aumentando a densidade até o prato do refrão. É uma rampa que todo mundo na igreja sente.',
        'As transições são os momentos que mais aparecem. Uma virada com semínimas de prato e bumbo, todos juntos com a banda, soa enorme. Um corte (uma nota forte seguida de silêncio) antes do refrão cria suspense e faz a entrada parecer ainda maior. Combine essas ferramentas com a banda nos ensaios, para todos cortarem e entrarem juntos.'
      ],
      steps: [
        'Toque cada compasso da escada separadamente, quatro vezes cada, a 70 bpm.',
        'Toque a escada completa, depois a construção a partir do surdo, sem parar.',
        'Depois que estiver confortável, toque cada compasso como se fosse uma parte de oito compassos (repita oito vezes antes de trocar).',
        'Nas transições, toque o compasso de groove e a transição em loop por cinco minutos.',
        'Grave e confira se o andamento se manteve do verso ao refrão.'
      ],
      mistakes: [
        'Acelerar no crescimento. Correção: mantenha o clique alto no refrão e pense em "mais som, mesma velocidade".',
        'No corte, encurtar o silêncio e entrar antes do 1. Correção: conte o silêncio em voz alta ("e, a") e entre exatamente no 1.',
        'Condução no prato de ataque com o braço duro, que cansa e soa embolado. Correção: toque com o corpo da baqueta na borda do prato, deixando ele soar, e respire.'
      ],
      tips: [
        'Mapeie a música antes: escreva verso, pré, refrão e qual peça você usa em cada um.',
        'Um refrão bem construído começa no verso. Se você começa forte, não tem para onde crescer.'
      ],
      ex: [
        { id: 'gospel-2a', name: 'Escada: chimbal, condução, prato', desc: 'Três compassos, um para cada parte: verso com chimbal e aro, pré-refrão com condução e caixa, refrão com o prato de ataque em colcheias e mais bumbo.', bpm: [60, 130], bars: [
          b4({ hh: HH8, cs: '---- x--- ---- x---', kd: 'x--- ---- x--- ----' }),
          b4({ rd: HH8, sn: BACK, kd: 'x--- --x- x--- ----' }),
          b4({ cr: HH8, sn: BACK, kd: 'x--- --x- x--- --x-' })] },
        { id: 'gospel-2b', name: 'Construção a partir do surdo', desc: 'Cinco compassos: pulso no surdo; surdo com caixa no 2 e no 4; caixa em colcheias; caixa em semicolcheias crescendo; refrão com prato no 1.', bpm: [60, 130], bars: [
          b4({ ft: HH8, kd: r('x---', 4) }),
          b4({ ft: HH8, sn: BACK, kd: r('x---', 4) }),
          b4({ sn: r('x-x-', 4), kd: r('x---', 4), st: r('D-E-', 4) }),
          b4({ sn: 'xxxx xxxx XXXX XXXX', kd: r('x---', 4), st: r('DEDE', 4) }),
          b4({ cr: 'x--- ---- ---- ----', hh: '--x- x-x- x-x- x-x-', sn: BACK, kd: 'x--- --x- x--- --x-' })] },
        { id: 'gospel-2c', name: 'Semínimas de prato e bumbo', desc: 'Um compasso de groove e um de transição: prato, caixa e bumbo juntos nos quatro tempos, como a banda inteira marcando antes do refrão.', bpm: [60, 130], bars: [
          b4({ cr: 'x--- ---- ---- ----', hh: '--x- x-x- x-x- x-x-', sn: BACK, kd: 'x--- --x- x--- --x-' }),
          b4({ cr: r('X---', 4), sn: r('X---', 4), kd: r('x---', 4) })] },
        { id: 'gospel-2d', name: 'Corte antes do refrão', desc: 'Groove até o tempo 2, semicolcheias na caixa no tempo 3 e um golpe de prato, caixa e bumbo no 4. Depois, silêncio até o 1.', bpm: [60, 130], bars: [
          b4({ cr: 'x--- ---- ---- ----', hh: '--x- x-x- x-x- x-x-', sn: BACK, kd: 'x--- --x- x--- --x-' }),
          b4({ hh: 'x-x- x-x- ---- ----', cr: '---- ---- ---- X---', sn: '---- X--- xxxx X---', kd: 'x--- ---- ---- x---', st: '---- ---- DEDE ----' })] }
      ]
    },
    {
      id: 'gospel-3',
      name: 'Balada em 6/8',
      level: 2,
      goal: 'Tocar a balada de louvor em 6/8 com balanço ternário, sem que ela vire uma valsa ou um 4/4.',
      text: [
        'Muitas canções de adoração estão em 6/8: cada compasso tem seis colcheias divididas em dois grupos de três. Você sente dois pulsos por compasso, cada um com três notas por dentro. É o mesmo balanço ternário do shuffle, só que mais lento e mais "embalado".',
        'Na grade desta lição, cada tempo é um grupo de três colcheias, escrito como tercina: dois compassos de 6/8 cabem num compasso da grade, e o BPM é do grupo de três (o pulso que você bate com o pé). O módulo de compassos ímpares mostra o mesmo 6/8 e o 12/8 com o BPM da colcheia; as duas formas soam iguais, só muda a contagem do clique.',
        'A levada básica tem o chimbal em todas as colcheias, o bumbo no começo de cada compasso de 6/8 e a caixa no segundo pulso. Isso dá a sensação "UM dois três QUA quatro cinco": peso no começo, caixa no meio. No refrão, a condução substitui o chimbal e o bumbo ganha uma nota de preparação.',
        'O erro mais comum é tocar o 6/8 como se fosse uma valsa (três tempos) ou como se fosse um 4/4 lento. Na valsa, todas as colcheias pesam igual e o pulso fica em três. No 6/8, o pulso é de dois, e as colcheias do meio de cada grupo são mais leves. Mantenha esse "embalo" e a música flui.'
      ],
      steps: [
        'Conte em voz alta "1 2 3 4 5 6" com peso no 1 e no 4, batendo o pé só nesses dois números.',
        'Toque só o chimbal em colcheias, acentuando levemente o começo de cada grupo de três.',
        'Junte bumbo e caixa a 50 bpm (do grupo de três) por cinco minutos.',
        'Na construção do verso ao refrão, toque cada compasso quatro vezes antes de passar ao seguinte.',
        'Toque uma canção de adoração em 6/8 que você conheça, alternando verso no chimbal e refrão na condução.'
      ],
      mistakes: [
        'Todas as colcheias saem iguais e a música vira valsa. Correção: acentue o começo de cada grupo de três e deixe as outras duas mais leves.',
        'A caixa cai no lugar errado (no 3 ou no 5). Correção: conte "1 2 3 4 5 6" e coloque a caixa no 4.',
        'O andamento cai porque a música é lenta. Correção: pense nas colcheias como motor; elas não podem parar de andar.'
      ],
      tips: [
        'Viradas em 6/8 soam naturais em tercinas e sextinas, porque já estão na mesma divisão.',
        'Se ficar em dúvida se uma música é 6/8 ou 4/4, bata o pé: se ele cai a cada três colcheias, é 6/8.'
      ],
      ex: [
        { id: 'gospel-3a', name: 'Balada em 6/8 no chimbal', desc: 'Cada tempo é um grupo de três colcheias. Chimbal em todas as colcheias, bumbo no começo de cada 6/8 (com uma nota na última colcheia do 3º grupo) e caixa no 2º e no 4º grupo.', bpm: [45, 80], bars: [b3({ hh: r('xxx', 4), sn: '--- X-- --- X--', kd: 'x-- --- x-x ---' })] },
        { id: 'gospel-3b', name: 'Do verso ao refrão em 6/8', desc: 'Quatro compassos da grade (cada um são dois de 6/8): verso com chimbal e aro; pré-refrão na condução com caixa; virada de três notas (caixa, tom 1 e surdo) no último grupo; refrão com prato no 1.', bpm: [45, 80], bars: [
          b3({ hh: r('xxx', 4), cs: '--- x-- --- x--', kd: 'x-- --- x-- ---' }),
          b3({ rd: r('xxx', 4), sn: '--- X-- --- X--', kd: 'x-- --- x-x ---' }),
          b3({ rd: 'xxx xxx xxx ---', sn: '--- X-- --- x--', t1: '--- --- --- -x-', ft: '--- --- --- --x', kd: 'x-- --- x-- ---', st: '--- --- --- DED' }),
          b3({ cr: 'x-- --- --- ---', rd: '-xx xxx xxx xxx', sn: '--- X-- --- X--', kd: 'x-- --x x-- ---' })] }
      ]
    },
    {
      id: 'gospel-4',
      name: 'Gospel shuffle',
      level: 2,
      goal: 'Tocar o shuffle de igreja com as mãos encaixadas em tercinas e o bumbo empurrando o groove.',
      text: [
        'O gospel shuffle é o shuffle das igrejas negras norte-americanas, tocado com muita energia e balanço. A diferença para o shuffle de rock está na mão esquerda: ela preenche a nota do meio de cada tercina com ghost notes, de modo que as duas mãos juntas tocam a tercina completa, e o backbeat no 2 e no 4 estala por cima.',
        'O bumbo também é mais ativo. Em vez de só marcar o 1 e o 3, ele toca a última tercina do 2 e do 4, empurrando o groove para o tempo seguinte. Esse bumbo "atrasado" junto com as ghosts é o que dá o caráter de festa do estilo.',
        'Fisicamente, pense nas mãos como uma engrenagem: direita no chimbal na 1ª e na 3ª nota da tercina, esquerda na 2ª. A esquerda faz duas coisas ao mesmo tempo: ghost baixinha e backbeat forte. Por isso o controle de altura (toque para baixo depois do acento) é fundamental.',
        'Na segunda versão, a direita vai para o prato de condução, tocando o sino no tempo e o corpo do prato na última tercina, e o pé esquerdo fecha o chimbal no 2 e no 4. É um som muito usado em momentos de celebração, quando a igreja bate palmas.'
      ],
      steps: [
        'Toque tercinas alternadas na caixa (D E D E D E...) e depois mova só as notas da direita para o chimbal.',
        'Tire a primeira tercina da esquerda (no tempo) e mantenha as ghosts no meio de cada tempo.',
        'Coloque o acento no 2 e no 4 e depois junte o bumbo, a 70 bpm.',
        'Toque cinco minutos seguidos e suba de 5 em 5 bpm.',
        'Na versão com condução, treine primeiro sino e corpo do prato sozinhos.'
      ],
      mistakes: [
        'As ghosts ficam altas e o shuffle vira um rufo de tercinas. Correção: ghosts quase inaudíveis; o backbeat precisa ser três ou quatro vezes mais forte.',
        'O bumbo da última tercina adianta e cai junto com a ghost. Correção: cante "1 ta ka 2 ta KA" e coloque o bumbo no "ka" do 2.',
        'A mão direita perde o balanço quando a esquerda acentua. Correção: toque só as mãos, sem bumbo, até o chimbal ficar constante.'
      ],
      tips: [
        'O gospel shuffle costuma ser rápido. Domine em 90 bpm antes de tentar 130.',
        'Toque junto com palmas no 2 e no 4: é assim que ele é usado na igreja.'
      ],
      ex: [
        { id: 'gospel-4a', name: 'Gospel shuffle', desc: 'Chimbal na 1ª e na 3ª nota da tercina, ghost na 2ª nota de cada tempo, caixa forte no 2 e no 4 e bumbo no 1, na última tercina do 2, no 3 e na última tercina do 4.', bpm: [70, 140], bars: [b3({ hh: r('x-x', 4), sn: '-g- Xg- -g- Xg-', kd: 'x-- --x x-- --x' })] },
        { id: 'gospel-4b', name: 'Shuffle no sino da condução', desc: 'Sino da condução nos tempos e corpo do prato na última tercina, chimbal de pé no 2 e no 4, ghosts no meio do 1 e do 3, caixa forte no 2 e no 4.', bpm: [70, 140], bars: [b3({ rb: r('x--', 4), rd: r('--x', 4), sn: '-g- X-- -g- X--', kd: 'x-- --x x-- --x', hp: '--- x-- --- x--' })] }
      ]
    },
    {
      id: 'gospel-5',
      name: 'Groove gospel: sextinas no chimbal e linear',
      level: 3,
      goal: 'Tocar os grooves modernos de gospel com detalhes em sextina no chimbal e em forma linear.',
      text: [
        'O groove de gospel moderno parece um groove de pop com muitos detalhes por cima. Um dos mais característicos são as tercinas de semicolcheia no chimbal: no meio de um groove em colcheias, o chimbal faz um "tsi-ki-ti" rápido de três notas que empurra o tempo seguinte. Na grade de sextina, isso são as três últimas notas do tempo.',
        'Você já viu essa rajada no módulo de sextinas. Aqui ela entra num groove de dois compassos, em lugares diferentes, e isso muda a manulação. Depois do backbeat, a esquerda está livre: a rajada sai E D E, com a esquerda saindo da caixa para o chimbal. Antes do backbeat, use D E D, para a esquerda voltar à caixa a tempo. Ghost notes e um bumbo de preparação no fim do compasso completam o groove.',
        'O groove linear é o outro extremo: nenhuma nota toca junto com outra. Chimbal, caixa e bumbo se revezam em semicolcheias, formando uma linha contínua. O chimbal fica nos "e" e nos "a", a caixa faz o backbeat e as ghosts, e o bumbo preenche os buracos. Soa elegante e moderno, e exige muita precisão porque qualquer nota fora do lugar aparece.',
        'Esses grooves são a ponte entre a levada e os chops. Eles treinam a mão esquerda a sair da caixa para o chimbal, o bumbo a encaixar entre as mãos e o ouvido a pensar em semicolcheias e sextinas ao mesmo tempo. Toque devagar: estes grooves soam bem já a 70 bpm.'
      ],
      steps: [
        'No groove de sextinas, toque primeiro o chimbal sozinho com a manulação descrita, a 55 bpm.',
        'Junte o backbeat e as ghosts, depois o bumbo.',
        'No linear, fale a manulação ("bum, di, e, di...") e toque uma nota de cada vez, bem devagar.',
        'Toque cada groove por cinco minutos seguidos sem parar.',
        'Suba de 5 em 5 bpm, gravando para conferir se as sextinas não viram semicolcheias.'
      ],
      mistakes: [
        'O "tsi-ki-ti" do chimbal vira semicolcheias. Correção: toque sextinas completas no chimbal por um minuto e depois tire as notas que não pertencem ao groove.',
        'No linear, duas peças acabam tocando juntas. Correção: confira a manulação passo a passo; cada semicolcheia tem um único membro.',
        'A esquerda chega atrasada ao chimbal depois do backbeat. Correção: no backbeat, use toque para baixo e já leve a baqueta em direção ao chimbal.'
      ],
      tips: [
        'O detalhe de sextina no chimbal funciona melhor com o chimbal bem fechado e a ponta da baqueta.',
        'No linear, um chimbal um pouco mais aberto (meio solto) deixa o groove mais cheio.'
      ],
      ex: [
        { id: 'gospel-5a', name: 'Groove de dois compassos com rajadas', desc: 'No 1º compasso, a rajada de três notas no chimbal vem depois da caixa do 2 (E D E). No 2º, ela vem antes da caixa do 4 (D E D). Ghosts antes do backbeat e bumbo de preparação no fim do 2º compasso.', bpm: [55, 95], bars: [
          b6({ hh: 'x--x-- x--xxx x--x-- x--x--', sn: '----g- X----- ----g- X-----', kd: 'x----- -----x x----- ------' }),
          b6({ hh: 'x--x-- x--x-- x--xxx x--x--', sn: '----g- X----- ------ X--g--', kd: 'x----- ------ x----- ----x-' })] },
        { id: 'gospel-5b', name: 'Groove linear', desc: 'Semicolcheias sem nenhuma nota junta: chimbal nos "e" e nos "a" com a direita, caixa e ghosts com a esquerda, bumbo nos buracos.', bpm: [55, 100], bars: [b4({ hh: '-x-x -x-x -x-- -x-x', sn: '--g- X--- --g- X-g-', kd: 'x--- --x- x--x ----', st: 'BDED EDBD BDEB EDED' })] }
      ]
    },
    {
      id: 'gospel-6',
      name: 'Chops gospel',
      level: 3,
      goal: 'Dominar as combinações rápidas de mãos e bumbo (D E B B, D E D E B B) com acentos, pelo kit e dentro do groove.',
      text: [
        '"Gospel chops" é o nome dado às frases rápidas de mão e bumbo que viraram marca do gospel norte-americano. Elas se desenvolveram nas igrejas e nos "sheds", encontros em que vários bateristas se revezam no kit trocando ideias. O som é de uma metralhadora melódica: mãos e bumbo intercalados em sextinas ou tercinas de semicolcheia, com acentos nos pratos e nos tons.',
        'A base são poucas células, que você já estudou no módulo de sextinas: D E B, D E D E B B e D E B B. Aqui elas viram frases de gospel: combinadas entre si, com acentos no prato, descendo os tons e encaixadas no groove. A D E B B é a mais interessante: tem quatro notas, mas é tocada em sextina, que tem seis por tempo. Então o desenho atravessa o tempo e só se alinha a cada dois tempos, criando o efeito de 4 contra 6. É daí que vem a sensação de "caos organizado" dos chops.',
        'Os dois B seguidos, em sextina, são rápidos demais para um pé só em andamentos altos. Com pedal duplo, faça o primeiro com o pé direito e o segundo com o esquerdo, como está escrito na grade. Sem pedal duplo, use estes exercícios em andamento baixo para treinar o pé direito, e saiba que eles são um ótimo motivo para começar no pedal duplo.',
        'O mais importante é musicalidade. Um chop de dois tempos bem colocado, saindo do groove e voltando no 1, vale mais que um compasso inteiro de notas. Use acentos no prato e nos tons para que a frase tenha desenho, e comece sempre devagar: chops tocados sujos não impressionam ninguém.'
      ],
      steps: [
        'Toque cada célula só na caixa e no bumbo, a 50 bpm, até as quatro ou seis notas soarem iguais.',
        'Acentue a primeira nota de cada célula e depois leve esse acento para o prato ou para os tons.',
        'Encaixe o chop no compasso de virada depois do groove.',
        'Toque cinco minutos seguidos de cada exercício, descansando as mãos entre um e outro.',
        'Suba o andamento de 5 em 5 bpm só quando o bumbo estiver no mesmo volume das mãos.'
      ],
      mistakes: [
        'O bumbo some e o chop vira só mãos. Correção: toque as mãos mais baixas e os pés mais firmes até o volume equilibrar.',
        'Na D E B B em sextina, você "corrige" o desenho para caber no tempo. Correção: conte as sextinas em voz alta e confira que o acento cai cada vez num lugar diferente, voltando ao 1 a cada dois tempos.',
        'A mão direita chega atrasada no prato. Correção: treine só o acento no prato e a nota seguinte da esquerda, devagar, até o movimento ficar curto.',
        'Acelerar no meio da frase por empolgação. Correção: deixe o clique em todas as subdivisões e treine sempre abaixo do seu limite.'
      ],
      tips: [
        'Sem pedal duplo, comece a 40 a 50 bpm com os dois B no pé direito. Com pedal duplo, divida direito e esquerdo.',
        'Estude também começando a frase com a esquerda: as frases ficam mais variadas e as mãos mais equilibradas.',
        'Use os chops como tempero. Uma ou duas vezes por música é o suficiente.'
      ],
      ex: [
        { id: 'gospel-6a', name: 'Frase 3 + 4 + 5', desc: 'Três células em sequência: D E B, D E B B e D E D E B. As doze notas ocupam dois tempos de sextina e se repetem. Acento no começo de cada célula; nos B B, bumbo direito e esquerdo.', bpm: [50, 95], click: 'sub', bars: [b6({ ...chop(F345, Array(24).fill('sn'), [0, 3, 7, 12, 15, 19]), st: F345 })] },
        { id: 'gospel-6b', name: 'D E D E B B com prato', desc: 'Um compasso de groove e um de chop: D E D E B B em cada tempo, com a direita no prato no começo dos três primeiros tempos, descendo caixa, tom 1, tom 2 e surdo.', bpm: [50, 90], bars: [b6(G.rock6C), b6({
          cr: 'x----- x----- x----- ------',
          sn: '-xxx-- -x---- ------ ------',
          t1: '------ --xx-- -x---- ------',
          t2: '------ ------ --xx-- -x-x--',
          ft: '------ ------ ------ x-x---',
          kd: r('----x-', 4), ke: r('-----x', 4), st: r('DEDEBB', 4) })] },
        { id: 'gospel-6c', name: 'Cascata D E B B pelos tons', desc: 'Um compasso de groove e um de D E B B em sextinas: a direita desce tom 1, tom 2 e surdo (dois grupos em cada), a esquerda fica na caixa e os pés fazem B B.', bpm: [50, 95], bars: [b6(G.rock6C), b6({
          ...chop(DEBB6, [].concat(...['t1', 't1', 't2', 't2', 'ft', 'ft'].map(t => [t, 'sn', '', ''])), [0, 4, 8, 12, 16, 20]), st: DEBB6 })] },
        { id: 'gospel-6d', name: 'Chop dentro do groove', desc: 'Groove nos tempos 1 e 2 e três grupos D E B B nos tempos 3 e 4 (caixa, tom 1 e surdo na direita). Volta no 1 com prato.', bpm: [50, 95], bars: [b6(G.rock6C), b6({
          hh: 'x--x-- x--x-- ------ ------', sn: '------ X----- Xx---x ---x--', t1: '------ ------ ----X- ------', ft: '------ ------ ------ --X---',
          kd: 'x----- ------ --x--- x---x-', ke: '------ ------ ---x-- -x---x',
          st: '------ ------ DEBBDE BBDEBB' })] }
      ]
    }
  ]
};
