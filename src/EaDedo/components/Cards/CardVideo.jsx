import React from "react";
import placeholderImage from "../../assets/imgs/image-placeholder.png";
import "./Cards.css";

export function CardVideo() {
	return (
		<a href="" className="card-video margin__bottom--default">
			<div className="cardImage__secundary-container">
				<img
					src={placeholderImage}
					alt="Imagem ilustrativa do artigo"
					className="cardImage__secundary"
				/>
			</div>
			<p className="truncate--three-lines text-neutral-950 paragraph margin-0">
				Título do card Título do card Título do card Título do card Título do
				card Título do card Título do card Título do card Título do card Título
				do card
			</p>
			<p className="tags text-neutral-600">Podcast 0 - 00:00</p>
		</a>
	);
}
