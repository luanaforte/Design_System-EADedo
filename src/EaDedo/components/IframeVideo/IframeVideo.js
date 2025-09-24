// Função que troca a imagem pelo vídeo
function videoAulaProg(clicked_id) {
	console.log("Clicked ID:", clicked_id);
	try {
		if (
			document
				.querySelector("#iframe" + clicked_id)
				.closest(".iframe-video")
				.querySelector("button[data-libras]")
				.getAttribute("data-libras") == "true"
		) {
			document
				.querySelector("#iframe" + clicked_id)
				.closest(".iframe-video")
				.querySelector("button[data-libras]")
				.classList.remove("hidden");
		}
	} catch (error) {
		document.querySelector("#iframe" + clicked_id).classList.remove("hidden");
	}

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

	const videoKey = "video" + clicked_id;
	const videoObj = videos[videoKey];

	if (!videoObj) {
		console.error("Vídeo não encontrado no objeto videos para:", videoKey);
		return;
	}

	video.src = videoObj.video;
	console.log("Iframe src atualizado para:", video.src);
}

document.addEventListener("DOMContentLoaded", function () {
	const imagens = Array.from(
		document.querySelectorAll("[id^='imagemVideo']")
	).filter((img) => !img.id.includes("_"));

	imagens.forEach((imagem) => {
		const id = imagem.id.replace("imagem", "");
		imagem.addEventListener("click", function () {
			videoAulaProg(id);
		});
	});
});

function toggleLibras(clickedButton) {
	const iframe = clickedButton.closest(".iframe-video").querySelector("iframe");
	const textIframe = clickedButton.closest(".iframe-video").querySelector("p");
	if (!iframe) {
		console.error("Vídeo não encontrado:", clickedButton.id);
		return;
	}

	const currentSrc = iframe.getAttribute("src");
	const videoLinks = videos[iframe.id];

	if (!videoLinks) {
		console.error("Links não definidos para:", iframe.id);
		return;
	}

	if (currentSrc === videoLinks.video) {
		iframe.src = videoLinks["video_libras"];
		if (!textIframe.textContent.includes("- libras")) {
			textIframe.textContent += " - libras";
		}
	} else {
		iframe.src = videoLinks.video;
		textIframe.textContent = textIframe.textContent.replace(" - libras", "");
	}
}
