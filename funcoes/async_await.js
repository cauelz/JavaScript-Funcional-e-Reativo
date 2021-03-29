function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, tempo)
    })
}

async function helloWorld() {
    return console.log('Hello World');
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperar)
//     .then(() => console.log('Executando promise 3...'))

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10))
    }, 5000)
}

async function executar() {

    let helloWorld = await helloWorld();
    let valor = await retornarValor();

    await esperarPor(1000);
    console.log(`Async/Await ${valor + 1}... ${helloWorld}`);
    
    await esperarPor(1000);
    console.log(`Async/Await ${valor + 2}...${helloWorld}`);

    await esperarPor(1000);
    console.log(`Async/Await ${valor + 3}...${helloWorld}`);

    return valor + 3;
}

async function executarDeVerdade() {
    const resposta = await executar();
    console.log(resposta);
}

executarDeVerdade();

