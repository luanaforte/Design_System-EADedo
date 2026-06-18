window.podcastOpen = function (clicked_id) {
	console.log("Clicked ID:", clicked_id);

	const iframeContainer = document.querySelector("#iframePodcastContainer");
	const audioPlayer = document.querySelector("#podcastAudio");

	if (!iframeContainer || !audioPlayer) {
		console.error(
			"Um ou mais elementos não foram encontrados para:",
			clicked_id,
		);
		return;
	}

	const podcastObj = window.podcasts
		? window.podcasts[clicked_id]
		: typeof podcasts !== "undefined"
			? podcasts[clicked_id]
			: null;

	if (!podcastObj) {
		console.error(
			"Podcast não encontrado no objeto podcasts para:",
			clicked_id,
		);
		return;
	}

	if (
		audioPlayer.src === podcastObj.link &&
		!iframeContainer.classList.contains("hidden")
	) {
		iframeContainer.classList.add("hidden");
		audioPlayer.pause();
		audioPlayer.src = "";
		return;
	}

	iframeContainer.classList.remove("hidden");
	audioPlayer.src = podcastObj.link;
	audioPlayer.play().catch(e => console.error("Audio play failed:", e));
	console.log("Audio src atualizado para:", audioPlayer.src);
};

function pauseAllIframes() {
	const iframes = document.querySelectorAll("iframe");
	const audios = document.querySelectorAll("audio");

	audios.forEach((audio) => {
		try {
			audio.pause();
		} catch (e) {}
	});

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
				"*",
			);
		}
		if (src.includes("vimeo.com")) {
			element.contentWindow?.postMessage('{"method":"pause"}', "*");
		}
	});
}

function closePodcastIfOpen() {
	const iframeContainer = document.querySelector("#iframePodcastContainer");
	const audioPlayer = document.querySelector("#podcastAudio");
	if (iframeContainer && !iframeContainer.classList.contains("hidden")) {
		iframeContainer.classList.add("hidden");
		if (audioPlayer) {
			audioPlayer.pause();
			audioPlayer.src = "";
		}
	}
}

function initPodcastEvents() {
	const sliders = document.querySelectorAll(
		".slider-wrapper, .slider-primario",
	);

	sliders.forEach((slider) => {
		// Garante que não vamos adicionar múltiplos event listeners
		if (slider.dataset.podcastInitialized) return;
		slider.dataset.podcastInitialized = "true";

		const btnPrev = slider.querySelector("#prev-slide, #slider_prevBtn");
		const btnNext = slider.querySelector("#next-slide, #slider_nextBtn");
		const indicators = slider.querySelector(".indicators");

		const handleNav = () => {
			pauseAllIframes();
			closePodcastIfOpen();
		};

		btnPrev?.addEventListener("click", handleNav);
		btnNext?.addEventListener("click", handleNav);
		if (indicators) indicators.addEventListener("click", handleNav);

		// Observador para fechar podcast caso o slider mude de forma programática ou swipe
		const slides = slider.querySelectorAll(".slider-primario-item, .slider-item");
		if (slides.length > 0) {
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.type === "attributes" && mutation.attributeName === "class") {
						handleNav();
					}
				});
			});
			slides.forEach(slide => observer.observe(slide, { attributes: true, attributeFilter: ["class"] }));
		}

		// Fecha o podcast se o usuário arrastar/scrollar o carrossel no touch
		const sliderItems = slider.querySelector(
			".slider-items, .carousel_content",
		);
		if (sliderItems) {
			sliderItems.addEventListener("scroll", () => {
				clearTimeout(sliderItems.scrollTimeout);
				sliderItems.scrollTimeout = setTimeout(() => {
					closePodcastIfOpen();
				}, 150);
			});
		}
	});
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initPodcastEvents);
} else {
	initPodcastEvents();
}
