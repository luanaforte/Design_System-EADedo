var nowId = "percursoX_slider__videoaula";

function toggleLibras(clickedButton) {

  var nowx = document.getElementById(nowId);
  var whereToGo = document.getElementById(nowx.getAttribute("librasgo"));
const nowSliderState = slidersMap.get(nowId);
const currentIndex = nowSliderState?.getCurrentSlide?.() ?? 0;


  if (clickedButton.classList.contains("active")) {
     document.querySelectorAll(".librasX").forEach((e) => e.classList.remove("active"))
  } else {
    document.querySelectorAll(".librasX").forEach((e) => e.classList.add("active"))
  }
  nowx.classList.add("hidden");
  whereToGo.classList.remove("hidden");
  nowId = whereToGo.id;
const newSliderState = slidersMap.get(nowId);
newSliderState?.showSlide?.(currentIndex);
  // Dentro de um handler ou sempre que precisar saber:
  const slider = document.getElementById("percursoX_slider__videoaula"); // ou outro container
  const current = slider.querySelector(".slider-item-primario.active");

  console.log("Elemento visível:", current);
}