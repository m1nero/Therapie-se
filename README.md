# Readme Therapie-se
Esse arquivo tem a finalidade de mostrar passo-a-passo o processo de rodar o **Therapie-se** 🧠 🖥️

## 1) Clone o repositório usando o seguinte comando  :heavy_check_mark:

```bash
$ git clone https://github.com/m1nero/Therapie-se.git
```

## 2) Após abrir o projeto no editor de codigo de sua preferência, instale o nodemon, node_modules e o SequelizeORM usando os segintes comando: 🖥️

Com o Node.js e MySql já instalado utilize os comandos abaixo

Nodemon
```bash
$ npm install -g nodemon
```

Node Modules
```bash
$ npm install
```

SequelizeORM
```bash
$ npm i sequelize
```

## 3) Importe o banco de dados ou crie e execute as migrations utilizando os seguintes comandos: 💾

Para criar o banco dados
```bash
$ npm sequelize db:create
```

Rodar as migrations
```bash
$ sequelize-cli db:migrate
```

## 5) Para rodar a aplicação utilize o seguinte comando: 🔥 🚀

```bash
$ npm start
```

## 6) O Therapie-se roda na porta 3000: 🔥 🚀

[**http://localhost:3000/**](http://localhost:3000/)

:heavy_check_mark: Made by B&B Corporation Devs :tm:

#