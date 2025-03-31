import React, { useState } from "react";
import { caret_down } from "../EaDedo/assets/icons/icon-caret-down.svg";
import "../App.css";

const Rotes = {
	"/Fundamentos": [
		{ label: "Tipografia", route: "/Fundamentos/Tipografia" },
		{ label: "Cores", route: "/Fundamentos/Cores" },
		{ label: "Elevation", route: "/Fundamentos/Elevation" },
		{ label: "Border", route: "/Fundamentos/Border" },
		{ label: "Layout", route: "/Fundamentos/Layout" },
		{ label: "Iconografia", route: "/Fundamentos/Iconografia" },
	],
	"/Componentes": [
		{ label: "Alerts", route: "/Componentes/Alerts" },
		{ label: "Avatar", route: "/Componentes/Avatar" },
		{ label: "Accordions", route: "/Componentes/Accordions" },
		{ label: "ColapseSection", route: "/Componentes/ColapseSection" },
		{ label: "Badge", route: "/Componentes/Badge" },
		{ label: "Button", route: "/Componentes/Button" },
		{ label: "HeroImage", route: "/Componentes/HeroImage" },
		{ label: "Cards", route: "/Componentes/Cards" },
		{ label: "IframeVideo", route: "/Componentes/IframeVideo" },
		{ label: "Tag", route: "/Componentes/Tag" },
	],
};

export default function MainMenu() {
	const [openMenu, setOpenMenu] = useState(null);

	const toggleMenu = (menu) => {
		setOpenMenu(openMenu === menu ? null : menu);
	};

	return (
		<div className="menu">
			{Object.keys(Rotes).map((menuKey) => (
				<div key={menuKey} className="menu-item">
					<button
						className="menu-button paragraph"
						onClick={() => toggleMenu(menuKey)}>
						{menuKey}
						<img src={caret_down} alt="" />
					</button>
					<div className={`submenu ${openMenu === menuKey ? "open" : ""}`}>
						{Rotes[menuKey].map((item) => (
							<a
								key={item.route}
								href={item.route}
								className="submenu-link paragraph">
								{item.label}
							</a>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
