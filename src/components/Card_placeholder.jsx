import React from "react";

export default function Card_placeholder({ title, onClick }) {
	return (
		<div className="card" onClick={onClick}>
			<div className="card__skeleton card__title">
				<h3 className="heading3">{title}</h3>
			</div>
			<div className="card__skeleton card__description"></div>
		</div>
	);
}
