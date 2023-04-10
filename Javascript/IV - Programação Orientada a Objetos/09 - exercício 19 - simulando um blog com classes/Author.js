const Post = require("./Post")

class Author {
    constructor(name){
        this.name = name
        this.posts = []
    }

    addPost(post){
        const newPost = new Post(post, this.name)
        this.posts.push(newPost)
        return newPost
    }
}

module.exports = Author