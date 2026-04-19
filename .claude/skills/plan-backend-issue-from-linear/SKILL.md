---
name: plan-backend-issue-from-linear
description: Planeja o desenvolvimento de uma issue de ponta a ponta. use-a quando o usuário passar um id ou link de uma issue do linar que descreve o trabalho a ser feito no backend (endpoints, regras, stack, critérios de aceite)
---

# planejar issue do backend

fluxo de desenvolvimento para buscar uma issue no linear e entregá-la pronta, testada e verificada contra a spec.

## 1. Obter a spec

Para obter uma skill, use o MCP do linear disponivel no projeto.

## 2. Ler a spec

extrair da spec:

- contexto
- query
- regras
- restrições
- stack e padrões
- critérios de aceite
- verificação

## 3. Planejar

- cria uma ToDo list com todas as coisas que precisam ser feitas
- antes de finalizar o planejamento, releia as specs e garanta:
  - não criar regressão
  - não criar patter / design / estilo de código desalinhado com o projeto
  - procure exemplos parecidos para manter a coesão da base de código

## 4. Implementar

- respeite a stack e o planejamento realizado

## 5. Testa

- escrever e executar testes relacionados
- se algum teste existente quebrar, verifique se foi causado por esse desenvolvimento. se sim, analise possiveis causas e PERGUNTE antes de resolver - é ideal validar se alguma regra de negócio não prevista precisa ser adicionada.

## 6. Conferir contra a spec do linear

- escreva um checklist com os itens definidos como critérios de aceite e valide um por um
