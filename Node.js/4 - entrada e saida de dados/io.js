const process = require('process');

// mostra o diretório do node, o do arquivo atual e os parâmetros caso passe ao executar pelo terminal
// console.log(process.argv);

// saída de dados como o console.log
// process.stdout.write('Qual o seu nome?');

console.log("Digite seu nome: ");
// entrada de dados
process.stdin.on('data', (keyboard) => {
  // essa callback é utilizada para efetuar algo com o valor recebido
  process.stdout.write(`Texto do usuário: ${keyboard}`);
  // é sempre necessário utilizar o exit para fazer o terminal parar de receber texto
  process.exit();
})

// exemplo
const checkMaiority = (keyboard) => {
  try {
    const age = parseInt(keyboard);
    const response = age >= 18 ? "Maior de idade" : "Menor de idade"
    console.log(response);
  } catch (error) {
    console.error(error);
  } finally {
    process.exit();
  }
}

process.stdout.write('Digite sua idade: ');

process.stdin.on('data', checkMaiority);