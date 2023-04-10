const Address = require('./Address')
const Person = require('./Person')

const addr = new Address('9 de Julho', 123, 'Santana', 'São José dos Campos', 'São Paulo')
const john = new Person('John Doe', addr)

console.log(john)
console.log(john.address.fullAddress())    