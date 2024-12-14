# Exercícios sobre Object Prototype em JavaScript

## Exercício 1: Herança com Prototótipos

Crie dois objetos para simular uma herança simples:

1. Crie um objeto chamado `veiculo` com as seguintes propriedades e métodos:

    - Propriedade: `tipo` com o valor `"Veiculo Generico"`.
    - Método: `descrever()` que imprime no console:
        ```javascript
        console.log(`Esse é um ${this.tipo}.`);
        ```

2. Crie um novo objeto chamado `carro` que herde de `veiculo` e adicione as seguintes propriedades:

    - Propriedade: `tipo` com o valor `"Carro"`.
    - Propriedade: `marca` com o valor `"Toyota"`.

3. Use o método `descrever()` para exibir o tipo do objeto `carro`.

4. Adicione uma nova propriedade chamada `rodas` ao protótipo de `veiculo` com o valor `4`.

5. Verifique se o objeto `carro` também tem a propriedade `rodas` e imprima o valor no console.

---

## Exercício 2: Propriedade e Métodos Compartilhados

1. Crie um objeto chamado `pessoa` com as seguintes propriedades e métodos:

    - Propriedade: `nome` com o valor `"Nome Padrão"`.
    - Método: `cumprimento()` que imprime no console:
        ```javascript
        console.log(`Olá, meu nome é ${this.nome}`);
        ```

2. Use `Object.create` para criar um novo objeto chamado `estudante` que herde de `pessoa`.

3. Adicione ao objeto `estudante` a propriedade `nome` com o valor `"Alice"`.

4. Use o método `cumprimento()` em `estudante`. O que é exibido no console?

5. Modifique o método `cumprimento()` diretamente no protótipo `pessoa` para imprimir:

    ```javascript
    console.log(`Ola! Eu sou ${this.nome}. Prazer em conhece-lo!`);
    ```

6. Use novamente o método `cumprimento()` em `estudante`. O que mudou?

---
