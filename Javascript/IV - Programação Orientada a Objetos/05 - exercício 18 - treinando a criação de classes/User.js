class User {
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(inputEmail, inputPassword){
        if(inputEmail === this.email && inputPassword === this.password){
            console.log('Login bem sucedido!')
        } else {
            console.log('Email ou senha incorretos.')
        }
    }
}

const joao = new User('João Araujo', 'joao.araujoo2007@gmail.com', 'Chocolate')
console.log("🚀 ~ file: User.js:18 ~ joao:", joao)
joao.login('joao.araujoo2007@gmail.com', 'Chocolate')