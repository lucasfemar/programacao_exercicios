
const readline = require('readline'); //função JS
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu(){ //função criada manualmente
    console.log('1 - Adicionar item')
    console.log('2 - Exibir lista')
    console.log('3 - Remover item')
    console.log('4 - Sair \n')
}


function processOptions(){
    showMenu();
    rl.question('Digite o nome do item: ', (option) =>{
        switch(option){
            case '1':
                console.log('Eu escolhi a opção 1');
                break;
            case '2':
                console.log('Eu escolhi a opção 2');
                break;
            case '3':
                console.log('Eu escolhi a opção 3');
                break;
            case '4':
                console.log('Eu escolhi a opção 4');
                break;
        }
    });
}
console.log("----- Programa de Lista de compras ------")
//console.log("Use Ctrl+C para sair a qualquer momento\n")

processOptions();
