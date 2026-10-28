# Documentação no AGENTS.md de cada projeto

Ao criar AGENTS.md ou atualizar sua política de documentação dentro do escopo, adapte o bloco abaixo. Inspecione os caminhos e fontes do projeto primeiro. Este texto é uma orientação para novos registros, não uma obrigação de reorganizar documentos existentes.

```markdown
## Documentação e decisões

Mantenha a documentação alinhada ao comportamento implementado e identifique propostas como propostas. Atualize README para execução/orientação, OpenAPI para contratos HTTP e runbooks para operação e recuperação, quando aplicáveis.

Consulte decisões anteriores antes de alterar arquitetura, dados, segurança ou integrações. Registre novas decisões duráveis em ADRs seguindo o diretório e formato adotados; na ausência de convenção, use docs/adr/NNNN-titulo-curto.md. Inclua contexto, decisão, alternativas consideradas e consequências. Não crie ADR para alterações triviais.

Diferencie Proposta, Aceita e implementação. Preserve decisões históricas: quando uma decisão aceita for trocada, crie nova ADR e vincule a substituição nos dois registros após a aceitação. Mantenha links e o mapa de documentação atualizados.

Use caminhos e comandos reais. Declare se um comando foi encontrado nos arquivos ou efetivamente executado. Mantenha resultados temporários em issues/PRs ou relatórios, não como regras persistentes neste arquivo.
```

Use apenas fontes que existirem ou forem necessárias ao projeto. Em API sem OpenAPI, não afirme que existe um arquivo; em projeto com outro padrão de ADR, adapte o trecho. Preserve a política de aprovação e as instruções existentes; não marque decisões como Aceitas sem evidência nem solicite autorização já concedida.

Se o projeto adotar Linear, complemente o mapa com [o bloco de gestão e índice operacional](../../project-workflow/references/linear.md). Use recursos do Linear para apontar às fontes detalhadas no repositório; não duplique a mesma documentação em cada issue.
