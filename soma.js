function caudaSomaRecursao(num, acumulador) { //Função que realiza a soma recursiva
  if (num == 0) {
    return acumulador;
  } else {
    return caudaSomaRecursao(num-1, acumulador + num); // recursão de cauda
  }
}

function somaIterativa(num) { //função que calcula o produto por iteração
  for (let i = num - 1; i >= 0; i--) {
    num += i;
  }
  return num;
}

let numeroRepeticoes = 10;
console.log(`Soma de 1 até ${numeroRepeticoes} = ${caudaSomaRecursao(numeroRepeticoes, 0)} por recursão de cauda`); // recursão de cauda

console.log(`Soma de 1 até ${numeroRepeticoes} = ${somaIterativa(numeroRepeticoes)} por iteração`); // iteração