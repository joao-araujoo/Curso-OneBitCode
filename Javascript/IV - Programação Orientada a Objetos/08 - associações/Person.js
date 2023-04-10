class Person {
    constructor(name, address){
        this.name = name
        // Podemos criar a classe diretamente dentro do objeto e passar os parâmetros, deixando menos flexível
        this.address = address
    }
}

module.exports = Person