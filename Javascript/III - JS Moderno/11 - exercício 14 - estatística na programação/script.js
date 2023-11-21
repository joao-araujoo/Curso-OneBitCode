const media = (...numbers) => numbers.reduce((acumulador, atual) => acumulador + atual, 0) / numbers.length

console.log(media(3, 5, 7).toFixed(0))

const mediaPonderada = (...numbers) => numbers.reduce((acumulador, atual) => acumulador + (atual.n * atual.p), 0) / numbers.reduce((acumulador, atual) => acumulador + atual.p, 0)

console.log(mediaPonderada({n: 7.5, p: 1}, {n: 5, p: 2}, {n: 6.2, p: 4}).toFixed(2))

const mediana = (...numbers) => numbers[((numbers.length - 1) / 2).toFixed(0)]

console.log(mediana(15, 14, 8, 7, 3, 5, 6))