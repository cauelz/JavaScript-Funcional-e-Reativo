// Arrow Functions
const felizNatal = () => console.log('Feliz Natal');
felizNatal();

const saudacao = (nome) => `Fala ${nome}, tudo bom?`;
console.log(saudacao('Maria'));


// entendendo as arrow functions e como podemos usa-las
// detalhes da função every: arr.every(callback(element[, index[, array]])[, thisArg])
const somar = numeros => {
  let total = 0;

  function isNumber(n) {
    return typeof n == 'number';
  }
  if (numeros.every(isNumber)) {
    numeros.forEach(numero => {
      total += numero;
    });
  } else {
    return console.log('Os parâmetros passados não são números');
  }
  return total;
}
console.log(`A soma é: ${somar([1, 3, 4, 5, 6, 7])}`);
console.log(`A soma é: ${somar([1, 3, 4, 5, 'teste', 7])}`);


const subtrair = (...numeros) => {
  let total = 0;

  function isNumber(n) {
    return typeof n == 'number';
  }
  if (numeros.every(isNumber)) {
    numeros.forEach(numero => {
      total -= numero;
    });
  } else {
    return console.log('Os parâmetros passados não são números');
  }
  return total;
}
console.log(`A subtração é: ${subtrair(1, 3, 4, 5, 6, 7)}`);

// const potencia = (base) => {
//   return (exp) => {
//     return Math.pow(base, exp);
//   }
// }

const potencia = base => exp => Math.pow(base, exp);
console.log(`O valor da potência é: ${potencia(2)(4)}`);

// Como funciona o This no javascript


// A forma abaixo nao vai funcionar porque as arrow functions não tem escopo
// Array.prototype.log = () => {
//   console.log(this);
// }
const numero = [1, 2, 3, 4];
numero.log();