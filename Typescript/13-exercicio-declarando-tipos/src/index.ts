const spaceships = []

const addSpaceship = () => {
    const name: string = prompt('Digite o nome da nave espacial: ')
    const pilot: string = prompt('Digite o nome do piloto da espaçonave: ')
    const crewLimit: number = Number(prompt('Qual a quantidade máxima de tripulantes na espaçonave?'))

    spaceships.push(
        {
            name,
            pilot,
            crewLimit,
            crew: [],
            inMission: false
        }
    )
}

const addCrew = (spaceship: { crewLimit: number, crew: string[] }) => {
    if(spaceship.crew.length >= spaceship.crewLimit){
        alert('Tripulação excedida!')
        return
    }

    const newCrew: string = prompt('Digite o nome do novo tripulante: ')
    spaceship.crew.push(newCrew)
}

const sendSpaceshipInMission = (spaceship: { name: string, pilot: string, crewLimit: number, crew: string[], inMission: boolean }) => {
    if(spaceship.inMission){
        alert('Espaçonave já está em missão!')
        return
    }

    if(spaceship.crew.length >= Math.floor(spaceship.crewLimit / 3)){
        alert(`Espaçonave ${spaceship.name} foi lançada em missão por ${spaceship.pilot} com ${spaceship.crew.length} tripulantes`)
        spaceship.inMission = true
    } else {
        alert('Tripulação atual não atinge o mínimo para iniciar uma missão!')
    }
}

const listSpaceships = () => {
    let listOfSpaceships: string = ''

    spaceships.forEach(spaceship => {    
        let listOfCrew: string = ''
        spaceship.crew.forEach(member => {
            listOfCrew += `- ${member}\n`
        })

        listOfSpaceships += `-> ${spaceship.name}\n-> Piloto: ${spaceship.pilot}\n-> Tripulação:\n${listOfCrew}\n-> Em missão: ${spaceship.inMission}\n\n`
    })

    alert(listOfSpaceships)
}