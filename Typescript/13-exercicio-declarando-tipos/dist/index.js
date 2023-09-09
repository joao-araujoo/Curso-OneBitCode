var spaceships = [];
var addSpaceship = function () {
    var name = prompt('Digite o nome da nave espacial: ');
    var pilot = prompt('Digite o nome do piloto da espaçonave: ');
    var crewLimit = Number(prompt('Qual a quantidade máxima de tripulantes na espaçonave?'));
    spaceships.push({
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [],
        inMission: false
    });
};
var addCrew = function (spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert('Tripulação excedida!');
        return;
    }
    var newCrew = prompt('Digite o nome do novo tripulante: ');
    spaceship.crew.push(newCrew);
};
var sendSpaceshipInMission = function (spaceship) {
    if (spaceship.inMission) {
        alert('Espaçonave já está em missão!');
        return;
    }
    if (spaceship.crew.length >= Math.floor(spaceship.crewLimit / 3)) {
        alert("Espa\u00E7onave ".concat(spaceship.name, " foi lan\u00E7ada em miss\u00E3o por ").concat(spaceship.pilot, " com ").concat(spaceship.crew.length, " tripulantes"));
        spaceship.inMission = true;
    }
    else {
        alert('Tripulação atual não atinge o mínimo para iniciar uma missão!');
    }
};
var listSpaceships = function () {
    var listOfSpaceships = '';
    spaceships.forEach(function (spaceship) {
        var listOfCrew = '';
        spaceship.crew.forEach(function (member) {
            listOfCrew += "- ".concat(member, "\n");
        });
        listOfSpaceships += "-> ".concat(spaceship.name, "\n-> Piloto: ").concat(spaceship.pilot, "\n-> Tripula\u00E7\u00E3o:\n").concat(listOfCrew, "\n-> Em miss\u00E3o: ").concat(spaceship.inMission, "\n\n");
    });
    alert(listOfSpaceships);
};
