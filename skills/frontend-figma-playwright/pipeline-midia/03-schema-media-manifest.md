# Contrato do `MEDIA_MANIFEST.json`, comandos `ffmpeg` seguros e cache busting

Todo pacote gerado por este fluxo deve entregar **cada imagem estática e cada um dos 120 quadros do `<canvas>` em dois formatos**:
- **`.avif` (formato primário):** exigido nos projetos implementados pelo agente de código para máxima compressão e fidelidade em `<picture>` e `<canvas>`;
- **`.webp` (formato de fallback):** compatibilidade imediata em qualquer ferramenta ou navegador.

## O que vai para `public/media/` (e o que fica de fora)

```text
img/ (ou pasta do pacote fora do bundle)
  canvas-sequence.mp4           # Vídeo matriz dos quadros: NÃO copiar para public/media/ (economiza 2 a 5 MB no container)
public/media/
  hero-main.avif / .webp
  hero-ambient.mp4              # Loop contínuo de 4,5s com xfade de 0,5s, 1280x720, CRF 23-26, +faststart, sem áudio
  sketch-before.avif / .webp    # (ARQ-B) Mesmo enquadramento de hero-main para cortina Antes/Depois
  section-editorial.avif / .webp
  bento-01-[tema].avif / .webp
  bento-02-[tema].avif / .webp
  bento-03-[tema].avif / .webp
  team-01.avif / .webp
  team-02.avif / .webp
  team-03.avif / .webp
  contact-space.avif / .webp
  generated/                    # (Opcional, gerado por scripts/gerar-midia.mjs) Croqui com caligrafia + 6 amostras de textura
  frames/
    frame_0001.avif ... frame_0120.avif
    frame_0001.webp ... frame_0120.webp
```

---

## Formato do `MEDIA_MANIFEST.json`

```json
{
  "project": "[slug-do-projeto]",
  "archetype": "ARQ-A | ARQ-B | CUSTOM",
  "status": "ready",
  "packageRoot": ".",
  "mediaDirectory": "media/",
  "formats": {
    "primaryStill": "AVIF",
    "fallbackStill": "WebP",
    "video": "MP4 (H.264, silent, faststart)"
  },
  "selectedForms": {
    "nav": "NAV-1 | NAV-2",
    "hero": "HERO-1 | HERO-2 | HERO-3",
    "portfolio": "PORT-1 | PORT-2",
    "signatures": ["SIGN-1", "SIGN-2", "SIGN-3"],
    "method": "METH-1 | METH-2",
    "team": "TEAM-1 | TEAM-2"
  },
  "licenseNotes": {
    "unsplash": "Free under the Unsplash License; attribution is appreciated.",
    "pexels": "Free under the Pexels License; attribution is appreciated.",
    "stockPeople": "Portraits from stock libraries are illustrative and must not be presented as real verified staff without replacement or authorization."
  },
  "assets": {
    "hero": {
      "avifPath": "media/hero-main.avif",
      "webpPath": "media/hero-main.webp",
      "alt": "[Descrição em pt-BR]",
      "expectedAspectRatio": "4:5 | 16:10",
      "focalPoint": { "x": 0.5, "y": 0.48 },
      "credit": "Imagem gerada para este projeto"
    },
    "beforeAfter": {
      "beforeAvif": "media/sketch-before.avif",
      "beforeWebp": "media/sketch-before.webp",
      "beforeLabel": "CROQUI · 2022",
      "afterAvif": "media/hero-main.avif",
      "afterWebp": "media/hero-main.webp",
      "afterLabel": "ENTREGA · 2024",
      "alt": "[Comparação entre croqui feito à mão e ambiente entregue no mesmo enquadramento]",
      "expectedAspectRatio": "16:10"
    },
    "canvasSequence": {
      "sourceVideo": "img/canvas-sequence.mp4",
      "framesDirectory": "media/frames/",
      "avifPattern": "media/frames/frame_%04d.avif",
      "webpPattern": "media/frames/frame_%04d.webp",
      "firstFrameAvif": "media/frames/frame_0001.avif",
      "lastFrameAvif": "media/frames/frame_0120.avif",
      "frameCount": 120,
      "frameWidth": 1024,
      "frameHeight": 576,
      "frameRate": 24,
      "alt": "[Descrição da sequência de quadros]"
    }
  }
}
```

---

## Comandos `ffmpeg` de referência (sem corromper `av1C` e sem salto no loop)

### 1. Extrair os 120 quadros em `.webp` e converter para `.avif` quadro a quadro
> **Atenção:** Nunca use `ffmpeg ... -c:v libaom-av1 -still-picture 1 ... -f image2 frame_%04d.avif` em um comando único de lote. O muxer `image2` do `ffmpeg` deixa o cabeçalho `av1C` vazio nos quadros em lote, fazendo o Chrome e o Edge recusarem as imagens `.avif`. Sempre converta **um arquivo por vez num laço (`-frames:v 1`)**:

```bash
# 1º passo: extrair os 120 quadros em WebP
ffmpeg -hide_banner -loglevel error -y -ss 0 -t 5 -i img/canvas-sequence.mp4 \
  -vf "fps=24,scale=1024:576:flags=lanczos" \
  -c:v libwebp -quality 82 -compression_level 4 \
  public/media/frames/frame_%04d.webp

# 2º passo: converter cada quadro individualmente para AVIF (-frames:v 1 grava o box av1C correto)
for i in $(seq -f "%04g" 1 120); do
  ffmpeg -hide_banner -loglevel error -y -i "public/media/frames/frame_${i}.webp" \
    -frames:v 1 -vf "format=yuv420p" \
    -c:v libaom-av1 -crf 30 -b:v 0 -cpu-used 6 \
    "public/media/frames/frame_${i}.avif"
done
```

### 2. Gerar `hero-ambient.mp4` com loop contínuo perfeito (`xfade` de `0,5 s`)
Para evitar um corte seco quando o `<video loop>` volta ao segundo zero, funda os últimos `0,5 s` nos primeiros `0,5 s` e comprima para web (`1280×720`, `CRF 24`, `+faststart`):

```bash
ffmpeg -hide_banner -loglevel error -y -i img/hero-ambient.mp4 \
  -filter_complex "[0]scale=1280:720:flags=lanczos,trim=start=0.5,setpts=PTS-STARTPTS[m];[0]scale=1280:720:flags=lanczos,trim=end=0.5,setpts=PTS-STARTPTS[h];[m][h]xfade=transition=fade:duration=0.5:offset=4.0,format=yuv420p[v]" \
  -map "[v]" -c:v libx264 -preset slow -crf 24 -movflags +faststart -an \
  public/media/hero-ambient.mp4
```

---

## Cache busting de `/media/` (`?v=<hash>`)

Como servidores Nginx e CDNs (Cloudflare) costumam guardar `/media/` em cache por vários dias, trocar uma imagem ou regerar os quadros mantendo o mesmo nome (`frame_0001.avif`) deixaria a versão antiga no navegador dos visitantes.

Gere um hash curto do diretório `public/media/` no `vite.config.ts` (`define: { __MEDIA_VERSION__: JSON.stringify(hash) }`) e anexe `?v=${__MEDIA_VERSION__}` em todas as URLs exportadas por `src/data/media.ts`.
