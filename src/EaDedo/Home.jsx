import React from "react";
import { useNavigate } from "react-router-dom";
import Card_placeholder from "../components/Card_placeholder";

export default function Home() {
	const navigate = useNavigate();

	return (
		<div className="container-lg">
			<h1 className="display">EADedo Design System</h1>
			<h2 className="heading2">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
				adipisci repudiandae nemo dicta quae reprehenderit! Recusandae nisi
				obcaecati ducimus repellendus? Quo facere amet laudantium debitis
				aperiam doloremque nostrum vitae impedit.
			</h2>

			<a
				href="https://www.npmjs.com/package/design_system2"
				target="_blank"
				rel="noopener noreferrer">
				<img
					src="https://img.shields.io/npm/v/design_system2"
					alt="Versão NPM"
				/>
			</a>

			<p
				className="paragraph cursor-pointer"
				onClick={() => navigate("/ReleaseNotes")}>
				Release Notes
			</p>
		</div>
	);
}
