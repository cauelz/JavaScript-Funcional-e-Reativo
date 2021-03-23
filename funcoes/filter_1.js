const carrinho = [
  { nome: 'Caneta', quantidade: 10, preco: 7.99 },
  { nome: 'Caderno', quantidade: 3, preco: 17.34 },
  { nome: 'Lapis', quantidade: 4, preco: 2.50 },
  { nome: 'Tesoura', quantidade: 5, preco: 12.45 },
  { nome: 'Impressora', quantidade: 1, preco: 764.45 },
]

const getNome = item => item.nome;
const qtadeMaiorQueZero = item => item.quantidade > 0;
const nameItensValidos = carrinho
  .filter(qtadeMaiorQueZero)
  .map(getNome);
console.log(nameItensValidos);

