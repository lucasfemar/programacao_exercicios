const readline = require('readline'); //função JS
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const listaDeCompras = []
//const = e uma variavel imutavel
// var = uma variavel global que pode ser usada fora do escopo
//let = variavel local usada somente dentro do escopo
// escopo = bloco de codgo representado pela {}
// recurcividade = uma função que chama ela mesma ate cumprir um objetivo (forma de loop)

/* sintax do if 
if('aqui e minha condição'){ 
    console.log('condição 1');
}else if('aqui e minha condição'){
    console.log('condição 2');
}else{
    console.log('condição 3');
}
*/
// parametro= e um valor que espera e passa para uma função


function showMenu() { //função criada manualmente
    console.log('1 - Adicionar item')
    console.log('2 - Exibir lista')
    console.log('3 - Remover item')
    console.log('4 - Sair \n')

}


function processOptions() {
    showMenu();
    rl.question('Digite sua opção: ', (option) => {
        switch (option) {
            case '1':
                rl.question('Digite o nome do item:', (item) => {
                    listaDeCompras.push(item.trim());
                    processOptions();
                })
                break;
            case '2':
                if (listaDeCompras.length === 0) {
                    console.log("A lista esta vazia");
                } else {
                    listaDeCompras.forEach((item) => {
                        console.log(item);
                    })

                }
                processOptions();
                break;

            case '3':
                if (listaDeCompras.length === 0) {
                    console.log('/n A lista está vazia ! Nada para remover');
                    processOptions();
                } else {
                    rl.question("Digite o nome para remover", (itemRemover) => {
                        const index = listaDeCompras.indexOf(itemRemover);

                        if (index !== -1) {
                            listaDeCompras.splice(index, 1);
                            console.log(" item ${removeritem} removido com sucesso");
                        } else {
                            console.log("item não encontrdo na lista")
                        }
                        processOptions();
                    });
                }

                break;
            case '4':
                console.log('Encerranndo o programa');
                rl.close()
                break;
        }
    });
}
console.log("----Programa de Lista de compras----")
//console.log("Use Ctrl+C para sair a qualquer momento\n")

processOptions();
