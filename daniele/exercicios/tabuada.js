//## 3 - Cricoe uma função que recebe um numero n e retorna a taboda até o 10. Mostre os resultado no console.
function tabuada(numero) {
    let titulo = "Tabuada do ";
    console.log(titulo + numero);  // ✅ Agora a concatenação está correta

    for (let i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
tabuada(4);

