# Ordo - Organize seu fluxo, conquiste seu dia.

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
