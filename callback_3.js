
// O resultado é sempre um array novo, ou seja, o original não é modificado.
const nums = [1, 2, 3, 4, 5, 6, 7];
const dobro = n => n * 2;
const regra1 = (n, i) => n * 2 + i;
const regra2 = (n, i, a) => n * 2 + i + a.length;

console.log(nums.map(dobro));
console.log(nums.map(regra1));
console.log(nums.map(regra2));

const nomes = ['Ana', 'Bia', 'Gui', 'Lisa', 'Rafa'];
const primeiraLetra = texto => texto[0];
const letras = nomes.map(primeiraLetra);
console.log(nomes, letras);