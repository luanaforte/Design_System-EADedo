import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CaretRight, CaretDown, Cube, Books } from "@phosphor-icons/react";
import "../App.css";

export default function Sidebar({ isOpen }) {
	const location = useLocation();
	const navigate = useNavigate();

	const [isFundamentosOpen, setIsFundamentosOpen] = useState(true);
	const [isComponentesOpen, setIsComponentesOpen] = useState(false);
	const [isDisciplinasOpen, setIsDisciplinasOpen] = useState(false);

	useEffect(() => {
		if (location.pathname.includes("/Fundamentos")) setIsFundamentosOpen(true);
		if (location.pathname.includes("/Componentes")) setIsComponentesOpen(true);
		if (location.pathname.includes("/Disciplinas")) setIsDisciplinasOpen(true);
	}, [location.pathname]);

	// Funções apenas para os ícones
	const toggleFundamentos = (e) => {
		e.stopPropagation();
		setIsFundamentosOpen(!isFundamentosOpen);
	};

	const toggleComponentes = (e) => {
		e.stopPropagation();
		setIsComponentesOpen(!isComponentesOpen);
	};

	const toggleDisciplinas = (e) => {
		e.stopPropagation();
		setIsDisciplinasOpen(!isDisciplinasOpen);
	};

	return (
		<aside className={`sidebar ${isOpen ? "show" : "hidden"}`}>
			<ul className="sidebar__menu">
				{/* Seção Fundamentos */}
				<li className="sidebar__menu-item">
					<div
						className={`sidebar__menu-button ${location.pathname.startsWith("/Fundamentos") ? "active-parent" : ""}`}
						onClick={() => navigate("/Fundamentos")}
						style={{ cursor: "pointer" }}>
						<span
							onClick={toggleFundamentos}
							style={{ padding: "5px", cursor: "pointer" }}>
							{isFundamentosOpen ? (
								<CaretDown size={18} weight="bold" />
							) : (
								<CaretRight size={18} weight="bold" />
							)}
						</span>

						<Books size={22} color="var(--Anil)" />
						<span>Fundamentos</span>
					</div>

					{isFundamentosOpen && (
						<ul className="sidebar__submenu">
							{Rotes["/Fundamentos"].map((item) => (
								<li className="sidebar__submenu-item" key={item.route}>
									<Link
										to={item.route}
										className={
											location.pathname === item.route
												? "sidebar__submenu-item-active"
												: ""
										}>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					)}
				</li>

				{/* Seção Componentes */}
				<li className="sidebar__menu-item">
					<div
						className={`sidebar__menu-button ${location.pathname.startsWith("/Componentes") ? "active-parent" : ""}`}
						onClick={() => navigate("/Componentes")}
						style={{ cursor: "pointer" }}>
						<span
							onClick={toggleComponentes}
							style={{ padding: "5px", cursor: "pointer" }}>
							{isComponentesOpen ? (
								<CaretDown size={18} weight="bold" />
							) : (
								<CaretRight size={18} weight="bold" />
							)}
						</span>

						<Cube size={22} color="var(--Anil)" />
						<span>Componentes</span>
					</div>

					{isComponentesOpen && (
						<ul className="sidebar__submenu">
							{Rotes["/Componentes"]
								.sort((a, b) => a.label.localeCompare(b.label))
								.map((item) => (
									<li className="sidebar__submenu-item" key={item.route}>
										<Link
											to={item.route}
											className={
												location.pathname === item.route
													? "sidebar__submenu-item-active"
													: ""
											}>
											{item.label}
										</Link>
									</li>
								))}
						</ul>
					)}
				</li>

				{/* Seção Disciplinas */}
				<li className="sidebar__menu-item">
					<div
						className={`sidebar__menu-button ${location.pathname.startsWith("/Disciplinas") ? "active-parent" : ""}`}
						onClick={() => navigate("/Disciplinas")}
						style={{ cursor: "pointer" }}>
						<span
							onClick={toggleDisciplinas}
							style={{ padding: "5px", cursor: "pointer" }}>
							{isDisciplinasOpen ? (
								<CaretDown size={18} weight="bold" />
							) : (
								<CaretRight size={18} weight="bold" />
							)}
						</span>

						<Books size={22} color="var(--Anil)" />
						<span>Disciplinas</span>
					</div>
				</li>
			</ul>
		</aside>
	);
}

const Rotes = {
	"/Fundamentos": [
		{ label: "Border", route: "/Fundamentos/Border" },
		{ label: "Cores", route: "/Fundamentos/Cores" },
		{ label: "Elevation", route: "/Fundamentos/Elevation" },
		{ label: "Iconografia", route: "/Fundamentos/Iconografia" },
		{ label: "Layout", route: "/Fundamentos/Layout" },
		{ label: "Tipografia", route: "/Fundamentos/Tipografia" },
	],

	"/Componentes": [
		{ label: "Accordions", route: "/Componentes/Accordions" },
		{ label: "Avatar", route: "/Componentes/Avatar" },
		{ label: "Badge", route: "/Componentes/Badge" },
		{ label: "Banner", route: "/Componentes/Banner" },
		{ label: "Buttons", route: "/Componentes/Buttons" },
		{ label: "Cards", route: "/Componentes/Cards" },
		{ label: "Carousel", route: "/Componentes/Carousel" },
		{ label: "Closing_banner", route: "/Componentes/Closing_banner" },
		{ label: "ColapseSection", route: "/Componentes/ColapseSection" },
		{ label: "Header_image", route: "/Componentes/Header_image" },
		{ label: "Header_text", route: "/Componentes/Header_text" },
		{ label: "Header_text_image", route: "/Componentes/Header_text_image" },
		{ label: "Icon", route: "/Componentes/Icon" },
		{ label: "IframeVideo", route: "/Componentes/IframeVideo" },
		{ label: "Indicators", route: "/Componentes/Indicator" },
		{ label: "Progress_bar", route: "/Componentes/Progress_bar" },
		{ label: "Slider", route: "/Componentes/Slider" },
		{ label: "Search", route: "/Componentes/Search" },
		{ label: "Schedule", route: "/Componentes/Schedule" },
		{ label: "Tag", route: "/Componentes/Tag" },
		{ label: "Text_header", route: "/Componentes/Text_header" },
		{ label: "Tooltip", route: "/Componentes/Tooltip" },
		{ label: "Table Cell", route: "/Componentes/Table_cell" },
	],
};
