# Catálogo de Arquétipos, Formas de Seção e Animações (Mix & Match)

Use este catálogo antes de gerar as imagens ou o código para decidir **qual conceito visual e quais mecânicas de seção** atendem melhor ao público do projeto.

---

## 1. Escolha o Arquétipo Visual (Direção de Arte)

| Código | Arquétipo | Público ideal | Paleta e superfície | Tipografia e grade |
|---|---|---|---|---|
| **ARQ-A** | **Grade Estrutural Noturna** *(Dark Brutalist Grid)* | Advocacia, consultoria estratégica, mercado financeiro, cibersegurança, engenharia | Fundo carvão `#0A0A0B`, superfície `#111113`, texto marfim `#F2EFE9`, acento terracota/cobre `#C85A32` | Display condensada/geométrica em caixa alta + mono tabular; grade aparente com fios de `1px solid` |
| **ARQ-B** | **Editorial Orgânico & Tátil** *(Warm Linen & Contrast Gallery)* | Arquitetura, interiores, design autoral, urbanismo, hotelaria boutique, gastronomia | Fundo claro linho/travertino `#F2EFE9` + **capítulo escuro `#191815` exclusivo para a galeria de obras**; texto carvão `#1C1B18` | Serifada editorial leve com *palavras-chave em itálico* + sans limpa + régua lateral vertical `01 / 06` |
| **ARQ-C** | **Showroom Técnico & Produto** *(Precision Lab)* | SaaS, hardware, indústria, saúde diagnóstica, mobilidade | Fundo grafite profundo `#0D0F12` ou gelo técnico `#F5F7FA`, linhas de instrumentação e foco em contraste de dados | Sans variável técnica + mono para telemetria, especificações e coordenadas |

---

## 2. Escolha a Forma de Cada Seção (Blocos Combináveis)

Você pode usar a combinação padrão de um arquétipo ou montar sua própria sequência escolhendo um código por linha:

### A. Navegação e Indicador de Leitura (`Scroll Progress`)
- **`NAV-1` (Topo Estrutural):** Barra fixa superior com capítulos e linha horizontal de progresso (`scaleX`) no topo da viewport. *(Padrão ARQ-A)*
- **`NAV-2` (Régua Editorial Lateral):** Menu superior limpo + **régua vertical fixa na margem esquerda** indicando o capítulo atual (`01 / 06 MANIFESTO`, `02 / 06 PROJETOS`...) e um botão flutuante discreto no canto inferior direito (`Começar um projeto →`). *(Padrão ARQ-B)*

### B. Abertura / Hero (`Pin + Scrub + Timeline`)
- **`HERO-1` (Retrato Monumental + 4 Pilares em Grade):** Tipografia gigante sobreposta a retrato em chiaroscuro, seguida imediatamente por uma grade de 4 pilares com fios de `1px`. *(Padrão ARQ-A)*
- **`HERO-2` (Janela Fullscreen que Encolhe para o Manifesto):** O Hero abre em `100vw × 100dvh` com foto/vídeo de impacto e título serifado com *itálico*. Ao rolar (`pin + scrub`), **a imagem encolhe suavemente e se encaixa como uma fotografia emoldurada na coluna direita** da seção `01 — Manifesto`, enquanto o texto editorial e as 4 métricas (`15 anos`, `132+ projetos`...) surgem ao redor sobre o fundo claro. *(Padrão ARQ-B)*
- **`HERO-3` (Canvas / Produto Central):** O Hero já inicia com o `<canvas>` de sequência de quadros ou diagrama interativo respondendo aos primeiros pixels do scroll. *(Padrão ARQ-C)*

### C. Portfólio, Obras ou Áreas de Atuação (`Pin / Parallax / Stagger`)
- **`PORT-1` (Grid Xadrez Assimétrico `1px`):** Pares de cards numerados (`01` a `06`) intercalados com fotografias editoriais em parallax vertical e filtro de categoria no topo. *(Padrão ARQ-A)*
- **`PORT-2` (Trilho Horizontal Fixado com Transição de Tema + Cursor `"Arraste"`):** A página muda de cor de fundo (do linho claro `#F2EFE9` para carvão `#191815`), fixa a seção (`pin: true`) e move um trilho horizontal de obras (`01` a `05`) da direita para a esquerda conforme o scroll (`scrub`), com formatos variados (paisagem e retrato), metadados técnicos (`LOCAL`, `ÁREA`, `ANO`, `ESCOPO`), selo circular `"ARRASTE"` que segue o ponteiro e barra inferior `01 / 05 ───●───`. No mobile, empilha verticalmente. *(Padrão ARQ-B)*

### D. Cena-Assinatura Interativa (`Clip-path / Canvas / Scrub`)
Você pode escolher **uma ou duas** cenas-assinatura complementares na mesma página:
- **`SIGN-1` (Cortina Antes ↔ Depois: Do Croqui ao Espaço):** Comparador de largura total onde duas imagens de **exatamente o mesmo ângulo** se sobrepõem via `clip-path: inset(0 calc(100% - var(--pos)) 0 0)`: à esquerda o `CROQUI / PROJETO` (desenho arquitetônico à mão, planta ou wireframe) e à direita a `ENTREGA / OBRA PRONTA` (fotografia real). Ao entrar na viewport, o scroll faz uma varredura inicial com `scrub`, e o usuário pode arrastar a alça central `< >` com mouse, toque ou setas do teclado. Abaixo, uma faixa de especificações técnicas (`Pé-direito`, `Caixilhos`, `Piso`, `Painel`, `Estudo`, `Entrega`). *(Destaque ARQ-B)*
- **`SIGN-2` (Mesa Tátil de Materiais / Amostras):** Layout em duas colunas: à esquerda, uma fotografia grande emoldurada mostrando o material aplicado no espaço real; à direita, uma lista numerada (`01` a `06`) com **amostras quadradas reais de textura** (ex.: *Travertino romano, Concreto aparente, Cumaru, Freijó, Terracota, Linho*). Passar o mouse, focar por teclado ou rolar por cada amostra troca a fotografia da esquerda com crossfade + leve escala e atualiza a legenda do ambiente. *(Destaque ARQ-B)*
- **`SIGN-3` (Sequência de 120 Quadros em `<canvas>`):** Seção fixada (`pin`) onde um `<canvas>` (`1024×576`) avança e rebobina 120 quadros WebP (`frame_0001.webp` a `frame_0120.webp`) conforme o scroll (`scrub: 1`), acompanhado de 4 legendas sincronizadas na timeline. *(Destaque ARQ-A e ARQ-C; opcional em ARQ-B)*

### E. Método / Processo de Trabalho (`Pin + ScrollTrigger`)
- **`METH-1` (Linha do Tempo Horizontal `01–04`):** 4 colunas numeradas conectadas por um eixo horizontal que se preenche com `scrub` conforme o scroll. *(Padrão ARQ-A)*
- **`METH-2` (Coluna Esquerda Fixa + 6 Etapas Verticais com Foco de Leitura):** A coluna esquerda permanece fixada (`pin`) com título editorial (`"Seis etapas, uma só *interlocutora*."`), fotografia da mesa de trabalho/maquete e botão de agendamento. Na coluna direita, as etapas `01` a `06` rolam verticalmente: um `ScrollTrigger` destaca com `opacity: 1` a etapa que atravessa a zona central de leitura e mantém as demais em `opacity: 0.28`, exibindo `PRAZO DE REFERÊNCIA` e `ENTREGAS` de cada fase. *(Padrão ARQ-B)*

### F. Equipe / Autoria (`Stagger + Clip-path`)
- **`TEAM-1` (Grade de 3 Sócios P&B → Cor):** 3 retratos verticais lado a lado que ganham cor no hover/foco e abrem gaveta de currículo. *(Padrão ARQ-A)*
- **`TEAM-2` (Editorial de Autoria / Fundadora):** Split intimista com retrato editorial amplo no estúdio à esquerda e manifesto pessoal à direita, com citação em destaque (`"Só começo a desenhar..."`), credenciais acadêmicas/conselho profissional e assinatura. *(Padrão ARQ-B)*

---

## 3. Como as 10 Técnicas de Scroll entram em cada Arquétipo

Ambas as abordagens utilizam **todas as 10 técnicas**, mas com expressões visuais diferentes:

| Técnica | Como aparece no **ARQ-A (Grade Noturna / Direito)** | Como aparece no **ARQ-B (Editorial Orgânico / Arquitetura)** |
|---|---|---|
| **1. Smooth Scroll (Lenis)** | Rolagem densa e precisa entre blocos de grade | Rolagem fluida e contemplativa entre capítulos claros e escuros |
| **2. Scroll Progress** | Barra superior + escala sutil do retrato do Hero | Régua vertical lateral (`01 / 06`) + barra `01 / 05` da galeria horizontal |
| **3. Scroll Trigger** | Dispara contadores (`18+ anos`) e desenha linhas de `1px` | Muda o tema da página ao entrar em Projetos e acende a etapa ativa (`01–06`) do Processo |
| **4. Scrubbing** | Controla a linha `01–04` do Método e o `<canvas>` | Encolhe o Hero para dentro do Manifesto e move o trilho horizontal de obras |
| **5. Pin / Section Pinning** | Fixa o Hero, o `<canvas>`, o Método horizontal e o FAQ | Fixa o Hero durante o encolhimento, fixa a Galeria Horizontal escura e fixa a coluna esquerda de Materiais e Processo |
| **6. Timeline** | Encadeia texto → foto → linha de `1px` → número | Encadeia encolhimento da foto do Hero → subida do título do Manifesto → entrada das métricas |
| **7. Clip-path / Mask Reveal** | Cortina vertical revelando fotos da escadaria e sala de conselho | **Comparador interativo Croqui ↔ Obra Pronta** + revelação das fotos de obras |
| **8. Parallax** | Deslocamento entre fotos e cards `01–06` no grid xadrez | Deslocamento interno nas fotografias do trilho horizontal ao deslizar |
| **9. Image Sequence / Canvas** | Travessia cinematográfica de 120 quadros na seção central | Transição quadro a quadro de insolação/espaço ou evolução construtiva |
| **10. Stagger** | Entrada dos 4 pilares, palavras dos títulos e 3 sócios | Entrada das palavras com *itálico*, métricas (`15`, `132+`, `85 mil`, `6`) e amostras de materiais (`01–06`) |
