let option = ''
let pacients = ['João', 'Felipe', 'Marcos']
let list = ''

do {

    for(let pos in pacients){
        list += `${Number(pos) + 1}° - ${pacients[pos]}\n`
    }

    option = prompt('Pacientes:\n\n' + list + '\n\n1- Novo paciente\n2- Consultar paciente\n3- Sair')

    switch(option){
        case '1':
            let pacientName = prompt('Qual o nome do paciente?')
            pacients.push(pacientName)
            break
        case '2':
            if(pacients[0] != undefined){
                let firstPacient = pacients.shift()
                alert('O paciente ' + firstPacient + ' será consultado')
            } else {
                alert('Não há pacientes na fila!')
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