// escrever um programa de lista de compras 
// precisamos de um menu com 4 opções, 1- adicionar item,2 - exibir lista,3 - remover item e 4 - sair
// conceitos a praticar, função, array, loop forEach e switch, bibliotecas JS (readline, trim, push) e metodos recursivos

const readline = require('readline'); //função JS
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const listaDeCompras = [] 
//const  = uma variavel imutável 
//var    = uma variavel global que pode ser usada fora do escopo
//let    = variavel local usada somente dentro do escopo
//escopo = bloco de código limitado pelas chaves {}

function showMenu(){ //função criada manualmente
    console.log('1 - Adicionar item')
    console.log('2 - Exibir lista')
    console.log('3 - Remover item')
    console.log('4 - Sair \n')
}

function processOptions(){
    showMenu();
    rl.question('Digite a opção: ', (option) =>{
        switch(option){
            case '1':
                rl.question('Digite o nome do item: ', (item) =>{
                    if(item){
                        listaDeCompras.push(item.trim())
                    }
                processOptions();
                });
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
console.log("Programa de Lista de compras")
console.log("Use Ctrl+C para sair a qualquer momento\n")

processOptions();