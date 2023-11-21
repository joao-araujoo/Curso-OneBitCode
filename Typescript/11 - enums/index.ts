// armazena constantes que podem ser referenciadas por um número ou outro valor
enum Planets {
    MERCURIO = 1,
    VENUS,
    TERRA,
    MARTE
}

console.log(Planets.TERRA) // a saída deverá ser 3

// pode ser usado para um sistema de usuários e administradores, por exemplo
enum Roles {
    ADMIN = 'admin',
    USER = 'user'
}