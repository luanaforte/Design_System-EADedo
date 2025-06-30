(function() {
  let slider;
  let indicatorsContainer;
  let slides;
  let prevBtn;
  let nextBtn;
  let currentIndex = 0;
  let isAnimating = false;

  function setupElements() {
      slider = document.querySelector(".slider-primario");
      if (!slider) return false;

      indicatorsContainer = slider.querySelector(".indicators");
      slides = slider.querySelectorAll(".slider-primario-item");
      prevBtn = slider.querySelector("#slider_prevBtn");
      nextBtn = slider.querySelector("#slider_nextBtn");

      return slider && indicatorsContainer && slides.length && prevBtn && nextBtn;
  }

  function createIndicators() {
      if (!indicatorsContainer || !slides?.length) return;

      indicatorsContainer.innerHTML = "";
      slides.forEach((_, index) => {
          const dot = document.createElement("div");
          dot.classList.add("indicator");
          if (index === currentIndex) dot.classList.add("active");
          dot.addEventListener("click", () => {
              slideTo(index, index > currentIndex ? "next" : "prev");
          });
          indicatorsContainer.appendChild(dot);
      });

      console.log("✅ Indicadores criados:", indicatorsContainer.children.length);
  }

  function updateIndicators() {
      const dots = indicatorsContainer?.querySelectorAll(".indicator") || [];
      dots.forEach((dot, idx) => {
          dot.classList.toggle("active", idx === currentIndex);
      });
  }

  function slideTo(newIndex, direction) {
      if (!slides || isAnimating || newIndex === currentIndex) return;

      const totalSlides = slides.length;
      const oldSlide = slides[currentIndex];
      newIndex = (newIndex + totalSlides) % totalSlides;
      const newSlide = slides[newIndex];

      if (!oldSlide || !newSlide) return;

      isAnimating = true;

      newSlide.classList.remove("enter-left", "enter-right", "active");
      newSlide.style.transition = "none";
      newSlide.classList.add(direction === "next" ? "enter-right" : "enter-left");

      void newSlide.offsetWidth;

      oldSlide.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      newSlide.style.transition = "transform 0.5s ease, opacity 0.5s ease";

      oldSlide.classList.add(direction === "next" ? "enter-left" : "enter-right");
      oldSlide.classList.remove("active");

      newSlide.classList.remove("enter-left", "enter-right");
      newSlide.classList.add("active");

      newSlide.addEventListener("transitionend", function handler() {
          oldSlide.classList.remove("enter-left", "enter-right");
          oldSlide.style.transition = "";
          newSlide.style.transition = "";
          newSlide.removeEventListener("transitionend", handler);
          currentIndex = newIndex;
          updateIndicators();
          isAnimating = false;
      });
  }

  function initSlider() {
      if (!setupElements()) return;

      console.log("Slider inicializado.");
      createIndicators();

      prevBtn.onclick = () => slideTo(currentIndex - 1, "prev");
      nextBtn.onclick = () => slideTo(currentIndex + 1, "next");
  }

  // Observa se os indicadores sumiram e recria
  setInterval(() => {
      const sliderExists = document.querySelector(".slider-primario");
      const indicatorsExist = document.querySelector(".indicators");
      const indicatorsEmpty = indicatorsExist && indicatorsExist.children.length === 0;

      if (sliderExists && indicatorsExist && indicatorsEmpty) {
          console.warn("⚠️ Indicadores sumiram — recriando...");
          setupElements(); 
          createIndicators();
      }
  }, 500); 

  // Inicia ao carregar DOM
  document.addEventListener("DOMContentLoaded", () => {
      initSlider();
  });

  // Também observa o body (em caso de DOM dinâmico)
  const observer = new MutationObserver(() => {
      if (!slider || !indicatorsContainer || !slides?.length) {
          initSlider(); // se perdeu o slider, reinicializa
      }
  });

  observer.observe(document.body, {
      childList: true,
      subtree: true
  });
})();