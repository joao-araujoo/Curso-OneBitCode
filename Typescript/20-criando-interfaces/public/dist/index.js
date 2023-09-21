var sun;
sun.name = 'Sol';
sun.mass = 1.989 * (Math.pow(10, 30));
sun.age = 4.603 * (Math.pow(10, 9));
sun.planets = [];
// podemos fazer com que uma classe implemente uma interface, ou seja, precisa ter todos os atributos que estão na mesma
// quando não há todos os atributos necessários, é jogado um erro e cria-se um contrato, ou seja, só funcionará quando todos os atributos forem setados
var MilkWayPlanet = /** @class */ (function () {
    function MilkWayPlanet() {
    }
    MilkWayPlanet.prototype.createSatellite = function (name) {
        // ...
    };
    return MilkWayPlanet;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var Motorcycle = /** @class */ (function () {
    function Motorcycle() {
    }
    return Motorcycle;
}());
