import React from "react";
import "./Welcome.css";

export default function Welcome() {
	return (
		<h4 class="heading4 margin__bottom--default">
			Olá,
			<span id="nomeUsuario"></span> 👋
		</h4>
	);
}
