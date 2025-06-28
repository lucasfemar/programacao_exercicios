window.onload = function () {
  // Manipulação do DOM
  const layout = [
    [7, 8, 9, "/"],
    [4, 5, 6, "*"],
    [1, 2, 3, "-"],
    [0, ".", "=", "+"],
    ["c"],
  ];
  const OPERADORES = ["=", "+", "-", "*", "/"];
  const container = document.getElementById("container");

  layout.forEach((linha) => {
    linha.forEach((valor) => {
      const button = document.createElement("button");
      if (OPERADORES.includes(valor)) {
        button.setAttribute("class", "operador");
      }
      button.innerText = valor;
      container.append(button);
    });
  });
};
