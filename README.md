# CRUD de Produtos MVC

## CRUD Completo (Create, Read, Update e Delete)
Esta aplicação é uma lista de tarefas feita em Node.js, no Padrão MCV (Model, View, Controller).

Projeto inicialmente feito no curso de "NodeJS do zero a Maestria", cujo objetivo é criar uma aplicação MVC que ultilize a ODM (Object Data Model) Mongoose para o MongoDB. Foi desenvolvida juntamente com o Prof° Matheus Battisti pela Udemy Academy.

## Tecnologias usadas
* Linguagem: TypeScript
* Banco de Dados: MongoDB
* FrontEnd: handlebars
* BackEnd: Node.js
* ODM: Mongoose 

## Como iniciar esta aplicação:

### Antes de Tudo: Você precisa ter instalado em sua máquina: 
* MongoDB
* Node.js
* Obs: As informações do banco de dados e servidor estão no arquivo .env.example

### Iniciar a aplicação
1. Fazer download ou cópia do repositório
2. Abra a pasta raiz no Terminal CMD ou Power Shell
3. Digite o comando npm install: será criada a pasta node_modules na pasta raiz do projeto
4. Renomeie o arquivo ".env.example"  para ".env"
5. Certifique-se que o mongoDB esteja funcionando em sua máquina.  
6. No CMD ou Power Shell digite o comando "npm run dev" para iniciar a aplicação: Se estiver tudo ok aparecerá a seguinte mensagem, server Funcionando: http://localhost:3000.
7. Para derrubar o server: *crtl + c* no terminal cmd e *y* logo após.

### Rotas
As rotas desta aplicação estão no arquivo productsRoutes.js
Sendo a rota principal: http://localhost:3000/products

## Atualizações
* Aplicação reescrita em TypeScript
* Aplicação do .env para variáveis de ambiente
* Mudança do código para paradigma POO

Obs: Esta é uma adaptação deste <a href="https://github.com/Enthony2021/NodeJS_MongoDB"> projecto </a> de estudo com MongoDB "puro" para o mongoose.
