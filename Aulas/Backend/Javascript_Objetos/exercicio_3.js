const car = {
    model: 'Uno',
    ano: 2015,
    cor: 'azul',
    fabricante: 'Fiat',
};

for (key in car) {
    console.log(`${key} : ${car[key]}`);
}
