var meucarro = {
  fabricação: 'ford',         /* 
  modelo: 'mustang', 
  ano: '1969',
  valor: '20.000',              propriedades do objeto
  cor: 'branco',
  placa: 'QWE2024'            */
};

// Usando forEach                                   
console.log('Usando Object.keys().forEach:');       /*
Object.keys(meucarro).forEach(function(item) {        Retorna um array com as chaves (propriedades) do objeto Iteração feita com forEach.
  console.log(item + ": " + meucarro[item]);          
});                                                 */

// Usando for...in
console.log('\nUsando for...in:');              /*
for (var intem in meucarro) {                           Itera sobre as propriedades enumeráveis do objeto, incluindo propriedades herdadas, se existirem.
  console.log(intem + ": " + meucarro[intem]);    */
}

// Usando Object.entries
console.log('\nUsando Object.entries():');                /*
Object.entries(meucarro).forEach(function([key, value]) {           Retorna um array de pares [chave, valor] do objeto.
  console.log(key + ": " + value);                        */
});     
// teste                                                        





