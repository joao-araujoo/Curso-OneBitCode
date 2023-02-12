const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc', 'New Orleans']
console.log(towns)
console.log(...towns)
console.log(...towns[3])

//Desta maneira, você apenas referencia o array com o outro, ou seja, se modificar alguma coisa no novo array, o outro também muda
const townsCopy = towns
townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno')

console.log({towns, townsCopy})

//Neste caso, o novo array receberá cada elemento do outro, criando assim um array novo mas com os mesmos valores
const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({towns, townsCopy, townsClone})

const townsObj = {...towns}
const townsObjClone = {...townsObj}
townsObjClone.test = 'Test'
console.log({townsObj, townsObjClone})