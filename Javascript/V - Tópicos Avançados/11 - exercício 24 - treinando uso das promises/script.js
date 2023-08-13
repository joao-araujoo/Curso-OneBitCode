// Escreva uma função assíncrona que têm como parâmetros o peso e a altura de uma pessoa e retorna uma promise do IMC dessa pessoa. Além disso, caso algum dos parâmetros não seja do tipo “number” a promise deverá ser rejeitada.

// Você deverá criar também uma outra função que recebe os mesmos parâmetros de peso e altura, chama a função que calcula o IMC e então exibe no terminal o resultado das promises em texto. Caso a promise seja resolvida você também deverá mostrar no terminal a situação do IMC da pessoa de acordo com a seguinte tabela:

// - Abaixo de 18,5: **************magreza**************
// - Entre 18,5 e 24,9: ************normal************
// - Entre 25 e 29,9: ******************sobrepeso******************
// - Entre 30 e 39,9: ******************obesidade******************
// - Acima de 40: ******************************obesidade grave******************************

// Dentro da segunda função, após chamar a função que calcula o IMC, chame a função log do console com uma mensagem qualquer para evidenciar o funcionamento assíncrono do código.

function calculateIMC(weight, height){
    const promiseIMC = new Promise((resolve, reject) => {
        console.log('Calculando promise...')
        setTimeout(() => {
            if(typeof weight !== 'number' || typeof height !== 'number'){
                reject('Apenas números são válidos!')
            } else {
                const IMC = weight / (height ** 2)
                resolve(IMC.toFixed(1))
            }
        }, 1000)
    })

    return promiseIMC
}

function verificateIMC(weight, height){
    calculateIMC(weight, height).then(result => {
        console.log(`IMC: ${result}`)
        if(result < 18.5){
            console.log('Situação: Magreza')
        } else if(result <= 24.9){
            console.log('Situação: Normal')
        } else if(result <= 29.9){
            console.log('Situação: Sobrepeso')
        } else if(result <= 39.9){
            console.log('Situação: Obesidade')
        } else {
            console.log('Situação: Obesidade Grave')
        }
    }).catch(error => {
        console.log(`Erro: ${error}`)
    })

    setTimeout(() => {
        console.log('Promise terminada.')
    }, 2000)
}

verificateIMC(60, 1.75)