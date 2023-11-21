const personagens = [
    { nivel: 42, nome: "Thrall", raça: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raça: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raça: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raça: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raça: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raça: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raça: "Anão", classe: "Guerreiro" },
]

// MAP

// const nomes = []

// for(let pos in personagens){
//     nomes.push(personagens[pos].nome)
// }

const nomes = personagens.map(function (personagem){
    return personagem.nome
})

console.log(nomes)


// FILTER

// const orcs = []

// for (let i = 0; i < personagens.length; i++) {
//     if(personagens[i].raça === 'Orc'){
//         orcs.push(personagens[i])
//     }
// }

const orcs = personagens.filter(function (personagem){
    return personagem.raça === 'Orc'
})

console.log(orcs)


// REDUCE

const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal) 

const raças = personagens.reduce(function (valorAcumulado, personagem){
    if(valorAcumulado[personagem.raça]){
        valorAcumulado[personagem.raça].push(personagem)
    } else {
        valorAcumulado[personagem.raça] = [personagem]
    }

    return valorAcumulado
}, {})

console.log(raças)

// SORT

const personagensOrdenados = personagens.slice().sort(function (a, b){
    return a.nivel - b.nivel 
})

console.log(personagens)
console.log(personagensOrdenados)