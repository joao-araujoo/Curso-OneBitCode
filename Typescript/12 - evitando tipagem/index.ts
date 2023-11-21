// o operador "?" faz com que a tipagem seja opcional
function sendSpacechip(spacechip: { pilot: string, copilot?: string }){
    // ...
}

sendSpacechip({ pilot: 'João', copilot: 'Pedro' })

// retornaria um erro caso o operador não existisse, porém como ele está presente, o atributo se torna opcional
sendSpacechip({ pilot: 'João' })

// tipo "unknow": significa que o tipo da variável é desconhecido
let test: unknown

test = 'string'
test = 0
test = []

let letters: string

// a linha abaixo retorna um erro, uma vez que "unknown" não pode ser atribuído a uma variável do tipo string e entre outras
// letters = test

// tipo "any": significa que o tipo da variável pode ser qualquer um
let test2: any

test2 = 'string'
test2 = 0
test2 = []

let alpha: string
// não retorna um erro porque o tipo "any" pode ser qualquer outro existente
alpha = test2

// tipo "never": significa que a variável não deveria existir e provavelmente há um erro no código