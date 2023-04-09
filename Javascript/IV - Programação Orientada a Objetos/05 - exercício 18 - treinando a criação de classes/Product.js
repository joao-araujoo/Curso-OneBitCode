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
        console.log(`R$${this.price} -> R$${this.price - (this.price * (discount / 100))}`)
    }
}

const computer = new Product('AMD PC', 'Ryzen 9 5900X - RTX 4090 - 32gb - 1tb', 15999.90)
console.log("🚀 ~ file: Product.js:19 ~ computer:", computer)
computer.addToStock(16)
console.log(computer.inStock)
computer.calculateDiscount(10)