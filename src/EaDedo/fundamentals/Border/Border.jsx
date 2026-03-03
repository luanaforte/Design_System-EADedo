import React, { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";
import Arredondando_lados_separadamente from "../../../assets/Arredondando_lados_separadamente.png";
import Arredondando_cantos_separadamente from "../../../assets/Arredondando_cantos_separadamente.png";
import "./Border.css";
import TableOfContents from "../../../components/TableOfContents";

const borderRadiusTokens = [
	{ name: "--radius-full", value: "100%" },
	{ name: "--radius-small", value: "0.25rem" },
	{ name: "--radius-medium", value: "0.5rem" },
	{ name: "--radius-large", value: "0.75rem" },
	{ name: "--radius-100", value: "1rem" },
	{ name: "--radius-125", value: "1.25rem" },
	{ name: "--radius-xlarge", value: "1.5rem" },
];

const tocLinks = [
	{ id: "introducao", label: "Introdução" },
	{ id: "tokens", label: "Tokens de Raio" },
	{ id: "lados", label: "Lados Separados" },
	{ id: "cantos", label: "Cantos Específicos" },
];

const CardBorderRadius = ({ name, value, previewClass = "" }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(name);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="card--radius-wrapper">
			<div
				className={`card--radius ${previewClass}`}
				style={
					value
						? {
								borderRadius: value,
								width: "60px",
								height: "60px",
								backgroundColor: "var(--Anil)",
							}
						: { width: "60px", height: "60px", backgroundColor: "var(--Anil)" }
				}
			/>
			<div style={{ textAlign: "center" }}>
				<code
					style={{ fontSize: "0.8rem", display: "block", marginBottom: "4px" }}>
					{name}
				</code>
				<small style={{ color: "var(--color-neutral-600)" }}>
					{value || "Custom"}
				</small>
			</div>
			<button
				onClick={handleCopy}
				style={{
					border: "none",
					background: "none",
					cursor: "pointer",
					color: "var(--Anil)",
				}}>
				{copied ? <Check size={18} weight="bold" /> : <Copy size={18} />}
			</button>
		</div>
	);
};

export default function Border() {
	return (
		<div className="foundation-page">
			<header className="foundation-hero">
				<h2 id="introducao">Border Radius</h2>
				<p>
					O arredondamento de bordas ajuda a criar interfaces mais amigáveis,
					ajudando a focar a atenção do usuário e suavizando a hierarquia visual
					dos componentes.
				</p>
			</header>

			<div className="foundation-container">
				<div className="foundation-body">
					<section id="tokens">
						<h3 className="heading3">Tokens de Raio</h3>
						<p className="paragraph">
							Nossos tokens principais baseados em rem para garantir
							escalabilidade.
						</p>
						<div className="border-page-grid">
							{borderRadiusTokens.map((t, i) => (
								<CardBorderRadius key={i} name={t.name} value={t.value} />
							))}
						</div>
					</section>

					<section id="lados">
						<h3 className="heading3">Lados Separados</h3>
						<p className="paragraph">
							Arredondamento aplicado a eixos horizontais ou verticais
							completos.
						</p>
						<div className="doc-image-wrapper">
							<img
								src={Arredondando_lados_separadamente}
								alt="Lados"
								className="image-fluid"
							/>
						</div>
					</section>

					<section id="cantos">
						<h3 className="heading3">Cantos Específicos</h3>
						<p className="paragraph">
							Controle individual para cada um dos quatro vértices.
						</p>
						<div className="doc-image-wrapper">
							<img
								src={Arredondando_cantos_separadamente}
								alt="Cantos"
								className="image-fluid"
							/>
						</div>
					</section>
				</div>

				<TableOfContents items={tocLinks} />
			</div>
		</div>
	);
}
