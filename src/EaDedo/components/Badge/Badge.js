document.addEventListener("DOMContentLoaded", (event) => {
  var naolidas = document.querySelector(".badge-secondary");
  if (typeof naolidas != "undefined" && naolidas != null) {
    notifica = naolidas.innerText.match(/(\d+)/)[0];

    var avisosnotifica = document.querySelectorAll(
      ".badge-notification__content"
    );
    avisosnotifica[0].after(notifica);
  } else {
    var elipse_avisos = document.querySelectorAll(".badge-notification");
    elipse_avisos[0].classList.add("d-none");
  }

  var avisos = document.querySelector(`.modtype_forum`);
  avisos.classList.add("d-none");
});
