async function asyncSum(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('arguments must be of type number')
    }
    return a + b
}

// async function execute(){
//     asyncSum(50, 33).then(result => {
//         console.log(result)
//     })
// }

// o await, do inglês "espera", aguarda a promise ser resolvida e armazena o valor na variável
async function execute(){
    try {
        const result = await asyncSum(50, null)
        console.log(result)
    } catch(error){
        console.log(error)
    }
    // ele trava a execução do código abaixo, só executa quando a promise é resolvida
    // vários procedimentos...
    // 
    // 
}

execute()