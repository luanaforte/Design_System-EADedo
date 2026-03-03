import React from "react";
import { useNavigate } from "react-router-dom";

export default function Fundamentals() {
	const navigate = useNavigate();

	const fundamentos = [
		{
			title: "Border",
			path: "Border",
			desc: "Regras de arredondamento, espessura e estilos de contorno.",
		},
		{
			title: "Cores",
			path: "Cores",
			desc: "Paleta cromática institucional, semântica e guia de acessibilidade.",
		},
		{
			title: "Elevation",
			path: "Elevation",
			desc: "Sistema de sombras, profundidade e níveis de Z-index.",
		},
		{
			title: "Tipografia",
			path: "Tipografia",
			desc: "Famílias de fontes, escalas modulares e pesos permitidos.",
		},
		{
			title: "Layout",
			path: "Layout",
			desc: "Sistema de grids, containers responsivos e tokens de espaçamento.",
		},
		{
			title: "Iconografia",
			path: "Iconografia",
			desc: "Biblioteca oficial de ícones e diretrizes de aplicação.",
		},
	];

	return (
		<div className="foundation-page EadGraduacao">
			<header className="foundation-hero">
				<h1 className="display">Fundamentos</h1>
				<p className="paragraph">
					A base visual que sustenta nosso ecossistema. Aqui definimos os
					princípios atômicos que garantem consistência e escalabilidade.
				</p>
			</header>

			<div className="foundation-container">
				<div className="foundation-body" style={{ maxWidth: "100%" }}>
					<div className="fundamentals-grid">
						{fundamentos.map((item) => (
							<div
								key={item.path}
								className="fundamental-card-wrapper"
								onClick={() => navigate(item.path)}>
								<div className="card-info">
									<h4 className="card-title">{item.title}</h4>
									<p className="legend">{item.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
