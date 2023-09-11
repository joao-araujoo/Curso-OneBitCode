//! tipos literais 

// a barra funciona como o operador "ou", normalmente
// let option: 'Yes' | 'No' | 'Maybe'
// option = 1 // retorna um erro

// let planet: 'Mercúrio' | 'Vênus' | 'Terra' | 'Marte' | 'Júpiter' | 'Saturno' | 'Urano' | 'Netuno'

//! criando tipos

// essa é a sintáxe para a criação de um tipo
type Planet = 'Mercúrio' | 'Vênus' | 'Terra' | 'Marte' | 'Júpiter' | 'Saturno' | 'Urano' | 'Netuno'

const myPlanet: Planet = 'Terra'

function checkPlanet(planet: Planet){
    if (planet === 'Terra') {
        console.log('Estamos na Terra!')
    }
}

checkPlanet(myPlanet)

// também é possível criar tipos para funções

// você pode criar tipos de funções para melhor documentação e entre outros
type GreetingCallback = (name: string) => void // void significa que não há retorno

function greet(callbackfn: GreetingCallback) {
    const name = 'João'
    callbackfn(name)
}