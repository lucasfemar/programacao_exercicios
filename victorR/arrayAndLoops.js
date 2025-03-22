// escrever um programa de lista de compras.
// precisamos de um menu com 4 opções, 1- adicionar item, 2- exibir lista, 3- remover item e 4- sair.
// conceitos a praticar, função, array, loop foreach e switch, biblioteca javascript (readline, trim, push) métodos recursivos.

const readline = require("readline"); // função javascript.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() { // função criada manualmente.
    console.log("===== Lista de Compras ====")
    console.log("| 1 - Adicionar item     |")
    console.log("| 2 - Exibir item        |")
    console.log("| 3 - Remover item       |")
    console.log("| 4 - Sair item          |")
    console.log("===========================")
}

function processarOptions() {
    showMenu();
    rl.question("Digite o nome do item: ", (option) => {  //--> variável sempre letra minuscula. 
        switch (option) {
            case "1":
                console.log("Eu escolhi a opção 1");
                break;
            case "2":
                console.log("Eu escolhi a opção 2");
                break;
            case "3":
                console.log("Eu escolhi a opção 3");
                break;
            case "4":
                console.log("Eu escolhi a opção 4");
                break;
        }
    });
}

console.log("Programa de lista de compra")
console.log("Use Ctrl + C para sair a qualquer momento\n")
processarOptions();


// const issoEUmaFuncao = xpto(); --> precisa de () para representar uma função, mas não necessariamente precisa de um parâmetro.
// const issoNaoEUmaFuncao = xpto; --> não tem um (), logo não é uma função.