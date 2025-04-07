import React from "react";
import Image from "../../assets/imgs/image-placeholder.png";
import "./HeroImage.css";

export default function HeroImage() {
	return (
		<section id="Introducao">
			<h3 className="heading3">Introdução</h3>
			<div
				className="HeroImage"
				style={{ backgroundImage: `url(${Image})` }}></div>
		</section>
	);
}
