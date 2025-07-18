function caculandoImc(peso, altura) {
   return peso / Math.pow(altura, 2);
}

function cacificarImc(imc) {
   if (imc < 18.5) {
      return "Abaixo do peso";
   } else if (imc >= 18.5 && imc < 25) {
      return "Peso normal";
   } else if (imc >= 25 && imc < 30) {
      return "Acima do peso";
   } else if (imc >= 30 && imc < 40) {
      return "Obeso";
   } else {
      return "Gravimente Obeso";
   }
}
//main
(function () {
   let peso = 80;
   let altura = 1.72;

   const imc = caculandoImc(peso, altura);
   console.log(cacificarImc(imc));
})();
