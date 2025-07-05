function teste() {
   console.log("teste");
}

teste();

function meunome(nome) {
   console.log("Seja bem vido " + nome);
}

meunome("matheus");

function quadrado(valor) {
   return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

console.log(quadrado(10) + quadrado(10));

function icrementarJuros(valor, percetualJuros) {
   const valorDeAcrecimo = (percetualJuros / 100) * valor;
   return valor + valorDeAcrecimo;
}

console.log(icrementarJuros(100, 10));
console.log(icrementarJuros(100, 80));
