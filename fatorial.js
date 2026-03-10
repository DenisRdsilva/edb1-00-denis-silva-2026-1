function caudaFatorial(num, acumulador) { //Função que calcula o fatorial de forma recursiva
  if (num == 0) {
    return acumulador;
  } else {
    return caudaFatorial(num-1, acumulador * num); // recursão de cauda
  }
}

let numeroRepeticoes = 10;
console.log(`Fatorial de ${numeroRepeticoes} = ${caudaFatorial(numeroRepeticoes, 1)}`);