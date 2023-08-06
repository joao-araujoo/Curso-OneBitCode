const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")

module.exports = class Account {
    #balance

    constructor(accountOwner){
        this.accountOwner = accountOwner
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get balance(){
        return this.#balance
    }

    // fazer um depósito
    makeDeposit(value, date){
        this.#balance += value
        const deposit = new Deposit(value, date)
        this.deposits.push(deposit)
    }

    // fazer um empréstimo
    makeLoan(value, date, numberOfInstallments){
        this.#balance += value
        const loan = new Loan(value, date, numberOfInstallments)
        this.loans.push(loan)
    }

    // fazer uma transferência
    makeTransfer(payer, receiver, value, date){
        if(payer.accountOwner.email === this.accountOwner.email){
            this.#balance -= value
        } else {
            this.#balance += value
        }
    
        const transfer = new Transfer(payer, receiver, value, date)
        this.transfers.push(transfer)
        receiver.transfers.push(transfer)
    }
}
