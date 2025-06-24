document.querySelectorAll(".carousel-container").forEach((container) => {
  const carousel_content = container.querySelector(".carousel_content");
  const btnLeft = container.querySelector(".carousel_buttons.left");
  const btnRight = container.querySelector(".carousel_buttons.right");
  const indicatorsContainer = container.querySelector(".indicators");

  const items = carousel_content.children;
  const itemWidth = items[0]?.offsetWidth || 300; // pega largura do primeiro item como referência
  const totalItems = items.length;
  const visibleItems = Math.floor(
    carousel_content.clientWidth / itemWidth
  );
  const totalPages = Math.ceil(totalItems / visibleItems);

  // Cria os indicadores
  indicatorsContainer.innerHTML = ""; // limpa antes de gerar
  for (let i = 0; i < totalPages; i++) {
    const indicator = document.createElement("button");
    indicator.classList.add("indicator");
    if (i === 0) indicator.classList.add("active");

    indicator.addEventListener("click", () => {
      carousel_content.scrollLeft = i * itemWidth * visibleItems;
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
    const scrollPos = carousel_content.scrollLeft;
    const index = Math.round(scrollPos / (itemWidth * visibleItems));

    indicators.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  btnLeft.addEventListener("click", () => {
    carousel_content.scrollLeft -= itemWidth * visibleItems;
  });

  btnRight.addEventListener("click", () => {
    carousel_content.scrollLeft += itemWidth * visibleItems;
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
