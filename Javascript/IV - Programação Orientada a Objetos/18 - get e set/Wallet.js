// Comumente usado com atributos privados, sendo usados como propriedades da instância, não métodos

class Wallet {
    #amount
    #username

    constructor(){
        this.#amount = 99.99 * 100 // 9999
    }

    get amount(){
        return this.#amount / 100
    } 

    set username(nickname){
        if(typeof nickname === 'string'){
            this.#username = nickname
        } else {
            console.log('Username must be a string!')
        }
    }

    get username(){
        return this.#username
    }
}

const myWallet = new Wallet()

console.log(myWallet.amount)

myWallet.username = 'João'
console.log(myWallet.username)

myWallet.username += ' Pedro'
console.log(myWallet.username)

myWallet.username = true