// Captura o formulário pelo ID
const form = document.getElementById('cadastroForm');

// Lista de cidades
const cidades = ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza'];

// Preenche o dropdown com as cidades
const select = document.getElementById('cidade');

cidades.forEach(cidade => {
  const option = document.createElement('option');
  option.value = cidade;
  option.textContent = cidade;
  select.appendChild(option);
});

// Evento de envio do formulário
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita recarregar a página

  // Captura os valores dos campos do formulário
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const idade = document.getElementById('idade').value;
  const profissao = document.getElementById('profissao').value;
  const cidadeSelecionada = document.getElementById('cidade').value;
  const sexoSelecionado = ''; 
  const radios = document.querySelectorAll('input[name="sexo"]');

  radios.forEach(radio => {
    radio.addEventListener('change', function() {
      if (this.checked) {
        sexoSelecionado = this.value;
        console.log('Sexo selecionado:', this.value);
        // aqui você pode salvar o valor em uma variável, enviar para API, etc
      }
    });
  });

  // Exibe os dados no console
  console.log("DADOS DO FORMULÁRIO:");
  console.log("Nome:", nome);
  console.log("Email:", email);
  console.log("Idade:", idade);
  console.log("Profissão:", profissao);
  console.log("Sexo:", this.sexoSelecionado);
  console.log("Cidade:", cidadeSelecionada);
 
});
