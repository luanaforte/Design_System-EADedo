

document.querySelectorAll(".carousel-container").forEach((container) => {
  const carousel_content = container.querySelector(".carousel_content");
  const btnLeft = container.querySelector(".carousel_buttons.left");
  const btnRight = container.querySelector(".carousel_buttons.right");
  const indicatorsContainer = container.querySelector(".indicators");

  const itemWidth = 300; // Ajuste para o tamanho médio dos seus itens
  const totalItems = Math.ceil(
    carousel_content.scrollWidth / carousel_content.clientWidth
  );

  // Cria os indicadores
  for (let i = 0; i < totalItems; i++) {
    const indicator = document.createElement("button");
    indicator.classList.add("indicator");
    if (i === 0) indicator.classList.add("active");

    indicator.addEventListener("click", () => {
      carousel_content.scrollLeft = i * carousel_content.clientWidth;
    });

    indicatorsContainer.appendChild(indicator);
  }

  const indicators = indicatorsContainer.querySelectorAll(".indicator");

  function updateNavButtons() {
    const maxScrollLeft =
      carousel_content.scrollWidth - carousel_content.clientWidth;
    btnLeft.style.display =
      carousel_content.scrollLeft <= 0 ? "none" : "block";
    btnRight.style.display =
      carousel_content.scrollLeft >= maxScrollLeft - 5
        ? "none"
        : "block";
  }

  function updateIndicators() {
    const index = Math.round(
      carousel_content.scrollLeft / carousel_content.clientWidth
    );

    indicators.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  btnLeft.addEventListener("click", () => {
    carousel_content.scrollLeft -= carousel_content.clientWidth;
  });

  btnRight.addEventListener("click", () => {
    carousel_content.scrollLeft += carousel_content.clientWidth;
  });

  carousel_content.addEventListener("scroll", () => {
    updateNavButtons();
    updateIndicators();
  });

  window.addEventListener("load", () => {
    updateNavButtons();
    updateIndicators();
  });
});
