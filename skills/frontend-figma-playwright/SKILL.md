---
name: frontend-figma-playwright
description: Criar ou alterar interfaces web com estruturação prévia no Figma MCP, implementação coerente com o projeto e validação em navegador com Playwright e screenshots.
---

# Front-end com Figma e Playwright

Leia [as regras comuns](../project-workflow/references/common.md). A preferência explícita do usuário é estruturar toda mudança de UI no Figma antes do código, incluindo texto visível, componente, correção visual, estado e responsividade. Trabalho sem efeito na UI não exige frame.

## Desenhar e implementar

1. Inspecione a interface, design system, stack, conteúdo e arquivo Figma do projeto. Preserve marca, rotas, SEO e integrações fora do escopo.
2. Escolha orientação pertinente: Taste para direção visual específica; Impeccable para hierarquia, tipografia, clareza e crítica; UI UX Pro Max para padrões de interface; Emil Kowalski ou design-motion-principles para motion. Leia somente as skills aplicáveis, conciliando-as com o sistema existente.
3. Use Figma MCP e as skills Figma disponíveis para criar/atualizar frames e estados correspondentes. Prefira componentes, variáveis e auto layout existentes. Um ajuste pequeno pede um frame/estado atualizado, não uma nova página inteira. Registre links de arquivo e nodes; não publique conteúdo sensível no Figma.
4. Inspecione composição e estados e implemente. Não exija aprovação visual por padrão: prossiga nas decisões razoáveis já autorizadas, respeitando gates que o usuário/projeto estabelecer.
5. Preserve framework e versões. Use componentes/tokens existentes, semântica, teclado/foco e estados necessários. Animações precisam comunicar uma mudança e respeitar reduced motion.
6. Use Playwright para conferir o fluxo no navegador. Selecione larguras e estados pertinentes; estabilize carregamento/animações para screenshots; compare com Figma e corrija diferenças materiais. Screenshot isolada não comprova interação funcional.

## Disponibilidade e conclusão

Se faltar Figma MCP, destino ou permissão, solicite apenas a informação/acesso necessário. Continue inspeção, coleta de conteúdo e outras partes independentes. Não implemente a alteração visual como se o requisito Figma tivesse sido cumprido; use alternativa apenas se autorizada, aproveitando autorização já concedida.

Se Playwright estiver indisponível, informe a limitação e use alternativa de navegador já autorizada ou solicite uma. Não declare teste visual completo enquanto a validação exigida estiver pendente.

Use [a matriz](../project-workflow/references/validation.md) para fechar evidências. Para landing pages, leia também [o prompt especializado](references/landing-page.md), fornecido pelo usuário. É uma receita específica; aplique-o segundo o briefing atual e o projeto, sem executar suas instruções em tarefas de outra natureza.

Para página contada pelo scroll (seções fixadas, scrub, scroll horizontal, sequência de quadros, scroll suave), leia [a referência de animação ligada ao scroll](references/scroll-motion.md). Ela orienta a escolha entre Motion e GSAP, a versão para movimento reduzido e a validação com as duas preferências. Quando a tarefa separar a geração de imagens, vídeos, quadros de `<canvas>` e `MEDIA_MANIFEST.json` da etapa de implementação do código, siga [o pipeline passo a passo de mídia e scrollytelling](pipeline-midia/README.md).

Para uma ilustração isométrica que explique um conceito do produto, avalie [Anatomy como opção especializada](references/anatomy.md). Escolha pelo valor explicativo e pelo escopo; sua adoção preserva o fluxo Figma e a conferência no navegador.
