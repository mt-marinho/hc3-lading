# Opção externa: Anatomy

Fonte: [wheresryan22/anatomy](https://github.com/wheresryan22/anatomy). README e SKILL.md consultados em 17/10/2026; instalação e geração não executadas. Revisão observada: `e9488296a44211c42701ff71705b7901470ec78f`.

## Quando escolher

Anatomy cria ilustrações isométricas detalhadas e interativas para explicar conceitos por um mecanismo visual. Oferece SVG, efeitos WebGL opcionais e modo 3D beta. É uma opção para figuras técnicas e elementos de destaque de landing pages, com direção visual própria.

Escolha quando a representação ajudar a entender o produto. Para um fluxo, schema, gráfico ou arquitetura que uma representação simples explique melhor, use a solução adequada ao conteúdo. Não imponha uma máquina isométrica a qualquer documentação ou tela.

## Integração com o kit

Defina conceito, dados reais, interação e formato de entrega. Combine o escopo da figura com a tarefa; a skill upstream tem um processo detalhado de construção e conferência. Não amplie uma correção pequena para produzir uma ilustração complexa sem necessidade.

Para UI, mantenha o fluxo Figma antes do código e Playwright na integração. Trate o Figma como composição e estados; efeitos de navegador devem ter fallback legível e ser conferidos na implementação. Preserve tema, tokens, acessibilidade e reduced motion do projeto. Os scripts upstream complementam a validação, sem comprovar o fluxo completo da aplicação.

O upstream requer Node.js e Chrome/Chromium para verificações; React é pertinente à saída React. Confira as versões atuais antes de instalar. Não altere políticas de sandbox nem publique na galeria da comunidade para contornar limitações ou sem pedido correspondente.

## Instalação opcional

Comando de instalação por projeto conferido no README:

```bash
npx skills add wheresryan22/anatomy
```

Leia a skill instalada e os recursos que ela exigir ao criar a figura. O kit não inclui a biblioteca, exemplos ou scripts upstream.
