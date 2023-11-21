const Author = require('./Author')

const john = new Author('John Doe')

const post = john.addPost('Titulo do post', 'lorem ipsum dolor sic...')

post.addComment('joao araujo', 'muito bom!')
post.addComment('pedro', 'interessante')

console.log(john)
console.log(post)