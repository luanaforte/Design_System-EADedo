import React from "react";
import "./carousel_indicators.css";

export default function Carousel_indicators() {
	return (
		<div className="carousel-indicators">
			<button className="indicator active" onclick="changeSlide(0)"></button>
			<button className="indicator" onclick="changeSlide(1)"></button>
			<button className="indicator" onclick="changeSlide(2)"></button>
		</div>
	);
}
