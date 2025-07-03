class Carro {
   marca;
   cor;
   gastoMedioPorKm;

   constructor(marca, cor, gastoMedioPorKm) {
      this.marca = marca;
      this.cor = cor;
      this.gastoMedioPorKm = gastoMedioPorKm;
   }

   calcularGatoDeViajem(distanciaEmKm, precoCombutivel) {
      return distanciaEmKm * this.gastoMedioPorKm * precoCombutivel;
   }
}

const uno = new Carro("fiat", "azul", 1 / 12);
console.log(uno.calcularGatoDeViajem(70, 5));

const palio = new Carro("fiat", "cinza", 1 / 10);
console.log(palio.calcularGatoDeViajem(70, 5));
