function caudaSoma(num, acumulador) { //Função que realiza a soma recursiva
  if (num == 0) {
    return acumulador;
  } else {
    return caudaSoma(num-1, acumulador + num); // recursão de cauda
  }
}

let numeroRepeticoes = 10;
console.log(`Soma de 1 até: ${numeroRepeticoes} = ${caudaSoma(numeroRepeticoes, 0)}`);