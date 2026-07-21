import React from "react";
import placeholderImage from "../../assets/imgs/card_image_placeholder.png";
import "./Cards.css";

export function Card_image() {
	return (
		<div className="card-image background-neutral-100 margin__bottom--default">
			<img
				src={placeholderImage}
				alt="Imagem ilustrativa do card"
				className="card-image__image"
			/>
			<p className="paragraph--medium truncate--three-lines text--Marinho margin-0">
				Título Título Título Título Título Título Título Título Título Título
				Título Título
			</p>
		</div>
	);
}

export default Card_image;
