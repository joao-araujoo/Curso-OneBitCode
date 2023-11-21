const Author = require("./Author")
const Post = require("./Post")
const Comment = require("./Comment")

const john = new Author('John Doe')
const post = new Post('Isto é um post', john)
const comment = new Comment('Isto é um comentário')
post.addComment(comment)
john.addPost(post)

console.log(john)
console.log(post)
console.log(comment)