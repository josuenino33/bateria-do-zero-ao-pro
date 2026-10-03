import { b1, b2, b3, b4, b6 } from './helpers.js';

// Manulação natural: cada nota recebe a mão da posição em que cai na grade
// (D nas posições pares, E nas ímpares). Nas colcheias: D no tempo, E no "e".
// Nas semicolcheias: D no 1 e no "&", E no "e" e no "a". Nas tercinas a mão alterna nota a nota.
const nat = track => [...track.replace(/[\s|]/g, '')].map((c, i) => (c === '-' ? '-' : 'DE'[i % 2])).join('');
// Compasso de leitura só na caixa/pad, com manulação natural.
const pad = (fn, sn) => fn({ sn, st: nat(sn) });

const HH8 = 'x-x- x-x- x-x- x-x-';
const BB = '---- X--- ---- X---';

export default {
  id: 'leitura',
  name: 'Leitura de partitura',
  desc: 'Pentagrama, figuras, pausas, tercinas, síncope e grooves escritos: ler bateria como quem lê um texto.',
  lessons: [
    {
      id: 'leitura-1',
      name: 'Semínimas, colcheias e pausas',
      level: 1,
      goal: 'Entender o pentagrama da bateria e ler semínimas, colcheias e pausas contando em voz alta.',
      text: [
        'A partitura de bateria usa o mesmo pentagrama da música: cinco linhas e quatro espaços, contados de baixo para cima. No começo da pauta, no lugar da clave de sol, aparece a clave de percussão, duas barrinhas verticais. Ela avisa que linhas e espaços não são notas musicais, e sim peças do kit. Depois vem a fórmula de compasso: 4/4 quer dizer quatro tempos por compasso, e cada tempo vale uma semínima. As barras verticais separam os compassos.',
        'Na maioria das partituras, cada peça tem o seu lugar. O bumbo fica no primeiro espaço (o de baixo), o surdo no segundo espaço, a caixa no terceiro espaço, o tom 2 na quarta linha e o tom 1 no quarto espaço. Os pratos usam cabeça de nota em forma de "x": o chimbal fica logo acima da pauta, a condução na quinta linha e o prato de ataque numa linha suplementar acima de tudo. O chimbal tocado com o pé aparece como "x" abaixo da pauta. Em geral, o que as mãos tocam tem a haste para cima e o que os pés tocam tem a haste para baixo.',
        'As figuras dizem quanto tempo cada nota ocupa. A semibreve vale quatro tempos, a mínima vale dois, a semínima vale um, a colcheia vale meio tempo e a semicolcheia, um quarto de tempo. Colcheias têm uma bandeirola, ou uma barra ligando as notas; semicolcheias têm duas. Cada figura tem uma pausa com a mesma duração. A pausa é silêncio medido e conta tanto quanto a nota.',
        'Na bateria, o lugar em que a nota começa importa mais que a duração escrita, porque o tambor não sustenta o som como um violino. Por isso, o mais importante é contar, e contar em voz alta: "1, 2, 3, 4" nas semínimas e "1 e 2 e 3 e 4 e" nas colcheias. A nota cai na sílaba certa; a pausa é a sílaba falada sem tocar.',
        'Ler bem é ler adiantado. Enquanto as mãos tocam um tempo, os olhos já estão no próximo, e com prática, no próximo compasso. Nos exercícios deste módulo, a manulação segue a posição da nota: direita nos tempos e esquerda nos contratempos. Assim a própria mão mostra onde você está.'
      ],
      steps: [
        'Antes de tocar, leia cada exercício em voz alta, falando a contagem e batendo palmas só nas notas.',
        'Semínimas e pausas a 60 bpm. Nas pausas, fale o número sem tocar.',
        'Colcheias e semínimas a 60 bpm, contando "1 e 2 e". A direita fica nos números e a esquerda nos "e".',
        'Pausas de colcheia: as notas no contratempo são da esquerda. Não deixe a pausa encurtar.',
        'Toque os quatro compassos sem parar e sem voltar. Errou? Siga em frente e acerte o compasso seguinte, como numa leitura de verdade. Suba de 10 em 10 bpm até a meta.'
      ],
      mistakes: [
        'Contar só na cabeça. Correção: conte em voz alta; a voz mostra na hora quando você se perde.',
        'Encurtar as pausas e adiantar a nota seguinte. Correção: a pausa tem a mesma duração da nota; fale a sílaba inteira.',
        'Parar para corrigir um erro. Correção: na leitura o tempo não para; siga em frente e acerte o próximo compasso.',
        'Olhar só a nota que está tocando. Correção: leve os olhos um tempo à frente das mãos.'
      ],
      tips: [
        'Decore o lugar de cada peça na pauta olhando para o kit: aponte para a peça e diga onde ela fica.',
        'Leia um pouco todo dia. Cinco minutos diários rendem mais que uma hora por semana.',
        'Nos primeiros exercícios, escreva a contagem a lápis embaixo das notas.'
      ],
      ex: [
        { id: 'leitura-1a', name: 'Semínimas e pausas', desc: 'Quatro compassos de semínimas e pausas de semínima na caixa.', bpm: [60, 120], pad: true, staff: true, bars: [pad(b1, 'x x x x'), pad(b1, 'x - x -'), pad(b1, 'x x - x'), pad(b1, '- x x x')] },
        { id: 'leitura-1b', name: 'Colcheias e semínimas', desc: 'Quatro compassos misturando pares de colcheias e semínimas.', bpm: [60, 120], pad: true, staff: true, bars: [pad(b2, 'xx xx x- x-'), pad(b2, 'x- xx x- xx'), pad(b2, 'xx x- xx x-'), pad(b2, 'x- x- xx x-')] },
        { id: 'leitura-1c', name: 'Pausas de colcheia', desc: 'Notas no contratempo depois de pausas de colcheia. A esquerda toca nos "e".', bpm: [60, 110], pad: true, staff: true, bars: [pad(b2, 'x- -x x- -x'), pad(b2, '-x -x xx x-'), pad(b2, 'xx -x -x x-'), pad(b2, '-x xx -x x-')] }
      ]
    },
    {
      id: 'leitura-2',
      name: 'Semicolcheias: as 15 células',
      level: 1,
      goal: 'Reconhecer de olho e tocar as 15 células de semicolcheia que cabem num tempo.',
      text: [
        'Com quatro semicolcheias por tempo, contadas "1 e & a", existem exatamente 15 maneiras de preencher um tempo com notas e pausas, sem contar o tempo vazio. Quem reconhece essas 15 células de olho lê praticamente qualquer ritmo de semicolcheia, porque toda partitura é feita da combinação delas, um tempo depois do outro.',
        'Elas se dividem assim: quatro células com uma nota só (no 1, no "e", no "&" ou no "a"), seis com duas notas, quatro com três notas e uma com as quatro. Repare como a escrita muda. Colcheia e duas semicolcheias ficam ligadas por uma barra, com uma barra a mais embaixo das semicolcheias. A colcheia pontuada vale três semicolcheias, porque o ponto aumenta a figura em metade do seu valor: colcheia pontuada e semicolcheia soam no 1 e no "a".',
        'A manulação dos exercícios é a chamada manulação natural: a direita toca o 1 e o "&", e a esquerda toca o "e" e o "a". Se a nota cai no "a", é sempre a esquerda. Parece detalhe, mas faz a mão "saber" onde a nota está, e o movimento vira mais uma referência para a leitura. Muitos bateristas leem e criam grooves assim.',
        'As células que começam fora do tempo são as mais difíceis, porque não há nota no 1 para servir de âncora. Nelas, a contagem em voz alta é obrigatória: você fala o "1" e só toca no "e", no "&" ou no "a". Por isso esta lição separa as células que começam no tempo das que começam depois dele, antes de misturar tudo e de acrescentar os acentos.'
      ],
      steps: [
        'Antes de cada exercício, fale a contagem do compasso inteiro batendo palmas só nas notas.',
        'Células que começam no tempo a 50 bpm, contando "1 e & a" em voz alta.',
        'Células que começam fora do tempo a 50 bpm. Fale mais forte a sílaba em que a nota cai.',
        'As 15 células em sequência: toque os quatro compassos sem parar, lendo um tempo adiantado.',
        'Lendo acentos: as notas são contínuas e só o acento muda de lugar. Suba de 5 em 5 bpm até a meta de cada exercício.'
      ],
      mistakes: [
        'Confundir colcheia pontuada e semicolcheia com duas colcheias. Correção: conte "1 e & a"; a segunda nota cai no "a", não no "&".',
        'Adiantar as notas que vêm depois de uma pausa. Correção: fale a sílaba da pausa em voz alta.',
        'Abandonar a manulação natural e se perder. Correção: siga a regra: 1 e "&" com a direita, "e" e "a" com a esquerda.'
      ],
      tips: [
        'Faça cartões com as 15 células e treine reconhecer cada uma em um segundo.',
        'Leia cada exercício também só com a direita e só com a esquerda.',
        'Depois de dominar, leia as mesmas linhas no bumbo, com a mão direita em colcheias no chimbal.'
      ],
      ex: [
        { id: 'leitura-2a', name: 'Células que começam no tempo', desc: 'As oito células com nota no 1, misturadas em quatro compassos.', bpm: [50, 100], pad: true, staff: true, bars: [pad(b4, 'xxxx x-x- xxxx x---'), pad(b4, 'xx-- xx-- x-x- x---'), pad(b4, 'x-xx x-xx xxx- x---'), pad(b4, 'x--x x--x xx-x x---')] },
        { id: 'leitura-2b', name: 'Células que começam fora do tempo', desc: 'As sete células sem nota no 1, sempre com um tempo de apoio antes delas.', bpm: [50, 90], pad: true, staff: true, bars: [pad(b4, 'x--- -x-- x--- --x-'), pad(b4, 'x--- ---x x--- -xx-'), pad(b4, 'x--- -x-x x--- --xx'), pad(b4, 'x--- -xxx x-x- x---')] },
        { id: 'leitura-2c', name: 'As 15 células em sequência', desc: 'Quatro compassos que passam por todas as 15 células, sem tempo de apoio entre elas.', bpm: [50, 90], pad: true, staff: true, bars: [pad(b4, 'xxxx -xxx x-xx xx-x'), pad(b4, 'xxx- x--x -x-x --xx'), pad(b4, 'x-x- -xx- xx-- ---x'), pad(b4, '-x-- --x- x--- xxxx')] },
        { id: 'leitura-2d', name: 'Lendo acentos', desc: 'Semicolcheias contínuas com acentos que mudam de lugar a cada tempo.', bpm: [50, 100], pad: true, staff: true, bars: [pad(b4, 'Xxxx xxXx Xxxx xxXx'), pad(b4, 'xXxx xxxX xXxx xxxX'), pad(b4, 'XxxX xxXx xXxx Xxxx'), pad(b4, 'XxXx xXxX XXxx Xxxx')] }
      ]
    },
    {
      id: 'leitura-3',
      name: 'Tercinas e sextinas na partitura',
      level: 2,
      goal: 'Ler tercinas, sextinas e tercinas de semínima, com e sem pausas, trocando de divisão sem mudar o andamento.',
      text: [
        'Tercina é quando três notas ocupam o espaço de duas. A tercina de colcheia coloca três notas num tempo, em vez de duas, e aparece escrita com um "3" sobre a barra ou sob um colchete. Conte "1 ta ka, 2 ta ka". A sextina coloca seis notas num tempo, escritas como semicolcheias com um "6" em cima, e se conta "1 ta ka e ta ka".',
        'A tercina também pode ter pausas. A tercina com pausa no meio (nota, pausa, nota) é a base do shuffle e do swing: "1 - ka". A tercina com a primeira nota em pausa começa fora do tempo e aparece muito em viradas de gospel. Como nas semicolcheias, o segredo é falar a contagem inteira, inclusive nas pausas.',
        'Existe ainda a tercina de semínima: três semínimas no espaço de dois tempos. Ela soa como se a música freasse por um instante. O jeito mais seguro de ler é pensar na tercina de colcheia por baixo: a tercina de semínima toca uma nota sim, uma não, dentro de seis tercinas de colcheia. Quem entende isso encaixa a figura sem adivinhar.',
        'Na leitura, o maior perigo é a troca de divisão. Passar de colcheias para tercinas e de tercinas para semicolcheias exige mudar a contagem no meio da música sem mudar o andamento. A manulação natural ajuda: nas tercinas a mão alterna nota a nota, então o tempo cai uma vez em cada mão; nas sextinas, cada tempo começa com a direita.'
      ],
      steps: [
        'Antes de tocar, fale cada compasso em voz alta com a contagem certa: "1 e" nas colcheias, "1 ta ka" nas tercinas, "1 e & a" nas semicolcheias.',
        'Tercinas com pausas a 50 bpm. Nas pausas, fale a sílaba sem tocar.',
        'Colcheia, tercina e semicolcheia a 50 bpm. A mudança de compasso não pode mudar o andamento.',
        'Tercina de semínima: toque o primeiro compasso e perceba que a direita já está tocando exatamente a tercina de semínima. No segundo, só ela continua.',
        'Sextinas e pausas a 40 bpm. Suba de 5 em 5 bpm até a meta de cada exercício.'
      ],
      mistakes: [
        'Tocar a tercina como duas semicolcheias e uma colcheia, um "galope". Correção: as três notas têm a mesma distância; fale "1 ta ka" bem regular.',
        'Acelerar na sextina. Correção: o tempo continua no mesmo lugar; pense no início de cada tempo como uma âncora.',
        'Tercina de semínima adivinhada. Correção: pense nas seis tercinas de colcheia por baixo e toque uma sim, uma não.'
      ],
      tips: [
        'Use o clique nas subdivisões nas primeiras leituras de tercina.',
        'Nas tercinas com pausa no meio, ouça o balanço do shuffle aparecer.',
        'Escreva a contagem a lápis nas tercinas de semínima até ela ficar natural.'
      ],
      ex: [
        { id: 'leitura-3a', name: 'Tercinas com pausas', desc: 'Quatro compassos de tercinas de colcheia com pausas em lugares diferentes.', bpm: [50, 100], pad: true, staff: true, bars: [pad(b3, 'xxx xxx xxx x--'), pad(b3, 'x-x x-x xxx x--'), pad(b3, 'xx- xx- x-x x--'), pad(b3, '-xx -xx xxx x--')] },
        { id: 'leitura-3b', name: 'Colcheia, tercina e semicolcheia', desc: 'Um compasso de cada divisão, com pausas: a contagem muda e o andamento não.', bpm: [50, 90], pad: true, staff: true, bars: [pad(b2, 'xx xx x- x-'), pad(b3, 'xxx xxx x-x x--'), pad(b4, 'xxxx xxxx x-xx x---'), pad(b3, 'xxx -xx xxx x--')] },
        { id: 'leitura-3c', name: 'Tercina de semínima', desc: 'Um compasso de tercinas de colcheia e um de tercinas de semínima, com a direita tocando as mesmas posições.', bpm: [50, 100], pad: true, staff: true, bars: [pad(b3, 'xxx xxx xxx xxx'), pad(b3, 'x-x -x- x-x -x-')] },
        { id: 'leitura-3d', name: 'Sextinas e pausas', desc: 'Quatro compassos de sextinas com pausas de meio tempo e de tempo inteiro.', bpm: [40, 80], pad: true, staff: true, bars: [pad(b6, 'xxxxxx x----- xxxxxx x-----'), pad(b6, 'xxx--- xxx--- xxxxxx x-----'), pad(b6, '---xxx ---xxx xxxxxx x-----'), pad(b6, 'xxxxxx xxxxxx xxxxxx x-----')] }
      ]
    },
    {
      id: 'leitura-4',
      name: 'Síncope e contratempo',
      level: 2,
      goal: 'Ler e sentir notas fora do tempo, a base do groove brasileiro, do funk e do pop.',
      text: [
        'Contratempo é a nota que cai entre os tempos: o "e" nas colcheias. Síncope é quando uma nota começa fora do tempo e se prolonga por cima do tempo seguinte, deslocando o apoio natural do compasso. Na escrita, a síncope aparece como uma nota no contratempo seguida de pausa no tempo, ou como uma nota ligada por cima do tempo. Na bateria o efeito é o mesmo: o ouvido espera uma nota no tempo e ela chegou antes.',
        'A síncope está em toda parte: no samba e no choro, no baião, no funk, no pop e no louvor contemporâneo, em que a banda inteira faz convenções sincopadas o tempo todo. Ler síncope com segurança é o que permite tocar uma convenção escrita no ensaio sem precisar ouvir a música dez vezes.',
        'A dificuldade é física e mental: o corpo quer tocar no tempo. Por isso o primeiro passo é marcar o tempo com o pé, no chimbal ou no bumbo, enquanto as mãos leem as síncopes. Assim o tempo continua firme embaixo e a nota sincopada fica clara em cima. Conte em voz alta e diga mais forte a sílaba em que a nota cai.',
        'Os exercícios seguem a tradição dos livros clássicos de síncope: linhas curtas de colcheias e semicolcheias em que as notas fora do tempo vão aumentando. Primeiro o contratempo puro, depois as síncopes de colcheia e por fim as de semicolcheia, que já soam como frases de groove e de convenção.'
      ],
      steps: [
        'Antes de cada exercício, marque os quatro tempos com o pé esquerdo no chimbal e mantenha durante a leitura.',
        'Contratempo em colcheias a 60 bpm. A esquerda toca nos "e" e o pé marca os números.',
        'Síncope em colcheias a 60 bpm: fale "1 e 2 e" e toque só onde há nota.',
        'Síncope em semicolcheias a 50 bpm, contando "1 e & a".',
        'Toque cada exercício duas vezes seguidas sem parar. Depois leia a mesma linha no bumbo, com a direita em colcheias no chimbal. Suba de 5 em 5 bpm.'
      ],
      mistakes: [
        'Puxar a nota sincopada para o tempo. Correção: marque o tempo com o pé e confira que a mão cai entre as batidas do pé.',
        'Perder o compasso depois de vários contratempos seguidos. Correção: conte em voz alta, com força nos números.',
        'Encurtar a pausa depois da síncope. Correção: a pausa no tempo faz parte da frase; fale a sílaba dela.'
      ],
      tips: [
        'Ouça como o pandeiro e o tamborim colocam notas fora do tempo no samba: é síncope pura.',
        'Leia essas linhas também como acentos de prato por cima de um groove. É assim que as convenções aparecem no ensaio.',
        'Se uma linha travar, toque só as notas que caem no tempo e depois acrescente as outras.'
      ],
      ex: [
        { id: 'leitura-4a', name: 'Contratempo em colcheias', desc: 'Quatro compassos com notas no "e", misturadas com notas no tempo.', bpm: [60, 120], pad: true, staff: true, bars: [pad(b2, '-x -x -x -x'), pad(b2, 'x- -x x- -x'), pad(b2, '-x x- -x x-'), pad(b2, 'xx -x -x x-')] },
        { id: 'leitura-4b', name: 'Síncope em colcheias', desc: 'Notas no contratempo seguidas de pausa no tempo, deslocando o apoio do compasso.', bpm: [60, 120], pad: true, staff: true, bars: [pad(b2, 'x- -x -x x-'), pad(b2, 'x- -x -- x-'), pad(b2, '-x -x x- -x'), pad(b2, '-x -- x- x-')] },
        { id: 'leitura-4c', name: 'Síncope em semicolcheias', desc: 'Frases de semicolcheias com notas no "e" e no "a" que atravessam os tempos.', bpm: [50, 90], pad: true, staff: true, bars: [pad(b4, 'x--x --x- x--x --x-'), pad(b4, '-x-x -x-x x--- x---'), pad(b4, 'x-xx -xx- x--x -x--'), pad(b4, '--x- -x-x xx-x x---')] }
      ]
    },
    {
      id: 'leitura-5',
      name: 'Lendo grooves no kit',
      level: 3,
      goal: 'Ler grooves de chimbal, caixa e bumbo, e frases nos tons, com várias linhas ao mesmo tempo.',
      text: [
        'Até aqui você leu uma linha só. Um groove escrito tem três ou mais peças ao mesmo tempo: chimbal ou condução em "x" acima, caixa no terceiro espaço e bumbo no primeiro. Normalmente as mãos ficam com as hastes para cima e o bumbo com as hastes para baixo, em duas vozes. Ler groove é ler na vertical: em cada posição do tempo, o que soa junto?',
        'O jeito mais seguro de ler um groove novo é por camadas. Primeiro leia só o chimbal e conte a subdivisão. Depois chimbal e caixa. Por último acrescente o bumbo, que quase sempre é a parte que muda de um compasso para outro. O chimbal funciona como régua: ele mostra a subdivisão, e caixa e bumbo se encaixam nela.',
        'Repare nos detalhes da escrita. O chimbal aberto costuma ser marcado com um pequeno "o" sobre a nota, e ele fecha na nota seguinte. Ghost notes aparecem entre parênteses ou menores. Acentos aparecem com o sinal ">". O prato de ataque fica acima da pauta e costuma marcar o começo de uma frase. Nas frases de tons, localize a caixa no terceiro espaço e conte para cima: quarta linha é tom 2, quarto espaço é tom 1; para baixo, segundo espaço é surdo.',
        'Nesta lição os grooves têm de dois a quatro compassos, como numa partitura real. O bumbo, a caixa e o chimbal mudam ao longo da frase, então não dá para tocar de cor depois do primeiro compasso: é preciso ler até o fim. Leia um compasso adiantado e, quando estiver firme, tente tocar olhando só para a partitura, sem olhar para o kit.'
      ],
      steps: [
        'Leia cada groove por camadas: primeiro só o chimbal ou a condução, depois com a caixa, depois tudo.',
        'Groove em colcheias a 60 bpm. Atenção ao chimbal aberto no último "e" do quarto compasso, que prepara o prato no 1.',
        'Bumbo em semicolcheias a 60 bpm. Leia o bumbo de cada compasso antes de chegar nele.',
        'Groove com ghost notes a 60 bpm: ghost notes bem baixas, caixa do backbeat alta.',
        'Condução e frase nos tons: antes de tocar, aponte na pauta onde está cada tom. Suba de 5 em 5 bpm até a meta.'
      ],
      mistakes: [
        'Tocar o primeiro compasso de cor e repetir o mesmo bumbo nos outros. Correção: leia compasso por compasso; o bumbo muda.',
        'Chimbal que muda junto com o bumbo. Correção: toque só chimbal e bumbo até o chimbal ficar constante.',
        'Confundir a linha do tom 2 com o espaço da caixa. Correção: localize a caixa no terceiro espaço e conte a partir dela.',
        'Ghost notes tão altas quanto o backbeat. Correção: elas saem de 2 a 3 cm da pele; o backbeat sai do alto.'
      ],
      tips: [
        'Procure partituras das músicas que você toca e leia acompanhando a gravação.',
        'Escrever é o melhor jeito de aprender a ler: transcreva um groove simples por semana.',
        'Quando o groove estiver firme, fale em voz alta só o bumbo enquanto toca tudo.'
      ],
      listen: ['Billie Jean — Michael Jackson (chimbal em colcheias, bumbo no 1 e no 3, caixa no 2 e no 4: um groove ótimo para ler e tocar junto)'],
      ex: [
        {
          id: 'leitura-5a', name: 'Groove em colcheias', desc: 'Quatro compassos de rock em colcheias: o bumbo muda a cada compasso e o chimbal abre no fim da frase.', bpm: [60, 120], staff: true,
          bars: [
            b2({ cr: 'x- -- -- --', hh: '-x xx xx xx', sn: '-- X- -- X-', kd: 'x- -- x- --' }),
            b2({ hh: 'xx xx xx xx', sn: '-- X- -- X-', kd: 'x- -- xx --' }),
            b2({ hh: 'xx xx xx xx', sn: '-- X- -- X-', kd: 'x- -x x- --' }),
            b2({ hh: 'xx xx xx xo', sn: '-- X- -- X-', kd: 'x- -- xx -x' })
          ]
        },
        {
          id: 'leitura-5b', name: 'Bumbo em semicolcheias', desc: 'Quatro compassos com chimbal em colcheias, caixa no 2 e no 4 e um bumbo diferente em cada compasso.', bpm: [60, 110], staff: true,
          bars: [
            b4({ hh: HH8, sn: BB, kd: 'x--- ---- x-x- ----' }),
            b4({ hh: HH8, sn: BB, kd: 'x--x ---- x-x- ---x' }),
            b4({ hh: HH8, sn: BB, kd: 'x--- --x- -x-- ----' }),
            b4({ hh: HH8, sn: BB, kd: 'x--x --x- x--- --x-' })
          ]
        },
        {
          id: 'leitura-5c', name: 'Groove com ghost notes', desc: 'Dois compassos com ghost notes na caixa, bumbo sincopado e chimbal aberto no fim.', bpm: [60, 100], staff: true,
          bars: [
            b4({ hh: HH8, sn: '---- X--g -g-- X--g', kd: 'x--- --x- x--- ----' }),
            b4({ hh: 'x-x- x-x- x-x- x-o-', sn: '-g-- X--g ---g X---', kd: 'x-x- ---- --x- ----' })
          ]
        },
        {
          id: 'leitura-5d', name: 'Condução e frase nos tons', desc: 'Quatro compassos com prato de ataque, condução em colcheias e uma frase de caixa, tons e surdo no último compasso.', bpm: [60, 110], staff: true,
          bars: [
            b4({ cr: 'x--- ---- ---- ----', rd: '--x- x-x- x-x- x-x-', sn: BB, kd: 'x--- ---- x--- ----' }),
            b4({ rd: HH8, sn: BB, kd: 'x--- ---- x-x- ----' }),
            b4({ rd: HH8, sn: BB, kd: 'x--- --x- x--- ----' }),
            b4({ rd: 'x-x- x-x- ---- ----', sn: '---- X--- xx-- ----', t1: '---- ---- --xx ----', t2: '---- ---- ---- xx--', ft: '---- ---- ---- --xx', kd: 'x--- ---- ---- ----', st: '---- ---- DEDE DEDE' })
          ]
        }
      ]
    }
  ]
};
