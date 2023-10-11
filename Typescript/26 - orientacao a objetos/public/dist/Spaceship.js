class Spaceship {
    // atributos privados podem ser acessados somente dentro da própria classe
    _name;
    // atributos protegidos podem ser acessados dentro da própria classe e de outras subclasses
    captain;
    speed;
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    constructor(name, captain) {
        this._name = name;
        this.captain = captain;
        this.speed = 0;
    }
    // atributos públicos podem ser usados sempre que necessário
    accelerate(rate, time) {
        this.speed = rate * time;
    }
}
class Fighter extends Spaceship {
    weapons;
    shoot() {
        for (let i = 0; i < this.weapons; i++) {
            console.log("Pew!");
        }
    }
    erase() {
        this.name = "";
        this.captain = "";
    }
}
let ship = new Spaceship("USS Enterprise", "James T. Kirk");
// ship.speed = 50; retorna um erro, uma vez que a propriedade "speed" é protegida e só pode ser acessada dentro da classe Spaceship e suas subclasses
ship.accelerate(50, 10);
