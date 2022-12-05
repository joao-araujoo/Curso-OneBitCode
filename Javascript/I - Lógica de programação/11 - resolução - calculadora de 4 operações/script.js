const x = parseFloat(prompt('Informe o primeiro número: '))
const y = parseFloat(prompt('Informe o segundo número: '))

const soma = x + y
const subtração = x - y
const multiplicação = x * y
const divisão = x / y

alert(
    'Resultados:\n' +
    '\nSoma: ' + soma +
    '\nSubtração: ' + subtração +
    '\nMultiplicação: ' + multiplicação +
    '\nDivisão: ' + divisão
)