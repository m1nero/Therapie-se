const express = require('express');
const app = express();
const routes = require("./routes");
const path = require('path');

const session = require('./config/session');

const methodOverride = require('method-override');
require('../src/app/models/index');

app.use(express.json());

app.use(session);
app.use((req, res, next) => {
    res.locals.session = req.session
    next();
});

app.use(methodOverride('_method'));
app.use(express.urlencoded ({extended : true}));
app.use(express.static('./src/public'));

app.set('views', path.join(__dirname, 'app', 'views'));
app.set('view engine', 'ejs');
app.use(routes);

app.listen(3000);