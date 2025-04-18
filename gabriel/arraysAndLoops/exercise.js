// escrever um programa de lista de compras 
// precisamos de um menu com 4 opções, 1- adicionar item,2 - exibir lista,3 - remover item e 4 - sair
// conceitos a praticar, função, array, loop forEach e switch, bibliotecas JS (readline, trim, push) e metodos recursivos

const readline = require('readline'); //função JS
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const listaDeCompras = []
// const  = uma variavel imutável 
// var    = uma variavel global que pode ser usada fora do escopo
// let    = variavel local usada somente dentro do escopo
// escopo = bloco de código limitado pelas chaves {}
// recursividade é uma se chama ela mesma até cumprir um objetivo (forma de loop)
//parametro = valor esperado e passado para dentro da função

// sintax do if
// if('aqui é a condição'){
//     console.log('condição 1');
// }else if('aqui é a condição'){
//     console.log('condição 2');
// }else{
//     console.log('condição final')
// }


function showMenu() { //função criada manualmente
    console.log('1 - Adicionar item')
    console.log('2 - Exibir lista')
    console.log('3 - Remover item')
    console.log('4 - Sair \n')
}

function processOptions() {
    showMenu();
    rl.question('Digite a opção: ', (option) => {
        switch (option) {
            case '1':
                rl.question('Digite o nome do item: ', (item) => {
                    if (item) {
                        listaDeCompras.push(item.trim())
                    }
                    processOptions();
                });
                break;

            case '2':
                if (listaDeCompras.length === 0) {
                    console.log('A lista está vazia');
                    processOptions();
                }
                else {
                    listaDeCompras.forEach((item) => {
                        console.log(item);
                    })
                }
                processOptions();
                break;

            case '3':
                console.log('\n')
                if (listaDeCompras.length === 0) {
                    console.log('A lista está vazia!\n')
                    processOptions();
                }
                else {
                    rl.question('Digite o nome do item para remover: ', (removeItem) => {
                        const index = listaDeCompras.indexOf(removeItem);

                        if(index !== -1){
                            listaDeCompras.splice(index, 1);
                            console.log(`item ${removeItem} removido com sucesso\n`);
                        } else{
                            console.log('item não encontrado na lista')
                        }
                        processOptions();
                    })
                };
                break;

            case '4':
                console.log('Encerrando o programa..');
                setTimeout(rl.close, 3000)
                break;
        }
    });
}
console.log("Programa de Lista de compras")
console.log("Use Ctrl+C para sair a qualquer momento\n")

processOptions();