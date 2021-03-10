
/**
 * Callback esta associado a algum evento que aconteceu e ai então
 * a função callback é chamada.
 */

function exec(fn, a, b) {
  return fn(a, b);
}
const somarNoTerminal = (x, y) => console.log(x + y);
const subtrairNoTerminal = (w, z) => console.log(w - z);
console.log(exec(somarNoTerminal, 2, 3));
console.log(exec(subtrairNoTerminal, 5, 2));

// ---------------------------------- Trabalhando com setInterval ------------------------------

// const cb = () => console.log('Exec...');
// setInterval(cb, 1000);