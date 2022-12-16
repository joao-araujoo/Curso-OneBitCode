let option

function triangleArea(triangleBase = 0, triangleHeight = 0){
    return (triangleBase * triangleHeight) / 2
}

function rectangleArea(rectangleBase = 0, rectangleHeight = 0){
    return rectangleBase * rectangleHeight
}

function squareArea(side = 0){
    return rectangleArea(side, side)
}

function trapezeArea(majorBase, minorBase, height){
    return (majorBase + minorBase) * height / 2
}

function circleArea(radius){
    return 3.14 * (radius ** 2)
}

do {
    option = prompt(`Escolha uma das opções abaixo:\n\n1- Área do triângulo\n2- Área do retângulo\n3- Área do quadrado\n4- Área do trapézio\n5- Área do círculo\n6- Sair`)
    let base
    let height

    switch(option){
        case '1':
            base = Number(prompt('Insira a base do triângulo:'))
            height = Number(prompt('Insira a altura do triângulo:'))
            alert('A área deste triângulo é: ' + triangleArea(base, height))
            break
        case '2':
            base = Number(prompt('Insira a base do retângulo:'))
            height = Number(prompt('Insira a altura do retângulo:'))
            alert('A área deste retângulo é: ' + rectangleArea(base, height))
            break
        case '3':
            let s = Number(prompt('Insira o lado do quadrado:'))
            alert('A área deste quadrado é: ' + squareArea(s))
            break
        case '4':
            let maB = Number(prompt('Insira a maior base do trapézio:'))
            let miB = Number(prompt('Insira a menor base do trapézio:'))
            let h = Number(prompt('Insira a altura do trapézio:'))
            alert('A área deste trapézio é: ' + trapezeArea(maB, miB, h))
            break
        case '5':
            let r = Number(prompt('Insira o raio do círculo:'))
            alert('A área deste círculo é: '+ circleArea(r))
            break
        case '6':
            alert('Saindo...')
            break
        default:
            alert('Escolha uma opção válida!')
            break
    }

} while(option !== '6')