const express = require('express')
const ControllerAtendentes = require('../controllers/atendentes')
const authMiddleware = require('../middleware/auth')

const controllerAtendente = new ControllerAtendentes()
const routerAtendente = express.Router()


routerAtendente.post('/api/atendente/', authMiddleware, controllerAtendente.Create)
routerAtendente.put('/api/atendente/:idUsuario', authMiddleware, controllerAtendente.Update)
routerAtendente.delete('/api/atendente/:idUsuario', authMiddleware, controllerAtendente.Delete)

module.exports = routerAtendente