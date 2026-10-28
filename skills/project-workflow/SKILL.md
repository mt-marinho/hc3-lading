---
name: project-workflow
description: Coordenar tarefas de implementação em projetos novos ou existentes, preparar AGENTS.md quando ausente e carregar somente os módulos de front-end, back-end, banco ou documentação necessários.
---

# Fluxo de projeto

Leia [references/common.md](references/common.md) uma vez por tarefa. Resolva referências em relação à pasta deste arquivo. Se um recurso não puder ser lido, informe a falta; não substitua silenciosamente suas regras por um resumo presumido.

1. Identifique a raiz do projeto e o resultado solicitado. Leia instruções ancestrais e locais aplicáveis, README, configuração e estado das alterações locais. Preserve trabalho prévio do usuário.
2. Classifique o projeto: novo sem stack, recém-criado com scaffold ou existente. No primeiro, use o briefing para propor escolhas mínimas; nos demais, preserve padrões encontrados. Não infira produto, idioma ou stack pelo nome da pasta.
3. Antes de implementar, carregue [project-agent-md](../project-agent-md/SKILL.md) se faltar AGENTS.md. Se já existir, siga-o; atualize apenas regras diretamente afetadas e comprovadamente desatualizadas, sem reformular políticas não solicitadas.
4. Selecione os módulos necessários. UI: [front-end](../frontend-figma-playwright/SKILL.md); C#/.NET: [back-end](../backend-dotnet/SKILL.md); dados: [persistência](../database-persistence/SKILL.md); docs: [documentação](../software-documentation/SKILL.md). Descoberta e coordenação são condicionais, não etapas obrigatórias.
5. Para mudanças entre camadas, alinhe contrato e fluxo de dados antes de editar: entradas, saídas, autorização, erros e estados da UI. Planeje compatibilidade e ordem de implantação quando necessárias. Organize a ordem de implementação conforme dependências reais.
6. Use [a matriz de validação](references/validation.md) para selecionar verificações proporcionais e concluir pelo comportamento integrado. Carregue essa referência apenas quando planejar ou executar validação.

Não crie DESIGN.md, plano extenso, ADR ou novas dependências em toda tarefa. Use esses artefatos quando a mudança exigir, quando o projeto adotar ou quando o usuário pedir.

## Opções especializadas

Para pedido de auditoria ou investigação de segurança, consulte [a opção Cloudflare](references/security-audit.md). Para uma figura técnica explicativa ou elemento visual específico, considere [Anatomy](../frontend-figma-playwright/references/anatomy.md). Para revisar um site antes de publicá-lo (dados pessoais, cookies, páginas legais, consumidor, imagens e licenças), use [a referência de conformidade legal](references/conformidade-legal.md). Carregue esses recursos somente quando pertinentes; não são módulos obrigatórios nem instalações automáticas.
