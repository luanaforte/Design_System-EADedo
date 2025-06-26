function isMobile() {
	return window.matchMedia("(max-width: 768px)").matches;
}

document.querySelectorAll(".collapse_section").forEach(section => {
	const btn = section.querySelector("#collapse_section-button");
	const content = section.querySelector(".collapse-content");
	const icon = btn.querySelector("svg");
	const iframe = section.querySelector("iframe");

	btn.addEventListener("click", () => {
		const isOpen = content.style.maxHeight && content.style.maxHeight !== "0px";

		if (isOpen) {
			content.style.maxHeight = "0px";

			if (!isMobile()) {
				btn.classList.remove("active");
				btn.firstChild.textContent = "Ver detalhes ";
				icon.style.transform = "";
			} else {
				btn.firstChild.textContent = "";
				icon.style.transform = "rotate(0deg)";
			}
		} else {
			content.style.maxHeight = content.scrollHeight + "px";

			if (!isMobile()) {
				btn.classList.add("active");
				btn.firstChild.textContent = "Recolher ";
				icon.style.transform = "rotate(180deg)";
			} else {
				btn.firstChild.textContent = "";
				icon.style.transform = "rotate(180deg)";
			}
		}
	});

	iframe?.addEventListener("load", () => {
		if (content.style.maxHeight !== "0px" && content.style.maxHeight) {
			content.style.maxHeight = content.scrollHeight + "px";
		}
	});
});
