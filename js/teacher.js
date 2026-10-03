// Professor local: lê seus registros e devolve orientações, sem internet e sem custo.
import { MODULES, MOD, EX } from './curriculum/index.js';
import { Store } from './store.js';
import { stats, QUAL } from './stats.js';
import { dkey, addDays, daysBetween, mean } from './util.js';

const ORD = ['', '1ª', '2ª', '3ª', '4ª', '5ª', '6ª', '7ª', '8ª'];
const SUBN = { 2: 'colcheia', 3: 'tercina', 4: 'semicolcheia', 5: 'quintina', 6: 'sextina', 8: 'fusa' };

// Interpreta uma análise do microfone em frases curtas.
export function timingVerdict(tm, e) {
  if (!tm) return [];
  const out = [];
  const q = tm.score >= 90 ? 'Excelente' : tm.score >= 80 ? 'Muito bom' : tm.score >= 65 ? 'Bom, com pontos a ajustar' : tm.score >= 45 ? 'Irregular' : 'Fora do tempo';
  out.push({ k: tm.score >= 80 ? 'good' : tm.score >= 60 ? 'info' : 'warn', t: `${q}: nota ${tm.score} de 100.` });
  if (Math.abs(tm.mean) >= 8) out.push({ k: 'warn', t: tm.mean < 0 ? `Você está adiantado em média ${Math.abs(tm.mean)} ms. Isso é correr: relaxe, sinta o clique "chegar" antes de tocar e pense em tocar dentro do clique, não na frente.` : `Você está atrasado em média ${tm.mean} ms. Isso é arrastar: prepare o movimento antes, com a baqueta já no alto quando o tempo chegar.` });
  else out.push({ k: 'good', t: `Na média você está no tempo (${tm.mean > 0 ? '+' : ''}${tm.mean} ms).` });
  if (tm.sd >= 18) out.push({ k: 'warn', t: `As notas variam bastante entre si (desvio de ${tm.sd} ms). Volte 10 bpm e procure notas todas iguais antes de subir.` });
  else if (tm.sd <= 9) out.push({ k: 'good', t: `Regularidade muito boa (desvio de ${tm.sd} ms).` });
  const pos = (tm.pos || []).filter(p => p.s > 1);
  if (pos.length >= 2) {
    const worst = pos.reduce((a, b) => Math.abs(b.mean - tm.mean) > Math.abs(a.mean - tm.mean) ? b : a);
    const diff = worst.mean - tm.mean;
    if (Math.abs(diff) >= 10) out.push({ k: 'warn', t: `A ${ORD[worst.pos + 1]} nota de cada ${SUBN[worst.s] || 'grupo'} sai ${diff > 0 ? 'atrasada' : 'adiantada'} (${diff > 0 ? '+' : ''}${Math.round(diff)} ms em relação às outras). Toque devagar acentuando só essa nota até ela encaixar.` });
  }
  if (tm.misses > tm.n * 0.08) out.push({ k: 'info', t: `${tm.misses} notas não foram ouvidas. Pode ser nota fraca demais (ghost) ou nota que faltou. Se tocou tudo, aumente a sensibilidade.` });
  if (tm.extras > tm.n * 0.08) out.push({ k: 'info', t: `${tm.extras} batidas a mais foram ouvidas. Pode ser rebote sujo, flam ou barulho no ambiente.` });
  if (e && e.bars.some(b => Object.values(b.tracks).some(t => /[fd]/.test(t)))) out.push({ k: 'info', t: 'Este exercício tem flams ou drags. As notas de enfeite podem fazer a nota parecer adiantada.' });
  return out;
}

// Orientações gerais a partir de todo o histórico.
export function insights() {
  const st = stats(), P = Store.perfil, today = st.today, out = [];
  const add = (k, title, text, action) => out.push({ k, title, text, action });
  if (!st.all.length) {
    add('info', 'Bem-vindo', 'Ainda não há treinos registrados. Abra a aula de hoje, toque cada bloco com o metrônomo e registre o BPM em que tocou limpo. Com alguns dias de registro eu começo a apontar o que melhorar.');
    return out;
  }
  // dor ou desconforto
  const recentNotes = st.all.filter(e => e.note && daysBetween(e.d, today) <= 14);
  if (recentNotes.some(e => /\b(dor|doendo|doeu|d[oó]i|machuc|formig|les[aã]o|tendin|inflama)/i.test(e.note))) {
    add('alert', 'Atenção com dor', 'Você anotou dor ou desconforto nos últimos dias. Pare de forçar: diminua o andamento, solte a pegada, descanse um ou dois dias e, se a dor continuar, procure um médico ou fisioterapeuta. Tocar com dor vira lesão.');
  }
  // constância
  let daysWeek = 0; for (let i = 0; i < 7; i++) if (st.days[dkey(addDays(new Date(), -i))]) daysWeek++;
  const usingFor = daysBetween(st.all[0].d, today); // há quantos dias usa o app
  if (daysWeek >= P.daysPerWeek) add('good', 'Constância em dia', `Você treinou ${daysWeek} dos últimos 7 dias. É a constância que destrava, mais do que treinos longos.`);
  else if (usingFor >= 6 && daysWeek <= Math.max(1, P.daysPerWeek - 2)) add('warn', 'Pouca constância', `${daysWeek === 1 ? 'Foi 1 dia' : `Foram ${daysWeek} dias`} de treino nos últimos 7, e sua meta é ${P.daysPerWeek}. Prefira 20 minutos todo dia a 2 horas uma vez por semana.`);
  else if (usingFor < 6) add('info', 'Primeira semana', 'Nesta primeira semana o mais importante é criar o hábito: um pouco todo dia, sempre com o metrônomo, registrando o BPM limpo no final.');
  if (st.streak >= 12) add('info', 'Dia de descanso', `${st.streak} dias seguidos de treino. Um dia de descanso por semana ajuda o corpo a fixar o que aprendeu e evita lesão.`);
  // por exercício
  for (const [id, s] of Object.entries(st.ex)) {
    const e = EX[id]; if (!e) continue;
    const h = s.hist, last3 = h.slice(-3);
    if (last3.length === 3 && last3.every(x => x.q <= 2) && daysBetween(last3[2].d, today) <= 10) {
      const bpm = Math.max(30, Math.round(s.last * 0.85));
      add('warn', `Travando em "${e.name}"`, `Os três últimos registros foram "${QUAL[last3[2].q]}" ou pior. Isso é tensão, não falta de velocidade. Volte para ${bpm} bpm, solte os ombros e a pegada e só suba quando sair relaxado.`, { ex: id, bpm, label: `Treinar a ${bpm} bpm` });
      continue;
    }
    if (!s.mastered && h.length >= 6) {
      const before = Math.max(0, ...h.slice(0, -4).filter(x => x.q >= 4).map(x => x.bpm));
      const recent = Math.max(0, ...h.slice(-4).filter(x => x.q >= 4).map(x => x.bpm));
      if (before && recent <= before && daysBetween(h[h.length - 1].d, today) <= 14) {
        const prev = e.lesson.ex[e.lesson.ex.indexOf(e) - 1];
        add('warn', `Platô em "${e.name}"`, `Seu melhor BPM limpo não sobe há 4 sessões (${before} bpm). Estratégias: treine 10 bpm abaixo por uma semana, divida o exercício em partes, toque com o clique nas subdivisões e alterne dias com outro exercício${prev ? ` (por exemplo "${prev.name}")` : ''}.`, prev ? { ex: prev.id, label: `Abrir "${prev.name}"` } : { ex: id, bpm: Math.round(before - 10), label: `Treinar a ${Math.round(before - 10)} bpm` });
      }
    }
    if (s.mastered && daysBetween(s.masteredAt, today) <= 7) add('good', `Dominado: ${e.name}`, `Você chegou à meta de ${e.bpm[1]} bpm com qualidade. ${s.verified ? 'O microfone confirmou o tempo.' : 'Confirme com o professor que ouve para ter certeza do tempo.'}`);
  }
  // equilíbrio entre mãos e pés
  const best = id => st.ex[id]?.best || 0;
  const pair = (a, b, labelA, labelB) => { if (EX[a] && EX[b] && best(a) && best(b) && Math.abs(best(a) - best(b)) >= 10) { const weak = best(a) < best(b) ? a : b; add('warn', 'Lado fraco', `${best(a) < best(b) ? labelA : labelB} está ${Math.abs(best(a) - best(b))} bpm atrás do outro lado. Dê treino extra a ele: comece por ele nos exercícios e faça séries só com ele.`, { ex: weak, label: `Treinar "${EX[weak].name}"` }); } };
  pair('fund-1a', 'fund-1b', 'A mão direita', 'A mão esquerda');
  pair('pd-2a', 'pd-2b', 'Começando com o pé direito, você', 'Começando com o pé esquerdo, você');
  // tempo (microfone)
  const tms = st.timing.slice(-6).map(e => e.timing);
  if (tms.length >= 3) {
    const m = mean(tms.map(t => t.mean)), s = mean(tms.map(t => t.sd)), sc = Math.round(mean(tms.map(t => t.score)));
    if (m <= -8) add('warn', 'Você está correndo', `Nas últimas análises do microfone você ficou em média ${Math.abs(Math.round(m))} ms adiantado. Treine com o clique só no 2 e 4 e com o clique que some (módulo Tempo e controle).`, EX['tempo-1a'] ? { ex: 'tempo-1a', label: 'Abrir clique no 2 e 4' } : null);
    else if (m >= 8) add('warn', 'Você está arrastando', `Nas últimas análises você ficou em média ${Math.round(m)} ms atrasado. Prepare o movimento antes do tempo e treine com o clique no contratempo.`);
    if (s >= 16) add('info', 'Regularidade', `O desvio médio entre as notas está em ${Math.round(s)} ms. Para soar profissional, o alvo é abaixo de 10 ms. Menos velocidade e mais repetição limpa.`);
    if (sc >= 85) add('good', 'Tempo sólido', `Média ${sc}/100 nas últimas análises do microfone.`);
  } else if (st.all.length >= 6) add('info', 'Use o professor que ouve', 'Você ainda quase não usou o microfone. Ele mostra se você corre, arrasta ou se uma nota específica da sextina está fora. É a forma mais honesta de medir seu tempo.');
  // amplitude do estudo
  const lastByMod = {};
  for (const e of st.all) { const x = EX[e.ex]; if (x) lastByMod[x.module.id] = e.d; }
  const totalDays = Object.keys(st.days).length;
  if (totalDays >= 10 && !lastByMod.leitura) add('info', 'Leitura', 'Você ainda não começou o módulo de leitura. Ler partitura é o que permite tocar em estúdio, em igreja com repertório novo e em qualquer banda sem precisar decorar tudo.', MOD.leitura ? { ex: MOD.leitura.exList[0].id, label: 'Começar leitura' } : null);
  const styles = ['gospel', 'rock', 'br', 'metal'].filter(id => MOD[id] && !lastByMod[id]);
  if (totalDays >= 14 && styles.length) add('info', 'Estilos', `Você ainda não estudou ${styles.map(id => MOD[id].name).join(', ')}. Um baterista completo transita entre estilos. Coloque um deles no foco da semana.`);
  const stale = Object.entries(lastByMod).filter(([id, d]) => daysBetween(d, today) >= 21).map(([id]) => MOD[id]?.name).filter(Boolean);
  if (stale.length) add('info', 'Revisão', `Faz mais de 3 semanas que você não toca ${stale.slice(0, 3).join(', ')}. Uma revisão rápida evita perder o que já conquistou.`);
  const order = { alert: 0, warn: 1, info: 2, good: 3 };
  return out.sort((a, b) => order[a.k] - order[b.k]).slice(0, 12);
}

// Resumo em JSON enviado à IA (Gemini) junto com a pergunta.
export function studentContext() {
  const st = stats(), P = Store.perfil;
  const exs = Object.entries(st.ex).map(([id, s]) => ({ nome: EX[id].name, modulo: EX[id].module.name, melhor_limpo: s.best || null, meta: EX[id].bpm[1], ultimo: s.last, ultima_qualidade: QUAL[s.lastQ], treinos: s.n, dominado: s.mastered, ultimo_treino: s.lastD }));
  const recent = st.all.slice(-25).map(e => ({ data: e.d, exercicio: EX[e.ex]?.name || e.name || 'Treino livre', bpm: e.bpm, qualidade: `${e.q} (${QUAL[e.q]})`, minutos: e.min, obs: e.note || undefined, microfone: e.timing ? { nota: e.timing.score, media_ms: e.timing.mean, desvio_ms: e.timing.sd } : undefined }));
  return JSON.stringify({
    hoje: st.today,
    objetivos: { minutos_por_dia: P.dailyMin, dias_por_semana: P.daysPerWeek, foco: (P.focus || []).map(id => MOD[id]?.name).filter(Boolean) },
    resumo: { minutos_totais: Math.round(st.totalMin), sequencia_dias: st.streak, dominados: st.mastered, minutos_ultimas_4_semanas: st.weeks.slice(-4).map(w => ({ semana: w.start, minutos: Math.round(w.min), dias: w.days })) },
    observacoes_do_professor_local: insights().map(i => i.title + ': ' + i.text),
    exercicios_praticados: exs, registros_recentes: recent,
    proximos_por_modulo: MODULES.map(m => ({ modulo: m.name, proximos: m.exList.filter(e => !st.ex[e.id]?.mastered).slice(0, 2).map(e => `${e.name} (meta ${e.bpm[1]} bpm)`) }))
  });
}
export function curriculumIndex() {
  return MODULES.map(m => `${m.name}: ` + m.lessons.map(l => `${l.name} [${l.ex.map(e => e.name).join('; ')}]`).join(' | ')).join('\n');
}
