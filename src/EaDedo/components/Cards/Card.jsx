import React from "react";
import placeholderImage from "../../assets/imgs/image-placeholder.png";
import "./Cards.css";

export function Card() {
	return (
		<div className="Card">
			<div className="card-content">
				<p className="paragraph margin-0 text-blue-600">Título especial</p>
				<p className="paragraph margin-0">
					Texto que funciona como uma introdução a um conteúdo adicional.
				</p>
			</div>
			<img
				src={placeholderImage}
				alt="Imagem de placeholder"
				className="cardImage"
			/>
		</div>
	);
}
