import React from "react";
import { useNavigate } from "react-router-dom";
import Card_placeholder from "../../components/Card_placeholder";

export default function Fundamentals() {
	const navigate = useNavigate();
	return (
		<main className="container-xl EadGraduacao ">
			<h1 className="heading1">Fundamentos</h1>
			<div className="flexbox__wrap">
				<Card_placeholder title="Border" onClick={() => navigate("Border")} />
				<Card_placeholder title="Cores" onClick={() => navigate("Cores")} />
				<Card_placeholder
					title="Tipografia"
					onClick={() => navigate("Tipografia")}
				/>
				<Card_placeholder title="Layout" onClick={() => navigate("Layout")} />
				<Card_placeholder
					title="Iconografia"
					onClick={() => navigate("Iconografia")}
				/>
			</div>
		</main>
	);
}
