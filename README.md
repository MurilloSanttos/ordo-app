# Ordo - Organize seu fluxo, conquiste seu dia.

<div align="center">

![Status do CI](https://github.com/MurilloSanttos/ordo-app/actions/workflows/ci.yml/badge.svg)
[![Licença](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
[![Versão](https://img.shields.io/badge/version-0.1.0--alpha-orange)](https://github.com/SEU-USUARIO/ordo-app/releases)
[![Segurança](https://img.shields.io/badge/security-Dependabot-brightgreen)](https://github.com/SEU-USUARIO/ordo-app/security)
[![Cobertura de Testes](https://img.shields.io/badge/coverage-TBD-lightgrey)](#)

</div>

Ordo é um aplicativo de To-Do List moderno e minimalista, projetado para ajudar você a organizar suas tarefas, focar no que é importante e alcançar seus objetivos com fluidez.

## ✨ Funcionalidades Planejadas

- **Gerenciamento Completo de Tarefas:** Crie, edite, conclua e exclua tarefas com facilidade.
- **Organização com Projetos:** Agrupe suas tarefas em projetos para manter tudo organizado.
- **Prioridades e Prazos:** Defina datas de vencimento e níveis de prioridade para nunca perder o foco.
- **Notificações Inteligentes:** Receba lembretes para tarefas importantes.
- **Sincronização na Nuvem:** Suas tarefas sincronizadas em todos os seus dispositivos.
- **Busca e Filtros:** Encontre qualquer tarefa rapidamente.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com uma stack moderna baseada em TypeScript:

- **Frontend:** React, TypeScript, Tailwind CSS, Zustand
- **Backend:** Node.js, Express.js, TypeScript
- **Banco de Dados:** MySQL
- **Autenticação:** JWT (JSON Web Tokens) e Bcrypt

### 🚀 Ambiente de Desenvolvimento Padronizado (VSCode)

Para garantir uma experiência de desenvolvimento consistente, nosso repositório inclui uma configuração pré-definida para o Visual Studio Code.

**Para começar, siga estes passos:**

1.  **Clone o repositório** e abra a pasta raiz no VSCode.
2.  **Instale as Extensões Recomendadas:** Assim que o projeto abrir, o VSCode deve exibir uma notificação no canto inferior direito perguntando: *"This workspace has recommended extensions. Do you want to install them?"*. Clique em **"Install"**.
3.  **Pronto!** A partir de agora:
    -   Seu código será **formatado automaticamente** toda vez que você salvar um arquivo.
    -   Erros de padrão de código (ESLint) serão **destacados em tempo real** e corrigidos ao salvar.
    -   Você pode iniciar a depuração pressionando `F5` ou acessando a aba "Run and Debug".
    -   Você pode iniciar os servidores rapidamente usando a paleta de comandos (`Ctrl+Shift+P`), digitando "Run Task" e escolhendo `Start Backend` ou `Start Frontend`.

## 🚀 Guia de Instalação e Execução

Para rodar este projeto localmente, siga os passos abaixo:

**Pré-requisitos:**
- Node.js (v18+)
- MySQL Server

**1. Clone o repositório:**
```bash
git clone https://github.com/MurilloSanttos/ordo-app.git
cd ordo-app
````

**2. Configure o Backend:**

```bash
cd backend
npm install
cp .env.example .env
# Edite o arquivo .env com suas credenciais do MySQL
npm run dev
```

**3. Configure o Frontend:**

```bash
cd ../frontend
npm install
npm run dev
```

**4. Acesse a aplicação:**
Abra seu navegador e acesse `http://localhost:5173` (ou a porta informada pelo Vite).

## 🗺️ Roadmap do Projeto

Nosso plano de desenvolvimento está dividido em três fases principais:

  - **[✔️] Fase Alpha (26/09 a 10/10):** Foco na construção do backend, APIs e banco de dados.
  - **[⏳] Fase Beta (13/10 a 24/10):** Desenvolvimento da interface do usuário e integração com o backend.
  - **[⬜] Versão 1.0 Release (27/10 a 07/11):** Testes, polimento, correções e implantação em produção.

## 🤝 Como Contribuir

Ainda estamos nas fases iniciais, mas em breve abriremos para contribuições. Fique de olho na nossa Wiki e no Guia de Contribuição\!

## 📜 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.
