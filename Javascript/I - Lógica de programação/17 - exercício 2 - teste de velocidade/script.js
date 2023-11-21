const veiculo1 = prompt('Qual o nome do primeiro veículo?')
const velocidade1 = parseFloat(prompt('Qual era a velocidade deste veículo?'))
const veiculo2 = prompt('Qual o nome do segundo veículo?')
const velocidade2 = parseFloat(prompt('Qual era a velocidade deste veículo?'))

if (velocidade1 > velocidade2) {
    alert(`O ${veiculo1}, com ${velocidade1}km/h, estava mais rápido que o ${veiculo2}, com ${velocidade2}km/h`)
} else if (velocidade1 === velocidade2){
    alert(`O ${veiculo1} e o ${veiculo2} estavam na mesma velocidade, ambos com ${velocidade1}`)
} else {
    alert(`O ${veiculo2}, com ${velocidade2}km/h, estava mais rápido que o ${veiculo1}, com ${velocidade1}km/h`)
}