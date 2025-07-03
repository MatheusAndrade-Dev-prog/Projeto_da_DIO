const Preco = 60;

let formaPagamento = 4;

if (formaPagamento === 1) {
   let total = Preco - 0.1;
   console.log(total);
} else if (formaPagamento === 2) {
   let total = Preco - 0.15;
   console.log(total);
} else if (formaPagamento === 3) {
   console.log(Preco);
} else if (formaPagamento === 4) {
   let total = Preco + 0.1;
   console.log(total);
} else {
   console.log("Opção ivalida");
}
