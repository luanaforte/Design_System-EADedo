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
    const onlyPercentage = percentage.textContent.split(":")[1]?.trim();
    if (onlyPercentage) {
      percentage.textContent = onlyPercentage;

      const value = parseInt(onlyPercentage.replace("%", ""));
      if (value > 0) {
        percentage.classList.add("progressPercentage_start");
      }
    }
  }

  // Trata todos os elementos com status de progresso
  document.querySelectorAll(".progressEventInfo").forEach((el) => {
    const img = el.querySelector("img.iconInInfo");
    if (img) {
      const title = img.getAttribute("title");
      const svgMap = {
        "Concluído": "#svg-concluido",
        "Não concluído": "#svg-nao-concluido"
      };
      const svgId = svgMap[title];
      const svgTemplate = document.querySelector(svgId);

      if (svgTemplate) {
        const svgClone = svgTemplate.cloneNode(true);
        svgClone.removeAttribute("id");
        svgClone.classList.remove("hidden");
        img.replaceWith(svgClone);
      }
    }

    // Substitui o texto por <span> com classe
    el.childNodes.forEach((node) => {
      if (node.nodeType === 3) {
        const text = node.textContent.trim();
        if (text === "Concluído" || text === "Não concluído") {
          const span = document.createElement("span");
          span.className = text === "Concluído" ? "status-concluido" : "status-nao-concluido";
          span.textContent = text;
          el.replaceChild(span, node);
        }
      }
    });
  });
});
