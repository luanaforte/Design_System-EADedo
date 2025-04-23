document.addEventListener("DOMContentLoaded", () => {
  const progress = document.querySelector(".block_completion_progress");
  const percentage = document.querySelector(".progressPercentage");

  const destino_progress = document.querySelector("#Eadedo_progress");
  const destino_percentage = document.querySelector("#progress_percentage");

  if (progress && destino_progress) {
    destino_progress.appendChild(progress);
  }

  if (percentage && destino_percentage) {
    destino_percentage.appendChild(percentage);

    // Remove o prefixo e mantém apenas o número
    const text = percentage.textContent;
    const onlyPercentage = text.split(":")[1]?.trim();

    if (onlyPercentage) {
      percentage.textContent = onlyPercentage;

      const value = parseInt(onlyPercentage.replace("%", ""));
      if (value > 0) {
        percentage.classList.add("progressPercentage_start");
      }

      // Substituir o ícone <img> pelo SVG correspondente
      const img = document.querySelector(".progressEventInfo > img.iconInInfo");
      if (img) {
        const title = img.getAttribute("title");

        let svgId = null;
        let textColor = null;

        if (title === "Concluído") {
          svgId = "#svg-concluido";
          textColor = "var(--color-turquoise-600)";
        } else if (title === "Não concluído") {
          svgId = "#svg-nao-concluido";
          textColor = "var(--color-neutral-300)";
        }

        if (svgId) {
          const svg = document.querySelector(svgId);
          if (svg) {
            const svgClone = svg.cloneNode(true);
            svgClone.removeAttribute("id");
            svgClone.removeAttribute("hidden");
            img.replaceWith(svgClone);
          } else {
            console.warn(`SVG com id ${svgId} não encontrado.`);
          }
        }

        // Atualiza a cor do texto
        const textElement = document.querySelector(".progressEventInfo .action_link #text, .progressEventInfo .action_link .text");
        if (textElement && textColor) {
          textElement.style.color = textColor;
        }
      }
    }
  }
});
