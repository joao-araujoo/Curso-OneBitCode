class Vehicle {
    move(){
        console.log('O veículo está se movendo.')
    }
}

class Car extends Vehicle {
    move(){
        console.log('O carro está se movendo.')
    }
}

class Ship extends Vehicle {
    move(){
        console.log('O navio está se movendo.')
    }
}

class Airplane extends Vehicle {
    move(speed){
        console.log(`O avião está se movendo a ${speed} km/h.`)
    }
}

const delorean = new Car()
const blackPearl = new Ship()
const boeing = new Airplane()

delorean.move()
blackPearl.move()
boeing.move(780)

const start = vehicle => {
    console.log('Iniciando um veículo...')
    vehicle.move()
}

start(delorean)
start(blackPearl)
start(boeing)