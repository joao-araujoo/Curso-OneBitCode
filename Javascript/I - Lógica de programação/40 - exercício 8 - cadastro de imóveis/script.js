const properties = []
let option

do {
    option = prompt(`Imóveis cadastrados: ${properties.length}\n\n1- Salvar imóvel\n2- Mostrar imóveis salvos\n3- Sair`)

    switch(option){
        case '1':
            let owner = prompt('Qual o nome do proprietário?')
            let rooms = prompt('Qual a quantidade de quartos?')
            let bathrooms = prompt('Qual a quantidade de banheiros?')
            let hasGarage = prompt('Possui garagem? (1) Sim (2) Não')

            if(hasGarage === '1'){
                hasGarage = 'Sim'
            } else {
                hasGarage = 'Não'
            }

            properties.push({owner: owner, rooms: rooms, bathrooms: bathrooms, hasGarage: hasGarage})
            break
        case '2':
            for(let i in properties){
                alert(`Imóvel ${Number(i) + 1}: \n\nNome do proprietário: ${properties[i].owner}\nQuantidade de quartos: ${properties[i].rooms}\nQuantidade de banheiros: ${properties[i].bathrooms}\nPossui garagem: ${properties[i].hasGarage}`)
            }
            break
        case '3': 
            alert('Saindo...')
            break
        default:
            alert('Escolha uma opção válida!')
    }

} while (option !== '3')