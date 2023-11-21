class Spaceship {
    // atributos privados podem ser acessados somente dentro da própria classe
    private _name: string;
    // atributos protegidos podem ser acessados dentro da própria classe e de outras subclasses
    protected captain: string;
    protected speed: number;

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    constructor(name: string, captain: string) {
        this._name = name;
        this.captain = captain;
        this.speed = 0;
    }

    // atributos públicos podem ser usados sempre que necessário
    public accelerate(rate: number, time: number) {
        this.speed = rate * time;
    }
}

class Fighter extends Spaceship {
    weapons: number;

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
