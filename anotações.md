# Dicas
1 - Iniciar utilização de uma nova lib/ferramenta/banco de dados
- Seguir passo a passo da documentação
- Caso não esteja tão claro, pesquisar referências (chatGPT, Google, Youtube*)
- Porém sempre dar preferência a documentação oficial
- 


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
  - docker run --name app_Tasks_Postgres -e POSTGRES_PASSWORD=app_Tasks -p 5432:5432 -d postgres
- -  Instalar container de MySQL no docker
  - docker run --name app-Tasks-Mysql -e MYSQL_ROOT_PASSWORD=appTasks -d mysql


# Documentação:
 - https://chat.openai.com/chat
 - https://expressjs.com/
 - https://www.npmjs.com/package/express
 - https://github.com/expressjs/express
 - https://www.postgresql.org/
 - https://www.mysql.com/
 - https://hub.docker.com/_/postgres
 - https://hub.docker.com/_/mysql