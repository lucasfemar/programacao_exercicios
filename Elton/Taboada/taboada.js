function gerarTabuada(numero) {
    let tabuada = [];

    let name = "|    Taboada do " + numero+"      |";

    console.log("\n\n------------------------");
    console.log(name);
    console.log("------------------------\n\n");

    for (let i = 1; i <= 10; i++) {
        tabuada.push(`| ${numero} x ${i} = ${numero * i}`);
    }    
    return tabuada;
}
 
const tabuada = gerarTabuada(5);
console.log("--------------");
console.log(tabuada.join("\n"));
console.log("--------------");
