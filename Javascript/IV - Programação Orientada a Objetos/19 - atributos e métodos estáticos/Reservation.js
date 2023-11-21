class Reservation {
    constructor(guests, room, days){
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
    }

    // Atributo estático (taxa/valor base)
    static baseFee = 150

    static showBaseFee(){
        console.log(`Base fee is ${Reservation.baseFee}`)
    }

    static get premiumFee(){
        return Reservation.baseFee * 1.5
    }
}

Reservation.showBaseFee()

const r1 = new Reservation(3, "201", 5)
console.log(r1)

Reservation.baseFee = 200

const r2 = new Reservation(2, "108", 2)
console.log(r2)

console.log(`Premium fee is $${Reservation.premiumFee}`)