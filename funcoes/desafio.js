// somar()()()
function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    }
  }
}
console.log(somar(1)(2)(3));
const somarAB = somar(3)(4);
console.log(somarAB(4));

// calcular(numero)(numero)(fn)
function calcular(a) {
  return function (b) {
    return function (fn) {
      return fn(a, b);
    }
  }
}
function soma(a, b) {
  return a + b;
}
function subtrai(a, b) {
  return a - b;
}

console.log(calcular(1)(2)(soma));
console.log(calcular(1)(2)(subtrai));
