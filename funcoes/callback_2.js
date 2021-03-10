const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, "dados.txt");

function exibirConteudo(erro, conteudo) {
  console.log(conteudo.toString());
}

console.log('Inicio...');
fs.readFile(caminho, exibirConteudo);
fs.readFile(caminho, (erro, conteudo) => console.log(conteudo.toString()));
console.log('Fim...');

console.log('Inicio Sync...');
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log('Fim Sync...');