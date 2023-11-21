import { Character } from "./Character.js"

export class Warrior extends Character {
    constructor(nome, pontosVida, pontosAtaque, pontosDefesa, pontosEscudo){
        super(nome, pontosVida, pontosAtaque, pontosDefesa)
        this.pontosEscudo = pontosEscudo
        this.posicao = 'Ataque'
    }

    atacar(alvo){
        if(this.posicao === 'Ataque'){
            const dano = this.pontosDefesa
            if(dano > 0){
                alvo.pontosVida -= dano
                console.log(`${this.nome} atacou ${alvo.nome} e tirou ${dano} pontos de vida.`)
            } else {
                console.log(`${this.nome} atacou ${alvo.nome} e não fez nem cócegas.`)
            }

        } else {
            console.log(`${this.nome} está na defesa e não pode atacar!`)
        }
    }

    trocarPosicao(){
        if(this.posicao === 'Ataque'){
            this.posicao = 'Defesa'
            console.log(`${this.nome} recuou e agora está na defesa.`)
        } else {
            this.posicao = 'Ataque'
            console.log(`${this.nome} avançou e agora está no ataque.`)
        }
    }
}