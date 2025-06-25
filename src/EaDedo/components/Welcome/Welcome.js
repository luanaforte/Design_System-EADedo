document.addEventListener("DOMContentLoaded", () => {
  const profileLink = document.querySelector("a[title='Ver perfil']");
  const userNameContainer = document.querySelector("#nomeUsuario");

  if (profileLink && userNameContainer) {
    // Evita duplicidade do clone
    if (!document.getElementById("elem2")) {
      const clone = profileLink.cloneNode(true);
      clone.id = "elem2";
      userNameContainer.after(clone);

      const name = clone.textContent.trim();
      if (name) {
        localStorage.setItem("userName", name);
      }
    }
  }
});