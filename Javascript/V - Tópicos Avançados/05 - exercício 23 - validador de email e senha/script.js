//! Para que um email seja válido ele deve possuir:

// - Um caractere @
// - Texto antes do @ com pelo menos 2 caracteres, números ou _ (underscore).
// - Texto após o @ com pelo menos 2 caracteres
// - Um . seguido de mais texto com pelo menos 2 caracteres após o texto após o @
// - Estrutura de um email válido: **xx@xx.xx**

//! Para que uma senha seja válida ela deve possuir:

// - Pelo menos uma letra minúscula.
// - Pelo menos uma letra maiúscula.
// - Pelo menos um número
// - Pelo menos um caractere especial.
// - Pelo menos 8 caracteres.

function login(){
    let email = document.getElementById('email')
    let password = document.getElementById('password')

    try {
        const emailResult = verifyEmail(email.value)
        const passwordResult = verifyPassword(password.value)
        
        if(emailResult && password){
            alert('Cadastrado com sucesso!')
            email.value = ''
            password.value = ''
        }

    } catch(error){
        alert(error)
    } 
}

function verifyEmail(email){
    const hasAtSymbol = email.match(/@/g)
    const hasTextBeforeAtSymbol = email.match(/\w\w(?=@)/)
    const hasTextAfterAtSymbol = email.match(/(?<=@)\w\w/)
    const hasFinalText = email.match(/\.[a-z]{2,}$/)

    if(!hasAtSymbol || hasAtSymbol.length > 1){
        throw new Error('O email não possui, ou possui mais de um @!')
    }

    if(!hasTextBeforeAtSymbol){
        throw new Error('O email não possui um texto válido antes do @!')
    }

    if(!hasTextAfterAtSymbol){
        throw new Error('O email não possui um texto válido após o @!')
    }

    if(!hasFinalText){
        throw new Error('O email não possui uma parte final após o ponto!')
    }

    return true
}

function verifyPassword(password){
    const hasLowerCase = password.match(/[a-z]/)
    const hasUpperCase = password.match(/[A-Z]/)
    const hasNumber = password.match(/\d/)
    const hasSymbol = password.match(/\W/)
    const hasEightCharacters = password.match(/[a-z]{8,}/)

    if(!hasLowerCase){
        throw new Error('A senha não possui nenhum caractere minúsculo!')
    }

    if(!hasUpperCase){
        throw new Error('A senha não possui nenhum caractere maiúsculo!')
    }

    if(!hasNumber){
        throw new Error('A senha não possui nenhum número!')
    }
    
    if(hasSymbol){
        throw new Error('A senha não pode possuir caracteres especiais!')
    }

    if(!hasEightCharacters){
        throw new Error('A senha deve possuir ao mínimo 8 caracteres!')
    }

    return true
}