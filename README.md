# HC3 Engenharia

Landing page dark premium em português. Implementação direta no código autorizada pelo usuário. Fotografias, logos oficiais e vídeo usam os arquivos fornecidos em `assets/`.

## Execução

Node 22.12+ (verificado com Node 24), npm:

```sh
npm ci
npm run dev -- --port 5173
```

Abra http://127.0.0.1:5173/. `npm run build` gera `dist/`; `npm run preview` serve o build localmente.

## Implementação

- React e TypeScript strict com Vite; Tailwind CSS v4 e CSS próprio.
- GSAP/ScrollTrigger para entrada, parallax, máscaras, manifesto com pin e progresso; Lenis para rolagem suave.
- Manrope local via Fontsource; Phosphor para os poucos ícones de interação.
- Header transparente que ganha fundo ao rolar, navegação ativa e menu móvel acessível.
- Serviços expansíveis; galeria assimétrica com ampliação; vídeo vertical em diálogo com poster e controles.
- Contato direto pelo WhatsApp confirmado: (67) 99803-7643. Nenhuma mensagem é enviada automaticamente, nenhum dado pessoal é armazenado pelo site.

## Editar

`src/data/content.ts`: contato, navegação, serviços, galeria e pilares. `src/App.tsx`: composição e textos editoriais. `src/components/`: blocos interativos. `src/lib/useExperience.ts`: animação, smooth scroll e travamento de diálogos. `src/styles/`: tokens e CSS. `DESIGN.md`: direção visual. `IMPLEMENTATION_PLAN.md`: organização do trabalho.

Originais permanecem intactos. `npm run assets:prepare` gera as versões WebP via Sharp. Poster em `public/media/video-poster.webp` foi extraído do vídeo com FFmpeg (quadro de 2 s). Esses derivados estão incluídos no projeto; não é preciso ter FFmpeg para executar ou compilar.

## Validação

```sh
npm run typecheck
npm run build
npx playwright install chromium
# Com o servidor rodando em 5173:
npm run check:browser
```

O teste verifica desktop e celular com ambas preferências de movimento, pin somente no desktop permitido, serviços, diálogos, reprodução de vídeo, foco restaurado, menu, âncoras suaves, links de WhatsApp, erros de console e oito larguras de 375 a 2560 px. Capturas em `test-results/` (ignoradas pelo Git). Não abre nem envia mensagens ao WhatsApp.

## Conteúdo e publicação

Galeria usa descrições conceituais das imagens, sem inventar clientes ou nomes de obras. Cidades atendidas e URLs de redes sociais não foram informadas. Antes de publicar, configure URL absoluta de `og:image` e `og:url` usando o domínio real; não há domínio inventado na configuração. Nenhuma publicação foi realizada.

Referências de implementação: [GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia/) e [integração Lenis/GSAP](https://github.com/darkroomengineering/lenis). Os escopos são revertidos ao desmontar e ao trocar preferências de movimento.

Parallax está ativo em todas as larguras quando movimento é permitido. Para uma prévia explicitamente animada mesmo com redução de movimento no sistema, use http://127.0.0.1:5173/?movimento=1. A URL normal respeita a preferência do sistema. Regressão específica: node scripts/check-parallax.mjs (mede deslocamentos reais com rolagem por roda do mouse em cinco larguras e verifica o retorno estático).
