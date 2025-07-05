class pessoa {
   nome;
   idade;

   constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
   }

   descrever() {
      console.log(
         "Ola o nome e " + this.nome + " e tenho " + this.idade + " anos "
      );
   }
}

function copararPessoas(p1, p2) {
   if (p1.idade > p2.idade) {
      console.log(`${p1.nome} é mais velho do que ${p2.nome}`);
   } else if (p2.idade > p1.idade) {
      console.log(`${p2.nome} é mais velho do que ${p1.nome}`);
   } else {
      console.log(`${p1.nome + p2.nome}tem a mesmo idade`);
   }
}

const matheus = new pessoa("matheus", 24);
const paulo = new pessoa("paulo", 30);

copararPessoas(matheus, paulo);
