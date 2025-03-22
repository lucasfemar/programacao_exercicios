let numeros = [10, 2, 3, 4, 1];

let resultado = 0;
function somaArray() {
    numeros.forEach(num => {
        resultado += num;
    })
    console.log(`O resultado da soma é: ${resultado}`)
}

somaArray(numeros);