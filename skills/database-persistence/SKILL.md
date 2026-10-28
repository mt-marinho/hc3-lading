---
name: database-persistence
description: Alterar consultas, persistência, schema e migrations avaliando isolamento de dados, concorrência e compatibilidade de implantação; distinguir criação, revisão e aplicação de migrations.
---

# Banco e persistência

Leia [as regras comuns](../project-workflow/references/common.md). Identifique banco, ORM, mapeamentos, migrations, consumidores e estratégia de implantação.

- Em EF Core, mantenha padrões de DbContext/configuração e nomenclatura. Ao criar migration, revise operações e SQL antes de propor aplicação.
- Criar migration, gerar/revisar SQL e aplicar são operações distintas. Aplicação compartilhada/produção segue a autorização existente ou exige autorização que faltar. Não aplique como efeito colateral de uma verificação.
- Avalie compatibilidade entre versões, dados existentes, backfill, backup/restauração e rollback ou expand/contract quando pertinentes.
- Para escrita concorrente, considere atualização perdida e duplicatas. Requisito de unicidade pode precisar de constraint; consulta prévia sozinha não impede corrida.
- Confira autorização e isolamento entre usuários/tenants em leituras e gravações afetadas.
- Projete consultas para o uso real e avalie N+1. Não use AsNoTracking, Include, índices ou SQL manual indiscriminadamente.
- Use transações para efeitos atômicos e idempotência quando o fluxo exigir. Seeds/fixtures devem usar dados controlados.

Planeje verificações pela [matriz](../project-workflow/references/validation.md). Relate operações de implantação ainda necessárias, inclusive se o código estiver pronto e a migration ainda não tiver sido aplicada.
