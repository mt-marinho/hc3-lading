# Etapa 2 e 3: Prompt Mestre Automático (Entrevista ➔ Mídia AVIF/WebP + Vídeo ➔ Prompt do Código)

Este arquivo contém:
1. **Prompt Mestre Semi-Automático (Formulário Interativo):** Você cola apenas este prompt inicial; a IA faz as 6 perguntas de múltipla escolha para preencher o briefing e, após a sua resposta, **ela mesma gera as imagens (em AVIF + WebP), renderiza os vídeos (com loop `xfade` sem salto) e os 120 quadros do `<canvas>` (codificados quadro a quadro para evitar erro de `av1C`), cria o `MEDIA_MANIFEST.json` e já entrega o prompt final preenchido para você colar no agente de código (Claude)**.
2. **Prompt de Consolidação / Correção Local (`Python + ffmpeg`):** Para regerar vídeos, corrigir `.avif` e atualizar pacotes existentes.

---

## 1. Prompt Mestre Semi-Automático (Copiar e Enviar para Iniciar Qualquer Projeto)

> **Como usar:** Cole o bloco abaixo no ChatGPT / Codex. Ele conduzirá o formulário enxuto, gerará todo o pacote de imagens (`.avif` e `.webp`) + vídeos (`.mp4` + 120 quadros `.avif`/`.webp`) e entregará no final o bloco Markdown pronto para enviar ao Claude.

```markdown
Atue como Diretor de Criação Digital, Produtor de Mídia Scrollytelling e Engenheiro de Prompt.

Vamos criar uma landing page scrollytelling completa dividida em duas fases:
- **Fase A (com você):** Definir o conceito por meio de um formulário rápido, gerar as imagens autorais, converter tudo para **AVIF + WebP**, renderizar os vídeos (`hero-ambient.mp4` com loop contínuo e `canvas-sequence.mp4`) + 120 quadros (`1024×576` em `.avif` e `.webp`), montar o `MEDIA_MANIFEST.json` e **gerar o Prompt Markdown Final preenchido** para eu copiar e colar no Claude.
- **Fase B (no Claude):** O Claude lerá a pasta de mídias e o prompt gerado por você para programar a página completa com GSAP + ScrollTrigger + Lenis.

### PASSO 1 — FAÇA-ME AGORA ESTE FORMULÁRIO (NÃO GERE AS IMAGENS ANTES DE EU RESPONDER):
Apresente as 6 perguntas abaixo de forma limpa para eu responder rapidamente (posso responder só com os códigos, ex.: `1: Clínica de Longevidade | 2: ARQ-B | 5: F:\clinica\img`):

1. **Nicho, Nome da Marca e Cidade:** (Ex.: Escritório de Advocacia Empresarial / Estúdio de Arquitetura / Clínica Médica em São Paulo)
2. **Arquétipo Visual e Estrutura da Página:**
   - **[ARQ-A] Grade Estrutural Noturna:** Fundo escuro `#0A0A0B`, fios de `1px`, retrato em chiaroscuro + 4 pilares, bento xadrez `01–06`, sequência de 120 quadros no `<canvas>`, linha horizontal `01–04` e 3 sócios P&B → cor.
   - **[ARQ-B] Editorial Orgânico & Tátil:** Fundo claro linho/travertino `#F2EFE9` + galeria horizontal escura `#191815` com cursor `"ARRASTE"`, régua lateral `01 / 06`, Hero fullscreen que encolhe com scroll para virar foto no Manifesto, cortina Antes ↔ Depois (`Croqui anotado à mão` ↔ `Obra Entregue` no mesmo ângulo), mesa tátil de 6 materiais/amostras e processo com coluna esquerda fixa + 6 etapas verticais.
   - **[CUSTOM] Mix & Match:** Escolher separadamente Hero (`HERO-1/2/3`), Portfólio (`PORT-1/2`), Cena-Assinatura (`SIGN-1: Cortina Antes/Depois`, `SIGN-2: Mesa de Amostras`, `SIGN-3: 120 quadros no Canvas`), Método (`METH-1/2`) e Equipe (`TEAM-1/2`).
3. **Cenas das 4 Imagens Principais (ou diga "sugira você para o meu nicho"):**
   - Imagem 1 (`hero-main`):
   - Imagem 2 (`section-editorial`):
   - Imagem 3 (`bento-02-detail`):
   - Imagem 4 (`contact-space`):
4. **Narrativa do Vídeo e dos 120 Quadros do `<canvas>` (`canvas-sequence.mp4`):**
   - **[V1] Do Traço à Obra Construída:** Croqui técnico em papel linho ➔ varredura diagonal de luz dourada ➔ obra real iluminada com movimento suave de câmera e reflexo vivo.
   - **[V2] Travessia Cinematográfica Chiaroscuro:** Movimento contínuo de câmera e feixe de luz lateral conectando as 3 cenas autorais do projeto.
   - **[V3] Outra transição personalizada:** (descrever).
5. **Pasta de Destino neste Computador:** (Ex.: `F:\meu-projeto\img`)
6. **Cor de Acento Preferida (ou "automática pelo arquétipo"):**

---

### PASSO 2 — O QUE VOCÊ DEVE FAZER AUTOMATICAMENTE ASSIM QUE EU RESPONDER:
1. **Gerar as 4 imagens principais** seguindo a proporção e o respiro para tipografia do arquétipo escolhido.
2. **Montar o pacote completo na pasta de destino** usando Python (Pillow/NumPy) + `ffmpeg`:
   - Salvar **todas** as imagens estáticas em **dois formatos: `.avif` (primário, exigido pelo Claude) e `.webp` (fallback)** (`hero-main`, `section-editorial`, `bento-01..03`, `team-01..03`, `contact-space`, e `sketch-before` quando usar cortina Antes/Depois).
   - **Proibido baixar vídeos aleatórios de bancos gratuitos apenas pelo nome na URL.** Gere `canvas-sequence.mp4` (`1024×576`, 5s, 24fps, sem áudio) e `hero-ambient.mp4` por script Python + `ffmpeg` diretamente a partir das imagens autorais do projeto.
   - **Regra obrigatória para `hero-ambient.mp4` (loop contínuo sem salto):** Aplique `xfade` de `0,5 s` fundindo o fim no início (gerando loop suave de `4,5 s`), resolução `1280×720`, H.264 `CRF 24`, `-movflags +faststart` e `-an` (sem áudio), mantendo o arquivo abaixo de `2,5 MB`.
   - **Regra obrigatória para os 120 quadros `.avif` (`frames/frame_0001.avif`..`frame_0120.avif`):** NUNCA use `ffmpeg ... -f image2 frame_%04d.avif` com `-still-picture 1` em lote (isso grava o box `av1C` vazio e quebra no Chrome/Edge). Gere os 120 quadros `.webp` primeiro e depois converta para `.avif` **quadro a quadro num loop individual (`-frames:v 1` por arquivo)**.
   - Inspecione visualmente os quadros `0010`, `0060` e `0110` e gere o `MEDIA_MANIFEST.json` com `status: "ready"`.
3. **Entregar no final da sua resposta um bloco de código Markdown chamado `PROMPT PARA COLAR NO CLAUDE`**, já totalmente preenchido com os caminhos reais de `F:/Skills/...` e da pasta de mídias gerada, mapeando todos os ativos nas 10 técnicas de scroll (GSAP + ScrollTrigger + Lenis).
```

---

## 2. Prompt de Consolidação / Correção Local (`Python + ffmpeg`)

Use este prompt se você já tem as imagens geradas e precisa refazer os vídeos/quadros com qualidade procedural e garantir que todos os `.avif` abram no Chrome/Edge:

```markdown
Atualize o pacote de mídia na pasta `[CAMINHO_DA_PASTA_DE_MIDIA]` usando Python (Pillow / NumPy) + `ffmpeg`:

1. **Garanta formato duplo (`.avif` + `.webp`) válido no navegador:**
   - Converta cada imagem estática e cada um dos 120 quadros (`frames/frame_0001` a `frame_0120`) individualmente com `-frames:v 1` (nunca use `-f image2` em lote com `-still-picture 1`, pois corrompe o header `av1C` no Chrome/Edge):
     `ffmpeg -hide_banner -loglevel error -y -i arquivo.webp -frames:v 1 -vf format=yuv420p -c:v libaom-av1 -crf 30 -b:v 0 -cpu-used 6 arquivo.avif`
2. **Recrie `canvas-sequence.mp4` (5s, 24fps, `1024×576`) e `hero-ambient.mp4` (loop contínuo de 4,5s com `xfade` de 0,5s, `1280×720`, `CRF 24`, `-movflags +faststart`, `-an`) a partir das nossas imagens autorais (sem vídeos genéricos de banco):**
   - **Se for Arquétipo ARQ-B (Arquitetura / Editorial):** Gere `sketch-before.avif` e `.webp` (croqui técnico em papel linho `#F2EFE9` com mesmo enquadramento de `hero-main`) e renderize os 120 quadros mostrando: Frames `0001–0035` (croqui ganhando linhas de eixo e hachuras com dolly-in suave) ➔ Frames `0036–0085` (varredura diagonal com linha dourada revelando a obra real iluminada) ➔ Frames `0086–0120` (obra completa com luz interna e micro-ondulação no reflexo d'água).
   - **Se for Arquétipo ARQ-A (Direito / Corporativo):** Renderize os 120 quadros em chiaroscuro conectando as 3 cenas autorais com movimento suave de câmera e varredura de feixe de luz quente lateral.
3. Inspecione visualmente os quadros `0010`, `0060` e `0110`, atualize o `MEDIA_MANIFEST.json` e me entregue o **Prompt Final atualizado para colar no Claude**.
```
