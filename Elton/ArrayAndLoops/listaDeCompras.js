// Importa o módulo 'readline', que permite ler entradas do usuário via terminal
const readline = require('readline');

// Cria a interface de entrada e saída com o terminal (input/output)
const rl = readline.createInterface({
    input: process.stdin,  // define a entrada como o teclado
    output: process.stdout // define a saída como o console
});

// Cria um array vazio que será usado para armazenar os itens da lista de compras
const listaCompras = [];

// Função que mostra o menu de opções para o usuário
function mostrarMenu() {
    console.log("\n ===== MENU DE OPÇÕES =====");
    console.log("| 1 - Adicionar item       |");
    console.log("| 2 - Exibir lista         |");
    console.log("| 3 - Remover item         |");
    console.log("| 4 - Sair                 |");
    console.log("============================\n");
}

// Função principal que processa a opção escolhida pelo usuário
function processarOpcao(Boolean = true) {
    mostrarMenu(); // Exibe o menu no terminal

    // Aguarda o usuário digitar a opção desejada
    rl.question('Digite sua opção: ', (opcao) => {
        // Estrutura switch/case que executa uma ação conforme a opção digitada
        switch (opcao) {
            // Caso o usuário digite '1': adicionar item
            case '1':
                rl.question('Digite o nome do item: ', (item) => {
                    // Verifica se o item não está vazio (usa trim para remover espaços)
                    if (item && item.trim()) {
                        listaCompras.push(item.trim()); // Adiciona o item à lista
                        console.log(`c Item "${item}"adicionado com sucesso!\n`);
                    }
                    processarOpcao(); // Chama a função novamente para mostrar o menu
                });
                break;

            // Caso '2': exibir a lista de compras
            case '2':
                // Verifica se a lista está vazia
                if (listaCompras.length === 0) {
                    console.log("\n**A lista está vazia!**");
                } else {
                    const larguraTotal = 50; // Define a largura visual da tabela
                    console.log("_".repeat(larguraTotal)); // Linha superior da "tabela"

                    // Percorre cada item da lista com seu índice
                    listaCompras.forEach((item, index) => {
                        const numeroItem = `${index + 1}. `; // Número do item (começa no 1)
                        const espacos = " ".repeat(larguraTotal - numeroItem.length - item.length - 3);
                        // Calcula quantos espaços colocar para alinhar o texto
                        console.log(`| ${numeroItem}${item}${espacos}|`); // Mostra cada item formatado
                    });

                    console.log("_".repeat(larguraTotal)); // Linha inferior da "tabela"
                }
                processarOpcao(); // Mostra novamente o menu
                break;

            // Caso '3': remover um item
            case '3':
                // Se a lista estiver vazia, avisa e volta ao menu
                if (listaCompras.length === 0) {
                    console.log("\nA lista está vazia! Nada para remover.");
                    processarOpcao();
                } else {
                    // Pede o nome do item a ser removido
                    rl.question('Digite o nome do item para remover: ', (itemRemover) => {
                        const index = listaCompras.indexOf(itemRemover); // Procura o índice do item na lista

                        // Verifica se o item foi encontrado
                        if (index !== -1) {
                            // Remove o item com base no índice usando splice
                            listaCompras.splice(index, 1); // splice remove 1 item a partir do índice
                            console.log(`Item "${itemRemover}" removido com sucesso!`);
                        } else {
                            console.log("Item não encontrado na lista!");
                        }
                        processarOpcao(); // Mostra novamente o menu
                    });
                }
                break;

            // Caso '4': sair do programa
            case '4':
                console.log("\nEncerrando o programa...");
                rl.close(); // Encerra a interface de leitura e finaliza o programa
                break;

            // Qualquer outro valor digitado: opção inválida
            default:
                console.log('\n***********************************************************');
                console.log("* ❌ Opção inválida! Por favor, escolha uma opção válida. *");
                console.log('***********************************************************');
                processarOpcao(); // Mostra o menu novamente
        }
    });
}

// Mostra uma mensagem inicial ao abrir o programa
console.log('*************************************************');
console.log("|      Programa de Lista de Compras             |");
console.log('|-----------------------------------------------|');
console.log("| ⚠️. Use Ctrl+C para sair a qualquer momento ⚠️. |");
console.log('*************************************************\n');

// Inicia a execução chamando a função que processa o menu
processarOpcao();
