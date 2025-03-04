const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;

const mulher = {
    nome: 'Maria',
    image: '',
    minibio:'teste de mini bio',
}

function mostraMulher(request, response) {
    response.json(mulher);
}

function mostraPorta() {
    console.log('O servidor criado e rodando na porta', porta);
}

app.use(router.get('/mulher', mostraMulher));
app.listen(porta, mostraPorta);