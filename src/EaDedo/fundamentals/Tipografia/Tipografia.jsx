import React, { useState } from "react";
import "./Tipografia.css";
import TableOfContents from "../../../components/TableOfContents";
import CodeBlockWithCopy from "../../../components/CodeBlockWithCopy";
import Fonts_family from "../../../assets/estilos-font-family.png";
import Fonts_size from "../../../assets/estilos-font-size.png";
import Fonts_height from "../../../assets/estilos-font-line_height.png";
import Fonts_weight from "../../../assets/estilos-font-weight.png";

const fontFamilies = {
	EadGraduacao: "EadGraduacao",
	EadPosUnifor: "EadPosUnifor",
	AmbienteDaTutoria: "AmbienteDaTutoria",
	TreinamentoENADE: "TreinamentoENADE",
	TrilhaBiblioteca: "TrilhaBiblioteca",
};

const fontConfigs = {
	EadGraduacao: {
		className: "EadGraduacao",
		css: `--font-family-heading: var(--font-family-Poppins);
--font-family-body: var(--font-family-Poppins);
--font-family-code: var(--font-family-Code);
color: var(--color-neutral-950) !important;`,
	},
	EadPosUnifor: {
		className: "EadPosUnifor",
		css: `--font-family-heading: var(--font-family-Poppins);
--font-family-body: var(--font-family-Poppins);
--font-family-code: var(--font-family-Code);
color: var(--color-neutral-950) !important;`,
	},
	AmbienteDaTutoria: {
		className: "AmbienteDaTutoria",
		css: `--font-family-heading: var(--font-family-Neulis);
--font-family-body: var(--font-family-Manrope);
--font-family-code: var(--font-family-Code);
color: var(--color-neutral-950);

/* sobre-escrevendo o peso */
--font-weight-semibold: var(--font-weight-medium);`,
	},
	TreinamentoENADE: {
		className: "TreinamentoENADE",
		css: `--font-family-heading: var(--font-family-Neulis);
--font-family-body: var(--font-family-Manrope);
--font-family-code: var(--font-family-Code);
color: var(--color-neutral-950);

/* sobre-escrevendo o peso */
--font-weight-semibold: var(--font-weight-medium);`,
	},
	TrilhaBiblioteca: {
		className: "TrilhaBiblioteca",
		css: `--font-family-heading: var(--font-family-Neulis);
--font-family-body: var(--font-family-Poppins);
--font-family-code: var(--font-family-Code);
color: var(--color-neutral-950);

/* sobre-escrevendo o peso */
--font-weight-semibold: var(--font-weight-medium);`,
	},
};

const TypographyPreview = ({ fontFamily }) => {
	const config = fontConfigs[fontFamily];

	return (
		<div className={config.className} style={{ transition: "all 0.3s ease" }}>
			<div style={{ marginBottom: "2rem" }}>
				<span
					className="tag"
					style={{ marginBottom: "1rem", display: "inline-block" }}>
					CSS do Tema:
				</span>
				<CodeBlockWithCopy>{config.css}</CodeBlockWithCopy>
			</div>

			<h1 className="display">Display — Título de impacto</h1>
			<h1 className="heading1">Heading 1 — Tema principal</h1>
			<h2 className="heading2">Heading 2 — Grandes seções</h2>
			<h3 className="heading3">Heading 3 — Subseções</h3>
			<h4 className="heading4">Heading 4 — Título de destaque</h4>

			<p className="paragraph">
				<strong>Paragraph:</strong> Texto explicativo ou corpo de texto
				principal. Garante a leitura fluida de grandes blocos de informação.
			</p>

			<p className="paragraph--medium">
				Paragraph Medium — Texto de componentes.
			</p>

			<div
				style={{
					display: "flex",
					gap: "1rem",
					alignItems: "center",
					marginTop: "1rem",
				}}>
				<span className="tag">Tag Label</span>
				<span className="legend">Legenda de imagem</span>
				<a href="#" className="text-link" onClick={(e) => e.preventDefault()}>
					Texto Link
				</a>
			</div>

			<div style={{ marginTop: "2rem" }}>
				<code className="code">
					{`<div className="container">Code block preview</div>`}
				</code>
			</div>
		</div>
	);
};

export default function Tipografia() {
	const [activeFont, setActiveFont] = useState("EadGraduacao");

	const tocItems = [
		{ id: "introducao", label: "Introdução" },
		{ id: "fonts_family", label: "Família de Fontes" },
		{ id: "font_size", label: "Tamanhos" },
		{ id: "line_height", label: "Entrelinhas" },
		{ id: "font_weight", label: "Pesos" },
		{ id: "marcas", label: "Playground de Marcas" },
	];

	return (
		<div className="foundation-page">
			<header className="foundation-hero">
				<h2 id="introducao">Tipografia</h2>
				<p>
					Nossa tipografia foi selecionada para garantir legibilidade máxima e
					refletir a identidade de cada vertical de ensino.
				</p>
			</header>

			<div className="foundation-container">
				<div className="foundation-body">
					<section id="fonts_family">
						<h3 className="heading3">Família de Fontes</h3>
						<p className="paragraph">
							Utilizamos fontes modernas e versáteis. Abaixo, as definições de
							importação:
						</p>
						<img
							src={Fonts_family}
							alt="Famílias de fontes"
							className="image-fluid"
						/>
						<CodeBlockWithCopy>
							{`/* Google Fonts Imports */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");`}
						</CodeBlockWithCopy>
					</section>

					<hr />

					<section id="font_size">
						<h3 className="heading3">Escala Tipográfica</h3>
						<p className="paragraph">
							A escala baseada em <code>rem</code> permite que o sistema seja
							acessível e responda às preferências do usuário no navegador.
						</p>
						<img
							src={Fonts_size}
							alt="Escala de tamanhos"
							className="image-fluid"
						/>
					</section>

					<hr />

					<section id="line_height">
						<h3 className="heading3">Entrelinhas (Line Height)</h3>
						<p className="paragraph">
							A altura da linha é crucial para a legibilidade. Títulos usam
							entrelinhas apertadas (Tight), enquanto textos corridos usam
							escalas mais confortáveis (Distant).
						</p>
						<img
							src={Fonts_height}
							alt="Exemplos de entrelinha"
							className="image-fluid"
						/>
					</section>

					<hr />

					<section id="font_weight">
						<h3 className="heading3">Pesos da Fonte</h3>
						<p className="paragraph">
							Os pesos definem a ênfase visual. Note que algumas marcas podem
							sobrescrever esses valores para harmonizar com desenhos de tipos
							específicos.
						</p>
						<img
							src={Fonts_weight}
							alt="Pesos das fontes"
							className="image-fluid"
						/>
					</section>

					<hr />

					<section id="marcas">
						<h3 className="heading3">Playground: Fontes por Marca</h3>
						<p className="paragraph">
							Selecione uma marca para visualizar como a tipografia e os tokens
							de peso se comportam no tema específico.
						</p>

						<div className="tab-menu">
							{Object.keys(fontConfigs).map((font) => (
								<button
									key={font}
									onClick={() => setActiveFont(font)}
									className={`tab_button ${activeFont === font ? "active" : ""}`}>
									{font}
								</button>
							))}
						</div>

						<div className="content_section">
							<TypographyPreview fontFamily={activeFont} />
						</div>
					</section>
				</div>

				<TableOfContents items={tocItems} />
			</div>
		</div>
	);
}
