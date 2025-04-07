import React from "react";
import placeholderImage from "../../assets/imgs/image-placeholder.png";
import "./Cards.css";
import "../../fundamentals/index.css";

export function CardPodcast() {
	return (
		<>
			<a
				href=""
				className="card-podcast margin__bottom--default"
				aria-label="Ouça o podcast">
				<div className="card-podcast__image-container">
					<img
						src={placeholderImage}
						alt="Imagem ilustrativa do podcast"
						className="card-podcast__image"
					/>
				</div>
				<div className="card-podcast-content">
					<p className="truncate--three-lines text-neutral-950 paragraph margin-0">
						Título do card Título do card Título do card Título do card Título
						do card Título do card Título do card Título do card Título do card
						Título do card
					</p>
					<p className="tags text-neutral-600">Podcast 0 - 00:00</p>
				</div>
			</a>
		</>
	);
}
