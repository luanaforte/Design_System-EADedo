import React from "react";

/**
 * @param {Array} items - Array de objetos com { id: "string", label: "string" }
 */
export default function TableOfContents({ items = [] }) {
	const scrollTo = (id) => {
		const el = document.getElementById(id);
		if (!el) return;

		const offset = 100; // Ajuste por causa da Navbar fixa
		const bodyRect = document.body.getBoundingClientRect().top;
		const elementRect = el.getBoundingClientRect().top;
		const elementPosition = elementRect - bodyRect;
		const offsetPosition = elementPosition - offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	};

	return (
		<aside className="foundation-toc">
			<nav>
				<p className="toc-title">Nesta página</p>
				<ul className="toc-list">
					{items.map((item) => (
						<li className="toc-item" key={item.id}>
							<a
								href={`#${item.id}`}
								onClick={(e) => {
									e.preventDefault();
									scrollTo(item.id);
								}}>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}
