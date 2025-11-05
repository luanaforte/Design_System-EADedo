import React from "react";
import "./Button.css";

export default function Button_notification() {
	return (
		<section id="Introducao">
			<a
				className="button-notification"
				href="https://exemplo.com"
				aria-label="Insira aqui o texto/função do button">
				<div className="avatar-group--sm">
					<div className="avatar avatar__letter--sm background-blue-900 ">
						<span className="avatar__letter-content--sm">A</span>
					</div>
					<div className="avatar avatar__letter--sm background-blue-600 ">
						<span className="avatar__letter-content--sm">B</span>
					</div>
				</div>
				<div className="flexbox__center">
					<p className="button-notification__text">
						<span className="button-notification__text-part">
							Fique por dentro:
						</span>
						confira os <b>avisos</b>!
					</p>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="16"
							viewBox="0 0 20 16"
							fill="none">
							<path
								d="M15.6253 4V10.5C15.6253 10.6326 15.5595 10.7598 15.4423 10.8536C15.3251 10.9473 15.1661 11 15.0003 11C14.8346 11 14.6756 10.9473 14.5584 10.8536C14.4412 10.7598 14.3753 10.6326 14.3753 10.5V5.20687L5.44254 12.3538C5.32526 12.4476 5.1662 12.5003 5.00035 12.5003C4.8345 12.5003 4.67544 12.4476 4.55816 12.3538C4.44088 12.2599 4.375 12.1327 4.375 12C4.375 11.8673 4.44088 11.7401 4.55816 11.6462L13.4918 4.5H6.87535C6.70959 4.5 6.55062 4.44732 6.43341 4.35355C6.3162 4.25979 6.25035 4.13261 6.25035 4C6.25035 3.86739 6.3162 3.74021 6.43341 3.64645C6.55062 3.55268 6.70959 3.5 6.87535 3.5H15.0003C15.1661 3.5 15.3251 3.55268 15.4423 3.64645C15.5595 3.74021 15.6253 3.86739 15.6253 4Z"
								fill="#1529FF"
							/>
						</svg>
					</div>
				</div>
				<div class="badge-notification button-notification__badge">
					{/* remover o numero quando for usar no moodle */}
					<span class="badge-notification__content">9</span>
				</div>
			</a>
		</section>
	);
}
