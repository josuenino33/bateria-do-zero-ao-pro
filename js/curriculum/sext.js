import { r, b1, b2, b3, b4, b6, G, seq } from './helpers.js';

// Acento numa posição da sextina: 'xxxxxx' com X na posição i.
const accAt = i => 'xxxxxx'.split('').map((c, k) => (k === i ? 'X' : c)).join('');

const ACC_DESC = [
  'Acento na primeira nota, junto com o clique. A direita acentua em todos os tempos e a esquerda fica sempre baixa.',
  'Acento no "ta", a segunda nota, logo depois do tempo. Quem acentua é a esquerda.',
  'Acento no "ka", a terceira nota, com a direita. O acento cai logo antes do contratempo.',
  'Acento no "e", a quarta nota, que é o contratempo (o meio do tempo). Quem acentua é a esquerda.',
  'Acento no segundo "ta", a quinta nota, com a direita. Soa como se o acento empurrasse o tempo seguinte.',
  'Acento na última nota do tempo, com a esquerda, puxando para o próximo tempo.'
];

export default {
  id: 'sext',
  name: 'Sextinas',
  desc: 'Do sentir a tercina até viradas de sextina pelo kit, com bumbo, acentos deslocados e sem travar.',
  lessons: [
    {
      id: 'sext-1',
      name: 'Sentir a tercina',
      level: 1,
      goal: 'Ouvir e sentir três notas iguais por tempo antes de dobrar para seis.',
      text: [
        'A sextina são seis notas iguais dentro de um tempo. Outra forma de ver a mesma coisa: é a tercina com cada nota dividida em duas. Por isso o caminho para a sextina passa primeiro pela tercina, que são três notas por tempo. Se a tercina não está firme no seu corpo, a sextina vira uma correria de notas sem forma, e é aí que o braço trava.',
        'Conte em voz alta: "1 ta ka, 2 ta ka, 3 ta ka, 4 ta ka". O número cai junto com o clique e as duas sílabas dividem o resto do tempo em partes iguais. O erro mais comum é tocar "1... ta-ka", com as duas últimas notas apertadas, o que transforma a tercina numa colcheia com duas semicolcheias. As três notas precisam ter exatamente a mesma distância entre si.',
        'Na tercina alternada (D E D, E D E) o tempo cai uma vez na direita e outra na esquerda. Isso é bom: obriga as duas mãos a saberem onde está o tempo. Mantenha os punhos soltos e a baqueta voltando sozinha, e faça o acento sair de uma altura maior, não de mais força no braço.',
        'Essa sensação aparece em todo lugar: no shuffle, no 12/8 das baladas de louvor, nas viradas de rock em tercina e, mais adiante, nas sextinas e no pedal duplo em tercina. Quanto mais natural ela estiver, menos você trava quando a música passa de binária para ternária.'
      ],
      steps: [
        'Com o clique a 60 bpm nas subdivisões, conte "1 ta ka" em voz alta por um minuto, sem tocar, só batendo o pé esquerdo no tempo.',
        'Toque "Tercinas alternadas" contando junto. Grave 30 segundos e confira se as três notas de cada tempo soam iguais.',
        'Passe o clique para só o tempo e mantenha as tercinas iguais sem a ajuda das subdivisões.',
        'Em "Colcheia para tercina", fique 4 compassos em cada divisão e depois troque a cada compasso, sem mudar o andamento.',
        'Em "Tercina dobrada", toque primeiro só a direita e depois coloque a esquerda no meio, bem baixa, sem mexer na direita.',
        'Suba 5 bpm só quando conseguir tocar 2 minutos seguidos sem apertar as últimas notas do tempo.'
      ],
      mistakes: [
        'Apertar o "ta ka" e transformar a tercina em colcheia e duas semicolcheias. Correção: fale a contagem em voz alta, volte para o clique nas subdivisões e diminua 10 bpm.',
        'Acentuar com o braço e subir o ombro. Correção: o acento sai da altura da baqueta. Levante mais a mão do acento e deixe ela cair, sem empurrar.',
        'A esquerda soar mais fraca nos tempos em que o acento cai nela. Correção: toque só os acentos (um por tempo, alternando as mãos) por alguns minutos e depois volte ao padrão completo.',
        'Acelerar na troca de colcheia para tercina, porque três notas "parecem mais rápidas". Correção: antes da troca, pense no clique e não nas notas; o tempo fica parado, só cabe mais coisa dentro dele.'
      ],
      tips: [
        'Se você não consegue falar a contagem enquanto toca, o andamento está alto demais.',
        'Marque o tempo com o pé esquerdo no chimbal. Ele vira a sua âncora quando o acento muda de mão.',
        'Ouça o clique nas subdivisões: se você escuta um "flam" entre o clique e a baqueta, você está fora do lugar.'
      ],
      ex: [
        { id: 'sext-1a', name: 'Tercinas alternadas', desc: 'Três notas por tempo com acento no tempo. O tempo cai alternando entre direita e esquerda.', bpm: [60, 140], pad: true, click: 'sub', bars: [b3({ sn: r('Xxx', 4), st: 'DED EDE DED EDE' })] },
        { id: 'sext-1b', name: 'Colcheia para tercina', desc: 'Um compasso com duas notas por tempo e um com três. O andamento não muda, só a divisão.', bpm: [60, 120], pad: true, bars: [b2({ sn: r('Xx', 4), st: r('DE', 4) }), b3({ sn: r('Xxx', 4), st: 'DED EDE DED EDE' })] },
        { id: 'sext-1c', name: 'Tercina dobrada', desc: 'Um compasso de tercinas só com a direita. No seguinte a direita toca as mesmas tercinas e a esquerda entra baixinha no meio: isso é a sextina.', bpm: [50, 100], pad: true, bars: [b3({ sn: r('xxx', 4), st: r('DDD', 4) }), b6({ sn: r('xgxgxg', 4), st: r('DEDEDE', 4) })] }
      ]
    },
    {
      id: 'sext-2',
      name: 'Escada de subdivisão',
      level: 1,
      goal: 'Trocar de 1 para 2, 3, 4 e 6 notas por tempo sem acelerar nem hesitar.',
      text: [
        'Quem trava nas sextinas geralmente não trava na figura em si, trava na troca. Você está tocando semicolcheias, a virada pede sextina, e o corpo não sabe "mudar de marcha" sem acelerar ou embolar. A escada de subdivisão treina exatamente isso: o tempo fica parado e só a quantidade de notas dentro dele muda.',
        'O acento no tempo é a sua âncora. Ele cai sempre junto com o clique, não importa se dentro do tempo cabem uma, duas, três, quatro ou seis notas. Se o acento chegar antes do clique depois de uma troca, você acelerou. Se chegar depois, você hesitou.',
        'Fisicamente, o que muda entre as divisões é a altura e o tamanho do movimento. Nas semínimas o movimento é grande e lento; nas sextinas ele fica pequeno e rápido, com as baquetas mais baixas. Deixe a altura diminuir conforme a divisão aumenta, sem apertar a pegada para "segurar" as notas.',
        'A troca de 4 para 6 é a mais difícil, porque as duas divisões são parecidas o bastante para se confundirem. Também é a mais útil: boa parte dos grooves de rock, pop e gospel está em semicolcheias, e a virada em sextina é o que dá aquela sensação de "rolar" pelo kit.'
      ],
      steps: [
        'Clique em 50 bpm. Toque a escada inteira contando em voz alta: "1", "1 e", "1 ta ka", "1 e & a", "1 ta ka e ta ka".',
        'Se uma troca específica falhar, isole os dois compassos dessa troca e repita até sair 10 vezes seguidas.',
        'Em "Quatro contra seis", fique 4 compassos em cada divisão; depois 2; depois troque a cada compasso.',
        'Grave e ouça só os acentos: eles precisam bater com o clique em todas as divisões, inclusive na volta.',
        'Suba o andamento só quando a descida (de 6 para 4 e de 4 para 3) estiver tão tranquila quanto a subida.'
      ],
      mistakes: [
        'Acelerar na sextina porque ela "parece rápida". Correção: diminua 10 bpm e pense em deixar as notas mais baixas, não mais rápidas.',
        'Na volta para as semicolcheias, continuar corrido (o corpo ainda está na sextina). Correção: no último tempo antes da troca, pense "mais largo" e ouça o clique.',
        'Perder o acento nas tercinas, quando o tempo passa a cair na esquerda. Correção: toque só o compasso de tercinas por um minuto e depois volte para a escada.',
        'Apertar a baqueta na divisão mais rápida. Correção: confira os dedos a cada troca; se os nós estão brancos, solte e diminua o andamento.'
      ],
      tips: [
        'Na sextina, as baquetas ficam a uns 5 cm da pele, com o acento um pouco mais alto.',
        'Use o clique nas subdivisões só no começo. O objetivo é sentir a troca sozinho.',
        'A escada é um ótimo aquecimento antes de qualquer estudo de sextina: 3 minutos bastam.'
      ],
      ex: [
        {
          id: 'sext-2a', name: 'Escada completa', desc: '1, 2, 3, 4 e 6 notas por tempo e a volta: 4, 3, 2. Um compasso de cada.', bpm: [50, 90], pad: true, bars: [
            b1({ sn: 'X X X X', st: 'D E D E' }), b2({ sn: r('Xx', 4), st: r('DE', 4) }), b3({ sn: r('Xxx', 4), st: 'DED EDE DED EDE' }), b4({ sn: r('Xxxx', 4), st: r('DEDE', 4) }),
            b6({ sn: r('Xxxxxx', 4), st: r('DEDEDE', 4) }), b4({ sn: r('Xxxx', 4), st: r('DEDE', 4) }), b3({ sn: r('Xxx', 4), st: 'DED EDE DED EDE' }), b2({ sn: r('Xx', 4), st: r('DE', 4) })]
        },
        { id: 'sext-2b', name: 'Quatro contra seis', desc: 'A troca mais difícil: um compasso de semicolcheias e um de sextinas, ida e volta.', bpm: [50, 100], pad: true, bars: [b4({ sn: r('Xxxx', 4), st: r('DEDE', 4) }), b6({ sn: r('Xxxxxx', 4), st: r('DEDEDE', 4) })] }
      ]
    },
    {
      id: 'sext-3',
      name: 'Manulações de sextina',
      level: 2,
      goal: 'Dominar as manulações de sextina que você vai usar nas viradas.',
      text: [
        'A mesma sextina pode ser tocada com várias manulações, e cada uma tem um som e uma utilidade diferente no kit. A alternada (D E D E D E) é a mais rápida e a mais uniforme. A D E E D E E deixa a direita sempre no começo de cada grupo de três, o que facilita levar os acentos para os tons e para o prato. O toque duplo (D D E E D D) dá um som mais "rolado" e faz as mãos trabalharem em pares.',
        'Pense na sextina como dois grupos de três notas: "1 ta ka, e ta ka". Os acentos na primeira e na quarta nota marcam esses dois grupos e dão forma ao som. Sem acento a sextina vira um borrão; com acento ela ganha balanço e fica fácil de acompanhar para quem está ouvindo.',
        'O movimento é o dos quatro toques aplicado em velocidade: a mão do acento sai alta e para baixa (toque para baixo), as notas baixas ficam a poucos centímetros da pele, e a mão que vai acentuar em seguida já sobe na nota anterior (toque para cima). Na D E E D E E, a esquerda faz duas notas seguidas: a primeira com o punho e a segunda com os dedos, como no toque duplo.',
        'O exercício de acento de 4 em 4 é diferente dos outros: o acento atravessa o tempo e só volta para o mesmo lugar a cada dois tempos. Isso cria a sensação de 3 contra 2 (três acentos no espaço de dois tempos), um recurso que bateristas usam para soar "por cima" da música sem sair do tempo.'
      ],
      steps: [
        'Comece pela alternada com o clique a 50 bpm, até as seis notas soarem iguais e os acentos ficarem claros.',
        'Passe para D E E D E E. Ouça se a segunda nota da esquerda tem o mesmo volume da primeira.',
        'No toque duplo, toque primeiro as duplas em tercinas lentas para sentir os pares, depois volte à sextina.',
        'No acento de 4 em 4, conte o tempo em voz alta ("1, 2, 3, 4") e deixe os acentos caírem onde caírem.',
        'Registre o BPM máximo limpo de cada manulação. A mais lenta é a que mais precisa de atenção esta semana.'
      ],
      mistakes: [
        'Acentos tímidos, com tudo no mesmo volume. Correção: exagere a diferença, acento a uns 20 cm da pele e notas baixas a 3 cm.',
        'Na D E E D E E, a segunda nota da esquerda some. Correção: toque só a esquerda em pares (E E) com o clique por um minuto e depois volte ao padrão.',
        'No toque duplo, a segunda nota de cada par sai adiantada e o andamento escorrega. Correção: diminua o andamento e pense em "puxar" a segunda nota com os dedos no lugar exato.',
        'No acento de 4 em 4, passar a ouvir os acentos como se fossem o tempo e perder o 1. Correção: marque os tempos com o pé esquerdo no chimbal enquanto toca.'
      ],
      tips: [
        'Acentos altos e o resto baixo: é isso que dá forma à sextina.',
        'Para cada manulação, imagine onde ela vai no kit: a D E E D E E, por exemplo, fica ótima com a direita no surdo e a esquerda na caixa.',
        'Se a esquerda trava, toque o exercício começando com ela (E D E D E D) por alguns minutos.'
      ],
      ex: [
        { id: 'sext-3a', name: 'Sextina alternada', desc: 'D e d E d e: acento na primeira e na quarta nota.', bpm: [50, 120], pad: true, bars: [b6({ sn: r('XxxXxx', 4), st: r('DEDEDE', 4) })] },
        { id: 'sext-3b', name: 'D e e D e e', desc: 'A direita começa e acentua cada grupo de três; a esquerda faz duas notas baixas.', bpm: [50, 120], pad: true, bars: [b6({ sn: r('XxxXxx', 4), st: r('DEEDEE', 4) })] },
        { id: 'sext-3c', name: 'Toque duplo em sextina', desc: 'D D E E D D, E E D D E E: duplas iguais, com acento no tempo.', bpm: [50, 110], pad: true, bars: [b6({ sn: r('Xxxxxx', 4), st: 'DDEEDD EEDDEE DDEEDD EEDDEE' })] },
        { id: 'sext-3d', name: 'Acentos de 4 em 4', desc: 'Acento a cada quatro notas dentro da sextina. Três acentos a cada dois tempos: sensação de 3 contra 2.', bpm: [50, 100], pad: true, bars: [b6({ sn: 'XxxxXx xxXxxx XxxxXx xxXxxx', st: r('DEDEDE', 4) })] }
      ]
    },
    {
      id: 'sext-4',
      name: 'Sextinas com bumbo',
      level: 2,
      goal: 'Usar o bumbo como parte da sextina, com mãos e pés soando como uma linha só.',
      text: [
        'Uma das viradas que mais soam difíceis é, na verdade, simples: as mãos tocam quatro notas e o bumbo completa as duas últimas da sextina (D E D E B B). Como o bumbo entra no lugar das mãos, você ganha velocidade sem precisar de mãos mais rápidas, e o som fica grande, cheio de grave.',
        'A figura D E B (duas mãos e um bumbo, repetidos) ficou famosa com John Bonham, do Led Zeppelin, e até hoje aparece no rock, no metal e no gospel. Ela tem o som de uma tercina "rolando" e funciona muito bem descendo pelos tons.',
        'Sobre os pés: com pedal duplo, faça o B B com o pé direito e depois com o esquerdo, como está na grade. Sem pedal duplo, toque as duas notas com o pé direito usando a técnica de duplas do módulo de pedal simples, num andamento mais baixo. Em qualquer caso, o bumbo precisa soar no mesmo volume e no mesmo lugar das notas de mão.',
        'O cuidado principal é a continuidade. A sextina não pode "parar" quando passa das mãos para os pés. Escute a virada como uma fila de seis notas iguais, e não como mãos de um lado e bumbo do outro. Mãos baixas e relaxadas ajudam muito: quem dá o peso é o bumbo.'
      ],
      steps: [
        'Toque só os pés do "D E D E B B" (as duas últimas notas de cada tempo) com o clique a 50 bpm, até elas ficarem separadas e iguais.',
        'Junte as mãos na caixa e conte "1 ta ka e ta ka", com o bumbo no "ta ka" final.',
        'Em "D E B estilo Bonham", acentue de leve a primeira nota de mão de cada grupo para não se perder.',
        'Leve o D E D E B B pelo kit: um tempo em cada tambor, voltando ao groove no compasso seguinte.',
        'Grave e confira se as seis notas de cada tempo têm o mesmo volume. Se o bumbo some, toque as mãos mais baixo.'
      ],
      mistakes: [
        'Bumbo mais fraco que as mãos, e a sextina "manca". Correção: abaixe as mãos até o bumbo ficar no mesmo nível; grave para conferir.',
        'Acelerar quando os pés entram. Correção: volte o clique para as subdivisões e diminua 10 bpm.',
        'Os dois bumbos saírem quase juntos (flam) em vez de um depois do outro. Correção: toque só os pés, bem devagar, falando "ta ka" em cada nota.',
        'Na D E B, o bumbo atrasar e virar "D E... B". Correção: pense que o bumbo é a terceira nota de uma tercina e não um enfeite depois das mãos.'
      ],
      tips: [
        'Mantenha as mãos baixas e relaxadas. Quem dá peso é o bumbo.',
        'No kit, termine a virada com o bumbo e caia no 1 com prato e bumbo juntos: a chegada fica muito forte.',
        'Sem pedal duplo, a D E B é a melhor porta de entrada, porque o bumbo toca uma nota por vez.'
      ],
      ex: [
        { id: 'sext-4a', name: 'D E D E B B na caixa', desc: 'Quatro notas de mão e duas de bumbo em cada tempo, todas iguais.', bpm: [50, 120], bars: [b6({ sn: r('Xxxx--', 4), kd: r('----x-', 4), ke: r('-----x', 4), st: r('DEDEBB', 4) })] },
        { id: 'sext-4b', name: 'D E B estilo Bonham', desc: 'Duas notas de mão e um bumbo, repetido. O bumbo cai na terceira nota de cada grupo.', bpm: [50, 130], bars: [b6({ sn: r('Xx-xx-', 4), kd: r('--x--x', 4), st: r('DEBDEB', 4) })] },
        {
          id: 'sext-4c', name: 'D E D E B B pelo kit', desc: 'Um compasso de groove e um de virada: caixa, tom 1, tom 2 e surdo, com o bumbo fechando cada tempo.', bpm: [50, 110], bars: [b2({ ...G.rock8C }), b6({
            sn: 'xxxx-- ------ ------ ------', t1: '------ xxxx-- ------ ------', t2: '------ ------ xxxx-- ------', ft: '------ ------ ------ xxxx--',
            kd: r('----x-', 4), ke: r('-----x', 4), st: r('DEDEBB', 4)
          })]
        }
      ]
    },
    {
      id: 'sext-5',
      name: 'Sextinas no groove',
      level: 2,
      goal: 'Encaixar sextinas no groove: sair, voltar e trocar de divisão sem perder o tempo.',
      text: [
        'Uma virada só vale se ela sai e volta do groove sem tropeço. Neste ponto você já toca sextinas e sextinas com bumbo; agora o desafio é encaixar isso na música, onde o groove está em colcheias ou semicolcheias e a virada muda de divisão de repente.',
        'Repare na grade: quando a virada é em sextina, o groove do mesmo compasso aparece escrito em sextinas, com o chimbal na primeira e na quarta nota de cada tempo. É o mesmo groove de colcheias desenhado numa grade mais fina. Isso ajuda a ver que a colcheia do groove e a quarta nota da sextina caem no mesmo lugar.',
        'O ponto mais importante é a volta: prato e bumbo juntos no 1, no mesmo andamento de antes da virada. Muita gente acelera na virada por ansiedade, ou atrasa a chegada porque a última nota deixou a mão longe do prato. Pense na virada como uma frase que termina no 1, e não no tempo 4.',
        'No gospel e no R&B a sextina também aparece dentro do groove, como rajadas rápidas no chimbal. É o mesmo movimento das viradas, só que pequeno, baixo e com a ponta da baqueta. Usado com moderação, dá muito balanço; em todo compasso, soa exagerado.'
      ],
      steps: [
        'Toque só o groove por 2 minutos, até ele ficar automático no andamento escolhido.',
        'Toque a virada sozinha em loop e depois junte: três compassos de groove e a virada no quarto.',
        'Em "Semicolcheia ou sextina", fale em voz alta "quatro" ou "seis" um tempo antes de cada virada.',
        'Na rajada do chimbal, comece a 60 bpm e toque a rajada bem baixa: ela é um enfeite, não um acento.',
        'Grave e ouça a chegada no 1: prato e bumbo têm que soar como uma nota só, sem flam.'
      ],
      mistakes: [
        'Correr ao entrar na virada. Correção: toque o último tempo de groove pensando "largo" e deixe a virada começar no lugar dela.',
        'Atrasar a chegada no 1 porque a mão direita ficou longe do prato. Correção: treine só o último tempo da virada e o 1 seguinte, em loop, até o caminho até o prato ficar natural.',
        'Tocar a virada de semicolcheias com cara de sextina (ou o contrário). Correção: toque as duas viradas separadas, com o clique nas subdivisões, e só depois alterne.',
        'Rajada do chimbal alta demais, por cima da caixa. Correção: toque a rajada com a ponta da baqueta, a 2 ou 3 cm do chimbal.'
      ],
      tips: [
        'Comece as viradas no tempo 4 e só depois aumente para os tempos 3 e 4.',
        'Escolha a divisão pela energia do trecho: sextina dá a sensação de rolar, semicolcheia soa mais reta e firme.',
        'Na rajada do chimbal, a mão esquerda pode tocar a nota do meio (D E D) ou a direita pode fazer tudo com os dedos. Teste as duas.'
      ],
      ex: [
        {
          id: 'sext-5a', name: 'Sextina no tempo 4', desc: 'Três compassos de rock e uma virada de sextina no último tempo: caixa, tom 1 e surdo.', bpm: [60, 110], bars: [b2({ ...G.rock8C }), b2({ ...G.rock8 }), b2({ ...G.rock8 }), b6({
            hh: 'x--x-- x--x-- x--x-- ------', sn: '------ X----- ------ xx----', t1: '------ ------ ------ --xx--', ft: '------ ------ ------ ----xx',
            kd: 'x----- ------ x--x-- ------', st: '------ ------ ------ DEDEDE'
          })]
        },
        {
          id: 'sext-5b', name: 'D E D E B B nos tempos 3 e 4', desc: 'Virada de dois tempos com bumbo, saindo do groove: tom 1 no tempo 3 e surdo no tempo 4.', bpm: [60, 110], bars: [b2({ ...G.rock8C }), b2({ ...G.rock8 }), b2({ ...G.rock8 }), b6({
            hh: 'x--x-- x--x-- ------ ------', sn: '------ X----- ------ ------', t1: '------ ------ xxxx-- ------', ft: '------ ------ ------ xxxx--',
            kd: 'x----- ------ ----x- ----x-', ke: '------ ------ -----x -----x', st: '------ ------ DEDEBB DEDEBB'
          })]
        },
        {
          id: 'sext-5c', name: 'Semicolcheia ou sextina', desc: 'A mesma virada de dois tempos (caixa, depois tom e surdo) em semicolcheias e depois em sextinas, com groove entre elas.', bpm: [60, 100], bars: [
            b4({ ...G.rock16C }),
            b4({ hh: 'x-x- x-x- ---- ----', sn: '---- X--- Xxxx ----', t1: '---- ---- ---- Xx--', ft: '---- ---- ---- --xx', kd: 'x--- ---- ---- ----', st: '---- ---- DEDE DEDE' }),
            b6({ ...G.rock6C }),
            b6({ hh: 'x--x-- x--x-- ------ ------', sn: '------ X----- XxxXxx ------', t1: '------ ------ ------ Xxx---', ft: '------ ------ ------ ---xxx', kd: 'x----- ------ ------ ------', st: '------ ------ DEDEDE DEDEDE' })
          ]
        },
        {
          id: 'sext-5d', name: 'Chimbal com rajadas de sextina', desc: 'Groove gospel/R&B: chimbal em colcheias e uma rajada de três notas (e ta ka) logo depois da caixa nos tempos 2 e 4. Faça a rajada com D E D, bem baixa.', bpm: [60, 95], bars: [b6({
            hh: 'x--x-- x--xxx x--x-- x--xxx', sn: '------ X----- ------ X-----', kd: 'x----- ------ x--x-- ------'
          })]
        }
      ]
    },
    {
      id: 'sext-6',
      name: 'Acento em cada posição',
      level: 3,
      goal: 'Acentuar qualquer uma das seis notas da sextina com as duas mãos, sem perder o tempo.',
      text: [
        'Até aqui o acento caiu no tempo ou no meio dele. Agora ele vai passear pelas seis posições da sextina. Cada posição tem um som próprio: acentos na 1 e na 4 soam estáveis; na 2, 3, 5 e 6 eles soam deslocados, como se puxassem ou empurrassem o tempo. É esse deslocamento que deixa uma virada menos óbvia.',
        'Como a manulação é sempre alternada (D E D E D E), os acentos nas posições ímpares (1, 3 e 5) caem na direita e nos pares (2, 4 e 6) caem na esquerda. Isso é ótimo para equilibrar as mãos: a esquerda vai ter que acentuar tão bem quanto a direita.',
        'O desafio físico é controlar a altura em velocidade. A mão que vai acentuar precisa subir durante a nota anterior (toque para cima) enquanto a outra continua baixa. Depois do acento, a mão para perto da pele (toque para baixo). Se as duas mãos sobem juntas, todas as notas ficam altas e o acento desaparece.',
        'Na prática, cada exercício vira uma virada nova quando você leva os acentos para os tons ou para o prato com bumbo e deixa as notas baixas na caixa. Com seis posições e duas mãos, você ganha material para dezenas de viradas que fogem do "desce tudo pelos tons", que é justamente o vício de quem sempre toca as mesmas viradas.'
      ],
      steps: [
        'Clique em 50 bpm, só no tempo. Comece pelo acento na nota 1 e toque cada exercício por 2 minutos.',
        'Conte "1 ta ka e ta ka" em voz alta e fale mais forte a sílaba acentuada.',
        'Se perder o tempo nas posições 2, 3, 5 ou 6, toque só os acentos com o clique e depois preencha com as notas baixas.',
        'Quando as seis posições estiverem limpas, toque "Acento caminhando", que muda a posição a cada compasso.',
        'Leve para o kit: acentos no tom 1 ou no surdo (ou prato com bumbo) e notas baixas na caixa.'
      ],
      mistakes: [
        'O acento puxar a mão e acelerar o tempo. Correção: diminua o andamento e pense no acento como "mais alto", nunca "mais cedo".',
        'As notas baixas ao redor do acento subirem de volume. Correção: exagere a diferença de altura e grave para conferir.',
        'Sentir o acento deslocado como se fosse o tempo e perder o 1. Correção: marque os tempos com o pé esquerdo no chimbal e conte em voz alta.',
        'A esquerda acentuar menos que a direita. Correção: dobre o tempo de estudo das posições 2, 4 e 6.'
      ],
      tips: [
        'As posições 3 e 6 são as mais úteis em viradas: elas "puxam" para o próximo tempo.',
        'Estude um acento por dia em vez de todos de uma vez. Em uma semana você passou pelos seis.',
        'Se ficar fácil, faça o mesmo com a manulação D E E D E E e veja como os acentos mudam de mão.'
      ],
      ex: [
        ...seq(6, i => ({
          id: 'sext-6' + 'abcdef'[i],
          name: `Acento na nota ${i + 1}`,
          desc: ACC_DESC[i],
          bpm: i === 0 ? [60, 120] : [50, 110],
          pad: true,
          bars: [b6({ sn: r(accAt(i), 4), st: r('DEDEDE', 4) })]
        })),
        { id: 'sext-6g', name: 'Acento caminhando', desc: 'Seis compassos: o acento anda uma nota para a frente a cada compasso, da primeira à sexta posição.', bpm: [50, 100], pad: true, bars: seq(6, i => b6({ sn: r(accAt(i), 4), st: r('DEDEDE', 4) })) }
      ]
    },
    {
      id: 'sext-7',
      name: 'Sextinas pelo kit e lineares',
      level: 3,
      goal: 'Mover sextinas pelo kit, misturar mãos e bumbo em frases lineares e terminar viradas com antecipação.',
      text: [
        'Agora a sextina sai da caixa e passa a andar pelo kit. Descer e subir um tambor por tempo é o primeiro passo. Em seguida vêm as frases lineares, em que mãos e bumbo nunca tocam juntos e cada nota da sextina é de um membro só.',
        'O movimento entre os tambores sai do antebraço e do ombro, não do punho. O punho continua fazendo o mesmo que fazia na caixa, e o braço só leva a mão até o próximo tambor. Planeje o caminho antes de tocar: a mão que dá a última nota num tambor não pode ficar presa ali quando a outra já mudou de lugar.',
        'Nas frases lineares, como a D E B do Bonham pelos tons ou a D E B B, o bumbo é uma nota igual às outras. A D E B B tem um detalhe: são quatro notas repetidas dentro de uma grade de seis, então o começo do grupo muda de lugar a cada vez e só volta ao início depois de dois tempos. O resultado soa como uma polirritmia dentro da virada.',
        'A última frase trabalha a antecipação: a virada termina com prato e bumbo no "e" do tempo 4, antes do 1, e o compasso seguinte começa sem prato e sem bumbo. É um recurso muito usado em louvor, pop e rock para dar impulso a uma entrada de refrão, e exige que você sinta o 1 sem tocá-lo.'
      ],
      steps: [
        'Em "Descendo e subindo pelos tons", toque primeiro só a caixa, depois o caminho pelo kit, com o clique a 50 bpm.',
        'Na D E B pelos tons, toque um tempo em cada tambor parado em loop antes de juntar os quatro.',
        'Na D E B B, acentue a primeira nota de cada grupo de quatro e conte o tempo em voz alta para não se perder.',
        'Na antecipação, toque o compasso de groove seguinte pensando no 1 que "não aconteceu": a música continua no mesmo lugar.',
        'Use cada frase numa música que você toca na igreja ou na banda nesta semana, nem que seja uma vez.'
      ],
      mistakes: [
        'Mãos se cruzando ou batendo uma na outra na descida. Correção: planeje qual mão chega primeiro em cada tambor e toque o caminho bem devagar.',
        'Volume caindo nos tons mais graves. Correção: toque um pouco mais forte no surdo para equilibrar com a caixa.',
        'Na D E B B, transformar a frase em sextinas certinhas (D E B B D E). Correção: conte "1 2 3 4" para cada grupo, e não para cada tempo, com o clique nas subdivisões.',
        'Na antecipação, tocar o bumbo também no 1 seguinte. Correção: toque só o último tempo da virada e o compasso seguinte, em loop, pensando no 1 como silêncio.'
      ],
      tips: [
        'Movimentos pequenos e perto da pele deixam o caminho pelos tons mais rápido.',
        'Em todas as frases lineares, o bumbo é uma nota de igual valor, não um enfeite.',
        'Com prato e bumbo antecipados, deixe o prato soar: não abafe com a mão.'
      ],
      ex: [
        {
          id: 'sext-7a', name: 'Descendo e subindo pelos tons', desc: 'Sextinas alternadas, um tambor por tempo: caixa, tom 1, tom 2 e surdo, e depois o caminho de volta.', bpm: [50, 110], bars: [
            b6({ sn: 'XxxXxx ------ ------ ------', t1: '------ XxxXxx ------ ------', t2: '------ ------ XxxXxx ------', ft: '------ ------ ------ XxxXxx', st: r('DEDEDE', 4) }),
            b6({ ft: 'XxxXxx ------ ------ ------', t2: '------ XxxXxx ------ ------', t1: '------ ------ XxxXxx ------', sn: '------ ------ ------ XxxXxx', st: r('DEDEDE', 4) })
          ]
        },
        {
          id: 'sext-7b', name: 'D E B pelos tons', desc: 'Um compasso de groove e a D E B do Bonham descendo pelo kit, um tambor por tempo. A última nota de bumbo sai para o pé chegar livre no prato do 1.', bpm: [50, 120], bars: [b6({ ...G.rock6C }), b6({
            sn: 'Xx-xx- ------ ------ ------', t1: '------ Xx-xx- ------ ------', t2: '------ ------ Xx-xx- ------', ft: '------ ------ ------ Xx-xx-', kd: '--x--x --x--x --x--x --x---', st: 'DEBDEB DEBDEB DEBDEB DEBDE-'
          })]
        },
        {
          id: 'sext-7c', name: 'D E B B: grupos de quatro', desc: 'Duas mãos e dois bumbos repetidos em sextinas. O grupo de quatro atravessa o tempo e só volta ao começo a cada dois tempos.', bpm: [50, 110], bars: [b6({
            sn: 'Xx--Xx --Xx-- Xx--Xx --Xx--', kd: '--x--- x---x- --x--- x---x-', ke: '---x-- -x---x ---x-- -x---x', st: 'DEBBDE BBDEBB DEBBDE BBDEBB'
          })]
        },
        {
          id: 'sext-7d', name: 'Virada com antecipação no prato', desc: 'Virada nos tempos 3 e 4 que termina com prato e bumbo no "e" do 4. O compasso seguinte começa sem prato e sem bumbo no 1.', bpm: [60, 110], bars: [
            b6({ hh: '---x-- x--x-- x--x-- x--x--', sn: '------ X----- ------ X-----', kd: '------ ------ x--x-- ------' }),
            b6({ ...G.rock6 }),
            b6({ ...G.rock6 }),
            b6({ hh: 'x--x-- x--x-- ------ ------', sn: '------ X----- XxxXxx ------', t1: '------ ------ ------ xx----', cr: '------ ------ ------ ---X--', kd: 'x----- ------ ------ ---x--', st: '------ ------ DEDEDE DE-D--' })
          ]
        }
      ]
    }
  ]
};
