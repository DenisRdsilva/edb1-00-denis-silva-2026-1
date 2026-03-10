function caudaProduto(num, repeticoes, acumulador) { //Função que realiza a multiplicação recursiva
  if (num == 0) {
    return acumulador;
  } else {
    return caudaProduto(num-1, repeticoes, acumulador + repeticoes); // recursão de cauda
  }
}

let numeroRepeticoes = 10;
console.log(`Soma de 1 até: ${numeroRepeticoes} = ${caudaProduto(numeroRepeticoes, numeroRepeticoes, 0)}`);