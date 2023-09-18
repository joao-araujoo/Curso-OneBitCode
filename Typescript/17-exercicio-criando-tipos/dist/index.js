const planets = [];
const findPlanet = (planetName) => planets.find((planet) => planet.name.toLowerCase() === planetName.toLowerCase());
const addPlanet = (name, coordinates, planetStatus) => {
    if (findPlanet(name)) {
        alert(`O planeta ${name} já existe!`);
        return;
    }
    planets.push({
        name,
        coordinates,
        status: planetStatus,
        satellites: []
    });
    alert(`Planeta ${name} adicionado com sucesso!`);
};
const updateStatus = (planetName, newStatus) => {
    const planet = findPlanet(planetName);
    if (planet) {
        planet.status = newStatus;
        alert(`Situação do planeta ${planetName} atualizada com sucesso!`);
    }
    else {
        alert(`Não foi possível encontrar o planeta ${planetName}!`);
    }
};
const addSatellite = (planetName, satelliteName) => {
    const planet = findPlanet(planetName);
    if (planet) {
        planet.satellites.push(satelliteName);
        alert(`O satélite ${satelliteName} foi adicionado com sucesso!`);
        return;
    }
    alert(`Não foi possível adicionar o satélite ${satelliteName} ao planeta ${planetName}!`);
};
const removeSatellite = (planetName, satelliteName) => {
    const planet = findPlanet(planetName);
    if (planet) {
        const satelliteIndex = planet.satellites.indexOf(satelliteName);
        if (satelliteIndex !== -1) {
            planet.satellites.splice(satelliteIndex, 1);
            alert(`O satélite ${satelliteName} foi removido com sucesso do planeta ${planetName}!`);
            return;
        }
        alert(`Não foi possível encontrar o satélite ${satelliteName} no planeta ${planetName}!`);
        return;
    }
    alert(`Não foi possível encontrar o planeta ${planetName}!`);
};
const listPlanets = () => {
    let planetsList = '';
    planets.forEach((planet) => {
        let satellitesList = '';
        planet.satellites.forEach(satelliteName => {
            satellitesList += `   - ${satelliteName}\n`;
        });
        planetsList +=
            `
=== ${planet.name} ===

-> Coordenadas: 
   - X: ${planet.coordinates[0]}, ${planet.coordinates[1]}
   - Y: ${planet.coordinates[2]}, ${planet.coordinates[3]}
-> Status: ${planet.status}
-> Satélites: 
${satellitesList}
   
=============\n\n
`;
    });
    alert(planetsList);
};
// ===== Interface =====
let option;
do {
    option = Number(prompt('O que deseja realizar no programa de planetas?\n\n[1] - Adicionar Planeta\n[2] - Atualizar status\n[3] - Adicionar satélite\n[4] - Remover satélite\n[5] - Listar Planetas\n[6] - Encerrar'));
    switch (option) {
        case 1:
            const planetNameToAdd = prompt('Digite o nome do planeta:');
            const coordinatesX1 = Number(prompt('Digite o X1:'));
            const coordinatesX2 = Number(prompt('Digite o X2:'));
            const coordinatesY1 = Number(prompt('Digite o Y1:'));
            const coordinatesY2 = Number(prompt('Digite o Y2:'));
            const status = prompt('Digite a situação do planeta:');
            addPlanet(planetNameToAdd, [coordinatesX1, coordinatesX2, coordinatesY1, coordinatesY2], status);
            break;
        case 2:
            const planetNameToUpdate = prompt('Digite o nome do planeta:');
            const newStatus = prompt('Digite a nova situação do planeta:');
            updateStatus(planetNameToUpdate, newStatus);
            break;
        case 3:
            const planetNameToAddSatellite = prompt('Digite o nome do planeta que irá receber um satélite:');
            const satelliteNameToAdd = prompt('Digite o nome do satélite a ser adicionado:');
            addSatellite(planetNameToAddSatellite, satelliteNameToAdd);
            break;
        case 4:
            const planetNameToRemoveSatellite = prompt('Digite o nome do planeta que terá um satélite removido:');
            const satelliteNameToRemove = prompt('Digite o nome do satélite a ser removido:');
            removeSatellite(planetNameToRemoveSatellite, satelliteNameToRemove);
            break;
        case 5:
            listPlanets();
            break;
        case 6:
            alert('Encerrando programa...');
            break;
        default:
            alert('Opção inválida!');
            break;
    }
} while (option !== 6);
