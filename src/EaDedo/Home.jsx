import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
	return (
		<>
			<Header />
			<main className="main-content">
				<Outlet />
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
					expedita numquam repellendus atque accusantium quo, quisquam totam
					saepe porro ab tenetur similique ratione repudiandae. Ex reprehenderit
					quisquam aliquid voluptate totam.
				</p>
			</main>
		</>
	);
}
