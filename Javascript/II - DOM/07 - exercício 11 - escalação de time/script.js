let players = 1

function addPlayer(){
    const playersList = document.querySelector('.players-list')

    const ul = document.createElement('ul')

    const numberLi = document.createElement('li')
    const playerNumber = document.getElementById('player-number').value
    numberLi.innerHTML = `<span class="number-${playerNumber}"><strong>Número:</strong> ${playerNumber}</span>`

    const h3 = document.createElement('h3')
    h3.innerHTML = `<span class="number-${playerNumber}">Jogador ${players}</span>`
    ul.appendChild(h3)
    
    const positionLi = document.createElement('li')
    const playerPosition = document.getElementById('player-position').value
    positionLi.innerHTML = `<span class="number-${playerNumber}"><strong>Posição:</strong> ${playerPosition}</span>`

    const nameLi = document.createElement('li')
    const playerName = document.getElementById('player-name').value
    nameLi.innerHTML = `<span class="number-${playerNumber}"><strong>Nome:</strong> ${playerName}</span>`


    ul.appendChild(positionLi)
    ul.appendChild(nameLi)
    ul.appendChild(numberLi)

    playersList.appendChild(ul)
    players++
}

function removePlayer(){
    const playersList = document.querySelector('.players-list')
    const numberSelected = document.querySelector('#r-player-number').value
    const removingPlayer = document.getElementsByClassName(`.number-${numberSelected}`)
    console.log(removingPlayer)

    playersList.removeChild(removingPlayer)
}