function gerarNumerosEntre(min, max) {
    if(min > max) {
        [max, min] = [min, max]
        console.log(max, min);
    }

    return new Promise(resolve => {
        const fator = max - min + 1;
        const aleatorio = parseInt(Math.random() * fator) + min;
        console.log(fator)
        resolve(aleatorio);
    })
}

gerarNumerosEntre(1, 4)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log);