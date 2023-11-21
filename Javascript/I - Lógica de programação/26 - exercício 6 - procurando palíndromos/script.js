const palavra = prompt('Digite uma palavra e descubra se ela é um palíndromo:')
let palavraAoContrário = ''

for(let i = palavra.length - 1; i >= 0; i--){
    palavraAoContrário += palavra[i]
}

if(palavra === palavraAoContrário){
    alert('É um palíndromo!')
} else {
    alert(`Não é um palíndromo...\n\nPalavra: ${palavra}\nAo contrário: ${palavraAoContrário}`)
}