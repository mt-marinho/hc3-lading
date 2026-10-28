# Plano de implementação

1. Inspecionar kit, estado do repositório, dimensões e conteúdo das mídias. A pasta recebida continha apenas assets e skills.
2. Preparar React + TypeScript + Vite; Tailwind para base; GSAP/ScrollTrigger e Lenis para narrativa de scroll. CSS para estados simples, evitando sobreposição entre motores de animação.
3. Gerar WebP responsivo em `public/media/`, preservando `assets/`.
4. Implementar dados em `src/data/content.ts`, primitivas, header/dialog, serviços, galeria e composição em App.
5. Construir primeiro layout estático. Aplicar movimento via hook central com matchMedia, escopos e cleanup.
6. Testar desktop/celular, ambas preferências de movimento, âncoras, mídia e contato. Inspecionar screenshots e corrigir composição.

## Responsividade e fallback

Desktop: hero imersivo, grid assimétrico, manifesto fixado. Celular: seções empilhadas, galeria em uma coluna, menu próprio, sem pin e com parallax de menor amplitude. Redução de movimento entrega a mesma narrativa sem animação. Não há WebGL nem canvas.

## Entrega

Prévia local e build estático. Publicação e dados comerciais adicionais dependem de pedido posterior. Sem backend: contato abre WhatsApp com mensagem preparada, sem enviar automaticamente.
