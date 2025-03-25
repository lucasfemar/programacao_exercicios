function recebeNumeros(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

const numeros = [2, 8, 3, 6, 5];
let resultado = recebeNumeros(numeros);
console.log("O resultado da soma do array é", resultado);