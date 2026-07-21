import React from "react";
import { Card_simple } from "./Card_simple.jsx";
import { Card_indication } from "./Card_indication.jsx";
import { Card_podcast } from "./Card_podcast.jsx";
import { Card_video } from "./Card_video.jsx";
import { Card_Section } from "./Card_Section.jsx";
import { Card_image } from "./Card_image.jsx";
import Card_image_text from "./Card_image_text.jsx";

import "../../fundamentals/index.css";
import "./Cards.css";
import { Card_section_avatar } from "./Card_section_avatar.jsx";

export default function Cards() {
	return (
		<div className="container-lg">
			<Card_Section />
			<Card_image_text />
			<Card_simple />
			<Card_section_avatar />
			<Card_video />
			<Card_indication />
			<Card_podcast />
			<Card_image/>
		</div>
	);
}
