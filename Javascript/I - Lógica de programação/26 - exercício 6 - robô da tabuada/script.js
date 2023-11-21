const número = prompt('Digite um número para ver sua tabuada: ')
let resultado = ''

for(let x = 1; x <= 20; x++){
    resultado += `${número} x ${x} = ${número * x}\n`
}

alert(resultado)