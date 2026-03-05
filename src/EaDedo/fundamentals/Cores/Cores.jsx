import React, { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";
import "./Cores.css";
import TableOfContents from "../../../components/TableOfContents";

// Utilitários
const extractColorValues = (color) =>
	color.startsWith("linear-gradient")
		? color.match(/#[a-zA-Z0-9]{3,6}/g)?.join(" → ") || "Gradient"
		: color.toUpperCase();

const ColorCard = ({ name, color }) => {
	const [copied, setCopied] = useState(false);
	const colorValue = extractColorValues(color);

	const handleCopy = () => {
		navigator.clipboard.writeText(color);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="color-card">
			<div
				className="color-card__box"
				style={{ background: color }}
				onClick={handleCopy}>
				{copied ? <Check size={24} weight="bold" /> : <Copy size={24} />}
			</div>
			<div className="color-info">
				<p className="paragraph--medium margin-0" style={{ fontWeight: 700 }}>
					{name}
				</p>
				<div className="color-code-wrapper" onClick={handleCopy}>
					<span>{colorValue}</span>
					{copied ? <Check size={14} color="green" /> : <Copy size={14} />}
				</div>
			</div>
		</div>
	);
};

export default function Cores() {
	const generateId = (text) =>
		text
			.toLowerCase()
			.replace(/ · /g, "_")
			.replace(/\s+/g, "_")
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "");

	const tocItems = [
		{ id: "introducao", label: "Introdução" },
		...Object.keys(groupedColors).map((key) => ({
			id: generateId(key),
			label: key,
		})),
		{ id: "regras", label: "Regras do Modelo" },
	];

	return (
		<div className="foundation-page">
			<header className="foundation-hero">
				<h2 id="introducao">Cores</h2>
				<p className="paragraph">
					Nossa paleta foi projetada para garantir acessibilidade, contraste e
					uma identidade visual sólida para a Universidade de Fortaleza.
				</p>
			</header>

			<div className="foundation-container">
				<div className="foundation-body">
					{Object.entries(groupedColors).map(([group, colors]) => {
						const id = generateId(group);
						return (
							<section key={group} id={id} className="margin__bottom--default">
								<h4
									className="heading4"
									style={{ marginBottom: "1rem", color: "var(--Anil)" }}>
									{group}
								</h4>
								<div className="colors-grid">
									{colors.map((c) => (
										<ColorCard key={c.name} name={c.name} color={c.color} />
									))}
								</div>
							</section>
						);
					})}

					<section id="regras" className="rules-container">
						<h3 className="heading3">Regras do modelo</h3>
						<p className="paragraph">
							Para manter a consistência visual, priorizamos quatro níveis de
							luminância em nossas interfaces:
						</p>
						<ul className="list-ul">
							<li className="list-item">
								<strong>Tom 100:</strong> Ideal para superfícies grandes,
								backgrounds de cards e áreas de repouso visual.
							</li>
							<li className="list-item">
								<strong>Tom 600:</strong> Utilizado para estados de interação,
								botões primários e ícones informativos.
							</li>
							<li className="list-item">
								<strong>Tom 900:</strong> Focado em textos de alta legibilidade
								e contrastes profundos.
							</li>
						</ul>
					</section>
				</div>

				{/* SUMÁRIO LATERAL REUTILIZÁVEL */}
				<TableOfContents items={tocItems} />
			</div>
		</div>
	);
}

const groupedColors = {
	"Paleta da Universidade de Fortaleza": [
		{ name: "Gelo", color: "#e4f2fe" },
		{ name: "Azul Claro", color: "#87b7fe" },
		{ name: "Anil", color: "#004aff" },
		{ name: "Marinho", color: "#132190" },
	],
	"Neutral · Variações": [
		{ name: "050", color: "#f6f7f9" },
		{ name: "100", color: "#ebedf3" },
		{ name: "200", color: "#d3d7e4" },
		{ name: "300", color: "#acb4cd" },
		{ name: "400", color: "#7f8db1" },
		{ name: "500", color: "#5f6e98" },
		{ name: "600", color: "#4b587e" },
		{ name: "700", color: "#3e4766" },
		{ name: "800", color: "#363e56" },
		{ name: "900", color: "#30354a" },
		{ name: "950", color: "#151720" },
	],
	"Blue · Variações": [
		{ name: "050", color: "#e9f2ff" },
		{ name: "100", color: "#d6e8ff" },
		{ name: "200", color: "#b6d3ff" },
		{ name: "300", color: "#8ab3ff" },
		{ name: "400", color: "#5c86ff" },
		{ name: "500", color: "#375aff" },
		{ name: "600", color: "#1529ff" },
		{ name: "700", color: "#0b1cf7" },
		{ name: "800", color: "#0d1dc6" },
		{ name: "900", color: "#132190" },
		{ name: "950", color: "#0c135a" },
	],
	"Turquoise · Variações": [
		{ name: "050", color: "#f0fdfa" },
		{ name: "100", color: "#cdfaf1" },
		{ name: "200", color: "#9af5e2" },
		{ name: "300", color: "#60e8d2" },
		{ name: "400", color: "#36d3be" },
		{ name: "500", color: "#16b6a3" },
		{ name: "600", color: "#0f9285" },
		{ name: "700", color: "#11746c" },
		{ name: "800", color: "#125d57" },
		{ name: "900", color: "#144d49" },
		{ name: "950", color: "#052e2d" },
	],
	"Red · Variações": [
		{ name: "050", color: "#fef2f2" },
		{ name: "100", color: "#fee2e2" },
		{ name: "200", color: "#fecaca" },
		{ name: "300", color: "#fda4a4" },
		{ name: "400", color: "#f97070" },
		{ name: "500", color: "#f04343" },
		{ name: "600", color: "#dd2525" },
		{ name: "700", color: "#ba1b1b" },
		{ name: "800", color: "#9a1a1a" },
		{ name: "900", color: "#801c1c" },
		{ name: "950", color: "#450a0a" },
	],
	"Yellow · Variações": [
		{ name: "050", color: "#fffbeb" },
		{ name: "100", color: "#fef3c7" },
		{ name: "200", color: "#fde68a" },
		{ name: "300", color: "#fcd34d" },
		{ name: "400", color: "#fbbf24" },
		{ name: "500", color: "#f59e0b" },
		{ name: "600", color: "#d97706" },
		{ name: "700", color: "#b45309" },
		{ name: "800", color: "#92400e" },
		{ name: "900", color: "#78350f" },
		{ name: "950", color: "#451a03" },
	],
	"Purple · Variações": [
		{ name: "050", color: "#f6f4fe" },
		{ name: "100", color: "#eeebfc" },
		{ name: "200", color: "#dfd9fb" },
		{ name: "300", color: "#c7bbf7" },
		{ name: "400", color: "#ab95f0" },
		{ name: "500", color: "#8b64e8" },
		{ name: "600", color: "#7f49de" },
		{ name: "700", color: "#6f37ca" },
		{ name: "800", color: "#5d2ea9" },
		{ name: "900", color: "#4d278b" },
		{ name: "950", color: "#2f175e" },
	],
	Gradients: [
		{
			name: "Midnight",
			color: "linear-gradient(90deg, #1529ff 0%, #151720 100%)",
		},
		{
			name: "Ash",
			color: "linear-gradient(90deg, #a6abc5 0%, #151720 100%)",
		},
		{
			name: "Smoke",
			color:
				"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
		},
	],
};
