# Política de Segurança do Projeto Ordo

A segurança do nosso projeto e dos dados de nossos futuros usuários é uma prioridade máxima. Agradecemos o trabalho de pesquisadores de segurança e da comunidade para nos ajudar a manter o Ordo um ambiente seguro. Este documento descreve nosso escopo, boas práticas e como relatar uma vulnerabilidade de segurança.

## 1. Escopo de Segurança (Fase Alpha)

Nesta fase inicial do projeto, nosso foco de segurança está concentrado na fundação do nosso **backend e na proteção dos dados**. As principais áreas sob atenção são:

- **Autenticação e Autorização:** Garantir que o processo de login seja seguro, as senhas sejam armazenadas corretamente (usando hash) e que os tokens JWT sejam gerados e validados de forma segura.
- **Segurança do Banco de Dados:** Prevenir ataques de injeção de SQL e garantir que um usuário só possa acessar e manipular seus próprios dados (isolamento de dados).
- **Validação de Entradas (API):** Assegurar que todos os dados recebidos pelos nossos endpoints da API sejam validados e higienizados para prevenir a inserção de dados maliciosos.
- **Gerenciamento de Dependências:** Monitorar nossas dependências externas (`npm`) para garantir que não estamos utilizando bibliotecas com vulnerabilidades conhecidas.

## 2. Boas Práticas Recomendadas

- **NUNCA comite credenciais:** Chaves de API, senhas de banco de dados e outros segredos nunca devem ser versionados. Utilize o arquivo `.env` (que está no `.gitignore`) para gerenciar suas credenciais locais.
- **Use dependências seguras:** Antes de adicionar uma nova dependência, verifique sua popularidade e histórico. Periodicamente, rode `npm audit` para verificar vulnerabilidades nas dependências existentes.
- **HTTPS em Produção:** Todo o tráfego em nosso ambiente de produção será obrigatoriamente criptografado usando HTTPS.

## 3. Política de Relatórios de Vulnerabilidade

Levamos a sério todos os relatórios de segurança. Se você acredita ter encontrado uma vulnerabilidade de segurança no projeto Ordo, por favor, nos informe de forma responsável.

**Para relatar uma vulnerabilidade, envie um e-mail privado para:**
`murilo.azevedo.d.santos@gmail.com`

Por favor, inclua o máximo de informações possível no seu relatório:
- Tipo de vulnerabilidade (ex: SQL Injection, XSS, etc.).
- Uma descrição detalhada e os passos para reproduzir a falha.
- O impacto potencial da vulnerabilidade.

Nós nos comprometemos a investigar todos os relatórios e a fazer o nosso melhor para corrigir os problemas o mais rápido possível.

## 4. ⚠️ Regras para Abertura de Issues de Segurança

**NÃO ABRA UMA ISSUE PÚBLICA NO GITHUB PARA RELATAR UMA VULNERABILIDADE DE SEGURANÇA.**

Relatórios públicos podem colocar outros usuários em risco antes que uma correção esteja disponível. Qualquer issue de segurança criada publicamente será imediatamente fechada e solicitaremos que a comunicação continue através do canal privado.

## 5. Nossa Política de Resposta

Ao receber um relatório de segurança, faremos o seguinte:

1.  **Confirmação:** Confirmaremos o recebimento do seu relatório em até 48 horas úteis.
2.  **Triagem e Investigação:** Investigaremos a vulnerabilidade e determinaremos sua severidade e impacto.
3.  **Correção:** Iniciaremos o trabalho na correção da falha o mais rápido possível.
4.  **Comunicação:** Manteremos o relator atualizado sobre nosso progresso e o notificaremos quando a correção for lançada. Ofereceremos crédito público pela descoberta, se o relator assim desejar.

## 6. Fora do Escopo na Fase Alpha

Embora a segurança seja importante em todas as camadas, algumas áreas receberão atenção mais aprofundada nas fases seguintes. Estão temporariamente fora do escopo de testes intensivos na fase Alpha:

- **Segurança Avançada de Frontend:** Proteções contra ataques como Cross-Site Scripting (XSS) e Cross-Site Request Forgery (CSRF) serão o foco principal durante a Fase Beta.
- **Segurança de Infraestrutura:** Tópicos como proteção contra DDoS, Rate Limiting na API e configurações avançadas de firewall serão abordados na preparação para a Versão 1.0 Release.

## 7. Checklist de Segurança para Contribuidores

Antes de submeter um Pull Request, por favor, revise os seguintes pontos:

- [ ] **Sem Credenciais:** Verifiquei que nenhuma chave de API, senha ou outra credencial foi adicionada ao código.
- [ ] **Validação de Entradas:** Minhas alterações na API validam e higienizam todas as entradas do usuário para prevenir injeções.
- [ ] **Lógica de Autorização:** O código verifica se o usuário autenticado tem permissão para acessar ou modificar os dados solicitados (ex: um usuário não pode editar a tarefa de outro).
- [ ] **Dependências Seguras:** Rodei `npm audit` e não há novas vulnerabilidades críticas introduzidas pelas minhas dependências.
- [ ] **Não Expor Dados Sensíveis:** As respostas da API não expõem dados sensíveis desnecessariamente (ex: hash de senha do usuário).
