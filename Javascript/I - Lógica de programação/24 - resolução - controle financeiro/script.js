let saldo = parseFloat(prompt('Informe a quantidade de dinheiro inicial:'))
let opção = ''

do {
    opção = prompt('Saldo disponivel: R$' + saldo + '\n\n1. Adicionar dinheiro\n2. Remover dinheiro\n3. Sair')
    switch(opção){
        case '1':
            saldo += parseFloat(prompt('Informe o valor a ser adicionado:'))
            break
        case '2':
            saldo -= parseFloat(prompt('Informe o valor a ser removido:'))
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Escolha uma opção válida!')
    }
} while(opção !== '3')