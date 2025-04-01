import React from "react";
import "./Badge.css";

export default function Badge() {
	return (
		<>
			<div className="flexbox__center">
				<div class="badge-notification">
					<span class="badge-notification__content">9</span>
				</div>
				<div class="badge-notification">
					<span class="badge-notification__content">+99</span>
				</div>
			</div>
		</>
	);
}
