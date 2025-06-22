const display = document.querySelector(".resolution h1");

// Função que lida com todos os botões
function btn(valor) {
  const value = valor || this.innerText;

  // Limpar o display
  if (value === "C") {
    display.innerText = "Resposta";
    return;
  }

  // Calcular resultado
  if (value === "=") {
    try {
      const expressao = display.innerText
        .replace(/ × /g, " * ")
        .replace(/ ÷ /g, " / ");

      const resultado = eval(expressao);
      display.innerText = resultado;
    } catch {
      display.innerText = "Erro";
    }
    return;
  }

  // Adicionar número ou operador
  if (display.innerText === "Resposta" || display.innerText === "Erro") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}
document.addEventListener("keydown", (event) => {
  const tecla = event.key;

  if (!isNaN(tecla) || "+-*/().".includes(tecla)) {
    btn(tecla === "*" ? "X" : tecla === "/" ? ":" : tecla);
  }

  if (tecla === "Enter") {
    btn("=");
  }

  if (tecla === "Escape") {
    btn("C");
  }

  if (tecla === "Backspace") {
    const atual = display.innerText;
    if (atual !== "Resposta" && atual !== "Erro") {
      display.innerText = atual.slice(0, -1);
    }
  }
});
