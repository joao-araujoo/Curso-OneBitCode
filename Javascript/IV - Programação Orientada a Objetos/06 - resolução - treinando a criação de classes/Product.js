class Product {
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity){
        this.inStock += quantity
    }

    calculateDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const smartwatch = new Product('Relógio de Pulso', '...', 80)
smartwatch.addToStock(99)
console.log(smartwatch)
console.log(smartwatch.calculateDiscount(50))