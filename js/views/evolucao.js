// Tela: Evolução (gráficos e histórico).
import { registerView, registerActions, renderTab, el } from '../ui.js';
import { Store, deleteLog } from '../store.js';
import { MODULES, EX, EXLIST, TOTAL_EX } from '../curriculum/index.js';
import { stats, level, QUAL } from '../stats.js';
import { bpmChartSVG, weeksSVG, heatHTML, scoreTrendSVG } from '../charts.js';
import { esc, fmtMin, fmtDate, toast } from '../util.js';

let evoEx = null, confirmDel = null;

function render(v) {
  const st = stats(), lv = level(st), P = Store.perfil;
  const withHist = EXLIST.filter(e => st.ex[e.id] && st.ex[e.id].n > 0);
  if (!evoEx || !st.ex[evoEx]) evoEx = withHist.length ? withHist.slice().sort((a, b) => st.ex[b.id].lastAt < st.ex[a.id].lastAt ? -1 : 1)[0].id : null;
  const recent = st.all.slice(-60).reverse();
  const W = Math.max(320, Math.min(1080, (v.clientWidth || 900) - 44)), halfW = W > 820 ? Math.round((W - 22) / 2) - 2 : W;
  const tm = st.timing;
  v.innerHTML = `
  <div class="stack8"><div class="eyebrow">Seu histórico</div><h1 class="h-page">Evolução</h1>
  <p class="lead">Tudo aqui sai dos treinos que você registra. Registre sempre o BPM em que tocou limpo, não o mais rápido que conseguiu.</p></div>
  <div class="tiles">
    <div class="tile"><span class="l">Tempo total de estudo</span><span class="v">${fmtMin(st.totalMin)}</span><span class="d">${Object.keys(st.days).length} dias com treino</span></div>
    <div class="tile"><span class="l">Sequência</span><span class="v">${st.streak} ${st.streak === 1 ? 'dia' : 'dias'}</span><span class="d">${st.days[st.today] ? 'hoje já conta' : 'treine hoje para manter'}</span></div>
    <div class="tile"><span class="l">Exercícios dominados</span><span class="v">${st.mastered}<span class="vs"> / ${TOTAL_EX}</span></span><span class="d">${Object.values(st.ex).filter(s => !s.mastered).length} em prática · ${Object.values(st.ex).filter(s => s.verified).length} com tempo verificado</span></div>
    <div class="tile"><span class="l">Nível</span><span class="v">${lv.name}</span><span class="d">${lv.next ? `faltam ${lv.toNext} dominados para ${lv.next}` : 'nível máximo'}</span><div class="meter mt6"><i style="width:${(lv.pct * 100).toFixed(0)}%"></i></div></div>
  </div>
  ${st.all.length === 0 ? `<div class="empty"><b>Seus gráficos aparecem aqui.</b><span>Depois do primeiro treino registrado você vê os minutos por semana, o calendário de estudo, o progresso por módulo, a curva de BPM de cada exercício e a sua nota de tempo no microfone.</span><button class="btn primary" data-act="tab" data-tab="hoje">Ir para a aula de hoje</button></div>` : ''}
  <div class="grid2 even">
    <div class="card"><h3>Minutos por semana</h3><div class="sub">Últimas 12 semanas · meta de ${fmtMin(P.dailyMin * P.daysPerWeek)} por semana</div>
      <div class="chart mt12">${weeksSVG(st.weeks, P.dailyMin * P.daysPerWeek, halfW - 40, 220)}</div></div>
    <div class="card"><h3>Calendário de estudo</h3><div class="sub">Últimas 18 semanas, de segunda a domingo</div><div class="mt14">${heatHTML(st.days)}</div></div>
  </div>
  <div class="card">
    <div class="row between"><div><h3>Curva de BPM</h3><div class="sub">Ponto cheio = limpo (qualidade 4 ou 5) · ponto vazado = com problemas · linha verde = meta</div></div>
      ${withHist.length ? `<label class="f minw240">Exercício<select id="evoSel">${withHist.map(e => `<option value="${e.id}" ${e.id === evoEx ? 'selected' : ''}>${esc(e.module.name)}: ${esc(e.name)}</option>`).join('')}</select></label>` : ''}</div>
    <div class="chart mt12">${evoEx ? bpmChartSVG(st.ex[evoEx].hist, EX[evoEx].bpm[1], W - 40, 260) : '<p class="muted small pad20">Registre um exercício da trilha para ver a curva aqui.</p>'}</div>
  </div>
  <div class="card"><h3>Tempo medido pelo microfone</h3><div class="sub">Nota de 0 a 100 de cada treino analisado pelo professor que ouve</div>
    <div class="chart mt12">${tm.length ? scoreTrendSVG(tm.slice(-40), W - 40, 200) : '<p class="muted small pad20">Ligue "Ouvir meu treino" na sala de treino para medir seu tempo de verdade.</p>'}</div></div>
  <div class="card"><h3>Progresso por módulo</h3><div class="modprog mt14">${MODULES.map(m => { const n = m.exList.length, d = m.exList.filter(e => st.ex[e.id]?.mastered).length, p = m.exList.filter(e => st.ex[e.id] && !st.ex[e.id].mastered).length; return `
    <div class="mp"><span>${esc(m.name)}</span><div class="meter ${d === n ? 'good' : ''}" data-tip="${esc(`${d} dominados, ${p} em prática, ${n - d - p} novos`)}"><i style="width:${(d / n * 100).toFixed(1)}%"></i></div><span>${d}/${n}</span></div>`; }).join('')}</div></div>
  <div class="card">
    <div><h3>Histórico</h3><div class="sub">Últimos ${recent.length} registros</div></div>
    ${recent.length ? `<div class="tablewrap mt10"><table class="log"><thead><tr><th>Data</th><th>Exercício</th><th>BPM</th><th>Como foi</th><th>Tempo</th><th>Min</th><th>Observação</th><th></th></tr></thead><tbody>
      ${recent.map(e => `<tr><td class="n">${fmtDate(e.d)}</td><td>${esc(EX[e.ex]?.name || e.name || 'Treino livre')}</td><td class="n"><b>${e.bpm}</b></td>
        <td><span class="qdot" aria-label="${e.q} de 5">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= e.q ? 'on' : ''}"></i>`).join('')}</span> <span class="small muted">${QUAL[e.q] || ''}</span></td>
        <td class="n">${e.timing ? `${e.timing.score}/100` : '<span class="muted">—</span>'}</td><td class="n">${e.min}</td><td class="small muted">${esc(e.note || '')}</td>
        <td>${confirmDel === e.t ? `<span class="confirm">Apagar? <button class="btn sm danger" data-act="delLog" data-t="${esc(e.t)}">Sim</button><button class="btn sm ghost" data-act="cancelDel">Não</button></span>` : `<button class="btn ghost sm" data-act="askDel" data-t="${esc(e.t)}">Apagar</button>`}</td></tr>`).join('')}
      </tbody></table></div>` : '<p class="muted small mt10">Nenhum registro ainda.</p>'}
  </div>`;
  el('evoSel')?.addEventListener('change', ev => { evoEx = ev.target.value; renderTab(); });
}
registerView('evolucao', render);
registerActions({
  askDel: a => { confirmDel = a.dataset.t; renderTab(); },
  cancelDel: () => { confirmDel = null; renderTab(); },
  delLog: a => { confirmDel = null; deleteLog(a.dataset.t); toast('Registro apagado.'); }
});
