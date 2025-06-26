   // URLs dos vídeos
   var video2Url = "https://ead.unifor.br/ava/mod/url/view.php?id=4583493"; // PA1 - videoaula01
   var video3Url = "https://ead.unifor.br/ava/mod/url/view.php?id=4583494"; // PA1 - videoaula02
   var video4Url = "https://ead.unifor.br/ava/mod/url/view.php?id=4583495"; // PA1 - videoaula03
   var video5Url = "https://ead.unifor.br/ava/mod/url/view.php?id=4583496"; // PA1 - videoaula04
   var video6Url = "https://ead.unifor.br/ava/mod/url/view.php?id=4583497"; // PA1 - entrevista
   var video7Url = "https://ead.unifor.br/ava/mod/url/view.php?id=4583500"; // PA1 - onecompiler

 // Função que troca a imagem pelo vídeo
 function videoAulaProg(clicked_id) {
   console.log("Clicked ID:", clicked_id);
   document.querySelectorAll(".librasX").forEach((e) => e.classList.remove("hidden"))
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

   imagem.style.display = "none";
   iframe.classList.remove("hidden");

   // Extrai o número do vídeo (ex: "Video3" -> "3")
   var videoNumber = clicked_id.replace("Video", "");

   // Monta o nome da variável (ex: "video3Url")
   var urlVarName = "video" + videoNumber + "Url";

   // Busca a URL da variável no escopo global
   var videoUrl = window[urlVarName] || video1Url;

   console.log("Video URL:", videoUrl);

   // Atualiza o iframe
   video.src = videoUrl;
   console.log("Iframe src atualizado para:", video.src);

	 // -------- Libras --------
const imagemLibras = document.querySelector("#imagem" + clicked_id + "_libras");
const videoLibras = document.querySelector("#video" + clicked_id + "_libras");
const iframeLibras = document.querySelector("#iframe" + clicked_id + "_libras");
const loadingLibras = document.querySelector("#loadingIcon" + clicked_id + "_libras");

if (imagemLibras && videoLibras && iframeLibras) {
 imagemLibras.style.display = "none";
 iframeLibras.classList.remove("hidden");
 videoLibras.src = videoUrl;
} else {
 console.warn("Libras correspondente não encontrado para:", clicked_id);
}
 }

 document.addEventListener("DOMContentLoaded", function () {
	 const imagens = Array.from(document.querySelectorAll("[id^='imagemVideo']")).filter(img => !img.id.includes("_"));


   imagens.forEach((imagem) => {
	 const id = imagem.id.replace("imagem", "");
	 imagem.addEventListener("click", function () {
	   videoAulaProg(id);
	 });
   });
 });
  // Clicar no vídeo Libras
  const imagensLibras = Array.from(document.querySelectorAll("[id^='imagemVideo']"))
 .filter(img => img.id.includes("_libras"));
imagensLibras.forEach((imagem) => {
 const id = imagem.id.replace("imagem", "").replace("_libras", "");
 imagem.addEventListener("click", function () {
   videoAulaProg(id); // Reutilizamos mesma função
 });
});