import React, { useState } from "react";
import CodeBlockWithCopy from "../../../components/CodeBlockWithCopy";
import TableOfContents from "../../../components/TableOfContents";
import "./Accordions.css";

/**
 * 1. LÓGICA TÉCNICA
 * Manipulação do DOM para garantir acessibilidade e fechamento dos itens irmãos.
 */
export function toggleAccordion(accordionId, index) {
	const accordionContainer = document.getElementById(accordionId);
	if (!accordionContainer) return;

	const allItems = accordionContainer.querySelectorAll(".accordion-item");

	allItems.forEach((item, i) => {
		const content = item.querySelector(".accordion-content");
		const header = item.querySelector(".accordion-header");
		const iconActive = item.querySelector(".icon-active");
		const iconInactive = item.querySelector(".icon-inactive");

		// O index passado é 1-based no seu HTML gerado
		if (i === index - 1) {
			const isExpanded = item.getAttribute("aria-expanded") === "true";
			const newExpanded = !isExpanded;

			item.setAttribute("aria-expanded", newExpanded);
			content.style.display = newExpanded ? "block" : "none";

			header.style.backgroundColor = newExpanded
				? "var(--accordion-active-bg)"
				: "var(--accordion-bg)";

			if (iconInactive)
				iconInactive.style.display = newExpanded ? "inline-block" : "none";
			if (iconActive)
				iconActive.style.display = newExpanded ? "none" : "inline-block";
		} else {
			// Fecha os outros (comportamento de sanfona única)
			item.setAttribute("aria-expanded", "false");
			content.style.display = "none";
			header.style.backgroundColor = "var(--accordion-bg)";
			if (iconInactive) iconInactive.style.display = "none";
			if (iconActive) iconActive.style.display = "inline-block";
		}
	});
}

/**
 * 2. SUB-COMPONENTE: ÍCONES
 */
const AccordionIcons = () => (
	<div className="icons">
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			className="icon-active">
			<path
				d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
				fill="currentColor"
			/>
		</svg>
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			className="icon-inactive"
			style={{ display: "none" }}>
			<path
				d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
				fill="currentColor"
			/>
		</svg>
	</div>
);

/**
 * 3. SUB-COMPONENTE: PREVIEW
 */
const AccordionPreview = ({ id, colorClass = "", title, content }) => (
	<div className={`accordion ${colorClass}`} id={id}>
		<div className="accordion-item" aria-expanded="false">
			<div className="accordion-header" onClick={() => toggleAccordion(id, 1)}>
				<p className="paragraph--medium">{title}</p>
				<AccordionIcons />
			</div>
			<div className="accordion-content" style={{ display: "none" }}>
				<p className="paragraph--medium">
					{content ||
						"Este é o conteúdo padrão do item expandido do accordion."}
				</p>
			</div>
		</div>
	</div>
);

/**
 * COMPONENTE PRINCIPAL
 */
export default function Accordions() {
	const [viewMode, setViewMode] = useState("designer");
	const [itemTitle, setItemTitle] = useState("Título do Item");
	const [itemContent, setItemContent] = useState(
		"O conteúdo que aparecerá ao expandir.",
	);
	const [selectedColor, setSelectedColor] = useState("accordion--blue");
	const [customId, setCustomId] = useState("accordion-01");

	const tocItems = [
		{ id: "visual", label: "Variantes Visuais" },
		{ id: "builder", label: "Builder de Código" },
	];

	const generatedHTML = `
<div class="accordion ${selectedColor}" id="${customId}">
  <div class="accordion-item" aria-expanded="false">
    <div class="accordion-header" onclick="toggleAccordion('${customId}', 1)">
      <p class="paragraph--medium">${itemTitle}</p>
      <div class="icons">
        <svg class="icon-active" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H12.75V20.25C12.75 20.4489 12.671 20.6397 12.5303 20.7803C12.3897 20.921 12.1989 21 12 21C11.8011 21 11.6103 20.921 11.4697 20.7803C11.329 20.6397 11.25 20.4489 11.25 20.25V12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H11.25V3.75C11.25 3.55109 11.329 3.36032 11.4697 3.21967C11.6103 3.07902 11.8011 3 12 3C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75V11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="currentColor"/></svg>
        <svg class="icon-inactive" style="display:none" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z" fill="currentColor"/></svg>
      </div>
    </div>
    <div class="accordion-content" style="display:none">
      <p class="paragraph--medium margin-0">${itemContent}</p>
    </div>
  </div>
</div>`.trim();

	return (
		<div className="component-page">
			<header className="foundation-hero">
				<h2 className="heading2">Accordions</h2>
				<p className="paragraph">
					Documentação de interface e implementação técnica para o ecossistema
					EAD.
				</p>
			</header>

			<div className="view-toggle">
				<button
					className={`toggle-btn ${viewMode === "designer" ? "active" : ""}`}
					onClick={() => setViewMode("designer")}>
					Designer
				</button>
				<button
					className={`toggle-btn ${viewMode === "developer" ? "active" : ""}`}
					onClick={() => setViewMode("developer")}>
					Developer
				</button>
			</div>

			<main className="foundation-container with-toc">
				<div className="content-area">
					{viewMode === "designer" ? (
						<div className="designer-view fade-in">
							<section id="visual">
								<h3 className="heading3">Identidade Visual</h3>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "1rem",
									}}>
									<AccordionPreview
										id="preview_grad"
										colorClass="EadGraduacao"
										title="Ead Graduação"
									/>
									<AccordionPreview
										id="preview_neutral"
										colorClass="accordion--neutral"
										title="Variante Neutral"
									/>
									<AccordionPreview
										id="preview_blue"
										colorClass="accordion--blue"
										title="Variante Blue (Default)"
									/>
									<AccordionPreview
										id="preview_purple"
										colorClass="accordion--purple"
										title="Variante Purple"
									/>
									<AccordionPreview
										id="preview_red"
										colorClass="accordion--red"
										title="Variante Red"
									/>
								</div>
							</section>
						</div>
					) : (
						<div className="developer-view fade-in">
							<section id="builder" className="builder-section">
								<h3 className="heading3">Component Builder</h3>
								<div className="builder-card">
									<div className="builder-inputs">
										<div className="input-field">
											<label>Título</label>
											<input
												type="text"
												value={itemTitle}
												onChange={(e) => setItemTitle(e.target.value)}
											/>
										</div>
										<div className="input-field">
											<label>Conteúdo (Texto)</label>
											<textarea
												rows="3"
												value={itemContent}
												onChange={(e) => setItemContent(e.target.value)}
											/>
										</div>
										<div className="input-field">
											<label>Variante de Cor</label>
											<select
												value={selectedColor}
												onChange={(e) => setSelectedColor(e.target.value)}>
												<option value="EadGraduacao">Ead Graduacao</option>
												<option value="accordion--blue">Blue</option>
												<option value="accordion--turquoise">Turquoise</option>
												<option value="accordion--red">Red</option>
												<option value="accordion--yellow">Yellow</option>
												<option value="accordion--neutral">Neutral</option>
											</select>
										</div>
										<div className="input-field">
											<label>ID Único</label>
											<input
												type="text"
												value={customId}
												onChange={(e) => setCustomId(e.target.value)}
											/>
										</div>
									</div>
									<div className="builder-output">
										<CodeBlockWithCopy>{generatedHTML}</CodeBlockWithCopy>
									</div>
								</div>
							</section>
						</div>
					)}
				</div>

				<TableOfContents items={tocItems} />
			</main>
		</div>
	);
}
