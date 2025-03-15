function gerarTabuada(numero, inicio, fim) {
    let tabuada = [];

    let name = "|    Taboada do " + numero+", Iniciando em "+inicio+" e terminando em "+fim+"    |";

    console.log("\n\n--------------------------------------------------------");
    console.log(name);
    console.log("--------------------------------------------------------");


    for (let i = inicio; i <= fim; i++) {
        tabuada.push('|  '+`${numero} x ${i} = ${numero * i}`);
    } 
    return tabuada;
}

const tabuada = gerarTabuada(5, 3, 7);
console.log("--------------");
console.log(tabuada.join("\n"));
console.log("--------------");