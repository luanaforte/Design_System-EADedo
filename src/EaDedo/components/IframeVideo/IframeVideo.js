var video1Url = "https://ead.unifor.br/ava/mod/url/view.php?id=4539292";
var video2Url = "";
var video3Url = "";
var video4Url = "";

function videoAulaProg(clicked_id) {
  console.log("Clicked ID:", clicked_id);

  // Seleciona os elementos com querySelector
  var imagem = document.querySelector("#imagem" + clicked_id);
  var video = document.querySelector("#video" + clicked_id);
  var iframe = document.querySelector("#iframe" + clicked_id);
  var loadingIcon = document.querySelector("#loadingIcon" + clicked_id);

  if (!imagem || !video || !iframe || !loadingIcon) {
    console.error(
      "Um ou mais elementos não foram encontrados para:",
      clicked_id
    );
    return;
  }

  // Exibe o ícone de carregamento e oculta a imagem
  imagem.style.display = "none";
  iframe.classList.remove("hidden"); // Exibe o iframe

  var videoUrl;
  // Seleção do vídeo com base no número clicado
  switch (clicked_id) {
    case "Video1":
      videoUrl = video1Url;
      break;
    case "Video2":
      videoUrl = video2Url;
      break;
    case "Video3":
      videoUrl = video3Url;
      break;
    case "Video4":
      videoUrl = video4Url;
      break;
    default:
      videoUrl = video1Url;
      break;
  }

  console.log("Video URL:", videoUrl);

  // Atualiza o src do iframe corretamente
  if (video) {
    video.src = videoUrl; // Define o novo src do iframe
    console.log("Iframe src atualizado para:", video.src);
  } else {
    console.error("Não foi possível encontrar o iframe para:", clicked_id);
  }
}
