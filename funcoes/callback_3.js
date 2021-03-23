
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

const carrinho = [
  { nome: 'Caneta', quantidade: 10, preco: 7.99 },
  { nome: 'Caderno', quantidade: 3, preco: 17.34 },
  { nome: 'Lapis', quantidade: 4, preco: 2.50 },
  { nome: 'Tesoura', quantidade: 5, preco: 12.45 },
  { nome: 'Impressora', quantidade: 1, preco: 764.45 },
]

const nomesProdutos = carrinho.map(produto => {
  return produto.nome;
})
console.log(nomesProdutos);

const precoTotalPorItem = carrinho.map(produto => {
  return (produto.quantidade * produto.preco).toFixed(2);
})
console.log(precoTotalPorItem);

// construindo meu proprio Map
Array.prototype.meuMap = function (fn) {
  const novoArray = [];
  for (let i = 0; i < this.length; i++) {

    const resultado = fn(this[i], i, this);
    novoArray.push(resultado);
  }
  return resultado;
}