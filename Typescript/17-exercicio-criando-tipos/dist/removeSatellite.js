const removeSatellite = (planetName, satelliteName) => {
    const planet = findPlanet(planetName);
    if (planet) {
        const satelliteIndex = planet.satellites.indexOf(satelliteName);
        if (satelliteIndex !== -1) {
            planets.satellites.splice(satelliteIndex, 1);
            alert(`O satélite ${satelliteName} foi removido com sucesso do planeta ${planetName}!`);
            return;
        }
        alert(`Não foi possível encontrar o satélite ${satelliteName} no planeta ${planetName}!`);
        return;
    }
    alert(`Não foi possível encontrar o planeta ${planetName}!`);
};
