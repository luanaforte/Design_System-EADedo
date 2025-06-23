import React from "react";
import "./Banner_image_text.css";
import Ilustracao from "../../assets/imgs/image-placeholder.png";

export default function Banner_image_text() {
	return (
		<section className="container-xl EadGraduacao">
			<div className="Banner_image_text--primary margin__bottom--default background-neutral-100">
				<div>
					<img
						src={Ilustracao}
						alt="Inserir a descrição da imagem"
						className="Banner_image_text--primary__image"
					/>
				</div>
				<div>
					<h4 className="heading4">Este é um Título Editável</h4>
					<p className="paragraph--medium">
						Oba, você leu com sucesso esta importante mensagem de alerta. Este
						texto de exemplo vai ser um pouco mais longo para que você possa ver
						como o espaçamento dentro de um alerta funciona com este tipo de
						conteúdo.
					</p>
				</div>
			</div>
			<div className="Banner_image_text--secondary margin__bottom--default background-neutral-100">
				<div>
					<img
						src={Ilustracao}
						alt="Inserir a descrição da imagem"
						className="Banner_image_text--secondary__image"
					/>
				</div>
				<p className="paragraph--medium margin-0 text__center">
					Insira o texto aqui
				</p>
			</div>
		</section>
	);
}
