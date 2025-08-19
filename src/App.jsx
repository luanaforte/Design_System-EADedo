import React from "react";
import { Routes, Route } from "react-router-dom";
import "./EaDedo/fundamentals/index.css";

import Home from "./EaDedo/Home.jsx";

import Fundamentos from "./EaDedo/fundamentals/Fundamentals.jsx";
import Border from "./EaDedo/fundamentals/Border/Border.jsx";
import Cores from "./EaDedo/fundamentals/Cores/Cores.jsx";
import Elevation from "./EaDedo/fundamentals/Elevation/Elevation.jsx";
import Iconografia from "./EaDedo/fundamentals/Iconografia/Iconografia.jsx";
import Layout from "./EaDedo/fundamentals/Layout/Layout.jsx";
import Tipografia from "./EaDedo/fundamentals/Tipografia/Tipografia.jsx";

// Componentes
import Components from "./EaDedo/components/Components.jsx";
import Accordions from "./EaDedo/components/Accordions/Accordions.jsx";
import Avatar from "./EaDedo/components/Avatar/Avatar.jsx";
import Avatar_tagline__group from "./EaDedo/components/Avatar_tagline__group/Avatar_tagline__group.jsx";
import Badge from "./EaDedo/components/Badge/Badge.jsx";
import Banner_alert from "./EaDedo/components/Banner_alert/Banner_alert.jsx";
import Banner_image_text from "./EaDedo/components/Banner_image_text/Banner_image_text.jsx";
import Button from "./EaDedo/components/Buttons/Button.jsx";
import Button_direction from "./EaDedo/components/Button_direction/Button_direction.jsx";
import Button_section_menu from "./EaDedo/components/Button_section_menu/Button_section_menu.jsx";
import Cards from "./EaDedo/components/Cards/Cards.jsx";
import chat_IA from "./EaDedo/components/Chat_IA/Chat_IA.jsx";
import Carousel from "./EaDedo/components/Carousel/Carousel.jsx";
import Closing_banner from "./EaDedo/components/Closing_banner/Closing_banner.jsx";
import ColapseSection from "./EaDedo/components/ColapseSection/ColapseSection.jsx";
import Header_image from "./EaDedo/components/Header_image/Header_image.jsx";
import Header_text from "./EaDedo/components/Header_text/Header_text.jsx";
import Header_text_image from "./EaDedo/components/Header_text_image/Header_text_image.jsx";
import Icon from "./EaDedo/components/Icon/Icon_doc.jsx";
import IframeVideo from "./EaDedo/components/IframeVideo/IframeVideo.jsx";
import Indicator from "./EaDedo/components/Indicator/Indicator.jsx";
import Progress_bar from "./EaDedo/components/Progress_bar/Progress_bar.jsx";
import Slider from "./EaDedo/components/Slider/Slider.jsx";
import Tag from "./EaDedo/components/Tag/Tag.jsx";
import Tag_course from "./EaDedo/components/Tag_course/Tag_course.jsx";
import Text_header from "./EaDedo/components/Text_header/Text_header.jsx";
import ToggleLibras from "./EaDedo/components/ToggleLibras/toggleLibras.jsx";
import Tooltip from "./EaDedo/components/Tooltip/Tooltip.jsx";

// Importing specific DS
import ReleaseNotes from "./components/ReleaseNotes.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}>
				{/* specific DS */}
				<Route path="/ReleaseNotes" element={<ReleaseNotes />} />

				{/* Fundamentos */}
				<Route path="Fundamentos" element={<Fundamentos />} />
				<Route path="Fundamentos/Border" element={<Border />} />
				<Route path="Fundamentos/Cores" element={<Cores />} />
				<Route path="Fundamentos/Elevation" element={<Elevation />} />
				<Route path="Fundamentos/Iconografia" element={<Iconografia />} />
				<Route path="Fundamentos/Layout" element={<Layout />} />
				<Route path="Fundamentos/Tipografia" element={<Tipografia />} />

				{/* Componentes */}
				<Route path="Componentes" element={<Components />} />
				<Route path="Componentes/Accordions" element={<Accordions />} />
				<Route path="Componentes/Avatar" element={<Avatar />} />
				<Route
					path="Componentes/Avatar_tagline__group"
					element={<Avatar_tagline__group />}
				/>
				<Route path="Componentes/Badge" element={<Badge />} />
				<Route path="Componentes/Banner_alert" element={<Banner_alert />} />
				<Route
					path="Componentes/Banner_image_text"
					element={<Banner_image_text />}
				/>
				<Route path="Componentes/Button" element={<Button />} />
				<Route
					path="Componentes/Button_direction"
					element={<Button_direction />}
				/>
				<Route
					path="Componentes/Button_section_menu"
					element={<Button_section_menu />}
				/>
				<Route path="Componentes/Cards" element={<Cards />} />
				<Route path="Componentes/Carousel" element={<Carousel />} />
				<Route path="Componentes/Closing_banner" element={<Closing_banner />} />
				<Route path="Componentes/ColapseSection" element={<ColapseSection />} />
				<Route path="Componentes/Header_image" element={<Header_image />} />
				<Route path="Componentes/Header_text" element={<Header_text />} />
				<Route
					path="Componentes/Header_text_image"
					element={<Header_text_image />}
				/>
				<Route path="Componentes/Icon" element={<Icon />} />
				<Route path="Componentes/IframeVideo" element={<IframeVideo />} />
				<Route path="Componentes/Indicator" element={<Indicator />} />
				<Route path="Componentes/Progress_bar" element={<Progress_bar />} />
				<Route path="Componentes/Slider" element={<Slider />} />
				<Route path="Componentes/Tag" element={<Tag />} />
				<Route path="Componentes/Tag_course" element={<Tag_course />} />
				<Route path="Componentes/Text_header" element={<Text_header />} />
				<Route path="Componentes/Tooltip" element={<Tooltip />} />
				<Route path="Componentes/ToggleLibras" element={<ToggleLibras />} />
			</Route>
		</Routes>
	);
};

export default App;
