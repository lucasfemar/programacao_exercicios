// STRING
var variavel1 = 'Ola'
let variavel2 = 'Tudo bem?'
console.log('Meu cumprimento é: ' + variavel1 + ', ' + variavel2)
console.log(`Meu cumprimento é: ${variavel1}, ${variavel2}`)

// NUMBER
let a = 10;
const b = 26;
console.log(a + b);

// Boolean
const valorVerdadeiro = true;
const valorFalso = false;
console.log(valorVerdadeiro);
console.log(valorFalso);

// Object -> // array
const pessoa = {
    nome: 'lucas',
    idade: 26
}
const frutas = ['abacaxi', 3, 'pera']
console.log(typeof pessoa)
console.log(Array.isArray(pessoa))
console.log(Array.isArray(frutas))

// Trazer - o que é função, loops e condionais ***array

// função

function square (numero) {
    return numero * numero;
    
}

// Loops

for (let i = 0; i < 5; i++) {
    console.log("O número é " + i);
}

// condicionais (If; If...Else; If... Else If...Else; Switch)

let hora = 15;

if (hora < 12) {
  console.log("Bom dia!");
} else {
  console.log("Boa tarde!");
}
