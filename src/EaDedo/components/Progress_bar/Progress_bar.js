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
      const img = document.querySelector("img.icon.iconInInfo");
      if (img) {
        const svgId = value === 100 ? "#svg-concluido" : "#svg-nao-concluido";
        const svg = document.querySelector(svgId);

        if (svg) {
          const svgClone = svg.cloneNode(true);
          svgClone.removeAttribute("id"); // Evita IDs duplicados
          img.replaceWith(svgClone);
        }
      }
    }
  }
});
