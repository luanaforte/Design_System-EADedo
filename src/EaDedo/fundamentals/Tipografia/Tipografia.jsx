import React, { useState } from "react";
import "./Tipografia.css";

const fontFamilies = {
	EadGraduacao: "EadGraduacao",
	EadPosUnifor: "EadPosUnifor",
	AmbienteDaTutoria: "AmbienteDaTutoria",
	TreinamentoENADE: "TreinamentoENADE",
};

const TypographyContent = ({ fontFamily }) => {
	return (
		<div className={fontFamilies[fontFamily]}>
			<>
				<h1 className="display">Lorem ipsum dolor sit</h1>
				<h1 className="heading1">Lorem ipsum dolor sit</h1>
				<h2 className="heading2">Lorem ipsum dolor sit amet</h2>
				<h3 className="heading3">Lorem ipsum dolor sit amet consectetur</h3>
				<h4 className="heading4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</h4>
				<p className="paragraph">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
					animi fugit est facilis. Iste culpa temporibus assumenda nisi aut eius
					vitae porro voluptate id ea, iure doloribus consequuntur tenetur
					quaerat.
				</p>
				<p className="font-size-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
					animi fugit est facilis. Iste culpa temporibus assumenda nisi aut eius
					vitae porro voluptate id ea, iure doloribus consequuntur tenetur
					quaerat.
				</p>
				<h2 className="heading2">Exemplo de Lista Não Ordenada</h2>
				<ul className="list-ul">
					<li className="list-item">Lorem ipsum dolor sit amet.</li>
					<li className="list-item">Consectetur adipiscing elit.</li>
					<li className="list-item">Sed do eiusmod tempor incididunt.</li>
					<li className="list-item">Ut labore et dolore magna aliqua.</li>
				</ul>
				<h2 className="heading2">Exemplo de Lista Ordenada</h2>
				<ol className="list-ol">
					<li className="list-item">Lorem ipsum dolor sit amet.</li>
					<li className="list-item">Consectetur adipiscing elit.</li>
					<li className="list-item">Sed do eiusmod tempor incididunt.</li>
					<li className="list-item">Ut labore et dolore magna aliqua.</li>
				</ol>
				<p className="code">
					&lt;iframe src="https://s.tiled.co/xxx/tiled-how-to-guide"
					frameborder="0" webkitallowfullscreen mozallowfullscreen
					allowfullscreen style="position: absolute;top: 0;left: 0;width:
					100%;height: 100%;border: 0;"&gt; &lt;/iframe&gt;
				</p>
				<p className="code">
					&lt;button onClick="handleClick()" class="btn-primary"&gt; Click Me
					&lt;/button&gt;
				</p>
			</>
		</div>
	);
};

export default function Tipografia() {
	const [activeFont, setActiveFont] = useState("Roboto");
	const handleContentChange = (font) => {
		setActiveFont(font);
	};
	return (
		<div className="container_lg">
			<h2 className="heading2">Tipografia</h2>
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
	);
}
