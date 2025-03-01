// Váriaveis
console.log("\n***** Váriaveis *****");
console.log("Ola mundo!");
let variavel2 = "Qualquer2"; // Escopo local
const variavel3 = "Qualquer3"; // Escopo local - Imutavel
if (true) {
  var variave1 = "Qualquer"; // Escopo global
}
console.log(variave1);
console.log(variavel2);
console.log(variavel3);
// Tipos de dados
// string = Texto
// number = Numero
// boolean = True ou False;
// nullable = NULL
// undefined
const nome = "Lucas";
const frase = "meu nome é: " + nome;
const frase2 = `meu nome é: ${nome}`;
console.log(frase);
console.log(frase2);
const idade = 2;
console.log(idade);
const verdairo = true;
const abacaxi = false;
console.log(verdairo);
console.log(abacaxi);
const retorno = null;
console.log(retorno);
const retorno2 = undefined;
console.log(retorno2);

console.log("\n***** Condições *****");
const a = 5;
const b = 5;
if (b > a) {
  console.log(`O numero ${b} é maior que o numero ${a}`);
} else if (b === a) {
  console.log(`O numero ${b} é igual ao numero ${a}`);
} else {
  console.log(`O numero ${b} nao é maior ${a}`);
}
// Arrays
console.log("\n***** Arrays *****");
const frutas = ["banana", "abacaxi", "melão"]; // Posiçoes a patir do 0 - Tamanho 3
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
frutas.push("laranja");
frutas.push(22);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(typeof frutas[0]);

// Loops;
console.log("\n***** Arrays *****");

let count = 0;
do {
  console.log(frutas[count]); //fruntas[3]
  count++;
} while (count < frutas.length);
console.log("Tamanho do array", frutas.length);
console.log("Contador", count);
console.log("Terminou o loop");

// Funções
console.log("\n***** Funções *****");
function concat(a, b) {
  console.log(`Esse é o resultado de concatenar ${a} e ${b}`);
} // Assinatura
concat("Teclado", "Mouse"); // chamada
concat("Notebook", "Cooler"); // chamadas
concat("Monitor", "Fone"); // chamada
