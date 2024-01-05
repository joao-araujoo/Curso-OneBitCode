const mongoose = require('mongoose')

const connectToDatabase = async () => {
    try {
        await mongoose.connect(`mongodb+srv://joaoaraujoo2007:eQxHKXp5UCA1TBcW@cluster0.p3zrdxb.mongodb.net/?retryWrites=true&w=majority`)

        console.log('Conexão ao banco de dados realizada com sucesso!')
    } catch (error) {
        throw new Error(`Ocorreu um erro ao se conectar ao banco de dados: ${error.message}`)
    }
}

module.exports = connectToDatabase