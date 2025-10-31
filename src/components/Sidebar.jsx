import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CaretRight, CaretDown } from "@phosphor-icons/react";

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
		{ label: "Banner_alert", route: "/Componentes/Banner_alert" },
		{ label: "Banner_image_text", route: "/Componentes/Banner_image_text" },
		{ label: "Button", route: "/Componentes/Button" },
		{ label: "Button_direction", route: "/Componentes/Button_direction" },
		{ label: "Button_section_menu", route: "/Componentes/Button_section_menu" },
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
		{ label: "Tag", route: "/Componentes/Tag" },
		{ label: "Text_header", route: "/Componentes/Text_header" },
		{ label: "Tooltip", route: "/Componentes/Tooltip" },
	],
};

export default function Sidebar({ isOpen }) {
	const location = useLocation();
	const [isFundamentosOpen, setIsFundamentosOpen] = useState(false);
	const [isComponentesOpen, setIsComponentesOpen] = useState(false);

	return (
		<aside
			className={`sidebar background-neutral-100 ${
				isOpen ? "show" : "hidden"
			}`}>
			<ul className="sidebar__menu">
				{/* Fundamentos */}
				<li className="sidebar__menu-item">
					<Link
						className="sidebar__menu-button legend"
						to="/Fundamentos"
						onClick={() => setIsFundamentosOpen(!isFundamentosOpen)}>
						{isFundamentosOpen ? (
							<CaretDown size={24} />
						) : (
							<CaretRight size={24} />
						)}
						Fundamentos
					</Link>
					{isFundamentosOpen && (
						<ul className="sidebar__submenu">
							{Rotes["/Fundamentos"].map((item) => (
								<li className="sidebar__submenu-item" key={item.route}>
									<Link
										to={item.route}
										className={`legend ${
											location.pathname === item.route
												? "sidebar__submenu-item-active"
												: ""
										}`}>
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					)}
				</li>

				{/* Componentes */}
				<li className="sidebar__menu-item">
					<Link
						className="sidebar__menu-button legend"
						to="/Componentes"
						onClick={() => setIsComponentesOpen(!isComponentesOpen)}>
						{isComponentesOpen ? (
							<CaretDown size={24} />
						) : (
							<CaretRight size={24} />
						)}
						Componentes
					</Link>
					{isComponentesOpen && (
						<ul className="sidebar__submenu">
							{Rotes["/Componentes"]
								.sort((a, b) => a.label.localeCompare(b.label))
								.map((item) => (
									<li className="sidebar__submenu-item" key={item.route}>
										<Link
											to={item.route}
											className={`legend ${
												location.pathname === item.route
													? "sidebar__submenu-item-active"
													: ""
											}`}>
											{item.label}
										</Link>
									</li>
								))}
						</ul>
					)}
				</li>
			</ul>
		</aside>
	);
}
