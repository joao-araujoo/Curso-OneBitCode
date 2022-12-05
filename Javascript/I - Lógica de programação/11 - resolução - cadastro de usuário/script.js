let nome = prompt('Digite seu nome:')
let sobrenome = prompt('Digite seu sobrenome:')
let campoDeEstudo = prompt('Qual o seu campo de estudo?')
let anoDeNascimento = prompt('Em que ano você nasceu?')

//Pular linhas: barra "n"

alert(
    'Recruta cadastrado com sucesso!' + 
    ' Nome completo: ' + nome + ' ' + sobrenome +
    ' Campo de estudo: ' + campoDeEstudo +
    ' Idade: ' + (2022 - anoDeNascimento)
)