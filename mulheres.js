const express = require('express');
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
    {
        nome:'Maria',
        idade: 30,
        naturalidade: 'Pará',
    },
    {
        nome:'Joana',
        idade: 25,
        naturalidade: 'São Paulo',
    },
    {
        nome:'Ana',
        idade: 35,
        naturalidade: 'Rio de Janeiro',
    },
    {
        nome: 'Paula',
        idade: '37',
        naturalidade: 'Bahia',
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres);
}


function mostraPorta() {
    console.log('O servidor criado e rodando na porta', porta);
}


app.use(router.get('/mulheres', mostraMulheres));
app.listen(porta, mostraPorta);