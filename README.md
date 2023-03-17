# appTasksPostgres

# Requisitos:
- node
- yarn/npm/pnpm
- docker com Postgres e/ou MySQL

# Passos iniciais

[X] Iniciar aplicação node (yarn/npm/pnpm init -y)
[X] Refatorar ajustar código para Typescript
[X] Webframework (Express). Refatorar mudando para (Fastify)
[X] Banco de dados (Postgres ou MySQL) rodando em um container Docker. Queries SQL puras.

# Features e requisitos

## CRUD de tarefas

- Campos de tarefas: Nome, descrição, quantidade de horas, data de conclusão
[] - Deverá ser possível realizar a criação de uma task
  - Será uma rota privada
[] -  Deverá ser possível realizar a atualização de uma task
[]  - Será uma rota privada, somente o usuário que criou a task poderá atualiza-la
[] -  Deverá ser possível realizar a deleção de uma task
[]  - Será uma rota privada, somente o usuário que criou a task poderá deleta-la 
[] -  Deverá ser possível listar as tasks
[]  - Será uma rota privada,o usuário somente verá as tasks que ele mesmo criou. Deverá ser possível ordenar e filtrar as tasks com base nos campos "created_at" e "done"
[] -  Deverá ser possível visualizar uma task  
[]  - Será uma rota privada, o usuário somente verá a task que ele mesmo criou. 

## Cadastro de usuários

[] - Deverá ser possível cadastrar um novo usuário. Será uma rota pública que receberá nome, e-mail, e senha. O Nome precisará ter pelo menos 3 caracteres. O e-mail deverá ser uma e-mail válido. A senha deverá ter no mínimo 6 caracteres
[] - Não deverá existir usuários duplicados: verificar utilizando o e-mail
[] - A senha de cada usuário deverá ser salva no banco de dados de forma criptografada

## Atualização de perfil

[] - Deverá ser possível um usuário inserir uma nova foto de perfil. Será uma rota privada
[] - Deverá ser possível atualizar os dados de um usuário. Será uma rota privada

## Login (autenticação)

[] - Deverá ser possível realizar login. Será uma rota pública que receberá e-mail e senha
[] - Um usuário que não for cadastrado não deverá conseguir logar na aplicação

## Melhorias

- Desenhar a solução, utilizando por exemplo fluxogramas e wireframes
- Criar modelagem do banco de dados
- Webframework (Fastfy)
- Documentação com OpenAi 3.0
- Configurar ESLint, Prettier, Ts-prune