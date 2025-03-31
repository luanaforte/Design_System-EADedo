import { Check, Copy } from "@phosphor-icons/react";
import React from "react";

import "./Border.css";
import { useState } from "react";

const borderRadiusValues = [
	{ name: "border-radius-full", radius: "100%" },
	{ name: "border-radius-025", radius: "0.25rem" },
	{ name: "border-radius-050", radius: "0.5rem" },
	{ name: "border-radius-075", radius: "0.75rem" },
	{ name: "border-radius-100", radius: "1rem" },
	{ name: "border-radius-125", radius: "1.25rem" },
	{ name: "border-radius-150", radius: "1.5rem" },
];

const copyToClipboard = (text, setCopiedText) => {
	navigator.clipboard
		.writeText(text)
		.then(() => {
			setCopiedText(true);
			setTimeout(() => {
				setCopiedText(false);
			}, 2000);
		})
		.catch((err) => {
			console.error("Failed to copy: ", err);
		});
};

const CardBorderRadius = ({ name, radius }) => {
	const [copiedRadius, setCopiedRadius] = useState(false);

	return (
		<main className="flexbox__center--column-center">
			<div
				className="card--radius"
				onClick={() => copyToClipboard(radius, setCopiedRadius)}
				style={{
					borderRadius: radius,
				}}>
				{copiedRadius ? (
					<Check className="copied-icon copied-icon__hover" size={16} />
				) : (
					<Copy className="copied-icon copied-icon__hover" size={16} />
				)}
			</div>
			<div className="flexbox__center">
				<p className="paragraph margin-0">{name}</p>
				<p
					className="font-size-sm margin-0 "
					onClick={() => copyToClipboard(radius, setCopiedRadius)}>
					{copiedRadius ? <Check size={18} /> : <Copy size={18} />}
				</p>
			</div>
		</main>
	);
};

export default function Border() {
	return (
		<div className="container-xl">
			<h2 className="heading2">Border Radius</h2>
			<div className="flexbox__wrap">
				{borderRadiusValues.map((borderRadiusObject, index) => (
					<CardBorderRadius
						key={index}
						name={borderRadiusObject.name}
						radius={borderRadiusObject.radius}
					/>
				))}
			</div>
		</div>
	);
}
