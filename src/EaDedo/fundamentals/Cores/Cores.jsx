import React, { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";
import "./Cores.css";
import TableOfContents from "../../../components/TableOfContents";

// Utilitários
const extractColorValues = (color) =>
	color.startsWith("linear-gradient")
		? color.replace(/^linear-gradient\(|\)$/g, "")
		: color;

const copyToClipboard = (text, onSuccess) => {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			onSuccess(true);
			setTimeout(() => onSuccess(false), 2000);
		})
		.catch((err) => console.error("Failed to copy:", err));
};

// Componentes
const ColorCard = ({ name, color }) => {
	const [copied, setCopied] = useState(false);
	const colorValue = extractColorValues(color);

	const handleCopy = () => copyToClipboard(colorValue, setCopied);

	return (
		<div className="color-card">
			<div
				className="color-card__box"
				style={{ background: color }}
				onClick={handleCopy}>
				{copied ? (
					<Check className="copied-icon" size={16} />
				) : (
					<Copy className="copied-icon copied-icon__hover" size={16} />
				)}
			</div>
			<p className="paragraph--medium margin-0">{name}</p>
			<p className="font-size-sm margin-0 flexbox__center" onClick={handleCopy}>
				{colorValue}
				{copied ? <Check size={18} /> : <Copy size={18} />}
			</p>
		</div>
	);
};

// Dados
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

// Gera IDs consistentes
const generateId = (text) =>
	text
		.toLowerCase()
		.replace(/ · /g, "_")
		.replace(/\s+/g, "_")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "");

export default function Cores() {
	const headings = [
		{ id: "Introducao", label: "Introdução" },
		...Object.keys(groupedColors).map((key) => ({
			id: generateId(key),
			label: key,
		})),
		{ id: "RegrasDoModelo", label: "Regras do modelo" },
	];

	return (
		<div className="container-xl">
			<h3 className="heading3" id="Introducao">
				Cores
			</h3>
			<p className="paragraph">
				Use cores para criar experiências significativas e, ao mesmo tempo,
				expressar hierarquia, estado e identidade da marca.
			</p>

			{Object.entries(groupedColors).map(([group, colors]) => {
				const id = generateId(group);
				return (
					<section key={group} aria-labelledby={id} className="color-group">
						<h4 className="heading4" id={id}>
							{group}
						</h4>
						<div className="colors-container">
							{colors.map(({ name, color }) => (
								<ColorCard key={name} name={name} color={color} />
							))}
						</div>
						<hr />
					</section>
				);
			})}
			<h3 className="heading3" id="RegrasDoModelo">
				Regras do modelo
			</h3>
			<p className="paragraph">
				Para produzir interfaces para web não precisamos de todas as cores, numa
				interface, podemos fazer o uso de 4 tons principais: 100, 300, 600 e 900
			</p>
			<ul className="list-ul">
				<li className="list-item">
					<b>Background de cards:</b> Cores da paleta que estão no tom de 100,
					como por exemplo: neutral-100, blue-100, turquoise-100
				</li>
				<li className="list-item">
					<b>Títulos e destaques:</b> Cores da paleta que estão no tom de 600,
					como por exemplo: yellow-600, blue-600, turquoise-600
				</li>
			</ul>
			<TableOfContents headings={headings} />
		</div>
	);
}
