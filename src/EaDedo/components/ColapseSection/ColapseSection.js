document.addEventListener("DOMContentLoaded", () => {
	// Inicializa todos fechados
	document.querySelectorAll(".collapse-content").forEach((content) => {
		content.style.maxHeight = null;
	});

	// Configura os toggles
	document.querySelectorAll(".collapse-toggle").forEach((btn) => {
		btn.setAttribute("aria-expanded", "false");
		btn.addEventListener("click", () => {
			const section = btn.closest(".collapse_section");
			const content = section.querySelector(".collapse-content");
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
	});
});

function toggleButtonText(btn, textShow, textHide) {
	for (const node of btn.childNodes) {
		if (node.nodeType === Node.TEXT_NODE) {
			node.textContent = btn.classList.contains("active")
				? textHide
				: textShow;
			break;
		}
	}
}