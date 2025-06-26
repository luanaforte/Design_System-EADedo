const slidersMap = new Map();
    function createSlider(sliderContainer) {
      let currentSlide = 0;

      const slides = sliderContainer.querySelectorAll(".slider-item-primario");
      const indicatorsContainer =
        sliderContainer.querySelector(".slider-indicators");
      const sliderInner = sliderContainer.querySelector(
        ".slider-inner-primario"
      );

      function generateIndicators() {
        indicatorsContainer.innerHTML = "";

        slides.forEach((_, index) => {
          const button = document.createElement("button");
          button.className = "indicator";
          if (index === 0) button.classList.add("active");

          button.addEventListener("click", () => showSlide(index));
          indicatorsContainer.appendChild(button);
        });
      }

      function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === currentSlide);
        });

        const indicators = indicatorsContainer.querySelectorAll(".indicator");
        indicators.forEach((indicator, i) => {
          indicator.classList.toggle("active", i === currentSlide);
        });

        sliderInner.style.transform = `translateX(-${currentSlide * 100}%)`;
      }

      function moveSlide(direction) {
        showSlide(currentSlide + direction);
      }

      generateIndicators();
      showSlide(currentSlide);
	  slidersMap.set(sliderContainer.id, {
    showSlide,
    getCurrentSlide: () => currentSlide,
  });
      return { showSlide, moveSlide };
    }

    // Inicializar todos os sliders na página
    document.querySelectorAll(".slider-primario").forEach((slider) => {
      const sliderInstance = createSlider(slider);

      slider
        .querySelector(".button-next")
        ?.addEventListener("click", () => sliderInstance.moveSlide(1));
      slider
        .querySelector(".button-prev")
        ?.addEventListener("click", () => sliderInstance.moveSlide(-1));
    });