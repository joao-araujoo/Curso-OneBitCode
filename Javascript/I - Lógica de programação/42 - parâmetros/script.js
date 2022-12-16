function double(x){
    console.log('O dobro de ' + x + ' é ' + (x * 2))
}

// double(5)
// double(7)
// double()


function sayHello(name = 'Mundo'){
    console.log(`Olá, ${name}!`)
}

// sayHello('João')
// sayHello()


function sum(a, b, c, d, e){
    console.log(`O resultado da soma é ${a + b + c + d + e}`)
}
 
// sum(123, 24, 2, 65, 54)

function createUser(name, email, password, type = 'admin'){
    const user = {
        name, //Mesmo que name: name
        email,
        password,
        type
    }

    console.log(user)
}

function newUser(name, type = 'admin', email, password){
    const user = {
        name, //Mesmo que name: name
        email,
        password,
        type
    }

    console.log(user)
}

// createUser('joao', 'joaozinho@gmail.com', '0000')
// newUser('joao', 'joaozinho@gmail.com', '0000')

function muitosParametros(nome, telefone, endereço, aniversario, email, senha){
    // ...
}

function objetoComoParametro(usuario){
    // ...
    usuario.nome
    usuario.senha
}

muitosParametros('nome', 'telefone', 'casa', 'aniversario', 'email', 'senha')

const dadosDoUsuario = {
    nome: '',
    telefone: '',
    email: '',
    senha: '', 
    endereço: '',
    aniversario: ''
}

objetoComoParametro(dadosDoUsuario)