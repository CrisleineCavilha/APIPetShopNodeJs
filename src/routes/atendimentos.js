const express = require('express');
const controllerAtendimentos = require('../controllers/atendimentos.js');

const controllerAtendimento = new controllerAtendimentos();

const routerAtendimento = express.Router();

routerAtendimento.get('/api/atendimento/:idAtendimento', controllerAtendimento.ConsultarUm);
routerAtendimento.get('/api/atendimento', controllerAtendimento.ConsultarTodos);
routerAtendimento.post('/api/atendimento', controllerAtendimento.Create);
routerAtendimento.put('/api/atendimento/:idAtendimento', controllerAtendimento.Update);
routerAtendimento.delete('/api/atendimento/:idAtendimento', controllerAtendimento.Delete);


module.exports = routerAtendimento


