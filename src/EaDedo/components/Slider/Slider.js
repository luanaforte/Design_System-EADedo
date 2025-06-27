const slider = document.querySelector(".slider-primario");
const slides = slider.querySelectorAll(".slider-primario-item");
const prevBtn = slider.querySelector("#slider_prevBtn");
const nextBtn = slider.querySelector("#slider_nextBtn");
const indicatorsContainer = slider.querySelector(".indicators");

let currentIndex = 0;
let isAnimating = false;

// Cria os indicadores dinamicamente
function createIndicators() {
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
}

// Atualiza o estado dos indicadores
function updateIndicators() {
  const dots = indicatorsContainer.querySelectorAll(".indicator");
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentIndex);
  });
}

function slideTo(newIndex, direction) {
  if (isAnimating || newIndex === currentIndex) return;
  isAnimating = true;

  const oldSlide = slides[currentIndex];
  const newSlide = slides[(newIndex + slides.length) % slides.length];

  newSlide.classList.remove("enter-left", "enter-right", "active");
  newSlide.style.transition = "none";
  if (direction === "next") {
    newSlide.classList.add("enter-right");
  } else {
    newSlide.classList.add("enter-left");
  }

  newSlide.offsetHeight;

  // Anima slides
  oldSlide.style.transition = "transform 0.5s ease, opacity 0.5s ease";
  newSlide.style.transition = "transform 0.5s ease, opacity 0.5s ease";

  // Move o slide antigo para fora
  if (direction === "next") {
    oldSlide.classList.add("enter-left");
  } else {
    oldSlide.classList.add("enter-right");
  }
  oldSlide.classList.remove("active");

  // Move o novo slide para o centro
  newSlide.classList.remove("enter-left", "enter-right");
  newSlide.classList.add("active");

  updateIndicators();

  const onTransitionEnd = () => {
    oldSlide.classList.remove("enter-left", "enter-right");
    oldSlide.style.transition = "";
    newSlide.style.transition = "";
    currentIndex = (newIndex + slides.length) % slides.length;
    isAnimating = false;
    oldSlide.removeEventListener("transitionend", onTransitionEnd);
  };

  oldSlide.addEventListener("transitionend", onTransitionEnd);
}

slider_prevBtn.onclick = () => {
  slideTo(currentIndex - 1, "prev");
};

nextBtn.onclick = () => {
  slideTo(currentIndex + 1, "next");
};

createIndicators();