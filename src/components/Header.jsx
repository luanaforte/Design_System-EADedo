import React, { useEffect, useState } from "react";
import { List } from "@phosphor-icons/react";
import { Outlet, useNavigate } from "react-router-dom";
import Logo from "../EaDedo/assets/ilustracao/Logo-EAD-Unifor-Anil-Horizontal.svg";
import Sidebar from "./Sidebar.jsx";
import MainMenu from "./MainMenu.jsx";
import "../App.css";

export default function Header() {
	const [darkMode, setDarkMode] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [menuItems, setMenuItems] = useState([]);
	const [activeRoute, setActiveRoute] = useState("");
	const [sidebarActiveRoute, setSidebarActiveRoute] = useState("");
	const [expandedSections, setExpandedSections] = useState({});
	const navigate = useNavigate();

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark-theme");
		} else {
			document.documentElement.classList.remove("dark-theme");
		}
	}, [darkMode]);

	const handleToggle = () => {
		setDarkMode(!darkMode);
	};

	// Função para obter itens do menu com base no caminho
	const getMenuItemsForPath = (path) => {
		return MainMenu[path] || [];
	};

	// Função para navegação a partir do Navbar
	const handleNavbarNavigation = (path) => {
		setActiveRoute(path);
		navigate(path);
		const menuItems = getMenuItemsForPath(path);

		if (menuItems.length > 0) {
			setIsSidebarOpen(true);
			setMenuItems(menuItems);
		} else {
			setIsSidebarOpen(false);
			setMenuItems([]);
		}
	};

	// Função para navegação a partir da Sidebar
	const handleSidebarNavigation = (path) => {
		setSidebarActiveRoute(path);
		navigate(path);

		//  Fechar a Sidebar no mobile após a navegação
		if (window.innerWidth <= 768) {
			setIsSidebarOpen(false); // Fecha a sidebar no mobile
		}
	};

	// Função para alternar o menu no mobile
	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
		if (!isSidebarOpen) {
			setMenuItems([
				{ label: "Marca", route: "/Marca" },
				{ label: "Guias", route: "/Guias" },
				{ label: "Fundamentos", route: "/Fundamentos" },
				{ label: "Componentes", route: "/Componentes" },
			]);
		}
	};

	// Função para alternar a visibilidade das seções no mobile
	const toggleSection = (section) => {
		setExpandedSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}));
	};

	return (
		<nav className="navbar">
			<div className="flexbox__center">
				<img
					src={Logo}
					alt="Logotipo da EAD Unifor"
					className="content--visible"
					style={{ width: "200px" }}
					onClick={() => handleNavbarNavigation("/")}
				/>
				<div className="content--visible">
					<MainMenu />
				</div>
				<div className="mobile-menu-icon content--hidden">
					<button onClick={toggleSidebar}>
						<List size={32} />
					</button>
				</div>
			</div>
			<label className="switch">
				<span className="sun">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<g fill="#ffd43b">
							<circle r="5" cy="12" cx="12"></circle>
							<path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
						</g>
					</svg>
				</span>
				<span className="moon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
						<path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
					</svg>
				</span>
				<input
					type="checkbox"
					className="input"
					checked={darkMode}
					onChange={handleToggle}
				/>
				<span className="slider"></span>
			</label>
			{isSidebarOpen && (
				<Sidebar
					isOpen={isSidebarOpen}
					menuItems={menuItems}
					handleNavigation={handleSidebarNavigation}
					activeRoute={activeRoute}
					expandedSections={expandedSections}
					toggleSection={toggleSection}
				/>
			)}
		</nav>
	);
}
