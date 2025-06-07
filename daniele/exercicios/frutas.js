// criamos uma lista com varias frutas.
const listaDeFrutas = ['banana', 'maçã', 'laranja', 'uva', 'abacaxi', 'morango', 'kiwi', 'pêra', 'melancia', 'manga','uva', 'pêssego', 'goiaba', 'caju', 'caqui'];

let contador = 1; //criamos uma variavel uma contar quantas vezes ja percoremos a lista.

//vamos percorrer cada item da lista usando o forEach.
listaDeFrutas.forEach(cadaValordaLista => {
    //para cada fruta encontrada, vamos mostra o numero de vez + o nome da fruta
    //console.log(`Fruta ${contador}: ${cadaValordaLista}`);
    console.log('Fruta gerais ' + contador +': '+ cadaValordaLista);
    //depois de mostrar, aumentamos o contador em 1.
    contador++;
});
//mostrar quntas vezes percorremos a lista.
console.log('\n Terminou! foram percoridos ' + (contador - 1) + ' itens na lista. \n');