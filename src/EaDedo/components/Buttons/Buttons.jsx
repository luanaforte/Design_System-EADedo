import React from "react";
import "./Button.css";

import Button_section from "./Button_section";
import Button_rounded_gradient from "./Button_rounded_gradient";
import Button_rounded from "./Button_rounded";
import Button_pill from "./Button_pill";
import Button_minimal from "./Button_minimal";
import Button_notification from "./Button_notification";
import Button_media_link from "./Button_media_link";
import Button_section_menu from "./Button_section_menu";
import Button_direction from "./Button_direction";

export default function Buttons() {
	return (
		<section id="Introducao">
			<h3 className="heading3">Introdução</h3>
			<h4 className="heading4">Pill</h4>
			<Button_pill />
			<h4 className="heading4">Rounded</h4>
			<Button_rounded />
			<Button_rounded_gradient />
			<h4 className="heading4">Minimal</h4>
			<Button_minimal />
			<h4 className="heading4">Custom button-notification</h4>
			<Button_notification />
			<h4 className="heading4">Custom button-media-link</h4>
			<Button_media_link />
			<h4 className="heading4">Section Button</h4>
			<Button_section />
			<h4 className="heading4">Section Menu Button</h4>
			<Button_section_menu />
			<h4 className="heading4">Direction Button</h4>
			<Button_direction />
		</section>
	);
}
