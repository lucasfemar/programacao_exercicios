//## 1 - Crie uma função chamada `soma` que recebe dois números como parâmetros e retorna a soma deles, em seguida mostre o resutlado no console.
function soma (f,d){
    return d+f;
 }
    console.log(`O valor da soma é ${soma(40,70)}`);



//## 2 - Crie um objeto chamado `pessoa` com as propriedades: `nome`, `idade` e `cidade`. Depois, crie uma função que altera a cidade da pessoa para um novo valor passado como parâmetro. Mostre no console o valor da cidade antes e depois da mundança.
const pessoa={
    nome:"Pedro",
    idade:25,
    cidade:"São Paulo",
}
function alterarcidade (novacidade){
    console.log(`cidade:${pessoa.cidade}`);
    pessoa.cidade = novacidade;
    console.log(`novacidade: ${pessoa.cidade}`);
}
alterarcidade("Rio de Janeiro");

//## 3 - Crie uma função que recebe um numero n e retorna a taboda até o 10. Mostre os resultado no console.
 function tabuada(n) {
     for(let i =0; i<=10;i++){
    console.log(`${n} x ${i} = ${n*i}`);
     }
    }
    undefined
     tabuada(2)

//## 4 -Escreva uma função chamada `verificaIdade` que recebe a idade de uma pessoa como parâmetro. Se a idade for maior ou igual a 18, retorne "Maior de idade", caso contrário, retorne "Menor de idade". E mostre o retorno na tela.
 function verificaridade(idade) {
 return idade >=18? "maior de idade" : "menor de idade";
     }
    undefined
    console.log(verificaridade(22));
    console.log(verificaridade(12));
   
//## 5 - Crie um array chamado `numeros` contendo 5 números diferentes. Depois, escreva uma função que recebe esse array e retorna a soma de todos os números e mostre o retorno no console.
const numeros= [12,33,45,56,22];
function somaArray(arr){
    let soma = arr.reduce((acumulador,valoraAtual) => acumulador + valorAtual,0);
    return soma;
}
console.log(`o resultado da soma do array é : ${somaArray(numeros)}`);
 

//## 6 - Crie uma função que recebe um valor numérico e retorno se verdadeiro se o numero for par, e falso se o numero for impar, depois mostre na tela se o numero é par ou impar.
function ehpar(numero){
return numero % 2===0;   
}
const numeroteste= 2;
if (ehpar(numeroteste)){
 console.log(`verdadeiro, o numero ${numeroteste} é par.`);
 }else{
 console.log(`falso, o numero ${numeroteste} é impar`);
 }
//verdadeiro, o numero 2 é par.


//## 7 - Desafio Sequência de Números
function sequenciadenumeros(n){
    let resultado= [];
    for (let i =1; i<= n; i++){
        if(i% 3=== 0 && i % 5=== 0){
            resultado.push("FIZZBUZZ");
        }else if( i% 3===0) {
            resultado.push("FIZZ");
        }else if(i% 5 ===0){
            resultado.push("BUZZ");
        }
        else{
    resultado.push(i);
}
        }
        return resultado;
    }
console.log(sequenciadenumeros(20));