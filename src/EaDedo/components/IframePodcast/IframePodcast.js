window.podcastOpen = function (clicked_id) {
	console.log("Clicked ID:", clicked_id);

	const iframeContainer = document.querySelector("#iframePodcastContainer");
	const iframe = document.querySelector("#podcastIframe");

	if (!iframeContainer || !iframe) {
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
		iframe.src === podcastObj.link &&
		!iframeContainer.classList.contains("hidden")
	) {
		iframeContainer.classList.add("hidden");
		iframe.src = "";
		return;
	}

	iframeContainer.classList.remove("hidden");
	iframe.src = podcastObj.link;
	console.log("Iframe src atualizado para:", iframe.src);
};

function pauseAllIframes() {
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
	const iframe = document.querySelector("#podcastIframe");
	if (iframeContainer && !iframeContainer.classList.contains("hidden")) {
		iframeContainer.classList.add("hidden");
		if (iframe) iframe.src = "";
	}
}

document.addEventListener("DOMContentLoaded", function () {
	// Suporta os dois padrões de slider
	const sliders = document.querySelectorAll(
		".slider-wrapper, .slider-primario",
	);

	sliders.forEach((slider) => {
		const btnPrev = slider.querySelector("#prev-slide, #slider_prevBtn");
		const btnNext = slider.querySelector("#next-slide, #slider_nextBtn");
		const indicators = slider.querySelector(".indicators");

		const handleNav = () => {
			pauseAllIframes();
			closePodcastIfOpen();
		};

		btnPrev?.addEventListener("click", handleNav);
		btnNext?.addEventListener("click", handleNav);
		indicators?.addEventListener("click", handleNav);

		// Fecha o podcast se o usuário arrastar/scrollar o carrossel no touch
		const sliderItems = slider.querySelector(
			".slider-items, .carousel_content",
		);
		if (sliderItems) {
			sliderItems.addEventListener("scroll", () => {
				// Usa timeout para evitar chamadas excessivas durante o scroll
				clearTimeout(sliderItems.scrollTimeout);
				sliderItems.scrollTimeout = setTimeout(() => {
					closePodcastIfOpen();
				}, 150);
			});
		}
	});
});
