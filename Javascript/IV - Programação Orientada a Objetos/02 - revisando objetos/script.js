// const book = {
//     title: 'Eragon',
//     pages: 468,
//     published: true,
//     inStock: 24,
//     tags: ['fantasy', 'adventure', 'medieval'],
//     author: {
//         name: 'Cristopher Paolini'
//     },
//     addOnStock(quantity){
//         this.inStock += quantity
//     }
// }

// PascalCase -> camelCase
function Book(title, pages, tags, author){
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity){
        this.inStock += quantity
    }
    this.save = () => {
        // salva no banco de dados
    }
}

const author = { name: 'Cristopher Paolini'}
const tags = ['fantasy', 'adventure', 'medieval']

const eragon = new Book('Eragon', 468, tags, author)
console.log("🚀 ~ file: script.js:35 ~ eragon:", eragon)

const eldest = new Book('Eldest', 644, tags, author)
console.log("🚀 ~ file: script.js:38 ~ eldest:", eldest)