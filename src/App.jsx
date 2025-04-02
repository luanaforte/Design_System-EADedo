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

// Componentes
import Icon from "./EaDedo/components/Icon/Icon.jsx";
import Tag from "./EaDedo/components/Tag/Tag.jsx";
import Tag_course from "./EaDedo/components/Tag_course/Tag_course.jsx";
import Carousel_indicators from "./EaDedo/components/Carousel_indicators/carousel_indicators.jsx";
import Alerts from "./EaDedo/components/Alerts/Alerts.jsx";
import Avatar from "./EaDedo/components/Avatar/Avatar.jsx";
import Badge from "./EaDedo/components/Badge/Badge.jsx";
import Accordions from "./EaDedo/components/Accordions/Accordions.jsx";
import Button from "./EaDedo/components/Buttons/Button.jsx";

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
				<Route path="Componentes/Icon" element={<Icon />} />
				<Route path="Componentes/Tag" element={<Tag />} />
				<Route path="Componentes/Tag_course" element={<Tag_course />} />
				<Route
					path="Componentes/Carousel_indicators"
					element={<Carousel_indicators />}
				/>
				<Route path="Componentes/Alerts" element={<Alerts />} />
				<Route path="Componentes/Avatar" element={<Avatar />} />
				<Route path="Componentes/Badge" element={<Badge />} />
				<Route path="Componentes/Accordions" element={<Accordions />} />
				<Route path="Componentes/Button" element={<Button />} />
			</Route>
		</Routes>
	);
};

export default App;
