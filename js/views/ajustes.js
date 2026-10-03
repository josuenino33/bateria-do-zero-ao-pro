// Tela: Ajustes (backup, IA, microfone, gravações, aparência, instalação).
import { registerView, registerActions, renderTab, el, ui } from '../ui.js';
import { Store, saveSettings, buildBackup, markBackup, parseBackup, importBackup, listRecs, getRec, deleteRec, recsAvailable, eraseAll } from '../store.js';
import { listModels, pickModel, DEFAULT_MODEL } from '../ai.js';
import { Listen } from '../listen.js';
import { runCalibration } from './treino.js';
import { installHelp } from './hoje.js';
import { esc, fmtDate, toast, downloadFile, dkey } from '../util.js';

let pendingImport = null, recs = null, playing = { id: null, url: '' }, confirmErase = false, keyStatus = '';

export function applyTheme() {
  const t = Store.settings.theme;
  if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
  else document.documentElement.removeAttribute('data-theme');
}

function render(v) {
  const S = Store.settings, st = Store;
  if (recs === null && recsAvailable()) listRecs().then(r => { recs = r; if (ui.tab === 'ajustes') renderTab(); });
  v.innerHTML = `
  <div class="stack8"><div class="eyebrow">Configurações</div><h1 class="h-page">Ajustes</h1>
  <p class="lead">Seus dados ficam só neste aparelho${st.mode === 'idb' ? '' : ' (modo simplificado, sem gravações)'}. Faça backup com frequência e guarde o arquivo no Google Drive, no e-mail ou onde preferir.</p></div>
  <div class="grid2 even">
    <div class="card stack12">
      <h3>Backup e restauração</h3>
      <p class="small muted">${st.logs.length} ${st.logs.length === 1 ? 'registro' : 'registros'}.${st.lastBackup ? `Último backup: ${fmtDate(st.lastBackup)}.` : 'Nenhum backup feito ainda.'}</p>
      <div class="row"><button class="btn primary" data-act="backupSave">Baixar backup</button>${navigator.canShare ? '<button class="btn" data-act="backupShare">Compartilhar backup</button>' : ''}</div>
      <label class="btn filebtn">Restaurar de um arquivo<input type="file" id="impFile" accept="application/json,.json" hidden></label>
      ${pendingImport ? `<div class="ins info"><b>Arquivo com ${pendingImport.logs.length} registros</b><p>Juntar mantém o que já está aqui e acrescenta o que falta. Substituir apaga os registros atuais e fica só com os do arquivo.</p>
        <div class="row"><button class="btn sm primary" data-act="impMerge">Juntar</button><button class="btn sm danger" data-act="impReplace">Substituir</button><button class="btn sm ghost" data-act="impCancel">Cancelar</button></div></div>` : ''}
      <p class="small muted">Também aceita o backup da versão antiga que rodava no Claude.</p>
    </div>
    <div class="card stack12">
      <h3>Professor IA (Gemini)</h3>
      <p class="small muted">Opcional. Gere uma chave gratuita em <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a>. A chave fica só neste aparelho e não entra no backup.</p>
      <label class="f">Chave do Gemini<input type="password" id="aiKey" autocomplete="off" spellcheck="false" value="${esc(S.aiKey)}" placeholder="Cole aqui a chave"></label>
      <label class="f">Modelo<input type="text" id="aiModel" spellcheck="false" value="${esc(S.aiModel)}" placeholder="${DEFAULT_MODEL}"></label>
      <div class="row"><button class="btn" data-act="aiTest">Testar chave</button>${S.aiKey ? '<button class="btn ghost sm" data-act="aiClear">Remover chave</button>' : ''}</div>
      <p class="small" id="aiStatus">${esc(keyStatus)}</p>
    </div>
    <div class="card stack12">
      <h3>Microfone</h3>
      ${Listen.supported() ? `<p class="small muted">${Store.calib ? `Calibrado em ${fmtDate(Store.calib.at)}: ${Math.round(Store.calib.latency * 1000)} ms (${Store.calib.method === 'auto' ? 'pelo alto-falante' : 'tocando junto'}).` : 'Ainda não calibrado.'} Recalibre quando trocar de fone, caixa de som ou aparelho.</p>
      <ol class="steps"><li><b>Pelo alto-falante:</b> sem fone, volume alto, ambiente em silêncio. O app toca 8 estalos e mede o atraso.</li><li><b>Tocando junto:</b> para quem usa fone. Toque no pad junto com 16 cliques.</li></ol>
      <div class="row"><button class="btn" data-act="calAutoA">Calibrar pelo alto-falante</button><button class="btn" data-act="calTapA">Calibrar tocando</button></div>
      <p class="small" id="calStatus"></p>
      <label class="vol">Sensibilidade<input type="range" id="sens" min="0" max="1" step="0.05" value="${S.micSens}"></label>`
      : '<p class="small muted">O microfone só funciona com o app aberto por um endereço seguro (https), como o do GitHub Pages, e com permissão do navegador.</p>'}
    </div>
    <div class="card stack12">
      <h3>Gravações</h3>
      ${!recsAvailable() ? '<p class="small muted">Gravações não estão disponíveis neste navegador.</p>' : recs === null ? '<p class="small muted">Carregando…</p>' : recs.length ? `<div class="recs">${recs.map(r => `<div class="rec"><div class="minw"><b>${esc(r.name || 'Gravação')}</b><span class="small muted">${fmtDate(r.d)} · ${r.bpm} bpm${r.score != null ? ` · tempo ${r.score}/100` : ''} · ${(r.size / 1024 / 1024).toFixed(1)} MB</span>${playing.id === r.id ? `<audio controls autoplay src="${playing.url}"></audio>` : ''}</div>
        <div class="row gap6"><button class="btn sm" data-act="recPlay" data-id="${r.id}">Ouvir</button><button class="btn sm ghost" data-act="recDl" data-id="${r.id}">Baixar</button><button class="btn sm ghost" data-act="recDel" data-id="${r.id}">Apagar</button></div></div>`).join('')}</div>` : '<p class="small muted">Nenhuma gravação guardada. Ligue "Ouvir meu treino" e "Gravar" na sala de treino.</p>'}
    </div>
    <div class="card stack12">
      <h3>Aparência e partitura</h3>
      <div class="stack6"><span class="flabel">Tema</span><div class="seg">${[['auto', 'Automático'], ['light', 'Claro'], ['dark', 'Escuro']].map(([k, l]) => `<button data-act="theme" data-v="${k}" aria-pressed="${S.theme === k}">${l}</button>`).join('')}</div></div>
      <div class="stack6"><span class="flabel">Mostrar exercícios em</span><div class="seg">${[['grid', 'Grade'], ['staff', 'Partitura']].map(([k, l]) => `<button data-act="notation" data-v="${k}" aria-pressed="${S.notation === k}">${l}</button>`).join('')}</div></div>
    </div>
    <div class="card stack12">
      <h3>Instalar no celular ou computador</h3>
      ${window.__installPrompt ? '<button class="btn primary" data-act="install">Instalar o app</button>' : ''}
      ${installHelp()}
      <p class="small muted">Depois de instalado, o app abre em tela cheia e funciona sem internet. Só o professor IA precisa de conexão.</p>
    </div>
  </div>
  <div class="card stack12 danger-zone">
    <h3>Apagar tudo</h3>
    <p class="small muted">Apaga registros, gravações, objetivos e calibração deste aparelho. Faça um backup antes.</p>
    ${confirmErase ? '<div class="row"><span class="small">Tem certeza? Não dá para desfazer.</span><button class="btn sm danger" data-act="eraseYes">Apagar tudo</button><button class="btn sm ghost" data-act="eraseNo">Cancelar</button></div>' : '<button class="btn danger sm" data-act="eraseAsk">Apagar todos os dados</button>'}
  </div>
  <p class="small muted center">Método Rufar · código aberto no GitHub · seus dados nunca saem do aparelho, exceto as perguntas que você manda ao Gemini.</p>`;
  el('impFile')?.addEventListener('change', async ev => {
    const f = ev.target.files && ev.target.files[0]; if (!f) return;
    try { pendingImport = parseBackup(JSON.parse(await f.text())); }
    catch (e) { toast(e.message || 'Arquivo inválido.'); pendingImport = null; }
    renderTab();
  });
  el('aiKey')?.addEventListener('change', ev => saveSettings({ aiKey: ev.target.value.trim() }, true));
  el('aiModel')?.addEventListener('change', ev => saveSettings({ aiModel: ev.target.value.trim() }, true));
  el('sens')?.addEventListener('input', ev => { saveSettings({ micSens: +ev.target.value }, true); Listen.setSens(+ev.target.value); });
}

async function doImport(mode) {
  if (!pendingImport) return;
  try { const n = await importBackup(pendingImport, mode); toast(`Backup restaurado: ${n} registros.`); }
  catch (e) { toast(e.message); }
  pendingImport = null; renderTab();
}
const backupName = () => `metodo-rufar-backup-${dkey()}.json`;

registerView('ajustes', render);
registerActions({
  backupSave: () => { downloadFile(backupName(), JSON.stringify(buildBackup(), null, 2)); markBackup(); toast('Backup baixado. Guarde o arquivo em um lugar seguro.'); },
  backupShare: async () => {
    const file = new File([JSON.stringify(buildBackup(), null, 2)], backupName(), { type: 'application/json' });
    try { if (navigator.canShare && navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: 'Backup do Método Rufar' }); markBackup(); } else toast('Este aparelho não compartilha arquivos. Use "Baixar backup".'); }
    catch (e) { if (e && e.name !== 'AbortError') toast('Não foi possível compartilhar.'); }
  },
  impMerge: () => doImport('merge'), impReplace: () => doImport('replace'), impCancel: () => { pendingImport = null; renderTab(); },
  aiTest: async () => {
    const key = (el('aiKey').value || '').trim(); if (!key) { toast('Cole a chave primeiro.'); return; }
    saveSettings({ aiKey: key }, true); keyStatus = 'Testando…'; el('aiStatus').textContent = keyStatus;
    try { const names = await listModels(key); const m = pickModel(names); saveSettings({ aiModel: m }, true); keyStatus = `Chave funcionando. Modelo escolhido: ${m}.`; }
    catch (e) { keyStatus = e.message || 'Falhou.'; }
    renderTab();
  },
  aiClear: () => { saveSettings({ aiKey: '', aiModel: '' }); keyStatus = 'Chave removida.'; renderTab(); },
  calAutoA: () => runCalibration('auto', el('calStatus')).then(() => renderTab()),
  calTapA: () => runCalibration('tap', el('calStatus')).then(() => renderTab()),
  recPlay: async a => { const r = await getRec(a.dataset.id); if (!r) return; if (playing.url) URL.revokeObjectURL(playing.url); playing = { id: r.id, url: URL.createObjectURL(r.blob) }; renderTab(); },
  recDl: async a => { const r = await getRec(a.dataset.id); if (!r) return; const ext = /mp4|aac/.test(r.mime || '') ? 'm4a' : 'webm'; downloadFile(`rufar-${r.d}-${r.ex}.${ext}`, r.blob); },
  recDel: async a => { await deleteRec(a.dataset.id); recs = null; toast('Gravação apagada.'); renderTab(); },
  theme: a => { saveSettings({ theme: a.dataset.v }); applyTheme(); },
  notation: a => saveSettings({ notation: a.dataset.v }),
  install: async () => { const p = window.__installPrompt; if (!p) return; p.prompt(); try { await p.userChoice; } catch {} window.__installPrompt = null; renderTab(); },
  eraseAsk: () => { confirmErase = true; renderTab(); }, eraseNo: () => { confirmErase = false; renderTab(); },
  eraseYes: async () => { confirmErase = false; await eraseAll(); recs = null; toast('Dados apagados.'); }
});
