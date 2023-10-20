const express = require('express');
const controllerAtendimentos = require('../controllers/atendimentos.js');
const authMiddleware = require('../middleware/auth.js');

const controllerAtendimento = new controllerAtendimentos();

const routerAtendimento = express.Router();

routerAtendimento.get('/api/atendimento/:idAtendimento', authMiddleware, controllerAtendimento.ConsultarUm);
routerAtendimento.get('/api/atendimento',authMiddleware, controllerAtendimento.ConsultarTodos);
routerAtendimento.post('/api/atendimento',authMiddleware, controllerAtendimento.Create);
routerAtendimento.put('/api/atendimento/:idAtendimento', authMiddleware, controllerAtendimento.Update);
routerAtendimento.delete('/api/atendimento/:idAtendimento', authMiddleware, controllerAtendimento.Delete);


module.exports = routerAtendimento


