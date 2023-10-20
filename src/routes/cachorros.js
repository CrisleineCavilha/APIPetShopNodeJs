const express = require('express');
const controllerCachorros = require('../controllers/cachorros.js');
const authMiddleware = require('../middleware/auth.js');

const controllerCachorro = new controllerCachorros();
const routerCachorro = express.Router();

routerCachorro.get('/api/cachorro/:id', authMiddleware, controllerCachorro.ConsultarUm);
routerCachorro.get('/api/cachorro', authMiddleware, controllerCachorro.ConsultarTodos);
routerCachorro.post('/api/cachorro',authMiddleware, controllerCachorro.Create);
routerCachorro.put('/api/cachorro/:id', authMiddleware, controllerCachorro.Update);
routerCachorro.delete('/api/cachorro/:id',authMiddleware, controllerCachorro.Delete);

module.exports = routerCachorro
