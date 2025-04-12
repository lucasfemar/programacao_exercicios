const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const listaCompras = [];

function mostrarMenu() {
    console.log("\n ===== MENU DE OPÇÕES =====");
    console.log("| 1 - Adicionar item       |");
    console.log("| 2 - Exibir lista         |");
    console.log("| 3 - Remover item         |");
    console.log("| 4 - Sair                 |");
    console.log("============================\n");
}

function processarOpcao(Boolean = true) {
    mostrarMenu();
    rl.question('Digite sua opção: ', (opcao) => {
        switch(opcao) {
            case '1':
                rl.question('Digite o nome do item: ', (item) => {
                    if (item && item.trim()) {
                        listaCompras.push(item.trim());
                        console.log(`c Item "${item}"adicionado com sucesso!\n`);
                    }
                    processarOpcao();
                });
                break;

            case '2':
                if (listaCompras.length === 0) {
                    console.log("\n**A lista está vazia!**");
                } else {
                    const larguraTotal = 50; // Largura total da "tabela"
                    console.log("_".repeat(larguraTotal));
                    listaCompras.forEach((item, index) => {
                        const numeroItem = `${index + 1}. `;
                        const espacos = " ".repeat(larguraTotal - numeroItem.length - item.length - 3); // - para os pipes e espaços
                        console.log(`| ${numeroItem}${item}${espacos}|`);
                    });
                    console.log("_".repeat(larguraTotal));
                }
                processarOpcao();
                break;

            case '3':
                if (listaCompras.length === 0) {
                    console.log("\nA lista está vazia! Nada para remover.");
                    processarOpcao();
                } else {
                    rl.question('Digite o nome do item para remover: ', (itemRemover) => {
                        const index = listaCompras.indexOf(itemRemover);
                        if (index !== -1) {
                            listaCompras.splice(index, 1);
                            console.log(`Item "${itemRemover}" removido com sucesso!`);
                        } else {
                            console.log("Item não encontrado na lista!");
                        }
                        processarOpcao();
                    });
                }
                break;

            case '4':
                console.log("\nEncerrando o programa...");
                rl.close();
                break;

            default:
                console.log('\n***********************************************************');
                console.log("* ❌ Opção inválida! Por favor, escolha uma opção válida. *");
                console.log('***********************************************************');
                processarOpcao();
        }
    });
}
console.log('*************************************************');
console.log("|      Programa de Lista de Compras             |"); 
console.log('|-----------------------------------------------|');
console.log("| ⚠️. Use Ctrl+C para sair a qualquer momento ⚠️. |");
console.log('*************************************************\n');
processarOpcao();
