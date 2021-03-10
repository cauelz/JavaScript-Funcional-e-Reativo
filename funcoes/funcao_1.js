
// declaração de uma variavel
let a = 4;
console.log(2);

// function declaration
function imprimirValor(a) {
  return console.log(a);
}
imprimirValor(4);
const x = imprimirValor(3); // vai executar a função e ela retorna um valor
console.log(x);


// function expression
const imprimirValorExpression = function (a) {
  console.log(a);
}
imprimirValorExpression(12);
const y = imprimirValorExpression(11);
console.log(y) // retorna undefined porque nao retornamos nada dentro da função



