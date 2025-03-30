import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./EaDedo/Home.jsx"; // Alterado para importação padrão

import Fundamentos from "./EaDedo/fundamentals/Fundamentals.jsx";
import Border from "./EaDedo/fundamentals/Border/Border.jsx";
import Cores from "./EaDedo/fundamentals/Cores/Cores.jsx";
import Elevation from "./EaDedo/fundamentals/Elevation/Elevation.jsx";
import Iconografia from "./EaDedo/fundamentals/Iconografia/Iconografia.jsx";
import Layout from "./EaDedo/fundamentals/Layout/Layout.jsx";
import Tipografia from "./EaDedo/fundamentals/Tipografia/Tipografia.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				<Route path="Fundamentos" element={<Fundamentos />} />
				<Route path="Fundamentos/Border" element={<Border />} />
				<Route path="Fundamentos/Cores" element={<Cores />} />
				<Route path="Fundamentos/Elevation" element={<Elevation />} />
				<Route path="Fundamentos/Iconografia" element={<Iconografia />} />
				<Route path="Fundamentos/Layout" element={<Layout />} />
				<Route path="Fundamentos/Tipografia" element={<Tipografia />} />
			</Route>
		</Routes>
	);
};

export default App;
