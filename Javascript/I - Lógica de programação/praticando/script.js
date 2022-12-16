let option 

do {
    option = prompt('Escolha um modo abaixo:\n\n1- Maiores de idade\n2- Sexo e altura\n3- Nomes malucos\n4- Sair')

    switch(option){
        case '1':
            let ages = []
            let end1
            let ofAge = 0
            let underAge = 0

            do {
                ages.push(Number(prompt('Insira uma idade:')))
                end1 = confirm('Deseja adicionar outra idade?')
            } while(end1 !== false)

            for(let pos in ages){
                ages[pos] >= 18 ? ofAge++ : underAge++
            }
            
            alert(`Maiores de idade: ${ofAge}\nMenores de idade: ${underAge}`)
            break
        case '2':
            break
        case '3':

            let end3
            let names = [] 
            let namesText = ''
            while(end3 !== false){
                let name = prompt('Digite algum nome:')
                let inverseName = ''
                for(let i = name.length - 1; i >= 0; i--){
                    inverseName += name[i]
                }
                names.push(inverseName)
                end3 = confirm('Deseja continuar?')
            }
            for(let pos in names){
                namesText += `Nome ${Number(pos) + 1}: ${names[pos]}\n`
            }
            alert(`Resultados:\n\n${namesText}`)

            break
        case '4':
            alert('Saindo...')
            break
        default: 
            alert('Opção inválida!')
            break
    }

} while(option !== '4')