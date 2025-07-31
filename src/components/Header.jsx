import React, { useEffect, useState } from "react";
import { SortAscending, SortDescending } from "@phosphor-icons/react";
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

	return (
		<>
			<nav className="navbar background-neutral-100">
				<div onClick={handleClick} className="cursor-pointer">
					{isSidebarOpen ? (
						<SortDescending size={32} />
					) : (
						<SortAscending size={32} />
					)}
				</div>

				<div className="flexbox__center">
					<img
						src={Logo}
						alt="Logotipo da EAD Unifor"
						className="cursor-pointer"
						onClick={() => handleNavbarNavigation("/")}
					/>
				</div>
			</nav>

			<Sidebar isOpen={isSidebarOpen} />
		</>
	);
}
