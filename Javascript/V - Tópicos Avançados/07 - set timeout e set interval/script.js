console.log('Programa iniciado!')

// espera um tempo determinado e executa o código
const timeoutId = setTimeout(() => {
    console.log('3 segundos se passaram desde que o programa foi iniciado.')
}, 1000 * 3)

// clearTimeout(timeoutId)

let seconds = 0

// executa o código repetidas vezes após o tempo de intervalo
const intervalId = setInterval(() => {
    seconds += 1
    console.log(`Se passaram ${seconds} segundos.`)
    if(seconds >= 10){
        clearInterval(intervalId)
        console.log('Tempo esgotado! Encerrando...')
    }
}, 1000)

