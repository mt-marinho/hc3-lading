# Matriz de validação por mudança

Selecione linhas pertinentes ao escopo, critérios de aceitação e instruções do projeto. Não execute toda a matriz em toda tarefa. Confira os efeitos dos comandos antes de rodá-los, conforme [common.md](common.md).

| Mudança | Evidência mínima pertinente |
|---|---|
| AGENTS.md ou configuração de trabalho | Comandos/caminhos conferidos nos arquivos; obrigatoriedade sustentada por evidência; nenhuma tecnologia inventada |
| Regra de negócio | Caso válido, violação da regra e condições de limite relevantes |
| Correção de bug | Reprodução do problema e verificação da correção; teste de regressão quando viável e útil; limitação documentada se não houver teste |
| Endpoint/DTO | Contrato, entradas inválidas, erros, autenticação e autorização aplicáveis; compatibilidade dos consumidores |
| Consulta | Resultado, filtros, ordenação e paginação quando houver; isolamento entre usuários/tenants; acesso a dados compatível com o uso |
| Gravação concorrente | Atualização perdida, duplicatas, unicidade, transação e idempotência quando exigidas |
| Migration | Operações e SQL gerados, impacto em dados, compatibilidade entre versões, backfill e recuperação; não aplicar para validar em ambiente compartilhado sem autorização |
| Integração externa | Sucesso, falha, timeout, cancelamento e segurança de retries pertinentes; preferir ambientes e dados controlados |
| Interface | Comparação com Figma, fluxo, larguras pertinentes, teclado/foco, estados e reduced motion; screenshots com conteúdo estabilizado |
| Animação ligada ao scroll | Cada cena em desktop e celular com `prefers-reduced-motion` emulado nos dois valores; versão estática completa; âncoras e diálogos com scroll suave; sem overflow horizontal nem erros de console |
| Documentação | Compatibilidade com código, comandos e caminhos existentes; diferenciar instruções conferidas de execução real |
| ADR | Convenção local, identificador único, status sustentado por evidência, contexto/decisão/alternativas/consequências; links de substituição coerentes; distinguir aceitação de implementação |
| Publicação de site com dados, vendas ou imagens de pessoas | Inventário de dados, rastreadores, embeds e licenças; páginas legais marcadas como minuta; nenhum dado da empresa inventado; checklist de feito, pendente e revisão de advogado |
| CI/infra | Sintaxe/configuração, permissões e impacto operacional; conferir sem provocar deploy ou publicação não autorizados |

Verifique critérios funcionais além de build, lint e types. Um comando verde não prova autorização correta, semântica de negócio ou equivalência visual. Quando a validação falhar, investigue a causa; repita ou amplie verificações só quando houver correção, falha ou dúvida relevante.

Projetos novos sem ferramentas configuradas: registre que não há comando disponível; não invente scripts para preencher o relatório. Em interface bloqueada por Figma/Playwright, use o procedimento de disponibilidade do módulo de front-end.
