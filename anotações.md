# Dicas
1 - Iniciar utilização de uma nova lib/ferramenta/banco de dados
- Seguir passo a passo da documentação
- Caso não esteja tão claro, pesquisar referências (chatGPT, Google, Youtube*)
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
  - MySQL - docker pull mysql 
-  Instalar container de Postgres no docker
  - docker run --name appTasksPostgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
  - Acessar/Conectar o container Postgres no Docker
    - docker exec -it appTasksPostgres psql -U postgres
      - Após acessar o Postgres dentro do Docker o prompt de comando no Terminal do VSCode deve estar assim: postgres=#
      - Para listar as tabelas existentes digite o comando
        - \dt
      - Para sair do banco digite o comando
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
      - Para remover o container utilizar o comando docker rm appTasksPostgres -f

      
 -  Instalar container de MySQL no docker
  - docker run --name app-Tasks-Mysql -e MYSQL_ROOT_PASSWORD=appTasks -d mysql



# Documentação:

 - https://chat.openai.com/chat - Para consulta em geral
 - https://www.npmjs.com/package/express - Para instalar express pelo gerenciador de pacotes npm
 - https://github.com/expressjs/express - Para instalar express
 - https://www.postgresql.org/ - Para instalar as libs do banco de dados Postgres
 - https://www.mysql.com/ - Para instalar as libs do banco de dados MySQL
 - https://hub.docker.com/_/postgres - Para instalar o banco de dados Postgres dentro do Docker
 - https://hub.docker.com/_/mysql - Para instalar o banco de dados MySQL dentro do Docker
 - https://npmtrends.com/ - Para analisar dados sobre as libs utiliazdas no NPM
 - https://www.npmjs.com/package/pg - 
 - https://github.com/brianc/node-postgres
 - https://node-postgres.com/
