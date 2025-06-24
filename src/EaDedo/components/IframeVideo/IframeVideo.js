// URLs dos vídeos
var video1Url =
"https://www.youtube.com/embed/DmHAyQCN0mM?si=mWx6BD5KtMzUluUl";
var video2Url = "";
var video3Url = "";
var video4Url = "";
var video5Url = "";
// Continue adicionando video6Url, video7Url...

// Função que troca a imagem pelo vídeo
function videoAulaProg(clicked_id) {
console.log("Clicked ID:", clicked_id);

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
}

document.addEventListener("DOMContentLoaded", function () {
const imagens = document.querySelectorAll("[id^='imagemVideo']");
imagens.forEach((imagem) => {
	const id = imagem.id.replace("imagem", "");
	imagem.addEventListener("click", function () {
		videoAulaProg(id);
	});
});
});