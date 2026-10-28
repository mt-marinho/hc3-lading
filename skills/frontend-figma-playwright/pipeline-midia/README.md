# Pipeline de mídia e scrollytelling (passo a passo)

Fluxo padronizado para planejar a direção visual, gerar pacotes completos de mídia (imagens autorais em **AVIF + WebP**, pares de antes/depois, amostras de materiais, vídeos com loop contínuo, sequência de 120 quadros para `<canvas>` e `MEDIA_MANIFEST.json`) e implementar landing pages contadas pelo scroll **sem repetir o mesmo layout entre nichos diferentes**.

Complementa a [receita de landing page](../references/landing-page.md), a [referência de animação ligada ao scroll](../references/scroll-motion.md) e a [conformidade legal](../../project-workflow/references/conformidade-legal.md).

---

## Modo rápido (em 2 passos)

Se você quer criar uma nova landing page sem preencher dezenas de campos manualmente:

1. **Passo 1 (No gerador de mídia — ChatGPT / Codex):**
   Copie o **Prompt Mestre Semi-Automático** no topo de [02-prompt-gerar-midia.md](02-prompt-gerar-midia.md). Ele fará **6 perguntas rápidas** (Nicho, Arquétipo `ARQ-A / ARQ-B / CUSTOM`, Cenas, Transição do Vídeo, Pasta local e Cor). Assim que você responder, ele gerará as imagens em `.avif` + `.webp`, os vídeos sem salto, os 120 quadros válidos para o navegador, o `MEDIA_MANIFEST.json` e entregará no final o bloco **`PROMPT PARA COLAR NO CLAUDE`**.
2. **Passo 2 (No agente de código — Claude Code):**
   Cole o bloco gerado na pasta do projeto (ou use um dos Presets de [04-prompt-implementar-codigo.md](04-prompt-implementar-codigo.md)). O agente copiará as mídias, implementará as 10 técnicas de scroll e validará tudo no navegador com Playwright.

---

## Arquivos desta pasta

| Arquivo | Função |
|---|---|
| [README.md](README.md) | Modo rápido, visão geral em 4 etapas, tabela de arquétipos e armadilhas reais resolvidas |
| [01-catalogo-formas-e-animacoes.md](01-catalogo-formas-e-animacoes.md) | **Catálogo Mix & Match:** 3 arquétipos visuais, formas de seção (`NAV`, `HERO`, `PORT`, `SIGN`, `METH`, `TEAM`) e 10 técnicas de scroll |
| [02-prompt-gerar-midia.md](02-prompt-gerar-midia.md) | **Prompt Mestre Semi-Automático (entrevista)** + prompts por arquétipo e consolidação com Python + `ffmpeg` |
| [03-schema-media-manifest.md](03-schema-media-manifest.md) | Contrato do `MEDIA_MANIFEST.json`, comandos `ffmpeg` corretos (AVIF quadro a quadro e loop `xfade`) e cache busting |
| [04-prompt-implementar-codigo.md](04-prompt-implementar-codigo.md) | Prompts padronizados para o agente de código (`Preset ARQ-A`, `Preset ARQ-B` e `Template Modular`) |

---

## Como variar o conceito conforme o público

Usar as mesmas 10 tecnologias de scroll (GSAP, ScrollTrigger, Lenis, Pin, Scrub, Timeline, Clip-path, Parallax, Canvas e Stagger) **não significa repetir o mesmo desenho de página**:

| Dimensão | Arquétipo A (`ARQ-A`): Advocacia / Consultoria / Finanças | Arquétipo B (`ARQ-B`): Arquitetura / Design / Interiores | Arquétipo C (`ARQ-C`): Produto / Engenharia / SaaS |
|---|---|---|---|
| **Temperatura visual** | *Grade Estrutural Noturna* (fundo carvão `#0A0A0B`, fios aparentes de `1px`, seriedade institucional) | *Editorial Orgânico & Tátil* (fundo claro linho/travertino `#F2EFE9` + seção escura `#191815` exclusiva para a galeria de obras) | *Showroom Técnico / Laboratório* (alto contraste, telemetria e anatomia de produto) |
| **Tipografia** | Display condensada/geométrica em caixa alta + mono tabular | Serifada editorial leve com *palavras-chave em itálico* + legendas técnicas discretas | Sans variável geométrica + mono para especificações |
| **Mecânica do Hero** | Retrato em chiaroscuro com título gigante sobreposto + 4 pilares em grade de `1px` | Foto `100vw × 100dvh` que **fixa (`pin`) e encolhe com `scrub`** até virar uma moldura na coluna direita do Manifesto | Cena interativa ou `<canvas>` que desmonta/revela o produto no primeiro scroll |
| **Portfólio / Áreas** | Grid xadrez (`1px`) intercalando fotos em parallax e cards numerados `01–06` | **Trilho horizontal fixado (`pin + scrub`)** sobre fundo escuro com selo circular `"ARRASTE"` e barra `01 / 05` | Abas interativas WAI-ARIA + janela funcional ou diagrama clicável |
| **Cena-Assinatura** | Sequência de 120 quadros em `<canvas>` atravessando os ambientes do escritório | **Cortina Antes ↔ Depois (`clip-path`)** comparando *Croqui anotado à mão* e *Obra entregue* + **Mesa Tátil de 6 Materiais** + **120 quadros em `<canvas>`** | Sequência de 120 quadros em `<canvas>` controlada pelo scroll + marcadores técnicos |
| **Método / Processo** | Linha horizontal `01–04` que preenche com o scroll | Coluna esquerda fixa (`pin`) com foto da mesa de estudo + 6 etapas verticais à direita que acendem (`opacity: 0.28 -> 1`) ao cruzar a leitura | Timeline conectada a estados simulados de execução |

---

## Armadilhas reais já resolvidas por este pipeline

| Sintoma observado em produção | Causa real | Solução incorporada nos prompts desta pasta |
|---|---|---|
| Quadros `.avif` do `<canvas>` não abrem no Chrome/Edge (imagem quebrada) | Rodar `ffmpeg` em lote com `-f image2 frame_%04d.avif` e `-still-picture 1` grava o box `av1C` vazio nos arquivos | Converter os `.avif` **quadro a quadro num loop (`-frames:v 1` por arquivo)** ou via `libsvtav1` individual, e testar a abertura de `frame_0001.avif` no navegador |
| Vídeo `hero-ambient.mp4` dá um "pulo" seco ao reiniciar o loop e pesa demais | Corte direto entre o último e o primeiro quadro + resolução 1080p sem compressão web | Aplicar filtro `xfade` de `0,5 s` fundindo o fim no início (loop contínuo de `4,5 s`), `1280×720`, `CRF 23–26`, `-movflags +faststart` e sem áudio (`-an`) |
| Vídeo de banco gratuito desconexo com a marca (ex.: pessoas aleatórias num corredor) | Download automático pelo nome da URL sem inspecionar os quadros | Proibido baixar vídeo às cegas; renderizar `canvas-sequence.mp4` e `hero-ambient.mp4` via Python + `ffmpeg` **sobre as próprias imagens autorais do projeto** |
| Trocar imagem/vídeo mantém a versão antiga no site publicado | Nginx e CDN fazem cache longo de `/media/` quando o nome do arquivo não muda | Gerar hash do diretório `public/media/` no `vite.config.ts` e anexar `?v=<hash>` em `src/data/media.ts` |
| Imagem Docker / build final inflado com vídeo sem uso | `canvas-sequence.mp4` copiado para `public/media/` mesmo quando o `<canvas>` só lê `frames/` | Manter `canvas-sequence.mp4` apenas na pasta-fonte (`img/`); copiar para `public/media/` só os quadros `.avif`/`.webp` e o `hero-ambient.mp4` |
| Pins fora de ordem quando seções abaixo do Hero usam `React.lazy` | Gatilhos criados depois do carregamento assíncrono | Chamar `ScrollTrigger.sort()` e `ScrollTrigger.refresh()` quando o componente `BelowFold` montar |
