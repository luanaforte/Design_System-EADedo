document.addEventListener("DOMContentLoaded", () => {

try {
	// [2] Funcao para alterar texto do botÃ£o
	function toggleButtonText(btn, textShow, textHide) {
	const buttonTextElement = btn.querySelector(".button-text");
	if (buttonTextElement) {
		buttonTextElement.textContent = btn.classList.contains("active")
		? textHide
		: textShow;
	}
	}

	// [3] Fecha todo conteudo inicialmente
	document.querySelectorAll(".collapse-content").forEach((content) => {
	content.style.maxHeight = null;
	});

	// [4] Configura os botoes de toggle
	document.querySelectorAll(".collapse-toggle").forEach((btn, i) => {

	try {
		btn.setAttribute("aria-expanded", "false");

		btn.addEventListener("click", () => {

		const section = btn.closest(".collapse_section");
		if (!section) {
			console.warn(`[5.${i}] .collapse_section nÃ£o encontrado`);
			return;
		}

		const content = section.querySelector(".collapse-content");
		if (!content) {
			console.warn(`[5.${i}] .collapse-content nÃ£o encontrado`);
			return;
		}

		const svgIcon = btn.querySelector("svg:last-child");

		const isOpen =
			content.style.maxHeight && content.style.maxHeight !== "0px";

		if (isOpen) {
			content.style.maxHeight = null;
			btn.classList.remove("active");
			btn.setAttribute("aria-expanded", "false");
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
			btn.classList.add("active");
			btn.setAttribute("aria-expanded", "true");
		}

		toggleButtonText(btn, "Ver detalhes", "Recolher");

		if (svgIcon) {
			svgIcon.style.transform = btn.classList.contains("active")
			? "rotate(180deg)"
			: "rotate(0deg)";
		}
		});
	} catch (innerError) {
		console.error(`[4.${i}] Erro ao configurar botÃ£o de Ã­ndice ${i}`);
		console.error(innerError);
	}
	});
} catch (error) {
	console.error("[X] Erro geral no DOMContentLoaded");
	console.error(error);
}
});
