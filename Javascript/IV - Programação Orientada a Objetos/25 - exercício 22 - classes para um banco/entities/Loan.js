const Installment = require("./Installment")

module.exports = class Loan {
    static #fees = 1.05 // juros

    // installments = parcelas
    constructor(value, date, numberOfInstallments){
        this.value = value
        this.date = date
        this.installments = this.calculateInstallments(value, numberOfInstallments) // array com as parcelas instanciadas da classe "installment"
    }

    static get fees(){
        return Loan.#fees
    }

    static set newFees(value){
        if(typeof value === 'number'){
            Loan.#fees = 1 + (value / 100)
        } else {
            console.log('O valor da taxa precisa ser um número!')
        }
    }

    calculateInstallments(value, numberOfInstallments){
        const installmentValue = value * Loan.#fees / numberOfInstallments
        const list = []
        
        for(let i = 1; i <= numberOfInstallments; i++){
            const installment = new Installment(installmentValue, i, 'Pendente')
            list.push(installment)
        }

        return list
    }
}