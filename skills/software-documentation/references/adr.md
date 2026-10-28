# Registro de decisões arquiteturais (ADR)

Estas são convenções de fallback do kit. O formato, idioma, diretório e processo do projeto têm precedência.

## Quando registrar

Crie uma ADR quando a tarefa estabelecer ou substituir uma decisão com consequências duráveis: limites de módulos/camadas, contratos e integrações, armazenamento/modelo de dados, semântica de negócio, segurança, autorização, concorrência ou estratégia de implantação/recuperação. A decisão deve ter um motivo concreto e consequências que futuros mantenedores precisarão entender.

Não crie ADR para alteração de texto, correção pequena que apenas cumpre uma decisão existente, atualização rotineira ou detalhes de implementação sem consequência durável. Nesse caso, atualize a documentação pertinente ou referencie a decisão atual. Se o pedido for apenas explorar opções, registre proposta, não decisão aprovada.

## Descoberta e numeração

1. Leia AGENTS.md, README e registros existentes. Procure também convenções como docs/decisions ou arquivos MADR. Use o padrão local.
2. Se não houver convenção, use `docs/adr/NNNN-titulo-curto.md`: número com pelo menos quatro dígitos, começando em 0001, e título descritivo em minúsculas separado por hífens.
3. Escolha o próximo número a partir do maior identificador existente, não da quantidade de arquivos. Não reutilize lacunas nem renumere o histórico.
4. Antes de concluir/commitar, confira colisões no estado integrado disponível. Se houver escrita concorrente, combine a numeração com o responsável pela integração; renomeie somente a ADR nova e ajuste seus links se necessário.
5. Mantenha um índice quando o projeto já tiver um. Em estrutura recém-criada, inclua um link para a pasta/ADR no mapa de documentação ou README pertinente; crie índice dedicado se o volume justificar.

## Conteúdo

Adapte [o modelo](../assets/adr-template.md) ao projeto. Inclua contexto/problema, restrições relevantes, decisão ou proposta, alternativas realmente consideradas e consequências positivas e negativas. Registre data real, status, responsáveis e referências quando conhecidos. Não invente aprovação, alternativas, reuniões ou evidências para preencher campos.

Descreva os critérios usados na escolha e por que as alternativas não atenderam ao contexto. Se nenhuma alternativa tiver sido avaliada, declare isso quando relevante; não apresente comparação fictícia. Consequências precisam incluir custos, limitações e compromissos reais. Impactos operacionais, migração, segurança e plano de verificação podem ser resumidos e vinculados aos documentos adequados.

Não inclua segredos nem dados reais. Use caminhos relativos e links reais; não invente URL de PR ou issue. Remova campos opcionais vazios e todas as instruções de preenchimento do modelo.

## Ciclo de vida

| Status de fallback | Significado |
|---|---|
| Proposta | Decisão em discussão ou sem evidência de aprovação |
| Aceita | Escolha autorizada pelo responsável ou pelo processo do projeto |
| Rejeitada | Proposta avaliada e não adotada; preservar o motivo |
| Obsoleta | Decisão que deixou de se aplicar, sem substituição direta |
| Substituída | Decisão trocada por outra ADR, com vínculo explícito |

Use o vocabulário do projeto se diferente. Aceita não significa implementada ou implantada. Registre essas situações separadamente com evidência disponível.

Não marque Aceita apenas porque o agente escreveu o arquivo ou terminou o código. Use autorização explícita ou evidência do fluxo local. Quando o usuário já definiu a escolha e autorizou sua implementação, essa escolha pode ser registrada como Aceita, sem pedir a mesma aprovação outra vez. Registre responsável e referência somente quando conhecidos. Na ausência de decisão confirmada, mantenha Proposta e informe o que falta.

## Substituir sem apagar o raciocínio

Para mudar uma decisão aceita, crie uma nova ADR com o contexto atual e o motivo da mudança. Na nova, vincule a antiga como decisão substituída; na antiga, marque Substituída e vincule a nova somente quando a substituição estiver aceita. Enquanto a nova estiver em Proposta, a antiga continua vigente.

Preserve contexto, decisão e consequências históricos da antiga. Correções editoriais e links podem ser ajustados; não reescreva o histórico como se a decisão nova sempre tivesse existido. Se a decisão deixar de se aplicar sem substituta, use Obsoleta com motivo/data conforme evidência. Para registrar uma decisão anterior pela primeira vez, identifique o caráter retrospectivo e não invente data de adoção.

## Conferência final

Confira status, data, identificador único, título, links e coerência com decisões vigentes. Verifique se o conteúdo distingue proposta, escolha aceita e implementação. Atualize referências em README, OpenAPI, runbook ou AGENTS.md apenas onde forem afetadas. Uma ADR não substitui instruções operacionais nem autoriza deploy ou migration.
