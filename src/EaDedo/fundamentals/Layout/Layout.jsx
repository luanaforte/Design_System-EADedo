import React from "react";
import CodeBlockWithCopy from "../../../components/CodeBlockWithCopy";
import TableOfContents from "../../../components/TableOfContents";
import Tabela_spaces from "../../../assets/Tabela_spaces.png";
import Use_spacing from "../../../assets/use_spacing.png";
import "./Layout.css";

export default function Layout() {
	const tocItems = [
		{ id: "introducao", label: "Introdução" },
		{ id: "containers", label: "Containers" },
		{ id: "breakpoints", label: "Breakpoints" },
		{ id: "spaces", label: "Espaçamento" },
		{ id: "tabela-spaces", label: "Tabela de Espaços" },
		{ id: "uso-spacing", label: "Uso Prático" },
	];

	return (
		<div className="foundation-page">
			{/* HEADER PADRONIZADO */}
			<header className="foundation-hero">
				<h2 id="introducao">Layout & Grid</h2>
				<p className="paragraph">
					O layout define como os elementos se organizam visualmente, garantindo
					consistência, harmonia e legibilidade em todas as resoluções de tela.
				</p>
			</header>

			<div className="foundation-container">
				<div className="foundation-body">
					<section id="containers">
						<h3 className="heading3">Containers</h3>
						<p className="paragraph">
							Utilizamos larguras máximas padronizadas para centralizar o
							conteúdo e evitar que linhas de texto fiquem excessivamente longas
							em monitores UltraWide.
						</p>

						<ul className="container-demo-list">
							<li className="container-demo-item">
								<span className="tag">.container-lg</span> — 57.625rem (~922px)
								<div className="container-preview" style={{ maxWidth: "100%" }}>
									<div
										className="card-layout-demo"
										style={{ maxWidth: "922px", margin: "0 auto" }}>
										LG Content
									</div>
								</div>
							</li>
							<li className="container-demo-item">
								<span className="tag">.container-md</span> — 47.875rem (~766px)
								<div className="container-preview" style={{ maxWidth: "100%" }}>
									<div
										className="card-layout-demo"
										style={{ maxWidth: "766px", margin: "0 auto" }}>
										MD Content
									</div>
								</div>
							</li>
							<li className="container-demo-item">
								<span className="tag">.container-sm</span> — 45rem (~720px)
								<div className="container-preview" style={{ maxWidth: "100%" }}>
									<div
										className="card-layout-demo"
										style={{ maxWidth: "720px", margin: "0 auto" }}>
										SM Content
									</div>
								</div>
							</li>
						</ul>

						<CodeBlockWithCopy>
							{`:root {
  --container-lg: 57.625rem; /* 922px */
  --container-md: 47.875rem; /* 766px */
  --container-sm: 45rem;     /* 720px */
}

.container-lg { max-width: var(--container-lg); margin: auto; }
.container-md { max-width: var(--container-md); margin: auto; }
.container-sm { max-width: var(--container-sm); margin: auto; }`}
						</CodeBlockWithCopy>
					</section>

					<hr className="margin__bottom--default" />

					<section id="breakpoints">
						<h3 className="heading3">Breakpoints (Media Queries)</h3>
						<p className="paragraph">
							Nossa estratégia é <strong>Mobile First</strong>, adaptando o
							layout conforme a tela cresce:
						</p>
						<ul className="list-ul">
							<li className="list-item">
								<strong>425px:</strong> Smartphones pequenos.
							</li>
							<li className="list-item">
								<strong>768px:</strong> Tablets e dispositivos médios.
							</li>
							<li className="list-item">
								<strong>1024px:</strong> Laptops e desktops padrão.
							</li>
							<li className="list-item">
								<strong>1440px:</strong> Desktops Large/High Res.
							</li>
						</ul>
					</section>

					<hr className="margin__bottom--default" />

					<section id="spaces">
						<h3 className="heading3">Espaçamento</h3>
						<p className="paragraph">
							Baseado em uma <strong>unidade de 4px</strong>, nosso sistema de
							espaçamento garante ritmo vertical e consistência visual entre
							componentes distintos.
						</p>

						<h4 className="heading4">Tokens de Espaço</h4>
						<p className="paragraph">
							Use sempre os tokens no lugar de valores "hardcoded" de pixels
							para manter a integridade do sistema.
						</p>

						<img
							src={Tabela_spaces}
							alt="Tabela de tokens de espaçamento"
							className="image-fluid"
							id="tabela-spaces"
						/>
					</section>

					<section id="uso-spacing">
						<h3 className="heading3">Uso Prático</h3>
						<img
							src={Use_spacing}
							alt="Exemplos de aplicação de espaçamento"
							className="image-fluid"
						/>

						<div className="rules-container">
							<h4 className="heading4">Guia Rápido:</h4>
							<ul className="list-ul">
								<li className="list-item">
									<strong>0px a 8px:</strong> Ícones, paddings internos de
									botões e gaps de grupos.
								</li>
								<li className="list-item">
									<strong>12px a 24px:</strong> Espaçamento entre cards e
									elementos de conteúdo.
								</li>
								<li className="list-item">
									<strong>32px a 80px:</strong> Margens de seções e topo de
									página.
								</li>
							</ul>
						</div>

						<CodeBlockWithCopy>
							{`:root {
  --space-012: 0.125rem; /* 2px */
  --space-025: 0.25rem;  /* 4px */
  --space-050: 0.5rem;   /* 8px */
  --space-100: 1rem;     /* 16px (Base) */
  --space-200: 2rem;     /* 32px */
  --space-400: 4rem;     /* 64px */
}`}
						</CodeBlockWithCopy>
					</section>
				</div>

				{/* SUMÁRIO LATERAL */}
				<TableOfContents items={tocItems} />
			</div>
		</div>
	);
}
