import { useEffect, useState } from "react";
import conteudoOriginal from "./IframeVideo.html?raw";
import imgPlaceholder from "../../assets/imgs/image-placeholder.png";
import "./IframeVideo.css";

export default function IframeVideo() {
	const [conteudo, setConteudo] = useState("");

	useEffect(() => {
		const atualizado = conteudoOriginal.replace(
			"../../assets/imgs/image-placeholder.png",
			imgPlaceholder
		);
		setConteudo(atualizado);

		// injeta script
		const script = document.createElement("script");
		script.src = new URL("./IframeVideo.js", import.meta.url);
		script.type = "module";
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return conteudo ? (
		<>
			<div dangerouslySetInnerHTML={{ __html: conteudo }} />
			<div className="container-md margin__bottom--default">
				<div className="iframe-video__frame">
					<iframe
						src="https://www.youtube.com/embed/KbI_kF40yCU?si=SS6aQz0Z4oNXt4wX"
						allow=""
						allowfullscreen=""></iframe>
				</div>
			</div>
		</>
	) : null;
}
