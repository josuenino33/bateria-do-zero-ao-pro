// Professor IA opcional com a API do Google Gemini (chave gratuita do Google AI Studio).
// A chave fica só neste aparelho e vai direto do navegador para o Google.
const BASE = 'https://generativelanguage.googleapis.com/v1beta';
export const DEFAULT_MODEL = 'gemini-2.5-flash';

function errFrom(status, body) {
  const msg = (body && body.error && body.error.message) || '';
  if (status === 400 && /api key/i.test(msg)) return { code: 'key', message: 'Chave inválida. Confira se copiou a chave inteira do Google AI Studio.' };
  if (status === 401 || status === 403) return { code: 'key', message: 'A chave não tem permissão para usar o Gemini. Gere uma nova no Google AI Studio.' };
  if (status === 404) return { code: 'model', message: 'Modelo não encontrado. Toque em "Testar chave" para escolher um modelo disponível.' };
  if (status === 429) return { code: 'limit', message: 'Limite do plano gratuito atingido. Espere alguns minutos (ou até amanhã) e tente de novo.' };
  if (status >= 500) return { code: 'server', message: 'O Gemini está instável agora. Tente de novo em instantes.' };
  return { code: 'other', message: msg || `Erro ${status} ao falar com o Gemini.` };
}

export async function listModels(key) {
  let res;
  try { res = await fetch(`${BASE}/models?pageSize=200`, { headers: { 'x-goog-api-key': key } }); }
  catch { throw { code: 'net', message: 'Sem conexão com a internet.' }; }
  const body = await res.json().catch(() => null);
  if (!res.ok) throw errFrom(res.status, body);
  return (body.models || []).filter(m => (m.supportedGenerationMethods || []).includes('generateContent')).map(m => m.name.replace(/^models\//, ''));
}

// Escolhe o melhor modelo "flash" estável (rápido e dentro do plano gratuito).
export function pickModel(names) {
  const ver = n => { const m = n.match(/gemini-(\d+(?:\.\d+)?)/); return m ? parseFloat(m[1]) : 0; };
  const stable = names.filter(n => /^gemini-[\d.]+-flash$/.test(n));
  const any = names.filter(n => /flash/.test(n) && !/(lite|image|tts|audio|live|thinking|exp)/.test(n));
  const pool = stable.length ? stable : any.length ? any : names;
  return pool.sort((a, b) => ver(b) - ver(a))[0] || DEFAULT_MODEL;
}

// Conversa com streaming. messages: [{role:'user'|'assistant', content}]
export async function chat({ key, model, system, messages, onText, signal }) {
  // o Gemini exige alternância entre usuário e modelo: junta mensagens seguidas do mesmo lado
  const contents = [];
  for (const m of messages) {
    const role = m.role === 'assistant' ? 'model' : 'user', last = contents[contents.length - 1];
    if (last && last.role === role) last.parts[0].text += '\n\n' + m.content;
    else contents.push({ role, parts: [{ text: m.content }] });
  }
  const body = {
    systemInstruction: { parts: [{ text: system }] },
    contents,
    generationConfig: { temperature: 0.7, maxOutputTokens: 4096 }
  };
  let res;
  try {
    res = await fetch(`${BASE}/models/${encodeURIComponent(model || DEFAULT_MODEL)}:streamGenerateContent?alt=sse`, {
      method: 'POST', signal, headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key }, body: JSON.stringify(body)
    });
  } catch (e) {
    if (e && e.name === 'AbortError') throw { code: 'cancelled', message: '' };
    throw { code: 'net', message: 'Sem conexão com a internet.' };
  }
  if (!res.ok) throw errFrom(res.status, await res.json().catch(() => null));
  const reader = res.body.getReader(), dec = new TextDecoder();
  let buf = '', text = '', blocked = '';
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      let i;
      while ((i = buf.indexOf('\n')) >= 0) {
        const line = buf.slice(0, i).trim(); buf = buf.slice(i + 1);
        if (!line.startsWith('data:')) continue;
        const data = line.slice(5).trim(); if (!data || data === '[DONE]') continue;
        let j; try { j = JSON.parse(data); } catch { continue; }
        const c = j.candidates && j.candidates[0];
        const parts = (c && c.content && c.content.parts) || [];
        const add = parts.filter(p => !p.thought).map(p => p.text || '').join('');
        if (add) { text += add; onText && onText(text); }
        if (j.promptFeedback && j.promptFeedback.blockReason) blocked = j.promptFeedback.blockReason;
      }
    }
  } catch (e) {
    if (e && e.name === 'AbortError') throw { code: 'cancelled', message: '', text };
    throw { code: 'net', message: 'A conexão caiu no meio da resposta.', text };
  }
  if (!text) throw { code: 'empty', message: blocked ? 'O Gemini recusou esta pergunta. Tente perguntar de outro jeito.' : 'O Gemini não devolveu resposta. Tente de novo.' };
  return text;
}
