function minhaPromise() {
  return new Promise((resolve, reject) => {
    let sucesso = true; // Simulando um resultado

    setTimeout(() => {
      if (sucesso) {
        resolve("Operação concluída com sucesso!");
      } else {
        reject("Algo deu errado...");
      }
    }, 2000); // Simula um atraso de 2 segundos
  });
}
async function esperarPromise() {
  const result = await minhaPromise();
  console.log("Success: ", result);
}

console.log("Linha 13");
esperarPromise();
console.log("Linha 21");
