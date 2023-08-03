import { Character } from "./Character.js"

export class Mage extends Character {
    constructor(nome, pontosVida, pontosAtaque, pontosDefesa, pontosMagia){
        super(nome, pontosVida, pontosAtaque, pontosDefesa)
        this.pontosMagia = pontosMagia
    }

    atacar(alvo){
        const dano = (this.pontosAtaque + this.pontosMagia) - alvo.pontosDefesa 
        if(dano > 0){
            alvo.pontosVida -= dano
            console.log(`${this.nome} atacou ${alvo.nome} e tirou ${dano} pontos de vida.`)
        } else {
            console.log(`${this.nome} atacou ${alvo.nome} e não fez nem cócegas.`)
        }
    }

    curar(alvo){
        const vida = this.pontosMagia * 2
        if(vida > 0){
            alvo.pontosVida += vida
            console.log(`${this.nome} curou ${alvo.nome} e concedeu ${vida} pontos de vida.`)
        } else {
            console.log(`${this.nome} tentou curar ${alvo.nome}, porém sua magia não foi suficiente.`)
        }
    }
}