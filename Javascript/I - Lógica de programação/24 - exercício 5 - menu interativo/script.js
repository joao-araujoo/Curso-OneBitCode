let opção

do {
    opção = prompt('Escolha uma opção:\n\n1- Login\n2- Comprar\n3- Vender\n4- Alugar\n5- Encerrar')
    switch (opção){
        case '1': 
            alert('Você escolheu a opção "login"')
            break
        case '2': 
            alert('Você escolheu a opção "comprar"')
            break
        case '3': 
            alert('Você escolheu a opção "vender"')
            break
        case '4': 
            alert('Você escolheu a opção "alugar"')
            break
        case '5': 
            alert('Você escolheu a opção "encerrar"')
            opção = '5'
            alert('Encerrando...')
            break
        default: 
            alert('Escolha uma opção válida!')
            break
    }
    
} while(opção !== '5')