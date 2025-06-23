import React from "react";
import "./Accordions.css";

export function toggleAccordion(accordionId, index) {
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

export default function Accordions() {
	const handleAccordionClick = (accordionId, index) => {
		toggleAccordion(accordionId, index);
	};

	return (
		<div class="accordion EadGraduacao" id="accordion1">
			<div class="accordion-item" aria-expanded="false">
				<div
					class="accordion-header"
					onClick={() => handleAccordionClick("accordion1", 1)}>
					<p class="paragraph--medium">Item de uma lista</p>
					<div class="icons">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="icon-active">
							<path
								d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
								fill="#1529FF"></path>
						</svg>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="icon-inactive">
							<path
								d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
								fill="#132190"></path>
						</svg>
					</div>
				</div>
				<div class="accordion-content">
					<p class="paragraph--medium">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
						tenetur quia dolorum, aliquam laborum iste accusamus unde minima
						quae! Et dicta commodi dolorem tenetur error, hic nam cum accusamus
						labore.
					</p>
				</div>
			</div>
			<div class="accordion-item" aria-expanded="false">
				<div
					class="accordion-header"
					onClick={() => handleAccordionClick("accordion1", 2)}>
					<p class="paragraph--medium">Item de uma lista</p>
					<div class="icons">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="icon-active">
							<path
								d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
								fill="#1529FF"></path>
						</svg>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="icon-inactive">
							<path
								d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
								fill="#132190"></path>
						</svg>
					</div>
				</div>
				<div class="accordion-content">
					<p class="paragraph--medium">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
						tenetur quia dolorum, aliquam laborum iste accusamus unde minima
						quae! Et dicta commodi dolorem tenetur error, hic nam cum accusamus
						labore.
					</p>
				</div>
			</div>
		</div>
	);
}
