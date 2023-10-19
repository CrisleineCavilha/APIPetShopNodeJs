const express = require('express');
const router = require('./src/routes/clientes.js');
const routerCachorro = require('./src/routes/cachorros.js');
const routerAtendimento = require('./src/routes/atendimentos.js');
const routerUsuario = require('./src/routes/usuarios.js')


const app = express();

const porta = 3000;

app.use(express.json());
app.use(router);
app.use(routerCachorro);
app.use(routerAtendimento);
app.use(routerUsuario);


app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}.`)
});