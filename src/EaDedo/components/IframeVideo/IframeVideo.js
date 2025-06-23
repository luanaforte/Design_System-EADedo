var video1Url = "https://www.youtube.com/embed/DmHAyQCN0mM?si=mWx6BD5KtMzUluUl";
var video2Url = "";
var video3Url = "";
var video4Url = "";

export function videoAulaProg(clicked_id) {
	console.log("Clicked ID:", clicked_id);

	const imagem = document.querySelector("#imagem" + clicked_id);
	const video = document.querySelector("#video" + clicked_id);
	const iframe = document.querySelector("#iframe" + clicked_id);
	const loadingIcon = document.querySelector("#loadingIcon" + clicked_id);

	if (!imagem || !video || !iframe || !loadingIcon) {
		console.error(
			"Um ou mais elementos não foram encontrados para:",
			clicked_id
		);
		return;
	}

	// Esconde a imagem e mostra o iframe
	imagem.style.display = "none";
	iframe.classList.remove("hidden");

	// 🔥 Pega dinamicamente a variável correspondente
	const videoVarName = clicked_id.toLowerCase() + "url";
	const videoUrl = window[videoVarName] || video1Url;

	console.log("Video URL:", videoUrl);

	// Atualiza o src do iframe
	video.src = videoUrl;
	console.log("Iframe src atualizado para:", video.src);
}

// para subir no dist do npm
window.videoAulaProg = videoAulaProg;
