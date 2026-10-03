import { r, b2, b4 } from './helpers.js';

export default {
  id: 'pes',
  name: 'Pedal simples e chimbal com o pé',
  desc: 'Calcanhar apoiado e levantado, chimbal tocado com o pé, abertura do chimbal e duplas rápidas num pedal só.',
  lessons: [
    {
      id: 'pes-1',
      name: 'Calcanhar apoiado e calcanhar levantado',
      level: 1,
      goal: 'Tocar o bumbo com as duas técnicas, sabendo quando usar cada uma, e aguentar tocar por minutos sem cansar.',
      text: [
        'Existem duas formas principais de tocar o bumbo. Com o calcanhar apoiado (heel down), o calcanhar fica na plataforma e o movimento vem do tornozelo, como quem bate o pé no chão acompanhando uma música. Com o calcanhar levantado (heel up), o calcanhar fica no ar, o peso da perna cai sobre a parte da frente do pé e o movimento vem da coxa, com o tornozelo completando.',
        'Calcanhar apoiado dá controle e volume baixo. É a técnica das partes suaves do louvor, das baladas e de qualquer momento em que o bumbo precisa ser macio. Ela também facilita deixar a batedeira voltar e ficar longe da pele depois da nota, o que deixa o bumbo soar aberto e cheio.',
        'Calcanhar levantado dá força e resistência para tocar alto por muito tempo. É o padrão no rock, no metal e na maioria dos cultos com banda cheia. Como usa músculos maiores, cansa menos em volume alto, mas exige equilíbrio no banco: se você usa a perna direita para se apoiar, ela não fica livre para tocar.',
        'Um baterista completo usa as duas e troca entre elas dentro da mesma música. Comece a balada com o calcanhar apoiado e, quando a banda crescer, levante o calcanhar. Os exercícios desta lição treinam cada técnica separada e depois a resistência, que é o que permite tocar um culto ou um show inteiro sem a perna "morrer" no meio.'
      ],
      steps: [
        'Ajuste o banco: com o pé na plataforma, a coxa fica levemente inclinada para baixo e o joelho um pouco à frente do tornozelo.',
        'Calcanhar apoiado: toque as semínimas e as colcheias bem baixo, deixando a batedeira voltar sozinha. Clique a 60 bpm.',
        'Calcanhar levantado: toque colcheias com acento no tempo, sentindo o peso da perna cair na nota acentuada.',
        'Alterne um minuto de cada técnica sem parar o clique, para treinar a troca no meio da música.',
        'Resistência: toque o groove com colcheias no bumbo por 2 minutos. Se a canela ou a panturrilha queimarem, diminua o andamento antes de parar.'
      ],
      mistakes: [
        'Enterrar a batedeira na pele em toda nota. Correção: deixe a batedeira voltar. Enterrar abafa o som e trava o tornozelo; só faça isso quando quiser um som curto de propósito.',
        'Tocar de calcanhar levantado com a perna dura, empurrando com o joelho. Correção: deixe a perna cair com o próprio peso e use o tornozelo só para finalizar o movimento.',
        'Banco baixo demais, que obriga o calcanhar apoiado o tempo todo e cansa a canela. Correção: suba o banco até a coxa ficar levemente inclinada para baixo.',
        'Usar a perna direita como apoio do corpo. Correção: distribua o peso entre o banco e o pé esquerdo, que fica no pedal do chimbal.'
      ],
      tips: [
        'No calcanhar levantado, toque com a parte da frente do pé perto do meio da plataforma. Mais para cima dá mais força; mais para baixo dá mais controle.',
        'Tênis de sola fina ajudam a sentir o pedal. Botas e solados grossos escondem o que o pé está fazendo.',
        'Comece com a mola do pedal numa tensão média. Mola muito frouxa obriga você a puxar a batedeira; mola muito dura cansa a perna.'
      ],
      ex: [
        { id: 'pes-1a', name: 'Calcanhar apoiado', desc: 'Um compasso de semínimas e um de colcheias, com o calcanhar na plataforma e volume baixo e controlado.', bpm: [60, 120], stl: 'Pés', bars: [b2({ kd: 'x- x- x- x-', st: 'D- D- D- D-' }), b2({ kd: 'xx xx xx xx', st: r('DD', 4) })] },
        { id: 'pes-1b', name: 'Calcanhar levantado com acento', desc: 'Colcheias com o calcanhar no ar e acento em cada tempo. A nota acentuada usa o peso da perna.', bpm: [60, 150], stl: 'Pés', bars: [b2({ kd: r('Xx', 4), st: r('DD', 4) })] },
        { id: 'pes-1c', name: 'Resistência: colcheias no bumbo', desc: 'Chimbal nas semínimas, caixa no 2 e no 4 e bumbo em todas as colcheias por 2 minutos, sem parar.', bpm: [60, 140], endurance: 2, bars: [b2({ hh: 'x- x- x- x-', sn: '-- X- -- X-', kd: r('xx', 4) })] }
      ]
    },
    {
      id: 'pes-2',
      name: 'Chimbal com o pé',
      level: 2,
      goal: 'Tocar o chimbal com o pé esquerdo no 2 e 4, nas semínimas e no contratempo, sem que ele copie o resto do corpo.',
      text: [
        'O pé esquerdo não serve só para deixar o chimbal fechado. Tocando o pedal do chimbal no tempo certo, ele vira mais um instrumento: o "chick" (o som curto dos pratos do chimbal se fechando) marca o tempo, preenche espaços e dá firmeza ao groove, principalmente quando a mão direita está no prato de condução.',
        'Um movimento muito usado é o de gangorra: a ponta do pé desce e fecha o chimbal na nota, e o calcanhar desce entre uma nota e outra, sem som, como se o pé balançasse marcando a subdivisão. Também dá para tocar só com a ponta, com o calcanhar no ar. O importante é que o chick seja curto, firme e sempre no mesmo volume.',
        'Cada lugar tem uma função. No 2 e no 4, o pé reforça a caixa, como no jazz e em muita música de louvor. Nas semínimas, ele vira um metrônomo interno, ótimo para segurar o tempo. No contratempo, ele cria movimento e deixa uma levada simples na condução bem mais dançante.',
        'Isso é independência aplicada: as mãos e o pé direito fazem o groove, e o pé esquerdo mantém um padrão fixo por baixo. No começo o pé esquerdo tende a copiar o direito ou a se perder quando as mãos mudam. Por isso os exercícios começam com grooves simples e terminam com um padrão de mãos mais ativo por cima do pé.'
      ],
      steps: [
        'Sem as mãos, toque só os pés do exercício (bumbo e chimbal com o pé) por 4 compassos, com o clique.',
        'Entre com as mãos e mantenha o pé esquerdo exatamente igual. Se ele mudar, volte só para os pés.',
        'Grave e ouça: o chick tem que soar claro, curto e com o mesmo volume em todos os compassos.',
        'Em "Chimbal de pé sob as mãos", toque primeiro o compasso com o pé nas semínimas, depois o do contratempo, e só então os dois seguidos.',
        'Fique entre 60 e 80 bpm até o pé esquerdo funcionar sem você precisar pensar nele.'
      ],
      mistakes: [
        'O pé esquerdo copiar o direito e tocar junto com o bumbo. Correção: toque só os dois pés, devagar, falando em voz alta onde cada um cai.',
        'Chick fraco ou chiado, porque o pé não fecha o chimbal por inteiro. Correção: ajuste a distância entre os pratos (uns 2 cm) e pise com firmeza, sem esmagar.',
        'O pé esquerdo sumir quando as mãos fazem algo mais difícil. Correção: diminua o andamento até o pé ficar automático e só então suba.',
        'Perna esquerda tensa de tanto apertar o pedal entre as notas. Correção: entre um chick e outro, deixe o pé apenas apoiado, sem força.'
      ],
      tips: [
        'Quando estudar no pad, marque o tempo com o pé esquerdo. São horas extras de treino sem gastar tempo nenhum.',
        'Ajuste a mola do pedal do chimbal para o pé subir sozinho, sem esforço.',
        'O chick no 2 e 4 debaixo da condução é um dos jeitos mais simples de deixar uma levada de louvor mais firme.'
      ],
      ex: [
        { id: 'pes-2a', name: 'Pé esquerdo no 2 e no 4', desc: 'Condução em colcheias, bumbo no 1 e no 3, caixa e chimbal com o pé juntos no 2 e no 4.', bpm: [60, 140], bars: [b2({ rd: r('xx', 4), sn: '-- X- -- X-', kd: 'x- -- x- --', hp: '-- x- -- x-' })] },
        { id: 'pes-2b', name: 'Pé esquerdo nas semínimas', desc: 'O mesmo groove com o chimbal de pé em todos os tempos, junto com o bumbo no 1 e no 3.', bpm: [60, 140], bars: [b2({ rd: r('xx', 4), sn: '-- X- -- X-', kd: 'x- -- xx --', hp: 'x- x- x- x-' })] },
        { id: 'pes-2c', name: 'Pé esquerdo no contratempo', desc: 'Condução nas semínimas e o chick do pé entre elas, no "e" de cada tempo.', bpm: [60, 140], bars: [b2({ rd: 'x- x- x- x-', sn: '-- X- -- X-', kd: 'x- -- x- --', hp: '-x -x -x -x' })] },
        {
          id: 'pes-2d', name: 'Chimbal de pé sob as mãos', desc: 'Paradiddles na caixa com acento no início de cada grupo. Um compasso com o pé nas semínimas e outro com o pé no contratempo.', bpm: [50, 110], bars: [
            b4({ sn: 'Xxxx Xxxx Xxxx Xxxx', st: 'DEDD EDEE DEDD EDEE', hp: 'x--- x--- x--- x---' }),
            b4({ sn: 'Xxxx Xxxx Xxxx Xxxx', st: 'DEDD EDEE DEDD EDEE', hp: '--x- --x- --x- --x-' })
          ]
        }
      ]
    },
    {
      id: 'pes-3',
      name: 'Chimbal aberto e fechado',
      level: 2,
      goal: 'Coordenar a mão e o pé esquerdo para abrir o chimbal no lugar certo e fechar exatamente no tempo.',
      text: [
        'Abrir e fechar o chimbal é uma coordenação entre a mão, que toca, e o pé esquerdo, que controla o quanto os pratos se tocam. Na grade, "o" no chimbal significa que a mão toca com o chimbal aberto. A nota de chimbal com o pé que vem logo depois é o pé fechando, e é ela que corta o "tsss" aberto com um chick.',
        'O segredo está no tempo do pé. Ele sobe um pouco antes da nota aberta e desce exatamente na nota seguinte, que é quando o chimbal volta a ficar fechado. Se o pé desce cedo, a abertura fica curta e sem brilho; se desce tarde, o chimbal fica "lavando" por cima do resto do groove.',
        'O pé não precisa subir muito: um ou dois centímetros já abrem o chimbal. Abrir demais deixa o som desleixado e torna difícil fechar no tempo. Treine a abertura sempre do mesmo tamanho, para o som ser previsível em qualquer andamento.',
        'Na música, abrir em todo contratempo é a base da disco e de muito pop dançante. Abrir só no "&" do 2 e do 4 é um clássico do rock. A abertura curta no "a" dá um impulso para o tempo seguinte. Existe ainda o splash com o pé: pisar e soltar rápido para o chimbal soar aberto por um instante, sem a mão. Ele é muito usado em partes leves de louvor e você pode experimentá-lo no lugar dos chicks da lição anterior.'
      ],
      steps: [
        'Sem as mãos, faça o pé subir no contratempo e descer no tempo, junto com o clique a 70 bpm.',
        'Coloque a mão direita em colcheias no chimbal, ainda sem bumbo e caixa, até o aberto e o fechado ficarem regulares.',
        'Entre com o bumbo e a caixa do exercício "Abertura em todo contratempo".',
        'Passe para a abertura no "&" do 2 e do 4 e depois para a abertura curta no "a".',
        'Grave e ouça se todas as aberturas têm o mesmo tamanho e se o chimbal fecha exatamente no tempo.'
      ],
      mistakes: [
        'Abrir o chimbal demais. Correção: levante só a ponta do pé, um ou dois centímetros. O som fica mais controlado e o fechamento mais fácil.',
        'Fechar atrasado, com o chimbal ainda soando aberto no tempo seguinte. Correção: pense que o pé toca uma nota no tempo, junto com a mão, e não que ele "solta" o chimbal.',
        'O pé direito tocar junto com o esquerdo por contágio. Correção: toque só os dois pés, devagar, antes de juntar as mãos.',
        'Bater mais forte na nota aberta. Correção: o chimbal aberto já soa mais alto. Toque com a mesma força das notas fechadas.'
      ],
      tips: [
        'Uma distância de 1,5 a 2,5 cm entre os pratos do chimbal deixa a abertura fácil de controlar.',
        'Na nota aberta, tocar com o corpo da baqueta na borda do chimbal dá um som mais cheio.',
        'Na disco, deixe o chimbal aberto curto e brilhante: é ele que faz a música dançar.'
      ],
      ex: [
        { id: 'pes-3a', name: 'Abertura em todo contratempo', desc: 'Groove de disco: bumbo nas semínimas, chimbal aberto em todo "e" e fechado com o pé em cada tempo.', bpm: [70, 130], bars: [b2({ hh: r('xo', 4), sn: '-- X- -- X-', kd: 'x- x- x- x-', hp: 'x- x- x- x-' })] },
        { id: 'pes-3b', name: 'Abertura no "&" do 2 e do 4', desc: 'Groove de rock em semicolcheias com o chimbal aberto no "&" do 2 e do 4. O pé fecha no 3 e no 1.', bpm: [60, 130], bars: [b4({ hh: 'x-x- x-o- x-x- x-o-', sn: '---- X--- ---- X---', kd: 'x--- ---- x-x- ----', hp: 'x--- ---- x--- ----' })] },
        { id: 'pes-3c', name: 'Abertura curta no "a"', desc: 'A abertura passa para o "a" do 2 e do 4, logo antes do tempo. Fica bem curta e o pé fecha no 3 e no 1.', bpm: [60, 120], bars: [b4({ hh: 'x-x- x-xo x-x- x-xo', sn: '---- X--- ---- X---', kd: 'x--- ---- x-x- ----', hp: 'x--- ---- x--- ----' })] }
      ]
    },
    {
      id: 'pes-4',
      name: 'Duplas com um pé só',
      level: 3,
      goal: 'Tocar duas semicolcheias seguidas com o mesmo pé, iguais e no tempo, dentro do groove.',
      text: [
        'Tocar duas notas rápidas com um pé só é o que deixa o bumbo de rock, pop e gospel com aquele "tum-tum" ligeiro, sem precisar de pedal duplo. São duas semicolcheias seguidas no mesmo pé, como no tempo e no "e", ou no "a" e no tempo seguinte.',
        'Há duas técnicas principais. No slide (deslize), a primeira nota sai com a parte do meio do pé e, aproveitando o rebote, o pé desliza para a frente da plataforma e toca a segunda. No calcanhar e ponta (heel-toe), o calcanhar desce na primeira nota e a ponta do pé empurra a segunda. Experimente as duas e fique com a que soar mais igual. Muita gente acaba usando um misto delas.',
        'Nas duas técnicas, a segunda nota não vem de um segundo movimento da perna inteira: ela aproveita o rebote da batedeira e um movimento pequeno do tornozelo ou do pé. Se você levantar a perna duas vezes, a dupla nunca vai ficar rápida e você vai cansar muito antes do fim da música.',
        'A dupla mais fácil de encaixar é no "a" e no tempo seguinte, porque a segunda nota cai num lugar forte. A dupla no tempo e no "e" é mais difícil de deixar igual, porque a segunda nota cai entre as notas do chimbal. Os dois desenhos aparecem o tempo todo em grooves de rock, pop e gospel.'
      ],
      steps: [
        'Só os pés, clique a 60 bpm: toque as duplas isoladas com a técnica escolhida. A segunda nota tem que soar igual à primeira.',
        'Grave com o celular perto do bumbo e compare o volume das duas notas de cada dupla.',
        'Coloque as mãos em "Dupla no a e no tempo" sem mudar nada na dupla.',
        'Depois passe para "Dupla no tempo e no e", que é mais difícil de deixar igual.',
        'Suba de 5 em 5 bpm. Acima de 110 bpm, deixe o movimento ficar menor, não mais forte.'
      ],
      mistakes: [
        'Segunda nota fraca ou engolida. Correção: diminua o andamento e pense em tocar a segunda nota um pouco mais forte até elas ficarem iguais.',
        'As duas notas saírem grudadas, como um flam, em vez de duas semicolcheias. Correção: conte "1 e & a" em voz alta com o clique nas subdivisões e encaixe cada nota na sílaba certa.',
        'Canela e coxa tensas depois de poucos minutos. Correção: a dupla é um movimento só com um rebote; se você está fazendo força duas vezes, recomece mais devagar.',
        'O chimbal atrasar ou parar quando o pé faz a dupla. Correção: toque só chimbal e bumbo, sem a caixa, até a mão ficar independente do pé.'
      ],
      tips: [
        'Mola do pedal um pouco mais firme ajuda o rebote da segunda nota.',
        'Batedeira um pouco mais longe da pele dá mais espaço para o movimento, mas exige mais força; ache o meio-termo.',
        'Estude também com o pé esquerdo no chimbal marcando as semínimas: o corpo fica mais estável.'
      ],
      listen: ['Good Times Bad Times — Led Zeppelin (as notas rápidas de bumbo de John Bonham, tocadas com um pedal só)'],
      ex: [
        { id: 'pes-4a', name: 'Duplas isoladas', desc: 'Duas semicolcheias no tempo e no "e", e pausa no resto do tempo. Só o pé direito.', bpm: [60, 140], stl: 'Pés', bars: [b4({ kd: r('xx--', 4), st: r('DD--', 4) })] },
        { id: 'pes-4b', name: 'Dupla no "a" e no tempo', desc: 'Rock em colcheias com duplas de bumbo no "a" do 2 indo para o 3, e no "a" do 4 indo para o 1.', bpm: [60, 130], bars: [b4({ hh: r('x-x-', 4), sn: '---- X--- ---- X---', kd: 'x--- ---x x--- ---x' })] },
        { id: 'pes-4c', name: 'Dupla no tempo e no "e"', desc: 'Rock em colcheias com duplas de bumbo no 1 e "e" e no 3 e "e". A segunda nota cai entre as notas do chimbal.', bpm: [60, 130], bars: [b4({ hh: r('x-x-', 4), sn: '---- X--- ---- X---', kd: 'xx-- ---- xx-- ----' })] }
      ]
    }
  ]
};
