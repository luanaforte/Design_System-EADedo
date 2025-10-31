function toggleAccordion(accordionId, index) {
	const allItems = document.querySelectorAll(`#${accordionId} .accordion-item`);

	allItems.forEach((item, i) => {
		const content = item.querySelector(".accordion-content");
		const header = item.querySelector(".accordion-header");
		const iconActive = item.querySelector(".icon-active");
		const iconInactive = item.querySelector(".icon-inactive");

		if (i === index - 1) {
			const expanded = item.getAttribute("aria-expanded") !== "true";
			content.style.display = expanded ? "block" : "none";
			item.setAttribute("aria-expanded", expanded);
			header.style.backgroundColor = expanded
				? "var(--accordion-active-bg)"
				: "var(--accordion-bg)";

			// Mostrar o ícone de "menos" e esconder o "mais"
			iconInactive.style.display = expanded ? "inline-block" : "none";
			iconActive.style.display = expanded ? "none" : "inline-block";
		} else {
			content.style.display = "none";
			item.setAttribute("aria-expanded", "false");
			header.style.backgroundColor = "var(--accordion-bg)";

			// Garantir que o item fechado mostre o ícone de "mais"
			iconInactive.style.display = "none";
			iconActive.style.display = "inline-block";
		}
	});
}

window.toggleAccordion = toggleAccordion;
