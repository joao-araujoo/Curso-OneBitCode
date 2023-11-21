function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number - função soma')
        } else {
            resolve(a + b)
        }
    })
}

function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number - função subtração')
        } else {
            resolve(a - b)
        }
    })
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, 33)

// entra com um array de promises e retorna um array de resultados
Promise.all([sumResult, subtractResult]).then(results => {
    results.forEach(result => console.log(result))
}).catch(err => {
    console.log(err)
})


const numbers = [4, 9, 5, null, 77]

function asyncSquare(x){
    return new Promise((resolve, reject) => {
        if(typeof x !== 'number'){
            reject('arguments must be of type number')
        } else {
            resolve(x ** 2)
        }
    })
}

Promise.all(numbers.map(number => asyncSquare(number))).then(results => {
    console.log(results)
}).catch(error => console.log(error))