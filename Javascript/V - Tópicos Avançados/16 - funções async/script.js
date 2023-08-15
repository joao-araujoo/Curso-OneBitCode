// // async

// // as funções async substituem a necessidade de criar uma promise, ele já retorna uma diretamente após chamado
// async function asyncSum(a, b) {
//     return a + b
// }

// function asyncSubtract(a, b) {
//     return a - b
// }

// const sumResult = asyncSum(50, 33)
// const subtractResult = asyncSubtract(50, 33)

// // entra com um array de promises e retorna um array de resultados
// Promise.all([sumResult, subtractResult]).then(results => {
//     results.forEach(result => console.log(result))
// }).catch(err => {
//     console.log(err)
// })


const numbers = [4, 9, 5, 13, 77]

async function asyncSquare(x){
    return x ** 2
}

Promise.all(numbers.map(number => asyncSquare(number))).then(results => {
    console.log(results)
}).catch(error => console.log(error))

// isso também funciona, mas o método da classe Promise com certeza é mais legível e entendivel
// for(let i = 0; i < numbers.length; i++){
//     asyncSquare(numbers[i])
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
// }