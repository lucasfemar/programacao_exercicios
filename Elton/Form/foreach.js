// Criamos uma lista com várias cidades
const minhaLista = ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Curitiba'];

// Criamos uma variável para contar quantas vezes já percorremos
let contador = 1;

// Vamos percorrer cada item da lista usando forEach
minhaLista.forEach(cadaValorDentroDaLista => {  
    // Para cada cidade encontrada, vamos mostrar o número da vez + o nome da cidade
    console.log( contador + 'ª vez percorrendo a lista: encontrou o valor (' + cadaValorDentroDaLista + ')'
);    
    // Depois de mostrar, aumentamos o contador em 1 
    contador++; 
});

console.log('Quantidade de caracteres:', contador.toString().length);
console.log('Quantidade de caracteres:', contador.toString().length);



// Depois que terminar de percorrer, podemos mostrar quantas vezes passamos (opcional)
console.log('\n***Terminou! Foram percorridos ' + (contador - 1) + ' itens na lista.***\n');
