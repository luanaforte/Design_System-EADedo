import React from "react";

/**
 * Seção de conceito do componente
 */
export function ConceptSection({ title, description }) {
	return (
		<section id="conceito" className="concept-section">
			<h3 className="heading3">{title}</h3>
			<p className="paragraph">{description}</p>
		</section>
	);
}

/**
 * Seção de changelog
 */
export function ChangelogSection({ logs }) {
	return (
		<section id="changelog" className="changelog-section">
			<h3 className="heading3">Changelog</h3>

			<div className="changelog-list">
				{logs.map((log, index) => (
					<div key={index} className="changelog-item">
						<div className="changelog-header">
							<span className="version">v{log.version}</span>
							<span className="date">{log.date}</span>
						</div>

						<p className="paragraph">{log.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}

/**
 * Layout base de páginas de componente
 * (opcional para padronizar documentação)
 */
export default function ComponentPageLayout({ title, description, children }) {
	return (
		<div className="component-page-layout">
			<header className="foundation-hero">
				<h2 className="heading2">{title}</h2>
				<p className="paragraph">{description}</p>
			</header>

			<main className="foundation-container">{children}</main>
		</div>
	);
}
