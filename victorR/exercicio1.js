function somar(a, b, c, d, Callback) {
  const result = a + b + c + d;
  Callback(result);
}

function print(valor) {
  console.log(valor);
}

somar(5, 4, 3, 2, print);