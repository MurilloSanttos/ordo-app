# Como Contribuir com o Projeto Ordo

Olá! Obrigado pelo seu interesse em contribuir com o Ordo. Estamos empolgados em ter você por perto! Este documento é um guia para ajudar você a participar do projeto de forma produtiva e organizada.

Toda contribuição, não importa o tamanho, é bem-vinda e valorizada.

## 🚀 Visão Geral da Contribuição (Fase Alpha)

Atualmente, o projeto Ordo está na **Fase Alpha**. Nosso foco principal é construir a fundação sólida do nosso backend e da estrutura de dados. Contribuições nesta fase são cruciais para garantir que a lógica de negócio seja robusta, segura e escalável.

**Áreas prioritárias para contribuição na Fase Alpha:**
- **Backend:** Desenvolvimento de endpoints da API em Node.js/Express.
- **Banco de Dados:** Scripts de migração, otimização de queries em MySQL.
- **Testes:** Criação de testes unitários e de integração para a API.
- **Documentação:** Melhorias no `README.md` e na documentação técnica da Wiki.

Contribuições relacionadas ao frontend serão o foco da próxima fase (Beta), mas sinta-se à vontade para abrir issues com sugestões.

## 📋 Pré-requisitos

Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas e configuradas:

- **Git:** Para controle de versão.
- **Node.js:** Versão `18.x` ou superior.
- **MySQL:** Uma instância local ou em servidor para o banco de dados.

Para o guia detalhado de instalação e configuração do ambiente, por favor, consulte nosso **[Guia de Instalação no README.md](README.md#🚀-guia-de-instalação-e-execução)**.

##  workflows/git">
### 1. Fluxo de Trabalho com Git

Nós utilizamos a estratégia **Git Flow**. Isso significa que todo o desenvolvimento acontece em ramos separados para manter a branch `main` sempre estável.

#### Convenção de Branches

- **`develop`**: Nossa branch principal de desenvolvimento. **Todo o trabalho deve começar a partir daqui.**
- **`feature/<nome-da-feature>`**: Para novas funcionalidades (ex: `feature/task-notifications`).
- **`bugfix/<nome-do-bug>`**: Para correções de bugs (ex: `bugfix/login-jwt-expiration`).

#### Estratégia de Commits

Adotamos o padrão **Conventional Commits**. Isso torna o histórico de commits mais legível e nos ajuda a automatizar a geração de changelogs. Cada mensagem de commit deve ter o formato:

`<tipo>(<escopo>): <descrição>`

- **Tipos comuns:** `feat` (nova funcionalidade), `fix` (correção de bug), `docs` (documentação), `style` (formatação), `refactor` (refatoração), `test` (testes), `chore` (tarefas de build/configuração).
- **Exemplo:** `feat(api): implementa endpoint para criar tarefas`

### 2. Trabalhando com Issues

- **Selecione uma Issue:** Antes de começar a codificar, navegue pelas [Issues](https://github.com/MurilloSanttos/ordo-app/issues) do projeto. Procure por issues associadas ao milestone `Fase Alpha`. Se você é novo, procure pela label `good first issue`.
- **Atribua a si mesmo:** Deixe um comentário na issue manifestando seu interesse e peça para que um mantenedor a atribua a você. Isso evita que duas pessoas trabalhem na mesma coisa.
- **Crie uma nova Issue:** Se você encontrou um bug ou tem uma ideia que não está listada, sinta-se à vontade para criar uma nova issue usando nossos templates.

### 3. Pull Requests (PRs)

O Pull Request é como você nos apresenta suas contribuições para revisão.

#### Processo de Abertura

1.  Crie sua branch a partir de `develop`: `git checkout -b feature/minha-feature develop`.
2.  Faça seus commits seguindo a convenção.
3.  Envie sua branch para o seu fork: `git push -u origin feature/minha-feature`.
4.  Abra um Pull Request para a branch `develop` do repositório principal.
5.  Preencha o template do PR, explicando **o que** você fez e **por que**. Link a issue que seu PR resolve usando `Closes #<numero-da-issue>`.

#### Critérios de Aceitação
- Seu PR deve estar ligado a uma issue existente.
- Seu código deve passar em todos os checks automatizados (Linter, Testes).
- Você deve ter feito uma auto-revisão do seu código antes de solicitar a revisão de outros.

### 4. Estilo de Código e Boas Práticas

- **Linting e Formatação:** O projeto está configurado com ESLint e Prettier. Antes de commitar, rode `npm run lint` e `npm run format` para garantir que seu código segue os padrões.
- **Testes:** Novas funcionalidades devem, sempre que possível, ser acompanhadas de testes. Na fase Alpha, o foco são os testes de unidade e integração para o backend.

### 5. Comunicação e Suporte

- **GitHub Issues:** Para discussões técnicas relacionadas a uma tarefa específica.
- **GitHub Discussions:** Para perguntas gerais, ideias, ou se precisar de ajuda para começar.
- **Código de Conduta:** Esperamos que todos os colaboradores sigam um código de conduta respeitoso e construtivo. A comunicação deve ser profissional e acolhedora.

### 🏁 Exemplo Prático (Resumo do Fluxo)

1.  **Fork** o repositório `ordo-app`.
2.  **Clone** o seu fork para sua máquina local.
3.  Escolha uma **Issue** para trabalhar.
4.  Crie uma nova **branch** a partir de `develop` (`git checkout -b feature/nome-da-issue develop`).
5.  Escreva seu código e **commits**.
6.  Faça o **Push** da sua branch para o seu fork.
7.  Abra um **Pull Request** para a branch `develop` do repositório original.
8.  Participe da **revisão de código** e faça os ajustes necessários.
9.  Celebre o **merge** da sua contribuição!

---

Estamos ansiosos para construir algo incrível com você. Bem-vindo(a) à equipe do Ordo!
