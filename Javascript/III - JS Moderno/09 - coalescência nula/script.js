// const a = 0 //false 

// const b = null //false

// const c = 'teste' //true

// //(Curto circuito) O operador 'ou' verifica se a váriavel é false, se sim, ela vai para a próxima, até encontrar uma verdadeira e dar um "curto circuito"
// console.log(a || b || c)

// //O operador de coalescência nula verifica se o valor é NULL ou UNDEFINED
// console.log(a ?? b ?? c)

//Uso comum 

let a = 0
let b = a || 42
console.log(a, b)

b = a ?? 42
console.log(a, b)

let c = false ?? 42
let d = undefined ?? 42
console.log(c, d)