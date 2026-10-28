# Animação ligada ao scroll

Referência opcional para páginas contadas pelo scroll: seções fixadas, animações que avançam e voltam com a rolagem, sequências de imagens e scroll suave. Carregue quando o briefing pedir esse tipo de narrativa ou quando o projeto já usar GSAP, ScrollTrigger ou Lenis. Interfaces comuns não precisam dela.

As orientações vêm de uso real com GSAP 3.15, `@gsap/react` 2.1, Lenis 1.3 e Motion 14 em React 19 + Vite. Confira versões, APIs e licenças atuais antes de instalar.

## Escolher a ferramenta

| Necessidade | Ferramenta |
|---|---|
| Estados de interface: diálogo, menu, hover, entrada simples ao aparecer, troca de foto | Motion (`motion/react`) ou CSS |
| Página contada pelo scroll: pin, scrub, timeline encadeada, scroll horizontal, sequência em canvas | GSAP + ScrollTrigger |
| Rolagem mais pesada e contínua acompanhando as cenas | Lenis sincronizado com o ScrollTrigger |
| Efeito simples ligado ao scroll em navegadores atuais | CSS `animation-timeline` com fallback |

Não misture GSAP e Motion no mesmo componente; os dois disputam os mesmos quadros e estilos. Separar por componente funciona bem: cenas de scroll em GSAP, diálogos em Motion. Não adote GSAP como padrão do projeto quando Motion resolver.

## Motivo antes do efeito

Toda cena precisa responder "o que esta animação comunica?". Combine técnica e intenção:

| Técnica | Uso com motivo |
|---|---|
| Pin + scrub | Passagem entre capítulos: uma abertura que se fecha numa moldura, um produto que se monta |
| Timeline | Legendas, máscaras e números que acompanham uma cena fixada |
| Clip-path / máscara | Revelar mídia como cortina, abrir um vídeo ao chegar ao centro |
| Parallax | Profundidade discreta entre colunas ou dentro de imagens; evite grandes deslocamentos |
| Sequência em canvas | Mostrar algo acontecendo quadro a quadro conforme a rolagem |
| Scrub de opacidade por palavra | Texto curto lido no ritmo do scroll |
| Stagger | Grupos que entram em sequência, uma vez |
| Progresso do scroll | Orientação (linha de leitura), não decoração |

Visitas raras e emocionais aceitam motion expressivo; ações frequentes, não. Prefira poucas cenas fortes a efeitos em todas as seções. Use só `transform`, `opacity`, `filter` e `clip-path`.

## Estrutura recomendada

Centralize a configuração num módulo do projeto (por exemplo, `src/lib/scroll.ts`) que:

- registre `ScrollTrigger` e `useGSAP` uma vez;
- exponha um hook que diga se a página pode animar, a partir de `prefers-reduced-motion`;
- exponha a query usada por `gsap.matchMedia()`, combinando movimento permitido com breakpoints;
- inicialize o Lenis somente quando houver movimento permitido.

Sincronização do Lenis com o ScrollTrigger:

```ts
const lenis = new Lenis({ lerp: 0.085, anchors: { offset: -alturaDoMenu } })
lenis.on('scroll', ScrollTrigger.update)
const tick = (tempo: number) => lenis.raf(tempo * 1000)
gsap.ticker.add(tick)
gsap.ticker.lagSmoothing(0)
document.fonts.ready.then(() => ScrollTrigger.refresh())
// limpeza: gsap.ticker.remove(tick); lenis.destroy()
```

Importe o CSS do Lenis (`lenis/dist/lenis.css`). Escreva cada cena dentro de `useGSAP(..., { scope })` com `gsap.matchMedia()`, para que a limpeza e a troca de breakpoint ou preferência aconteçam sozinhas. Valores contínuos ficam em objetos animados pelo GSAP ou em refs, nunca em estado React a cada quadro.

## Movimento reduzido

Com `prefers-reduced-motion: reduce`: sem Lenis, sem pin, sem scrub. Cada cena precisa de uma versão estática que entregue o mesmo conteúdo. Exemplos: trilho horizontal vira grade; sequência em canvas vira imagens-chave com legenda; vídeo de fundo não inicia sozinho.

O layout também muda, não só a animação. Um trilho com `width: max-content` que depende do scroll horizontal esconde conteúdo quando o pin está desligado.

Ofereça um parâmetro de demonstração (por exemplo, `?movimento=1`) que force as animações e marque o `<html>` com uma classe que desative a regra global de reduced motion. A máquina de desenvolvimento ou o painel de navegador podem estar com "reduzir movimento" ligado, e sem isso a página parece quebrada.

## Seções fixadas

- Crie os pins de cima para baixo, na ordem do documento. Se um gatilho precisar ser criado depois de outro abaixo dele, use `refreshPriority`.
- Chame `ScrollTrigger.refresh()` quando a altura do conteúdo mudar (fontes, imagens sem dimensão, filtros).
- Scroll horizontal: anime o trilho com `x: () => -(scrollWidth - innerWidth)`, `end: () => '+=' + distância` e `invalidateOnRefresh: true`. Efeitos internos usam `containerAnimation`.
- Reserve o scroll horizontal ao desktop; no celular, empilhe os itens.

## Sequência de imagens em canvas

- Gere quadros em AVIF (primário) e WebP (fallback) a partir de vídeo ou fotos com ffmpeg (12 a 24 fps, 1024 px de largura, por exemplo `1024x576`). Evite vídeos de banco baixados às cegas sem inspecionar os quadros; prefira sequências geradas sobre as próprias imagens autorais do projeto (como em [pipeline-midia](../pipeline-midia/02-prompt-gerar-midia.md)).
- Comece o download só quando a cena estiver próxima (um gatilho com `start: 'top 250%'`, `once: true`).
- Desenhe o quadro pedido ou o carregado mais próximo antes dele; redesenhe quando o quadro esperado chegar.
- Faça o "cover" no canvas manualmente e limite a resolução a `devicePixelRatio <= 2`.
- Deixe a primeira legenda visível quando a cena fixar e encadeie as demais na timeline.

## Diálogos e scroll suave

Diálogos em tela cheia (menu, lightbox, apresentação) devem chamar `lenis.stop()` ao abrir e `lenis.start()` ao fechar, além de prender o foco e devolvê-lo. Trave isso num hook comum de diálogo para não esquecer em nenhum deles. Use `data-lenis-prevent` em áreas internas roláveis.

## Armadilhas observadas

| Sintoma | Causa e correção |
|---|---|
| Barra muda de estado no meio da página ou volta ao estado inicial no rodapé | Gatilho com `end: 'max'` e `onToggle` sai de ativo no fim. Use `onUpdate` lendo `self.scroll()` |
| Conteúdo some com reduced motion | Layout dependia do pin. Troque classes de layout pelo mesmo hook de movimento |
| "Invalid hook call" ou React duplicado logo após instalar GSAP/Lenis | O Vite reotimizou dependências com a aba aberta. Reinicie o servidor de dev e recarregue |
| Hook chamado dentro de expressão (`visivel && useMovimento()`) | Viola as regras de hooks. Chame o hook antes e combine os valores |
| Âncoras param atrás do menu fixo | Use `anchors: { offset }` do Lenis ou `scroll-padding-top` sem Lenis |
| Screenshot captura a cena no meio da transição | Role com `scrollTo` instantâneo e espere o scrub assentar (cerca de 1,5 s) |
| Quadros `.avif` falham silenciosamente no Chrome/Edge (caindo para `.webp`) | `ffmpeg -f image2 frame_%04d.avif` com `-still-picture 1` em lote grava header `av1C` vazio. Codifique um arquivo por vez num laço (`-frames:v 1` por quadro) |
| Pins abaixo da dobra calculam posição errada com `React.lazy` (`Suspense`) | Quando o chunk assíncrono monta depois do Hero, chame `ScrollTrigger.sort()` e `ScrollTrigger.refresh()` no `useEffect` de montagem |

## Validação

Use Playwright emulando as duas preferências (`reducedMotion: 'no-preference'` e `'reduce'`) em desktop e celular. Um script que role até cada cena e salve screenshots documenta o resultado.

- Calcule a posição de cada cena a partir do `pin-spacer` quando a seção estiver fixada.
- Registre `pageerror` e erros de console.
- Meça overflow horizontal (`scrollWidth - clientWidth`).
- Confira âncoras com o scroll suave e o travamento do scroll com diálogos abertos.
- Sem navegador baixado pelo Playwright, `chromium.launch({ channel: 'msedge' })` ou `'chrome'` usa o navegador instalado.
- O painel de navegador embutido do agente pode ser estreito demais para emular desktop; prefira o Playwright para capturas.
