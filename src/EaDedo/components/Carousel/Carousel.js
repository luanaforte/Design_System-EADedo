document.querySelectorAll(".carousel-container").forEach((container) => {
  const carousel_content = container.querySelector(".carousel_content");
  const btnLeft = container.querySelector(".carousel_buttons.left");
  const btnRight = container.querySelector(".carousel_buttons.right");
  const indicatorsContainer = container.querySelector(".indicators");

  const items = carousel_content.children;
  const itemWidth = items[0]?.offsetWidth || 300;
  const totalItems = items.length;

  let visibleItems, totalPages, indicators;

  function initializeCarousel() {
    visibleItems = Math.floor(carousel_content.clientWidth / itemWidth);
    totalPages = Math.ceil(totalItems / visibleItems);


    const hasScroll = carousel_content.scrollWidth > carousel_content.clientWidth;

 
    indicatorsContainer.innerHTML = "";
    if (hasScroll && totalPages > 1) {
      for (let i = 0; i < totalPages; i++) {
        const indicator = document.createElement("button");
        indicator.classList.add("indicator");
        if (i === 0) indicator.classList.add("active");

        indicator.addEventListener("click", () => {
          carousel_content.scrollLeft = i * itemWidth * visibleItems;
        });

        indicatorsContainer.appendChild(indicator);
      }
      indicatorsContainer.style.display = "flex"; 
    } else {
      indicatorsContainer.style.display = "none";
    }

    indicators = indicatorsContainer.querySelectorAll(".indicator");

    updateNavButtons();
    updateIndicators();
  }

  function updateNavButtons() {
    const maxScrollLeft = carousel_content.scrollWidth - carousel_content.clientWidth;
    btnLeft.style.display = carousel_content.scrollLeft <= 0 ? "none" : "block";
    btnRight.style.display = carousel_content.scrollLeft >= maxScrollLeft - 5 ? "none" : "block";
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

  window.addEventListener("load", initializeCarousel);
  window.addEventListener("resize", initializeCarousel);
});
