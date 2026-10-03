import { r, b2, b3, b4 } from './helpers.js';

export default {
  id: 'fund',
  name: 'Fundamentos e relaxamento',
  desc: 'Pegada, rebote, os quatro toques, Moeller, dedos e postura. A base que tira a tensão do braço e destrava todo o resto.',
  lessons: [
    {
      id: 'fund-1',
      name: 'Pegada e rebote',
      level: 1,
      goal: 'Segurar a baqueta sem apertar e deixar o rebote fazer metade do trabalho.',
      text: [
        'Quase todo baterista que se sente travado tem o mesmo problema: aperta a baqueta. A pegada começa pelo ponto de apoio, o fulcro, que fica entre o polegar e a primeira falange do indicador, mais ou menos a um terço da ponta de trás da baqueta. O polegar fica de lado, o indicador por baixo, e os outros três dedos só envolvem a baqueta, encostando de leve. Se você soltar o médio, o anelar e o mindinho, a baqueta tem que continuar presa no fulcro sem cair.',
        'Para achar o ponto de equilíbrio, segure a baqueta só com o polegar e o indicador e deixe ela quicar no pad. Vá mudando o ponto de apoio para a frente e para trás. Em um ponto ela quica mais vezes e com mais vida: é ali. As duas mãos usam o mesmo ponto, as palmas ficam viradas mais para baixo do que para dentro, e os cotovelos ficam soltos ao lado do corpo, nem colados nem abertos como asas.',
        'O movimento do toque livre é simples: o pulso joga a baqueta para baixo, ela bate na pele e volta. Você não empurra a baqueta contra a pele e não segura ela lá embaixo. Você acompanha a volta com o pulso, como quem quica uma bola de basquete. Quando você enterra a baqueta, ela para, o som fica abafado e o braço precisa fazer força para levantar de novo. É assim que nasce a tensão, e é por isso que você cansa e trava nos andamentos rápidos.',
        'Tudo o que vem depois neste método depende disso. Rufos, viradas, sextinas, ghost notes e até o pedal duplo seguem a mesma lógica de soltar e aproveitar o rebote. Bateristas que parecem tocar sem esforço não são mais fortes, eles só desperdiçam menos energia. Vale a pena gastar alguns dias só nesta lição, mesmo que ela pareça básica demais para você.'
      ],
      steps: [
        'Sem metrônomo, deixe a baqueta da mão direita quicar sozinha no pad, segurando só com o polegar e o indicador. Encontre o ponto em que ela quica mais e memorize onde fica.',
        'Feche os outros dedos de leve e toque colcheias a 60 bpm com a mão direita por um minuto. A baqueta sai de uns 15 a 20 cm e volta para a mesma altura a cada nota.',
        'Repita com a mão esquerda. Se ela estiver menos solta, dê a ela o dobro do tempo.',
        'Toque o exercício 8 e 8 a 60 bpm. Preste atenção na troca: a primeira nota da esquerda tem que soar igual à última da direita.',
        'Suba de 5 em 5 bpm só quando os dois lados soarem iguais e você não sentir tensão no antebraço. Meta: 120 a 130 bpm, ainda solto.'
      ],
      mistakes: [
        'Apertar a baqueta com todos os dedos: os nós dos dedos ficam brancos e a baqueta não quica. Correção: segure com polegar e indicador e deixe os outros dedos só encostados.',
        'Segurar a baqueta na pele depois do toque: o som fica abafado e o braço trava. Correção: pense em tirar a baqueta da pele, e não em bater nela.',
        'Tocar com o braço inteiro e levantar o ombro. Correção: ombros baixos e soltos; nesta lição quem trabalha é o pulso, o antebraço só acompanha.',
        'Mão esquerda tocando de uma altura diferente da direita. Correção: toque em frente a um espelho e compare as alturas.'
      ],
      tips: [
        'Nós dos dedos brancos significam que você está apertando demais.',
        'Respire durante o exercício. Prender a respiração é um dos primeiros sinais de tensão.',
        'Comece sempre mais devagar do que acha que precisa. Devagar e solto ensina o corpo; rápido e tenso ensina tensão.'
      ],
      ex: [
        { id: 'fund-1a', name: 'Toque livre: mão direita', desc: 'Colcheias só com a direita. A baqueta volta à mesma altura a cada nota.', bpm: [60, 120], pad: true, bars: [b2({ sn: r('xx', 4), st: r('DD', 4) })] },
        { id: 'fund-1b', name: 'Toque livre: mão esquerda', desc: 'O mesmo com a esquerda. Ela precisa soar igual à direita.', bpm: [60, 120], pad: true, bars: [b2({ sn: r('xx', 4), st: r('EE', 4) })] },
        { id: 'fund-1c', name: '8 e 8', desc: 'Oito colcheias com cada mão, sem pausa nem mudança de som na troca.', bpm: [60, 130], pad: true, bars: [b2({ sn: r('xx', 4), st: r('DD', 4) }), b2({ sn: r('xx', 4), st: r('EE', 4) })] }
      ]
    },
    {
      id: 'fund-2',
      name: 'Os quatro toques e os acentos',
      level: 1,
      goal: 'Controlar a altura da baqueta para que acentos e notas baixas soem bem diferentes.',
      text: [
        'Todo acento, toda ghost note e toda virada com dinâmica dependem de quatro movimentos. Toque cheio: a baqueta sai do alto e volta para o alto. Toque para baixo: sai do alto, bate forte e para embaixo, perto da pele. Toque baixo: sai de baixo e fica embaixo. Toque para cima: sai de baixo, bate fraco e já sobe, preparando o próximo acento.',
        'O volume vem da altura, não da força. Um acento sai de 20 a 25 cm da pele; uma nota baixa sai de 2 a 5 cm. Os dois usam o mesmo pulso solto. Se você tenta fazer o acento empurrando mais forte, o braço trava e a nota seguinte sai alta também, porque a mão não teve tempo de descer.',
        'O segredo está no toque para baixo. Depois do acento, a mão não deixa a baqueta voltar lá para cima: ela segura o rebote de leve e para perto da pele. Isso é controle, não aperto. E o toque para cima é uma nota baixa que já leva a mão para o alto, então o próximo acento chega pronto, sem esforço extra.',
        'Quando a sua virada soa "tudo igual", quase sempre falta esse controle de altura. É ele que faz um rudimento simples soar como frase musical, que permite tocar ghost notes num groove de gospel ou dar peso a um acento de prato no rock. Bateristas profissionais têm uma diferença enorme entre a nota mais alta e a mais baixa, e é isso que você vai treinar aqui.'
      ],
      steps: [
        'Antes do metrônomo, faça cada toque isolado com a mão direita: dez toques cheios, dez para baixo, dez baixos e dez para cima. Depois com a esquerda.',
        'No Acento no tempo, comece a 60 bpm. Acento a uns 25 cm, notas baixas a 3 cm. Observe se a mão que acentuou já desce para a nota seguinte.',
        'No Acento móvel, toque cada compasso quatro vezes antes de passar ao próximo. Depois toque os quatro em sequência.',
        'Nos Acentos nas colcheias, uma mão faz só acentos e a outra só notas baixas. Compare o volume das notas baixas das duas mãos.',
        'Grave um minuto e ouça. Se não der para distinguir com clareza o acento do resto, aumente a diferença de altura antes de subir o andamento. Suba de 5 em 5 bpm.'
      ],
      mistakes: [
        'Fazer o acento apertando e empurrando a baqueta. Correção: o acento vem da altura; levante mais e deixe cair com o mesmo pulso solto.',
        'A nota depois do acento sai alta também. Correção: falta o toque para baixo; segure o rebote e pare a baqueta a poucos centímetros da pele.',
        'Notas baixas que vão subindo sem você perceber. Correção: imagine um teto de vidro a 5 cm da pele; as notas baixas não podem bater nele.',
        'Acelerar nos acentos. Correção: metrônomo ligado e contagem em voz alta; o acento não pode chegar antes do tempo.'
      ],
      tips: [
        'Exagere a diferença de altura no começo. Com o tempo ela fica mais natural, mas nunca pequena.',
        'A mão que acabou de acentuar já desce (toque para baixo). A mão que vai acentuar já sobe na nota anterior (toque para cima).',
        'Treine em frente a um espelho para ver as alturas de verdade, e não as que você imagina.'
      ],
      ex: [
        { id: 'fund-2a', name: 'Acento no tempo', desc: 'Semicolcheias alternadas com acento na primeira de cada tempo. A direita alterna toque para baixo e para cima; a esquerda só toca baixo.', bpm: [60, 120], pad: true, bars: [b4({ sn: r('Xxxx', 4), st: r('DEDE', 4) })] },
        {
          id: 'fund-2b', name: 'Acento móvel', desc: 'O acento anda uma nota para a frente a cada compasso e passa pelas duas mãos.', bpm: [60, 110], pad: true,
          bars: [b4({ sn: r('Xxxx', 4), st: r('DEDE', 4) }), b4({ sn: r('xXxx', 4), st: r('DEDE', 4) }), b4({ sn: r('xxXx', 4), st: r('DEDE', 4) }), b4({ sn: r('xxxX', 4), st: r('DEDE', 4) })]
        },
        { id: 'fund-2c', name: 'Acentos nas colcheias', desc: 'Primeiro a direita acentua todas as colcheias enquanto a esquerda toca baixo; no segundo compasso as mãos trocam de papel.', bpm: [60, 120], pad: true, bars: [b4({ sn: r('XxXx', 4), st: r('DEDE', 4) }), b4({ sn: r('xXxX', 4), st: r('DEDE', 4) })] },
        { id: 'fund-2d', name: 'Acentos em pares', desc: 'Dois acentos seguidos, um em cada mão, e duas notas baixas. No segundo compasso o par passa para a segunda metade do tempo.', bpm: [60, 110], pad: true, bars: [b4({ sn: r('XXxx', 4), st: r('DEDE', 4) }), b4({ sn: r('xxXX', 4), st: r('DEDE', 4) })] }
      ]
    },
    {
      id: 'fund-3',
      name: 'Toques simples e duplos',
      level: 1,
      goal: 'Toques simples e duplos uniformes, as duas bases de todos os rudimentos.',
      text: [
        'Quase tudo o que as mãos fazem na bateria é uma mistura de duas coisas: o toque simples, alternando as mãos (D E D E), e o toque duplo, duas notas seguidas com a mesma mão (D D E E). Paradiddles, rufos, viradas rápidas e grooves com ghost notes nascem dessas duas células. Se elas estiverem desiguais, tudo o que vem depois herda o problema.',
        'No toque simples, as duas mãos têm que soar idênticas: mesmo volume, mesma altura, mesmo espaço entre as notas. Feche os olhos e ouça. Se dá para saber qual mão está tocando, ainda há diferença. Em geral a mão fraca fica mais baixa e um pouco atrasada.',
        'O toque duplo tem uma mecânica própria. A primeira nota vem do pulso, como um toque normal. A segunda vem do rebote, ajudada pelos dedos, que puxam a baqueta de volta para a pele. Pense em "jogar e puxar": o pulso joga, os dedos puxam. Em andamento lento você pode fazer as duas notas com o pulso; conforme acelera, o rebote e os dedos assumem a segunda nota.',
        'O defeito mais comum é a segunda nota do duplo sair mais fraca, o que deixa o rufo "mancando". O objetivo é que um rufo de toques duplos soe igual a um de toques simples. Quando isso acontece, você tem duas formas de tocar a mesma coisa e pode escolher a manulação que deixa a mão livre para o próximo tambor.'
      ],
      steps: [
        'Toque simples a 60 bpm por um minuto. Feche os olhos e confira se as duas mãos soam iguais.',
        'Toque duplo a 60 bpm, fazendo as duas notas com o pulso. Por alguns compassos, acentue de leve a segunda nota de cada mão: isso obriga a segunda nota a aparecer.',
        'Volte ao duplo sem acento, com as quatro notas iguais. Grave e ouça se as segundas notas somem.',
        'No Simples para duplo, troque de manulação sem mudar o andamento nem o volume. Quem ouve não pode perceber a troca.',
        'Suba de 5 em 5 bpm. Metas: simples a 140, duplo a 120, os dois sem tensão.'
      ],
      mistakes: [
        'Segunda nota do duplo fraca. Correção: os dedos puxam a baqueta na segunda nota; treine devagar com acento na segunda nota.',
        'Duplo que vira rufo prensado ("buzz"). Correção: você está pressionando a baqueta contra a pele; solte os dedos e deixe a baqueta quicar uma vez só.',
        'Mão fraca atrasada no toque simples. Correção: toque alguns minutos só com a mão fraca e depois volte a alternar.',
        'Acelerar na passagem do duplo para o simples. Correção: conte "1 e & a" em voz alta durante a troca.'
      ],
      tips: [
        'Nos duplos, pense em "jogar e puxar": o pulso joga a baqueta, os dedos puxam a segunda nota.',
        'Comece metade das vezes com a mão esquerda.',
        'Se o duplo virar "buzz", solte mais os dedos.'
      ],
      ex: [
        { id: 'fund-3a', name: 'Toque simples', desc: 'Rudimento PAS nº 1. Semicolcheias alternadas, todas iguais.', bpm: [60, 140], pad: true, bars: [b4({ sn: r('xxxx', 4), st: r('DEDE', 4) })] },
        { id: 'fund-3b', name: 'Toque duplo', desc: 'Rudimento PAS nº 6. D D E E, duas notas iguais por mão.', bpm: [60, 120], pad: true, bars: [b4({ sn: r('xxxx', 4), st: r('DDEE', 4) })] },
        { id: 'fund-3c', name: 'Simples para duplo', desc: 'Um compasso de toques simples e um de duplos, sem mudar o andamento nem o som.', bpm: [60, 110], pad: true, bars: [b4({ sn: r('Xxxx', 4), st: r('DEDE', 4) }), b4({ sn: r('Xxxx', 4), st: r('DDEE', 4) })] }
      ]
    },
    {
      id: 'fund-4',
      name: 'Técnica Moeller básica',
      level: 2,
      goal: 'Usar o movimento de chicote para tocar um acento e duas notas baixas num só gesto, com menos esforço.',
      text: [
        'A técnica Moeller leva o nome de Sanford Moeller, professor americano que estudou e ensinou o movimento dos antigos tocadores de tambor militares. A ideia central é usar o braço como um chicote: em vez de cada nota ser um movimento separado do pulso, um único movimento do braço produz várias notas, com o acento na primeira e as outras saindo baixas, quase de graça.',
        'O movimento tem três partes. No toque para baixo, que é o chicote, o antebraço desce primeiro e o pulso vem atrasado, solto, e estala no final: a baqueta bate forte e para perto da pele. Na nota baixa seguinte, a mão quase não se mexe, a baqueta só cai. No toque para cima, o pulso sobe e a baqueta, que estava apontando para baixo, encosta de leve na pele no caminho: é uma nota baixa tocada enquanto a mão sobe. No topo, você está pronto para o próximo chicote.',
        'Por que isso importa para você: quem se sente travado costuma fazer cada nota com o mesmo esforço, como se todas fossem acentos. O Moeller ensina o corpo a gastar energia só onde precisa. É a base de acentos rápidos no chimbal e no prato, de viradas em tercina com acentos e de conduções em que uma nota é forte e as outras não.',
        'O treino começa com uma mão só, em tercinas: acento, nota baixa, nota baixa. São três notas em um só ciclo do braço: desce (acento), cai (baixa), sobe (baixa). Depois cada mão toca um tempo inteiro e passa a vez para a outra. No começo o movimento parece grande e exagerado. Com a prática ele fica pequeno, quase invisível, mas a sensação de chicote continua.'
      ],
      steps: [
        'Sem metrônomo, faça só o chicote com a mão direita: antebraço desce, pulso estala no final e a baqueta para perto da pele. Dez vezes, devagar. Depois com a esquerda.',
        'Agora só o toque para cima: a baqueta parte de perto da pele, encosta de leve e a mão sobe. Dez vezes em cada mão.',
        'Junte tudo na tercina de uma mão a 50 bpm: acento (desce), baixa (cai), baixa (sobe). Um ciclo completo do braço por tempo.',
        'Quando as duas mãos estiverem iguais, passe para o Moeller alternado: um tempo em cada mão, mantendo o mesmo movimento.',
        'Suba de 5 em 5 bpm. Por volta de 90 a 100 bpm o movimento diminui sozinho. Metas: 120 bpm em uma mão e 110 no alternado, com as notas baixas realmente baixas.'
      ],
      mistakes: [
        'Fazer o acento só com o pulso, como um toque comum. Correção: o antebraço desce primeiro e o pulso vem atrasado, como a ponta de um chicote.',
        'As duas notas baixas saem altas. Correção: depois do acento a baqueta para perto da pele; as notas baixas são quase só deixar cair.',
        'Levantar a mão antes da terceira nota e perder ela. Correção: a terceira nota é tocada no caminho para cima; a baqueta encosta na pele enquanto o pulso sobe.',
        'Movimento rígido, com o ombro subindo junto. Correção: diminua o andamento e deixe o braço pesado; quem sobe é o pulso, não o ombro.'
      ],
      tips: [
        'Imagine que você está sacudindo água da ponta dos dedos: é a mesma soltura do chicote.',
        'Olhe a ponta da baqueta no toque para cima: ela aponta para baixo enquanto a mão sobe.',
        'Treine também no chimbal, com acento no tempo. É exatamente o movimento de uma condução com acento.'
      ],
      ex: [
        { id: 'fund-4a', name: 'Moeller na mão direita', desc: 'Tercinas só com a direita: acento, nota baixa, nota baixa, num só movimento de braço por tempo.', bpm: [50, 120], pad: true, bars: [b3({ sn: r('Xxx', 4), st: r('DDD', 4) })] },
        { id: 'fund-4b', name: 'Moeller na mão esquerda', desc: 'O mesmo com a esquerda, até o movimento ficar igual ao da direita.', bpm: [50, 120], pad: true, bars: [b3({ sn: r('Xxx', 4), st: r('EEE', 4) })] },
        { id: 'fund-4c', name: 'Moeller alternado', desc: 'Um tempo de tercinas em cada mão. Enquanto uma mão faz o chicote, a outra já está no alto, pronta para o próximo.', bpm: [50, 110], pad: true, bars: [b3({ sn: r('Xxx', 4), st: 'DDD EEE DDD EEE' })] }
      ]
    },
    {
      id: 'fund-5',
      name: 'Controle de dedos',
      level: 2,
      goal: 'Tocar notas baixas e rápidas com os dedos, sem depender só do pulso.',
      text: [
        'O pulso dá volume e peso. Os dedos dão velocidade e controle nas notas baixas. Quando o andamento sobe, o pulso sozinho não consegue fazer movimentos tão pequenos e rápidos, e ele enrijece. É aí que os dedos assumem. Bateristas que tocam rufos rápidos, ghost notes delicadas e duplos limpos usam os dedos o tempo todo, mesmo que de longe não dê para perceber.',
        'O movimento: o fulcro, entre o polegar e o indicador, continua sendo o eixo. O médio, o anelar e o mindinho puxam a parte de trás da baqueta em direção à palma, e a ponta desce até a pele. Depois os dedos abrem de leve e a baqueta volta pelo rebote. O pulso fica quase parado. A altura é pequena: de 2 a 5 cm.',
        'Para os dedos trabalharem melhor, muita gente gira a mão um pouco, deixando o polegar mais para cima. Não é preciso mudar a pegada inteira, só deixar a palma um pouco mais de lado do que no toque de pulso. Teste as duas posições e veja em qual os dedos têm mais liberdade.',
        'Os dedos também são o motor do toque duplo rápido: a primeira nota sai do pulso e a segunda é puxada pelos dedos. Acentuar a segunda nota parece estranho, mas é o jeito mais direto de fortalecer esse movimento. Depois, quando você toca o duplo sem acento, a segunda nota aparece sozinha. O mesmo controle vai deixar as suas ghost notes mais regulares nos grooves.'
      ],
      steps: [
        'Sem metrônomo, apoie o antebraço direito na coxa e toque só com os dedos, a 2 cm do pad, por 30 segundos. Depois com a esquerda.',
        'No Dedos: 16 e 16, comece a 50 bpm. As semicolcheias numa mão só saem dos dedos, com o pulso quase parado.',
        'No Pulso e dedos, o primeiro compasso é forte e de pulso; o segundo é baixo e de dedos, no mesmo andamento. Sinta a troca de motor.',
        'No Duplo com acento na segunda nota, comece a 50 bpm e só suba quando a primeira nota continuar soando clara.',
        'Suba de 5 em 5 bpm. Pare na hora se sentir cansaço no antebraço: os músculos dos dedos são pequenos e cansam rápido no começo.'
      ],
      mistakes: [
        'O pulso continua fazendo todo o trabalho. Correção: apoie o antebraço numa superfície e deixe só os dedos e a baqueta se moverem.',
        'Abrir demais a mão e perder a baqueta. Correção: o fulcro nunca solta; só os dedos de trás abrem e fecham.',
        'Notas que somem nos dedos mais fracos. Correção: diminua o andamento; volume baixo não é volume nenhum, cada nota tem que soar.',
        'Tensão no antebraço depois de alguns minutos. Correção: pare, sacuda as mãos e volte mais devagar; força não substitui coordenação.'
      ],
      tips: [
        'Pense em "coçar" a pele com a baqueta, e não em bater nela.',
        'Os dedos ganham resistência com treinos curtos e frequentes: alguns minutos por dia no pad rendem mais que uma hora por semana.',
        'Use a mesma sensação nas ghost notes dos seus grooves.'
      ],
      ex: [
        { id: 'fund-5a', name: 'Dedos: 16 e 16', desc: 'Um compasso de semicolcheias só com a direita e outro só com a esquerda, tudo baixo e tocado com os dedos.', bpm: [50, 100], pad: true, bars: [b4({ sn: r('xxxx', 4), st: r('DDDD', 4) }), b4({ sn: r('xxxx', 4), st: r('EEEE', 4) })] },
        { id: 'fund-5b', name: 'Pulso e dedos', desc: 'Semicolcheias alternadas: um compasso forte com o pulso e um compasso baixo com os dedos, sem mudar o andamento.', bpm: [60, 120], pad: true, bars: [b4({ sn: r('XXXX', 4), st: r('DEDE', 4) }), b4({ sn: r('gggg', 4), st: r('DEDE', 4) })] },
        { id: 'fund-5c', name: 'Duplo com acento na segunda nota', desc: 'D D E E com acento na segunda nota de cada mão, a nota que os dedos puxam.', bpm: [50, 100], pad: true, bars: [b4({ sn: r('xXxX', 4), st: r('DDEE', 4) })] }
      ]
    },
    {
      id: 'fund-6',
      name: 'Aquecimento, postura e saúde',
      level: 2,
      goal: 'Montar o kit a favor do corpo, proteger os ouvidos e começar todo estudo com o corpo pronto.',
      text: [
        'Muito do "travado" não está nas mãos, está na montagem. O banco certo deixa as coxas paralelas ao chão ou levemente inclinadas para baixo, com o quadril um pouco acima dos joelhos. Banco baixo demais faz você tocar o pedal com a perna inteira e cansa as costas; alto demais tira o equilíbrio. A distância é tal que, com o pé no pedal, o joelho fique um pouco à frente do tornozelo, num ângulo confortável.',
        'A caixa fica um pouco acima das coxas, de modo que, com os braços soltos e os cotovelos ao lado do corpo, a baqueta fique quase paralela à pele ao tocar. O chimbal fica alto o bastante para a baqueta da esquerda passar por baixo da direita sem bater. Tons e pratos ficam ao alcance sem esticar o braço nem levantar o ombro. Se você precisa se esticar para alcançar algo, aproxime a peça, não o corpo.',
        'Postura: costas retas mas não rígidas, peso apoiado no banco e não nos pés. Isso vale ainda mais para o pedal duplo: se você depende de um pé para se equilibrar, ele não fica livre para tocar. Ombros baixos, cabeça alinhada. Confira isso no espelho ou em vídeo de vez em quando, porque com o tempo a gente vai se curvando sem perceber.',
        'Ouvidos: uma bateria acústica passa fácil dos 100 decibéis perto de quem toca, e a perda de audição causada por barulho não volta. Use protetor auricular em todo estudo e todo ensaio. Os de espuma já ajudam; os de atenuação linear, vendidos como protetores para músicos, reduzem o volume sem abafar os agudos, então você continua ouvindo bem a música. Zumbido depois de tocar é sinal de que o ouvido já sofreu.',
        'Aquecimento: cinco minutos antes de qualquer estudo, ensaio ou culto. Sacuda as mãos, gire os pulsos devagar e depois toque no pad em andamento baixo, passando pelos toques que você aprendeu neste módulo. Dor não é sinal de evolução. Se doer o pulso, o antebraço ou o cotovelo, pare. Tendinite é uma lesão comum entre bateristas e quase sempre vem de tensão somada a muitas horas sem pausa.'
      ],
      steps: [
        'Ajuste o banco: sente, coloque os pés nos pedais e confira se o quadril está um pouco acima dos joelhos.',
        'Ajuste a caixa e o chimbal com os braços soltos. Toque algumas notas e veja se a baqueta fica quase paralela à pele.',
        'Coloque o protetor auricular antes de tocar a primeira nota.',
        'Faça o Aquecimento de 5 minutos a 60 bpm: colcheias, semicolcheias com acento, duplos e Moeller alternado, em sequência e sem parar.',
        'Nos dias seguintes, suba aos poucos até 80 bpm. O aquecimento não é lugar de bater recorde: ele serve para chegar ao estudo com o corpo solto.'
      ],
      mistakes: [
        'Pular o aquecimento por falta de tempo. Correção: são só cinco minutos, e eles evitam a lesão que tiraria você semanas da bateria.',
        'Banco baixo demais, com os joelhos acima do quadril. Correção: suba o banco até as coxas ficarem paralelas ao chão ou um pouco inclinadas para baixo.',
        'Tocar sem proteção auditiva "só um pouquinho". Correção: o dano se acumula; o protetor entra antes da primeira nota, sempre.',
        'Insistir com dor. Correção: dor é sinal para parar. Descanse, reduza a tensão e, se continuar, procure um médico ou fisioterapeuta.'
      ],
      tips: [
        'Marque com fita no tapete a posição do banco e dos pedais, e tire uma foto do kit montado para remontar sempre igual.',
        'Pausas curtas a cada 20 ou 30 minutos de estudo rendem mais que uma hora seguida.',
        'Beba água e sacuda as mãos entre os exercícios.'
      ],
      ex: [
        {
          id: 'fund-6a', name: 'Aquecimento de 5 minutos', desc: 'Colcheias, semicolcheias com acento, duplos e Moeller alternado em sequência, por 5 minutos sem parar, num andamento baixo.', bpm: [60, 80], pad: true, endurance: 5,
          bars: [
            b2({ sn: r('xx', 4), st: r('DE', 4) }),
            b4({ sn: r('Xxxx', 4), st: r('DEDE', 4) }),
            b4({ sn: r('xxxx', 4), st: r('DDEE', 4) }),
            b3({ sn: r('Xxx', 4), st: 'DDD EEE DDD EEE' })
          ]
        }
      ]
    }
  ]
};
