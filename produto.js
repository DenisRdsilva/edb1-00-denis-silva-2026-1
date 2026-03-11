function caudaProdutoRecursao(num, repeticoes, acumulador) { //Função que realiza a multiplicação recursiva
  if (num == 0) {
    return acumulador;
  } else {
    return caudaProdutoRecursao(num-1, repeticoes, acumulador + repeticoes); // recursão de cauda
  }
}

function produtoIterativo(num) { //função que calcula o produto por iteração
  let soma = 0;
  for (let i = num - 1; i >= 0; i--) {
    soma = soma + num;
  }
  return soma;
}

let numeroRepeticoes = 10;
console.log(`Produto de ${numeroRepeticoes} = ${caudaProdutoRecursao(numeroRepeticoes, numeroRepeticoes, 0)} por recursão de cauda`); // recursão de cauda

console.log(`Produto de ${numeroRepeticoes} = ${produtoIterativo(numeroRepeticoes)} por iteração`); // iteração