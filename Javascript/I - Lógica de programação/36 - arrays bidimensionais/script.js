const arr = [
    '1° Nível',
    ['2° Nível', 42, true],
    [
        ['3° Nível, 1° Item', 'Olá, mundo!'],
        ['3° Nível, 2° Item', 'Olá, mundo!']
    ],
    []
]

console.log(arr[1][0])
console.log(arr[2][0][1])

const matriz = [
    ['l1, c1', 'l1, c2', 'l1, c3', 'l1, c4'],
    ['l2, c1', 'l2, c2', 'l2, c3', 'l2, c4'],
    ['l3, c1', 'l3, c2', 'l3, c3', 'l3, c4']
]

// console.table(matriz)

// matriz.push(['nova linha'])
// matriz[0].push('nova coluna')

// console.table(matriz)

for(let i in matriz){
    for(let j in matriz[i]){
        console.log(matriz[i][j])
    }
}