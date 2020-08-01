const { Router } = require('express');

const showData = require('./funcaoAuxiliar');

const routes = Router();

routes.get('/', showData);

module.exports = routes;
