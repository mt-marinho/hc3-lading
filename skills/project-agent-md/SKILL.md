---
name: project-agent-md
description: Criar AGENTS.md específico ao iniciar implementação num projeto sem instruções persistentes e manter comandos, stack e regras comprovadamente desatualizados quando a tarefa os afetar.
---

# Instruções do projeto

Aplique [as regras comuns](../project-workflow/references/common.md). Ao usar este pacote em implementação, a preferência do usuário é criar AGENTS.md na raiz se estiver ausente. Consultas somente de leitura não precisam criar arquivos.

## Descobrir antes de escrever

Localize a raiz e leia instruções ancestrais, locais, README, manifests, solução, configuração e CI pertinentes. Um AGENTS.md existente deve ser preservado. Mantenha instruções válidas e alterações do usuário; não substitua o arquivo por um modelo padrão.

Projeto existente: extraia arquitetura e convenções do código e configuração atuais. Projeto novo com scaffold: registre o que o scaffold realmente contém. Projeto vazio: use escolhas explicitadas no briefing; enquanto a stack não existir, documente somente decisões confirmadas e diga que comandos ainda não estão disponíveis. Pergunte se uma escolha ausente mudar materialmente a solução.

## Conteúdo útil

Escreva uma versão curta com seções aplicáveis: propósito e stack; organização; comandos; convenções; validação; segurança/operação; mapa de documentação. Inclua domínios, tracker, Figma e integrações somente quando o projeto ou o usuário os estabelecer. Para UI, mantenha a preferência deste pacote de estruturar no Figma e conferir com Playwright; não invente arquivo ou node Figma.

Comandos encontrados em manifests/CI podem ser documentados como encontrados, ainda não executados. Use verificado por execução somente com evidência real. Não é necessário executar toda a suíte só para escrever AGENTS.md. Caminhos devem ser relativos ao projeto; referências devem funcionar em outra máquina, sem depender de F:/Skills.

## Documentação e ADRs

Ao criar ou manter a orientação de documentação, adapte [o bloco para AGENTS.md](../software-documentation/references/agents-documentation.md). Descubra o diretório/formato atual de ADR e as fontes existentes; não crie toda uma estrutura documental por padrão. Quando a tarefa trouxer uma decisão durável, carregue [software-documentation](../software-documentation/SKILL.md) para registrar a escolha conforme o projeto.

## Gestão no Linear

Quando o usuário/projeto adotar Linear, use [a orientação e o bloco de gestão](../project-workflow/references/linear.md). Registre time e projeto confirmados, o fluxo de consulta/atualização da issue e o mapa entre recursos do Linear e documentos reais do repositório. Em projeto novo, explicite configurações que ainda faltam; não invente identificadores nem crie recursos externos por conta própria.

## Manutenção

Revise AGENTS.md quando a tarefa mudar stack, comandos, arquitetura, limites de segurança ou fluxo de operação documentado. Atualize apenas a parte afetada e sustentada por evidência. Proponha separadamente uma reformulação de política que ultrapasse o pedido.

Histórico de tarefas, logs, resultados temporários e backlog ficam em issues, PRs ou relatórios. Não transforme AGENTS.md em diário de execução. Use um arquivo local mais próximo somente para regras realmente específicas de um subsistema.

Ao concluir, informe criação/manutenção, fontes consultadas e incertezas. Nenhuma instrução criada por esta skill autoriza ações externas adicionais.
