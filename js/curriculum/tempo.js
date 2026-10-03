import { b2, b4, b6, r, G } from './helpers.js';

export default {
  id: 'tempo',
  name: 'Tempo e controle',
  desc: 'Clique no 2 e no 4, clique que some, dinâmica, clique deslocado, andamento lento e posição no tempo. O que separa amador de profissional.',
  lessons: [
    {
      id: 'tempo-1',
      name: 'Clique no 2 e no 4',
      level: 1,
      goal: 'Sentir o backbeat e sustentar o 1 e o 3 sozinho.',
      text: [
        'Com o metrônomo batendo os quatro tempos, é fácil se apoiar nele e esquecer o próprio tempo. Quando o clique toca só no 2 e no 4, ele vira um parceiro: marca onde a caixa cai e deixa o 1 e o 3 por sua conta. É como tocar com uma igreja batendo palmas no 2 e no 4, algo que todo baterista de louvor conhece bem.',
        'No começo a sensação é estranha. Muita gente ouve o clique como se fosse o 1 e o 3 e acaba tocando o groove deslocado. Para evitar isso, ligue o metrônomo, conte "1, 2, 3, 4" em voz alta, falando o 2 e o 4 junto com o clique, e só então entre com o groove. A caixa tem que cair tão colada no clique que você quase deixa de ouvi-lo.',
        'O corpo ajuda. Balance a cabeça ou o tronco no pulso, ou bata o calcanhar esquerdo no 1 e no 3 nas primeiras vezes. Tempo bom não está só nas mãos: ele vem de um pulso que o corpo inteiro sente.',
        'Por que isso importa: o backbeat é a espinha dorsal do rock, do pop, do gospel e do louvor. Bateristas com tempo sólido sentem o 2 e o 4 como o centro do groove. Treinar com esse clique faz o seu groove assentar e prepara você para tocar com banda, quando o tempo depende de você e não de um fone.'
      ],
      steps: [
        'Metrônomo a 60 bpm com clique no 2 e no 4. Conte em voz alta por dois compassos antes de começar.',
        'Toque o rock básico até a caixa sumir dentro do clique.',
        'Passe para o groove com bumbo sincopado. Ele não tem bumbo no 3, então o 3 fica todo por sua conta.',
        'Suba de 5 em 5 bpm, tocando pelo menos dois minutos sem parar em cada andamento.',
        'Meta: 120 bpm nos dois grooves, com a caixa colada no clique.'
      ],
      mistakes: [
        'Ouvir o clique como 1 e 3 e entrar deslocado. Correção: conte "1, 2, 3, 4" em voz alta, com o 2 e o 4 junto do clique, antes de tocar.',
        'Caixa adiantada em relação ao clique. Correção: relaxe e deixe a caixa cair no clique, em vez de correr atrás dele.',
        'O bumbo sincopado empurra o tempo para a frente. Correção: toque só bumbo e caixa com o clique até o bumbo no "e" ficar no lugar.'
      ],
      tips: [
        'Marque o 1 com o calcanhar no começo, se precisar.',
        'Use esse clique também para estudar as músicas que você toca na igreja ou na banda.',
        'Se você se perder, pare, conte em voz alta de novo e recomece. Não tente "achar" o tempo tocando.'
      ],
      ex: [
        { id: 'tempo-1a', name: 'Groove com clique no 2 e 4', desc: 'Rock básico em colcheias com o clique só nos tempos 2 e 4.', bpm: [60, 120], click: 'backbeat', bars: [b2(G.rock8)] },
        { id: 'tempo-1b', name: 'Bumbo sincopado com clique no 2 e 4', desc: 'Groove com bumbo no 1, no "e" do 2 e no "e" do 3: nenhuma nota no 3 para se apoiar.', bpm: [60, 120], click: 'backbeat', bars: [b2({ hh: 'xx xx xx xx', sn: '-- X- -- X-', kd: 'x- -x -x --' })] }
      ]
    },
    {
      id: 'tempo-2',
      name: 'Clique que some',
      level: 2,
      goal: 'Manter o tempo sem ajuda e voltar junto com o clique.',
      text: [
        'Neste exercício, o clique toca alguns compassos e some em outros. Você continua tocando e confere se volta exatamente junto quando ele reaparece. É um dos melhores testes de tempo interno, porque mostra a verdade: com o clique o tempo todo, você corrige sem perceber; sem ele, aparece a sua tendência natural.',
        'Nos compassos sem clique, a bateria de exemplo também fica muda. Quem segura o tempo é você. Quando o clique voltar, preste atenção: se ele aparece depois da sua nota, você acelerou; se aparece antes, você atrasou. Anote a sua tendência, porque ela costuma se repetir. Muita gente acelera em andamentos lentos e em momentos de empolgação, e atrasa em andamentos rápidos e em trechos difíceis.',
        'O segredo é não tocar esperando o clique voltar. Mantenha o corpo em movimento, conte por dentro e pense na música, não no metrônomo. Tempo interno é feito de subdivisão: quem sente as colcheias ou as semicolcheias entre os tempos tem muito mais precisão do que quem só sente os tempos.',
        'Na prática, isso é o que acontece num culto ou num show quando o retorno some, quando a banda para e só a bateria continua, ou quando você precisa puxar a próxima música sem metrônomo. O baterista com tempo interno firme é aquele em quem a banda confia.'
      ],
      steps: [
        'Dois com clique, dois sem, a 70 bpm. Repita até voltar junto com o clique quatro vezes seguidas.',
        'Um com clique, três sem, no mesmo andamento.',
        'Quatro com clique, quatro sem, com o groove de semicolcheias a 60 bpm. Andamento mais lento e mais tempo sozinho deixam tudo mais difícil.',
        'Suba de 5 em 5 bpm, mas teste também andamentos lentos, onde a tendência de acelerar aparece mais.',
        'Grave alguns minutos e ouça onde você ganha ou perde tempo.'
      ],
      mistakes: [
        'Voltar adiantado. Correção: você acelera sozinho; foque nas subdivisões e solte o corpo nos compassos sem clique.',
        'Voltar atrasado. Correção: você arrasta; mantenha a energia e marque as colcheias com a cabeça ou com o pé do chimbal.',
        'Mudar o groove ou o volume quando o clique some. Correção: toque exatamente igual, como se o clique estivesse lá.'
      ],
      tips: [
        'Se voltar adiantado, você acelera sozinho. Se voltar atrasado, você arrasta.',
        'Cante a subdivisão por dentro: "1 e 2 e" ou "1 e & a".',
        'Faça o mesmo teste nas músicas do seu repertório, tirando o metrônomo em algumas partes.'
      ],
      ex: [
        { id: 'tempo-2a', name: 'Dois com clique, dois sem', desc: 'Rock básico com o clique sumindo a cada dois compassos.', bpm: [70, 120], gap: { play: 2, mute: 2 }, bars: [b2(G.rock8)] },
        { id: 'tempo-2b', name: 'Um com clique, três sem', desc: 'Rock básico com só um compasso de clique a cada quatro.', bpm: [70, 120], gap: { play: 1, mute: 3 }, bars: [b2(G.rock8)] },
        {
          id: 'tempo-2c', name: 'Quatro com clique, quatro sem', desc: 'Frase de quatro compassos em semicolcheias: uma vez com clique e outra sozinho.', bpm: [60, 100], gap: { play: 4, mute: 4 },
          bars: [b4(G.rock16C), b4(G.rock16), b4(G.rock16), b4({ ...G.rock16, kd: 'x--- ---- x-x- ---x' })]
        }
      ]
    },
    {
      id: 'tempo-3',
      name: 'Dinâmica',
      level: 2,
      goal: 'Tocar do muito baixo ao muito forte sem mudar o andamento.',
      text: [
        'Quem toca sempre no mesmo volume soa amador, por melhor que seja o tempo e a técnica. Dinâmica é a variação de intensidade: tocar baixo no verso, crescer na ponte, explodir no refrão e voltar. No louvor isso é ainda mais evidente, porque a música respira junto com a igreja, e o baterista é quem conduz essa respiração.',
        'A dinâmica vem da altura da baqueta, não da força. No pianíssimo, as baquetas ficam a 2 ou 3 cm da pele, soltas. No fortíssimo, sobem para 30 cm ou mais e continuam soltas: o peso vem do braço caindo, e não do aperto. Bumbo e chimbal seguem a mesma lógica, com menos curso do pé no baixo e mais no forte.',
        'O problema clássico é acelerar no forte e atrasar no fraco. Quando você toca forte, a adrenalina empurra o tempo para a frente; quando toca baixo, a insegurança segura. O clique denuncia. Treinar dinâmica com o metrônomo ligado ensina o corpo a separar volume de andamento.',
        'Nos exercícios, a sextina na caixa trabalha só as mãos, em quatro níveis. Depois o groove completo faz um crescendo de quatro compassos, do quase nada ao forte, com chimbal, caixa e bumbo crescendo juntos. Na grade, "g" é a nota fantasma (muito baixa), "x" é a nota normal e "X" é o acento.'
      ],
      steps: [
        'Dinâmica em sextinas a 50 bpm: baixo, médio, forte, médio. Um compasso de cada, sem mudar o andamento.',
        'Grave e ouça: os níveis precisam ser bem diferentes entre si.',
        'No groove do pianíssimo ao fortíssimo, comece a 60 bpm. No primeiro compasso, as baquetas quase não saem da pele.',
        'Confira com o clique se o quarto compasso, o mais forte, não ficou adiantado.',
        'Suba de 5 em 5 bpm. Depois aplique a ideia nas músicas que você toca: verso baixo, refrão forte.'
      ],
      mistakes: [
        'Acelerar no forte. Correção: pense em peso, não em velocidade; deixe o braço cair com calma.',
        'Atrasar ou perder notas no baixo. Correção: notas baixas continuam firmes; diminua a altura, não a intenção.',
        'Apertar a baqueta para tocar forte. Correção: mais altura, mesma soltura.',
        'Só as mãos mudam de volume. Correção: bumbo e chimbal acompanham a dinâmica das mãos.'
      ],
      tips: [
        'No fraco, baqueta baixa e sem apertar. No forte, baqueta alta, ainda solta.',
        'Na música, o baixo bem tocado faz o forte parecer maior. Não tenha medo de tocar realmente baixo.',
        'Em lugares pequenos, rods ajudam, mas treine o controle com as baquetas normais.'
      ],
      ex: [
        {
          id: 'tempo-3a', name: 'Dinâmica em sextinas', desc: 'Baixo, médio, forte, médio. Um compasso de cada, com o mesmo andamento.', bpm: [50, 100], pad: true,
          bars: [b6({ sn: r('gggggg', 4), st: r('DEDEDE', 4) }), b6({ sn: r('xxxxxx', 4), st: r('DEDEDE', 4) }), b6({ sn: r('XXXXXX', 4), st: r('DEDEDE', 4) }), b6({ sn: r('xxxxxx', 4), st: r('DEDEDE', 4) })]
        },
        {
          id: 'tempo-3b', name: 'Groove do pianíssimo ao fortíssimo', desc: 'Quatro compassos de rock em colcheias crescendo do quase nada ao forte, com chimbal, caixa e bumbo juntos.', bpm: [60, 110],
          bars: [
            b2({ hh: 'gg gg gg gg', sn: '-- g- -- g-', kd: 'g- -- gg --' }),
            b2({ hh: 'xg xg xg xg', sn: '-- x- -- x-', kd: 'x- -- xx --' }),
            b2({ hh: 'xx xx xx xx', sn: '-- X- -- X-', kd: 'x- -- xx --' }),
            b2({ cr: 'X- -- -- --', hh: '-X XX XX XX', sn: '-- X- -- X-', kd: 'X- -- XX --' })
          ]
        }
      ]
    },
    {
      id: 'tempo-4',
      name: 'Clique no contratempo e só no 1',
      level: 3,
      goal: 'Manter o groove firme com o clique em lugares que não ajudam.',
      text: [
        'Depois do 2 e do 4, dá para tirar ainda mais apoio. Com o clique no contratempo, ele soa no "e" de cada tempo, entre os tempos do groove. Com o clique só no 1, ele aparece uma vez por compasso e você atravessa três tempos sozinho. Os dois exercícios testam a mesma coisa: se o seu pulso interno é firme o bastante para não depender de onde o clique está.',
        'O clique no contratempo é desconfortável no começo, porque o ouvido quer transformá-lo em tempo. Se isso acontecer, o groove vira de cabeça para baixo e a caixa passa a cair no lugar errado. Para entrar certo, conte "1 e 2 e" em voz alta, encaixando o "e" no clique, e só então comece. Quando der certo, o clique soa como um chimbal aberto no contratempo, aquela sensação comum em muita música pop e dance.',
        'Com o clique só no 1, o desafio é a continuidade: a frase inteira do compasso precisa estar dentro de você. O clique vira um ponto de checagem. Se ele cai depois do seu 1, você acelerou durante o compasso; se cai antes, você atrasou.',
        'Esses exercícios parecem capricho, mas são situações reais de palco: o violão marcando o contratempo, o baixista tocando sincopado, a banda que some numa parte e volta no 1. Quem treina com o clique em lugares difíceis toca tranquilo em qualquer situação.'
      ],
      steps: [
        'Clique no contratempo a 60 bpm: conte "1 e 2 e" com o "e" no clique por dois compassos e entre com o rock básico.',
        'Se o groove virar, pare, conte de novo e recomece. Não tente consertar tocando.',
        'Clique só no 1 a 70 bpm, com o groove de dois compassos em semicolcheias.',
        'Suba de 5 em 5 bpm no contratempo. No clique só no 1, teste também andamentos mais lentos: eles são mais difíceis.',
        'Metas: 120 bpm no contratempo e 110 no clique só no 1, sem perder o lugar.'
      ],
      mistakes: [
        'Ouvir o clique do contratempo como tempo e virar o groove. Correção: conte em voz alta e coloque a palavra "e" em cima do clique.',
        'Tocar mais forte e rígido para segurar o tempo. Correção: tempo firme vem do corpo solto; balance no pulso.',
        'Com o clique só no 1, ficar esperando o clique em vez de tocar. Correção: pense no compasso inteiro como uma frase e trate o clique como confirmação, não como guia.'
      ],
      tips: [
        'No contratempo, imagine o clique como um chimbal aberto ou uma palhetada de violão no "e".',
        'Marque o tempo com o pé do chimbal nos dois exercícios, se precisar.',
        'Grave e ouça: o groove tem que soar igual ao que soaria com o clique nos quatro tempos.'
      ],
      ex: [
        { id: 'tempo-4a', name: 'Clique no contratempo', desc: 'Rock básico com o clique só no "e" de cada tempo.', bpm: [60, 120], click: 'offbeat', bars: [b2(G.rock8)] },
        { id: 'tempo-4b', name: 'Clique só no 1', desc: 'Groove de dois compassos em semicolcheias com o clique só no primeiro tempo de cada compasso.', bpm: [70, 110], click: 'one', bars: [b4(G.rock16C), b4({ ...G.rock16, kd: 'x--- --x- x-x- ----' })] }
      ]
    },
    {
      id: 'tempo-5',
      name: 'Andamento lento e posição no tempo',
      level: 3,
      goal: 'Segurar grooves muito lentos e escolher se o groove fica na frente, no meio ou atrás do tempo.',
      text: [
        'Andamento lento é onde o tempo de verdade aparece. A 120 bpm as notas estão próximas e uma apoia a outra; a 50 bpm há um espaço enorme entre elas, e a tendência é correr para preencher o vazio. Baladas e momentos de adoração estão cheios desses andamentos, e um groove lento firme é uma das coisas mais difíceis e mais valorizadas num baterista.',
        'O segredo no lento é subdividir. Sinta as semicolcheias entre cada nota, mesmo sem tocá-las. Deixe as notas soarem até o fim e mova o corpo devagar, acompanhando o espaço. As notas também precisam de peso: um backbeat cheio, de braço solto, sustenta o andamento melhor que um toque curto e nervoso.',
        'Além de estar no tempo, um baterista profissional escolhe onde fica dentro dele. Tocar na frente do tempo, ou em cima, é colocar as notas na parte da frente do pulso, sem acelerar: o groove soa urgente e cheio de energia, bom para rock rápido e músicas animadas. Tocar atrás do tempo é colocar as notas na parte de trás do pulso, sem atrasar: o groove soa relaxado, pesado e largo, como em muito soul, gospel, R&B e rock pesado lento.',
        'A diferença é de poucos milésimos de segundo e não aparece na grade: o metrônomo continua o mesmo. Para treinar, toque o groove ouvindo o clique em três posições. No meio, o clique some dentro da caixa. Na frente, você ouve a caixa um fio antes do clique. Atrás, o clique aparece um fio antes da caixa. Tudo isso sem mudar o andamento: se você acelerar ou atrasar de verdade, o clique se afasta cada vez mais.',
        'Qual posição é a certa depende da música e da banda, e principalmente do baixista, que precisa estar no mesmo lugar que você. O importante é conseguir escolher, em vez de cair numa posição por acaso.'
      ],
      steps: [
        'Groove a 50 bpm: conte as semicolcheias em voz alta por dois compassos antes de começar e toque cinco minutos sem parar.',
        'Grave e confira se você não acelerou ao longo dos cinco minutos. Depois alterne entre 50 e 60 bpm.',
        'Na frente do tempo a 100 bpm: toque primeiro no meio do clique e depois tente ouvir a caixa um fio antes dele, sem acelerar.',
        'Atrás do tempo a 70 bpm: agora o clique aparece um fio antes da caixa. Ouça se o andamento continua estável.',
        'Alterne as três posições a cada quatro compassos. Suba e desça o andamento de 5 em 5 bpm.'
      ],
      mistakes: [
        'Correr no andamento lento para fugir do espaço. Correção: subdivida em voz alta e deixe cada nota soar até o fim.',
        'Confundir tocar na frente com acelerar. Correção: o clique não pode se afastar; se ele se afasta compasso a compasso, você está acelerando.',
        'Confundir tocar atrás com atrasar. Correção: a mesma regra; a distância até o clique é pequena e constante.',
        'Notas fracas e curtas no lento. Correção: braço solto e notas cheias, com peso.'
      ],
      tips: [
        'No lento, mova o corpo em semicolcheias: a cabeça ou o pé do chimbal ajudam a preencher o espaço.',
        'Converse com o baixista da sua banda sobre onde vocês dois colocam o tempo.',
        'Grave os três jeitos e ouça sem o clique: a diferença de sensação fica clara.'
      ],
      listen: [
        'When the Levee Breaks — Led Zeppelin (groove lento e pesado de John Bonham, com muito espaço entre as notas)',
        'Back in Black — AC/DC (rock em colcheias sólido e sem pressa: repare como o groove assenta)'
      ],
      ex: [
        { id: 'tempo-5a', name: 'Groove a 50 bpm', desc: 'Groove de balada com chimbal em colcheias e muito espaço entre as notas. O desafio é o 50: subdivida e não corra.', bpm: [50, 60], bars: [b4(G.rock16C), b4({ ...G.rock16, kd: 'x--- ---x x--- ----' })] },
        { id: 'tempo-5b', name: 'Na frente do tempo', desc: 'Rock em colcheias com acento no chimbal, tocado na parte da frente do clique, sem acelerar.', bpm: [80, 150], bars: [b2({ hh: 'Xx Xx Xx Xx', sn: '-- X- -- X-', kd: 'x- -x x- --' })] },
        { id: 'tempo-5c', name: 'Atrás do tempo', desc: 'Groove com ghost notes tocado na parte de trás do clique, largo e relaxado, sem atrasar.', bpm: [60, 100], bars: [b4({ hh: 'x-x- x-x- x-x- x-x-', sn: '---- X--g -g-- X--g', kd: 'x--- ---- x-x- ----' })] }
      ]
    }
  ]
};
