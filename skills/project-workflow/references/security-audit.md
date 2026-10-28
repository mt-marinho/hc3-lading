# Opção externa: auditoria de segurança Cloudflare

Fonte: [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill). README e SKILL.md consultados em 17/10/2026; instalação e auditoria não executadas. Revisão observada: `c1c8a8c1471069fb0e188eeaff69b8e8db6564a8`.

## Quando escolher

Use como opção para auditoria explícita de código ou investigação de uma vulnerabilidade. A skill upstream distingue orientação focada de auditoria completa; carregar suas instruções não inicia uma auditoria completa. Ela combina cobertura documentada, validação independente e resultados estruturados, distinguindo confirmado, pendente de validação e rejeitado.

## Integração com o kit

Defina alvo, revisão do código, escopo e saída antes de usar. Leia as instruções upstream instaladas e os arquivos auxiliares exigidos pelo modo escolhido. Não execute a auditoria apenas porque uma alteração comum tocou autenticação ou banco; faça a análise proporcional da tarefa e proponha auditoria quando houver necessidade.

A auditoria completa requer delegação e Node.js. Para executar código do alvo, upstream exige sandbox imposto pelo sistema, rede externa bloqueada, ambiente controlado, limites de recursos e escritas restritas a scratch. Se esses controles não estiverem disponíveis, mantenha a inspeção estática e registre a validação pendente; não simule isolamento com uma pasta ou instrução ao agente.

Escolha saída fora do código versionado conforme upstream. Relatórios podem ser sensíveis: não publique achados ou reproduções automaticamente em GitHub/Linear. Registre referências no tracker apenas no escopo autorizado. Remediação e deploy são tarefas separadas da descoberta.

## Instalação opcional

Comando conferido no README; escolha o escopo conforme a autorização:

```bash
npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit
```

O kit referencia a opção externa e não incorpora seus validadores nem presume que ela esteja instalada.
