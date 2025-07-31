import React, { useEffect, useState } from "react";

export default function TableOfContents({ headings = [] }) {
	const [activeId, setActiveId] = useState("");

	useEffect(() => {
		const handleIntersect = (entries) => {
			const visible = entries
				.filter((entry) => entry.isIntersecting)
				.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

			if (visible.length > 0) {
				setActiveId(visible[0].target.id);
			}
		};

		const observer = new IntersectionObserver(handleIntersect, {
			rootMargin: "0px 0px -80% 0px",
			threshold: 0.1,
		});

		headings.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, [headings]);

	const scrollToSection = (id) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<nav className="toc">
			<h4 className="toc__title">Sumário</h4>
			<ul className="toc__list">
				{headings.map(({ id, label }) => (
					<li
						key={id}
						className={`toc__item ${
							activeId === id ? "toc__item--active" : ""
						}`}
						onClick={() => scrollToSection(id)}>
						{label}
					</li>
				))}
			</ul>
		</nav>
	);
}
