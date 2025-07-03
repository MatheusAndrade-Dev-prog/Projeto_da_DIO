//execicio guiado 1
function escrevaMeuNome(nome) {
   return "Prazer o meu nome é: " + nome;
}

let nome = "matheus";
escrevaMeuNome(nome);

// execicio guiado 2

function verificarIdade(idade) {
   if (idade >= 18) {
      console.log(escrevaMeuNome(nome) + " sou  maior de idade");
   } else {
      console.log(escrevaMeuNome(nome) + " sou menor de idade");
   }
}

const idade = 18;
verificarIdade(idade);
