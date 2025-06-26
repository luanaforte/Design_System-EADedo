function isMobile() {
	return window.matchMedia("(max-width: 768px)").matches;
}

function setupCollapse(idBase) {
	const btn = document.getElementById(`${idBase}-button`);
	const content = document.getElementById(`${idBase}--content`);
	const icon = document.getElementById(`${idBase}-button--icone`);
	const buttonLabel = Array.from(btn.childNodes).find(
		(node) => node.nodeType === Node.TEXT_NODE
	);

	function updateButtonText() {
		if (!buttonLabel) return;
		if (isMobile()) {
			buttonLabel.nodeValue = "";
		} else {
			const isHidden = content.classList.contains("hidden");
			buttonLabel.nodeValue = isHidden ? "Ver detalhes " : "Recolher ";
		}
	}

	btn.addEventListener("click", () => {
		const isHidden = content.classList.contains("hidden");

		if (isHidden) {
			content.classList.remove("hidden");
			if (!isMobile()) btn.classList.add("active");
			icon.classList.add("active-icon");
		} else {
			content.classList.add("hidden");
			btn.classList.remove("active");
			icon.classList.remove("active-icon");
		}

		updateButtonText();
	});

	window.addEventListener("resize", updateButtonText);
	updateButtonText();
}

window.addEventListener("DOMContentLoaded", () => {
	setupCollapse("collapse_orientacoes");
	setupCollapse("collapse_conteudo-programatico");
	// colocar todos que forem existindo
});