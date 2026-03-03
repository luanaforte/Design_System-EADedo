import React, { useEffect, useState } from "react";
import {
	SortAscending,
	SortDescending,
	Sun,
	Moon,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import Logo from "../EaDedo/assets/ilustracao/Logo-EAD-Unifor-Anil-Horizontal.svg";
import Sidebar from "./Sidebar.jsx";

export default function Header() {
	const navigate = useNavigate();
	const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1345);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 1320) {
				setIsSidebarOpen(false);
			} else {
				setIsSidebarOpen(true);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleClick = () => {
		setIsSidebarOpen((prev) => !prev);
	};

	const handleNavbarNavigation = (path) => {
		navigate(path);
	};

	const [isDarkMode, setIsDarkMode] = useState(
		localStorage.getItem("theme") === "dark",
	);

	useEffect(() => {
		const html = document.documentElement;
		if (isDarkMode) {
			html.classList.add("dark-theme");
			localStorage.setItem("theme", "dark");
		} else {
			html.classList.remove("dark-theme");
			localStorage.setItem("theme", "light");
		}
	}, [isDarkMode]);

	return (
		<>
			<nav className="navbar background-neutral-100">
				<div className="flexbox__center">
					<div onClick={handleClick} className="cursor-pointer">
						{isSidebarOpen ? (
							<SortDescending size={32} />
						) : (
							<SortAscending size={32} />
						)}
					</div>
					<img
						src={Logo}
						alt="Logotipo da EAD Unifor"
						className="cursor-pointer"
						onClick={() => handleNavbarNavigation("/")}
					/>
				</div>

				<div className="flexbox__center">
					<button
						className="theme-toggle-btn"
						onClick={() => setIsDarkMode(!isDarkMode)}
						title="Alternar tema">
						{isDarkMode ? (
							<Sun size={26} weight="bold" />
						) : (
							<Moon size={26} weight="bold" />
						)}
					</button>
					<p
						className="paragraph cursor-pointer margin-0"
						onClick={() => navigate("/ReleaseNotes")}>
						Release Notes
					</p>
				</div>
			</nav>

			<Sidebar isOpen={isSidebarOpen} />
		</>
	);
}
