// // 1 - Variáveis e tipos de dados: Escreva um programa que declare duas variáveis, “nome” e “idade”,
// // e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho const nome = 'Daniele';
const nome = 'Gabriel';
const idade = 18;
const frase = 'Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos';
console.log('EXERCICIO 1: \n', frase);

// // 2 - Condições: Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.
console.log('EXERCICIO 2');

if (idade >= 18) {
    console.log('Maior de idade, pode entrar ' + idade);
} else if (idade > 0) {
    console.log('Menor de idade, dê meia volta ' + idade);
} else {
    console.log('Idade invalida ' + idade);
}
console.log('EXERCICIO 3');
// // // 3 - Loops: Crie um loop que imprima todos os números de 1 a 100.
for (let count = 0; count <= 100; count = count + 1) {
    console.log(count);
}
// // 4 - Funções: Escreva uma função que aceite dois números como argumentos e retorne sua soma.
console.log('EXERCICIOS 4');
// // Assinatura
function soma(argumento1, argumento2) {
    return argumento1 + argumento2;
}
// // Chamada da funcão
console.log('O resultado da soma é ' + soma(5, 3));
const a = 10;
const b = 15;
const resultado = soma(a, b);
console.log('O resultado da soma é ' + resultado);

// // 5 - Funções: Desenvolva uma função que receba um número como parâmetro e verifique se ele é par ou ímpar. Retorne true se for par e false se for ímpar.
console.log('EXERCICIOS 5');
const n = 15;
// // + , -, *, /, %
if (n % 2 == 0) {
    console.log(n, 'é um numero par');
} else {
    console.log(n, 'é um numero impar');
}
// // 6 - Arrays: Escreva um programa que declare um array de suas frutas favoritas e imprima cada fruta na lista usando um loop.
console.log('EXERCICIOS 5');
const frutas = ['morango', 'uva', 'manga', 'mamão', 'melancia']; // 4 - 0, 1, 2, 3
console.log(frutas.length);
for (let count = 0; count < frutas.length; count++) {
    console.log(count);
    console.log(frutas[count]);
}

// /*7 - Exercício de Fibonacci
// Neste exercício, você deve criar uma função em JavaScript para calcular o n-ésimo número na sequência de Fibonacci.
// A sequência de Fibonacci é uma série de números em que cada número é a soma dos dois precedentes. 
// Ela começa normalmente com 0 e 1. Os primeiros números da sequência são: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, e assim por diante.

// Seu objetivo é criar uma função chamada fibonacci, que aceite um número inteiro positivo n como argumento e retorne o n-ésimo número na sequência de Fibonacci.
// */

const numero = 2;
const resultado2 = numero % 2 === 0 ? 'Par' : 'Impar';
console.log(resultado2);

function fibonacci(n) { // 4
    let a = 0;
    let b = 1;
    for (let i = 2; i < n; i++) { // i = 2 | 3 | 4
        let temp = a + b; // temp = 1 | 2 |
        a = b; // a =  1 | 1 |
        b = temp; // b =  1 | 2 |
    }
    return n === 0 ? 0 : b; //2
}
console.log(fibonacci(5))
//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34,