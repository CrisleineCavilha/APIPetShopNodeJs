const express = require('express')
const ControllerUsuario = require('../controllers/usuarios')
const authMiddleware = require('../middleware/auth')

const controller = new ControllerUsuario()
const routerUsuario = express.Router()

routerUsuario.post('/api/login', controller.Login)
routerUsuario.get('/api/usuario/:id', authMiddleware, controller.ConsultarUm)
routerUsuario.get('/api/usuario/', authMiddleware, controller.ConsultarTodos)
routerUsuario.post('/api/usuario', authMiddleware, controller.Create)
routerUsuario.put('/api/usuario/:id', authMiddleware, controller.Update)
routerUsuario.delete('/api/usuario/:id', authMiddleware, controller.Delete)

module.exports = routerUsuario