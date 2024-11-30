 /* 1 -
const nome = 'Gabriel' 
var idade = 21 
const frase = 'Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos'

// resultado questão 1
console.log('EXERCICIO 1: \n', frase) 
*/


/* 2 - Condições: Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade. 
const idade = prompt("Digite sua idade: ")
console.log('EXERCICIO 2: \n')
if (idade<=17) {
  console.log("Menor de idade, dê meia volta")
} else {
  console.log("Maior de idade, pode entrar")
} */

/* 3 - Loops: Crie um loop que imprima todos os números de 1 a 100.
console.log('EXERCICIO 3: \n')
var count;
for (count=0; count <= 100; count++) {
  console.log(count)
} */

/*4 - Funções: Escreva uma função que aceite dois números como argumentos e retorne sua soma.
function soma(a, b) {
    return a+b;
}
console.log('EXERCICIO 4: \n')    
console.log(soma(15, 30)) */

/* 5 - Funções: Desenvolva uma função que receba um número como parâmetro e verifique se ele é par ou ímpar. Retorne true se for par e false se for ímpar. 
console.log('EXERCICIO 5: \n')
const n = 15;

if (n%2 == 0){
  console.log(n, "é um numero par");
} else{ 
  console.log(n, "é um numero impar")  
} */
/* 6 - Arrays: Escreva um programa que declare um array de suas frutas favoritas e imprima cada fruta na lista usando um loop.
const frutas = ['uva passa','banana','melão', 'morango']
for(let count = 0; count< frutas.length; count++){
  console.log(frutas[count])
  } */

  function fib(n) {
    if (n == 1) {
      console.log('o numero é 0');
    } else if (n == 2) {
      console.log('o numero é 1');
    } else{
      console.log(fib(n - 1) + fib(n - 2)) ;
    }
  }
  
  fib(5);