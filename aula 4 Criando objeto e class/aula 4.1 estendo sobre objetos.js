const pessoa = {
   nome: "Matheus F de Andrade",
   idade: 24,

   descrever: function () {
      console.log(`Ola o nome e ${this.nome} e tenho ${this.idade} anos `);
   },
};

pessoa.descrever = function () {
   console.log("o meu nome é " + this.nome);
};

console.log(pessoa["nome"]);
