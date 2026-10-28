# Catálogo externo e origem

Referências discutidas com o usuário em 16/10/2026, com adições conferidas em 17/10/2026. As datas individuais abaixo não implicam reconferência das fontes anteriores. O pacote não executou instalações. Reconfirme versões, comandos e compatibilidade antes de instalar.

| Fonte | Papel | Conferência registrada nesta conversa |
|---|---|---|
| https://github.com/Leonxlnx/taste-skill | Direção visual e revisão em navegador | README consultado; instalação não executada |
| https://github.com/pbakaus/impeccable | Linguagem de design, crítica e polimento | README consultado; comando de instalação conferido |
| https://github.com/emilkowalski/skills | Design e motion | README consultado; comando conferido |
| https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | Padrões de UI/UX | Link/comando fornecidos pelo usuário; sem conferência externa registrada |
| https://github.com/kylezantos/design-motion-principles | Motion | Link/comando fornecidos pelo usuário; sem conferência externa registrada |
| https://github.com/dotnet/skills | Skills .NET | Comandos fornecidos pelo usuário; sem conferência externa registrada |
| https://agenticskills.io/skills/find-skills | Descoberta; diretório independente | Página consultada; upstream não confirmado |
| https://github.com/vercel-labs/skills | Origem indicada da find-skills | Link indicado pelo diretório; conferir na origem antes de instalar |
| https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server | Figma MCP | Guia consultado; acesso depende do ambiente/permissões |
| https://famous-mandarin-287.notion.site/Model-Routing-Playbook-3f01be55d9b881fbb5d5f0a20f30b265 | Roteamento por esforço/risco | Página consultada; números econômicos não auditados nem incorporados como garantia |
| https://github.com/cloudflare/security-audit-skill | Auditoria de segurança e validação independente | README/SKILL.md consultados em 17/10/2026; comando conferido; não instalada |
| https://github.com/wheresryan22/anatomy | Ilustrações isométricas explicativas | README/SKILL.md consultados em 17/10/2026; comando por projeto conferido; não instalada |
| https://gsap.com/docs/v3/Plugins/ScrollTrigger/ | Biblioteca: animação ligada ao scroll (GSAP, ScrollTrigger, `@gsap/react`) | Usada em projeto em 21/10/2026 (gsap 3.15.0, @gsap/react 2.1.2); conferir licença e versão atuais |
| https://github.com/darkroomengineering/lenis | Biblioteca: scroll suave | Usada em projeto em 21/10/2026 (lenis 1.3.27) com ScrollTrigger |

## Comandos recebidos ou conferidos

Estes comandos são referência, não instrução para executar todos:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill
npx skills add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
npx skills add https://github.com/kylezantos/design-motion-principles
npx skills@latest add emilkowalski/skills
npx impeccable install
npm install -g ui-ux-pro-max-cli
```

Comandos de .NET informados para Claude Code, não verificados externamente:

```text
/plugin marketplace add dotnet/skills
/plugin install dotnet@dotnet-agent-skills
/plugin install dotnet-aspnetcore@dotnet-agent-skills
/plugin install dotnet-data@dotnet-agent-skills
/plugin install dotnet-test@dotnet-agent-skills
/plugin install dotnet-msbuild@dotnet-agent-skills
```

Comandos do Claude Code não implicam compatibilidade com outro agente. Consulte a documentação atual da plataforma antes de instalar. Não há dependência obrigatória entre carregar as instruções deste pacote e instalar todas essas ferramentas.

## Novas opções conferidas em 17/10/2026

Consulte [Cloudflare security-audit](security-audit.md) para escopo e requisitos de execução e [Anatomy](../../frontend-figma-playwright/references/anatomy.md) para uso visual. Comandos conferidos nos READMEs, não executados:

```bash
npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit
npx skills add wheresryan22/anatomy
```

## Uso observado em 21/10/2026

Avaliação feita numa landing page contada pelo scroll, a partir das skills já instaladas. Ver [a referência de scroll](../../frontend-figma-playwright/references/scroll-motion.md).

- **design-motion-principles:** útil no modo de criação. O critério de frequência, o peso por contexto (polimento discreto como base, expressividade nas cenas narrativas) e a exigência de reduced motion orientaram as decisões.
- **Taste (`design-taste-frontend`):** útil para direção visual e checagem final. A regra contra serifa por padrão foi contornada com justificativa de contexto.
- **Taste (`gpt-taste`, mesmo pacote):** só os padrões de GSAP serviram (pin, texto com scrub, imagem que cresce ao entrar, `overflow-x` no `main`). Estrutura de funil de vendas, sorteio de layout e lista fechada de fontes não se aplicam a páginas de evento ou institucionais.
