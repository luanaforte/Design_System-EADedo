const chatBox = document.getElementById("chatBox");
const toggleButton = document.getElementById("chatToggle");

toggleButton.addEventListener("click", (e) => {
  e.stopPropagation();
  chatBox.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (
    chatBox.classList.contains("open") &&
    !chatBox.contains(e.target) &&
    !toggleButton.contains(e.target)
  ) {
    chatBox.classList.remove("open");
  }
});
