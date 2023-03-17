# Dicas
1 - Iniciar utilização de uma nova lib/ferramenta/banco de dados
- Seguir passo a passo da documentação
- Caso não esteja tão claro, pesquisar referências (chatGPT, Google, YouTube*)
- Porém sempre dar preferência a documentação oficial
- Comparar libs/libraries(bibliotecas) com [npmtrends] 

# Primeiros passos
- Iniciar aplicação node;
- Gerenciador de pacotes (NPM);
  - npm init -y
- Webframework (Express);
  - npm i express
- Instalar BD no Docker
  - Postgres - docker pull postgres
  -  Instalar container de Postgres no docker
    ** docker run --name apptasks-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
    *- Dados de acesso: Host - localhost, Username, Password e Database - postgres
   
    ** docker run --name apptasks-postgres -e POSTGRES_USER=apptasks -e POSTGRES_PASSWORD=apptasks -e POSTGRES_DB=apptasks -p 5432:5432 -d postgres
     *- Dados de acesso: Host - localhost, Username, Password e Database - apptasks       
  - Acessar/Conectar o container Postgres no Docker
    - docker exec -it apptasks-postgres psql -U postgres
      - Após acessar o Postgres dentro do Docker o prompt de comando no Terminal do VSCode deve estar assim: postgres=#
      - Para listar as tabelas existentes digite o comando
        - \dt
      - Para sair do container digite o comando
        - \q
      - 
        - \z  
      - Para saber a versão do Postgres + S.O instalados digite o comando
        - SELECT version()          
      - Para testar o banco digite o comando
        - SELECT 2 + 2;
      * Convenção:
      - "-d" - rodar o container em background, ou seja, ao executar o comando ele libera o terminal para outras atividades;
      - "-e" - Referente a environment, ou seja, ambiente, por exemplo, quando está criando um container POSTGRES_USER and POSTGRES_PASSWORD são variáveis de ambiente, precisam obrigatoriamente do "-e" na frente;
      - "-f" - Força a rodar algum comando, por exemplo remover um container, mesmo que esteja rodando;
      - "-U" - Referente ao usuário, por exemplo quando vamos criar um comando que seja necessário indicar o usuário;
      - "-w" - Referente a senha do usuário, por exemplo quando vamos criar um comando que seja necessário indicar a senha do usuário;


      - Para verificar quais os containers que estão rodando utilizar o comando docker ps
      - Para remover o container utilizar o comando docker rm apptasks-postgres -f

----------------------------------------------------------------------------------------------------------------------------

- Instalar BD no Docker
  - MySQL - docker pull mysql    
  -  Instalar container de MySQL no docker
    ** docker run --name apptasks-mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=apptasks -p 3306:3306 -d mysql
    *- Dados de acesso: Host - localhost, Database - apptasks, Username and Password - root

    ** docker run --name apptasks-mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=apptasks -e MYSQL_PASSWORD=apptasks -e MYSQL_DATABASE=apptasks -p 3306:3306 -d mysql
    *- Dados de acesso: Host - localhost, Database - apptasks, Username and Password - root, ou apptasks

  - Acessar/Conectar o container MySQL no Docker
    - docker exec -it apptasks-mysql bash

    - Para sair do container digite o comando
      - \exit

# REFATORANDO do EXPRESS para FASTIFY juntamente de JAVASCRIPT para TYPESCRIPT - Primeiros passos

- Alterar as extensões de .js para .ts
- Na documentação instalar o pacote do fastify
  - npm i fastify ou yarn add fastify
- Copiar as configurações iniciais e colar no server.ts
- Tirar fora a importação do pacote do express no server.ts
- Tirar a dependência do express no package.json
- Rodar npm install, ou npm i, ou yarn para ajustar/atualizar as dependências.
- Renomear a variável que era chamada de fastify para app, "para ficar mais semântico" com o comando CTRL+SHIFT+L após selecionar a palavra fastify
- Manter a importação do database no topo do server.ts
- Tirar a configuração do CommonJS
- Inicialmente comentar o database para utilizar o "core da feature" que estamos implementando
- Instalar o Typescript como dependência de desenvolvimento
- Rodar o comando npx tsc --init. Vai gerar um arquivo na raiz do projeto chamado tsconfig.json
- Instalar as dependências do node para typescript com o comando npm i @types/node -D.
- Instalar como dependência o módulo tsx (typescript execute) com o comando npm i tsx -D
- Cria o script "dev": "tsx watch src/server.ts" para rodar com o comando npm run dev
- Para testar uma requisição http, inserir em qualquer browser o link http://[::1]:3000 com o npm run dev sendo executado. Deve aparecer {"hello":"world"}.
- Iniciar a criar os endpoint/rotas.



# Documentação:

 - https://chat.openai.com/chat - Para consulta em geral
 - https://www.npmjs.com/package/express - Para instalar express pelo gerenciador de pacotes npm
 - https://github.com/expressjs/express - Para instalar express
 - https://www.postgresql.org/ - Para instalar as libs do banco de dados Postgres
 - https://www.mysql.com/ - Para instalar as libs do banco de dados MySQL
 - https://hub.docker.com/_/postgres - Para instalar o banco de dados Postgres dentro do Docker
 - https://hub.docker.com/_/mysql - Para instalar o banco de dados MySQL dentro do Docker
 - https://npmtrends.com/ - Para analisar dados sobre as libs utilizadas no NPM
 - https://www.npmjs.com/package/pg - Referente ao BD Postgres
 - https://github.com/brianc/node-postgres - Referente ao BD Postgres
 - https://node-postgres.com/ - Para fazer query no banco de dados diretamente do NodeJs
 - https://www.fastify.io/ - Para instalar fastify no lugar do express
 - https://www.fastify.io/docs/latest/Guides/Getting-Started/ - Documentação oficial para iniciar instalação do fastify
 - https://www.typescriptlang.org/ - Documentação oficial do typescript
 - https://www.typescriptlang.org/docs/ - 
 - https://www.npmjs.com/package/tsx - Documentação de biblioteca que roda módulo tsx 
 - https://www.npmjs.com/package/dotenv - 

 