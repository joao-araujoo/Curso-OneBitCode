function execute(){
    // faz alguma coisa
    return new Promise((resolve, reject) => {
        console.log('A promisse está sendo executada..')
        setTimeout(() => {
            if(false){
                reject('A promise foi rejeitada')
            } else {
                console.log('Resolvendo a promise...')
                resolve(13)
            }
        }, 1000)
    })
}

// o parâmetro do then é o resultado da promise quando é resolvida
// o then retorna a promise, então podemos encadear os métodos (.then().catch...)
execute().then((result) => {
    console.log(`Promise resolvida. Resultado: ${result}`)
}).catch((error) => {
    console.log(`A promise foi rejeitada! Erro: ${error}`)
}).finally(() => {
    console.log('A promise foi finalizada.')
})