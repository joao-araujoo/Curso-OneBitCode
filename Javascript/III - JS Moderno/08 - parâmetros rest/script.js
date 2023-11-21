//Parâmetros rest são como se fossem literalmente o resto dos parâmetros passados, sempre devem ir no final dos parâmetros, pois sua quantidade pode ser indefinida

function sum(...numbers){
    //Acumulador = acumula os valores / Num = Valor atual (no caso números) / 0 = Número inicial do acumulador
    return numbers.reduce((acumulador, num) => acumulador + num, 0)
}

console.log(sum(1, 1))
console.log(sum(2, 2, 2, 2, 2))
console.log(sum(34, 54, 635, 65, 87, 87, 234, 24))