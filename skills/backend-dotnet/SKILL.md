---
name: backend-dotnet
description: Implementar APIs, serviços e regras C#/.NET preservando contratos, arquitetura e convenções do repositório, sem impor abstrações ou atualizar dependências fora do escopo.
---

# Back-end .NET

Aplique [as regras comuns](../project-workflow/references/common.md). Identifique TargetFramework, SDK fixado, nullable, analyzers, solução e padrões antes de editar.

- Preserve arquitetura e dependências entre camadas existentes. Não introduza Repository, Unit of Work, CQRS, mediator ou novas camadas sem um problema concreto que justifique a mudança.
- Diferencie validação de entrada, invariantes de negócio e restrições de persistência. Use DTOs explícitos nas fronteiras e evite exposição acidental de entidades.
- Preserve contrato HTTP, autenticação e compatibilidade. Confira consumidores antes de alterar nomes/formatos. Use o padrão de erro adotado, como ProblemDetails quando pertinente.
- Preserve async em I/O e propague CancellationToken quando APIs e fluxo permitirem.
- Em integrações, explicite timeout, cancelamento, falhas e quais retries são seguros. Não repita efeitos não idempotentes sem proteção.
- Não atualize runtime, SDK ou dependências fora da necessidade da tarefa.

Para persistência, leia [database-persistence](../database-persistence/SKILL.md). Se contrato ou operação mudar, carregue [documentação](../software-documentation/SKILL.md) conforme necessário. Use as linhas aplicáveis da [matriz de validação](../project-workflow/references/validation.md), incluindo autorização e compatibilidade além do build.
