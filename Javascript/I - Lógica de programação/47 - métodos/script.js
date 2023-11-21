let pessoa = {
    nome: 'João',
    idade: '15',
    dizerOla(){
        console.log('Olá, Mundo! Meu nome é ' + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOla()