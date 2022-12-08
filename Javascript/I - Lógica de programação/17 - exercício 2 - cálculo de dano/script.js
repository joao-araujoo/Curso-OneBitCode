//Personagem 1
const personagem1 = prompt('Qual o nome do primeiro personagem?')
const poderDeAtaque = parseFloat(prompt('Quanto poder de ataque tem o(a) ' + personagem1 + ' ?'))

//Personagem 2
const personagem2 = prompt('Qual o nome do segundo personagem?')
let pontosDeVida = parseFloat(prompt('Qual a quantidade de pontos de vida de ' + personagem2 + ' ?'))
const poderDeDefesa = parseFloat(prompt('Qual o poder de defesa de ' + personagem2 + ' ?'))
const possuiEscudo = prompt('O personagem possui escudo? (sim) (nao)') 

if(poderDeAtaque > poderDeDefesa && possuiEscudo === 'nao'){
    let dano = poderDeAtaque - poderDeDefesa
    pontosDeVida -= dano
} else if(poderDeAtaque > poderDeDefesa && possuiEscudo === 'sim'){
    let dano = (poderDeAtaque - poderDeDefesa) / 2
    pontosDeVida -= dano
} else if(poderDeAtaque <= poderDeDefesa){
    let dano = 0
    pontosDeVida -= dano
}

alert(`O(A) ${personagem1}, com ${poderDeAtaque} de poder de ataque, deixou o(a) ${personagem2} com ${pontosDeVida} pontos de vida, ${poderDeDefesa} pontos de defesa e ele(a) ${possuiEscudo} possuia um escudo`)