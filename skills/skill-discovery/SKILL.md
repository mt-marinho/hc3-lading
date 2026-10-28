---
name: skill-discovery
description: Encontrar e avaliar skills existentes quando o usuário pedir ou houver lacuna recorrente de capacidade; verificar compatibilidade e origem antes de recomendar ou instalar.
---

# Descoberta de skills

Leia [as regras comuns](../project-workflow/references/common.md). Não pesquise novas skills para toda tarefa rotineira.

1. Defina domínio, tarefa, plataforma e se o pedido é busca, recomendação ou instalação.
2. Confira skills já disponíveis e convenções do projeto antes de procurar externamente.
3. Use termos específicos no catálogo ou CLI, como `npx skills find playwright visual regression`, verificando a sintaxe atual. Se CLI faltar, use busca web e fontes do projeto; não instale Node apenas para pesquisar.
4. Inspecione os candidatos: aderência ao problema; compatibilidade; fonte e manutenção; instruções/scripts; dependências, serviços e permissões; sobreposição com skills existentes. Instalações e estrelas são sinais de descoberta, não certificação de qualidade.
5. Apresente poucas opções pertinentes com origem, requisitos e diferenças. Confira o comando na fonte antes de recomendá-lo como válido.
6. Instale somente no escopo autorizado. Pedido explícito para instalar autoriza essa instalação; não repita confirmação. Se o usuário apenas pediu busca, apresente a recomendação e peça autorização antes de instalar. Esclareça projeto versus usuário quando isso afetar o resultado. Flags sem interação não substituem autorização.
7. Se não houver opção adequada, prossiga com capacidades disponíveis ou proponha skill focada se o uso for recorrente.

Use [o catálogo](../project-workflow/references/catalog.md) para as fontes já discutidas. A página AgenticSkills espelha conteúdo upstream; confirme comportamento e comandos no projeto de origem. Atualizar skills não é automático: considere mudanças e compatibilidade antes de atualizar.
