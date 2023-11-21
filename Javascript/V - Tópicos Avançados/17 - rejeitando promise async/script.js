async function asyncSum(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('arguments must be of type number')
    }
    return a + b
}

async function asyncSubtract(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject('arguments must be of type number')
    }
    return a - b
}

const sumResult = asyncSum(50, null)
const subtractResult = asyncSubtract(50, 33)

// entra com um array de promises e retorna um array de resultados
Promise.all([sumResult, subtractResult]).then(results => {
    results.forEach(result => console.log(result))
}).catch(err => {
    console.log(err)
})