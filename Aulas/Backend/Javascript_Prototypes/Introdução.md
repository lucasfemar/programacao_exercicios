
# Object Prototype no JavaScript

## O que é um protótipo?
Todo objeto em JavaScript tem uma propriedade interna chamada `[[Prototype]]`, que aponta para outro objeto (ou é `null`). Esse objeto "pai" é chamado de **protótipo**.

O protótipo permite que um objeto acesse propriedades ou métodos definidos em outro objeto, como parte do sistema de herança do JavaScript.

---

## A cadeia de protótipos
Quando você tenta acessar uma propriedade ou método de um objeto, o JavaScript faz o seguinte:
1. Ele procura a propriedade diretamente no objeto.
2. Se não encontrar, ele verifica o protótipo do objeto.
3. Continua subindo na cadeia de protótipos até encontrar a propriedade ou atingir o final da cadeia (um protótipo `null`).

Essa cadeia é chamada de **prototype chain**.

---

## Exemplo básico de protótipo
```javascript
// Objeto pai
const animal = {
  comer: function() {
    console.log("Esse animal esta comendo");
  },
};

// Objeto filho
const cachorro = {
  latir: function() {
    console.log("Au au!");
  },
};

// Configurando o protótipo do cachorro para o animal
Object.setPrototypeOf(cachorro, animal);

// dog pode acessar o método eat do protótipo
cachorro.comer(); // Saída: "Esse animal esta comendo"
cachorro.latir(); // Saída: "Au au!"
```

---

## Criando objetos com protótipos
Quando você cria um objeto com `Object.create`, você pode especificar diretamente o protótipo do novo objeto:

```javascript
const gato = Object.create(animal);
cat.miau = function() {
  console.log("Miau!");
};

cat.comer(); // Saída: "Esse animal esta comendo"
cat.miau(); // Saída: "Miau!"
```

---

## Prototype de funções construtoras
Se você usar uma função construtora, o protótipo pode ser usado para compartilhar métodos entre todas as instâncias criadas com ela.

```javascript
function Pessoa(nome) {
  this.nome = nome;
}

Person.prototype.cumprimento = function() {
  console.log(`Ola, meu nome é ${this.nome}`);
};

const john = new Pessoa("John");
const jane = new Pessoa("Jane");

john.cumprimento(); // Saída: "Ola, meu nome é John"
jane.cumprimento(); // Saída: "Ola, meu nome é Jane"
```

Aqui, o método `cumprimento` está no `Pessoa.prototype`, e todas as instâncias de `Pessoa` compartilham o mesmo método.

---

## O protótipo padrão de objetos
Por padrão, quando você cria um objeto literal, ele herda de `Object.prototype`. Esse protótipo contém métodos como:
- `toString()`
- `hasOwnProperty()`
- `isPrototypeOf()`

Exemplo:
```javascript
const obj = {};
console.log(obj.toString()); // Saída: "[object Object]"
```

---

## Sobrescrevendo ou removendo o protótipo
Você pode criar um objeto sem protótipo usando `Object.create(null)`. Isso é útil para criar objetos simples sem métodos herdados.

```javascript
const obj = Object.create(null);
console.log(obj.toString); // undefined
```

---

## Cuidados com o uso de protótipos
1. **Performance**: A cadeia de protótipos pode impactar o desempenho se for muito longa, pois o JavaScript precisa procurar propriedades na cadeia.
2. **Confusão em alterações**: Modificar diretamente o protótipo de um objeto (como `Object.prototype`) pode causar bugs em outras partes do código.

---

## Conclusão
Os protótipos são um dos conceitos centrais do JavaScript e permitem a reutilização de propriedades e métodos entre objetos. Eles são especialmente úteis no contexto de herança e compartilhamento de comportamento.

