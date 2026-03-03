import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "../App.css";

export default function Outlet_page() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1345);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 1320) setIsSidebarOpen(false);
			else setIsSidebarOpen(true);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

	return (
		<div className="app-container">
			<Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

			<div className="main-wrapper">
				<Sidebar isOpen={isSidebarOpen} />

				<main
					className={`main-content ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
					<Outlet />
				</main>
			</div>
		</div>
	);
}
