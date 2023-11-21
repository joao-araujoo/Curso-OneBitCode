async function calculateIMC(weight, height){
    console.log('Calculando promise...')
    if(typeof weight !== 'number' || typeof height !== 'number'){
        return Promise.reject('arguments must be of type number')
    }
        
    const IMC = weight / (height ** 2)
    return IMC.toFixed(1)
}

async function verificateIMC(weight, height){
    try {
        const IMC = await calculateIMC(weight, height)
        
        console.log(`IMC: ${IMC}`)
        if(IMC < 18.5) console.log('Situação: Magreza')
        else if(IMC <= 24.9) console.log('Situação: Normal')
        else if(IMC <= 29.9) console.log('Situação: Sobrepeso')
        else if(IMC <= 39.9) console.log('Situação: Obesidade')
        else console.log('Situação: Obesidade Grave')

    } catch(error){
        console.log(error)
    }

    setTimeout(() => {
        console.log('Promise terminada.')
    }, 2000)
}

verificateIMC(60, 1.75)