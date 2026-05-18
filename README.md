# Treinamento Semana 2

Módulo utilitário em TypeScript com funções de manipulação de arrays e objetos.

## Como rodar localmente

1. Clone o repositório
   "git clone https://github.com/seu-usuario/my-repo.git"

2. Instale as dependências
   "npm install"

3. Configure as variáveis de ambiente
   Copie o arquivo de exemplo e preencha os valores:
   "cp .env.example .env"

4. Rode o projeto
   "npm run dev"

## Variáveis de ambiente

| Variável | Descrição |
|---|---|
| DATABASE_URL | URL de conexão com o banco de dados |
| API_KEY | Chave de autenticação da API |
| PORT | Porta que o servidor vai rodar |

## Estrutura de pastas
```
my-repo2/
├── src/
│   ├── index.ts       # arquivo principal
│   ├── problem1.ts    # funções de filtro e ordenação de usuários
│   ├── problem3.ts    #
│   └── problem5.ts    # função groupBy
├── .env.example       # modelo de variáveis de ambiente
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```