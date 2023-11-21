let option 
let vagas = []

function criarVaga(){
    let nome = prompt('Qual o nome da vaga?')
    let descrição = prompt('Adicione uma descrição à vaga:')
    let dataLimite = prompt('Qual a data limite?')
    let confirmar = confirm(`Nome: ${nome}\nDescrição: ${descrição}\nData limite: ${dataLimite}\nDeseja realizar a criação da vaga?`)
    if(confirmar){
        vagas.push({nome, descrição, dataLimite, candidatos: []})
    }
}

function mostrarVaga(i){
    let nomeCandidatos
    if(vagas[i].candidatos.length === 0){
        alert(`Vaga ${parseFloat(i) + 1}:\n\nNome da vaga: ${vagas[i].nome}\nDescrição: ${vagas[i].descrição}\nData limite: ${vagas[i].dataLimite}\nQuantidade de candidatos: 0\nNome dos candidatos: Não há candidatos inscritos!`)
    } else {
        for(let pos in vagas[i].candidatos){
            if(vagas[i].candidatos != undefined){
                nomeCandidatos += `${vagas[i].candidatos[pos]}, `
            }
        }
        alert(`Vaga ${parseFloat(i) + 1}:\n\nNome da vaga: ${vagas[i].nome}\nDescrição: ${vagas[i].descrição}\nData limite: ${vagas[i].dataLimite}\nQuantidade de candidatos: ${vagas[i].candidatos.length}\nNome dos candidatos: ${nomeCandidatos}`)
    }
}

const inscreverCandidato = function(){
    let nome = prompt('Qual o nome do candidato?')
    let indice = parseFloat(prompt('Qual o índice da vaga para inscrição?')) - 1
    let confirmar = confirm(`Vaga ${indice + 1}:\n\nNome: ${vagas[indice].nome}\nDescrição: ${vagas[indice].descrição}\nData limite: ${vagas[indice].dataLimite}\nQuantidade de candidatos: ${vagas[indice].candidatos.length}\n\nDeseja confirmar a inscrição?`)
    if(confirmar){
        vagas[indice].candidatos.push(nome)
    }
}

const excluirVaga = function(){
    let indice = (parseFloat(prompt('Qual o índice da vaga que deseja excluir?')) - 1)
    let confirmar = confirm(`Vaga ${indice + 1}:\n\nNome: ${vagas[indice].nome}\nDescrição: ${vagas[indice].descrição}\nData limite: ${vagas[indice].dataLimite}\nQuantidade de candidatos: ${vagas[indice].candidatos.length}\n\nDeseja confirmar a exclusão? [A EXCLUSÃO É PERMATENTE!]`)
    if(confirmar){
        vagas.splice(indice, 1)
    }
}

do {
    option = prompt('Escolha uma opção abaixo:\n\n1- Listar vagas disponíveis\n2- Criar uma nova vaga\n3- Visualizar uma vaga\n4- Inscrever um candidato em uma vaga\n5- Excluir uma vaga\n6- Sair')

    switch(option){
        case '1':
            if(vagas.length !== 0){
                for(let i in vagas){
                    alert(`${parseFloat(i) + 1} - ${vagas[i].nome}, ${vagas[i].candidatos.length} candidatos inscritos`)
                }
            } else {
                alert('Não há vagas disponíveis!')
            }
            break
        case '2':
            criarVaga()
            break
        case '3':
            if(vagas.length !== 0){
                let indice = parseFloat(prompt('Qual o índice da vaga que deseja visualizar?'))
                mostrarVaga(indice - 1)
            } else {
                alert('Não há nenhuma vaga existente!')
            }
            break
        case '4':
            if(vagas.length !== 0){
                inscreverCandidato()
            } else {
                alert('Não há vagas para se inscrever!')
            }
            break
        case '5':
            if(vagas.length !== 0){
                excluirVaga()
            } else {
                alert('Não há vagas para excluir!')
            }
            break
        case '6':
            alert('Saindo...')
            break
        default:
            alert('Escolha uma opção válida!')
            break
    }

} while(option !== '6')