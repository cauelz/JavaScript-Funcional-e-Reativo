function gerarNumerosEntre(min, max, tempo) {

    if(min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1;
            const aleatorio = parseInt(Math.random() * fator) + min;
            resolve(aleatorio);
        }, tempo)
    })
}

// Como gerar vários números aleatorios e retorná-los de uma vez?
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 400),
        gerarNumerosEntre(1, 60, 5000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500),
    ])
}
gerarVariosNumeros()
    .then(numeros => console.log(numeros))

console.time('promise')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeLog('promise')
        console.timeEnd('promise')
    })