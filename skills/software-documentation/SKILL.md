---
name: software-documentation
description: Criar e manter documentação técnica, ADRs, README, OpenAPI e runbooks coerentes com o projeto. Usar quando a mudança exigir registro de decisão durável ou atualização de contrato, configuração e operação.
---

# Documentação de software

Leia [as regras comuns](../project-workflow/references/common.md). Inspecione documentos e implementação antes de escrever. Descreva comportamento atual e identifique propostas, decisões e funcionalidades ainda não implementadas.

## Escolher a fonte

| Necessidade | Documento |
|---|---|
| Início rápido, execução local e orientação | README |
| Entradas, saídas, erros e segurança HTTP | OpenAPI e referência de API adotada |
| Decisão durável e suas consequências | ADR; leia [o fluxo de ADRs](references/adr.md) |
| Operação, diagnóstico, recuperação e rollback | Runbook |
| Como agentes devem trabalhar repetidamente no projeto | AGENTS.md; veja [a orientação reutilizável](references/agents-documentation.md) |

Uma mudança pode afetar mais de uma fonte. A ADR explica a escolha; o contrato e o runbook descrevem como o sistema funciona e é operado. Mantenha uma explicação principal para cada assunto e referências entre elas, sem duplicar regras.

## Fluxo

1. Confira as convenções, os documentos afetados e a mudança real. Identifique se é implementação, proposta ou registro histórico.
2. Atualize apenas fontes pertinentes. Crie ADR para decisões duráveis de arquitetura, modelo/semântica de dados, segurança ou integração; não para ajustes triviais. Se já houver uma ADR válida para a mesma decisão, referencie-a.
3. Para ADR, leia a referência específica e adapte [o modelo](assets/adr-template.md). Preserve o formato do projeto quando existir.
4. Confira caminhos, comandos, variáveis, contratos e exemplos. Diferencie configuração obrigatória, opcional e de desenvolvimento; mantenha a distinção entre comandos encontrados e executados.
5. Atualize AGENTS.md somente quando mudar uma orientação estável. Histórico de execução pertence a issue, PR ou relatório.
6. Confira a [matriz de validação](../project-workflow/references/validation.md). Relate documentos alterados, ADRs criadas/substituídas e pendências reais. Não execute exemplos com impacto externo sem a autorização correspondente.

Carregue referências de ADR e AGENTS.md apenas quando esses documentos fizerem parte da tarefa. Não exija aprovação adicional só para preparar documentação local; aprovação de uma decisão segue o processo do projeto e as autorizações já concedidas.

Se o pedido incluir figura técnica explicativa, considere [Anatomy](../frontend-figma-playwright/references/anatomy.md) quando seu estilo ajudar o conteúdo. Ela não é necessária para ADRs, README ou runbooks textuais.
