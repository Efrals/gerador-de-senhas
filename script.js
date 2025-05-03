const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%&*+-=";

// Botão para gerar a senha
const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generate);

// Mostrar a senha
const result = document.getElementById("result");

// Gerar senha
function generate() {
  let characters = "";
  if (document.getElementById("lowercase-option").checked) {
    characters += lowercase;
  }
  if (document.getElementById("uppercase-option").checked) {
    characters += uppercase;
  }
  if (document.getElementById("number-option").checked) {
    characters += numbers;
  }
  if (document.getElementById("special-option").checked) {
    characters += symbols;
  }

  // Verifica o comprimento da senha e se é válido
  const length = Number(document.getElementById("password-length").value);

  // Verifica se chackbox estão marcados (para não exibir undefined)
  if (characters != "") {
    const length = Number(document.getElementById("password-length").value);
    // Construir a senha
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    // Exibir a senha gerada
    result.value = password;
  }
}

// Copiar a senha
const copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", copyPassword);

function copyPassword() {
  const copyText = result;

  // Selecionar o texto
  copyText.select();
  copyText.setSelectionRange(0, copyText.value.length); // Ou númeroa 128

  // Copiar o texto para a área de transferência
  navigator.clipboard.writeText(copyText.value);

  // Exibir mensagem de confirmação
  alert("Senha copiada para a área de transferência!");
}
