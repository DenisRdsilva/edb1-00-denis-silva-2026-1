function caudaFatorialRecursao(num, acumulador) { //Função que calcula o fatorial de forma recursiva
  if (num == 0) {
    return acumulador;
  } else {
    return caudaFatorialRecursao(num-1, acumulador * num); // recursão de cauda
  }
}

function fatorialIterativo(num) { //função que calcula o fatorial por iteração
  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }
  return num;
}

let numeroRepeticoes = 10;
console.log(`Fatorial de ${numeroRepeticoes} = ${caudaFatorialRecursao(numeroRepeticoes, 1)} por recursão de cauda`); // recursão de cauda

console.log(`Fatorial de ${numeroRepeticoes} = ${fatorialIterativo(numeroRepeticoes)} por iteração`); // iteração