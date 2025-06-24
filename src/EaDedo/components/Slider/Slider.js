let currentSlide = 0;

// Geração automática dos indicadores
function generateIndicators() {
  const slides = document.querySelectorAll(".slider-item-primario");
  const indicatorsContainer = document.querySelector(".slider-indicators");
  
  indicatorsContainer.innerHTML = ""; // Limpa caso já tenha algum

  slides.forEach((_, index) => {
    const button = document.createElement("button");
    button.className = "indicator";
    if (index === 0) button.classList.add("active");

    button.addEventListener("click", () => showSlide(index));
    indicatorsContainer.appendChild(button);
  });
}

function showSlide(index) {
  const slides = document.querySelectorAll(".slider-item-primario");
  const indicators = document.querySelectorAll(".indicator");

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === currentSlide);
  });

  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === currentSlide);
  });

  const sliderInner = document.querySelector(".slider-inner-primario");
  sliderInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(direction) {
  showSlide(currentSlide + direction);
}

// Inicialização
generateIndicators();
showSlide(currentSlide);

// Para funcionar no dist do npm (se precisar)
window.showSlide = showSlide;
window.moveSlide = moveSlide;
