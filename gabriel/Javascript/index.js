//teste de função para exercicio 1
/*function car(brand, model, year, color){
    this.brand = brand;
    this.model = model;
    this.year = year;
} 
const carro1 = new car('Toyota', 'AE86', 1986, 'white')
console.log(carro1)
carro1.color = 'white';
console.log(carro1)
*/

//exercicio 1
const car = {
    brand: 'Toyota',
    model: 'AE86',
    year: 1986,
    color: 'white'
  }
  
console.log(car.brand)
console.log(car.model)
console.log(car.year)
console.log(car.color)
  
color.car = 'blue';
console.log(car.color)

car.mileage = 50000
console.log(car)


//exercicio 2
/*1 - a idade será 23 e o curso sera mathematics
2 - pois anotherstudent tem a mesma referencia de memoria de studant */

//exercicio 3
const car = {
  model: 'Uno',
  ano: 2015,
  cor: 'azul',
  fabricante: 'Fiat',
};

for(const key in car){
  console.log(`${property}: ${car[property]}`)
}