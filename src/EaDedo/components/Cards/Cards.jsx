import React from "react";
import { Card_simple } from "./Card_simple.jsx";
import { Card_indication } from "./Card_indication.jsx";
import { Card_podcast } from "./Card_podcast.jsx";
import { Card_video } from "./Card_video.jsx";
import { Card_Section } from "./Card_Section.jsx";
import Card_image_text from "./Card_image_text.jsx";

import "../../fundamentals/index.css";
import "./Cards.css";

export default function Cards() {
	return (
		<div className="container-xl">
			<Card_Section />
			<Card_indication />
			<Card_video />
			<Card_podcast />
			<Card_simple />
			<Card_image_text />
		</div>
	);
}
