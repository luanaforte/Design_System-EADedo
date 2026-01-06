// Função que troca a imagem pelo vídeo
function videoAulaProg(clicked_id) {
	console.log("Clicked ID:", clicked_id);

	try {
		const buttonLibras = document
			.querySelector("#iframe" + clicked_id)
			.closest(".iframe-video")
			.querySelector("button[data-libras]");

		if (buttonLibras?.getAttribute("data-libras") === "true") {
			buttonLibras.classList.remove("hidden");
		}
	} catch (error) {
		document.querySelector("#iframe" + clicked_id)?.classList.remove("hidden");
	}

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
		imagem.addEventListener("click", () => videoAulaProg(id));
	});
});

function pauseAllVideos() {
	const iframes = document.querySelectorAll("iframe");

	iframes.forEach((element) => {
		const src = element.src || "";

		if (!src.includes("youtube") && !src.includes("vimeo")) {
			try {
				element.contentWindow?.postMessage({ action: "pause" }, "*");
			} catch (e) {}
		}

		if (src.includes("youtube.com") || src.includes("youtu.be")) {
			if (!src.includes("enablejsapi=1")) {
				const newSrc = src + (src.includes("?") ? "&" : "?") + "enablejsapi=1";
				element.src = newSrc;
			}

			element.contentWindow?.postMessage(
				JSON.stringify({
					event: "command",
					func: "pauseVideo",
				}),
				"*"
			);
		}
		if (src.includes("vimeo.com")) {
			element.contentWindow?.postMessage('{"method":"pause"}', "*");
		}
	});
}

document.addEventListener("DOMContentLoaded", function () {
	const sliders = document.querySelectorAll(".slider-primario");

	sliders.forEach((slider) => {
		const btnPrev = slider.querySelector("#slider_prevBtn");
		const btnNext = slider.querySelector("#slider_nextBtn");

		btnPrev?.addEventListener("click", pauseAllVideos);
		btnNext?.addEventListener("click", pauseAllVideos);
	});
});

// Alternar vídeo Libras
function toggleLibras(clickedButton) {
	const iframe = clickedButton
		.closest(".iframe-video")
		?.querySelector("iframe");
	const textIframe = clickedButton.closest(".iframe-video")?.querySelector("p");

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
