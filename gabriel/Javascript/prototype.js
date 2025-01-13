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
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

const estudante = Object.create(pessoa);
estudante.nome = 'Alice';
estudante.cumprimento(); //4 - será exibido a função cumprimento com o nome Alice