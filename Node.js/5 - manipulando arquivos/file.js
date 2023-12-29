const fs = require('fs');

// escrever em arquivos
fs.writeFile('test.js', 'const name = "João";', error => console.log(error));

// adicionar mais texto ao final de arquivos
fs.appendFile('test.js', 'console.log(name);', error => console.log(error));

// mudar o nome do arquivo
fs.rename('test.js', 'script.js', error => console.log(error));

// excluir arquivo
fs.unlink('script.js', error => console.log(error));

// variável de ambiente que possui uma string com o caminho do diretório atual
console.log(__dirname)