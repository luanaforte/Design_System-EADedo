import React from "react";
import Image from "../../assets/imgs/component-mockup.png";

import "./Slider.css";

export default function Slider() {
	return (
		<main className="EadGraduacao container-lg">
			<div className="slider-primario container-lg">
				<div className="flexbox__end margin__bottom--default">
					<button className="button__direction--rounded button-prev">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none">
							<path
								d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75L5.56029 12.75L11.0306 18.2194C11.1003 18.289 11.1556 18.3718 11.1933 18.4628C11.231 18.5539 11.2504 18.6514 11.2504 18.75C11.2504 18.8485 11.231 18.9461 11.1933 19.0372C11.1556 19.1282 11.1003 19.2109 11.0306 19.2806C10.9609 19.3503 10.8782 19.4056 10.7872 19.4433C10.6961 19.481 10.5985 19.5004 10.5 19.5004C10.4014 19.5004 10.3039 19.481 10.2128 19.4433C10.1218 19.4056 10.039 19.3503 9.96935 19.2806L3.21935 12.5306C3.14962 12.461 3.0943 12.3782 3.05656 12.2872C3.01882 12.1961 2.99939 12.0986 2.99939 12C2.99939 11.9014 3.01882 11.8038 3.05656 11.7128C3.0943 11.6217 3.14962 11.539 3.21935 11.4694L9.96935 4.71936C10.1101 4.57863 10.301 4.49957 10.5 4.49957C10.699 4.49957 10.8899 4.57863 11.0306 4.71936C11.1713 4.8601 11.2504 5.05097 11.2504 5.24999C11.2504 5.44901 11.1713 5.63988 11.0306 5.78061L5.56029 11.25L20.25 11.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
								fill="#ACB4CD"
							/>
						</svg>
					</button>
					<button className="button__direction--rounded button-next">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none">
							<path
								d="M20.7806 12.5306L14.0306 19.2806C13.8899 19.4213 13.699 19.5004 13.5 19.5004C13.301 19.5004 13.1101 19.4213 12.9694 19.2806C12.8286 19.1399 12.7496 18.949 12.7496 18.75C12.7496 18.551 12.8286 18.3601 12.9694 18.2194L18.4397 12.75L3.75 12.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25L18.4397 11.25L12.9694 5.78061C12.8286 5.63988 12.7496 5.44901 12.7496 5.24999C12.7496 5.05097 12.8286 4.8601 12.9694 4.71936C13.1101 4.57863 13.301 4.49957 13.5 4.49957C13.699 4.49957 13.8899 4.57863 14.0306 4.71936L20.7806 11.4694C20.8504 11.539 20.9057 11.6217 20.9434 11.7128C20.9812 11.8038 21.0006 11.9014 21.0006 12C21.0006 12.0986 20.9812 12.1961 20.9434 12.2872C20.9057 12.3782 20.8504 12.461 20.7806 12.5306Z"
								fill="#ACB4CD"
							/>
						</svg>
					</button>
				</div>
				<div className="slider-inner-primario margin__bottom--default">
					<div className="slider-item-primario active">
						<img src={Image} alt="" />
					</div>
					<div className="slider-item-primario">
						<img src={Image} alt="" />
					</div>
					<div className="slider-item-primario">
						<img src={Image} alt="" />
					</div>
					<div className="slider-item-primario">
						<img src={Image} alt="" />
					</div>
				</div>
				<div className="indicators slider-indicators"></div>
			</div>
		</main>
	);
}
