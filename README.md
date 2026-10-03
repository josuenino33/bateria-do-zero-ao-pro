# Método Rufar

Escola de bateria pessoal que roda no navegador e instala no celular. Tem currículo do iniciante ao avançado, partitura que toca junto, metrônomo e um professor que ouve seu treino pelo microfone. Também registra sua evolução.

Não precisa de servidor, de conta nem de mensalidade. Seus dados ficam no seu aparelho.

**Abrir o app:** https://josuenino33.github.io/metodo-rufar/ (depois de ativar o GitHub Pages, veja abaixo).

## O que tem

- **Trilha:** 15 módulos com aulas completas (explicação, passo a passo, erros comuns, dicas e músicas para ouvir). Os módulos são fundamentos, leitura de partitura, rudimentos, técnica de mãos, sextinas, independência, viradas, pedal simples e chimbal, pedal duplo, rock e pop, gospel e louvor, ritmos brasileiros, metal, compassos ímpares e tempo.
- **Sala de treino:** cada exercício aparece em grade ou em partitura de bateria. Uma marcação acompanha o que está tocando. Tem bateria de exemplo, contagem, clique configurável, acelerador automático e clique que some.
- **Professor que ouve:** pelo microfone, mede se você está adiantado ou atrasado, se as notas estão regulares e qual nota do grupo sai fora (por exemplo "a 3ª nota da sextina está 18 ms atrasada"). Também grava o treino para você ouvir depois.
- **Aula de hoje:** montada a partir dos seus objetivos e do que você ainda não dominou.
- **Evolução:** minutos por semana, calendário de estudo, curva de BPM por exercício, nota de tempo do microfone e progresso por módulo.
- **Professor:** orientações automáticas a partir dos seus registros, sem internet. Opcionalmente, conversa com IA usando uma chave gratuita do Google Gemini.
- **Funciona sem internet** depois de instalado. Só o Gemini precisa de conexão.

## Usar no celular

Abra o endereço do app (veja "Publicar no GitHub Pages") e:

- **Android (Chrome):** menu ⋮, depois "Instalar app" ou "Adicionar à tela inicial".
- **iPhone (Safari):** botão Compartilhar, depois "Adicionar à Tela de Início".

O microfone só funciona por endereço seguro (https), como o do GitHub Pages.

## Seus dados

Tudo fica no navegador do aparelho (IndexedDB). Para não perder nada:

1. Em **Ajustes → Backup**, toque em "Baixar backup" ou "Compartilhar backup" de vez em quando. O app lembra você depois de 7 dias.
2. Guarde o arquivo `.json` no Google Drive, no e-mail ou onde preferir.
3. Para trocar de aparelho, use "Restaurar de um arquivo".

O backup também aceita o arquivo exportado da versão antiga que rodava no Claude. As gravações de áudio não entram no backup; baixe as que quiser guardar em Ajustes → Gravações.

## Professor com IA (opcional)

1. Entre em [aistudio.google.com/apikey](https://aistudio.google.com/apikey) com sua conta Google e crie uma chave.
2. No app, vá em **Ajustes → Professor IA**, cole a chave e toque em "Testar chave". O app escolhe sozinho um modelo Gemini Flash disponível.

A chave fica só no seu aparelho e não vai para o backup nem para o repositório. No plano gratuito há limite de pedidos por dia, e o Google pode usar as perguntas para melhorar os produtos dele.

## Publicar no GitHub Pages

1. No repositório [josuenino33/metodo-rufar](https://github.com/josuenino33/metodo-rufar): **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, pasta `/ (root)`, e clique em Save.
2. Em um ou dois minutos o app fica em https://josuenino33.github.io/metodo-rufar/.
3. A cada `git push` na `main`, o GitHub Pages publica a versão nova sozinho.

Não há etapa de compilação: o GitHub Pages serve os arquivos como estão.

## Desenvolvimento

Precisa só de Node.js (para os scripts de conferência) e de qualquer servidor estático.

```bash
python -m http.server 8080
```

Depois abra `http://localhost:8080`. O microfone funciona em `localhost`.

Scripts:

- `node tools/validate-curriculum.mjs` confere as grades, os campos das aulas e os ids do currículo.
- `node tools/check-offline.mjs` confere se todos os arquivos estão na lista do modo offline (`sw.js`).
- `node tools/make-icons.mjs` gera os ícones.

Ao alterar qualquer arquivo do app, aumente `VERSION` no `sw.js` para os aparelhos instalados baixarem a versão nova.

### Estrutura

```
index.html, manifest.webmanifest, sw.js   página, instalação e modo offline
css/app.css                                visual (tema claro e escuro)
js/app.js                                  início, navegação e teclado
js/audio.js                                bateria sintetizada, clique e motor de tempo
js/listen.js, js/onset-worklet.js          microfone: detecção de batidas e análise de tempo
js/notation.js                             grade e partitura em SVG
js/store.js                                dados no aparelho, backup e restauração
js/stats.js, js/teacher.js                 estatísticas, aula do dia e professor local
js/ai.js                                   professor com Gemini
js/views/                                  telas
js/curriculum/                             currículo (um arquivo por módulo)
docs/CURRICULO.md                          como escrever ou editar aulas
```

Para criar ou corrigir aulas, veja [docs/CURRICULO.md](docs/CURRICULO.md).

## Limitações

- O microfone mede o tempo, não o som nem qual peça você tocou. Funciona melhor no pad ou na caixa. Em flams e drags, as notas de enfeite podem fazer a nota principal parecer adiantada.
- A bateria de exemplo é sintetizada. Serve de referência rítmica, não de timbre.
- Nenhum app substitui um professor olhando sua postura. Uma aula presencial de vez em quando ajuda muito.
