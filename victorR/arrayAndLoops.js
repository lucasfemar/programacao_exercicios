// escrever um programa de lista de compras.
// precisamos de um menu com 4 opções, 1- adicionar item, 2- exibir lista, 3- remover item e 4- sair.
// conceitos a praticar, função, array, loop foreach e switch, biblioteca javascript (readline, trim, push) métodos recursivos.
// const = variável imutável
// var = variável global que pode ser usada fora do escopo
// let = variável regional, sendo usada apenas dentro do escopo
// escopo = bloco de código, representado por {}
// recursividade = é quando uma função chama ela mesma, até cumprir um objetivo (forma de loop)
// if("condição"){
//     console.log("condição 1")
// } else if("condição"){
//     console.log("condição 2")
// } else{
//     console.log("condição 3")
// }

const readline = require("readline"); // função javascript.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const listaDeCompras = []


function showMenu() { // função criada manualmente.
    console.log("========== Menu ==========")
    console.log("| 1 - Adicionar item     |")
    console.log("| 2 - Exibir item        |")
    console.log("| 3 - Remover item       |")
    console.log("| 4 - Sair item          |")
    console.log("===========================")
}

function processOptions() {
    showMenu();
    rl.question("Digite a sua opção: ", (option) => {  //--> variável sempre letra minuscula. 
        switch (option) {
            case "1":
                rl.question("Digite o nome do item: ", (item) => {
                    if (item != null) {
                        listaDeCompras.push(item.trim()); //push adiciona o item no final da lista (listaDeCompras) |trim retira espaços antes de depois do item adicionado
                    }
                    processOptions();
                });
                break;
            case "2":
                if(listaDeCompras.length === 0){ 
                    console.log("A lista está vazia")
                } else {
                    rl.question("Digite para exibir os itens: ", (item) => {
                        listaDeCompras.forEach((item, index) => {
                            console.log(`\n| ${index + 1} ${item}`);
                        });
                        processOptions();
                    });
                }
                break;
            case "3":
                if(listaDeCompras.length === 0){
                    console.log("\n A lista está vazia! Nada para remover");
                    processOptions();
                } else {
                    rl.question("Digite o nome do item para remover: ", (itemRemover) => {
                        const index = listaDeCompras.indexOf(itemRemover);
                        if(index !== -1) {
                            listaDeCompras.splice(index, 1);
                            console.log("| Removi o item " + itemRemover);
                        } else {
                            console.log("Item não encontrado na lista");
                        }
                        processOptions();
                    });
                }
                    

                break;
            case "4":
                console.log("\n Encerrando programa..."); // close
                rl.close();
                break;
        }
    });
}

console.log("Programa de lista de compra")
console.log("Use Ctrl + C para sair a qualquer momento\n")
processOptions();


// const issoEUmaFuncao = xpto(); --> precisa de () para representar uma função, mas não necessariamente precisa de um parâmetro.
// const issoNaoEUmaFuncao = xpto; --> não tem um (), logo não é uma função.
// parâmetro é o que vai dentro do () da função = function(parâmetro)