const express = require('express'); // iniciando o express
const router = express.Router(); // configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid'); // importando o uuid - biblioteca para criar id únicos

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
        idade: 37,
        naturalidade: 'Bahia',
    }
]


// GET
function mostraMulheres(request, response) {
    response.json(mulheres);
}

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

// PATCH
function corrigeMulher(request, response) {
    function encontraMulher(mulher) {
        if(mulher.id === request.params.id) {
            return mulher;
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher);

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome;
    }

    if (request.body.idade) {
        mulherEncontrada.idade = request.body.idade
    }

    if (request.body.naturalidade) {
        mulherEncontrada.naturalidade = request.body.naturalidade
    }

    response.json(mulheres);
}


// DELETE
function deletaMulher(request, response) {
    function todasMenosEla(mulher) {
        if(mulher.id !== request.params.id) {
            return mulher;
        }
    }

    const mulheresQueFicam = mulheres.filter(todasMenosEla);

    response.json(mulheresQueFicam);
}



// PORTA
function mostraPorta() {
    console.log('O servidor criado e rodando na porta', porta);
}


app.use(router.get('/mulheres', mostraMulheres)); // rota para mostrar as mulheres
app.use(router.post('/mulheres', criaMulher)); // rota para criar uma nova mulher
app.use(router.patch('/mulheres/:id', corrigeMulher)); // rota para corrigir uma mulher
app.use(router.delete('/mulheres/:id', deletaMulher)); // rota para deletar uma mulher
app.listen(porta, mostraPorta); // servidor ouvindo a porta