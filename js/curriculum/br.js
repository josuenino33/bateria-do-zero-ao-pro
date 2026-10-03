import { r, b2, b4, b6 } from './helpers.js';

// Na grade de 4/4, cada compasso aqui equivale a dois compassos de 2/4 (o compasso
// tradicional do samba, do baião e do xote). Os tempos 2 e 4 da grade são o "2" do 2/4.
const GANZA = r('xxxX', 4);              // chimbal de ganzá: acento na 4ª semicolcheia
const PANDEIRO = r('XxxX', 4);           // acentos do pandeiro: 1ª e 4ª semicolcheia
const SURDO = 'x--x X--x x--x X--x';     // surdo no bumbo: tempo e "a", mais forte no 2
const TELECO = '-x-x -xx- x-x- xx-x';    // teleco-teco do tamborim
const PARTIDO_A = '-x-- x-x- x-x- -x-x'; // partido alto
const PARTIDO_B = 'x-x- -x-x -x-- x-x-'; // partido alto começando pela outra metade
// Bossa nova: clave do aro em dois compassos de colcheias.
const BOSSA_KD = 'g- -g g- -g';
const CLAVE_1 = 'x- -x -- x-', CLAVE_2 = '-- x- -x --';
// Samba-reggae: acentos da caixa (mesmo desenho da clave da bossa, em semicolcheias).
const SR_KD = '---- x--- ---- x-x-';
// Maracatu: alfaia no baque de marcação.
const ALFAIA = 'X--- ---- xX-- xX--';

export default {
  id: 'br',
  name: 'Ritmos brasileiros',
  desc: 'Samba, xote, baião, partido alto, pagode, samba-reggae, bossa nova e maracatu: a origem de cada ritmo, os instrumentos de percussão e como a bateria imita cada um.',
  lessons: [
    {
      id: 'br-1',
      name: 'Samba',
      level: 1,
      goal: 'Tocar o samba na bateria imitando o surdo, o ganzá, o tamborim e a caixa de uma escola de samba.',
      text: [
        'O samba nasceu no Rio de Janeiro no começo do século 20, nas comunidades negras, muitas delas vindas da Bahia, que se reuniam na região conhecida como Pequena África. Ele junta tradições africanas de batuque com a música urbana da época. Pelo Telefone, de 1917, costuma ser lembrado como o primeiro samba gravado. Nas décadas seguintes surgiram as escolas de samba, e com elas a bateria de escola, com dezenas de percussionistas.',
        'O compasso do samba é 2/4, com a semicolcheia como subdivisão. Aqui, cada compasso da grade (em 4/4) equivale a dois compassos de 2/4. O tempo mais forte do samba é o segundo: é nele que bate o surdo de primeira (marcação), o mais grave. O surdo de segunda responde no primeiro tempo, e o surdo de terceira (corte) faz desenhos sincopados por cima. Essa conversa entre os surdos é o coração do samba.',
        'Na bateria, cada peça imita um instrumento. O bumbo faz o surdo, com a figura "tempo e último a" (bumbo na primeira e na última semicolcheia) em todos os tempos e mais força no 2. O chimbal faz o ganzá e o chocalho, que tocam semicolcheias sem parar com um leve acento na quarta, aquela que antecipa o tempo e dá o balanço. O aro, com a mão esquerda, faz o tamborim: um tamborzinho de mão tocado com baqueta, cujo desenho mais famoso é o teleco-teco. Com as duas mãos na caixa, você imita a caixa da escola de samba.',
        'O balanço do samba vem justamente desse acento na quarta semicolcheia e do surdo no 2. Tocado com tudo igual e reto, o samba soa como uma marcha. Relaxe a mão direita, deixe o bumbo leve no 1 e cheio no 2, e pense na batucada inteira soando junto com você.'
      ],
      steps: [
        'Toque só o bumbo do surdo a 60 bpm, falando "tum ... tu-TUM ... tu", com peso no 2.',
        'Junte o chimbal em semicolcheias com o acento na quarta nota e toque cinco minutos.',
        'Treine o teleco-teco sozinho no aro, falando o desenho, antes de juntar com chimbal e bumbo.',
        'Na caixa de escola, toque primeiro a manulação sem acentos, depois coloque os acentos.',
        'Suba o andamento devagar: o samba de escola é rápido, mas o balanço vem antes da velocidade.'
      ],
      mistakes: [
        'Acentuar o 1 em vez do 2. Correção: o tempo forte do samba é o segundo; conte "um, DOIS" e coloque o peso do bumbo no "dois".',
        'Chimbal com todas as notas iguais, sem balanço. Correção: acentue levemente a quarta semicolcheia, como um ganzá que "puxa" o tempo seguinte.',
        'O teleco-teco sai torto porque a mão direita para. Correção: toque devagar com o chimbal bem constante e deixe a esquerda se encaixar.'
      ],
      tips: [
        'Ouça uma bateria de escola de samba e tente identificar cada instrumento antes de tocar.',
        'O teleco-teco tem dois lados: pode começar por qualquer uma das metades. Ouça a música e escolha o lado que combina com a melodia.',
        'Em andamentos rápidos, deixe o chimbal em colcheias e mantenha só o acento: o balanço continua.'
      ],
      listen: ['Mas Que Nada — Jorge Ben (o balanço do samba puxado pelo violão e pela percussão)'],
      ex: [
        { id: 'br-1a', name: 'Samba: surdo no bumbo e ganzá no chimbal', desc: 'Chimbal em semicolcheias com acento na quarta nota de cada tempo. Bumbo no tempo e no "a", mais forte no 2 e no 4 da grade (o "2" do samba).', bpm: [60, 110], bars: [b4({ hh: GANZA, kd: SURDO })] },
        { id: 'br-1b', name: 'Samba com teleco-teco no aro', desc: 'O mesmo samba com a mão esquerda no aro tocando o teleco-teco, o desenho do tamborim.', bpm: [60, 110], bars: [b4({ hh: GANZA, cs: TELECO, kd: SURDO })] },
        { id: 'br-1c', name: 'Caixa de escola de samba', desc: 'As duas mãos na caixa em semicolcheias (D E D D E D D E), com acento na 1ª e na 4ª nota de cada tempo. Bumbo de surdo por baixo.', bpm: [60, 120], bars: [b4({ sn: r('XxxX', 4), kd: SURDO, st: r('DEDDEDDE', 2) })] }
      ]
    },
    {
      id: 'br-2',
      name: 'Xote',
      level: 1,
      goal: 'Tocar o xote com o bumbo de zabumba e o triângulo no prato, no andamento cadenciado do forró pé-de-serra.',
      text: [
        'O xote vem do schottische, uma dança de salão europeia que chegou ao Brasil no século 19. No Nordeste, ele ganhou outro sotaque e virou o xote pé-de-serra, um dos ritmos do forró, mais lento e cadenciado que o baião. Luiz Gonzaga levou o xote, junto com o baião, para o Brasil inteiro.',
        'O conjunto clássico do forró é o trio de sanfona, zabumba e triângulo. A zabumba é um tambor grave de duas peles: na de cima, a maceta (uma baqueta de cabeça macia) faz os graves; na de baixo, uma vareta fina chamada bacalhau faz um som seco e agudo. O triângulo toca semicolcheias o tempo todo, alternando som fechado (com a mão segurando) e aberto.',
        'No xote, a zabumba faz um grave no 1, o bacalhau no "&" do 1, e dois graves no 2 e no "&" do 2. Na bateria, o bumbo faz os graves e o aro faz o bacalhau. Para o triângulo, uma adaptação muito usada é o prato de condução tocando as três primeiras semicolcheias de cada tempo, com a terceira acentuada no sino, reforçada pelo chimbal com o pé.',
        'Muitos grupos de pé-de-serra que usam bateria tocam o xote "tercinado", com as semicolcheias balançadas, quase como um shuffle. Na grade, isso fica em sextinas: as notas da condução caem na 1ª, 3ª e 4ª nota da sextina. O andamento do xote costuma ficar entre 70 e 90 bpm.'
      ],
      steps: [
        'Toque só o bumbo e o aro (zabumba completa) a 70 bpm, falando "tum-ta TUM-TUM".',
        'Toque só a condução com o sino e o chimbal de pé por dois minutos.',
        'Junte tudo e toque cinco minutos seguidos.',
        'No xote tercinado, cante o balanço antes de tocar e deixe o clique em todas as subdivisões.',
        'Toque junto com uma gravação de xote e compare o seu bumbo com a zabumba.'
      ],
      mistakes: [
        'Tocar rápido demais e o xote virar baião. Correção: o xote é cadenciado; fique entre 70 e 90 bpm.',
        'O sino da condução fica fraco e o triângulo some. Correção: acentue o sino de verdade e feche o chimbal com o pé junto, firme.',
        'No tercinado, misturar semicolcheia reta com balançada. Correção: toque sextinas completas na condução por um minuto e depois tire as notas que não fazem parte.'
      ],
      tips: [
        'O som da zabumba é cheio e redondo: deixe o bumbo soar, sem enterrar a batedeira na pele.',
        'Na falta de sino no prato, use um cowbell (agogô de um som) ou o aro da caixa para o acento do triângulo.'
      ],
      listen: ['Xote das Meninas — Luiz Gonzaga (o xote com sanfona, zabumba e triângulo)'],
      ex: [
        { id: 'br-2a', name: 'Xote', desc: 'Condução nas duas primeiras semicolcheias e sino na terceira, com chimbal de pé junto. Bumbo no 1, no 2 e no "&" do 2 do xote; aro (bacalhau) no "&" do 1.', bpm: [60, 100], bars: [b4({ rd: r('xx--', 4), rb: r('--X-', 4), cs: '--x- ---- --x- ----', kd: 'x--- x-x- x--- x-x-', hp: r('--x-', 4) })] },
        { id: 'br-2b', name: 'Xote tercinado', desc: 'O mesmo xote com as semicolcheias balançadas, na grade de sextinas: condução na 1ª e na 3ª nota, sino e chimbal de pé na 4ª.', bpm: [55, 95], bars: [b6({ rd: r('x-x---', 4), rb: r('---X--', 4), cs: '---x-- ------ ---x-- ------', kd: 'x----- x--x-- x----- x--x--', hp: r('---x--', 4) })] }
      ]
    },
    {
      id: 'br-3',
      name: 'Baião',
      level: 2,
      goal: 'Tocar o baião com o bumbo de zabumba, o chimbal de triângulo e o aro no lugar do bacalhau.',
      text: [
        'O baião foi levado do sertão nordestino para o rádio e para o Brasil inteiro nos anos 1940, por Luiz Gonzaga e pelo parceiro Humberto Teixeira. A base é o mesmo trio do xote (sanfona, zabumba e triângulo), mas o baião é mais rápido e tem uma célula muito característica, que depois influenciou muita música brasileira, da MPB ao rock.',
        'A célula da zabumba no baião é: um grave abafado no 1, um grave aberto no "a" do 1 que se prolonga até o 2, e o bacalhau no "&" do 2. Na bateria, o bumbo toca o 1 e o "a" do 1 (sem tocar de novo no 2) e o aro faz o bacalhau. Esse bumbo "atrasado" no "a" é o que dá o balanço do baião.',
        'O triângulo toca semicolcheias com um desenho de som fechado e aberto. A bateria imita isso com o chimbal: duas semicolcheias fechadas e uma colcheia aberta no "&" de cada tempo, fechando de novo no tempo seguinte. O som aberto do chimbal lembra muito o brilho do triângulo, por isso essa adaptação é tão usada.',
        'Uma variação mais cheia usa as duas mãos em semicolcheias: a direita no chimbal, abrindo no "&", e a esquerda fazendo ghost notes na caixa. A nota do bacalhau, no "&" do 2, passa para a mão direita na caixa, forte. O resultado lembra a zabumba e o triângulo tocando juntos, com muito mais movimento.'
      ],
      steps: [
        'Toque só o bumbo da zabumba (1 e "a" do 1) a 70 bpm, falando "tum ... TUUM".',
        'Toque só o chimbal, abrindo no "&" e fechando no tempo, por dois minutos.',
        'Junte bumbo, chimbal e aro e toque cinco minutos.',
        'Na versão com ghosts, toque primeiro só as mãos e depois junte o bumbo.',
        'Suba o andamento até 110 ou 120 bpm, o andamento de um forró animado.'
      ],
      mistakes: [
        'Tocar o bumbo também no 2 e perder o balanço. Correção: o grave do "a" do 1 se prolonga até o 2; deixe o tempo 2 sem bumbo.',
        'O chimbal aberto fica longo e embola com o tempo seguinte. Correção: feche o pé exatamente no tempo, junto com a próxima nota.',
        'O aro (bacalhau) adianta e cai junto com o "a" do bumbo. Correção: conte as semicolcheias em voz alta e coloque o aro no "&" do 2.'
      ],
      tips: [
        'Em andamentos rápidos, a esquerda pode ajudar o chimbal na segunda semicolcheia.',
        'O baião também soa ótimo com a direita na condução e o sino no "&", no lugar do chimbal.'
      ],
      listen: ['Asa Branca — Luiz Gonzaga (o balanço nordestino que o baião espalhou pelo Brasil)'],
      ex: [
        { id: 'br-3a', name: 'Baião', desc: 'Chimbal com duas semicolcheias fechadas e aberto no "&" de cada tempo. Bumbo no 1 e no "a" do 1 de cada baião, aro (bacalhau) no "&" do 2.', bpm: [70, 130], bars: [b4({ hh: r('xxo-', 4), cs: '---- --x- ---- --x-', kd: 'x--x ---- x--x ----' })] },
        { id: 'br-3b', name: 'Baião com ghost notes', desc: 'Mãos alternadas em semicolcheias: a direita no chimbal (aberto no "&" do 1) e forte na caixa no "&" do 2; a esquerda em ghost notes na caixa. Mesmo bumbo de zabumba.', bpm: [60, 115], bars: [b4({ hh: 'x-o- x--- x-o- x---', sn: '-g-g -gXg -g-g -gXg', kd: 'x--x ---- x--x ----', st: r('DEDE', 4) })] }
      ]
    },
    {
      id: 'br-4',
      name: 'Partido alto e pagode',
      level: 2,
      goal: 'Tocar o desenho do partido alto no aro e a levada de pagode imitando tantã e pandeiro.',
      text: [
        'O partido alto é uma das formas mais antigas de samba, ligada às rodas em que os sambistas improvisam versos entre um refrão fixo. Com o tempo, o nome passou a designar também um desenho rítmico muito característico, tocado pelo pandeiro, pelo cavaquinho e pela cuíca. A partir dos anos 1970, esse desenho foi levado para a música instrumental e para a bateria.',
        'O desenho do partido alto ocupa dois compassos de 2/4 (um compasso da grade) e alterna notas nos tempos e nos contratempos, atravessando a barra de compasso. Ele começa pela segunda semicolcheia, o que dá a sensação de que a música "está sempre indo para frente". Assim como o teleco-teco, ele tem dois lados, e a melodia da música indica qual usar.',
        'O pagode, como roda de samba, é o encontro de músicos ao redor de uma mesa, com pandeiro, tantã (ou surdo de mão), repique de mão, tamborim, cavaquinho e banjo. O grupo Fundo de Quintal, nos anos 1980, popularizou o tantã, o repique de mão e o banjo, e esse som marcou o pagode desde então. O tantã toca um grave abafado no 1 e um grave aberto no 2, e o pandeiro faz semicolcheias com acentos na primeira e na quarta.',
        'Na bateria, o bumbo imita o tantã (leve no 1, forte no 2), o chimbal imita o pandeiro com seus acentos e o aro faz o tamborim. A dinâmica do pagode é mais baixa e mais solta que a da escola de samba: a bateria acompanha a roda, não comanda.'
      ],
      steps: [
        'Fale o partido alto em voz alta, batendo palmas no desenho e o pé no tempo.',
        'Toque o partido alto só no aro, sobre o clique, a 60 bpm.',
        'Junte o chimbal e o bumbo do surdo e toque cinco minutos de cada lado.',
        'No pagode, toque bem mais baixo e deixe o bumbo do 2 aparecer.',
        'Alterne oito compassos de cada exercício sem parar.'
      ],
      mistakes: [
        'Começar o partido alto no tempo, em vez da segunda semicolcheia. Correção: fale "e" na primeira nota e entre logo depois do tempo.',
        'Trocar de lado sem perceber no meio da música. Correção: acentue levemente a primeira nota do desenho para não se perder.',
        'Tocar o pagode com volume de escola de samba. Correção: baquetas baixas e bumbo macio; a roda precisa ouvir o cavaquinho e a voz.'
      ],
      tips: [
        'O partido alto também funciona no tom, no lugar do aro, para um som mais grave.',
        'Toque junto com rodas de samba gravadas e tente se encaixar como mais um percussionista.'
      ],
      ex: [
        { id: 'br-4a', name: 'Partido alto no aro', desc: 'O desenho do partido alto no aro, com o chimbal de ganzá e o bumbo de surdo. A primeira nota do desenho é a segunda semicolcheia.', bpm: [60, 110], bars: [b4({ hh: GANZA, cs: PARTIDO_A, kd: SURDO })] },
        { id: 'br-4b', name: 'Partido alto pelo outro lado', desc: 'O mesmo desenho começando pela outra metade: agora a primeira nota cai no tempo. Treine os dois lados até trocar sem pensar.', bpm: [60, 110], bars: [b4({ hh: GANZA, cs: PARTIDO_B, kd: SURDO })] },
        { id: 'br-4c', name: 'Pagode: tantã e pandeiro', desc: 'Bumbo de tantã (leve no 1, forte no 2 do pagode), chimbal com os acentos do pandeiro (1ª e 4ª semicolcheia) e teleco-teco no aro.', bpm: [60, 105], bars: [b4({ hh: PANDEIRO, cs: TELECO, kd: 'x--- X--- x--- X---' })] }
      ]
    },
    {
      id: 'br-5',
      name: 'Samba-reggae e axé',
      level: 2,
      goal: 'Tocar o samba-reggae imitando os surdos e a caixa dos blocos afro de Salvador.',
      text: [
        'O samba-reggae nasceu em Salvador, na Bahia, nos anos 1980, nos blocos afro como o Olodum e o Ilê Aiyê. O mestre Neguinho do Samba, do Olodum, é lembrado como o criador do ritmo, que mistura a batucada do samba com o balanço do reggae. A partir dele e de outros ritmos baianos surgiu a axé music, o pop de Salvador que tomou o Brasil a partir de meados dos anos 1980.',
        'O som vem de uma grande bateria de surdos de tamanhos diferentes, que conversam entre si: os mais graves (fundos) tocam nos tempos, alternando toque aberto e abafado, e os médios e agudos fazem desenhos por cima. As caixas tocam semicolcheias com acentos num desenho que lembra uma clave, com as notas não acentuadas bem baixas. Repiques, timbaus e agogôs completam.',
        'Na bateria, o bumbo faz o surdo grave nos tempos 2 e 4 e no "&" do 4, o surdo da bateria (com a direita) faz o surdo médio no 1 e no 3, e a caixa faz o desenho de acentos. Numa segunda versão, as duas mãos ficam na caixa, alternadas, tocando os acentos e as notas fantasmas, e o chimbal de pé marca o 1 e o 3 no lugar dos toques abafados.',
        'O andamento costuma ficar entre 90 e 110 bpm, e o balanço é mais "pesado" e para baixo que o do samba carioca. Quando a banda tem percussão, a bateria pode simplificar e deixar os surdos e as caixas de verdade fazerem o desenho. Quando não tem, a bateria precisa sugerir a batucada inteira.'
      ],
      steps: [
        'Toque só os pés e o surdo (bumbo e a direita no surdo) a 80 bpm, ouvindo a conversa entre grave e médio.',
        'Toque só os acentos da caixa, falando as posições ("1, a, & do 2, & do 3, e do 4").',
        'Junte tudo e toque cinco minutos.',
        'Na versão da caixa, toque primeiro as semicolcheias alternadas sem acento, depois coloque os acentos.',
        'Grave e confira se as notas fantasmas estão bem mais baixas que os acentos.'
      ],
      mistakes: [
        'Acentos da caixa no lugar errado, virando um samba comum. Correção: decore o desenho falando as posições antes de tocar.',
        'Notas fantasmas altas, que apagam o desenho. Correção: baquetas a dois dedos da pele nas notas fracas.',
        'Bumbo e surdo da bateria tocando juntos. Correção: o médio fica no 1 e no 3, o grave no 2 e no 4; um responde ao outro.'
      ],
      tips: [
        'Afine o surdo da bateria um pouco mais alto e o bumbo bem grave para imitar a diferença entre os surdos.',
        'O mesmo desenho de acentos da caixa aparece na clave da bossa nova, só que em colcheias. Compare quando chegar lá.'
      ],
      listen: ['The Obvious Child — Paul Simon (os tambores do Olodum na introdução)'],
      ex: [
        { id: 'br-5a', name: 'Samba-reggae: surdos na bateria', desc: 'Direita no surdo no 1 e no 3 (surdo médio), bumbo no 2, no 4 e no "&" do 4 (surdo grave). A esquerda faz os acentos da caixa.', bpm: [70, 110], bars: [b4({ ft: 'x--- ---- x--- ----', sn: 'X--X --X- --X- -X--', kd: SR_KD })] },
        { id: 'br-5b', name: 'Caixa do samba-reggae', desc: 'As duas mãos na caixa em semicolcheias alternadas, com acentos no desenho do samba-reggae e as outras notas como ghost notes. Bumbo de surdo grave e chimbal de pé no 1 e no 3.', bpm: [70, 110], bars: [b4({ sn: 'XggX ggXg ggXg gXgg', kd: SR_KD, hp: 'x--- ---- x--- ----', st: r('DEDE', 4) })] }
      ]
    },
    {
      id: 'br-6',
      name: 'Bossa nova',
      level: 3,
      goal: 'Tocar a bossa nova leve, com a clave no aro, o bumbo macio e o chimbal de pé no 2 e no 4.',
      text: [
        'A bossa nova surgiu no Rio de Janeiro no fim dos anos 1950, a partir do violão de João Gilberto e das canções de Tom Jobim e Vinicius de Moraes. Ela é filha do samba, mas tocada baixinho, com harmonia sofisticada e uma batida de violão que resume a batucada inteira num instrumento só. A bateria, aqui, é discreta: muitas vezes tocada com vassourinhas, sempre a serviço da voz.',
        'O aro (cross-stick) faz a clave da bossa nova: um desenho de dois compassos que imita os acordes sincopados do violão. No primeiro compasso, ele cai no 1, no "&" do 2 e no 4; no segundo, no 2 e no "&" do 3. A clave pode começar por qualquer um dos dois compassos, dependendo da melodia.',
        'O bumbo vem do surdo do samba, mas bem macio: no 1, no "&" do 2, no 3 e no "&" do 4. O pé esquerdo fecha o chimbal no 2 e no 4, e a mão direita toca colcheias na condução ou no chimbal fechado, imitando o chocalho. Tudo em volume baixo, quase sussurrado.',
        'É uma das levadas mais difíceis de independência, porque os quatro membros fazem desenhos diferentes ao mesmo tempo e nenhum pode se destacar. Ela treina exatamente o que você precisa para soltar o corpo: controle fino, relaxamento e escuta. Bem tocada, a bossa nova soa simples; é aí que está a dificuldade.'
      ],
      steps: [
        'Toque só os pés (bumbo macio e chimbal no 2 e no 4) por três minutos a 70 bpm.',
        'Junte a mão direita em colcheias e toque mais três minutos.',
        'Toque a clave sozinha no aro, contando os dois compassos em voz alta.',
        'Junte tudo a 60 bpm e só depois suba, mantendo o volume baixo.',
        'Toque a versão com a clave invertida e alterne as duas a cada oito compassos.'
      ],
      mistakes: [
        'Bumbo alto demais, que pesa a música. Correção: calcanhar no chão e batida mínima; a bossa nova sussurra.',
        'A clave "anda" para o lugar errado no segundo compasso. Correção: conte "1 e 2 e 3 e 4 e" e decore as posições de cada compasso.',
        'O pé esquerdo para quando a clave entra. Correção: volte aos pés sozinhos e só junte a clave quando eles estiverem automáticos.'
      ],
      tips: [
        'Se tiver vassourinhas, experimente: a mão direita faz colcheias suaves na caixa e a esquerda fica no aro.',
        'Ouça o violão: a clave do aro conversa com a batida dele, não com a voz.'
      ],
      listen: ['Garota de Ipanema — Tom Jobim e Vinicius de Moraes (a levada leve que não compete com a voz e o violão)'],
      ex: [
        { id: 'br-6a', name: 'Bossa nova', desc: 'Condução em colcheias, clave no aro em dois compassos (1, "&" do 2 e 4; depois 2 e "&" do 3), bumbo macio no 1, "&" do 2, 3 e "&" do 4, chimbal de pé no 2 e no 4.', bpm: [60, 140], bars: [
          b2({ rd: r('xx', 4), cs: CLAVE_1, kd: BOSSA_KD, hp: '-- x- -- x-' }),
          b2({ rd: r('xx', 4), cs: CLAVE_2, kd: BOSSA_KD, hp: '-- x- -- x-' })] },
        { id: 'br-6b', name: 'Bossa com a clave invertida', desc: 'A clave começa pelo segundo compasso (2 e "&" do 3; depois 1, "&" do 2 e 4). A direita vai para o chimbal fechado, imitando o chocalho.', bpm: [60, 140], bars: [
          b2({ hh: r('xx', 4), cs: CLAVE_2, kd: BOSSA_KD }),
          b2({ hh: r('xx', 4), cs: CLAVE_1, kd: BOSSA_KD })] }
      ]
    },
    {
      id: 'br-7',
      name: 'Maracatu',
      level: 3,
      goal: 'Adaptar o maracatu de baque virado para a bateria, com alfaia no bumbo, caixa e gonguê.',
      text: [
        'O maracatu de baque virado, ou maracatu nação, é uma tradição afro-brasileira de Recife, em Pernambuco. Ele está ligado à coroação dos reis do Congo e sai às ruas em cortejo, com rei, rainha e toda uma corte, seguidos por um grande grupo de percussão. Cada nação tem seus próprios baques (os ritmos), e a forma de tocar é passada de geração em geração.',
        'Os instrumentos principais são as alfaias, tambores graves de madeira afinados por cordas e tocados com baquetas; as caixas e taróis, que fazem semicolcheias com acentos e rufos; o gonguê, um sino grande de metal que funciona como guia; e o mineiro e o agbê, chocalhos que preenchem as semicolcheias. As alfaias definem qual baque está sendo tocado, enquanto caixa e gonguê costumam manter o mesmo desenho.',
        'Na bateria, o bumbo faz a alfaia. Neste estudo, usamos o baque de marcação de uma das nações: um grave forte no 1, e depois duas duplas rápidas (fraca e forte) no 3 e no 4. A caixa faz semicolcheias alternadas com acentos e um rufo prensado acentuado no "&" do 2 e do 4. Numa segunda versão, a mão direita vai para o sino da condução e toca o desenho do gonguê, enquanto a esquerda toca só os acentos da caixa.',
        'Nos anos 1990, o movimento manguebeat, com Chico Science e Nação Zumbi, levou as alfaias do maracatu para o palco junto com bateria, baixo e guitarra. Desde então, o maracatu aparece em muito rock e música pop brasileira. É um ritmo pesado e ritual: toque com força e firmeza, mas sem perder o controle das duplas no bumbo.'
      ],
      steps: [
        'Toque só o bumbo da alfaia a 60 bpm, falando "TUM ... ta-TUM ta-TUM".',
        'Toque a caixa sozinha, primeiro sem acentos, depois com acentos e o rufo.',
        'Junte caixa e bumbo e toque cinco minutos.',
        'Na versão com gonguê, toque só o sino e o bumbo antes de colocar a esquerda.',
        'Suba o andamento até 90 ou 100 bpm mantendo as duplas do bumbo limpas.'
      ],
      mistakes: [
        'As duplas do bumbo saem embaralhadas. Correção: a primeira nota da dupla é mais fraca e a segunda é a forte; treine só o pé, devagar.',
        'O rufo prensado vira um toque simples. Correção: pressione a baqueta na pele para ela vibrar várias vezes, num toque curto e acentuado.',
        'O gonguê se perde quando a esquerda acentua. Correção: toque só o sino com o bumbo até o desenho ficar automático.'
      ],
      tips: [
        'Afine o bumbo mais aberto e deixe ele soar: a alfaia tem um grave longo.',
        'Se tiver um cowbell, use no lugar do sino do prato: o som fica mais perto do gonguê.'
      ],
      listen: ['Maracatu Atômico — Chico Science & Nação Zumbi (alfaias de maracatu junto com bateria e guitarra)'],
      ex: [
        { id: 'br-7a', name: 'Maracatu: caixa e alfaia', desc: 'As duas mãos na caixa em semicolcheias, com acentos na 1ª e na 4ª nota do 1 e do 3, e na 1ª nota do 2 e do 4 seguida de um rufo prensado no "&". Bumbo no baque de marcação.', bpm: [60, 100], bars: [b4({ sn: 'XxxX Xxzx XxxX Xxzx', kd: ALFAIA, st: r('DEDE', 4) })] },
        { id: 'br-7b', name: 'Maracatu com gonguê no sino', desc: 'A direita toca o desenho do gonguê no sino da condução, a esquerda só os acentos e o rufo da caixa, e o bumbo segue com a alfaia.', bpm: [60, 100], bars: [b4({ rb: '-x-- x-x- -x-- x-x-', sn: 'X--X X-z- X--X X-z-', kd: ALFAIA })] }
      ]
    }
  ]
};
