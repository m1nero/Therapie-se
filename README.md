# Readme Therapie-se
Esse arquivo tem a finalidade de mostrar passo-a-passo o processo de rodar o **Therapie-se** :muscle: :computer:

## 1) Clone o repositório usando o seguinte comando  :heavy_check_mark:

```bash
$ git clone https://github.com/m1nero/Therapie-se.git
```

## 2) Após abrir o projeto no editor de codigo de sua preferência, instale a node_modules usando o segintes comando :heavy_check_mark:

```bash
$ npm install
```
## 3) Crie o banco de dados e execute as migrations utilizando os seguintes comandos:

Para criar o banco dados
```bash
$ npm sequelize db:create
```

Rodar as migrations
```bash
$ sequelize-cli db:migrate
```

## 5) Para rodar a aplicação utilize o seguinte comando: :rocket:

```bash
$ npm start
```

## 6) O Therapie-se roda na porta 3000: :rocket:

[**http://localhost:3000/**](http://localhost:3000/)

:heavy_check_mark: Made by B&B Corporation Dev :tm:

#