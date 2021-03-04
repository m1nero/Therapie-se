const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
var Sequelize = require("sequelize");
const db = require('./database');

var sequelize = new Sequelize(db)
module.exports = session({
    store: new SequelizeStore({
        db: sequelize
    }),

    secret: 'chave',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000
    }
})