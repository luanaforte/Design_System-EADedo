import React from "react";
import placeholderImage from "../../assets/imgs/image-placeholder.png";
import "./Cards.css";

export function Card_simple() {
	return (
		<div className="Card-simple margin__bottom--default">
			<div className="card-simple-content">
				<p className="paragraph--medium margin-0 text-blue-600">
					Título especial
				</p>
				<p className="paragraph--medium truncate--four-lines margin-0">
					Texto que funciona como uma introdução a um conteúdo adicional.
				</p>
			</div>
			<img
				src={placeholderImage}
				alt="Imagem de placeholder"
				className="Card-simple-image"
			/>
		</div>
	);
}
