function calcularMedia(a, b){
    // const media = (a + b) / 2
    // return media
    return (a + b) /2
}

const resultado = calcularMedia(5, 10)
// console.log(resultado)


function criarProduto(nome, preço){
    const produto = {
        nome, //nome: nome
        preço, //preço: preço
        estoque: 1
    }
    return produto
}

// const notebook = criarProduto('Notebook intel core i3 8gb', 2500)
// console.log(notebook)
// console.log(criarProduto('Notebook intel core i3 8gb', 2500))


function areaRetangular(base, altura){
    return base * altura
}

function areaQuadrada(lado){
    return areaRetangular(lado, lado)
}

// console.log(areaRetangular(3, 5))
// console.log(areaQuadrada(9))


function ola(){
    let texto = '...'
    return texto
    texto = 'Olá, mundo!'
    console.log(texto)
}

console.log(ola())


function maiorIdade(idade){
//  const maiorDeIdade = idade >= 18 ? 'Maior de idade' : 'Menor de idade'
//  return maiorDeIdade
    if(idade >= 18){
        return 'Maior de idade'
    } else {
        return 'Menor de idade'
    }
}

console.log(maiorIdade(18))
console.log(maiorIdade(13))