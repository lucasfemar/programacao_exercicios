 // Exercício 1: Herança com Prototótipos

 const veiculo = {
    tipo: "Veiculo Generico",
    descrever() {
      console.log(`Esse é um ${this.tipo}.`);
    },
  };
  const carro = Object.create(veiculo);
    carro.tipo = "carro";
   carro.marca = "toyota";

   carro.descrever();
  veiculo.rodas = 4;
  console.log(carro.rodas);

  //Exercício 2: Propriedade e Métodos Compartilhados

  const pessoa = {
    nome: "nome padrão",
    cumprimento() {
        console.log(`Olá, meu nome é ${this.nome}`);
    },
  };

  const estudante = Object.create(pessoa);
  estudante.nome = "Alice";
  estudante.cumprimento();

  pessoa.cumprimento = function(){ // definir metodo cumprimento no objeto pessoa
    console.log(`Ola! Eu sou ${this.nome}. Prazer em conhece-lo!`);
  };
   
  estudante.cumprimento();

  /*Antes da modificação: O método cumprimento() imprimia a mensagem "Olá, meu nome é Alice".
  Depois da modificação: O método passou a imprimir "Ola! Eu sou Alice. Prazer em conhece-lo!" 
  porque o método foi alterado no protótipo de pessoa, e o objeto estudante ainda herda do protótipo. */

 
  

