import { useEffect, useState } from "react";
import "./IframePodcast.css";

export default function IframePodcast() {
	const [conteudo, setConteudo] = useState("");

	useEffect(() => {
		fetch("/src/EaDedo/components/IframePodcast/IframePodcast.html")
			.then((res) => res.text())
			.then((text) => {
				setConteudo(text);
			});

		// Definindo dados de podcast globais para que o IframePodcast.js consiga ler.
		window.podcasts = {
			podcast1: {
				link: "https://www.youtube.com/embed/KbI_kF40yCU?si=SS6aQz0Z4oNXt4wX",
			},
			podcast2: {
				link: "https://www.youtube.com/embed/KbI_kF40yCU?si=SS6aQz0Z4oNXt4wX",
			},
			podcast3: {
				link: "https://www.youtube.com/embed/KbI_kF40yCU?si=SS6aQz0Z4oNXt4wX",
			},
		};

		const scriptCarousel = document.createElement("script");
		scriptCarousel.src = new URL("../Carousel/Carousel.js", import.meta.url);
		scriptCarousel.type = "module";
		document.body.appendChild(scriptCarousel);

		const script = document.createElement("script");
		script.src = new URL("./IframePodcast.js", import.meta.url);
		script.type = "module";
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
			document.body.removeChild(scriptCarousel);
			delete window.podcasts;
		};
	}, []);

	return conteudo ? (
		<div dangerouslySetInnerHTML={{ __html: conteudo }} />
	) : null;
}
