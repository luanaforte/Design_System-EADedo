import React, { useState } from "react";
import CodeBlockWithCopy from "../../../components/CodeBlockWithCopy";
// import TableOfContents from "../../../components/TableOfContents";
import {
	ConceptSection,
	ChangelogSection,
} from "../../../components/ComponentPageLayout";
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
			item.setAttribute("aria-expanded", "false");
			content.style.display = "none";
			header.style.backgroundColor = "var(--accordion-bg)";
			if (iconInactive) iconInactive.style.display = "none";
			if (iconActive) iconActive.style.display = "inline-block";
		}
	});
}

const AccordionIcons = () => (
	<div class="icons">
		<svg class="accordion-arrow icon-size-md">
			<path
				fill="currentColor"
				d="M20.0306 15.5307C19.961 15.6005 19.8782 15.6558 19.7872 15.6935C19.6961 15.7313 19.5986 15.7507 19.5 15.7507C19.4014 15.7507 19.3038 15.7313 19.2128 15.6935C19.1217 15.6558 19.039 15.6005 18.9694 15.5307L12 8.56041L5.03061 15.5307C4.88988 15.6715 4.69901 15.7505 4.49999 15.7505C4.30097 15.7505 4.1101 15.6715 3.96936 15.5307C3.82863 15.39 3.74957 15.1991 3.74957 15.0001C3.74957 14.8011 3.82863 14.6102 3.96936 14.4695L11.4694 6.96948C11.539 6.89974 11.6217 6.84443 11.7128 6.80668C11.8038 6.76894 11.9014 6.74951 12 6.74951C12.0986 6.74951 12.1961 6.76894 12.2872 6.80668C12.3782 6.84443 12.461 6.89974 12.5306 6.96948L20.0306 14.4695C20.1003 14.5391 20.1557 14.6218 20.1934 14.7129C20.2312 14.8039 20.2506 14.9015 20.2506 15.0001C20.2506 15.0987 20.2312 15.1963 20.1934 15.2873C20.1557 15.3784 20.1003 15.4611 20.0306 15.5307Z"></path>
		</svg>
	</div>
);

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

export default function Accordions() {
	const [viewMode, setViewMode] = useState("designer");
	const [itemTitle, setItemTitle] = useState("Título do Item");
	const [itemContent, setItemContent] = useState(
		"O conteúdo que aparecerá ao expandir.",
	);
	const [selectedColor, setSelectedColor] = useState("accordion--blue");
	const [customId, setCustomId] = useState("accordion-01");

	const tocItems = [
		{ id: "conceito", label: "Conceito" },
		{ id: "visual", label: "Variantes Visuais" },
		{ id: "instructions", label: "Instruções de Uso" },
		{ id: "builder", label: "Component Builder" },
		{ id: "changelog", label: "Changelog" },
	];

	const tabs = ["Designer", "Developer", "Changelog"];

	const accordionLogs = [
		{
			version: "1.1.0",
			date: "10/03/2026",
			description: "Implementação da paleta de cores variáveis.",
		},
		{
			version: "1.0.0",
			date: "01/03/2026",
			description: "Criação inicial da estrutura de Accordion.",
		},
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

	<div class="accordion-item" aria-expanded="false">
		<div class="accordion-header" onclick="toggleAccordion('${customId}', 2)">
			 <p class="paragraph--medium">Segundo Título</p>
			 <div class="icons">
				 </div>
		</div>
		<div class="accordion-content" style="display:none">
			 <p class="paragraph--medium margin-0">Conteúdo do segundo item.</p>
		</div>
	</div>

</div>`.trim();

	return (
		<div className="component-page">
			<header className="foundation-hero">
				<h2 id="introducao" className="heading2">
					Accordions
				</h2>
				<p className="paragraph">
					Documentação de interface e implementação técnica para o ecossistema
					EAD.
				</p>
			</header>

			<div className="tab-menu">
				{tabs.map((tab) => (
					<button
						key={tab}
						onClick={() => setViewMode(tab.toLowerCase())}
						className={`tab_button ${viewMode === tab.toLowerCase() ? "active" : ""}`}>
						{tab}
					</button>
				))}
			</div>

			<main className="foundation-container with-toc">
				<div className="content-area">
					{viewMode === "designer" && (
						<div className="designer-view fade-in">
							<ConceptSection
								title="O que é o Collapse?"
								description="O Collapse organiza informações em camadas, permitindo esconder ou revelar conteúdos para reduzir a poluição visual."
							/>
							<section id="visual">
								<h3 className="heading3">Identidade Visual</h3>
								<p className="paragraph">
									Os itens têm largura fixa de 844px no conjunto de componentes.
								</p>
								<p className="paragraph">
									Quando adicionados a um layout, configure para assumir
									automaticamente a largura do container, conforme o
									comportamento de layout automático.
								</p>
								<h3 className="heading3">Identidade Visual</h3>
								<div>
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
										title="Variante Blue"
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
									<AccordionPreview
										id="preview_yellow"
										colorClass="accordion--yellow"
										title="Variante Yellow"
									/>
									<AccordionPreview
										id="preview_turquoise"
										colorClass="accordion--turquoise"
										title="Variante Turquoise"
									/>
								</div>
							</section>
							{/* <TableOfContents items={tocItems} /> */}
						</div>
					)}
					{viewMode === "developer" && (
						<>
							<section id="instructions" className="instructions-section">
								<h3 className="heading3">Instruções de Uso</h3>

								<div className="instructions-grid">
									<div className="instruction-card">
										<h4 className="heading4">🎨 Definição de Cores</h4>
										<p className="paragraph">
											Adicione uma das classes abaixo ao elemento
											<code className="code">.accordion</code> para configurar o
											tema visual via CSS Variables:
										</p>
										<ul className="list-ul">
											<li className="list-item">
												<p className="paragraph">
													<code className="code">.accordion--blue</code>
												</p>
											</li>
											<li className="list-item">
												<p className="paragraph">
													<code className="code">.accordion--purple</code>
												</p>
											</li>
											<li className="list-item">
												<p className="paragraph">
													<code className="code">.accordion--turquoise</code>
												</p>
											</li>
											<li className="list-item">
												<p className="paragraph">
													<code className="code">.accordion--red</code>
												</p>
											</li>
											<li className="list-item">
												<p className="paragraph">
													<code className="code">.accordion--yellow</code>
												</p>
											</li>
											<li className="list-item">
												<p className="paragraph">
													<code className="code">.accordion--neutral</code>
												</p>
											</li>
										</ul>
									</div>

									<div className="instruction-card">
										<h4 className="heading4">🆔 Múltiplos Accordions</h4>
										<p className="paragraph">
											Se usar mais de um grupo na mesma página:
										</p>
										<ol>
											<li className="list-item">
												<p className="paragraph">
													Cada <code className="code">div.accordion</code> deve
													ter um <strong>ID único</strong> (ex:{" "}
													<code className="code">id="faq-financeiro"</code>).
												</p>
											</li>
											<li className="list-item">
												<p className="paragraph">
													A função <code className="code">toggleAccordion</code>{" "}
													deve receber esse ID como primeiro parâmetro.
												</p>
											</li>
										</ol>
									</div>

									<div className="instruction-card">
										<h4 className="heading4">➕ Adicionando Itens</h4>
										<p className="paragraph">
											Para expandir o grupo, duplique o bloco{" "}
											<code className="code">.accordion-item</code>. No{" "}
											<code className="code">onclick</code>, aumente o número do
											índice:
										</p>
										<code className="code">
											Item 1: toggleAccordion('id', 1)
											<br />
											Item 2: toggleAccordion('id', 2)
										</code>
									</div>
								</div>
							</section>
							<hr className="divider" />
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
													<option value="accordion--turquoise">
														Turquoise
													</option>
													<option value="accordion--red">Red</option>
													<option value="accordion--yellow">Yellow</option>
													<option value="accordion--neutral">Neutral</option>
												</select>
											</div>
											<div className="input-field">
												<label>ID Único do Grupo</label>
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
						</>
					)}
					{viewMode === "changelog" && (
						<div className="fade-in">
							<ChangelogSection logs={accordionLogs} />
						</div>
					)}
				</div>
			</main>
		</div>
	);
}
