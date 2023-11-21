const Loan = require("./entities/Loan")
const User = require("./entities/User")

module.exports = class App {
    #users = []

    userExists(email){
        return this.#users.find(user => user.email === email)
    }

    static createUser(name, email, account){
        const userExists = userExists(email)
        if(!userExists){
            const user = new User(name, email, account)
            this.#users.push(user)
        } else {
            console.log(`O email ${email} já está em uso!`)
        }
    }

    // encontra o usuário pelo email
    static findUser(email){
        const userExists = userExists(email)
        if(userExists){
            console.log(userExists)
            return true
        } else {
            console.log(`Usuário de email ${email} não encontrado!`)
            return false
        }
    }

    static makeDeposit(email, value){
        const user = userExists(email)
        if(user){
            user.account.makeDeposit(value, new Date().toLocaleString('pt-BR'))
        }
    }

    static makeLoan(email, numberOfInstallments){
        const user = userExists(email)
        if(user){
            user.account.makeLoan(value, new Date().toLocaleString('pt-BR'), numberOfInstallments)
        }
    }

    static makeTransfer(payer, receiver, value){
        const payerExists = userExists(payer.email)
        const receiverExists = userExists(receiver.email)  
        if(payerExists && receiverExists){
            payer.account.makeTransfer(payer, receiver, value, new Date().toLocaleString('pt=BR'))
        }
    }

    static newFee(value){
        Loan.newFees(value)
    }

}
