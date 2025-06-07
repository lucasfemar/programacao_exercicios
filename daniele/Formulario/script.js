const cidades = ["São Paulo", "Bahia","Fortaleza", "Pernanbuco", "Recife" ]; //Vamos criar um banco de dados para coletar informações
const select = document.getElementById("cidade");
//forEach = para cada item de cidades armazenar em value do elemento option
cidades.forEach(cidade=>{
    const option = document.createElement("option");
    option.value = cidade;
    option.textContent = cidade;
    select.appendChild(option);
});
