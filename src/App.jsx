import React from "react";
import { Routes, Route } from "react-router-dom";
import "./EaDedo/fundamentals/index.css";

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
import Banner_alert from "./EaDedo/components/Banner_alert/Banner_alert.jsx";
import Avatar from "./EaDedo/components/Avatar/Avatar.jsx";
import Badge from "./EaDedo/components/Badge/Badge.jsx";
import Accordions from "./EaDedo/components/Accordions/Accordions.jsx";
import Button from "./EaDedo/components/Buttons/Button.jsx";
import IframeVideo from "./EaDedo/components/IframeVideo/IframeVideo.jsx";
import Header_image from "./EaDedo/components/Header_image/Header_image.jsx";
import Text_header from "./EaDedo/components/Text_header/Text_header.jsx";
import Cards from "./EaDedo/components/Cards/Cards.jsx";
import Button_section_menu from "./EaDedo/components/Button_section_menu/Button_section_menu.jsx";
import Closing_banner from "./EaDedo/components/Closing_banner/Closing_banner.jsx";
import Tooltip from "./EaDedo/components/Tooltip/Tooltip.jsx";
import ColapseSection from "./EaDedo/components/ColapseSection/ColapseSection.jsx";
import Button_direction from "./EaDedo/components/Button_direction/Button_direction.jsx";
import Progress_bar from "./EaDedo/components/Progress_bar/Progress_bar.jsx";
import Banner_image_text from "./EaDedo/components/Banner_image_text/Banner_image_text.jsx";
import Avatar_tagline__group from "./EaDedo/components/Avatar_tagline__group/Avatar_tagline__group.jsx";
import Header_text from "./EaDedo/components/Header_text/Header_text.jsx";

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
				<Route path="Componentes/Banner_alert" element={<Banner_alert />} />
				<Route
					path="Componentes/Banner_image_text"
					element={<Banner_image_text />}
				/>
				<Route path="Componentes/Avatar" element={<Avatar />} />
				<Route path="Componentes/Badge" element={<Badge />} />
				<Route path="Componentes/Accordions" element={<Accordions />} />
				<Route path="Componentes/Button" element={<Button />} />
				<Route path="Componentes/IframeVideo" element={<IframeVideo />} />
				<Route path="Componentes/Header_image" element={<Header_image />} />
				<Route path="Componentes/Text_header" element={<Text_header />} />
				<Route path="Componentes/Cards" element={<Cards />} />
				<Route
					path="Componentes/Button_section_menu"
					element={<Button_section_menu />}
				/>
				<Route path="Componentes/Closing_banner" element={<Closing_banner />} />
				<Route path="Componentes/Tooltip" element={<Tooltip />} />
				<Route path="Componentes/ColapseSection" element={<ColapseSection />} />
				<Route
					path="Componentes/Button_direction"
					element={<Button_direction />}
				/>
				<Route path="Componentes/Progress_bar" element={<Progress_bar />} />
				<Route
					path="Componentes/Avatar_tagline__group"
					element={<Avatar_tagline__group />}
				/>
				<Route path="Componentes/Header_text" element={<Header_text />} />
			</Route>
		</Routes>
	);
};

export default App;
