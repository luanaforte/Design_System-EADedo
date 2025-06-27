import React, { useState } from "react";
import caret_down from "../EaDedo/assets/icons/icon-caret-down.svg";
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
		{ label: "Icon", route: "/Componentes/Icon" },
		{ label: "Tag", route: "/Componentes/Tag" },
		{ label: "Tag Course", route: "/Componentes/Tag_course" },
		{ label: "Indicators", route: "/Componentes/Indicator" },
		{ label: "Button_direction", route: "/Componentes/Button_direction" },
		{ label: "Banner_alert", route: "/Componentes/Banner_alert" },
		{ label: "Banner_image_text", route: "/Componentes/Banner_image_text" },
		{ label: "Avatar", route: "/Componentes/Avatar" },
		{ label: "Badge", route: "/Componentes/Badge" },
		{ label: "Accordions", route: "/Componentes/Accordions" },
		{ label: "Button", route: "/Componentes/Button" },
		{ label: "IframeVideo", route: "/Componentes/IframeVideo" },
		{ label: "Header_image", route: "/Componentes/Header_image" },
		{ label: "Text_header", route: "/Componentes/Text_header" },
		{ label: "Cards", route: "/Componentes/Cards" },
		{ label: "Button_section_menu", route: "/Componentes/Button_section_menu" },
		{ label: "Closing_banner", route: "/Componentes/Closing_banner" },
		{ label: "Tooltip", route: "/Componentes/Tooltip" },
		{ label: "ColapseSection", route: "/Componentes/ColapseSection" },
		{ label: "Progress_bar", route: "/Componentes/Progress_bar" },
		{
			label: "Avatar_tagline__group",
			route: "/Componentes/Avatar_tagline__group",
		},
		{ label: "Header_text", route: "/Componentes/Header_text" },
		{ label: "Slider", route: "/Componentes/Slider" },
		{ label: "Carousel", route: "/Componentes/Carousel" },
		{ label: "toggleLibras", route: "/Componentes/toggleLibras" },
		{ label: "Header_text_image", route: "/Componentes/Header_text_image" },
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
						className="menu-button paragraph--medium"
						onClick={() => toggleMenu(menuKey)}>
						{menuKey}
						<img src={caret_down} alt="" />
					</button>
					<div className={`submenu ${openMenu === menuKey ? "open" : ""}`}>
						{Rotes[menuKey].map((item) => (
							<a
								key={item.route}
								href={item.route}
								className="submenu-link paragraph--medium">
								{item.label}
							</a>
						))}
					</div>
				</div>
			))}
		</div>
	);
}
