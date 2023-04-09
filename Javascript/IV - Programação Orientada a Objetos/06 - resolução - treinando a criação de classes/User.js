class User {
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password){
        if(this.email === email && this.password === password){
            console.log('Login efetuado com sucesso!')
        } else {
            console.log('Falha ao realizar o login! Email ou senha incorretos.')
        }
    }
}

const john = new User('John Doe', 'john@email.com', '1234')
john.login('john@email.com', '1234')