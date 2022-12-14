let option = ''
let cards = ['7 de paus', 'Ás de espadas', '10 de ouros']
let list = ''

do {

    for(let pos in cards){
        list += `- ${cards[pos]}\n`
    }

    option = prompt('Cartas:\n\n' + list + '\n\n1- Adicionar uma carta\n2- Puxar uma carta\n3- Sair')

    switch(option){
        case '1':
            let cardName = prompt('Qual o nome da carta?')
            cards.push(cardName)
            break
        case '2':
            if(cards[0] != undefined){
                let lastCard = cards.pop()
                alert('Carta puxada: ' + lastCard)
            } else {
                alert('Não há mais cartas na pilha!')
            }
            break
        case '3':
            alert('Saindo...')
            break
        default: 
            alert('Escolha uma opção válida!')
    }

    list = ''
    
} while(option !== '3')