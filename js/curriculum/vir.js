import { r, b4, b5, G } from './helpers.js';

const KICK13 = 'x--- ---- x-x- ----';
// Frase de quatro compassos: três de groove (prato no 1) e o compasso da virada.
const phrase = fill => [b4(G.rock16C), b4(G.rock16), b4(G.rock16), b4(fill)];
// Frase curta: um compasso de groove e um de virada.
const pair = fill => [b4(G.rock16C), b4(fill)];

export default {
  id: 'vir',
  name: 'Viradas e vocabulário',
  desc: 'Viradas curtas e longas, lineares, com flams e duplos, em grupos de cinco, deslocadas e antecipadas. Uma ideia vira dez.',
  lessons: [
    {
      id: 'vir-1',
      name: 'Virada de um tempo',
      level: 1,
      goal: 'Sair do groove, fazer uma virada curta e voltar no 1 sem engasgar.',
      text: [
        'A virada mais útil é a mais curta. Na maior parte das músicas, o baterista não precisa de um compasso inteiro para anunciar uma parte nova: um tempo bem colocado já resolve. Por isso o primeiro estudo é tocar três compassos de groove e transformar só o tempo 4 do quarto compasso em virada.',
        'O que importa numa virada não é o meio, é a volta. O 1 do compasso seguinte, com prato e bumbo juntos, é a nota mais importante de todas. Se você chega nele atrasado, adiantado ou hesitando, a banda inteira sente. Uma virada simples que cai certinho soa muito melhor do que uma difícil que tropeça.',
        'Fisicamente, a mão direita sai do chimbal no tempo 4 e vai para a caixa ou para os tons, e depois precisa chegar ao prato no 1. Esse caminho tem que estar planejado: antes de tocar, olhe para onde cada mão vai. Nas viradas que descem o kit, a direita fica com o surdo e a esquerda com os tambores mais à esquerda, assim os braços não se cruzam.',
        'Em louvor, pop e rock, essas viradas de um tempo são o que mais se toca ao vivo. Elas marcam a passagem do verso para o refrão, a volta de um solo, a entrada de um cantor. Ter três ou quatro delas confiáveis em qualquer andamento é mais importante do que ter uma virada longa impressionante.'
      ],
      steps: [
        'Toque os três compassos de groove e, no lugar da virada, só pare a mão direita e conte "4 e & a" em voz alta.',
        'Agora toque a virada sozinha, em loop, a 60 bpm, terminando sempre com prato e bumbo no 1.',
        'Junte o groove e a virada a 60 bpm por cinco minutos, sem parar entre as repetições.',
        'Quando estiver confortável, suba de 5 em 5 bpm até a meta.',
        'Teste a virada dentro de uma música que você conhece, no fim de cada parte de oito compassos.'
      ],
      mistakes: [
        'Acelerar na virada por ansiedade. Correção: deixe o clique bem alto e pense na virada como uma frase que termina no 1, não como uma corrida.',
        'Chegar no 1 sem o prato, ou com o prato atrasado. Correção: treine só a última nota da virada e o prato do 1, devagar, até o movimento ficar automático.',
        'Cruzar os braços para chegar ao surdo. Correção: siga a manulação escrita; a mão direita fica com o surdo e a esquerda com os tambores da esquerda.'
      ],
      tips: [
        'Se você engasga na volta, a virada está difícil demais para esse andamento. Desça 10 bpm.',
        'Cante a virada antes de tocar. Se você não consegue cantar, ainda não sabe tocar.',
        'Deixe a última nota da virada um pouco mais fraca e o prato do 1 forte: a chegada fica clara.'
      ],
      ex: [
        { id: 'vir-1a', name: 'Semicolcheias na caixa', desc: 'Três compassos de groove e virada de quatro semicolcheias na caixa no tempo 4.', bpm: [60, 120], bars: phrase({ hh: 'x-x- x-x- x-x- ----', sn: '---- X--- ---- xxxx', kd: KICK13, st: '---- ---- ---- DEDE' }) },
        { id: 'vir-1b', name: 'Caixa, tom e surdo', desc: 'O mesmo tempo 4 descendo pelo kit: caixa com a direita, tom 1 com a esquerda e as duas últimas notas no surdo.', bpm: [60, 120], bars: phrase({ hh: 'x-x- x-x- x-x- ----', sn: '---- X--- ---- x---', t1: '---- ---- ---- -x--', ft: '---- ---- ---- --xx', kd: KICK13, st: '---- ---- ---- DEDE' }) },
        { id: 'vir-1c', name: 'Colcheias nos tons', desc: 'A virada com espaço: tom 1 no tempo 4 com a esquerda e surdo no "&" do 4 com a direita. Duas notas bastam.', bpm: [60, 130], bars: phrase({ hh: 'x-x- x-x- x-x- ----', sn: '---- X--- ---- ----', t1: '---- ---- ---- x---', ft: '---- ---- ---- --x-', kd: KICK13, st: '---- ---- ---- E-D-' }) }
      ]
    },
    {
      id: 'vir-2',
      name: 'Viradas mais longas',
      level: 1,
      goal: 'Tocar viradas de dois, três e quatro tempos mantendo o andamento e a chegada no 1.',
      text: [
        'Quando a virada de um tempo estiver natural, aumente o tamanho: dois tempos, depois três, depois o compasso inteiro. A regra continua a mesma de antes: o que importa é chegar no 1. Quanto mais longa a virada, mais tempo você tem para se perder, então a contagem interna precisa estar firme.',
        'Descer do agudo para o grave (caixa, tom 1, tom 2, surdo) dá uma sensação natural de chegada, porque a altura do som vai caindo até o prato. É o desenho mais usado em todos os estilos. Subir do grave para o agudo cria o efeito contrário, de suspense, e funciona bem antes de uma pausa.',
        'Uma virada longa também pode crescer em densidade: começar em colcheias e passar para semicolcheias. Isso dá impressão de aceleração sem que o andamento mude de verdade, e é um recurso ótimo para entrar no refrão. Pense em contar uma história com começo, meio e fim, e não em encher todos os espaços.',
        'Movimente o corpo junto. Para alcançar os tons, gire o tronco a partir da cintura, sem tirar o pé do bumbo nem levantar o ombro. Os braços acompanham o tronco, e a baqueta continua caindo com o mesmo rebote em todos os tambores.'
      ],
      steps: [
        'Toque cada virada sozinha, em loop, a 60 bpm, até as mudanças de tambor ficarem lisas.',
        'Faça a frase completa de quatro compassos (ou dois, quando for o caso) por cinco minutos.',
        'Repare se as notas no surdo e nos tons saem no mesmo volume da caixa; ajuste a força se precisar.',
        'Toque a mesma virada em três andamentos: 70, 90 e 110 bpm.',
        'Grave e ouça se a volta no 1 está exatamente no lugar.'
      ],
      mistakes: [
        'A virada perde força nos tons graves. Correção: o surdo pede um toque um pouco mais cheio; deixe a baqueta cair de mais alto ali.',
        'Atravessar o kit e chegar com a mão errada no surdo. Correção: siga a manulação escrita e treine devagar a passagem de um tambor para o outro.',
        'A virada de compasso inteiro acelera no fim. Correção: conte os tempos em voz alta durante a virada e use o clique só no 2 e no 4 para se ouvir melhor.'
      ],
      tips: [
        'Descer o kit: direita no tambor da direita. Nunca cruze os braços sem motivo.',
        'Viradas longas são raras dentro de uma música. Use-as para marcar mudanças grandes, como a entrada do último refrão.'
      ],
      listen: ['In the Air Tonight — Phil Collins (a famosa virada descendo pelos tons antes da entrada da bateria)'],
      ex: [
        { id: 'vir-2a', name: 'Dois tempos pelos tons', desc: 'Caixa no tempo 3, tom 1 e surdo no tempo 4.', bpm: [60, 120], bars: phrase({ hh: 'x-x- x-x- ---- ----', sn: '---- X--- xxxx ----', t1: '---- ---- ---- xx--', ft: '---- ---- ---- --xx', kd: 'x--- ---- ---- ----', st: '---- ---- DEDE DEDE' }) },
        { id: 'vir-2b', name: 'Compasso inteiro descendo o kit', desc: 'Um tempo em cada tambor: caixa, tom 1, tom 2 e surdo.', bpm: [60, 120], bars: pair({ sn: 'xxxx ---- ---- ----', t1: '---- xxxx ---- ----', t2: '---- ---- xxxx ----', ft: '---- ---- ---- xxxx', kd: 'x--- ---- ---- ----', st: r('DEDE', 4) }) },
        { id: 'vir-2c', name: 'Virada que cresce', desc: 'Começa no tempo 2 com colcheias na caixa e passa para semicolcheias no tom 1 e no surdo. A densidade aumenta, o andamento não.', bpm: [60, 120], bars: phrase({ hh: 'x-x- ---- ---- ----', sn: '---- x-x- ---- ----', t1: '---- ---- xxxx ----', ft: '---- ---- ---- xxxx', kd: 'x--- ---- ---- ----', st: '---- D-E- DEDE DEDE' }) }
      ]
    },
    {
      id: 'vir-3',
      name: 'Uma ideia, várias viradas',
      level: 2,
      goal: 'Criar viradas novas mudando só a manulação, os acentos ou o ponto de partida.',
      text: [
        'Se você sente que toca sempre as mesmas viradas, o problema raramente é falta de técnica. É falta de método para variar. Uma virada é feita de três escolhas: quais notas (ritmo), em quais tambores (orquestração) e com qual mão (manulação). Mudando uma só dessas escolhas, a mesma ideia vira outra virada.',
        'O paradiddle é o melhor exemplo. Com a direita no surdo e a esquerda no tom 1, o D E D D E D E E deixa de ser um exercício de pad e vira uma virada de dois tambores, com um desenho melódico que toque simples nenhum faz. Qualquer rudimento que você estudou pode passar por esse processo.',
        'Viradas também não precisam ser cheias. Acentos com espaço entre eles, como o 3-3-2 (acentos a cada três, três e duas colcheias), soam grandes justamente porque deixam ar. Tocar prato e bumbo juntos nesses acentos transforma uma frase simples numa virada de impacto, muito usada em rock e em louvor.',
        'Por fim, mudar o ponto de partida tira a previsibilidade. Começar a virada no "e" do 3, com a mão esquerda, faz o ouvinte perder a referência por um instante e sentir a chegada do 1 com mais força. Começar com a esquerda também equilibra as mãos, o que ajuda quem se sente travado do lado esquerdo.'
      ],
      steps: [
        'Toque cada virada sozinha em loop até decorar o desenho.',
        'Encaixe no groove em frases de dois compassos, a 60 bpm.',
        'Pegue o paradiddle e troque os tambores: direita no tom 2 e esquerda na caixa, por exemplo.',
        'No 3-3-2, toque primeiro só prato e bumbo, depois preencha com a caixa.',
        'Crie uma variação por dia a partir de uma destas três e anote no caderno.'
      ],
      mistakes: [
        'No paradiddle pelos tons, as duas notas seguidas com a mesma mão (o "diddle") saem desiguais. Correção: toque a manulação no pad até as duplas soarem iguais, depois volte aos tons.',
        'No 3-3-2, as notas de caixa entre os acentos ficam altas e apagam o desenho. Correção: toque a caixa como notas baixas e deixe os acentos para prato e bumbo.',
        'Na virada deslocada, você começa no "&" do 3 em vez do "e". Correção: conte em voz alta "3 e & a" e entre exatamente no "e".'
      ],
      tips: [
        'Crie uma variação por dia: mude o tambor, a duração ou o ponto de partida.',
        'Tire uma virada por semana de uma música que você gosta e aplique as três mudanças nela.'
      ],
      ex: [
        { id: 'vir-3a', name: 'Paradiddle pelos tons', desc: 'Paradiddle nos tempos 3 e 4: direita no surdo e esquerda no tom 1.', bpm: [60, 110], bars: pair({ hh: 'x-x- x-x- ---- ----', sn: '---- X--- ---- ----', kd: 'x--- ---- ---- ----', ft: '---- ---- x-xx -x--', t1: '---- ---- -x-- x-xx', st: '---- ---- DEDD EDEE' }) },
        { id: 'vir-3b', name: 'Prato e bumbo em 3-3-2', desc: 'Acentos de prato e bumbo agrupados em 3, 3 e 2 colcheias, com notas de caixa entre eles.', bpm: [60, 120], bars: pair({ cr: 'x--- --x- ---- x---', kd: 'x--- --x- ---- x---', sn: '--xx ---- xxxx ----', st: 'D-DE --D- DEDE D---' }) },
        { id: 'vir-3c', name: 'Virada deslocada', desc: 'Começa no "e" do tempo 3, com a esquerda, e desce caixa, tom 1 e surdo.', bpm: [60, 110], bars: pair({ hh: 'x-x- x-x- x--- ----', sn: '---- X--- -xxx ----', t1: '---- ---- ---- xx--', ft: '---- ---- ---- --xx', kd: 'x--- ---- x--- ----', st: '---- ---- -EDE DEDE' }) }
      ]
    },
    {
      id: 'vir-4',
      name: 'Viradas lineares',
      level: 2,
      goal: 'Tocar viradas em que mãos e bumbo nunca batem juntos, formando uma única linha rítmica.',
      text: [
        'Numa virada linear, cada nota é tocada por um membro só: nunca duas peças ao mesmo tempo. Mãos e bumbo se revezam numa fila, como se fossem um único instrumento com três sons. O resultado soa rápido e fluido, porque cada membro tem tempo de descansar enquanto os outros tocam.',
        'As células mais comuns são D E B (direita, esquerda, bumbo) e D E B B. A D E B tem três notas, então, tocada em semicolcheias, ela atravessa o tempo e cria uma sensação de três contra quatro. A D E B B tem quatro notas e cabe certinho em cada tempo, o que facilita encaixar na música. Juntando as duas, você monta frases maiores.',
        'O bumbo, aqui, é parte da frase, não um acompanhamento. Ele precisa ter o mesmo peso das mãos. O ponto fraco costuma ser o B B: duas semicolcheias seguidas no mesmo pé. Com pedal simples, use o movimento de deslizar o pé para frente (slide) ou calcanhar e ponta. Com pedal duplo, divida entre o pé direito e o esquerdo.',
        'Viradas lineares aparecem muito no gospel, no fusion e no pop moderno. Elas também são um ótimo treino de coordenação para quem se sente travado: como nenhum membro toca junto com outro, você ouve claramente quem está atrasado.'
      ],
      steps: [
        'Fale a manulação em voz alta ("di, e, bum") enquanto toca devagar, a 50 bpm.',
        'Toque a célula sozinha em loop até as três notas soarem com o mesmo volume.',
        'Encaixe no compasso de virada depois do groove.',
        'Grave e confira se o bumbo não está mais fraco nem atrasado em relação às mãos.',
        'Mude os tambores das mãos (tons em vez de caixa) sem mudar a manulação.'
      ],
      mistakes: [
        'O bumbo sai mais fraco e a frase "manca". Correção: toque mais baixo com as mãos e mais firme com o pé até equilibrar.',
        'Mão e bumbo batem juntos sem querer, quebrando a linha. Correção: diminua o andamento e confira cada nota com a manulação escrita.',
        'No B B, a segunda nota atrasa. Correção: treine só o pé fazendo duas semicolcheias seguidas, devagar, antes de juntar com as mãos.'
      ],
      tips: [
        'Acentue a direita nos tons e deixe a esquerda na caixa mais baixa: a frase ganha melodia.',
        'Se tiver pedal duplo, faça o B B com direito e esquerdo. Se não tiver, a mesma virada serve de estudo para o pé direito.'
      ],
      ex: [
        { id: 'vir-4a', name: 'D E B nos tempos 3 e 4', desc: 'Linear em grupos de três: direita no surdo (acentuada), esquerda na caixa e bumbo, terminando com D E antes do prato. Soa como 3 contra 4.', bpm: [60, 110], bars: pair({ hh: 'x-x- x-x- ---- ----', sn: '---- X--- -x-- x--x', ft: '---- ---- X--X --X-', kd: 'x--- ---- --x- -x--', st: '---- ---- DEBD EBDE' }) },
        { id: 'vir-4b', name: 'D E B B pelo kit', desc: 'Um grupo D E B B por tempo. A direita desce caixa, tom 1, tom 2 e surdo; a esquerda fica na caixa; o bumbo faz duas notas.', bpm: [55, 100], bars: pair({ sn: 'Xx-- -x-- -x-- -x--', t1: '---- X--- ---- ----', t2: '---- ---- X--- ----', ft: '---- ---- ---- X---', kd: r('--xx', 4), st: r('DEBB', 4) }) },
        { id: 'vir-4c', name: 'Frase linear 3-3-3-3-4', desc: 'Quatro grupos D E B e um D E B B fecham o compasso. A direita acentua nos tons (tom 1, tom 2 e surdo) e a esquerda fica na caixa.', bpm: [50, 100], bars: pair({ t1: 'X--X ---- ---- ----', t2: '---- --X- ---- ----', ft: '---- ---- -X-- X---', sn: '-x-- x--x --x- -x--', kd: '--x- -x-- x--x --xx', st: 'DEBD EBDE BDEB DEBB' }) }
      ]
    },
    {
      id: 'vir-5',
      name: 'Flams e toques duplos',
      level: 2,
      goal: 'Usar flams e toques duplos pelo kit para criar viradas com outro peso e outra textura.',
      text: [
        'O flam deixa cada nota mais "gorda": a nota de enfeite, bem baixa, cai um instante antes da nota principal, forte. Numa virada de toques simples, trocar algumas notas por flams faz a mesma frase soar maior sem tocar mais rápido. Em baladas, rock e louvor, flams nos tons em colcheias são um recurso clássico para entrar no refrão.',
        'Os toques duplos (D D E E) fazem o contrário: deixam a virada mais rápida e corrida, com menos esforço. Como cada mão toca duas notas seguidas, você consegue mais velocidade nos tons do que com toques simples. O cuidado é que a segunda nota de cada dupla soe tão forte quanto a primeira, principalmente nos tons graves, que têm menos rebote.',
        'Uma ideia muito útil é dividir os duplos entre dois tambores: a direita faz D D no surdo e a esquerda faz E E na caixa ou nos tons. A dupla da mesma mão continua no mesmo tambor, mas o som alterna entre grave e agudo, criando uma frase quase melódica.',
        'No flam, a mão da nota de enfeite começa baixa, a dois ou três centímetros da pele, e a mão principal começa alta. Nos duplos, a primeira nota sai do pulso e a segunda dos dedos. Nos tons, que são mais moles que a caixa, você precisa ajudar o rebote um pouco mais.'
      ],
      steps: [
        'Revise o flam e o toque duplo no pad por dois minutos antes de ir para o kit.',
        'Toque a virada sozinha a 60 bpm, ouvindo se os flams soam como uma nota "larga" e não como duas notas.',
        'Nos duplos, toque primeiro só na caixa e depois espalhe pelos tambores.',
        'Encaixe no groove e toque cinco minutos seguidos de cada exercício.',
        'Suba o andamento de 5 em 5 bpm, voltando ao anterior se as duplas ficarem desiguais.'
      ],
      mistakes: [
        'O flam vira duas notas separadas ("flam aberto"). Correção: aproxime a altura das duas baquetas e deixe as duas caírem quase juntas.',
        'O flam vira uma nota dupla com as duas baquetas juntas ("flat flam"). Correção: a nota de enfeite começa bem mais baixa que a principal.',
        'A segunda nota do duplo some no surdo. Correção: no tambor grave, puxe a segunda nota com os dedos e toque um pouco mais perto do centro.'
      ],
      tips: [
        'Nos flams pelos tons, a nota de enfeite fica no mesmo tambor da principal.',
        'Duplos pelo kit soam melhor com acento na primeira nota de cada tempo.'
      ],
      ex: [
        { id: 'vir-5a', name: 'Flams pelos tons', desc: 'Flams em colcheias, dois em cada tambor (caixa, tom 1, tom 2 e surdo), com bumbo nos tempos. A direita faz a nota principal.', bpm: [60, 120], bars: pair({ sn: 'f-f- ---- ---- ----', t1: '---- f-f- ---- ----', t2: '---- ---- f-f- ----', ft: '---- ---- ---- f-f-', kd: r('x---', 4), st: r('D-D-', 4) }) },
        { id: 'vir-5b', name: 'Flam e semicolcheias', desc: 'Flam no começo de cada tempo e três semicolcheias em seguida, descendo um tambor por tempo.', bpm: [55, 105], bars: pair({ sn: 'fxxx ---- ---- ----', t1: '---- fxxx ---- ----', t2: '---- ---- fxxx ----', ft: '---- ---- ---- fxxx', st: r('DEDE', 4) }) },
        { id: 'vir-5c', name: 'Toques duplos pelo kit', desc: 'D D E E em semicolcheias, um tambor por tempo, com acento na primeira nota de cada tempo.', bpm: [55, 110], bars: pair({ sn: 'Xxxx ---- ---- ----', t1: '---- Xxxx ---- ----', t2: '---- ---- Xxxx ----', ft: '---- ---- ---- Xxxx', st: r('DDEE', 4) }) },
        { id: 'vir-5d', name: 'Duplos entre surdo e caixa', desc: 'A direita faz D D no surdo e a esquerda responde E E na caixa, no tom 1, no tom 2 e de novo na caixa. Bumbo nos tempos.', bpm: [55, 105], bars: pair({ ft: 'Xx-- Xx-- Xx-- Xx--', sn: '--xx ---- ---- --xx', t1: '---- --xx ---- ----', t2: '---- ---- --xx ----', kd: r('x---', 4), st: r('DDEE', 4) }) }
      ]
    },
    {
      id: 'vir-6',
      name: 'Onde a virada começa e termina',
      level: 2,
      goal: 'Começar a virada em qualquer ponto do compasso e saber terminar com o prato antecipado.',
      text: [
        'Toda virada tem um ponto de partida, e mudar esse ponto muda completamente a sensação. Começar no tempo 4 é discreto. Começar no "&" do 3 já chama atenção. Começar no tempo 2 ou no 1 anuncia uma mudança grande. O bom baterista escolhe o tamanho da virada de acordo com o tamanho da mudança na música.',
        'Nesta lição, a mesma ideia (duas notas por tambor, descendo o kit) é tocada a partir de quatro pontos diferentes. Assim você percebe que não precisa de uma virada nova para cada situação: basta encurtar ou alongar a que você já tem. Também existe a menor virada possível, duas semicolcheias no "&" e no "a" do 4, que é perfeita para músicas calmas.',
        'O final também pode mudar. No prato antecipado, a virada termina no "&" do 4, com prato e bumbo juntos, meia batida antes do 1. O 1 seguinte fica vazio: o prato ainda está soando e o groove volta a partir dali. Isso acontece quando a banda inteira antecipa o acorde, algo muito comum em pop, rock e louvor.',
        'O segredo do prato antecipado é não deixar o groove "pular" depois dele. O compasso seguinte tem que começar exatamente no lugar, mesmo sem a nota do 1. Conte o 1 mentalmente, com firmeza, e entre com o chimbal no "&" do 1.'
      ],
      steps: [
        'Toque a menor virada (duas notas no fim do 4) e ouça como ela já basta para marcar uma parte.',
        'No exercício dos quatro pontos, toque cada par de compassos separado antes de juntar os oito.',
        'Diga em voz alta onde a virada começa ("quatro", "e do três", "dois", "um") um compasso antes.',
        'No prato antecipado, toque primeiro só o groove com o prato no "&" do 4, sem a virada.',
        'Junte tudo a 70 bpm e suba até a meta.'
      ],
      mistakes: [
        'Começar a virada no ponto certo mas terminar cedo ou tarde. Correção: a última nota antes do prato é sempre a mesma; ouça ela como referência.',
        'No prato antecipado, tocar também o prato no 1. Correção: o 1 fica vazio; pense que o prato do "&" do 4 "pertence" ao compasso seguinte.',
        'Depois do prato antecipado, o groove volta adiantado. Correção: conte "1" em voz alta no tempo vazio e entre com o chimbal no "&" do 1.'
      ],
      tips: [
        'Ouça a banda: se o baixo e o teclado antecipam o acorde, o prato antecipado é obrigatório; se não, ele atrapalha.',
        'Comece a virada mais tarde quando a música for mais calma, e mais cedo quando ela estiver crescendo.'
      ],
      ex: [
        { id: 'vir-6a', name: 'A menor virada', desc: 'Groove até o tempo 4 e só duas semicolcheias na caixa, no "&" e no "a" do 4, antes do prato.', bpm: [60, 130], bars: phrase({ hh: 'x-x- x-x- x-x- x---', sn: '---- X--- ---- --xx', kd: KICK13, st: '---- ---- ---- --DE' }) },
        { id: 'vir-6b', name: 'Quatro pontos de partida', desc: 'Oito compassos: a virada desce o kit começando no tempo 4, depois no "&" do 3, depois no tempo 2 e por fim no tempo 1. Sempre um compasso de groove entre elas.', bpm: [60, 110], bars: [
          b4(G.rock16C), b4({ hh: 'x-x- x-x- x-x- ----', sn: '---- X--- ---- ----', kd: KICK13, t1: '---- ---- ---- xx--', ft: '---- ---- ---- --xx', st: '---- ---- ---- DEDE' }),
          b4(G.rock16C), b4({ hh: 'x-x- x-x- x--- ----', sn: '---- X--- --xx ----', kd: 'x--- ---- x--- ----', t1: '---- ---- ---- xx--', ft: '---- ---- ---- --xx', st: '---- ---- --DE DEDE' }),
          b4(G.rock16C), b4({ hh: 'x-x- ---- ---- ----', sn: '---- xxxx ---- ----', kd: 'x--- ---- ---- ----', t1: '---- ---- xx-- ----', t2: '---- ---- --xx ----', ft: '---- ---- ---- xxxx', st: '---- DEDE DEDE DEDE' }),
          b4(G.rock16C), b4({ sn: 'xxxx ---- ---- ----', t1: '---- xxxx ---- ----', t2: '---- ---- xxxx ----', ft: '---- ---- ---- xxxx', kd: 'x--- ---- ---- ----', st: r('DEDE', 4) })] },
        { id: 'vir-6c', name: 'Prato antecipado no "&" do 4', desc: 'Virada de dois tempos que termina com prato e bumbo no "&" do 4. No compasso seguinte o 1 fica vazio e o chimbal entra no "&" do 1.', bpm: [60, 120], bars: [
          b4({ hh: '--x- x-x- x-x- x-x-', sn: '---- X--- ---- X---', kd: '---- ---- x-x- ----' }),
          b4({ hh: 'x-x- x-x- ---- ----', sn: '---- X--- xxxx ----', t1: '---- ---- ---- xx--', cr: '---- ---- ---- --x-', kd: 'x--- ---- ---- --x-', st: '---- ---- DEDE DED-' })] }
      ]
    },
    {
      id: 'vir-7',
      name: 'Grupos de cinco',
      level: 3,
      goal: 'Usar o grupo D E D E B para criar viradas que atravessam o compasso e soam imprevisíveis.',
      text: [
        'O grupo D E D E B tem cinco notas: quatro de mão e uma de bumbo. Tocado em semicolcheias, ele não cabe no tempo, que tem quatro. Então o acento de cada grupo cai num lugar diferente: no 1, no "e" do 2, no "&" do 3. Três grupos ocupam quinze semicolcheias e a última fica de respiro antes do prato. O ouvinte sente uma frase "torta" que mesmo assim chega certinho no 1.',
        'Esse é o mesmo princípio dos agrupamentos ímpares do módulo de independência, agora aplicado em virada. A sensação de imprevisibilidade vem de o acento não coincidir com os tempos. Quem ouve não consegue antecipar a frase, e é por isso que ela soa sofisticada, mesmo sendo simples de tocar.',
        'O mesmo grupo pode ser tocado em quintinas (cinco notas por tempo). Aí ele cabe exatamente em cada tempo e o efeito é outro: uma virada rápida e "redonda", com o bumbo sempre na última nota antes do tempo. É um ótimo treino para sair do pensamento só em semicolcheias e sextinas.',
        'Na hora de tocar, a mão direita sempre começa o grupo, então é ela que leva o acento e é ela que muda de tambor quando a frase percorre o kit. O bumbo, no fim de cada grupo, funciona como um ponto final que dá peso à frase.'
      ],
      steps: [
        'Fale "um dois três quatro bum" a cada grupo enquanto toca a 50 bpm.',
        'Depois fale os tempos ("1 e & a") e note onde cai cada acento.',
        'Toque o compasso de virada em loop antes de encaixar no groove.',
        'Na versão pelos tons, toque primeiro só na caixa e depois espalhe.',
        'Na quintina, comece com o clique em todas as notas (subdivisão) a 50 bpm.'
      ],
      mistakes: [
        'Corrigir o grupo sem perceber e voltar para quatro notas. Correção: fale os números do grupo em voz alta e não pule o bumbo.',
        'Atrasar o prato do 1 porque a frase terminou "estranha". Correção: a última semicolcheia é pausa; use ela para preparar a mão direita para o prato.',
        'Na quintina, as notas ficam desiguais e viram semicolcheias com uma sobrando. Correção: diminua o andamento e fale "hi-po-pó-ta-mo" em cada tempo para sentir as cinco sílabas iguais.'
      ],
      tips: [
        'Grupos de cinco também funcionam em groove: experimente o bumbo de cinco em cinco semicolcheias com o chimbal normal por cima.',
        'Combine: dois grupos de cinco e um de seis fecham 16 notas, outra forma de completar o compasso.'
      ],
      ex: [
        { id: 'vir-7a', name: 'D E D E B no compasso', desc: 'Três grupos D E D E B na caixa e no bumbo, com acento no começo de cada grupo, e uma pausa na última semicolcheia antes do prato.', bpm: [50, 110], bars: pair({ sn: 'Xxxx -Xxx x-Xx xx--', kd: '---- x--- -x-- --x-', st: 'DEDE BDED EBDE DEB-' }) },
        { id: 'vir-7b', name: 'Grupos de cinco descendo o kit', desc: 'A mesma frase, mas cada grupo num tambor: tom 1, tom 2 e surdo, com o bumbo fechando cada grupo.', bpm: [50, 105], bars: pair({ t1: 'Xxxx ---- ---- ----', t2: '---- -Xxx x--- ----', ft: '---- ---- --Xx xx--', kd: '---- x--- -x-- --x-', st: 'DEDE BDED EBDE DEB-' }) },
        { id: 'vir-7c', name: 'D E D E B em quintinas', desc: 'Um compasso de groove e um de quintinas: em cada tempo, quatro notas de mão na caixa e o bumbo na quinta nota.', bpm: [50, 100], click: 'sub', bars: [b4(G.rock16C), b5({ sn: r('Xxxx-', 4), kd: r('----x', 4), st: r('DEDEB', 4) })] }
      ]
    },
    {
      id: 'vir-8',
      name: 'Viradas longas e criação',
      level: 3,
      goal: 'Construir uma virada de dois compassos com começo, meio e fim, e criar as suas próprias viradas.',
      text: [
        'Uma virada de dois compassos é rara, mas quando aparece é um momento importante: a entrada do último refrão, a volta de um solo, o fim de uma música. Ela não pode ser só uma sequência de notas rápidas. Precisa ter forma, como uma frase falada: uma parte que pergunta e outra que responde.',
        'No exemplo desta lição, o primeiro compasso é a pergunta: semicolcheias na caixa com acentos 3-3-2 levados para o surdo e o tom 1. O segundo compasso é a resposta: semicolcheias descendo os tons e um D E B B linear no último tempo, que empurra a chegada no 1. Você está reaproveitando coisas que já estudou (3-3-2, descida pelos tons, linear), e é assim que o vocabulário cresce.',
        'Criar viradas é um hábito, não um dom. O caminho mais simples é partir de um exemplo e mudar uma coisa de cada vez: o tambor, a manulação, o ponto de partida, o final. Depois de algumas semanas fazendo isso, você terá um repertório próprio e vai parar de cair sempre nas mesmas viradas.',
        'Uma regra vale para qualquer criação: se você não consegue tocar a virada dez vezes seguidas no andamento da música, ela ainda não é sua. Guarde para estudar e use no palco só o que sai sempre.'
      ],
      steps: [
        'Toque cada compasso da virada longa separado, em loop, a 55 bpm.',
        'Junte os dois compassos de virada e só depois coloque o groove antes.',
        'Na virada criada, toque o exemplo até ficar confortável.',
        'Crie três variações seguindo as instruções e escreva cada uma (pode ser no caderno, na forma da grade).',
        'Toque as três variações em sequência, uma a cada quatro compassos, sem parar.'
      ],
      mistakes: [
        'A virada longa perde a forma e vira um amontoado de notas. Correção: cante a frase antes de tocar e destaque os acentos.',
        'Criar viradas sempre no mesmo andamento lento e travar quando a música é rápida. Correção: teste cada criação a 70, 90 e 110 bpm.',
        'Mudar tudo de uma vez e não conseguir tocar. Correção: mude só um elemento por variação.'
      ],
      tips: [
        'Grave suas variações. Ouvir de fora mostra quais funcionam musicalmente e quais só são difíceis.',
        'Toda virada nova deve ser testada dentro de uma música, não só no estudo.'
      ],
      ex: [
        { id: 'vir-8a', name: 'Virada de dois compassos', desc: 'Dois compassos de groove e dois de virada. No primeiro, semicolcheias com acentos 3-3-2 no surdo e no tom 1. No segundo, tons descendo e D E B B no último tempo.', bpm: [55, 110], bars: [
          b4(G.rock16C), b4(G.rock16),
          b4({ ft: 'X--- --X- X--- --X-', t1: '---X ---- ---X ----', sn: '-xx- xx-x -xx- xx-x', kd: 'x--- ---- ---- ----', st: r('DEDE', 4) }),
          b4({ t1: 'xxxx ---- ---- ----', t2: '---- xxxx ---- ----', ft: '---- ---- xxxx x---', sn: '---- ---- ---- -x--', kd: '---- ---- ---- --xx', st: 'DEDE DEDE DEDE DEBB' })] },
        { id: 'vir-8b', name: 'Crie sua virada', desc: 'Exemplo: no tempo 3, D E B B (tom 1, caixa, bumbo, bumbo); no tempo 4, D D E E (surdo, surdo, caixa, caixa). Depois crie três versões: troque os tambores, comece no tempo 2 ou no "&" do 3, e termine com prato antecipado no "&" do 4. Registre o BPM de cada uma.', bpm: [60, 110], bars: pair({ hh: 'x-x- x-x- ---- ----', sn: '---- X--- -x-- --xx', t1: '---- ---- x--- ----', ft: '---- ---- ---- xx--', kd: 'x--- ---- --xx ----', st: '---- ---- DEBB DDEE' }) }
      ]
    }
  ]
};
