import { Character } from "./Character.js"

export class Thief extends Character {
    constructor(nome, pontosVida, pontosAtaque, pontosDefesa){
        super(nome, pontosVida, pontosAtaque, pontosDefesa)
    }

    atacar(alvo){
        const dano = (this.pontosAtaque - alvo.pontosDefesa) * 2
        if(dano > 0){
            alvo.pontosVida -= dano
            console.log(`${this.nome} atacou ${alvo.nome} e tirou ${dano} pontos de vida.`)
        } else {
            console.log(`${this.nome} atacou ${alvo.nome} e não fez nem cócegas.`)
        }
    }
}
