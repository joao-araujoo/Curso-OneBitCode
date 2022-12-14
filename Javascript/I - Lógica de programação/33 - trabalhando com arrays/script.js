const arr = ['Frodo', 'Sam', 'Merry', 'Pippin', 'Gandalf', 'Aragorn', 'Legolas', 'Gimli']
console.log(arr)

//Adicionar elementos (estas funções retornam o tamanho do array)

//PUSH  (insere o valor no final do array)
let size = arr.push('Boromir')
console.log(arr)
console.log(size)

//UNSHIFT (insere o valor no início do array)
size = arr.unshift('teste')
console.log(arr)
console.log(size)

//Remover elementos

//POP (remove o valor do ultimo elemento do array)
let lastElement = arr.pop()
console.log(arr)
console.log(lastElement)

//SHIFT (remove o valor do primeiro elemento do array)
lastElement = arr.shift()
console.log(arr)
console.log(lastElement)

//Procurar por um elemento

//INCLUDES
const exist = arr.includes('Gandalf')
console.log(exist)

//INDEXOF
const index = arr.indexOf('Gandalf')
console.log(index)

//Cortar e Concatenar

//SLICE
const hobbits = arr.slice(0, 4)
const anothers = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(anothers)

//CONCAT
const society = hobbits.concat(anothers, 'Boromir')
console.log(society)

//Substituição dos elementos

//SPLICE
const removedElements = society.splice(index, 1, 'Gandalf, o Cinzento')
console.log(society)
console.log(removedElements)

//Iterar sobre os Elementos
for(let i = 0; i < society.length; i++){
    const elemento = society[i]
    console.log(elemento + ' se encontra na posição ' + i)
}

//Simplificado
for(let pos in society){
    console.log(society[pos])
}