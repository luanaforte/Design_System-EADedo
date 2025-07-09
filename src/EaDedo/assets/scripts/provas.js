const avaliacoes = [
  { dataInicio: "2025-08-01", horaInicio: "07:59", idAvaliacao: "ATV_final" },
  { dataInicio: "2025-08-01", horaInicio: "07:59", idAvaliacao: "ATV_sub" }
];

function liberar_avaliacoes() {
  const agora = new Date();

  avaliacoes.forEach(({ dataInicio, horaInicio, idAvaliacao }) => {
    const dataHora = new Date(`${dataInicio}T${horaInicio}`);
    const botao = document.getElementById(idAvaliacao);

    if (!botao) return;

    if (agora >= dataHora) {
      botao.classList.remove("disabled");
      botao.removeAttribute("aria-disabled");
    } else {
      if (!botao.classList.contains("disabled")) {
        botao.classList.add("disabled");
        botao.setAttribute("aria-disabled", "true");
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", liberar_avaliacoes);
