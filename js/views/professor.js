// Tela: Professor (orientações locais + IA opcional com Gemini).
import { registerView, registerActions, renderTab, el } from '../ui.js';
import { Store, saveProfessor } from '../store.js';
import { insights, studentContext, curriculumIndex } from '../teacher.js';
import { chat } from '../ai.js';
import { esc, mdHTML, toast, $$ } from '../util.js';

const PF = { busy: false, ctl: null, analysis: '', chat: [], chatBusy: false, chatCtl: null };

const RULES = () => `Você é o professor de bateria do aluno dentro do app "Método Rufar". Fale em português do Brasil, de forma direta, calorosa e exigente com técnica e relaxamento, como um professor experiente que também toca profissionalmente.
Contexto do aluno: ele se sentia travado, tinha dificuldade com sextinas, fazia sempre as mesmas viradas, quer dominar pedal duplo e quer se tornar um baterista profissional completo. Estilos: gospel/louvor, rock/pop, metal e ritmos brasileiros.
Regras:
- Use só os dados fornecidos. Nunca invente treinos ou números. Se não houver registros, diga isso e dê um plano para começar.
- Ao recomendar exercícios, use o nome exato de um exercício do currículo abaixo e um BPM específico.
- Manulação: D = mão direita, E = mão esquerda, B = bumbo.
- "microfone" nos registros é a medida real de tempo: nota 0 a 100, média em ms (negativo = adiantado, positivo = atrasado) e desvio em ms (menor = mais regular).
- Seja concreto e curto. Use markdown simples (títulos com ##, listas com -, negrito com **). Nada de tabelas.
- Se houver sinais de tensão ou dor, oriente a baixar o andamento e descansar; com dor persistente, procurar médico ou fisioterapeuta.

Currículo do app (módulo: lições [exercícios]):
${curriculumIndex()}`;

const hasKey = () => !!(Store.settings.aiKey || '').trim();

function render(v) {
  const list = insights(), saved = Store.professor, key = hasKey();
  const analysis = PF.busy ? PF.analysis : (PF.analysis || (saved && saved.text) || '');
  v.innerHTML = `
  <div class="stack8"><div class="eyebrow">Acompanhamento</div><h1 class="h-page">Professor</h1>
  <p class="lead">O professor lê os seus registros e as medidas do microfone. As orientações abaixo funcionam sem internet. A conversa com IA é opcional e usa uma chave gratuita do Google Gemini.</p></div>
  <div class="card">
    <h3>Orientações de hoje</h3>
    <div class="insights">${list.map(i => `<div class="ins ${i.k}"><b>${esc(i.title)}</b><p>${esc(i.text)}</p>${i.action ? `<button class="btn sm" data-act="openEx" data-ex="${i.action.ex}" ${i.action.bpm ? `data-bpm="${i.action.bpm}"` : ''}>${esc(i.action.label)}</button>` : ''}</div>`).join('')}</div>
  </div>
  ${key ? `
  <div class="prof">
    <div class="card stack14">
      <div class="row between"><div><h3>Análise com IA</h3><div class="sub">${PF.busy ? 'Analisando…' : saved && !PF.analysis ? `Última análise em ${new Date(saved.at).toLocaleDateString('pt-BR')}` : 'Diagnóstico, prioridades da semana com BPM e correções'}</div></div>
        ${PF.busy ? `<button class="btn" data-act="stopAnalysis">Parar</button>` : `<button class="btn primary" data-act="analyze">${analysis ? 'Analisar de novo' : 'Analisar minha evolução'}</button>`}</div>
      <div class="answer" id="anaOut">${analysis ? mdHTML(analysis) : PF.busy ? '<p class="thinking">Pensando…</p>' : '<p class="muted">Funciona melhor depois de alguns dias de registros, mas já dá um plano de início se você ainda não treinou.</p>'}</div>
    </div>
    <div class="card stack14">
      <div><h3>Pergunte ao professor</h3><div class="sub">Técnica, postura, viradas, repertório, rotina de estudo. Ctrl+Enter envia.</div></div>
      <div class="chat" id="chatBox">${PF.chat.map(m => `<div class="msg ${m.role === 'user' ? 'u' : 'a'}">${m.role === 'user' ? esc(m.content) : `<div class="answer">${m.content ? mdHTML(m.content) : '<p class="thinking">Pensando…</p>'}</div>`}</div>`).join('')}</div>
      ${PF.chat.length ? '' : `<div class="sugg">${['Como paro de travar o braço nas sextinas?', 'Monte um plano de 4 semanas para pedal duplo', 'Que viradas novas eu crio com paradiddle?', 'Como estudar com música de verdade?', 'Como me preparar para tocar no culto?'].map(q => `<button class="chip" data-act="askSugg" data-q="${esc(q)}">${esc(q)}</button>`).join('')}</div>`}
      <div class="stack8"><textarea id="chatIn" placeholder="Escreva sua pergunta…"></textarea>
        <div class="row">${PF.chatBusy ? '<button class="btn" data-act="stopChat">Parar</button>' : '<button class="btn primary" data-act="sendChat">Enviar</button>'}${PF.chat.length ? '<button class="btn ghost sm" data-act="clearChat">Limpar conversa</button>' : ''}</div></div>
    </div>
  </div>` : `
  <div class="card stack12">
    <h3>Conversar com o professor IA (opcional e gratuito)</h3>
    <p class="muted">Com uma chave gratuita do Google Gemini, o professor escreve análises da sua evolução e responde perguntas livres.</p>
    <ol class="steps">
      <li>Abra <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a> e entre com sua conta Google.</li>
      <li>Clique em "Create API key" e copie a chave.</li>
      <li>Cole a chave em Ajustes, no campo "Chave do Gemini", e toque em "Testar chave".</li>
    </ol>
    <p class="small muted">A chave fica só neste aparelho. No plano gratuito há limite de pedidos por dia, e o Google pode usar as perguntas para melhorar os produtos dele.</p>
    <button class="btn" data-act="tab" data-tab="ajustes">Ir para Ajustes</button>
  </div>`}`;
  const cb = el('chatBox'); if (cb) cb.scrollTop = cb.scrollHeight;
  el('chatIn')?.addEventListener('keydown', ev => { if (ev.key === 'Enter' && (ev.ctrlKey || ev.metaKey)) { ev.preventDefault(); sendChat(); } });
}

async function analyze() {
  if (PF.busy || !hasKey()) return;
  PF.busy = true; PF.analysis = ''; PF.ctl = new AbortController(); renderTab();
  const prompt = `Dados do aluno (JSON):\n${studentContext()}\n\nEscreva a análise da evolução do aluno com estas seções:\n## Diagnóstico\n(2 a 4 frases sobre o momento atual, citando números reais)\n## Prioridades desta semana\n(3 itens, cada um com exercício do currículo, BPM inicial e BPM alvo)\n## Correção técnica\n(1 ou 2 orientações de técnica e relaxamento ligadas aos dados, inclusive do microfone)\n## Desafio criativo\n(uma virada nova para ele inventar a partir de algo que já pratica)\nMáximo de 350 palavras.`;
  try {
    const text = await chat({ key: Store.settings.aiKey.trim(), model: Store.settings.aiModel, system: RULES(), messages: [{ role: 'user', content: prompt }], signal: PF.ctl.signal, onText: t => { PF.analysis = t; const o = el('anaOut'); if (o) o.innerHTML = mdHTML(t); } });
    PF.analysis = text; saveProfessor(text);
  } catch (e) { PF.analysis = (e && e.text) || PF.analysis; if (e && e.message) toast(e.message, 4500); }
  finally { PF.busy = false; PF.ctl = null; renderTab(); }
}
async function sendChat(text) {
  const box = el('chatIn'), q = (text || (box && box.value) || '').trim();
  if (!q || PF.chatBusy || !hasKey()) return;
  if (box) box.value = '';
  PF.chat.push({ role: 'user', content: q }); PF.chat.push({ role: 'assistant', content: '' });
  PF.chatBusy = true; PF.chatCtl = new AbortController(); renderTab();
  const msg = PF.chat[PF.chat.length - 1];
  const turns = PF.chat.slice(0, -1).filter(m => m.content).slice(-12);
  const messages = [{ role: 'user', content: `Dados atuais do aluno (JSON):\n${studentContext()}\n\nResponda às perguntas a seguir com até 250 palavras, a menos que eu peça um plano detalhado.` }, { role: 'assistant', content: 'Certo, li seus dados. Pode perguntar.' }, ...turns];
  try {
    msg.content = await chat({ key: Store.settings.aiKey.trim(), model: Store.settings.aiModel, system: RULES(), messages, signal: PF.chatCtl.signal, onText: t => { msg.content = t; const b = $$('#chatBox .msg.a .answer'); const last = b[b.length - 1]; if (last) last.innerHTML = mdHTML(t); const cb = el('chatBox'); if (cb) cb.scrollTop = cb.scrollHeight; } });
  } catch (e) { msg.content = (e && e.text) || ''; if (e && e.message) toast(e.message, 4500); if (!msg.content) PF.chat.pop(); }
  finally { PF.chatBusy = false; PF.chatCtl = null; renderTab(); }
}

registerView('professor', render);
registerActions({
  analyze: () => analyze(), stopAnalysis: () => PF.ctl?.abort(),
  sendChat: () => sendChat(), stopChat: () => PF.chatCtl?.abort(),
  clearChat: () => { PF.chat = []; renderTab(); }, askSugg: a => sendChat(a.dataset.q)
});
