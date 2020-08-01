const { Router } = require('express');
const lista = require('./lista');

const routes = Router();

routes.get('/', (req, res) => res.json(lista));

module.exports = routes;
