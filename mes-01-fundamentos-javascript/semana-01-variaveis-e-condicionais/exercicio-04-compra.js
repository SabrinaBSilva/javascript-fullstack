//Desafio extra — Sistema de compra
//Crie um arquivo compra.js com as seguintes funcionalidades:
//1. Crie variáveis para nome do cliente, preço do produto e quantidade comprada.
//2. Calcule o valor total da compra.
//3. Se o total for maior ou igual a R$ 200, aplique 10% de desconto.
//4. Se for menor que R$ 200, não aplique desconto.
//5. Mostre no terminal:
  //- Nome do cliente.
  //- Quantidade comprada.
  //- Valor original.
  //- Desconto aplicado.
  //- Valor final.

  let cliente = 'Ian';
  let precoDoProduto = 100;
  let quantidadeComprada = 2;
  let valorTolal = precoDoProduto * quantidadeComprada;
  let desconto = 0;
  let valorFinal = 0;

  if(valorTolal >= 200) {
    desconto = valorTolal * 0.10;
    valorFinal = valorTolal - desconto;
  } else {
    desconto = 0
    valorFinal = valorTolal
  }

  console.log('Cliente: ' + cliente);
  console.log('Quantidade: ' + quantidadeComprada);
  console.log('Valor original: ' + valorTolal);
  console.log('Desconto: ' + desconto);
  console.log('Valor final: ' + valorFinal);