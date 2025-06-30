const videos = {
  videoVideo1: {
      video: "https://ead.unifor.br/ava/mod/url/view.php?id=4583493",
      video_libras: "https://www.google.com.br" // aqui o link correto de libras para o vídeo 1
  },
  videoVideo2: {
      video: "https://ead.unifor.br/ava/mod/url/view.php?id=4583494",
      video_libras: "https://www.youtube.com.br" // link libras para vídeo 2
  },
  videoVideo3: {
      video: "https://ead.unifor.br/ava/mod/url/view.php?id=4583495",
      video_libras: "https://www.youtube.com.br" // link libras para vídeo 2
  }
};
// Função que troca a imagem pelo vídeo
function videoAulaProg(clicked_id) {
  console.log("Clicked ID:", clicked_id);

  // Mostrar botões libras
  document.querySelectorAll(".librasX").forEach((e) => e.classList.remove("hidden"));

  var imagem = document.querySelector("#imagem" + clicked_id);
  var video = document.querySelector("#video" + clicked_id);
  var iframe = document.querySelector("#iframe" + clicked_id);
  var loadingIcon = document.querySelector("#loadingIcon" + clicked_id);

  if (!imagem || !video || !iframe || !loadingIcon) {
      console.error("Um ou mais elementos não foram encontrados para:", clicked_id);
      return;
  }

  imagem.style.display = "none";
  iframe.classList.remove("hidden");

  // Monta o id do vídeo no objeto videos, exemplo: "videoVideo1", "videoVideo2"
  const videoKey = "video" + clicked_id;

  // Busca no objeto videos a URL normal
  const videoObj = videos[videoKey];
  if (!videoObj) {
      console.error("Vídeo não encontrado no objeto videos para:", videoKey);
      return;
  }

  // Atualiza o src do iframe com a URL normal
  video.src = videoObj.video;
  console.log("Iframe src atualizado para:", video.src);

}


document.addEventListener("DOMContentLoaded", function() {
  const imagens = Array.from(
      document.querySelectorAll("[id^='imagemVideo']")
  ).filter((img) => !img.id.includes("_"));

  imagens.forEach((imagem) => {
      const id = imagem.id.replace("imagem", "");
      imagem.addEventListener("click", function() {
          videoAulaProg(id);
      });
  });
});