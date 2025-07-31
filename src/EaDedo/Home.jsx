import React from "react";
import { Outlet, useOutlet, useNavigate } from "react-router-dom";
import "../App.css";
import Header from "../components/Header";
import Card_placeholder from "../components/Card_placeholder";
import Sidebar from "../components/Sidebar";

export default function Home() {
	const navigate = useNavigate();

	const outlet = useOutlet();

	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<main className="EadGraduacao main-content container-xl">
					{outlet ? (
						<Outlet />
					) : (
						<>
							<h1 className="display">EADedo Design System</h1>
							<h2 className="heading2">
								Um mine texto de boas vindas e resumo do projeto
							</h2>
							<a
								href="https://www.npmjs.com/package/design_system2"
								target="_blank"
								rel="noopener noreferrer">
								<img
									src="https://img.shields.io/npm/v/design_system2"
									alt="Versão do design_system2 no NPM"
								/>
							</a>
							<p
								className="paragraph"
								onClick={() => navigate("/ReleaseNotes")}>
								Release Notes
							</p>
							<div className="flexbox__wrap">
								<Card_placeholder
									title="Fundamentos"
									onClick={() => navigate("Fundamentos")}
								/>
								<Card_placeholder
									title="Componentes"
									onClick={() => navigate("Componentes")}
								/>
							</div>
						</>
					)}
				</main>
			</div>
		</>
	);
}
