import TableOfContents from "../../../components/TableOfContents";
import "./Layout.css";
import React from "react";

export default function Layout() {
	return (
		<div className="outlet__grid">
			<div>
				<main className="container-xl">
					<div className="card-layout"></div>
				</main>
				<main className="container-lg">
					<div className="card-layout"></div>
				</main>
				<main className="container-md">
					<div className="card-layout"></div>
				</main>
				<main className="container-sm">
					<div className="card-layout"></div>
				</main>
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
