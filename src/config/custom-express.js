const express = require('express');
require('marko/node-require').install();
require('marko/express');
bodyParser = require('body-parser')


const app = express();//instanciando o express, ou seja, criando um objeto atraves do construtor interno dele
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({ // usando um middleware
    extended: true
}));

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}))




app.use('/estatico', express.static('src/app/public'));


const rotas = require('../app/rotas/rotas.js');

rotas(app);

module.exports = app;