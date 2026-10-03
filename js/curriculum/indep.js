import { r, b2, b3, b4, b6, G, rot, seq } from './helpers.js';

// Base que se repete em vários exercícios: chimbal em colcheias e caixa no 2 e no 4.
const HH8 = r('x-x-', 4);
const BACK = '---- X--- ---- X---';
const KICK13 = 'x--- ---- x-x- ----';

// Permutação de bumbo: bumbo no 1 e no 3 e uma nota extra (posição p dentro do tempo)
// que anda pelos quatro tempos, um tempo por compasso.
const kickWalk = ps => seq(4, beat => {
  const k = Array(16).fill('-'); k[0] = 'x'; k[8] = 'x';
  ps.forEach(p => { k[beat * 4 + p] = 'x'; });
  return b4({ hh: HH8, sn: BACK, kd: k.join('') });
});

// Permutação de ghost note: uma nota fantasma na posição p, andando pelos quatro tempos.
const ghostWalk = p => seq(4, beat => {
  const s = BACK.replace(/\s/g, '').split(''); s[beat * 4 + p] = 'g';
  return b4({ hh: HH8, sn: s.join(''), kd: KICK13 });
});

// Abertura de chimbal que anda pelos tempos: no compasso k, abre no "&" (p = 2) ou no "a" (p = 3) do tempo k.
const openWalk = p => seq(4, beat => {
  const h = HH8.replace(/\s/g, '').split(''); h[beat * 4 + p] = 'o';
  return b4({ hh: h.join(''), sn: BACK, kd: KICK13 });
});

// Semicolcheias alternadas com acento a cada n notas, ao longo de n compassos
// (o ciclo fecha exatamente no fim). Bumbo marca as semínimas.
const accentEvery = n => {
  const s = Array.from({ length: 16 * n }, (_, i) => (i % n === 0 ? 'X' : 'g')).join('');
  return seq(n, k => b4({ sn: s.slice(16 * k, 16 * k + 16), kd: r('x---', 4), st: r('DEDE', 4) }));
};

// Desloca todas as trilhas de um groove k semicolcheias para a direita.
const shift = (groove, k) => Object.fromEntries(Object.entries(groove).map(([t, v]) => [t, rot(v, k)]));

const KPOS = [
  { p: [2], id: 'a', nome: 'Bumbo extra no "&"', bpm: [60, 120], desc: 'O bumbo ganha uma nota no "&", junto com o chimbal. A nota extra anda: no 1º compasso fica no "&" do 1, no 2º no "&" do 2, e assim por diante.' },
  { p: [3], id: 'b', nome: 'Bumbo extra no "a"', bpm: [55, 115], desc: 'Agora a nota extra cai no "a", sozinha entre duas notas do chimbal. Ela anda um tempo por compasso. O chimbal não pode se mexer junto com o pé.' },
  { p: [1], id: 'c', nome: 'Bumbo extra no "e"', bpm: [50, 110], desc: 'A posição mais difícil: o "e", logo depois do tempo. A nota anda pelos quatro tempos, um por compasso. Conte em voz alta "1 e & a".' }
];

export default {
  id: 'indep',
  name: 'Independência e coordenação',
  desc: 'Cada membro com sua função: bumbo e caixa soltos debaixo do chimbal, ghost notes, aberturas, jazz, polirritmias e deslocamento.',
  lessons: [
    {
      id: 'indep-1',
      name: 'Groove e bumbo',
      level: 1,
      goal: 'Manter o chimbal reto e constante enquanto bumbo e caixa mudam por baixo dele.',
      text: [
        'Independência é cada parte do corpo fazer uma coisa diferente sem que uma arraste a outra. Quando você se sente "travado" na bateria, quase sempre é porque os membros estão presos uns aos outros: o pé só consegue tocar junto com a mão, a mão direita para quando a esquerda entra. O trabalho aqui é soltar essas amarras, uma de cada vez.',
        'Pense no chimbal como um trilho de trem. Ele passa reto, sempre no mesmo volume e no mesmo lugar, e o bumbo e a caixa são os vagões que entram e saem. Se o chimbal dá um tranco toda vez que o bumbo muda, o groove inteiro balança junto. Por isso a mão direita é a primeira coisa a observar em todos os exercícios deste módulo.',
        'Fisicamente, o segredo é deixar cada membro com o próprio movimento completo. O pé direito pisa e solta sem levar o ombro junto. A mão direita mantém a mesma altura de baqueta no chimbal, tenha ou não bumbo naquela nota. A mão esquerda toca a caixa com toque cheio no 2 e no 4 e volta para cima, pronta.',
        'As ghost notes (notas fantasmas) são notas muito baixas na caixa, tocadas a dois ou três centímetros da pele. Elas quase não se ouvem sozinhas, mas dão aquele balanço que faz um groove parecer vivo. No funk, no gospel e no pop elas estão em todo lugar, e são a ponte para tudo o que vem depois neste módulo.'
      ],
      steps: [
        'Toque só o chimbal em colcheias por um minuto a 70 bpm, ouvindo se todas as notas têm o mesmo volume.',
        'Junte o bumbo do exercício, sem a caixa, até o chimbal parar de "pular" nas notas do pé.',
        'Coloque a caixa no 2 e no 4 e toque o groove completo por quatro minutos seguidos.',
        'Nas ghost notes, toque primeiro só caixa e chimbal, deixando as notas baixas bem baixas; depois volte o bumbo.',
        'Suba de 5 em 5 bpm só quando o groove soar igual por dois minutos sem esforço.'
      ],
      mistakes: [
        'O chimbal acentua sozinho onde cai o bumbo. Correção: toque mais baixo no chimbal e pense em "deixar a baqueta cair" do mesmo jeito em todas as notas.',
        'A ghost note sai alta demais e vira uma segunda caixa. Correção: comece a baqueta a dois dedos da pele e só deixe ela cair, sem impulso de pulso.',
        'O bumbo do "a" do 1 adianta e gruda no tempo 2. Correção: conte "1 e & a" em voz alta e toque o bumbo exatamente na sílaba "a".',
        'O ombro sobe junto com o pé. Correção: solte o ar, baixe os ombros e diminua o andamento até o pé trabalhar sozinho.'
      ],
      tips: [
        'Grave um minuto com o celular e ouça só o chimbal. Ele te diz mais sobre sua independência do que qualquer outra coisa.',
        'Ghost notes saem do pulso relaxado, não do braço. Se o antebraço está trabalhando, a nota vai sair alta.',
        'Se travar, tire uma peça. Volte a juntar só quando as outras estiverem automáticas.'
      ],
      ex: [
        { id: 'indep-1a', name: 'Rock básico', desc: 'Chimbal em colcheias, caixa no 2 e no 4, bumbo no 1, no 3 e no "&" do 3. O ponto de partida de toda independência.', bpm: [60, 140], bars: [b2(G.rock8)] },
        { id: 'indep-1b', name: 'Bumbo nas semicolcheias', desc: 'O bumbo cai no "a" do 1 e no "&" do 2, entre e junto das notas do chimbal. A mão direita não pode tropeçar.', bpm: [60, 120], bars: [b4({ hh: HH8, sn: BACK, kd: 'x--x --x- x-x- ----' })] },
        { id: 'indep-1c', name: 'Primeiras ghost notes', desc: 'Groove com notas fantasmas no "a" do 1, no "a" do 2 e no "e" do 3. A caixa forte no 2 e no 4 tem que continuar forte.', bpm: [60, 110], bars: [b4({ hh: HH8, sn: '---g X--g -g-- X---', kd: KICK13 })] }
      ]
    },
    {
      id: 'indep-2',
      name: 'Permutações de bumbo',
      level: 1,
      goal: 'Conseguir colocar o bumbo em qualquer semicolcheia do compasso sem mexer no chimbal.',
      text: [
        'Permutação é pegar uma nota e passar ela por todas as posições possíveis, uma de cada vez. Aqui o bumbo ganha uma nota extra que anda pelo compasso: no primeiro compasso ela fica no tempo 1, no segundo no tempo 2, depois no 3 e no 4. Em cada exercício a posição dentro do tempo é diferente: "&", "a" e "e".',
        'Cada posição tem um desafio físico próprio. O "&" cai junto com o chimbal, então é fácil, mas tende a fazer a mão acentuar. O "a" fica sozinho entre duas notas do chimbal e puxa o pé para frente. O "e" vem logo depois do tempo e costuma atrasar, porque o pé ainda está voltando da nota anterior.',
        'Esse estudo existe porque os grooves de verdade colocam o bumbo em qualquer lugar. Pop, funk, gospel e metal usam bumbos no "a" e no "e" o tempo todo. Quem só consegue tocar bumbo junto com o chimbal acaba tocando sempre os mesmos dois ou três grooves, e é daí que vem a sensação de repetir tudo.',
        'Um detalhe importante: quando a nota extra muda de tempo, o resto não muda. O bumbo do 1 e do 3 e a caixa do 2 e do 4 continuam no lugar. Você está treinando a mente a mudar uma única coisa e manter as outras, que é a definição prática de independência.'
      ],
      steps: [
        'Antes de tocar, conte o compasso em voz alta ("1 e & a 2 e & a...") e bata palma na posição da nota extra.',
        'Toque cada compasso do exercício separado, em loop, a 60 bpm, até ele sair sem pensar.',
        'Junte os quatro compassos em sequência, sem parar entre eles.',
        'Faça os três exercícios na ordem "&", "a" e "e", que vai do mais fácil ao mais difícil.',
        'Quando todos estiverem limpos a 90 bpm, misture: um compasso de cada posição, escolhendo na hora.'
      ],
      mistakes: [
        'O chimbal some ou fica mais fraco na nota do bumbo. Correção: toque só chimbal e bumbo, sem caixa, até a mão ficar indiferente ao pé.',
        'O bumbo do "e" atrasa e vira "&". Correção: diminua 10 bpm e pense no "e" como uma nota colada no tempo, quase um "tum-tum".',
        'Na troca de compasso a nota extra cai no tempo errado. Correção: diga em voz alta qual tempo vem ("dois", "três") um instante antes de chegar.'
      ],
      tips: [
        'Toque com o calcanhar baixo (pé inteiro na plataforma) em andamentos lentos: dá mais controle para notas isoladas.',
        'Depois de dominar, tente com a caixa só no 3 (meio tempo): as mesmas permutações viram grooves totalmente novos.'
      ],
      ex: [
        ...seq(3, i => ({ id: 'indep-2' + KPOS[i].id, name: KPOS[i].nome, desc: KPOS[i].desc, bpm: KPOS[i].bpm, bars: kickWalk(KPOS[i].p) })),
        { id: 'indep-2d', name: 'Bumbo em dupla: "&" e "a"', desc: 'Duas semicolcheias seguidas no bumbo ("&" e "a"), andando pelos quatro tempos. No último compasso a dupla emenda com o 1 seguinte: três notas de pé em sequência.', bpm: [50, 100], bars: kickWalk([2, 3]) }
      ]
    },
    {
      id: 'indep-3',
      name: 'Ostinato com os pés',
      level: 2,
      goal: 'Manter os pés num padrão fixo enquanto as mãos tocam coisas diferentes por cima.',
      text: [
        'Ostinato é um padrão que se repete sem mudar. Nesta lição o ostinato fica nos pés e as mãos trabalham por cima. É o contrário do que você fez até agora, em que a mão direita era o trilho. Isso desenvolve a confiança de que os pés seguram o tempo sozinhos.',
        'O padrão mais útil é o bumbo em todos os tempos com o chimbal de pé no 2 e no 4, ou no "&" de cada tempo. O pé esquerdo no chimbal é uma referência de tempo muito forte: muitos bateristas de jazz, gospel e fusion mantêm o pé esquerdo marcando o tempo mesmo durante solos e viradas.',
        'Fisicamente, deixe os pés no "piloto automático". O bumbo vem do tornozelo e da coxa, com o calcanhar levantado ou abaixado, como for mais confortável. O pé esquerdo fecha o chimbal com a ponta, num movimento curto, sem levantar a perna inteira. Os pés não podem mudar de força quando as mãos acentuam.',
        'Na música, isso aparece direto nas viradas: quem para os pés quando a mão sai do chimbal perde o chão e a virada fica "flutuando". Com o ostinato firme, a virada soa como parte da música, e a volta no 1 fica natural.'
      ],
      steps: [
        'Toque só os pés por dois minutos a 60 bpm, contando os tempos em voz alta.',
        'Sem parar os pés, entre com as mãos bem devagar, só a mão direita primeiro.',
        'Junte a mão esquerda e repita o exercício por quatro minutos.',
        'Grave e confira se o bumbo continua igual nos compassos em que as mãos acentuam.',
        'Suba o andamento de 5 em 5 bpm e volte ao anterior se os pés começarem a falhar.'
      ],
      mistakes: [
        'Os pés param ou hesitam quando a mão acentua. Correção: toque as mãos sem acento até os pés ficarem firmes, e só então volte os acentos.',
        'O chimbal de pé fica "molhado", sem o som seco de fechar. Correção: pise com a ponta do pé num movimento curto e firme, mantendo o calcanhar apoiado.',
        'As mãos aceleram nas sextinas e os pés vão junto. Correção: diminua o andamento e deixe o bumbo comandar, ouvindo ele como um metrônomo.'
      ],
      tips: [
        'Se o pé esquerdo cansa, verifique a altura do banco: com a coxa levemente inclinada para baixo, o pé trabalha melhor.',
        'Um bom teste: cante uma melodia simples enquanto os pés tocam. Se os pés não mudam, o ostinato está automático.',
        'Depois de dominar, invente sua própria frase de mãos por cima do mesmo ostinato.'
      ],
      ex: [
        { id: 'indep-3a', name: 'Sextinas sobre bumbo e chimbal', desc: 'Mãos em sextina alternada com acento a cada três notas. Bumbo em todos os tempos e chimbal de pé no 2 e no 4.', bpm: [50, 100], bars: [b6({ sn: r('XxxXxx', 4), kd: r('x-----', 4), hp: '------ x----- ------ x-----', st: r('DEDEDE', 4) })] },
        { id: 'indep-3b', name: 'Paradiddle sobre bumbo e chimbal no "&"', desc: 'Paradiddle na caixa (D E D D E D E E) com acento na primeira nota de cada grupo. Bumbo nos tempos e chimbal de pé em todos os "&".', bpm: [50, 100], bars: [b4({ sn: r('Xxxx', 4), kd: r('x---', 4), hp: r('--x-', 4), st: 'DEDD EDEE DEDD EDEE' })] },
        { id: 'indep-3c', name: 'Virada com os pés ligados', desc: 'Um compasso de groove com bumbo em todos os tempos e um de virada descendo o kit. Na virada, o bumbo continua nos tempos e o chimbal de pé entra no 2 e no 4.', bpm: [60, 110], bars: [
          b4({ cr: 'x--- ---- ---- ----', hh: '--x- x-x- x-x- x-x-', sn: BACK, kd: r('x---', 4) }),
          b4({ sn: 'xxxx ---- ---- ----', t1: '---- xxxx ---- ----', t2: '---- ---- xxxx ----', ft: '---- ---- ---- xxxx', kd: r('x---', 4), hp: '---- x--- ---- x---', st: r('DEDE', 4) })] }
      ]
    },
    {
      id: 'indep-4',
      name: 'Ghost notes em permutação',
      level: 2,
      goal: 'Colocar uma nota fantasma em qualquer semicolcheia sem mudar o volume da caixa forte nem do chimbal.',
      text: [
        'Agora a permutação vai para a mão esquerda. Uma ghost note anda pelos quatro tempos, como o bumbo fez antes, enquanto o resto do groove fica parado. A dificuldade não é tocar a nota, e sim tocar a nota baixa logo antes ou logo depois de uma nota forte com a mesma mão.',
        'Isso exige controle de altura da baqueta. Depois do acento no 2, a esquerda tem que descer e parar perto da pele (toque para baixo) para fazer uma ghost no "e" do 2. Antes do acento, a ghost no "a" do 1 sai de baixo e a baqueta já sobe para o acento (toque para cima). São exatamente os quatro toques do módulo de fundamentos aplicados no groove.',
        'O resultado musical é o groove "cheio" sem ficar pesado. Bateristas de funk, soul e gospel usam ghost notes para preencher espaços sem tirar o destaque do 2 e do 4. Bem tocadas, elas soam mais como uma textura do que como notas.',
        'Na ghost do "&" a nota cai junto com o chimbal. Parece fácil, mas a mão direita tende a acentuar junto, por reflexo. Mantenha as duas mãos com dinâmicas diferentes no mesmo instante: o chimbal médio, a ghost quase inaudível.'
      ],
      steps: [
        'Toque o groove sem ghosts por um minuto, deixando o acento do 2 e do 4 forte e consistente.',
        'Toque cada compasso do exercício separado, em loop, a 60 bpm.',
        'Junte os quatro compassos; a ghost deve andar sem que o 2 e o 4 mudem de volume.',
        'Faça o exercício do "a" antes do "e": o "a" prepara o acento, o "e" sai logo depois dele.',
        'No groove combinado, comece a 50 bpm e só acelere quando a diferença entre forte e fraco estiver clara na gravação.'
      ],
      mistakes: [
        'As ghost notes ficam altas e o groove soa "atropelado". Correção: tire a caixa forte por alguns minutos e toque só as ghosts, bem baixas, sobre chimbal e bumbo.',
        'O acento do 2 enfraquece quando vem depois de uma ghost. Correção: pense na ghost como o começo de um toque para cima, e deixe a baqueta subir logo depois dela.',
        'A ghost do "e" atrasa porque a baqueta subiu demais depois do acento. Correção: no acento, use toque para baixo e pare a baqueta a dois centímetros da pele.'
      ],
      tips: [
        'Afaste a ghost do centro da caixa, mais perto da borda: o som fica mais curto e baixo.',
        'Uma boa ghost se sente mais do que se ouve. Se alguém na sala percebe cada uma delas, estão altas.'
      ],
      ex: [
        { id: 'indep-4a', name: 'Ghost no "a"', desc: 'Uma ghost note no "a" que anda pelos quatro tempos, um tempo por compasso. No 1º e no 3º compasso ela vem logo antes da caixa forte.', bpm: [55, 105], bars: ghostWalk(3) },
        { id: 'indep-4b', name: 'Ghost no "e"', desc: 'A ghost agora cai no "e", andando pelos quatro tempos. No 2º e no 4º compasso ela vem logo depois da caixa forte, com a mesma mão.', bpm: [50, 100], bars: ghostWalk(1) },
        { id: 'indep-4c', name: 'Groove com ghosts espalhadas', desc: 'Ghosts no "a" do 1, no "&" do 2, no "e" e no "a" do 3 e no "a" do 4. Caixa forte no 2 e no 4, bumbo no 1, no 3 e no "&" do 3.', bpm: [50, 95], bars: [b4({ hh: HH8, sn: '---g X-g- -g-g X--g', kd: KICK13 })] }
      ]
    },
    {
      id: 'indep-5',
      name: 'Chimbal aberto em permutação',
      level: 2,
      goal: 'Abrir e fechar o chimbal em qualquer "&" ou "a" do compasso, no lugar exato, sem atrapalhar mãos e bumbo.',
      text: [
        'O chimbal aberto é a nota em que você alivia o pé esquerdo, a baqueta bate com os pratos soltos e o som "abre". A abertura é fácil; o difícil é fechar na hora certa. O pé tem que fechar exatamente na nota seguinte, para o som parar de forma limpa e o groove continuar no lugar.',
        'O movimento é do tornozelo. Com o calcanhar apoiado, você levanta a ponta do pé um pouco antes da nota aberta e pisa de novo na nota seguinte. Aberto demais, o som fica sujo e longo. Aberto de menos, quase não se ouve. Uma fresta de um ou dois centímetros entre os pratos costuma bastar.',
        'Abrir no "&" é o som clássico de pop, disco e rock. Abrir no "a" dá um empurrão para o tempo seguinte, muito usado no funk e no gospel. Abrir junto com o bumbo cria uma "puxada" forte, que destaca um ponto do compasso.',
        'O movimento básico de abrir e fechar está no módulo de pedal e chimbal com o pé. Aqui a abertura vira permutação, como o bumbo e as ghost notes antes: ela anda por todos os tempos do compasso enquanto o resto do groove fica parado. Para quem se sente travado, isso é ótimo, porque obriga o pé esquerdo a participar do groove em vez de ficar parado e tenso. Um pé esquerdo vivo deixa o corpo inteiro mais solto.'
      ],
      steps: [
        'Sem mãos, levante e abaixe a ponta do pé esquerdo no tempo, a 60 bpm, ouvindo o "tchic" de cada fechada.',
        'Toque o groove com o chimbal fechado e só depois coloque as aberturas.',
        'Toque cada compasso do exercício separado, em loop, antes de juntar os quatro.',
        'Em cada abertura, diga "abre" na nota aberta e "fecha" na nota seguinte.',
        'Toque quatro minutos de cada exercício sem parar, de 70 a 100 bpm.',
        'Grave e verifique se o chimbal fecha exatamente com a nota seguinte, sem sobrar som.'
      ],
      mistakes: [
        'O chimbal fecha atrasado e o som "arrasta" por cima da próxima nota. Correção: pense que o pé fecha junto com a baqueta da nota seguinte, como se fosse uma nota de pé.',
        'O pé abre cedo demais e a nota anterior já sai aberta. Correção: abra no último instante, quase junto com a baqueta.',
        'A abertura vira acento e o groove fica torto. Correção: toque a nota aberta no mesmo volume das outras; o som aberto já se destaca sozinho.'
      ],
      tips: [
        'Ajuste a distância entre os pratos do chimbal: algo entre um e dois centímetros com o pé solto é um bom começo.',
        'No "a", toque o "&" e o "a" com a mão direita, como uma dupla rápida. Em andamentos altos, a esquerda pode ajudar.'
      ],
      ex: [
        { id: 'indep-5a', name: 'Abertura no "&" andando', desc: 'O chimbal abre num "&" diferente a cada compasso: no 1º compasso no "&" do 1, no 2º no "&" do 2, depois no do 3 e no do 4. Feche sempre no tempo seguinte.', bpm: [60, 120], bars: openWalk(2) },
        { id: 'indep-5b', name: 'Abertura no "a" andando', desc: 'A direita toca o "&" fechado e o "a" aberto, e a abertura anda um tempo por compasso. No último compasso ela fecha no 1 seguinte.', bpm: [55, 105], bars: openWalk(3) },
        { id: 'indep-5c', name: 'Abertura junto com o bumbo', desc: 'O chimbal abre no "&" do 1 e no "&" do 3, junto com o bumbo, e fecha no tempo seguinte junto com a caixa.', bpm: [60, 120], bars: [b4({ hh: 'x-o- x-x- x-o- x-x-', sn: BACK, kd: 'x-x- ---- x-x- ----' })] }
      ]
    },
    {
      id: 'indep-6',
      name: 'Independência no jazz',
      level: 2,
      goal: 'Manter a condução de swing e o chimbal no 2 e no 4 enquanto caixa e bumbo comentam livremente.',
      text: [
        'No jazz, a condução do prato é o coração do groove. O padrão clássico é "tin, tin-ga, tin, tin-ga": semínimas no prato com uma nota extra na última tercina do 2 e do 4. Por isso o exercício é escrito em tercinas: a nota do "ga" cai na terceira nota da tercina, e é ela que dá o balanço do swing.',
        'O pé esquerdo fecha o chimbal no 2 e no 4, com um "tchic" seco, e esse é o backbeat do jazz. Enquanto prato e chimbal ficam fixos, a mão esquerda e o pé direito fazem o "comping": comentários curtos que respondem à música, como um pianista acompanhando um solista.',
        'O bumbo no jazz tradicional muitas vezes faz o "feathering": uma semínima tão leve que se sente mais do que se ouve, dando corpo ao contrabaixo. Ele vem do tornozelo, com o calcanhar no chão e a batida bem macia. As notas fortes de bumbo ("bombs") aparecem só de vez em quando, como pontuação.',
        'Mesmo que você não toque jazz, este estudo destrava muita coisa. O swing ensina a sentir a tercina, a dinâmica fica mais fina e a mão esquerda aprende a entrar em lugares imprevisíveis sem que a direita se perca. Esse tipo de liberdade é o que faz o groove de gospel e de shuffle soar solto.'
      ],
      steps: [
        'Toque só a condução e o chimbal de pé por três minutos a 90 bpm, cantando "tin, tin-ga".',
        'Entre com a caixa do exercício de comping, um compasso de cada vez, sem acentuar.',
        'Para o feathering, comece com o bumbo sozinho bem leve sobre o metrônomo, depois junte a condução.',
        'Toque os quatro compassos de comping em sequência, ouvindo se a condução continua igual.',
        'Varie o andamento entre 80 e 160 bpm: o swing muda de cara em cada velocidade.'
      ],
      mistakes: [
        'O "ga" da condução fica no lugar da semicolcheia, soando reto. Correção: cante as tercinas ("1 ta ka 2 ta ka") e coloque o "ga" no "ka".',
        'A caixa entra e a condução acentua ou atrasa junto. Correção: toque a caixa bem baixo e pense nela como fundo, não como protagonista.',
        'O feathering vira um bumbo de rock no 1, 2, 3 e 4. Correção: calcanhar no chão e batida mínima; se você ouve o bumbo claramente, está forte demais.'
      ],
      tips: [
        'A condução no jazz se destaca mais no 2 e no 4, junto com o chimbal. Experimente acentuar levemente esses tempos.',
        'Ouça bateristas de jazz e repare no que a mão esquerda faz: quase sempre pouco, no lugar certo.'
      ],
      listen: ['So What — Miles Davis (Jimmy Cobb: condução de swing com chimbal no 2 e no 4)'],
      ex: [
        { id: 'indep-6a', name: 'Condução de jazz e chimbal no 2 e no 4', desc: 'Condução de swing ("tin, tin-ga") com o chimbal de pé fechando no 2 e no 4. A base de tudo nesta lição.', bpm: [70, 200], bars: [b3({ rd: 'x-- x-x x-- x-x', hp: '--- x-- --- x--' })] },
        { id: 'indep-6b', name: 'Comping na caixa', desc: 'Condução e chimbal fixos. A caixa muda a cada compasso: na última tercina do 4, nas últimas tercinas do 1 e do 3, no 2 e no 4, e nas últimas tercinas de todos os tempos.', bpm: [70, 180], bars: [
          b3({ rd: 'x-- x-x x-- x-x', sn: '--- --- --- --x', hp: '--- x-- --- x--' }),
          b3({ rd: 'x-- x-x x-- x-x', sn: '--x --- --x ---', hp: '--- x-- --- x--' }),
          b3({ rd: 'x-- x-x x-- x-x', sn: '--- x-- --- x--', hp: '--- x-- --- x--' }),
          b3({ rd: 'x-- x-x x-- x-x', sn: '--x --x --x --x', hp: '--- x-- --- x--' })] },
        { id: 'indep-6c', name: 'Feathering com comping', desc: 'Bumbo bem leve em todas as semínimas, condução e chimbal no 2 e no 4, e a caixa comentando em dois compassos diferentes.', bpm: [70, 170], bars: [
          b3({ rd: 'x-- x-x x-- x-x', sn: '--x --- --- --x', kd: 'g-- g-- g-- g--', hp: '--- x-- --- x--' }),
          b3({ rd: 'x-- x-x x-- x-x', sn: '--- --x --x ---', kd: 'g-- g-- g-- g--', hp: '--- x-- --- x--' })] },
        { id: 'indep-6d', name: 'Caixa e bumbo conversando', desc: 'Sem feathering: caixa e bumbo se revezam nas últimas tercinas, como pergunta e resposta, enquanto condução e chimbal seguem iguais.', bpm: [70, 170], bars: [
          b3({ rd: 'x-- x-x x-- x-x', sn: '--x --- --- ---', kd: '--- --- --x ---', hp: '--- x-- --- x--' }),
          b3({ rd: 'x-- x-x x-- x-x', sn: '--- --x --- --x', kd: '--x --- --- ---', hp: '--- x-- --- x--' })] }
      ]
    },
    {
      id: 'indep-7',
      name: 'Polirritmias',
      level: 3,
      goal: 'Tocar duas divisões diferentes ao mesmo tempo (2 contra 3, 3 contra 2 e 4 contra 3) sentindo as duas.',
      text: [
        'Polirritmia é quando duas pulsações diferentes acontecem juntas e só se encontram de vez em quando. No "3 contra 2", por exemplo, uma parte toca três notas iguais no mesmo espaço em que a outra toca duas. As duas começam juntas e só voltam a coincidir no início do ciclo seguinte.',
        'O jeito de aprender é pela grade que contém as duas divisões. Três contra dois cabe numa sextina: as tercinas caem nas notas 1, 3 e 5, as colcheias nas notas 1 e 4. Quatro contra três cabe em semicolcheias num compasso de 3/4: o bumbo marca os três tempos e a mão toca uma nota a cada três semicolcheias, quatro vezes. Assim você toca a polirritmia como um padrão único, e depois aprende a ouvir cada voz separada.',
        'Fisicamente, cada membro precisa estar tão solto que não "puxa" o outro para a sua divisão. O erro mais comum é as duas vozes se aproximarem até virar uma divisão só. Por isso o andamento lento é obrigatório e o metrônomo é a referência de qual voz é o pulso.',
        'Isso aparece na música afro-cubana e africana (onde o 3 contra 2 é uma base muito comum), no 6/8 do gospel, em grooves de metal progressivo e em viradas que "flutuam" por cima do compasso. Para o seu objetivo de ser um baterista completo, a polirritmia é o que permite tocar ideias rítmicas que soam difíceis sem perder o tempo.'
      ],
      steps: [
        'Bata as duas vozes nas pernas antes de ir para a bateria: mão direita uma voz, mão esquerda a outra.',
        'Na bateria, toque cada voz sozinha por um minuto com o metrônomo.',
        'Junte as duas a 50 bpm, falando a contagem da grade (por exemplo "1 ta ka e ta ka").',
        'Quando sair, troque a atenção: ouça só a voz de cima por um tempo, depois só a de baixo.',
        'Suba o andamento devagar até a meta; acima disso, a polirritmia deve soar como um groove e não como uma conta.'
      ],
      mistakes: [
        'As duas vozes se juntam numa divisão só. Correção: volte a bater nas pernas e fale a grade em voz alta, nota por nota.',
        'Você perde onde está o tempo. Correção: deixe o metrônomo no pulso da voz de baixo e acentue levemente o primeiro tempo do ciclo.',
        'O corpo enrijece tentando "pensar" as duas vozes. Correção: toque o padrão completo como uma única frase decorada, e só depois tente ouvir as vozes separadas.'
      ],
      tips: [
        'Cante o ritmo resultante antes de separar as vozes. No 3 contra 2, em cada tempo soam quatro notas da sextina: a 1ª, a 3ª, a 4ª e a 5ª. Esse desenho nunca muda.',
        'Grave e ouça sem olhar a grade: se você consegue bater o pulso junto com cada voz, a polirritmia está certa.'
      ],
      ex: [
        { id: 'indep-7a', name: '2 contra 3', desc: 'Compasso de 3/4. No 1º compasso o prato toca duas notas iguais (a cada três colcheias) e o bumbo toca os três tempos. No 2º compasso os papéis se invertem.', bpm: [50, 120], bars: [
          b2({ b: 3, acc: [0], rd: 'x- -x --', kd: 'x- x- x-', st: 'D- BD B-' }),
          b2({ b: 3, acc: [0], rd: 'x- x- x-', kd: 'x- -x --', st: 'D- DB D-' })] },
        { id: 'indep-7b', name: '3 contra 2', desc: 'As mãos tocam tercinas alternadas na caixa (acento no tempo) e o bumbo toca colcheias. Na grade de sextina, a mão cai nas notas 1, 3 e 5 e o bumbo nas notas 1 e 4.', bpm: [50, 110], bars: [b6({ sn: r('X-x-x-', 4), kd: r('x--x--', 4), st: 'D-EBD- E-DBE- D-EBD- E-DBE-' })] },
        { id: 'indep-7c', name: '4 contra 3 em 3/4', desc: 'Compasso de 3/4 em semicolcheias. O bumbo marca os três tempos e o prato toca uma nota a cada três semicolcheias: quatro notas por compasso.', bpm: [50, 110], bars: [b4({ b: 3, acc: [0], rd: 'x--x --x- -x--', kd: 'x--- x--- x---', st: 'D--D B-D- BD--' })] }
      ]
    },
    {
      id: 'indep-8',
      name: 'Agrupamentos e deslocamento',
      level: 3,
      goal: 'Tocar acentos em grupos ímpares sobre semicolcheias e deslocar um groove inteiro sem perder o tempo.',
      text: [
        'Um agrupamento ímpar é um acento a cada três ou a cada cinco notas, tocado sobre semicolcheias normais. Como o tempo tem quatro semicolcheias, o acento vai caindo cada vez num lugar diferente do tempo e só volta ao começo depois de vários compassos: três compassos no grupo de três, cinco compassos no grupo de cinco. O ouvido escuta uma frase que "atravessa" o compasso, mas o bumbo segue firme nos tempos.',
        'O deslocamento é parecido, mas com um groove inteiro: você pega um groove conhecido e empurra todas as notas uma colcheia ou uma semicolcheia para frente. O desenho é o mesmo, só que começa num lugar diferente em relação ao tempo. O resultado soa estranho e moderno, e é muito usado em fusion, metal progressivo e gospel.',
        'O desafio físico é não deixar o acento mudar o andamento nem a mão. Nos agrupamentos, a manulação continua alternada (D E D E), então o acento troca de mão a cada grupo de três. No grupo de cinco, ele também alterna. Isso fortalece as duas mãos por igual.',
        'Esses estudos são a fonte de viradas e grooves que não soam repetidos. Um acento a cada três notas levado para o prato e o bumbo já vira uma virada de três contra quatro. Um groove deslocado em um compasso de virada cria uma surpresa que volta certinho no 1.'
      ],
      steps: [
        'Conte os grupos em voz alta ("1 2 3 1 2 3...") enquanto toca, a 50 bpm, sem se preocupar com o tempo no começo.',
        'Depois troque a contagem para os tempos ("1 e & a") e confira se o bumbo cai certo no tempo.',
        'Toque o ciclo inteiro (três ou cinco compassos) quatro vezes seguidas sem parar.',
        'Nos deslocamentos, toque o compasso normal e o deslocado alternando até a troca ficar natural.',
        'Leve os acentos para o prato e o bumbo, ou para os tons, e use como virada dentro de uma música.'
      ],
      mistakes: [
        'O acento vira o tempo e o bumbo se desloca junto. Correção: toque o bumbo mais forte por um tempo, como âncora, e deixe o acento da mão ser a voz "estranha".',
        'Os acentos da mão esquerda saem mais fracos. Correção: toque devagar olhando a altura das baquetas; as duas devem sair do mesmo lugar no acento.',
        'No groove deslocado você volta para o groove normal sem perceber. Correção: fale onde cai a caixa no deslocado (por exemplo "& do 2") e mantenha o clique bem audível.'
      ],
      tips: [
        'O grupo de três sobre semicolcheias é a base das viradas "3 contra 4" que soam grandes em rock e gospel.',
        'Para deslocar qualquer groove: escreva a grade e mova tudo uma casa para a direita. Faça isso com os grooves que você já toca.'
      ],
      ex: [
        { id: 'indep-8a', name: 'Acento a cada 3 notas', desc: 'Semicolcheias alternadas com acento a cada três notas, ao longo de três compassos, até o acento voltar ao 1. Bumbo em todos os tempos.', bpm: [50, 110], bars: accentEvery(3) },
        { id: 'indep-8b', name: 'Acento a cada 5 notas', desc: 'Semicolcheias alternadas com acento a cada cinco notas, ao longo de cinco compassos. O acento só volta ao 1 no começo do ciclo.', bpm: [50, 110], bars: accentEvery(5) },
        { id: 'indep-8c', name: 'Groove deslocado uma colcheia', desc: 'Um compasso de rock normal e um com o groove inteiro empurrado uma colcheia: caixa no "&" do 2 e do 4, bumbo no "&" do 1, no "&" do 3 e no 4.', bpm: [50, 110], bars: [b4(G.rock16), b4(shift(G.rock16, 2))] },
        { id: 'indep-8d', name: 'Groove deslocado uma semicolcheia', desc: 'Um compasso de rock normal e um empurrado uma semicolcheia: o chimbal vai para o "e" e o "a", a caixa para o "e" do 2 e do 4.', bpm: [50, 100], bars: [b4(G.rock16), b4(shift(G.rock16, 1))] }
      ]
    }
  ]
};
