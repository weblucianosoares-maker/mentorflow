---
description: Fazer commit e push das alterações para o GitHub
---

# Workflow: Commit e Push para GitHub

Este workflow automatiza o processo de commit e push das alterações para o repositório GitHub do MentorFlow.

## Passos

// turbo-all

1. **Verificar status do Git**
```bash
git status
```

2. **Adicionar todas as alterações**
```bash
git add .
```

3. **Criar commit com mensagem descritiva**
```bash
git commit -m "feat: [descrição da alteração]"
```
*Nota: A mensagem deve seguir o padrão Conventional Commits (feat, fix, docs, style, refactor, test, chore)*

4. **Fazer push para o repositório remoto**
```bash
git push origin main
```

## Exemplos de Mensagens de Commit

- `feat: adicionar nova seção de depoimentos`
- `fix: corrigir responsividade do header`
- `docs: atualizar README com instruções de instalação`
- `style: ajustar espaçamento dos componentes`
- `refactor: reorganizar estrutura de pastas`

## Verificação

Após o push, verifique no GitHub se as alterações foram enviadas corretamente:
https://github.com/weblucianosoares-maker/mentorflow
