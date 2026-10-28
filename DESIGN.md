# HC3 / Dark Architectural Editorial

## Direção

Fotografia imersiva, tipografia de grande escala, linhas estruturais e intervalos generosos. O hero apresenta a transformação; o institucional aproxima o olhar técnico; serviços explicam a atuação; o manifesto concentra a atenção no detalhe; a vitrine permite explorar imagens; pilares e contato encerram a narrativa.

## Tokens e contraste

Valores em `src/styles/tokens.css`. Fundo #14141C, profundo #0A0A0E, superfície #1E1E26, branco #FFFFFF, cinza #A1A1AA, laranja #FF7900. Contrastes calculados (fundo / profundo / superfície): branco 18,32 / 19,76 / 16,55; cinza 7,15 / 7,71 / 6,46; laranja 6,97 / 7,52 / 6,29. Texto profundo sobre botão laranja: 7,52. Fotografias têm overlay próprio para texto sobreposto.

Manrope variável hospedada localmente, pesos 450–700, títulos fluidos de 35–135 px; monospace nativa para pequenos rótulos. Sem itálico. Acentos portugueses inspecionados no navegador. Container de 1360 px; margens 64 / 36 / 20 px; seções 120 / 76 px. Raios de 2 px nas ações; círculos somente em controles de mídia e exploração. Sem sombras decorativas.

## Movimento

GSAP centralizado em `src/lib/useExperience.ts`, com matchMedia e cleanup. Entrada de imagem em 1,8 s; linhas do título com stagger de 130 ms; texto complementar em 800 ms. Desktop: parallax no hero e nas fotos, manifesto fixado por 65% da altura da viewport com revelação progressiva. Lenis usa o ticker GSAP e respeita scroll-padding das âncoras. Barra de progresso orienta a leitura. Menu e mídia interrompem o smooth scroll.

Celular: sem pin, com parallax de menor amplitude no hero e nas fotos; animações de entrada breves. Movimento reduzido: sem Lenis, pin ou animações de entrada; todo conteúdo visível em fluxo normal. Sem vídeo automático. Dialogs nativos mantêm foco e devolvem ao acionador ao fechar. Foco em laranja; hover de setas e botões; serviços com aria-expanded. Não há formulário nem estados fictícios de envio.

## Mídia e conteúdo

Hero fotográfico de alta prioridade; WebP com srcset 640/1080; lazy loading fora do hero. Originais preservados. Vídeo vertical 720×1280, 6,57 s, aberto sob demanda com poster e controles. Galeria é vitrine visual conceitual com nota explícita, sem clientes, nomes oficiais ou localidades inventadas.

Não adicionar cursor customizado, efeitos repetitivos ou estatísticas sem fonte. WhatsApp configurado pelo usuário. Cidades atendidas e redes sociais continuam sem dados.

## Validação

Playwright em 390 e 1440 px, com e sem redução de movimento; oito larguras para overflow e títulos. Capturas em `test-results/`. Build e typecheck, navegação, foco, mídia, acordeões e URLs de contato. Figma dispensado pelo usuário nesta conversa.
