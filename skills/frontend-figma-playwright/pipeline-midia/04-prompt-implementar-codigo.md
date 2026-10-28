# Etapa 4: Prompts Padronizados para Implementar o Código (AVIF + WebP + 10 Técnicas de Scroll)

Escolha abaixo o prompt que corresponde ao conceito do projeto (ou use o prompt gerado automaticamente pela entrevista de [02-prompt-gerar-midia.md](02-prompt-gerar-midia.md)):
1. **Preset ARQ-A (Grade Estrutural Noturna)** — Advocacia, Consultoria, Finanças, Engenharia (`NAV-1 + HERO-1 + PORT-1 + SIGN-3 + METH-1 + TEAM-1`).
2. **Preset ARQ-B (Editorial Orgânico & Tátil)** — Arquitetura, Interiores, Design Autoral (`NAV-2 + HERO-2 + PORT-2 + SIGN-1 + SIGN-2 + METH-2 + TEAM-2`).
3. **Template Modular (Mix & Match)** — Para montar qualquer combinação personalizada de blocos de [01-catalogo-formas-e-animacoes.md](01-catalogo-formas-e-animacoes.md).

---

## 1. Preset ARQ-A — Grade Estrutural Noturna (Ex.: Direito / Consultoria)

```markdown
Leia [CAMINHO_DO_KIT]/skills/project-workflow/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/landing-page.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/scroll-motion.md e [CAMINHO_DO_KIT]/skills/project-workflow/references/conformidade-legal.md e aplique esse fluxo neste projeto.

Atue simultaneamente como diretor de criação digital, designer de UI/UX, desenvolvedor frontend sênior, especialista em motion (GSAP + ScrollTrigger + Lenis), acessibilidade e performance, e revisor visual extremamente crítico.

Objetivo: Criar a landing page scrollytelling completa usando o **Arquétipo ARQ-A (Grade Estrutural Noturna)**, consumindo o pacote real de mídias em `[CAMINHO_DO_PACOTE_DE_MIDIA]` (disponível em **AVIF + WebP**) e aplicando as 10 técnicas de animação ligada ao scroll.

## MODO DE EXECUÇÃO
- Execute todas as etapas (Inspeção → cópia de `media/` para `public/media/` → `AGENTS.md` → `DESIGN.md` → `IMPLEMENTATION_PLAN.md` → Implementação → Validação com Playwright → Revisão crítica) sem parar em decisões visuais ou técnicas razoáveis.
- [Se autorizar dispensa do Figma nesta tarefa: Caso o Figma MCP não esteja conectado nesta sessão, fica autorizado seguir direto para `DESIGN.md` e código.]

## USO OBRIGATÓRIO DE AVIF + FALLBACK WEBP E HIGIENE DE MÍDIA
- Todas as imagens estáticas e os 120 quadros em `public/media/frames/` existem tanto em **`.avif`** quanto em **`.webp`**.
- Use `<picture><source srcSet="/media/[arquivo].avif?v=..." type="image/avif" /><source srcSet="/media/[arquivo].webp?v=..." type="image/webp" /><img src="/media/[arquivo].webp?v=..." ... /></picture>` em todas as imagens e carregue `frame_%04d.avif` (com fallback para `.webp` em `onerror`) no `<canvas>`.
- **Não copie `canvas-sequence.mp4` para `public/media/`** (o `<canvas>` consome apenas `public/media/frames/`).
- **Verifique no navegador real se `frame_0001.avif` decodifica (`naturalWidth > 0`)**: caso tenham sido gerados em lote com `-f image2` (`av1C` vazio), recodifique-os individualmente (`-frames:v 1` por arquivo a partir dos `.webp`).
- **Cache busting automático (`?v=<hash>`):** gere `__MEDIA_VERSION__` no `vite.config.ts` a partir de `public/media/` e anexe `?v=${MEDIA_VERSION}` nos caminhos de `src/data/media.ts`.

## FORMAS E MECÂNICAS DESTE ARQUÉTIPO (ARQ-A)
- **Paleta e Grade:** Fundo `#0A0A0B`, superfície `#111113`, fios aparentes de `1px solid rgba(242,239,233,0.12)`, texto `#F2EFE9`, acento único `#C85A32`.
- **`NAV-1` (Topo Estrutural):** Barra fixa superior com capítulos e barra de `Scroll Progress` (`scaleX`).
- **`HERO-1` (Retrato Monumental + 4 Pilares):** `/media/hero-main.avif` (`.webp`) em chiaroscuro com tipografia display gigante sobreposta (`Pin + Timeline`), seguida de grade de 4 pilares com `Stagger` e abertura de detalhe.
- **Métricas + Institucional (`Clip-path + Parallax`):** 4 contadores `tabular-nums` acionados por `ScrollTrigger` + split assimétrico com `/media/section-editorial.avif` revelada como cortina (`clip-path: inset(100% 0 0 0)` → `inset(0%)`).
- **`PORT-1` (Grid Xadrez `1px`):** 6 frentes numeradas (`01` a `06`) intercaladas com `/media/bento-01-*.avif`, `/media/bento-02-*.avif` e `/media/bento-03-*.avif` em `Parallax`, com filtro funcional e gaveta de escopo ao clicar em `Explorar`.
- **`SIGN-3` (Image Sequence em `<canvas>`):** Seção fixada (`pin`) que avança e rebobina 120 quadros (`/media/frames/frame_0001.avif`..`frame_0120.avif`) com `scrub: 1` e 4 legendas na timeline.
- **`METH-1` (Linha Horizontal `01–04`):** Eixo horizontal fixado que preenche com `scrub` no scroll.
- **`TEAM-1` (3 Sócios P&B → Cor):** `/media/team-01.avif` a `team-03.avif` em P&B que ganham cor no hover/foco + modal de trajetória e aviso de imagem ilustrativa.
- **FAQ Fixo + Contato (`Vamos Conversar`):** Coluna esquerda com `pin` + acordeão WAI-ARIA (`01–06`) + seção final com `/media/contact-space.avif` revelada por máscara e formulário em conformidade com a LGPD.

Valide `typecheck`, `build`, Playwright (`reducedMotion: 'no-preference'` e `'reduce'`, `?movimento=1`) e overflow horizontal nas 7 larguras de `landing-page.md`.
```

---

## 2. Preset ARQ-B — Editorial Orgânico & Tátil (Ex.: Arquitetura / Interiores / Design)

```markdown
Leia [CAMINHO_DO_KIT]/skills/project-workflow/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/landing-page.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/scroll-motion.md e [CAMINHO_DO_KIT]/skills/project-workflow/references/conformidade-legal.md e aplique esse fluxo neste projeto.

Atue simultaneamente como diretor de criação digital, arquiteto de informação e UI/UX, desenvolvedor frontend sênior, especialista em motion (GSAP + ScrollTrigger + Lenis), acessibilidade e performance, e revisor visual extremamente crítico.

Objetivo: Criar a landing page scrollytelling completa usando o **Arquétipo ARQ-B (Editorial Orgânico & Tátil)** — baseado em superfícies claras de linho/travertino, tipografia serifada editorial com *itálicos expressivos*, transições físicas de escala e capítulos táteis, consumindo os ativos em **AVIF + WebP**.

## MODO DE EXECUÇÃO
- Execute todas as etapas (Inspeção → organização de `public/media/` → `AGENTS.md` → `DESIGN.md` → `IMPLEMENTATION_PLAN.md` → Implementação → Validação com Playwright → Revisão crítica) sem parar em decisões visuais ou técnicas razoáveis.
- [Se autorizar dispensa do Figma nesta tarefa: Caso o Figma MCP não esteja conectado nesta sessão, fica autorizado seguir direto para `DESIGN.md` e código.]

## USO OBRIGATÓRIO DE AVIF + FALLBACK WEBP, MÍDIA DERIVADA E CACHE BUSTING
- Todas as imagens estáticas (`hero-main`, `sketch-before`, `section-editorial`, `bento-01..03`, `team-01..03`, `contact-space`) e os 120 quadros em `public/media/frames/` possuem versão **`.avif`** (primária) e **`.webp`** (fallback).
- Use `<picture>` priorizando `image/avif` em todas as imagens e carregue `frame_%04d.avif` (com fallback para `.webp`) no `<canvas>`.
- **Não copie `canvas-sequence.mp4` para `public/media/`** (o `<canvas>` consome apenas `public/media/frames/`).
- **Verifique se `frame_0001.avif` decodifica no Chromium (`naturalWidth > 0`)**: caso falhe por `av1C` vazio de lote `-f image2`, recodifique quadro a quadro (`-frames:v 1` por arquivo a partir dos `.webp`).
- **Mídia derivada (`scripts/gerar-midia.mjs`):** gere ou valide as cotas/anotações caligráficas sobre `sketch-before.{avif,webp}` e os 6 recortes táteis `swatch-01..06.{avif,webp}` (`640×640`) da seção `04 — MATERIAIS`.
- **Cache busting automático (`?v=<hash>`):** gere `__MEDIA_VERSION__` no `vite.config.ts` a partir de `public/media/` e anexe `?v=${MEDIA_VERSION}` em `src/data/media.ts`. Se usar `React.lazy` para seções abaixo da dobra, chame `ScrollTrigger.sort()` e `ScrollTrigger.refresh()` após montar.

## DIREÇÃO VISUAL E FORMAS OBRIGATÓRIAS DESTE ARQUÉTIPO (ARQ-B)
- **Paleta e Temperatura:** Tema claro orgânico predominante (fundo linho/areia `#F2EFE9`, superfície `#EAE5DC`, texto carvão `#1C1B18`, texto secundário `#6E6A63`, botão pílula escuro `#1C1B18`), alternando para um **único capítulo escuro `#191815` na seção `02 — Projetos`** para destacar a fotografia iluminada das casas.
- **Tipografia (Fontsource):** Serifada editorial leve (ex.: Cormorant Garamond / Newsreader) com **palavras-chave em *itálico*** nos títulos + sans limpa para corpo + mono discreta para legendas técnicas.

### Sequência de Seções e Aplicação das 10 Técnicas de Scroll:
1. **`NAV-2` (Régua Vertical Lateral + Botão Flutuante):**
   - Navbar superior limpa + **régua vertical fixa na margem esquerda** (`Scroll Progress`) indicando o capítulo ativo (`01 / 06 MANIFESTO` até `06 / 06 ESTÚDIO`) + pílula flutuante `Começar um projeto →` no canto inferior direito.
2. **`HERO-2` + `01 — MANIFESTO` (Hero Fullscreen que Encolhe com `Pin + Scrub + Timeline`):**
   - Abre em `100vw × 100dvh` com `/media/hero-main.avif` (`.webp`), headline serifada com *itálico*, CTAs e legenda técnica.
   - Ao rolar (`pin: true`, `scrub: 1`), **a imagem do Hero encolhe suavemente e se encaixa como uma fotografia emoldurada na coluna direita** da seção `01 — MANIFESTO` sobre o fundo `#F2EFE9`, enquanto à esquerda surgem a frase-manifesto, o texto editorial e as 4 métricas com `Stagger` (`15 ANOS DE ESTÚDIO`, `132+ PROJETOS ENTREGUES`, `85 mil M² PROJETADOS`, `6 CASAS NOVAS POR ANO, NO MÁXIMO`).
3. **`PORT-2` (`02 — PROJETOS`: Trilho Horizontal Fixado sobre Fundo Escuro `#191815`):**
   - `Pin + Horizontal Scroll Scrub`: O trilho horizontal desliza da direita para a esquerda conforme o scroll (`x: () => -(scrollWidth - innerWidth)`, `invalidateOnRefresh: true`), exibindo 5 obras com `Parallax` interno nas fotos, metadados (`LOCAL`, `ÁREA`, `ANO`, `ESCOPO`), selo circular `"ARRASTE"` e barra inferior `01 / 05 ───●───`. No mobile e em `prefers-reduced-motion: reduce`, converte em grade vertical.
4. **`SIGN-1` + `SIGN-3` (`03 — DO CROQUI AO ESPAÇO`: Cortina Antes ↔ Depois + Sequência de 120 Quadros em `<canvas>`):**
   - Volta ao fundo `#F2EFE9`. Título `"Tudo começa num *traço* à mão."`
   - **Comparador Interativo Antes ↔ Depois (`clip-path`):** Sobrepõe `/media/sketch-before.avif` (`CROQUI · 2022`, à esquerda) e `/media/hero-main.avif` (`ENTREGA · 2024`, à direita), com alça central `< >` arrastável por ponteiro, toque e teclado.
   - **Sequência de 120 Quadros em `<canvas>` (`Image Sequence / Scrub`):** Cena fixada (`pin`) percorrendo `/media/frames/frame_0001.avif`..`frame_0120.avif` conforme o scroll (`scrub: 1`), mostrando a evolução do croqui técnico com varredura diagonal de luz até a obra construída, acompanhada de 4 legendas na timeline e faixa de 6 especificações técnicas.
5. **`SIGN-2` (`04 — MATERIAIS`: Mesa Tátil de Amostras `01` a `06`):**
   - Coluna esquerda fixa (`pin`) com fotografia emoldurada mostrando o material aplicado e coluna direita com 6 itens interativos (`01 Travertino romano`, `02 Concreto aparente`, `03 Cumaru`, `04 Freijó`, `05 Terracota`, `06 Linho`) que trocam a foto da esquerda com crossfade.
6. **`METH-2` (`05 — PROCESSO`: Coluna Esquerda Fixa + 6 Etapas Verticais com Foco de Opacidade):**
   - Coluna esquerda fixada (`pin`) com `/media/section-editorial.avif` e coluna direita com `01 Escuta` a `06 Entrega e styling` acendendo (`opacity: 1` vs `0.28`) conforme cruzam a leitura (`ScrollTrigger`).
7. **`TEAM-2` (`06 — ESTÚDIO` + Perguntas Frequentes + Contato):**
   - Split editorial com `/media/team-01.avif` à esquerda e apresentação da arquiteta fundadora à direita, acordeão WAI-ARIA de Perguntas Frequentes e seção final de Contato com `/media/contact-space.avif` e formulário acessível LGPD.

Valide `typecheck`, `build`, Playwright (`reducedMotion: 'no-preference'` e `'reduce'`, `?movimento=1`) e overflow horizontal nas 7 larguras de `landing-page.md`.
```

---

## 3. Template Modular (Mix & Match para Qualquer Público)

```markdown
Leia [CAMINHO_DO_KIT]/skills/project-workflow/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/SKILL.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/landing-page.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/references/scroll-motion.md, [CAMINHO_DO_KIT]/skills/frontend-figma-playwright/pipeline-midia/01-catalogo-formas-e-animacoes.md e [CAMINHO_DO_KIT]/skills/project-workflow/references/conformidade-legal.md e aplique esse fluxo neste projeto.

Objetivo: Criar a landing page scrollytelling para [NOME E NICHO DO PROJETO], consumindo as mídias em **AVIF + WebP** em `[CAMINHO_DO_PACOTE_DE_MIDIA]` e combinando os seguintes blocos do catálogo:

- **Arquétipo base:** [ARQ-A | ARQ-B | ARQ-C] (Tema: [escuro | claro com capítulo escuro], Fundo: `[#HEX]`, Acento: `[#HEX]`)
- **Navegação (`Scroll Progress`):** [NAV-1 (Barra superior) | NAV-2 (Régua vertical lateral 01/06)]
- **Hero (`Pin + Scrub + Timeline`):** [HERO-1 (Retrato + 4 pilares) | HERO-2 (Fullscreen que encolhe para moldura no Manifesto) | HERO-3 (Canvas imediato)]
- **Portfólio / Áreas:** [PORT-1 (Grid xadrez 1px com parallax) | PORT-2 (Trilho horizontal fixado com cursor "Arraste")]
- **Cena(s)-Assinatura:** [SIGN-1 (Cortina Antes ↔ Depois) | SIGN-2 (Mesa Tátil de Amostras) | SIGN-3 (Sequência de 120 quadros `.avif`/`.webp` em `<canvas>`)]
- **Método / Processo:** [METH-1 (Linha horizontal 01–04) | METH-2 (Coluna esquerda fixa + 6 etapas verticais com foco de opacidade)]
- **Equipe / Autoria:** [TEAM-1 (3 retratos P&B → cor) | TEAM-2 (Editorial de fundador(a) com citação)]

Priorize `.avif` com fallback `.webp` em todas as tags `<picture>` e no `<canvas>`, implemente todas as 10 técnicas de scroll em `src/lib/scroll.ts` (respeitando `prefers-reduced-motion: reduce` e `?movimento=1`) e execute a validação completa de `landing-page.md`.
```
