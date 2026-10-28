---
name: agent-coordination
description: Coordenar tarefas amplas com responsabilidades separáveis, roteamento por risco, revisão e handoff entre agentes quando delegação estiver disponível e autorizada.
---

# Coordenação entre agentes

Leia [as regras comuns](../project-workflow/references/common.md). Delegue somente quando responsabilidades separáveis trouxerem benefício e as instruções ativas permitirem. Tarefas pequenas podem ficar em um agente.

| Papel | Entrega |
|---|---|
| Orquestrador | Escopo, dependências, critérios e integração final |
| Implementador | Mudança delimitada, arquivos e decisões |
| Verificador | Evidências e conferência dos critérios |
| Revisor | Impacto arquitetural, contratos, segurança e dados |
| Executor | Pesquisa ou trabalho mecânico delimitado |

Papéis não exigem agentes distintos. Evite escritores simultâneos nos mesmos arquivos; declare escopo e dono. Use branches/worktrees quando apropriado e defina quem integra. Revisão adicional tem mais valor em contratos públicos, autorização, migrations, concorrência e produção.

## Capacidade e escalada

Escolha capacidade/esforço conforme natureza, ambiguidade e risco, entre opções disponíveis. Rotinas e pesquisa costumam precisar menos esforço; arquitetura, segurança e mudanças em dados precisam mais análise. Ajuste raciocínio antes de trocar modelo quando fizer sentido e houver suporte.

Não fixe nomes/preços/rankings voláteis nem instale roteador automático para tarefas comuns. Roteamento de APIs em produção é outro projeto. Se uma verificação falhar, investigue e faça uma correção focada; escale esforço/revisão quando a causa continuar incerta ou a tentativa falhar. Não repita tentativas sem hipótese nova. Verificações verdes não provam cobertura do comportamento.

Observe qualidade, retrabalho, tempo e custo por tarefa concluída quando disponíveis. Registre lições recorrentes úteis nas instruções do projeto; não transforme toda falha isolada em regra. Não invente custo nem adicione telemetria sem autorização.

## Handoff

Inclua objetivo; escopo de arquivos e operações; contexto e instruções locais; decisões tomadas; critérios de aceitação; comandos/resultados reais; riscos e pendências; branch/worktree e responsável pela integração se existirem. Preserve o contexto já descoberto em vez de repassar somente o pedido inicial.

O orquestrador confere o resultado integrado pela [matriz](../project-workflow/references/validation.md) e critérios da tarefa. Resolva conflitos materiais com evidência e instruções aplicáveis; relate decisões e limites que restarem.
