function apricarDesconto(valor, desconto) {
   return valor - valor * (desconto / 100);
}

function aplicarJuroos(valor, juros) {
   return valor + valor * (juros / 100);
}

const Preco = 60;
let formaPagamento = 4;

if (formaPagamento === 1) {
   console.log(apricarDesconto(Preco, 10));
} else if (formaPagamento === 2) {
   console.log(apricarDesconto(Preco, 15));
} else if (formaPagamento === 3) {
   console.log(Preco);
} else if (formaPagamento === 4) {
   console.log(aplicarJuroos(Preco, 10));
} else {
   console.log("Opção ivalida");
}
