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
		<div className={config.className}>
			<div>
				<span className="tag">CSS do Tema:</span>
				<CodeBlockWithCopy>{config.css}</CodeBlockWithCopy>
			</div>

			<h1 className="display">
				Seu uso é reservado para o título da página e apenas um por página.
			</h1>
			<h1 className="heading1">
				Seu uso é reservado para o tema principal da página.
			</h1>
			<h2 className="heading2">
				Títulos de alta hierarquia usados ​para dividir grandes seções de
				conteúdo em uma página.
			</h2>
			<h3 className="heading3">
				Títulos de média hierarquia usados ​​para dividir seções de conteúdo em
				uma página.
			</h3>
			<h4 className="heading4">
				Títulos de hierarquia baixa que se destacam do texto base.
			</h4>
			<p className="paragraph">
				Texto explicativo ou corpo de texto com hierarquia inferior.
			</p>
			<p className="paragraph--medium">Texto de dentro dos componentes.</p>
			<p className="tag">
				Textos para elementos muito pequenos, como rótulos, tags, tips. Não
				usamos para corpo de texto.
			</p>
			<p className="legend">Texto explicativo, legendas e botões.</p>
			<h2 className="heading2">Exemplo de Lista Não Ordenada</h2>
			<ul className="list-ul">
				<li className="list-item">
					<p className="paragraph--medium">Item 1</p>
				</li>
				<li className="list-item">
					<p className="paragraph--medium">Item 2</p>
				</li>
			</ul>
			<h2 className="heading2">Exemplo de Lista Ordenada</h2>
			<ol className="list-ol">
				<li className="list-item">
					<p className="paragraph--medium">Item 1</p>
				</li>
				<li className="list-item">
					<p className="paragraph--medium">Item 2</p>
				</li>
			</ol>
			<p className="code">
				&lt;iframe src="https://s.tiled.co/xxx/tiled-how-to-guide"
				frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
				style="position: absolute;top: 0;left: 0;width: 100%;height:
				100%;border: 0;"&gt; &lt;/iframe&gt;
			</p>
			<p class="paragraph">
				<a href="" target="_blank" class="text-link">
					Texto Link
				</a>
				.
			</p>
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
				<p className="paragraph">
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
