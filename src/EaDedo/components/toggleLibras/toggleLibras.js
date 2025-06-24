function toggleLibras(clickedButton) {
  const content = document.querySelector(".videoaula_libras_content");
  const isHidden = content.classList.contains("hidden");

  content.classList.toggle("hidden");

  if (isHidden) {
    document.querySelectorAll(".button-pill.active").forEach((btn) => {
      btn.classList.remove("active");
    });
    clickedButton.classList.add("active");

    setTimeout(() => {
      content.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  } else {
    clickedButton.classList.remove("active");
  }
}

window.toggleLibras = toggleLibras;