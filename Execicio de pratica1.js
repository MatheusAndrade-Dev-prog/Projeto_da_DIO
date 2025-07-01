/*teste*/
let nota1 = 8;
let nota2 = 5;
let nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
   console.log("Reprovado");
}
if (media >= 5 && media <= 7) {
   console.log("Recuperação");
} else {
   console.log("Parabens você passou");
}
