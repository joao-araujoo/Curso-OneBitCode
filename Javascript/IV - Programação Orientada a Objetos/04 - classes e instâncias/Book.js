class Book {
    constructor(title){
        this.title = title
        this.published = false
    }

    publish(){
        this.published = true
    }
}

const eragon = new Book('Eragon')
eragon.publish()
console.log("🚀 ~ file: Book.js:6 ~ eragon:", eragon)

const eldest = new Book('Eldest')
console.log("🚀 ~ file: Book.js:11 ~ eldest:", eldest)

console.log(eragon instanceof Book)