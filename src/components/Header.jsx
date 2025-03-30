import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../EaDedo/assets/ilustracao/Logo-EAD-Unifor-Anil-Horizontal.svg";
import "../App.css";

export default function Header() {
	const navigate = useNavigate();
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className="header">
			<button onClick={() => navigate("/")} className="header__link">
				<img src={Logo} alt="Logo-EAD-Unifor-Anil-Horizontal" />
			</button>
			<nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
				<button onClick={toggleMenu} className="header__link">
					Fundamentos
				</button>
				{menuOpen && (
					<div className="header__dropdown">
						<button
							onClick={() => navigate("/Fundamentos/border")}
							className="header__link">
							Border
						</button>
						<button
							onClick={() => navigate("/Fundamentos/cores")}
							className="header__link">
							Cores
						</button>
						<button
							onClick={() => navigate("/Fundamentos/elevation")}
							className="header__link">
							Elevation
						</button>
						<button
							onClick={() => navigate("/Fundamentos/iconografia")}
							className="header__link">
							Iconografia
						</button>
						<button
							onClick={() => navigate("/Fundamentos/layout")}
							className="header__link">
							Layout
						</button>
						<button
							onClick={() => navigate("/Fundamentos/tipografia")}
							className="header__link">
							Tipografia
						</button>
					</div>
				)}
			</nav>
		</header>
	);
}
