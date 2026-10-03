// Tela: Hoje (aula do dia, objetivos, avisos).
import { registerView, registerActions, renderTab } from '../ui.js';
import { Store, savePerfil } from '../store.js';
import { MODULES, EX, TOTAL_EX } from '../curriculum/index.js';
import { stats, level, getPlan, resetPlan, blockDone, QUAL } from '../stats.js';
import { insights } from '../teacher.js';
import { esc, fmtMin, fmtDate, clamp, LS, daysBetween, toast } from '../util.js';
import { openBlock } from './treino.js';

const greeting = () => { const h = new Date().getHours(); return h < 12 ? 'Bom dia' : h < 18 ? 'Boa tarde' : 'Boa noite'; };

export function installHelp() {
  return `<ol class="steps">
    <li><b>Android (Chrome):</b> toque em ⋮ e depois em "Instalar app" ou "Adicionar à tela inicial".</li>
    <li><b>iPhone (Safari):</b> toque em Compartilhar e depois em "Adicionar à Tela de Início".</li>
    <li><b>Computador (Chrome ou Edge):</b> clique no ícone de instalar na barra de endereço.</li>
  </ol>`;
}

function render(v) {
  const st = stats(), P = Store.perfil, lv = level(st), plan = getPlan(false);
  const goalWeek = P.dailyMin * P.daysPerWeek, wk = st.thisWeek, pct = clamp(wk.min / Math.max(1, goalWeek), 0, 1);
  const dateStr = new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
  const doneN = plan.blocks.filter(b => blockDone(b, st)).length, totalPlan = plan.blocks.reduce((a, b) => a + b.min, 0);
  const tips = insights().filter(i => i.k !== 'good' || st.all.length < 3).slice(0, 3);
  const needBackup = st.all.length >= 3 && (!Store.lastBackup || daysBetween(Store.lastBackup, st.today) >= 7);
  v.innerHTML = `
  <div class="hero">
    <div class="stack8">
      <div class="eyebrow">${esc(dateStr)}</div>
      <h1 class="h-page">${greeting()}. Bora tocar.</h1>
      <p class="lead">Nível <b>${lv.name}</b> · ${st.mastered} de ${TOTAL_EX} exercícios dominados${lv.next ? ` · faltam ${lv.toNext} para ${lv.next}` : ''}${st.streak ? ` · ${st.streak} ${st.streak === 1 ? 'dia seguido' : 'dias seguidos'}` : ''}.</p>
    </div>
    <div class="weekmeter card">
      <div class="row between"><span class="small muted">Esta semana</span><span class="small"><b>${fmtMin(wk.min)}</b> de ${fmtMin(goalWeek)}</span></div>
      <div class="meter ${pct >= 1 ? 'good' : ''}"><i style="width:${(pct * 100).toFixed(1)}%"></i></div>
      <span class="small muted">${wk.days} de ${P.daysPerWeek} dias de treino</span>
    </div>
  </div>
  ${needBackup ? `<div class="banner"><span><b>Faça um backup.</b> ${Store.lastBackup ? `O último foi em ${fmtDate(Store.lastBackup)}.` : 'Você ainda não fez nenhum.'} Seus dados ficam só neste aparelho.</span><button class="btn sm" data-act="tab" data-tab="ajustes">Fazer backup</button></div>` : ''}
  <div class="grid2">
    <div class="card">
      <div class="row between">
        <div><h3>Aula de hoje</h3><div class="sub">${plan.blocks.length} blocos · cerca de ${totalPlan} min · ${doneN} ${doneN === 1 ? "feito" : "feitos"}</div></div>
        <div class="row"><button class="btn ghost sm" data-act="regen">Gerar outra aula</button>
          <button class="btn primary" data-act="startSession">${doneN === plan.blocks.length ? 'Treinar de novo' : doneN ? 'Continuar aula' : 'Começar aula'}</button></div>
      </div>
      <div class="plan">${plan.blocks.map((b, i) => { const e = EX[b.ex], done = blockDone(b, st), s = st.ex[e.id]; return `
        <div class="blk ${done ? 'done' : ''}">
          <span class="n">${done ? '✓' : i + 1}</span>
          <div class="minw"><div class="m">${b.kind} · ${esc(e.module.name)}</div><div class="t">${esc(e.name)}</div>
            <div class="m">${b.min} min · comece em ${b.bpm} bpm · meta ${e.bpm[1]} bpm${e.endurance ? ` por ${e.endurance} min` : ''}${s && s.best ? ` · seu melhor: ${s.best}` : ''}</div></div>
          <div class="r"><button class="btn sm" data-act="openSessionBlock" data-i="${i}">${done ? 'De novo' : 'Treinar'}</button></div>
        </div>`; }).join('')}</div>
    </div>
    <div class="stack22">
      <div class="card">
        <div class="row between"><h3>Recado do professor</h3><button class="btn ghost sm" data-act="tab" data-tab="professor">Ver tudo</button></div>
        <div class="insights">${tips.map(i => `<div class="ins ${i.k}"><b>${esc(i.title)}</b><p>${esc(i.text)}</p>${i.action ? `<button class="btn sm" data-act="openEx" data-ex="${i.action.ex}" ${i.action.bpm ? `data-bpm="${i.action.bpm}"` : ''}>${esc(i.action.label)}</button>` : ''}</div>`).join('')}</div>
      </div>
      <div class="card">
        <h3>Meus objetivos</h3>
        <div class="sub mb14">A aula de hoje é montada a partir daqui.</div>
        <div class="stack14">
          <div class="row">
            <label class="f grow">Minutos por dia<select id="gMin">${[15, 20, 30, 45, 60, 90].map(x => `<option value="${x}" ${x == P.dailyMin ? 'selected' : ''}>${x} min</option>`).join('')}</select></label>
            <label class="f grow">Dias por semana<select id="gDays">${[3, 4, 5, 6, 7].map(x => `<option value="${x}" ${x == P.daysPerWeek ? 'selected' : ''}>${x} dias</option>`).join('')}</select></label>
          </div>
          <div class="stack8"><span class="flabel">Foco principal</span>
            <div class="row gap8">${MODULES.filter(m => m.id !== 'fund').map(m => `<button class="chip" data-act="toggleFocus" data-mod="${m.id}" aria-pressed="${(P.focus || []).includes(m.id)}">${esc(m.name)}</button>`).join('')}</div>
          </div>
        </div>
      </div>
      ${LS.get('installSeen', false) ? '' : `<div class="card"><h3>Instale no celular</h3><div class="sub">Funciona sem internet depois de instalado.</div>${installHelp()}<button class="btn sm" data-act="hideInstall">Entendi</button></div>`}
    </div>
  </div>`;
  v.querySelector('#gMin').addEventListener('change', ev => { savePerfil({ dailyMin: Number(ev.target.value) }); resetPlan(); renderTab(); });
  v.querySelector('#gDays').addEventListener('change', ev => savePerfil({ daysPerWeek: Number(ev.target.value) }));
}
registerView('hoje', render);
registerActions({
  regen: () => { getPlan(true); renderTab(); toast('Nova aula montada.'); },
  startSession: () => { const st = stats(), plan = getPlan(false); let i = plan.blocks.findIndex(b => !blockDone(b, st)); if (i < 0) i = 0; openBlock(i); },
  openSessionBlock: a => openBlock(Number(a.dataset.i)),
  toggleFocus: a => { const id = a.dataset.mod, f = new Set(Store.perfil.focus || []); f.has(id) ? f.delete(id) : f.add(id); savePerfil({ focus: [...f] }); resetPlan(); renderTab(); },
  hideInstall: () => { LS.set('installSeen', true); renderTab(); }
});
