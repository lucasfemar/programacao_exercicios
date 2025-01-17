// Exercicio 1
const veiculo = {
    tipo: "veiculo generico",
    rodas: 4,
    descrever: function() {
        console.log(`Esse é um ${this.tipo}`);
    }
}
const carro = {
    tipo: "carro",
    marca: "Toyota",
    modelo: "Trueno AE86",
}

Object.setPrototypeOf(carro, veiculo);

carro.descrever()
console.log(carro.rodas)


// Exercicio 2
const pessoa = {
    nome: 'Nome Padrão',
    cumprimento: function() {
        console.log(`Ola! Eu sou ${this.nome}. Prazer em conhece-lo!`);
    }
}

const estudante = Object.create(pessoa);
estudante.nome = 'Alice';
estudante.cumprimento(); //4 - será exibido a função cumprimento com o nome Alice

/* 6 - a mensagem da função cumprimento mudou e buscou no prototipo 
de "estudante" que é "pessoa" e imprimiu a mensagem*/