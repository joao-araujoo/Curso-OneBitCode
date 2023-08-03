export class Character {
    constructor(nome, pontosVida, pontosAtaque, pontosDefesa){
        this.nome = nome
        this.pontosVida = pontosVida
        this.pontosAtaque = pontosAtaque
        this.pontosDefesa = pontosDefesa
    }

    atacar(alvo){
        const dano =  this.pontosAtaque - alvo.pontosDefesa
        if(dano > 0){
            alvo.pontosVida -= dano
            console.log(`${this.nome} atacou ${alvo.nome} e tirou ${dano} pontos de vida.`)
        } else {
            console.log(`${this.nome} atacou ${alvo.nome} e não fez nem cócegas.`)
        }
    }
}