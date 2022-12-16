let pokemon = 'Charmander'

function evoluir(){
    pokemon = 'Charmeleon'
}

console.log(pokemon)
evoluir()
console.log(pokemon)

function criarAnimal(){
    let animal = 'gato'
}

criarAnimal()
// console.log(animal)


function avaliarNota(nota){
    if(nota >= 6){
        var aprovado = true
        let situação = 'aprovado'
    } else {
        var aprovado = false
        let situação = 'reprovado'
    }

    console.log(nota)
    console.log(aprovado)
    // console.log(situação)
}

avaliarNota(8)
avaliarNota(4)


function ola(){
    var texto = 'Olá, Mundo!'
}

// console.log(texto)

console.log(nome)
// console.log(sobrenome)

var nome = 'joao'
let sobrenome = 'araujo'

console.log(nome)
console.log(sobrenome)