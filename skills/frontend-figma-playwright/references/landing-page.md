# Prompt reutilizável: redesign de landing page premium

Este prompt reproduz o processo, a stack e o padrão de qualidade usados na landing page do NEXUS.
Serve para **criar** uma página nova ou **atualizar** uma existente.

## Como usar

1. Abra o Claude Code **na pasta do projeto** da página que você quer atualizar.
2. (Opcional, recomendado) instale as skills que usamos:
   ```bash
   npx skills add https://github.com/Leonxlnx/taste-skill
   npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
   npx skills add https://github.com/kylezantos/design-motion-principles
   ```
   Depois reinicie a sessão para que elas apareçam.
3. Preencha os campos entre `[colchetes]` no bloco **CONTEXTO**. Apague as linhas que não se aplicam.
4. Cole o prompt inteiro (tudo abaixo da linha `---`) na conversa.

Dica: quanto mais concreto o CONTEXTO (o que o produto faz, para quem, com quais dados), menos genérico fica o resultado. Os campos mais importantes são o **elemento-assinatura** e as **interações reais** de cada seção.

---

Quero que você atue simultaneamente como diretor de criação digital, designer de produto e UI/UX, desenvolvedor frontend sênior, especialista em motion, acessibilidade e performance, e revisor visual extremamente crítico.

Objetivo: [criar | redesenhar] a landing page deste projeto com acabamento premium, memorável e tecnicamente sólido, seguindo o processo e as regras abaixo.

## CONTEXTO (preencher)

- Produto: [nome] — [o que faz, em 1 a 2 frases]
- Proposta central: "[frase de valor]"
- Público: [quem compra / quem usa / nível técnico]
- Tom da marca: [ex.: preciso e calmo | acolhedor e direto | ousado e editorial]
- Direção criativa: [nome da estética, ex.: "Operational Intelligence / Digital Observatory"]
- Referências conceituais (não visuais de marcas): [ex.: centro de controle, instrumentação científica, mapa vivo]
- Tema: [escuro | claro] (um tema só para a página inteira)
- Paleta inicial (opcional): [fundo, superfície, texto, acento único, cores de estado]
- Idioma da página: pt-BR. Termos técnicos consagrados ficam em inglês (ex.: deploy, workflow, dashboard, SLO, cache). Números no formato brasileiro (1.780; 99,99%; R$ 1.234,56).
- Elemento-assinatura (o "gesto visual" da página): [ex.: mapa 3D da infraestrutura | linha do tempo interativa | simulador do produto]. Ele deve **representar o produto**, não decorar.
- Seções desejadas, em ordem, com a interação real de cada uma:
  1. [Navbar] — [links]
  2. [Hero] — [headline, subheadline, CTAs, métricas]
  3. [...]
- O que preservar (modo redesign): [textos, marca/logo, cores oficiais, rotas, SEO, formulários, integrações, analytics]
- CTAs e destinos: [rótulo -> destino]. Um rótulo por intenção em toda a página.

## MODO DE TRABALHO

- Não peça confirmação para decisões visuais razoáveis. Pergunte só se houver risco de destruir o projeto ou perder dados.
- Informe quando cada etapa terminar. Mostre só as decisões importantes.
- Não deixe placeholders, "TODO" ou blocos vazios. Se algo não puder ser feito, explique e entregue uma alternativa funcional.

## ETAPA 1 — INSPEÇÃO (não alterar nada)

Relate: stack encontrada, estrutura de pastas, scripts, dependências, conteúdo e marca existentes, possíveis conflitos, o que será preservado e o que será criado.

Regras de stack:
- Se o projeto já tem stack, **preserve-a** e adapte (ex.: Next.js continua Next.js; Tailwind v3 continua v3, salvo motivo forte).
- Se estiver vazio, use: Vite + React + TypeScript strict + Tailwind CSS v4 (`@tailwindcss/vite`) + Motion (`motion/react`) + Phosphor Icons + fontes self-hosted via Fontsource.
- Three.js + React Three Fiber **apenas** se o elemento-assinatura ganhar com 3D de verdade. Caso contrário, SVG/Canvas.
- Se a página for contada pelo scroll (seções fixadas, scrub, scroll horizontal, sequência de quadros), use GSAP + ScrollTrigger + Lenis conforme [a referência de scroll](scroll-motion.md). Motion continua nos estados de UI; não misture os dois no mesmo componente.
- Antes de instalar, confira as versões atuais e a compatibilidade entre peers. Nada de dependência desnecessária (sem drei, GSAP ou libs de gráfico se SVG ou Motion resolvem).

## ETAPA 2 — DESIGN.md

Crie ou atualize `DESIGN.md` com: missão visual, personalidade, público, princípios, paleta com hex e contraste calculado, cores semânticas, tipografia e escala fluida, espaçamento, raios, sombras/elevação, superfícies, botões, cards, badges, navegação, dados e gráficos, visualização do elemento-assinatura, motion (tokens), estados (hover, focus, active, loading, erro, sucesso, vazio), responsividade por largura, acessibilidade, do's, don'ts e checklist final.

Sistema visual obrigatório:
- Tokens como CSS variables em `src/styles/tokens.css`, expostos ao Tailwind via `@theme inline`. Nada de hex solto nos componentes.
- **Um único acento de marca.** Verde/âmbar/vermelho só como **estado**, sempre acompanhados de forma (círculo/triângulo/quadrado) e texto.
- Escala de raio documentada (ex.: 4 badges / 8 botões e inputs / 14 painéis / 22 molduras grandes) e seguida em todo lugar.
- Sombras tingidas com o tom do fundo, nunca preto puro. Brilho só para foco e para o elemento-assinatura.
- Tipografia: uma família display (preferir eixo de largura variável) + uma mono para dados com `tabular-nums`. Sem Inter por padrão e sem serifa "porque parece premium".
- Antes de fixar a fonte display, renderize acentos do idioma (é, ã, ç, õ) no peso e no itálico usados. Algumas versões variáveis posicionam acentos errado.
- Gradientes raros e funcionais (scrim de legibilidade, máscara de bordas, banda de previsão em gráfico). Nada de blobs nem gradiente roxo.
- Contraste AA calculado para cada token de texto sobre **cada** superfície em que ele aparece (incluindo linhas selecionadas).

## ETAPA 3 — IMPLEMENTATION_PLAN.md

Arquitetura da página, árvore de componentes, estrutura de pastas, dependências, ordem real de implementação, estratégia de responsividade, estratégia de fallback do elemento-assinatura, performance, checklist de testes e pendências explícitas.

Estrutura sugerida:
```
src/
  data/        dados demonstrativos centralizados (uma fonte única reaproveitada entre seções)
  lib/         hooks (useMediaQuery, useActiveSection, useInViewOnce), tokens de motion, detecção de WebGL
  styles/      tokens.css, globals.css
  components/  ui/ (primitivos), nav/, hero/, three/ (se houver), sections/
```

## ETAPA 4 — IMPLEMENTAÇÃO

Ordem: scaffold e configs → tokens e base → dados → primitivos de UI → navbar → hero (primeiro com o fallback estático) → elemento-assinatura → demais seções → rodapé.

### Elemento-assinatura (padrão progressivo)
1. Um **pôster estático** (SVG) com a mesma composição renderiza imediatamente. Ele é o estado de carregamento e o fallback, e evita layout shift.
2. O chunk pesado (3D) é carregado com `React.lazy` depois de `requestIdleCallback` e entra com crossfade após o primeiro frame.
3. Modo **lite** (tela estreita, `hardwareConcurrency ≤ 4` ou `deviceMemory ≤ 4`): sem partículas, sem antialias, DPR ≤ 1.25, sem hover. Mesmos dados.
4. `prefers-reduced-motion`: `frameloop="demand"`, um quadro estático.
5. Pausar render fora da viewport (IntersectionObserver) e com a aba oculta.
6. Error boundary + `webglcontextlost` → volta ao pôster. Parâmetro `?webgl=0` força o fallback para teste.
7. Canvas com `aria-hidden` + descrição equivalente em `sr-only`. Se houver painel de inspeção, ele precisa ser navegável por teclado (ex.: setas anterior/próximo).
8. Valores contínuos (ponteiro, rotação) em refs, nunca em `useState`. Geometrias compartilhadas e liberadas no unmount; linhas num único `LineSegments`; partículas num único `InstancedMesh`.

### Seções
- Cada seção usa uma **família de layout diferente** (split assimétrico, diagrama + painel, bento com tamanhos variados, janela de produto, lista seletora + instrumentos, editorial de citações, código em abas, CTA com formulário...).
- Nada de cards idênticos em sequência. Em bento, número de células = número de conteúdos, sem buracos.
- Cada seção tem uma **interação real**: diagramas com `<button>` reais posicionados sobre o SVG, prévia de produto funcional (abas WAI-ARIA com setas, filtros, busca, troca de ambiente, painel de detalhe, estado vazio com "Limpar filtros"), workflows executáveis simulados, gráficos com leitura de valor ao passar o mouse, botão de copiar com feedback.
- Prévias de produto são **componentes funcionais**, não screenshots falsos feitos de divs.
- Dados demonstrativos em `src/data/`, marcados como fictícios no código e com uma nota discreta na página. Antes de publicar, troque ou remova todo conteúdo fictício (nomes, depoimentos, números, fotos) e siga a [revisão legal](../../project-workflow/references/conformidade-legal.md) se o site coletar dados, vender ou mostrar pessoas.
- Formulários: label acima, ajuda abaixo, erro abaixo com `role="alert"` e `aria-invalid`, loading que mantém a largura do botão, sucesso com foco movido para a mensagem. Se não houver backend, simular localmente e dizer isso.
- Comandos copiáveis nunca usam nomes de pacote inventados (`npx algo-ficticio` pode virar typosquatting). Use domínios reservados `.example`.

### Motion
- Tokens: `--ease-out: cubic-bezier(0.22,1,0.36,1)`, `--ease-in-out: cubic-bezier(0.65,0,0.35,1)`, durações 120 / 180 / 280 / 560 / 900 ms.
- Antes de cada animação: o que ela comunica? Se não houver resposta, remova.
- Hero: revelação por máscara linha a linha (uma vez). Seções: animação própria (desenho de linha, preenchimento de timeline, perspectiva da janela do produto), nunca o mesmo fade em tudo.
- No máximo **um** marquee na página, com botão de pausa.
- Pulsos animados só para estado realmente ao vivo (máx. 2 a 3 na página).
- Só `transform`, `opacity`, `filter` e `stroke-dashoffset`. Saídas mais curtas que entradas. Nunca começar em `scale(0)`.
- `MotionConfig reducedMotion="user"` + tratamento manual de loops, cena e contadores.
- Proibido `window.addEventListener("scroll")`. Use `useScroll`, `useMotionValueEvent`, IntersectionObserver ou ScrollTrigger.
- Nada de expandir conteúdo no hover se isso desloca o layout sob o cursor.

### Responsividade
- Recompor, não encolher: diagramas com um segundo conjunto de coordenadas (horizontal → vertical), grafos que viram listas em telas estreitas, timeline horizontal → vertical.
- `min-h-[100dvh]`, nunca `h-screen`. `overflow-x: clip` no `main`. Alvos de toque ≥ 44px.
- Headline do hero com no máximo 3 linhas em qualquer largura (ajuste o `clamp` e a largura da fonte no mobile).
- Navegação em uma linha a partir de `lg`; textos em português são mais longos, então reduza o tamanho dos links entre `lg` e `xl` se necessário.

### Acessibilidade
HTML semântico, um único `h1`, skip link, foco visível global (`:focus-visible`), `aria-label` em botões só com ícone, `aria-pressed`/`aria-selected`/`aria-expanded` corretos, `aria-live` em painéis que mudam, menu mobile com foco preso, Esc fecha e devolve o foco, scroll travado. Um botão que muda de estado continua sendo o **mesmo elemento** para não perder o foco.

### Copy (regras anti-slop)
- Frases curtas, verbos concretos, nada de "revolucionário", "sem atrito", "potencialize", "next-gen".
- Zero travessão longo (—) em texto visível. Use ponto, vírgula ou dois-pontos.
- Eyebrows (rótulo pequeno em caixa alta acima do título) em no máximo 1 a cada 3 seções.
- Nada de "Seção 01", "Passo 1", faixas decorativas de texto, avisos de "role para baixo" ou números falsamente precisos sem contexto.
- Citações com no máximo 3 linhas, atribuição com nome + cargo + empresa (fictícios quando for demo).
- Números sempre com unidade e janela de tempo.

## ETAPA 5 — VALIDAÇÃO

Rode e relate:
- `typecheck` e `build` sem erros; console limpo **numa aba nova** (logs antigos enganam).
- Overflow horizontal em 375, 390, 768, 1024, 1280, 1440, 1920 e 2560 px, com este script no console:
  ```js
  (() => { const iw = document.documentElement.clientWidth; const bad = [];
    for (const e of document.querySelectorAll('main *, footer *, header *')) {
      const r = e.getBoundingClientRect(); if (!r.width || r.right <= iw + 1) continue;
      let p = e.parentElement, clipped = false;
      while (p && p !== document.body) { if (/(hidden|clip|auto|scroll)/.test(getComputedStyle(p).overflowX) && p.getBoundingClientRect().right <= iw + 1) { clipped = true; break; } p = p.parentElement; }
      if (!clipped) bad.push(e.tagName + ' ' + (e.textContent || '').trim().slice(0, 30)); }
    const broken = [...new Set([...document.querySelectorAll('a[href^="#"]')].map(a => a.getAttribute('href')))].filter(h => h.length > 1 && !document.getElementById(h.slice(1)));
    return { iw, overflow: bad.slice(0, 10), brokenAnchors: broken }; })()
  ```
- Linhas do `h1` em cada largura, botões que quebram linha, âncoras quebradas.
- Fallback (`?webgl=0`), teclado (nav, menu mobile, abas, filtros, formulário), estados do formulário, reduced motion (por código, se não der para emular).

## ETAPA 6 — REVISÃO CRÍTICA

Procure e **corrija**: elementos genéricos, espaçamentos inconsistentes, hierarquia fraca, excesso de efeitos ou pulsos, seções repetidas, rótulos truncados, copy pouco convincente ou incoerente com o que a seção mostra, problemas no mobile, contraste em superfícies secundárias, aparência de template.

## ARMADILHAS CONHECIDAS (já aconteceram, evite)

- **Tailwind v4 varre o projeto inteiro**, incluindo `.claude/skills`, e gera CSS desnecessário. Use `@import "tailwindcss" source("../");` apontando para `src`.
- **Conflito de display:** componente com `inline-flex` na base + `className="hidden sm:inline-flex"` não esconde. Envolva num `<div className="hidden sm:block">`.
- **`relative` e `absolute` juntos** via `cn()` deixam o container com altura 0. A classe de posição deve ser uma só.
- **R3F 9 + three ≥ 0.183** gera aviso de `THREE.Clock` no console. Fixe o three na última versão sem o aviso (verifique a atual) ou atualize o R3F se já houver correção.
- **Tone mapping ACES** escurece nós claros na cena 3D. Prefira `NoToneMapping` + emissivo leve.
- **Label HTML sobre o canvas** com `z-index` cobre a headline. Deixe a camada de texto acima na ordem do DOM.
- **Screenshots com `scroll-behavior: smooth`** capturam no meio da rolagem. Use `scrollTo({ behavior: "instant" })` ao testar.
- **Painel de navegador oculto** congela `requestAnimationFrame`: animações e `AnimatePresence mode="wait"` parecem travados. Valide pelo DOM e force frames com um screenshot.
- **Foco após troca com `AnimatePresence mode="wait"`:** use um ref callback estável (`useCallback`) para focar a mensagem quando ela monta.
- **Heredocs longos no Git Bash do Windows** quebram. Grave scripts em arquivos e execute.
- **`backdrop-filter` (ou `transform`/`filter`) no header** vira o bloco de referência dos filhos `position: fixed`: o menu móvel perde altura e fundo. Renderize o painel fora do header.
- **Lista com `overflow-x-auto` dentro de grid** alarga a coluna além da tela. Use `grid-cols-[minmax(0,1fr)]` e `min-w-0` no item.
- **Instalar dependência com o dev server aberto** pode deixar a aba com React duplicado ("Invalid hook call"). Reinicie o servidor e recarregue.
- **Nginx servindo o build:** `add_header` dentro de um `location` anula os do `server`. Repita os cabeçalhos de segurança em cada bloco; HTML com `no-cache`, `/assets/` com cache longo `immutable`.
- **Animações de scroll** (pin, scrub, Lenis, canvas) têm armadilhas próprias, listadas na [referência de scroll](scroll-motion.md).

## FORMATO DA RESPOSTA FINAL

1. Arquivos criados ou alterados
2. Stack utilizada
3. Dependências adicionadas
4. Como executar
5. Funcionalidades implementadas
6. Interações disponíveis
7. Estratégia do elemento-assinatura e fallback
8. Validações executadas (com resultados)
9. Limitações conhecidas
10. Próximas melhorias recomendadas
