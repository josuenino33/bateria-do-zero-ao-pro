import { r, b2, b3, b4, b6, b8, G } from './helpers.js';

// Pés alternados (D E) em s notas por tempo, um compasso, para a escada de velocidade.
const feet = s => {
  const kd = 'x-'.repeat(s / 2), ke = '-x'.repeat(s / 2), st = 'DE'.repeat(s / 2);
  return { kd: r(kd, 4), ke: r(ke, 4), st: r(st, 4) };
};

// Groove base de pedal duplo: chimbal nas semínimas, caixa no 2 e 4, pés em semicolcheias.
const DB16 = { hh: 'x--- x--- x--- x---', sn: '---- X--- ---- X---', kd: r('x-x-', 4), ke: r('-x-x', 4) };

export default {
  id: 'pd',
  name: 'Pedal duplo',
  desc: 'Postura, igualdade entre os pés, velocidade, galope, grooves, viradas lineares e resistência.',
  lessons: [
    {
      id: 'pd-1',
      name: 'Postura e primeiros toques',
      level: 1,
      goal: 'Montar a posição certa e fazer os dois pés soarem iguais em notas lentas.',
      text: [
        'Com o pedal duplo, o banco costuma ficar um pouco mais alto que no pedal simples, com as coxas levemente inclinadas para baixo e os dois pedais na mesma distância do corpo. O pedal da esquerda fica onde normalmente fica o chimbal, então mova o pedal do chimbal um pouco para a esquerda, sem torcer o quadril para alcançar nada.',
        'O movimento é o mesmo do bumbo com calcanhar levantado: a perna dá o peso e o tornozelo dá a velocidade. Comece tocando com a parte da frente do pé, perto do meio da plataforma, e deixe a batedeira voltar sozinha. Os dois pés precisam soar iguais, no volume e no tempo.',
        'O pé esquerdo quase sempre é o mais fraco, porque passou anos só segurando o chimbal. Ele recebe treino extra desde o primeiro dia. Não se assuste se no começo ele soar atrasado ou mais fraco: é normal, e melhora rápido com repetição lenta e atenta.',
        'Equilíbrio é tudo. Com os dois pés tocando, nenhum deles pode servir de apoio para o corpo. O peso fica no banco, com as costas retas e o abdômen levemente firme. Se você sente que vai cair para a frente ou para trás quando os pés aceleram, ajuste a altura ou a distância do banco antes de continuar.'
      ],
      steps: [
        'Ajuste o banco e os pedais: molas na mesma tensão, batedeiras na mesma distância da pele.',
        'Clique a 60 bpm. Toque "Colcheias alternadas" por 2 minutos, ouvindo se os dois pés soam iguais.',
        'Toque "Só o pé esquerdo" pelo dobro do tempo que você passou no exercício anterior.',
        'Grave 30 segundos de cada exercício com o celular perto do bumbo e compare os dois pés.',
        'Suba de 5 em 5 bpm só quando o pé esquerdo soar igual ao direito no andamento atual.'
      ],
      mistakes: [
        'Molas com tensões diferentes, e um pé "responde" diferente do outro. Correção: iguale as molas e confira a distância das batedeiras.',
        'Enterrar a batedeira na pele. Correção: deixe ela voltar; enterrar cansa, trava o tornozelo e abafa o som.',
        'Usar um pé como apoio e perder o equilíbrio quando ele precisa tocar. Correção: sente-se mais perto da borda do banco e firme o abdômen.',
        'Pé esquerdo atrasado em relação ao clique. Correção: toque só o esquerdo, mais devagar, pensando em tocar "em cima" do clique.'
      ],
      tips: [
        'Molas dos dois pedais na mesma tensão.',
        'Costas retas e peso no banco: você não pode depender de um pé para se apoiar.',
        'Use o mesmo calçado sempre que estudar: trocar de sapato muda a resposta dos pedais.'
      ],
      ex: [
        { id: 'pd-1a', name: 'Colcheias alternadas', desc: 'D E D E com os pés, devagar e iguais.', bpm: [60, 140], stl: 'Pés', bars: [b2({ kd: r('x-', 4), ke: r('-x', 4), st: r('DE', 4) })] },
        { id: 'pd-1b', name: 'Só o pé esquerdo', desc: 'Colcheias com o pé fraco, até soar como o direito.', bpm: [60, 140], stl: 'Pés', bars: [b2({ ke: r('xx', 4), st: r('EE', 4) })] }
      ]
    },
    {
      id: 'pd-2',
      name: 'Semicolcheias',
      level: 1,
      goal: 'Tocar o som clássico do pedal duplo, igual e no tempo, começando com qualquer pé.',
      text: [
        'As semicolcheias alternadas são o som mais conhecido do pedal duplo: um "tum-tum-tum" contínuo, quatro notas por tempo. O segredo é a igualdade. O pé esquerdo tem que soar igual ao direito no volume e no tempo, senão o som fica irregular.',
        'Grave-se sempre. Se o som parecer "galopado" sem você querer, um dos pés (quase sempre o esquerdo) está atrasando. Se as notas variam de volume, um pé está tocando mais alto que o outro. Corrija devagar, com o clique nas subdivisões, antes de tentar correr.',
        'Treine começando com os dois pés. Na música, muitas frases de pedal duplo começam com o esquerdo, e quem só treinou D E fica perdido. Começar com o esquerdo também ajuda a equilibrar a força entre as pernas.',
        'As rajadas curtas (um tempo tocando, um tempo de pausa) treinam o que mais aparece nas músicas: o pedal duplo entra e sai, em frases curtas. Elas também deixam você tocar mais rápido sem cansar, porque há descanso entre as rajadas.'
      ],
      steps: [
        'Clique a 60 bpm nas subdivisões. Toque "Semicolcheias D E" por 2 minutos.',
        'Toque "Semicolcheias E D" pelo mesmo tempo. Compare: os dois devem soar idênticos.',
        'Passe o clique para só o tempo e repita os dois.',
        'Toque as rajadas de um tempo: comece e pare exatamente no lugar, sem notas a mais.',
        'Grave e ouça. Suba 5 bpm por dia enquanto o som estiver uniforme.'
      ],
      mistakes: [
        'Som "galopado" sem querer. Correção: toque mais devagar, com o clique nas subdivisões, e ouça qual pé está fora do lugar.',
        'Um pé mais forte que o outro. Correção: toque só o pé fraco por um minuto e depois volte ao alternado, tentando igualar.',
        'Tensão subindo pela perna até o quadril. Correção: pare 30 segundos, solte as pernas e recomece mais devagar.',
        'Na rajada, tocar uma nota a mais ou a menos. Correção: conte "1 e & a, 2" em voz alta e pare exatamente no 2.'
      ],
      tips: [
        'Comece metade das vezes com o pé esquerdo.',
        'Se a panturrilha queimar, pare 30 segundos. Tensão acumulada vira lesão.',
        'A velocidade vem do tornozelo. Se a coxa está trabalhando muito, o movimento está grande demais.'
      ],
      ex: [
        { id: 'pd-2a', name: 'Semicolcheias D E', desc: 'Quatro notas por tempo, começando com o pé direito.', bpm: [60, 160], stl: 'Pés', bars: [b4({ kd: r('x-x-', 4), ke: r('-x-x', 4), st: r('DEDE', 4) })] },
        { id: 'pd-2b', name: 'Semicolcheias E D', desc: 'O mesmo começando com o pé esquerdo.', bpm: [60, 160], stl: 'Pés', bars: [b4({ ke: r('x-x-', 4), kd: r('-x-x', 4), st: r('EDED', 4) })] },
        { id: 'pd-2c', name: 'Rajadas de um tempo', desc: 'Um tempo de semicolcheias, um tempo de descanso. O chimbal marca as semínimas.', bpm: [70, 170], stl: 'Pés', bars: [b4({ hh: 'x--- x--- x--- x---', kd: 'x-x- ---- x-x- ----', ke: '-x-x ---- -x-x ----', st: 'DEDE ---- DEDE ----' })] }
      ]
    },
    {
      id: 'pd-3',
      name: 'Tercinas e sextinas nos pés',
      level: 2,
      goal: 'Levar as divisões ternárias para os pés e misturar mãos e pés na mesma sextina.',
      text: [
        'Nas tercinas alternadas, cada tempo começa com um pé diferente: D E D, E D E. Isso fortalece o pé fraco, porque ele também precisa cair no tempo com firmeza, e prepara as sextinas, que são a tercina dobrada.',
        'As sextinas nos pés soam como um "rolo" grave e contínuo, muito usado no metal e em finais de música com muita energia. Como são seis notas por tempo, cada pé faz três, então o movimento precisa ser pequeno e solto. Se a perna inteira estiver trabalhando, você não vai passar de um andamento médio.',
        'Misturar mãos e pés na mesma sextina (duas notas de mão e quatro de bumbo) gera uma das viradas mais usadas no metal e no gospel. As mãos dão o ataque e os pés completam com peso. A dificuldade é a costura: a primeira nota de bumbo tem que vir exatamente depois da segunda nota de mão.',
        'As rajadas de sextina treinam o que acontece na música: os pés entram com tudo por um tempo e param de repente para a caixa. Parar no lugar é tão importante quanto começar.'
      ],
      steps: [
        'Fale "1 ta ka, 2 ta ka" e preste atenção em qual pé cai no tempo nas tercinas.',
        'Toque as sextinas nos pés a 50 bpm, com o clique nas subdivisões, até as seis notas ficarem iguais.',
        'Em "Duas mãos e quatro pés", toque primeiro só os pés com pausa nas duas primeiras notas, depois junte as mãos.',
        'Nas rajadas de sextina, pare exatamente no 2 e no 4, junto com a caixa.',
        'Registre o BPM máximo limpo das sextinas nos pés: ele vai ser a sua referência de velocidade.'
      ],
      mistakes: [
        'Perder o tempo quando ele cai no pé esquerdo. Correção: acentue de leve a primeira nota de cada tercina por alguns minutos.',
        'Sextina que vira semicolcheia sem você perceber. Correção: conte em voz alta e use o clique nas subdivisões.',
        'Buraco entre as mãos e o bumbo na virada. Correção: pense nas seis notas como uma linha só e diminua o andamento.',
        'Pés continuando depois do fim da rajada. Correção: toque a rajada com a mão marcando o 2 na caixa e pare quando a mão tocar.'
      ],
      tips: [
        'Nas tercinas, acentue de leve a primeira nota de cada tempo: assim você sente qual pé está liderando.',
        'Nas sextinas, pense em "tremer" o tornozelo, não em pisar.',
        'A virada de duas mãos e quatro pés fica ótima com as mãos no surdo ou nos tons.'
      ],
      listen: ['Hot for Teacher — Van Halen (a introdução com pedal duplo)'],
      ex: [
        { id: 'pd-3a', name: 'Tercinas alternadas', desc: 'D E D, E D E nos pés. O tempo cai alternando entre os dois pés.', bpm: [60, 150], stl: 'Pés', bars: [b3({ kd: 'x-x -x- x-x -x-', ke: '-x- x-x -x- x-x', st: 'DED EDE DED EDE' })] },
        { id: 'pd-3b', name: 'Sextinas nos pés', desc: 'Seis notas alternadas por tempo, todas iguais.', bpm: [50, 120], stl: 'Pés', bars: [b6({ kd: r('x-x-x-', 4), ke: r('-x-x-x', 4), st: r('DEDEDE', 4) })] },
        { id: 'pd-3c', name: 'Duas mãos e quatro pés', desc: 'D E na caixa e quatro bumbos alternados em cada sextina.', bpm: [50, 110], bars: [b6({ sn: r('xx----', 4), kd: r('--x-x-', 4), ke: r('---x-x', 4), st: r('DEBBBB', 4) })] },
        { id: 'pd-3d', name: 'Rajadas de sextina', desc: 'Sextinas nos pés nos tempos 1 e 3; no 2 e no 4 os pés param e a caixa toca.', bpm: [50, 120], bars: [b6({ hh: r('x-----', 4), sn: '------ X----- ------ X-----', kd: 'x-x-x- ------ x-x-x- ------', ke: '-x-x-x ------ -x-x-x ------' })] }
      ]
    },
    {
      id: 'pd-4',
      name: 'Galope',
      level: 2,
      goal: 'Tocar o galope com os dois pés, firme e no tempo, começando com qualquer pé.',
      text: [
        'O galope usa a figura de uma colcheia e duas semicolcheias ("1, &, a") ou o contrário, duas semicolcheias e uma colcheia ("1, e, &"). Soa grande e cheio de movimento sem precisar de muita velocidade, e é uma das marcas do heavy metal tradicional.',
        'Divida as notas entre os pés como está na grade. Assim nenhum pé faz duas notas seguidas rápidas: no galope, o pé direito toca as colcheias e o esquerdo entra só na nota que completa a figura. Isso deixa o galope estável mesmo em andamentos altos.',
        'Começar com o pé esquerdo é o treino de equilíbrio deste módulo aplicado ao galope. Em várias músicas a frase de bumbo pede o galope invertido de pés, e quem só sabe uma versão fica preso.',
        'O som do galope depende de um acento leve na primeira nota de cada figura. Esse acento dá o "pulo" do cavalo; sem ele, a figura vira semicolcheias com buracos.'
      ],
      steps: [
        'Fale a figura em voz alta antes de tocar: "1 - & a, 2 - & a" para o galope e "1 e & -" para o invertido.',
        'Toque o galope a 70 bpm com o clique nas subdivisões, depois com o clique só no tempo.',
        'Toque o galope invertido no mesmo andamento.',
        'Toque "Galope começando com o esquerdo" e compare com o original: o som deve ser o mesmo.',
        'Alterne dois compassos de galope e dois de semicolcheias, sem parar, para treinar a troca.'
      ],
      mistakes: [
        'O galope virar tercina ("1 ta ka"). Correção: conte as semicolcheias em voz alta e use o clique nas subdivisões.',
        'As duas semicolcheias saírem grudadas. Correção: diminua o andamento e encaixe cada nota no "&" e no "a".',
        'Sem acento, o galope perde o formato. Correção: acentue de leve a primeira nota da figura.',
        'O pé esquerdo atrasar a última nota do galope. Correção: toque só o pé esquerdo no "a" de cada tempo, com o clique, por um minuto.'
      ],
      tips: [
        'Acentue de leve o início de cada galope para dar o "pulo" do cavalo.',
        'O galope invertido soa mais "para a frente"; o normal soa mais "pesado". Use conforme a frase da guitarra.'
      ],
      ex: [
        { id: 'pd-4a', name: 'Galope', desc: 'Colcheia e duas semicolcheias: 1, &, a.', bpm: [70, 180], stl: 'Pés', bars: [b4({ kd: r('x-x-', 4), ke: r('---x', 4), st: r('D-DE', 4) })] },
        { id: 'pd-4b', name: 'Galope invertido', desc: 'Duas semicolcheias e uma colcheia: 1, e, &.', bpm: [70, 180], stl: 'Pés', bars: [b4({ kd: r('x-x-', 4), ke: r('-x--', 4), st: r('DED-', 4) })] },
        { id: 'pd-4c', name: 'Galope começando com o esquerdo', desc: 'O mesmo galope 1, &, a, agora com o pé esquerdo nas colcheias e o direito completando.', bpm: [70, 170], stl: 'Pés', bars: [b4({ ke: r('x-x-', 4), kd: r('---x', 4), st: r('E-ED', 4) })] }
      ]
    },
    {
      id: 'pd-5',
      name: 'Grooves e resistência',
      level: 2,
      goal: 'Tocar o pedal duplo dentro da música, com as mãos por cima, por bastante tempo.',
      text: [
        'Agora as mãos entram por cima dos pés. Chimbal ou prato nas semínimas, caixa no 2 e no 4 e os pés contínuos por baixo. Parece simples, mas o desafio é a caixa: quando os pés aceleram, a mão esquerda tende a atrasar ou a se adiantar para "encaixar" no bumbo.',
        'O sino do prato de condução é um dos sons clássicos por cima do pedal duplo: ele corta bem no meio de tanta nota grave. Tocar o sino em colcheias com os pés em semicolcheias exige que a mão direita fique independente dos pés, que correm no dobro da velocidade.',
        'Os exercícios de resistência são medidos em tempo. Toque num andamento confortável e registre quantos minutos você aguentou relaxado. Uma música de metal ou um final de louvor com pedal duplo pode durar vários minutos; aguentar 5 e depois 10 minutos sem travar é o que faz você chegar inteiro ao final.',
        'Resistência não é aguentar a dor. Se a panturrilha ou a canela queimarem, o movimento está grande demais ou tenso demais. Diminua o andamento, reduza a altura das batedeiras e continue. Com as semanas, o mesmo andamento passa a ser fácil e você sobe.'
      ],
      steps: [
        'Toque só os pés do groove por um minuto. Depois junte o chimbal e só então a caixa.',
        'Grave e confira se a caixa cai exatamente junto com a nota de bumbo do 2 e do 4.',
        'No groove com o sino, toque primeiro sino e pés, sem a caixa, até a mão direita ficar estável.',
        'Resistência: escolha um andamento em que você toca relaxado e cronometre. Comece com 2 minutos.',
        'A cada semana, aumente o tempo ou o andamento, nunca os dois ao mesmo tempo.'
      ],
      mistakes: [
        'A caixa atrasar quando os pés aceleram. Correção: separe e treine só caixa e pés, devagar.',
        'Ombros subindo no fim do exercício de resistência. Correção: a cada minuto, respire fundo e solte os ombros sem parar de tocar.',
        'Aumentar o andamento quando cansa, porque "fica mais fácil". Correção: use o clique sempre; o cansaço costuma acelerar.',
        'No sino, a mão direita copiar os pés e tocar semicolcheias. Correção: conte "1 & 2 &" em voz alta junto com o sino.'
      ],
      tips: [
        'Velocidade vem depois da resistência. Primeiro aguente 2 minutos a 120 bpm, depois suba.',
        'Nos exercícios longos, olhe para um ponto fixo e respire no ritmo da música: ajuda a manter o corpo solto.',
        'Beba água e alongue as panturrilhas antes dos exercícios longos.'
      ],
      listen: ['One — Metallica (o pedal duplo na parte rápida do final, junto com a guitarra)'],
      ex: [
        { id: 'pd-5a', name: 'Groove de semicolcheias', desc: 'Chimbal nas semínimas, caixa no 2 e 4, pés em semicolcheias.', bpm: [60, 150], bars: [b4({ ...DB16 })] },
        { id: 'pd-5b', name: 'Groove em tercinas', desc: 'Groove pesado com os pés em tercinas alternadas.', bpm: [60, 140], bars: [b3({ hh: 'x-- x-- x-- x--', sn: '--- X-- --- X--', kd: 'x-x -x- x-x -x-', ke: '-x- x-x -x- x-x' })] },
        { id: 'pd-5c', name: 'Resistência: 2 minutos', desc: 'Groove de semicolcheias por 2 minutos sem parar.', bpm: [60, 140], endurance: 2, bars: [b4({ ...DB16 })] },
        { id: 'pd-5d', name: 'Resistência: 5 minutos', desc: 'O mesmo groove por 5 minutos. É assim que se aguenta uma música inteira.', bpm: [60, 130], endurance: 5, bars: [b4({ ...DB16 })] },
        { id: 'pd-5e', name: 'Sino da condução', desc: 'Sino do prato de condução em colcheias, caixa no 2 e 4 e pés em semicolcheias.', bpm: [60, 150], bars: [b4({ rb: r('x-x-', 4), sn: '---- X--- ---- X---', kd: r('x-x-', 4), ke: r('-x-x', 4) })] },
        { id: 'pd-5f', name: 'Resistência: 10 minutos', desc: 'Groove de semicolcheias por 10 minutos, num andamento em que você fica relaxado do começo ao fim.', bpm: [60, 120], endurance: 10, bars: [b4({ ...DB16 })] }
      ]
    },
    {
      id: 'pd-6',
      name: 'Equilíbrio do pé fraco',
      level: 2,
      goal: 'Deixar o pé esquerdo tão forte, rápido e confiável quanto o direito.',
      text: [
        'Quase todo problema de pedal duplo é, no fundo, um problema do pé esquerdo. Ele atrasa, toca mais fraco ou trava antes do direito. Esta lição é só para ele: acentos no esquerdo, duplas nos dois pés, o groove inteiro tocado com o esquerdo e frases que começam por ele.',
        'Acentuar as notas do pé esquerdo inverte a hierarquia: em vez de "acompanhar" o direito, o esquerdo passa a liderar. As duplas (D D E E) exigem que cada pé faça duas notas seguidas com controle, o que treina o rebote e a força de forma igual nas duas pernas.',
        'Tocar um groove de rock inteiro só com o pé esquerdo parece estranho no começo, e é exatamente por isso que funciona. O esquerdo aprende a fazer o papel de pé principal, com notas no tempo, no contratempo e na volta para o 1.',
        'Na música, muitas frases de pedal duplo começam com o esquerdo, por exemplo quando o direito acabou de tocar no tempo e a frase seguinte começa logo depois. Um pé esquerdo confiável deixa você escolher a manulação dos pés pela música, e não pela limitação.'
      ],
      steps: [
        'Comece cada sessão de pedal duplo com 3 minutos de exercícios desta lição.',
        'Em "Acento no pé esquerdo", exagere os acentos no começo: o direito bem baixo, o esquerdo forte.',
        'Nas duplas, comece a 50 bpm e confira se a segunda nota de cada pé soa igual à primeira.',
        'No rock só com o pé esquerdo, toque primeiro só chimbal e pé, depois junte a caixa.',
        'No groove com o esquerdo puxando, toque os pés sozinhos até as frases começarem naturalmente com o esquerdo.'
      ],
      mistakes: [
        'Acentos que vazam para o pé direito. Correção: diminua o andamento e pense no direito como uma ghost note.',
        'Nas duplas, o segundo toque sair fraco ou atrasado. Correção: toque só um pé em duplas, com o clique, antes de alternar.',
        'No rock com o esquerdo, o pé direito tentar ajudar. Correção: tire o pé direito do pedal e apoie no chão durante o exercício.',
        'No groove com o esquerdo puxando, trocar a ordem dos pés sem perceber. Correção: fale "E D E" em voz alta nas primeiras repetições.'
      ],
      tips: [
        'Nos outros exercícios do módulo, comece com o pé esquerdo sempre que a frase permitir.',
        'Treine o pé esquerdo sozinho também no pedal do chimbal, tocando colcheias, quando estiver estudando outra coisa.',
        'Se tiver pouco tempo, gaste mais com o pé esquerdo do que com o direito.'
      ],
      ex: [
        { id: 'pd-6a', name: 'Acento no pé esquerdo', desc: 'Semicolcheias D E com acento em todas as notas do pé esquerdo.', bpm: [60, 150], stl: 'Pés', bars: [b4({ kd: r('x-x-', 4), ke: r('-X-X', 4), st: r('DEDE', 4) })] },
        { id: 'pd-6b', name: 'Duplas nos pés', desc: 'D D E E em semicolcheias: duas notas iguais em cada pé.', bpm: [50, 110], stl: 'Pés', bars: [b4({ kd: r('xx--', 4), ke: r('--xx', 4), st: r('DDEE', 4) })] },
        { id: 'pd-6c', name: 'Rock só com o pé esquerdo', desc: 'O rock básico em colcheias com todas as notas de bumbo no pé esquerdo.', bpm: [60, 140], bars: [b2({ hh: r('xx', 4), sn: '-- X- -- X-', ke: 'x- -- xx --' })] },
        { id: 'pd-6d', name: 'Groove com o esquerdo puxando', desc: 'Chimbal nas semínimas, caixa no 2 e 4 e frases de bumbo que sempre começam com o pé esquerdo, inclusive a que volta para o 1.', bpm: [60, 140], bars: [b4({ hh: 'x--- x--- x--- x---', sn: '---- X--- ---- X---', ke: 'x-x- ---- x-x- --x-', kd: '-x-- ---- -x-x ---x' })] }
      ]
    },
    {
      id: 'pd-7',
      name: 'Velocidade: escada e rajadas',
      level: 3,
      goal: 'Subir dos pés em colcheias até as fusas e usar rajadas curtas de sextina e fusa na música.',
      text: [
        'A escada de velocidade aplica aos pés a mesma ideia da escada de subdivisão das mãos: o tempo fica parado e a quantidade de notas muda. Colcheias, semicolcheias, sextinas e fusas (oito notas por tempo), e depois a volta. Isso ensina os pés a mudar de marcha sem acelerar o tempo.',
        'As fusas são o limite de velocidade da maioria dos bateristas. Num andamento de 90 bpm, por exemplo, são 12 notas por segundo, seis em cada pé. Não tente chegar lá na força: o movimento fica cada vez menor, com o tornozelo fazendo quase tudo e a perna apenas apoiando o peso sobre os pedais.',
        'Na música, notas tão rápidas quase nunca aparecem por muito tempo. Elas aparecem em rajadas: um tempo de fusas no fim de uma frase, uma explosão antes da caixa, um "rolo" de bumbo para chegar num refrão. Por isso os exercícios alternam velocidade máxima com notas mais lentas, que dão tempo para as pernas descansarem.',
        'A troca de semicolcheias para fusas no meio do compasso é a mais difícil: você dobra a velocidade de repente. Para não acelerar o tempo junto, pense que as fusas cabem "dentro" do mesmo tempo, sem empurrar a caixa do compasso seguinte.'
      ],
      steps: [
        'Na escada, comece a 40 bpm. Cada compasso tem que soar uniforme antes da troca.',
        'Se as fusas travarem, toque a escada só até as sextinas por alguns dias.',
        'Nas rajadas de fusas, comece e pare exatamente no tempo; a caixa no 2 é o seu ponto de chegada.',
        'Em "Fusas no fim do compasso", toque o compasso inteiro em semicolcheias primeiro e só depois coloque as fusas no tempo 4.',
        'Suba de 2 em 2 bpm: nesta lição, pequenos passos rendem mais.'
      ],
      mistakes: [
        'Tentar velocidade com força e travar as pernas. Correção: diminua o andamento até o movimento ficar pequeno e solto.',
        'Acelerar o tempo nas fusas. Correção: use o clique com acento e confira se a caixa e o tempo seguinte chegam junto com ele.',
        'Um pé desaparecer nas fusas e a rajada virar semicolcheias de um pé só. Correção: grave e ouça devagar; se faltar nota, volte para as sextinas.',
        'Pular o aquecimento e começar pelos exercícios mais rápidos. Correção: comece sempre pela escada em andamento baixo.'
      ],
      tips: [
        'Batedeiras um pouco mais perto da pele ajudam nas fusas, porque o caminho de cada nota fica menor.',
        'Velocidade se constrói devagar: registre o BPM limpo toda semana e compare depois de um mês.',
        'Se as pernas tremerem de cansaço, pare. Fusas cansadas viram notas tortas.'
      ],
      listen: ['Painkiller — Judas Priest (a introdução de bateria com pedal duplo)'],
      ex: [
        { id: 'pd-7a', name: 'Escada de velocidade', desc: 'Colcheias, semicolcheias, sextinas, fusas e a volta (sextinas, semicolcheias), um compasso de cada, pés alternados.', bpm: [40, 90], stl: 'Pés', bars: [b2(feet(2)), b4(feet(4)), b6(feet(6)), b8(feet(8)), b6(feet(6)), b4(feet(4))] },
        { id: 'pd-7b', name: 'Rajadas de fusas', desc: 'Um tempo de fusas nos pés e um bumbo no tempo seguinte, junto com a caixa. Duas rajadas por compasso.', bpm: [50, 100], stl: 'Pés', bars: [b8({ hh: r('x-------', 4), sn: '-------- X------- -------- X-------', kd: 'x-x-x-x- x------- x-x-x-x- x-------', ke: '-x-x-x-x -------- -x-x-x-x --------', st: 'DEDEDEDE D------- DEDEDEDE D-------' })] },
        { id: 'pd-7c', name: 'Fusas no fim do compasso', desc: 'Groove com os pés em semicolcheias nos tempos 1 a 3 e fusas no tempo 4, voltando para o 1 sem acelerar.', bpm: [50, 100], bars: [b8({ hh: r('x-------', 4), sn: '-------- X------- -------- X-------', kd: 'x---x--- x---x--- x---x--- x-x-x-x-', ke: '--x---x- --x---x- --x---x- -x-x-x-x' })] }
      ]
    },
    {
      id: 'pd-8',
      name: 'Viradas lineares com pedal duplo',
      level: 3,
      goal: 'Criar viradas em que mãos e pés se alternam, nunca juntos, pelo kit todo.',
      text: [
        'Nas viradas lineares, cada nota é tocada por um membro só: mão, pé, mão, pé. Com o pedal duplo, o bumbo deixa de ser apoio e vira uma "terceira e quarta mão", e a virada ganha velocidade e peso sem exigir mãos mais rápidas. É uma das formas mais eficientes de sair das viradas de sempre.',
        'Três desenhos cobrem a maior parte do vocabulário. Em D B E B (mão, bumbo, mão, bumbo) as mãos e os pés se alternam a cada nota. Em D E B B, duas notas de mão e duas de pé. Em sextina, D E e quatro bumbos dão o "rolo" grave usado no metal e no gospel. Os três funcionam com as mãos descendo pelos tons.',
        'O desafio é fazer a linha soar contínua. A nota de bumbo precisa ter o mesmo volume e a mesma distância das notas de mão. Como os tons e o bumbo são graves, qualquer nota fraca de mão, principalmente no surdo, desaparece. Toque as mãos com firmeza e os pés no mesmo nível.',
        'Cada exercício alterna um compasso de groove e um de virada. A volta no 1, com prato e bumbo juntos, é parte da virada: treine o último tempo e o 1 seguinte em loop até a chegada ficar natural.'
      ],
      steps: [
        'Toque cada virada só na caixa, sem mudar de tambor, com o clique a 60 bpm.',
        'Leve as mãos para os tons, um tambor por tempo, mantendo os pés iguais.',
        'Junte com o groove: um compasso de groove e um de virada, em loop.',
        'Grave e ouça se as notas de bumbo têm o mesmo volume das notas de mão.',
        'Misture: invente uma virada com um tempo de cada desenho.'
      ],
      mistakes: [
        'Mãos e pés tocando juntos sem querer. Correção: toque bem devagar, falando o nome de cada nota ("mão, pé, mão, pé").',
        'Bumbo forte demais, encobrindo os tons. Correção: toque os pés um pouco mais leve que no groove.',
        'Perder a chegada no 1 porque a mão está longe do prato. Correção: treine só o último tempo e o 1 em loop.',
        'Acelerar quando os pés entram. Correção: volte ao clique nas subdivisões até a linha ficar uniforme.'
      ],
      tips: [
        'O bumbo fica mais claro com a batedeira voltando sozinha, sem enterrar.',
        'Experimente começar a virada com o pé em vez da mão: muda o som inteiro.',
        'Esses desenhos funcionam também sem pedal duplo, com o pé direito fazendo duplas, em andamento mais baixo.'
      ],
      ex: [
        {
          id: 'pd-8a', name: 'D B E B pelos tons', desc: 'Mão, bumbo, mão, bumbo em semicolcheias: caixa, tom 1, tom 2 e surdo, um tempo em cada.', bpm: [60, 140], bars: [b4({ ...G.rock16C }), b4({
            sn: 'x-x- ---- ---- ----', t1: '---- x-x- ---- ----', t2: '---- ---- x-x- ----', ft: '---- ---- ---- x-x-', kd: r('-x--', 4), ke: r('---x', 4), st: r('DBEB', 4)
          })]
        },
        {
          id: 'pd-8b', name: 'D E B B pelos tons', desc: 'Duas notas de mão e duas de bumbo em semicolcheias, descendo pelo kit.', bpm: [60, 130], bars: [b4({ ...G.rock16C }), b4({
            sn: 'xx-- ---- ---- ----', t1: '---- xx-- ---- ----', t2: '---- ---- xx-- ----', ft: '---- ---- ---- xx--', kd: r('--x-', 4), ke: r('---x', 4), st: r('DEBB', 4)
          })]
        },
        {
          id: 'pd-8c', name: 'Duas mãos e quatro pés pelos tons', desc: 'Em sextinas: D E num tambor e quatro bumbos alternados, descendo pelo kit.', bpm: [50, 110], bars: [b6({ ...G.rock6C }), b6({
            sn: 'xx---- ------ ------ ------', t1: '------ xx---- ------ ------', t2: '------ ------ xx---- ------', ft: '------ ------ ------ xx----', kd: r('--x-x-', 4), ke: r('---x-x', 4), st: r('DEBBBB', 4)
          })]
        }
      ]
    }
  ]
};
