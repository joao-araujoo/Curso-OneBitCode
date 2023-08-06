const Installment = require("./Installment")

module.exports = class Loan {
    static #fees // juros

    // installments = parcelas
    constructor(value, date, numberOfInstallments){
        this.value = value
        this.date = date
        this.installments = this.calculateInstallments(value, numberOfInstallments) // array com as parcelas instanciadas da classe "installment"
    }

    static get fees(){
        return this.#fees
    }

    static set newFees(value){
        if(typeof value === 'number'){
            this.#fees = value
        } else {
            console.log('O valor da taxa precisa ser um número!')
        }
    }

    calculateInstallments(value, numberOfInstallments){
        const installmentValue = value / numberOfInstallments
        const list = []
        
        for(let i = 1; i <= numberOfInstallments; i++){
            const installment = new Installment(installmentValue, i, 'Pendente')
            list.push(installment)
        }

        return list
    }
}