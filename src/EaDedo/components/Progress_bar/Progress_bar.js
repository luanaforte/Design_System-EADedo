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

        // Define o svgId com base no título
        if (title === "Concluído") {
          svgId = "#svg-concluido";
        } else if (title === "Não concluído") {
          svgId = "#svg-nao-concluido";
        }

        // Substitui o <img> pelo SVG correspondente
        if (svgId) {
          const svg = document.querySelector(svgId);
          if (svg) {
            const svgClone = svg.cloneNode(true);
            svgClone.removeAttribute("id"); 
            svgClone.classList.remove("hidden"); 
            img.replaceWith(svgClone);
          } else {
            console.warn(`SVG com id ${svgId} não encontrado.`);
          }
        }
      }
    }
  }

  // ENVOLVE o texto "Concluído" ou "Não concluído" com <span> e aplica ID ao <svg>
  document.querySelectorAll('.progressEventInfo').forEach((el) => {
    el.childNodes.forEach((node) => {
      if (node.nodeType === 3) {
        const content = node.textContent.trim();

        if (content === "Concluído" || content === "Não concluído") {
          const span = document.createElement('span');

          if (content === "Concluído") {
            span.className = 'status-concluido';
          } else if (content === "Não concluído") {
            span.className = 'status-nao-concluido';
          }

          span.textContent = content;
          el.replaceChild(span, node);

          const svg = el.querySelector('svg');
          if (svg) {
            svg.id = content === "Concluído" ? 'svg-concluido' : 'svg-nao-concluido';
            svg.classList.remove("hidden"); 
          }
        }
      }
    });
  });
});
