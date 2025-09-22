import React, { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";
import Arredondando_lados_separadamente from "../../../assets/Arredondando_lados_separadamente.png";
import Arredondando_cantos_separadamente from "../../../assets/Arredondando_cantos_separadamente.png";
import "./Border.css";
import TableOfContents from "../../../components/TableOfContents";

const borderRadiusTokens = [
	{ name: "--radius-full", value: "100%" },
	{ name: "--radius-025", value: "0.25rem" },
	{ name: "--radius-050", value: "0.5rem" },
	{ name: "--radius-075", value: "0.75rem" },
	{ name: "--radius-100", value: "1rem" },
	{ name: "--radius-125", value: "1.25rem" },
	{ name: "--radius-150", value: "1.5rem" },
];

const borderRadiusLados = [
	{ name: "radius-top-*", previewClass: "radius-top-075" },
	{ name: "radius-right-*", previewClass: "radius-right-075" },
	{ name: "radius-bottom-*", previewClass: "radius-bottom-075" },
	{ name: "radius-left-*", previewClass: "radius-left-075" },
];

const borderRadiusCantos = [
	{ name: "radius-top-075", previewClass: "radius-top-left-075" },
	{ name: "radius-right-075", previewClass: "radius-right-bottom-075" },
	{ name: "radius-bottom-075", previewClass: "radius-bottom-right-075" },
	{ name: "radius-left-075", previewClass: "radius-left-top-075" },
];

const copyToClipboard = (text, setCopiedText) => {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			setCopiedText(true);
			setTimeout(() => setCopiedText(false), 2000);
		})
		.catch((err) => {
			console.error("Failed to copy: ", err);
		});
};

const CardBorderRadius = ({ name, styleValue = "", previewClass = "" }) => {
	const [copied, setCopied] = useState(false);

	return (
		<div className="flexbox__center--column-center">
			<div
				className={`card--radius  ${previewClass}`}
				onClick={() => copyToClipboard(name, setCopied)}
				style={styleValue ? { borderRadius: styleValue } : {}}>
				{copied ? (
					<Check className="copied-icon copied-icon__hover" size={16} />
				) : (
					<Copy className="copied-icon copied-icon__hover" size={16} />
				)}
			</div>
			<div className="flexbox__center">
				<p className="paragraph--medium margin-0">{name}</p>
				<p
					className="font-size-sm margin-0"
					onClick={() => copyToClipboard(name, setCopied)}>
					{copied ? <Check size={18} /> : <Copy size={18} />}
				</p>
			</div>
		</div>
	);
};

export default function Border() {
	return (
		<div className="container-xl" id="Introducao">
			<h2 className="heading2">Border Radius</h2>
			<p className="paragraph">
				Use utilitários como border-radius para aplicar diferentes tamanhos de
				raio de borda a um elemento.
			</p>

			<div className="flexbox__wrap flexbox__center--center margin__bottom--default">
				{borderRadiusTokens.map((item, index) => (
					<CardBorderRadius
						key={index}
						name={item.name}
						styleValue={item.value}
					/>
				))}
			</div>

			<h3 className="heading3" id="lados">
				Arredondando lados separadamente
			</h3>
			<p className="paragraph">
				Use os utilitários border-radius + as propriedades (top, right, bottom
				ou left) + o token de tamanho (*) para arredondar apenas um lado de um
				elemento.
			</p>
			<div className="flexbox__wrap flexbox__center--center margin__bottom--default">
				{borderRadiusLados.map((item, index) => (
					<CardBorderRadius
						key={index}
						name={item.name}
						previewClass={item.previewClass}
					/>
				))}
			</div>
			<div className="container-sm">
				<img
					src={Arredondando_lados_separadamente}
					alt="Arredondando lados separadamente"
					className="image-fluid margin__bottom--default"
				/>
			</div>

			<h3 className="heading3" id="cantos">
				Arredondando cantos separadamente
			</h3>
			<p className="paragraph">
				Use os utilitários border-radius + as propriedades combinadas (top,
				right, bottom ou left) + o token de tamanho (*) para arredondar apenas
				um canto de um elemento.
			</p>
			<div className="flexbox__wrap flexbox__center--center margin__bottom--default">
				{borderRadiusCantos.map((item, index) => (
					<CardBorderRadius
						key={index}
						name={item.name}
						previewClass={item.previewClass}
					/>
				))}
			</div>
			<div className="container-sm">
				<img
					src={Arredondando_cantos_separadamente}
					alt="Arredondando cantos separadamente"
					className="image-fluid margin__bottom--default"
				/>
			</div>
			<TableOfContents
				headings={[
					{ id: "Introducao", label: "Introdução" },
					{ id: "lados", label: "Arredondando lados separadamente" },
					{ id: "cantos", label: "Arredondando cantos separadamente" },
				]}
			/>
		</div>
	);
}
