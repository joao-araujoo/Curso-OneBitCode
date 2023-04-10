class Post {
    constructor(content, author){
        this.content = content
        this.author = author
        this.comment = []
    }

    addComment(newComment){
        this.comment.push(newComment)
    }
}

module.exports = Post