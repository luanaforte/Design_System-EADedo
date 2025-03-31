import React from "react";
import "../App.css";

const Sidebar = ({ isOpen, menuItems, handleNavigation, activeRoute }) => {
	if (!isOpen) return null;

	return (
		<aside className="sidebar">
			<ul className="sidebar__menu">
				{menuItems.map((item, index) => (
					<li key={index}>
						<button
							className="sidebar__button"
							style={{ color: activeRoute === item.route ? "#004AF7" : "" }}
							onClick={() => handleNavigation(item.route)}
							aria-label={`Ir para ${item.label}`}>
							{item.label}
						</button>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
