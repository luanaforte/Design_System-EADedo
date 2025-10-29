import React, { useState } from "react";
import "./Tipografia.css";
import TableOfContents from "../../../components/TableOfContents";
import Fonts_family from "../../../assets/estilos-font-family.png";
import Fonts_size from "../../../assets/estilos-font-size.png";
import Fonts_height from "../../../assets/estilos-font-line_height.png";
import Fonts_weight from "../../../assets/estilos-font-weight.png";
import CodeBlockWithCopy from "../../../components/CodeBlockWithCopy";

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

const TypographyContent = ({ fontFamily }) => {
	return (
		<div className={fontConfigs[fontFamily].className}>
			<CodeBlockWithCopy>{fontConfigs[fontFamily].css}</CodeBlockWithCopy>
			<h1 className="display">
				Seu uso é reservado para o título da página e apenas um por página.
			</h1>
			<h1 className="heading1">
				Seu uso é reservado para o tema principal da página.
			</h1>
			<h2 className="heading2">
				Títulos de alta hierarquia usados ​​para dividir grandes seções de
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
				<li className="list-item">Item 1</li>
				<li className="list-item">Item 2</li>
			</ul>
			<h2 className="heading2">Exemplo de Lista Ordenada</h2>
			<ol className="list-ol">
				<li className="list-item">Item 1</li>
				<li className="list-item">Item 2</li>
			</ol>
			<p className="code">
				&lt;iframe src="https://s.tiled.co/xxx/tiled-how-to-guide"
				frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
				style="position: absolute;top: 0;left: 0;width: 100%;height:
				100%;border: 0;"&gt; &lt;/iframe&gt;
			</p>
		</div>
	);
};

export default function Tipografia() {
	const [activeFont, setActiveFont] = useState("EadGraduacao");
	const handleContentChange = (font) => {
		setActiveFont(font);
	};
	return (
		<div className="container-lg">
			<div>
				<h2 className="heading2" id="Introducao">
					Tipografia
				</h2>
				<p className="paragraph">
					A tipografia é o conjunto de regras e estilos aplicados aos textos em
					uma interface. Ela define a aparência e o comportamento visual do
					conteúdo textual, garantindo legibilidade, hierarquia e consistência
					visual em toda a aplicação.
				</p>
				<ul className="list-ul">
					<li className="list-item">
						<strong>
							Família tipográfica (<code>font-family</code>)
						</strong>
						: define o tipo de fonte utilizada (ex: "Roboto", "Open Sans",
						"Arial").
					</li>
					<li className="list-item">
						<strong>
							Tamanho da fonte (<code>font-size</code>)
						</strong>
						: estabelece a escala tipográfica e a hierarquia entre títulos,
						subtítulos e corpo de texto.
					</li>
					<li className="list-item">
						<strong>
							Espaçamento entre linhas (<code>line-height</code>)
						</strong>
						: ajusta a altura entre linhas de um mesmo parágrafo, influenciando
						diretamente na leitura.
					</li>
					<li className="list-item">
						<strong>
							Peso da fonte (<code>font-weight</code>)
						</strong>
						: controla a espessura do texto (ex: 400 para normal, 700 para
						negrito), usado para dar ênfase e criar contraste visual.
					</li>
					<li className="list-item">
						<strong>
							Espaçamento entre letras (<code>letter-spacing</code>)
						</strong>
						: permite ajustes finos na distância entre caracteres, quando
						necessário.
					</li>
				</ul>
				<p className="paragraph">
					A padronização da tipografia contribui para uma experiência do usuário
					mais fluida, acessível e alinhada à identidade visual do produto.
				</p>
				<hr />
				<h3 className="heading3" id="fonts_family">
					Família de Fontes
				</h3>
				<p className="paragraph">
					Uma família de fontes (fonts family) é um conjunto de fontes. Por
					exemplo, a família de fontes Arial contém Arial, Arial Bold, Arial
					Bold Italic e Arial Italic. As famílias de fontes são mapeadas para
					tokens de design. Você pode aplicar uma família de fontes a qualquer
					elemento de texto usando o atributo em um fontFamily 
				</p>
				<img src={Fonts_family} alt="" className="image-fluid" />
				<CodeBlockWithCopy>
					{`@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap");
/* Fira */
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap");
/* Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap");
/* Manrope */
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap");
/* Neulis Cursive */
@import url("https://use.typekit.net/xom3ule.css");
/* Satoshi */
@import url("https://fonts.cdnfonts.com/css/satoshi");
/* Code */
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap");`}
				</CodeBlockWithCopy>
				<hr />
				<h3 className="heading3" id="font_size">
					Tamanho de Fontes
				</h3>
				<p className="paragraph">
					O tamanho da fonte (font size) determina como os textos aparecem na
					tela. Para os desenvolvedores, cada classe de tipografia (como
					heading, paragraph, tag e legend) já vem com um tamanho definido.
				</p>
				<img src={Fonts_size} alt="" className="image-fluid" />
				<CodeBlockWithCopy>
					{` --tags: 0.875em;
  /* 14px - Tags */
  --font-size-sm: 1em;
  /* 16px - Legend */
  --font-size-p: 1.125em;
  /* 18px - paragraph--medium*/
  --font-size-md: 1.5em;
  /* 24px - Heading 4 */
  --font-size-lg: 1.75em;
  /* 28px - Heading 3 */
  --font-size-xl: 2em;
  /* 32px - Heading 2 */
  --font-size-2xl: 2.25em;
  /*  36px - Heading 1 */
  --font-size-3xl: 2.25em;
  /* 48px - Display */
					`}
				</CodeBlockWithCopy>
				<hr />
				<h3 className="heading3" id="line_height">
					Entrelinhas
				</h3>
				<p className="paragraph">
					As entrelinhas (line height) é a propriedade que define a altura da
					caixa que contém o texto. Para os desenvolvedores, cada classe de
					tipografia (como heading, paragraph, tag e legend) já vem com um
					tamanho definido.
				</p>
				<div className="container-sm">
					<img
						src={Fonts_height}
						alt=""
						className="image-fluid margin__bottom--default"
					/>
				</div>
				<div>
					<p className="paragraph">
						<b>line-height-tight(100%):</b> Exemplo de uma entrelinha apertada
						usada apenas para títulos.
					</p>
					<p className="paragraph">
						<b>line-height-medium(150%):</b> Exemplo de uma entrelinha
						confortável para a leitura de um texto curto na web.
					</p>
					<p className="paragraph">
						<b>line-height-distant(180%):</b> Exemplo de uma entrelinha
						confortável para a leitura de um texto na web. Todo texto corrido
						precisa ter line-height de pelo menos 80% maior do que o tamanho da
						fonte que está sendo utilizado para facilitar a leitura.
					</p>
				</div>
				<hr />
				<h3 className="heading3" id="font_weight">
					Peso da Fontes
				</h3>
				<p className="paragraph">
					O peso da fonte (font weight) controla o peso da fonte, é a espessura
					do traço do caractere. Para os desenvolvedores, cada classe de
					tipografia (como heading, paragraph, tag e legend) já vem com um
					tamanho definido.
				</p>
				<div className="container-sm">
					<img
						src={Fonts_weight}
						alt=""
						className="image-fluid margin__bottom--default"
					/>
				</div>
				<p className="paragraph">
					Definimos os pesos de fonte principais como variáveis CSS:
				</p>
				<CodeBlockWithCopy>
					{` --font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
					`}
				</CodeBlockWithCopy>
				<p className="paragraph">
					No entanto, dependendo da família tipográfica utilizada, pode ser
					necessário sobrescrever os valores atribuídos para manter a hierarquia
					visual entre os elementos.
				</p>
				<p className="paragraph">
					Um exemplo é a fonte <b>Neulis</b>, em que o estilo `h4` pode ficar
					visualmente igual ao `h3`. Nesse caso, ajustamos a variável na marca
					correspondente:
				</p>
				<CodeBlockWithCopy>
					{` .nomeDoProjeto {
  --font-family-heading: var(--font-family-Neulis);
  --font-family-body: var(--font-family-Poppins);
  --font-family-code: var(--font-family-Code);
  color: var(--color-neutral-950);

  /* sobre-escrevendo o peso */
  --font-weight-semibold: var(--font-weight-medium);
}
					`}
				</CodeBlockWithCopy>
				<h4 className="heading4">Classes Utilitárias</h4>
				<p className="paragraph">
					Também disponibilizamos classes utilitárias para aplicação direta dos
					pesos, em casos específicos:
				</p>
				<CodeBlockWithCopy>
					{` .font-weight--regular {
  font-weight: var(--font-weight-regular) !important; /* 400 */
}

.font-weight--medium {
  font-weight: var(--font-weight-medium) !important; /* 500 */
}

.font-weight--semibold {
  font-weight: var(--font-weight-semibold) !important; /* 600 */
}

.font-weight--bold {
  font-weight: var(--font-weight-bold) !important; /* 700 */
}
					`}
				</CodeBlockWithCopy>
				<p className="paragraph">
					Essas classes são úteis para ajustes pontuais ou exceções onde a
					estrutura tipográfica padrão não atende às necessidades.
				</p>
				<h4 className="heading4">Destaques no Texto</h4>
				<p className="paragraph">
					Para dar ênfase ao conteúdo textual no HTML:
				</p>
				<ul className="list-ul">
					<li className="list-item">
						Use a tag <code>&lt;strong&gt;</code>&nbsp; quando a informação for
						<strong>importante</strong> ou relevante no contexto.
					</li>
					<li className="list-item">
						Use a tag <code>{`<b>`}</code>&nbsp; apenas para dar
						<b>destaque visual</b> sem alteração no significado ou peso
						semântico do conteúdo.
					</li>
				</ul>
				<hr />
				<h3 className="heading3" id="marcas">
					Fontes de cada marca
				</h3>
				<div className="tab-menu">
					{Object.keys(fontFamilies).map((font) => (
						<button
							key={font}
							onClick={() => handleContentChange(font)}
							className={`tab_button 
            ${activeFont === font ? "active" : "inactive"}`}>
							{font}
						</button>
					))}
				</div>
				<div className="content_section">
					<TypographyContent fontFamily={activeFont} />
				</div>
			</div>
			<TableOfContents
				headings={[
					{ id: "Introducao", label: "Introdução" },
					{ id: "fonts_family", label: "Família de Fontes" },
					{ id: "font_size", label: "Tamanho da Fonte" },
					{ id: "line_height", label: "Espaçamento entre Linhas" },
					{ id: "font_weight", label: "Peso da Fonte" },
					{ id: "marcas", label: "Fontes de cada marca" },
				]}
			/>
		</div>
	);
}
