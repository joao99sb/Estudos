const express = require('express')
const routes = express.Router()
const user = require('./database/controllers/userController')

routes.post('/cadastro',user.create)
routes.get('/cadastro',user.index)

routes.post('/login',user.login)


module.exports =routes