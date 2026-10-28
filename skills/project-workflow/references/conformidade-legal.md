# Conformidade legal de sites

Referência opcional para revisar um site antes de publicá-lo no Brasil: dados pessoais, cookies e rastreadores, páginas legais, direitos do consumidor, imagens, licenças e conteúdo verificável. Carregue quando o usuário pedir revisão legal ou quando um site público coletar dados, vender produtos ou serviços, usar rastreadores ou publicar imagens de pessoas.

O agente não é advogado e o resultado não é parecer jurídico. O trabalho é organizar evidências, preparar minutas e apontar o que um profissional precisa confirmar. Sites voltados a outros países exigem análise própria (por exemplo, GDPR na União Europeia).

## Regras desta revisão

- Não invente dados da empresa: razão social, nome fantasia, CNPJ/CPF, endereço, e-mail, telefone ou encarregado. Se faltar, pergunte.
- Não preencha esses campos com exemplos plausíveis. Deixe um pendente visível (por exemplo, `[CNPJ: pendente]`) e bloqueie a publicação enquanto ele existir. Aqui, pendente visível é melhor que texto completo inventado.
- Não invente leis, artigos, prazos ou multas. Cite só o que puder sustentar e escreva "não tenho certeza" quando for o caso, indicando o que o advogado deve confirmar.
- Toda página legal gerada é **minuta para revisão jurídica**, identificada assim no relatório e no commit.
- Siga as regras comuns de autorização: publicar, remover conteúdo do ar ou alterar integrações de terceiros exige pedido correspondente.

## Etapa 1: diagnóstico

Antes de alterar o site, entregue um inventário com evidência de onde cada item aparece no código ou na página:

| Item | O que levantar |
|---|---|
| Dados pessoais coletados | Formulários, campos, WhatsApp, newsletter, login, pagamento; finalidade e para onde vão |
| Rastreadores e cookies | Analytics, pixels de anúncios, mapas de calor, cookies próprios; quando disparam (antes ou depois de consentimento) |
| Conteúdo de terceiros | Vídeos, mapas, chat, fontes e scripts por CDN; o que cada um envia ao carregar |
| Imagens de pessoas | Quem aparece, se há crianças, origem e autorização conhecida |
| Licenças | Imagens, vídeos, fontes, ícones, músicas e textos de terceiros; licença e exigência de crédito |
| Afirmações | Depoimentos, números, selos, prêmios e promessas de resultado; se há comprovação |
| Identificação | Dados da empresa já presentes no site e onde |
| Venda | Produtos ou serviços vendidos online, meio de pagamento, entrega, troca e cancelamento |

Liste também os dados que podem deixar de ser coletados. Se o site não coleta nada nem vende, diga isso; o restante da revisão encolhe na mesma proporção.

## Etapa 2: implementação

Implemente em lotes depois do diagnóstico, parando só para pedir dados reais da empresa ou decisões do usuário. Não é preciso aprovação a cada página.

### Páginas legais

- **Política de privacidade:** quais dados, finalidade, base legal de cada tratamento, compartilhamento com terceiros, retenção, direitos do titular e canal para exercê-los, contato do encarregado ou equivalente, e data de atualização.
- **Termos de uso:** quando houver serviço, conta, conteúdo enviado pelo usuário ou regras de uso a definir.
- **Política de cookies:** pode ser seção da política de privacidade; lista cada cookie ou rastreador, finalidade e duração.
- **Troca, devolução e cancelamento:** quando houver venda online.
- Links no rodapé de todas as páginas.

### Formulários e base legal

Consentimento é uma das bases legais da LGPD, não a única. Para cada formulário, identifique a base provável e marque para confirmação jurídica:

- Base em consentimento (por exemplo, newsletter e marketing): caixa **desmarcada**, texto específico e link para a política. Envio não pode depender de aceitar finalidades extras.
- Outra base (por exemplo, pedido de orçamento ou contato para atender o próprio pedido): aviso curto de privacidade junto ao botão, com link, sem exigir aceite.
- Remova campos sem finalidade clara.
- Newsletter e e-mails de marketing: descadastro simples em todas as mensagens.

### Cookies, rastreadores e embeds

- Diga se o site precisa de aviso de cookies a partir do inventário. Site sem rastreadores, só com cookies estritamente necessários, em geral não precisa de banner de consentimento. Analytics e pixels de anúncios costumam exigir consentimento, mas a base adequada depende do caso. Confirme com o guia de cookies da ANPD e o advogado.
- Se houver banner: opções de aceitar e recusar com o mesmo destaque, nada disparado antes da escolha, forma de mudar a escolha depois.
- Embeds com carregamento só depois do clique (fachada com imagem e botão): vídeos, mapas e chat. Para YouTube, prefira o domínio `youtube-nocookie.com` mesmo com fachada.
- Fontes hospedadas no próprio site em vez de CDN de terceiros, que recebe o IP do visitante.

### Imagens de pessoas

- Publicar imagem de pessoa identificável exige autorização dela, salvo exceções que o advogado deve avaliar.
- Crianças e adolescentes: autorização dos responsáveis e cuidado reforçado; a LGPD tem regra específica para dados de crianças.
- Prefira registrar quem autorizou fora do repositório público. Ofereça remoção rápida a pedido.

### Conteúdo verificável e identificação

- Remova ou marque para comprovação depoimentos, números, selos e promessas que o usuário não possa sustentar.
- Conteúdo de demonstração (nomes, depoimentos e fotos fictícios) deve ser trocado ou removido antes de publicar.
- Para quem vende online: identificação do fornecedor visível no rodapé e na página de contato (nome empresarial, CNPJ ou CPF, endereço físico e eletrônico e contato). Confirme a lista exata no decreto de comércio eletrônico.

### Licenças

Inventarie cada ativo de terceiros com fonte, licença e exigência de crédito. Exemplos comuns: fontes sob OFL podem ser usadas e redistribuídas com o aviso de licença; ícones sob MIT pedem manter o aviso de copyright e licença; bancos de imagem têm licenças próprias e restrições (marcas, pessoas, revenda). Confira a licença atual de cada fonte.

### Acessibilidade

Use os critérios do [módulo de front-end](../../frontend-figma-playwright/SKILL.md) e da [matriz](validation.md): texto alternativo, contraste AA, uso por teclado, foco visível e nomes claros em botões e links. Registre o que foi conferido.

## Normas a verificar

Lista de partida, não exaustiva. Confirme vigência, alterações e regulamentações antes de citar artigos ou prazos:

- Lei Geral de Proteção de Dados (Lei 13.709/2018) e orientações da ANPD, incluindo o guia sobre cookies.
- Marco Civil da Internet (Lei 12.965/2014).
- Código de Defesa do Consumidor (Lei 8.078/1990) e o decreto de comércio eletrônico (Decreto 7.962/2013), quando houver venda online.
- Lei Brasileira de Inclusão (Lei 13.146/2015), para acessibilidade.
- Lei de Direitos Autorais (Lei 9.610/1998) e regras de direito de imagem do Código Civil.
- Regras do setor do negócio (saúde, financeiro, educação, alimentos, publicidade e outros), que o usuário ou o advogado devem indicar.

## Entrega

Termine com um checklist em três grupos:

| Grupo | Conteúdo |
|---|---|
| Feito | O que foi alterado, com arquivos e evidência |
| Pendente | Dados da empresa faltando, decisões do usuário, autorizações de imagem |
| Revisar com advogado | Minutas, bases legais escolhidas, necessidade de banner, regras do setor, cada ponto marcado "não tenho certeza" |

Nenhuma página legal deve ser publicada como definitiva sem essa revisão.
