# Gestão e documentação no Linear

Use esta referência quando o usuário ou o projeto adotar Linear. O modelo foi generalizado do AGENTS.md fornecido pelo usuário: Linear como fonte de gestão e índice operacional; repositório como referência detalhada da implementação. Não copie nomes de projetos, caminhos nem regras de domínio de outro repositório.

## Configurar o contexto

Descubra time, projeto e issue a partir das instruções do repositório, briefing ou referências confirmadas. Em projeto novo, peça os identificadores que faltarem antes de vincular o repositório a um projeto Linear. Não escolha pelo nome parecido e não crie projetos ou issues automaticamente só para preencher campos.

Se Linear ainda não estiver configurado, documente essa pendência explicitamente. Pode preparar AGENTS.md e inspecionar arquivos; não afirme ter consultado uma issue sem acesso. Se a consulta for requisito obrigatório antes de implementação, obtenha a referência/acesso ou uma alternativa autorizada para essa etapa.

## Antes de implementar

Leia a issue correspondente e confirme escopo, prioridade, critérios de aceitação, dependências e impacto em segurança, contratos e dados/migrations. Consulte recursos de arquitetura e operação vinculados ao projeto quando pertinentes. Confronte análises históricas com código e documentação atuais.

O Linear organiza backlog, tarefas, prioridades, marcos, bugs e dívida técnica. Não use o status do ticket como prova de que o código existe ou foi implantado. As convenções técnicas e os detalhes de execução continuam no repositório.

## Concluir e registrar evidências

Quando o usuário autorizar este fluxo de gestão, registre na issue o resultado de implementação, comandos/verificações e resultados reais, critérios atendidos, riscos e pendências. Vincule commit, PR, ADR, migration, runbook e frames/screenshots pertinentes quando essas referências existirem.

Para banco, inclua compatibilidade entre versões, necessidade de backup/restauração, backfill e plano de rollback ou expand/contract conforme a mudança. Distinga migration criada, SQL revisado e aplicação executada; não execute operações externas para preencher o relatório.

Recursos do projeto no Linear servem de índice para arquitetura, operação, segurança/recuperação e roadmap/validação. Vincule fontes mantidas no repositório em vez de duplicar documentos completos na issue.

Respeite o fluxo de status do time: implementação pronta pode significar revisão pendente. Não marque como concluída uma tarefa com critério obrigatório não atendido. Leitura de issue, isoladamente, não autoriza alterar prioridade, responsável, marcos, roadmap, criar tickets ou notificar outras pessoas. Aproveite a autorização já concedida para registrar o resultado, sem repeti-la a cada atualização.

Nunca envie credenciais, tokens, chaves, strings de conexão, backups ou dados reais sensíveis. Se não houver ferramenta ou permissão para registrar o resultado, entregue um resumo pronto para colar e declare a atualização no Linear como pendente.

## Bloco adaptável para AGENTS.md

Preencha o time e o projeto apenas com dados confirmados. Ajuste as fontes do mapa à estrutura real; se estiverem ausentes, declare isso em vez de inventar arquivos. A adoção do bloco pelo usuário estabelece o fluxo pretendido do projeto; não representa uma ação executada no Linear.

```markdown
## Gestão do projeto

Linear Team: [time confirmado]
Linear Project: [nome e identificador/link confirmados]

O Linear é a fonte de gestão para backlog, tarefas, prioridades,
marcos, bugs e dívida técnica.

Antes de iniciar desenvolvimento, consulte a issue correspondente.
Confirme escopo, prioridade, critérios de aceitação, dependências
e impactos em segurança, contratos ou migração de dados.

Ao concluir, atualize a issue com resultado da implementação,
evidências de validação, riscos restantes e links de commit, PR,
ADR, migration, runbook e Figma pertinentes. Preserve critérios
pendentes e siga o fluxo de status adotado pelo time.

Para mudanças de banco, documente compatibilidade de implantação,
necessidade de backup/restauração e plano de rollback ou
expand/contract quando aplicáveis.

Não inclua credenciais, backups ou dados reais sensíveis no Linear.

## Mapa de documentação

Os recursos do projeto no Linear são o índice operacional de
arquitetura, operações, segurança/recuperação e roadmap/validação.
O repositório mantém a referência detalhada da implementação.

Liste aqui apenas as fontes reais do projeto: README, documentação
de API, diretório de ADRs e runbooks aplicáveis. Revalide análises
históricas contra o código atual antes de agir sobre elas.
```
