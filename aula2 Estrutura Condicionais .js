const numero = 0;
const numeroDivisivelPor5 = numero % 5 === 0;

if (numero === 0) {
   console.log("Numero Invalido");
} else if (numeroDivisivelPor5) {
   console.log("impar");
} else {
   console.log("Par");
}

/* Exercécicio */

const precoEtanol = 4.13;
const precoGasolina = 6.23;
let kmPorLitro = 10;
let distancia = 100;
let tipoComputivel = "gasolina";

const litroConsumidos = distancia / kmPorLitro;

if (tipoComputivel === "gasolina") {
   const valorGastos = litroConsumidos * precoGasolina;
   console.log(valorGastos.toFixed(2));
}
if (tipoComputivel === "etanol") {
   const valorGastos = litroConsumidos * precoEtanol;
   console.log(valorGastos.toFixed(2));
} else {
   console.log("Valor Invalido");
}
