function toggleCollapse() {
	const content = document.getElementById("collapse_section");
	const button = document.getElementById("collapse_section-button");
	const buttonText = document.getElementById("collapse_section-button--text");

	content.classList.toggle("open");
	button.classList.toggle("active");

	const isOpen = content.classList.contains("open");
	buttonText.innerText = isOpen ? "Recolher" : "Ver detalhes";
	buttonText.setAttribute(
		"aria-label",
		isOpen ? "Recolher conteúdo [nome]" : "Ver detalhes do conteúdo [nome]"
	);
}