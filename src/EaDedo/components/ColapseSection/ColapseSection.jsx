import { useEffect, useState } from "react";
import conteudo from "./ColapseSection.html?raw"; // HTML como string
import "./ColapseSection.css";

export default function ColapseSection() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		// Cria o script e adiciona ao DOM
		const script = document.createElement("script");
		script.src = new URL("./ColapseSection.js", import.meta.url);
		script.type = "module";
		document.body.appendChild(script);

		setLoaded(true);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return loaded ? <div dangerouslySetInnerHTML={{ __html: conteudo }} /> : null;
}
