// as interfaces são geralmente utilizadas para tipar objetos
// tem a sintáxe muito parecida com a de objetos
interface CelestialBody {
    name: string
    mass: number
}

// podem herdar de outras interfaces
interface Star extends CelestialBody {
    age: number
    planets: Planet[]
}

interface Planet extends CelestialBody {
    population: number
    createSatellite: (name: string) => void
}

let sun: Star

sun.name = 'Sol'
sun.mass = 1.989 * (10 ** 30)
sun.age = 4.603 * (10 ** 9)
sun.planets = []

// essa é uma forma de herdar os atributos utilizando tipos, porém não é muito usual
type Asteroid = CelestialBody & {
    size: number
}

// podemos fazer com que uma classe implemente uma interface, ou seja, precisa ter todos os atributos que estão na mesma
// quando não há todos os atributos necessários, é jogado um erro e cria-se um contrato, ou seja, só funcionará quando todos os atributos forem setados
class MilkWayPlanet implements Planet {
    name: string
    mass: number
    population: number
    
    createSatellite(name: string) {
        // ...
    }
}

// podemos escrever novamente a mesma interface, o que adicionará os tipos para a interface já existente
interface Planet {
    satellites?: string[]
}