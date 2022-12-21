let players = 1

function addPlayer(){
    const playersList = document.querySelector('.players-list')

    const ul = document.createElement('ul')
    const h3 = document.createElement('h3')
    h3.innerText = `Jogador ${players}`
    ul.appendChild(h3)
    
    const positionLi = document.createElement('li')
    const playerPosition = document.getElementById('player-position').value
    positionLi.innerHTML = `<strong>Posição:</strong> ${playerPosition}`
    ul.appendChild(positionLi)

    const nameLi = document.createElement('li')
    const playerName = document.getElementById('player-name').value
    nameLi.innerHTML = `<strong>Nome:</strong> ${playerName}`
    ul.appendChild(nameLi)

    const numberLi = document.createElement('li')
    const playerNumber = document.getElementById('player-number').value
    numberLi.innerHTML = `<strong>Número:</strong> ${playerNumber}`
    ul.appendChild(numberLi)

    playersList.appendChild(ul)
    players++
}

function removePlayer(){

}