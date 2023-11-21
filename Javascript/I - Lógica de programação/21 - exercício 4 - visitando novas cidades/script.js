const nome = prompt('Qual é o seu nome?')
let resposta = prompt('Você já visitou alguma cidade? (Sim) (Não)')
let cidades = ''
let qtdCidades = 0

while(resposta === 'Sim'){
    qtdCidades++
    cidades +=  prompt('Qual o nome da cidade que visitou?') + ', '
    resposta = prompt('Você visitou alguma outra cidade? (Sim) (Não)')
}

alert(`${nome}, você visitou ${qtdCidades} cidades, dentre elas: ${cidades}`)