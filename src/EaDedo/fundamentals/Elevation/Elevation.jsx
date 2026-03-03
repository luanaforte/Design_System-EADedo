import React, { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";
import "./Elevation.css";
import TableOfContents from "../../../components/TableOfContents";

const elevations = [
	{ name: "elevation-low", elevation: "0px 1px 3px 0px rgba(0, 0, 0, 0.25)" },
	{
		name: "elevation-medium",
		elevation: "0px 5px 10px 0px rgba(0, 0, 0, 0.15)",
	},
	{
		name: "elevation-inset-low",
		elevation: "0px 0px 12px 0px rgba(0, 0, 0, 0.15) inset",
	},
];

const CardElevation = ({ name, elevation }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(elevation);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="elevation-card-wrapper">
			<div
				className="card--elevation"
				onClick={handleCopy}
				style={{ boxShadow: elevation }}>
				{copied ? (
					<Check size={28} weight="bold" color="var(--Anil)" />
				) : (
					<Copy size={28} className="copied-icon" />
				)}
			</div>

			<div className="elevation-info">
				<span className="elevation-name">{name}</span>
				<div className="elevation-value-box" onClick={handleCopy}>
					<code>{copied ? "Copiado!" : "Copy Shadow"}</code>
					{copied ? <Check size={14} /> : <Copy size={14} />}
				</div>
			</div>
		</div>
	);
};

export default function Elevation() {
	const tocLinks = [
		{ id: "introducao", label: "Introdução" },
		{ id: "tokens", label: "Tokens de Elevação" },
		{ id: "conceito", label: "Conceito de Camadas" },
	];

	return (
		<div className="foundation-page">
			<header className="foundation-hero">
				<h2 id="introducao">Elevation</h2>
				<p>
					Utilizamos sombras e profundidade para indicar hierarquia,
					interatividade e camadas de informação dentro da interface.
				</p>
			</header>

			<div className="foundation-container">
				<div className="foundation-body">
					<section id="tokens">
						<h3 className="heading3">Tokens de Elevação</h3>
						<p className="paragraph">
							Nossas elevações são padronizadas para garantir que o usuário
							entenda quais elementos estão acima da superfície principal.
						</p>
						<div className="elevation-grid">
							{elevations.map((item, index) => (
								<CardElevation
									key={index}
									name={item.name}
									elevation={item.elevation}
								/>
							))}
						</div>
					</section>

					<hr className="margin__bottom--default" />

					<section id="conceito">
						<h3 className="heading3">Conceito de Camadas</h3>
						<p className="paragraph">
							A elevação não é apenas estética; ela serve para guiar o foco.
							Elementos com <strong>elevation-medium</strong> tendem a ser
							modais ou menus que exigem atenção imediata, enquanto{" "}
							<strong>elevation-low</strong> é usado para cards interativos.
						</p>
						<div
							className="doc-image-wrapper"
							style={{ background: "var(--color-neutral-200)" }}>
							<section id="regras" className="rules-container">
								<h3 className="heading3">Regras do modelo</h3>
								<p className="paragraph">
									Use sombras inset para campos de input ou estados
									pressionados.
								</p>
							</section>
						</div>
					</section>
				</div>

				{/* SUMÁRIO LATERAL REUTILIZÁVEL */}
				<TableOfContents items={tocLinks} />
			</div>
		</div>
	);
}
