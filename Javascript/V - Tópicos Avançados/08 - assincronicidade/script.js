//! Um código assíncrono é um código que não executa linha pós linha, sua execução não trava o fluxo linear da aplicação

function step02(){
    console.log('Passo 02')
}

console.log('Passo 01')
step02()
console.log('Passo 03')

console.log('Passo 04')
setTimeout(() => {
    console.log('Passo 05')
}, 1000 * 2)
console.log('Passo 06')