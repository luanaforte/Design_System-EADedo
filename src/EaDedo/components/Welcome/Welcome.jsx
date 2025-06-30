import React from "react";
import "./Welcome.css";

export default function Welcome() {
	return (
		<h4 className="heading4 font-weight--regular margin__bottom--default">
			Olá,
			<span id="nomeUsuario"></span> 👋
		</h4>
	);
}
