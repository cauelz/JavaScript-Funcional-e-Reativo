function bomDia() {
  console.log('Bom dia!!!!');
}

const boaTarde = function () {
  console.log('Boa tarde!!!!!');
}

// Passar uma função como parametro para outra função
function executarQualquerCoisa(fn) {
  return typeof fn == 'function' ? fn() : console.log(fn + ' Não é uma função');
}

executarQualquerCoisa(4);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// Como retornar uma função a partir de outra função?
console.log('------------ Como retornar uma função a partir de outra função? ----------------------------');
console.log();
function potencia(base) {
  return function (expoente) {
    return Math.pow(base, expoente);
  }
}

const potenciaDe2 = potencia(2);
console.log('O tipo da variavel potenciaDe2 é igual a: ' + typeof potenciaDe2);
console.log(potenciaDe2(2));
console.log(potencia(3)(3));

// function potencia(base, expoente) {
//   return Math.pow(base, expoente);
// }
// const bits8 = potencia(2, 8);
// console.log(bits8);