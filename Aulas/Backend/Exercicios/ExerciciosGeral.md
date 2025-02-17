## 1 - Crie uma função chamada `soma` que recebe dois números como parâmetros e retorna a soma deles, em seguida mostre o resutlado no console.

### Saída:

```
    O resultado da soma é <resultado>,
```

## 2 - Crie um objeto chamado `pessoa` com as propriedades: `nome`, `idade` e `cidade`. Depois, crie uma função que altera a cidade da pessoa para um novo valor passado como parâmetro. Mostre no console o valor da cidade antes e depois da mundança.

### Saída:

```
Cidade: São Paulo
Nova Cidade: Rio de Janeiro
```

## 3 - Crie uma função que recebe um numero n e retorna a taboda até o 10. Mostre os resultado no console.

### Saída:

```
n x 0 = x
n x 1 = x
n x 2 = x
n x 3 = x
n x 4 = x
n x 5 = x
n x 6 = x
n x 7 = x
n x 8 = x
n x 9 = x
n x 10 = x
```

## 4 -Escreva uma função chamada `verificaIdade` que recebe a idade de uma pessoa como parâmetro. Se a idade for maior ou igual a 18, retorne "Maior de idade", caso contrário, retorne "Menor de idade". E mostre o retorno na tela.

### Saída 1:

```
Maior de idade
```

### Saída 2:

```
Menor de idade
```

## 5 - Crie um array chamado `numeros` contendo 5 números diferentes. Depois, escreva uma função que recebe esse array e retorna a soma de todos os números e mostre o retorno no console.

### Saída:

```
O resutado da soma do array é: <resultadoDaSoma>
```

## 6 - Crie uma função que recebe um valor numérico e retorno se verdadeiro se o numero for par, e falso se o numero for impar, depois mostre na tela se o numero é par ou impar.

### Saída 1:

```
Verdadeiro, o numero x é Par.
```

### Saída 2;

```
Falso, o numero x é Impar.
```

Aqui está um **desafio de lógica** para você treinar o raciocínio lógico com JavaScript:

---
---
---

## 7 - Desafio Sequência de Números

### Escreva uma função chamada `sequenciaNumeros` que recebe um número `n` e retorna um array contendo a sequência dos números de **1 até n**, mas com as seguintes regras:

- Se o número for **múltiplo de 3**, substitua por `"Fizz"`.
- Se o número for **múltiplo de 5**, substitua por `"Buzz"`.
- Se o número for **múltiplo de 3 e 5 ao mesmo tempo**, substitua por `"FizzBuzz"`.
- Caso contrário, mantenha o número normal.

---

### **Exemplo de entrada e saída:**

```javascript
console.log(sequenciaNumeros(15));
```

**Saída esperada:**

```javascript
[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
```

---

### **Dica:**

 - Use um **loop** para percorrer de 1 até `n` e utilize **condicionais (if/else)** para verificar os múltiplos de 3 e 5.
 - Pesquise sobre Remainder Operator (%) no Javascript
