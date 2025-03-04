const express = require('express'); // iniciando o express
const router = express.Router(); // configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid'); // importando o uuid

const app = express(); // iniciando o app
app.use(express.json()); // usando o json para fazer as requisições
const porta = 3333; // criando a porta

// lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome:'Maria',
        idade: 30,
        naturalidade: 'Pará',
    },
    {
        id: '2',
        nome:'Joana',
        idade: 25,
        naturalidade: 'São Paulo',
    },
    {
        id: '3',
        nome:'Ana',
        idade: 35,
        naturalidade: 'Rio de Janeiro',
    },
    {
        id: '4',
        nome: 'Paula',
        idade: '37',
        naturalidade: 'Bahia',
    }
]


// POST
function criaMulher(request, response) {
    const novaMulher = {
        id: uuidv4(),
        nome:request.body.nome,
        idade: request.body.idade,
        naturalidade: request.body.naturalidade,
    }

    mulheres.push(novaMulher);

    response.json(mulheres);
}



// GET
function mostraMulheres(request, response) {
    response.json(mulheres);
}

// PORTA
function mostraPorta() {
    console.log('O servidor criado e rodando na porta', porta);
}


app.use(router.get('/mulheres', mostraMulheres)); // rota para mostrar as mulheres
app.use(router.post('/mulheres', criaMulher)); // rota para criar uma nova mulher
app.listen(porta, mostraPorta); // servidor ouvindo a porta