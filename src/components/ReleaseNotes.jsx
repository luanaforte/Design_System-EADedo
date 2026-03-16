import React from "react";

const releases = [
	{
		version: "1.2.0",
		date: "2025-07-15",
		changes: [
			"Adicionada nova funcionalidade X.",
			"Melhorias na performance do componente Y.",
			"Correção de bugs na integração com Z.",
		],
	},
	{
		version: "1.1.0",
		date: "2025-06-01",
		changes: [
			"Implementado suporte a tema escuro.",
			"Atualização das dependências para melhorar segurança.",
		],
	},
	{
		version: "1.0.0",
		date: "2025-05-10",
		changes: [
			"Primeira versão estável.",
			"Funcionalidades principais implementadas.",
		],
	},
];

export default function ReleaseNotes() {
	return (
		<div>
			<h1 className="heading1">Release Notes</h1>
			{releases.map(({ version, date, changes }) => (
				<section key={version}>
					<header>
						<h2>Versão {version}</h2>
						<time dateTime={date}>{date}</time>
					</header>
					<ul className="list-ul">
						{changes.map((change, i) => (
							<li key={i}>{change}</li>
						))}
					</ul>
				</section>
			))}
		</div>
	);
}
