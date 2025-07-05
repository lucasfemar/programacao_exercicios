// Captura o formulário pelo ID
const form = document.getElementById("cadastroForm");

// Lista de cidades
const cidades = [
  "São Paulo",
  "Rio de Janeiro",
  "Brasília",
  "Salvador",
  "Fortaleza",
];

// Preenche o dropdown com as cidades
const select = document.getElementById("cidade");

cidades.forEach((cidade) => {
  const option = document.createElement("option");
  option.value = cidade;
  option.textContent = cidade;
  select.appendChild(option);
});

// Evento de envio do formulário
form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Evita recarregar a página

  // Captura os valores dos campos do formulário
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const idade = document.getElementById("idade").value;
  const profissao = document.getElementById("profissao").value;
  const cidadeSelecionada = document.getElementById("cidade").value;

  // Captura o sexo selecionado
  const sexoSelecionado =
    document.querySelector('input[name="sexo"]:checked')?.value || "";

  // Exibe os dados no console
  // console.log("DADOS DO FORMULÁRIO:");
  // console.log("Nome:", nome);
  // console.log("Email:", email);
  // console.log("Idade:", idade);
  // console.log("Profissão:", profissao);
  // console.log("Sexo:", sexoSelecionado);
  // console.log("Cidade:", cidadeSelecionada);

  const usuario = {
    nome: nome,
    email,
    idade,
    profissao,
    cidadeSelecionada,
    sexoSelecionado,
  };
  console.log(usuario);

  await criar_usuario(usuario);
});

async function criar_usuario(usuario) {
  const response = await fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });
}
