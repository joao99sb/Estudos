const express = require('express')
const routes = express.Router()
const userController = require('./database/controllers/userController')
const productsController = require('./database/controllers/productsController')

routes.post('/',userController.create)
routes.get('/',userController.list)
routes.put('/',userController.update)
routes.delete('/',userController.delete)

routes.get('/products/:id',productsController.list)
routes.get('/products/',productsController.list)

module.exports= routes 