module.exports = class Transfer {
    constructor(payer, receiver, value, date){
        this.payer = payer // pagador
        this.receiver = receiver // recebedor
        this.value = value
        this.date = date
    }
}