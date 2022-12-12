let opção
let dinheiro = parseFloat(prompt('Qual a quantidade de dinheiro?'))

do {
    opção = prompt(`R$${dinheiro}\n\n1- Adicionar\n2- Remover\n3- Sair\n`)
    switch(opção){
        case '1':
            let qtdAdicionada = parseFloat(prompt('Qual a quantidade a ser adicionada?'))
            dinheiro += qtdAdicionada
            break
        case '2':
            let qtdRemovida = parseFloat(prompt('Qual a quantidade a ser removida?'))
            dinheiro -= qtdRemovida
            break
        case '3':
            alert('saindo...')
            break
        default:
            alert('Escolha uma opção válida!')
    }
} while(opção !== '3')