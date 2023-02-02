// Função Anônima 
const sum = function(a, b){
    return a + b
}

// Arrow functions
const sub = (a, b) => {
    return a - b
}

// Simplificadas
const multiply = (a, b) => a * b

const double = n => `O dobro de ${n} é ${n * 2}`
console.log(double(13))

// Casos do dia a dia

const towns = ['São Paulo', 'São José dos Campos', 'Jacareí', 'Taubaté', 'Caraguatatuba', 'Ubatuba', 'Salvador']

const startingWithS = towns.filter(town => town[0] === 'S')
console.log(startingWithS)