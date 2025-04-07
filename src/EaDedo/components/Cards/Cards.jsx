import React from "react";
import { Card } from "./Card.jsx";
import { CardIndication } from "./CardIndication.jsx";
import { CardPodcast } from "./CardPodcast.jsx";
import { CardVideo } from "./CardVideo.jsx";
import { CardSection } from "./CardSection.jsx";

import "../../fundamentals/index.css";
import "./Cards.css";

export default function Cards() {
	return (
		<div className="container-xl">
			<CardSection />
			<CardIndication />
			<CardPodcast />
			<CardVideo />
			<Card />
		</div>
	);
}
