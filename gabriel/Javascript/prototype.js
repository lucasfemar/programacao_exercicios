const veiculo = {
    descrever: function() {
        console.log(`Esse é um ${this.tipo}`);
    }
}
const carro = {
    tipo: "carro",
    marca: "Toyota",
    modelo: "Trueno AE86",
}

Object.setPrototypeOf(carro, veiculo);