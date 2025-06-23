import React from "react";
import "./Cards.css";
import Ilustracao from "../../assets/imgs/image-placeholder.png";

export default function Card_image_text() {
	return (
		<section className="container-xl EadGraduacao">
			<div className="Card_image_text margin__bottom--default background-neutral-100">
				<div>
					<img
						src={Ilustracao}
						alt="Inserir a descrição da imagem"
						className="Card_image_text__image"
					/>
				</div>
				<div className="flexbox__between--start">
					<div>
						<h4 className="heading4">Este é um Título Editável</h4>
						<p className="paragraph--medium">
							Oba, você leu com sucesso esta importante mensagem de alerta. Este
							texto de exemplo vai ser um pouco mais longo para que você possa
							ver como o espaçamento dentro de um alerta funciona com este tipo
							de conteúdo.
						</p>
					</div>
					<a
						className="button-pill button--icon-left button--blue"
						href="https://exemplo.com"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Acessar ...">
						Acessar
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none">
							<path
								d="M14.0623 4.5V11.8125C14.0623 11.9617 14.0031 12.1048 13.8976 12.2102C13.7921 12.3157 13.649 12.375 13.4998 12.375C13.3506 12.375 13.2076 12.3157 13.1021 12.2102C12.9966 12.1048 12.9373 11.9617 12.9373 11.8125V5.85773L4.89779 13.898C4.79225 14.0035 4.64909 14.0628 4.49982 14.0628C4.35056 14.0628 4.2074 14.0035 4.10186 13.898C3.99631 13.7924 3.93701 13.6493 3.93701 13.5C3.93701 13.3507 3.99631 13.2076 4.10186 13.102L12.1421 5.0625H6.18732C6.03814 5.0625 5.89507 5.00324 5.78958 4.89775C5.68409 4.79226 5.62482 4.64918 5.62482 4.5C5.62482 4.35082 5.68409 4.20774 5.78958 4.10225C5.89507 3.99676 6.03814 3.9375 6.18732 3.9375H13.4998C13.649 3.9375 13.7921 3.99676 13.8976 4.10225C14.0031 4.20774 14.0623 4.35082 14.0623 4.5Z"
								fill="#151720"
							/>
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}
