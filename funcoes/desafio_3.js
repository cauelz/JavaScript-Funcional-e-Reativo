const fs =  require('fs');
const path = require('path');

console.log(__dirname);

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt');

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => console.log(linhas.join(',')))

// lerArquivo(caminho)
//     .then(conteudo => conteudo.split('\n'))
//     .then(linhas => linhas.join(','))
//     .then(conteudo => `O valor final é: ${conteudo}`)
//     .then(console.log)
