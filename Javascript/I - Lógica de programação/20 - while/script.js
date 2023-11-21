let velocidade = 80

while (velocidade > 0){
    console.log('o carro está a ' + velocidade + 'km/h')
    velocidade -= 20
    console.log('diminuindo 20km/h')

    if(velocidade === 40){
        break
    }
}

console.log('o carro parou')