const express = require('express');
const controllerCachorros = require('../controllers/cachorros.js');

const controllerCachorro = new controllerCachorros();
const routerCachorro = express.Router();

routerCachorro.get('/api/cachorro/:id', controllerCachorro.ConsultarUm);
routerCachorro.get('/api/cachorro', controllerCachorro.ConsultarTodos);
routerCachorro.post('/api/cachorro', controllerCachorro.Create);
routerCachorro.put('/api/cachorro/:id', controllerCachorro.Update);
routerCachorro.delete('/api/cachorro/:id', controllerCachorro.Delete);

module.exports = routerCachorro
