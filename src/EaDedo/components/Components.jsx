import React from "react";
import { useNavigate } from "react-router-dom";
import Card_placeholder from "../../components/Card_placeholder";

export default function Components() {
	const navigate = useNavigate();
	return (
		<main className="container-lg EadGraduacao ">
			<h1 className="heading1">Components</h1>
			<div className="flexbox__wrap">
				<Card_placeholder
					title="Accordions"
					onClick={() => navigate("Accordions")}
				/>
				<Card_placeholder title="Avatar" onClick={() => navigate("Avatar")} />
				<Card_placeholder
					title="Avatar_tagline__group"
					onClick={() => navigate("Avatar_tagline__group")}
				/>
				<Card_placeholder title="Badge" onClick={() => navigate("Badge")} />
				<Card_placeholder
					title="Banner_alert"
					onClick={() => navigate("Banner_alert")}
				/>
				<Card_placeholder
					title="Banner_image_text"
					onClick={() => navigate("Banner_image_text")}
				/>
				<Card_placeholder title="Button" onClick={() => navigate("Button")} />
				<Card_placeholder
					title="Button_direction"
					onClick={() => navigate("Button_direction")}
				/>
				<Card_placeholder
					title="Button_section_menu"
					onClick={() => navigate("Button_section_menu")}
				/>
				<Card_placeholder title="Cards" onClick={() => navigate("Cards")} />
				<Card_placeholder title="chat_IA" onClick={() => navigate("chat_IA")} />
				<Card_placeholder
					title="Carousel"
					onClick={() => navigate("Carousel")}
				/>
				<Card_placeholder
					title="Closing_banner"
					onClick={() => navigate("Closing_banner")}
				/>
				<Card_placeholder
					title="ColapseSection"
					onClick={() => navigate("ColapseSection")}
				/>
				<Card_placeholder
					title="Header_image"
					onClick={() => navigate("Header_image")}
				/>
				<Card_placeholder
					title="Header_text"
					onClick={() => navigate("Header_text")}
				/>
				<Card_placeholder
					title="Header_text_image"
					onClick={() => navigate("Header_text_image")}
				/>
				<Card_placeholder title="Icon" onClick={() => navigate("Icon")} />
				<Card_placeholder
					title="IframeVideo"
					onClick={() => navigate("IframeVideo")}
				/>
				<Card_placeholder
					title="Indicator"
					onClick={() => navigate("Indicator")}
				/>
				<Card_placeholder
					title="Progress_bar"
					onClick={() => navigate("Progress_bar")}
				/>
				<Card_placeholder title="Slider" onClick={() => navigate("Slider")} />
				<Card_placeholder title="Tag" onClick={() => navigate("Tag")} />
				<Card_placeholder
					title="Tag_course"
					onClick={() => navigate("Tag_course")}
				/>
				<Card_placeholder
					title="Text_header"
					onClick={() => navigate("Text_header")}
				/>
				<Card_placeholder
					title="ToggleLibras"
					onClick={() => navigate("ToggleLibras")}
				/>
				<Card_placeholder title="Tooltip" onClick={() => navigate("Tooltip")} />
			</div>
		</main>
	);
}
