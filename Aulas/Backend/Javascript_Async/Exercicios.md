## Callback

1 - Utilizando callback implemente uma capia da função **filter**.

_A função **filter** é utilizada para filtrar dados de um array, supondo que você queira filtrar apenas numeros maiores que 10 de um array._

```js
const numerosArray = [1, 4, 11, 15, 8, 22, 3];
const numerosMaioresQueDez = numerosArray.filter((x) => {
  return x > 10;
});
// Saída = [ 11, 15, 22]
```

_Para que você possa utilizar a sua função copia a partir de um array, lembre-se de criar a funçao dentro do prototype do objeto **Array**_ \
_E para acessar os valores do array dentro da sua função utilize a palavra **this** para referenciar_

```js
Array.protype.meuMetodoCopia;
```
