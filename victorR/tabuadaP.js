function tabuadaPersonalizada(numero, inicio, fim) {
    let tabuada = [];
    let titulo = "|        Tabuada do " + numero + "          |";
    console.log("-------------------------------");
    console.log(titulo);
    console.log("-------------------------------\n");

    for (inicio; inicio <= fim; inicio++) {
        tabuada.push(`| ${numero} x ${inicio} = ${numero * inicio}`);
    }
    return tabuada
}
const tabuada = tabuadaPersonalizada(2, 5, 8);
console.log("-------------------------------");
console.log(tabuada.join("\n"));
console.log("-------------------------------");








//essa é a tabuada do "número", minha tabuada inicia no "inicio", e termina no "fim"


//numero x inicio x i = numero * i

// número é igual minha tabuada
// inicio é igual com qual número minha tabuada começa
// fim é igual com qual número minha tabuada termina
// titulo da tabuada
// colocar os traços