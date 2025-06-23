import React from "react";
import Image from "../../assets/imgs/image-placeholder.png";
import "./Header_image.css";

export default function Header_image() {
	return (
		<section id="Introducao">
			<h3 className="heading3">Introdução</h3>
			<div
				className="Header_image"
				style={{ backgroundImage: `url(${Image})` }}></div>
		</section>
	);
}
