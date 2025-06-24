import React from "react";
import "./Indicator.css";

export default function Indicator() {
	return (
		<div className="indicators">
			<button className="indicator active" onclick="changeSlide(0)"></button>
			<button className="indicator" onclick="changeSlide(1)"></button>
			<button className="indicator" onclick="changeSlide(2)"></button>
		</div>
	);
}
