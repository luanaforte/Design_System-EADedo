import React from "react";
import "./Avatar.css";

import Profile from "../../assets/imgs/profile.png";
import Avatar_group from "./Avatar_group";
import Avatar_tagline from "./Avatar_tagline";
import Avatar_tagline__group from "./Avatar_tagline__group";

export default function Avatar() {
	return (
		<section className="EadGraduacao ">
			<div className="flexbox__between--center flexbox__wrap margin__bottom--default">
				<div>
					<div className="flexbox__center margin__bottom--default">
						<div className="avatar avatar__letter--lg background-blue-600 ">
							<span className="avatar__letter-content--lg">A</span>
						</div>
						<div className="avatar avatar__letter--md background-blue-600 ">
							<span className="avatar__letter-content--md">A</span>
						</div>
						<div className="avatar avatar__letter--sm background-blue-600 ">
							<span className="avatar__letter-content--sm">A</span>
						</div>
					</div>
					<div className="flexbox__center margin__bottom--default">
						<div className="avatar avatar__letter--lg background-blue-300">
							<span className="avatar__letter-content--additional-lg">+4</span>
						</div>
						<div className="avatar avatar__letter--md background-blue-300">
							<span className="avatar__letter-content--additional-md">+4</span>
						</div>
						<div className="avatar avatar__letter--sm background-blue-300">
							<span className="avatar__letter-content--additional-sm">+4</span>
						</div>
					</div>
					<div className="flexbox__center margin__bottom--default">
						<div className="avatar">
							<img
								src={Profile}
								alt="inserir a alto descrição da pessoa"
								className="avatar__image--lg"
							/>
						</div>
						<div className="avatar">
							<img
								src={Profile}
								alt="inserir a alto descrição da pessoa"
								className="avatar__image--md"
							/>
						</div>
						<div className="avatar">
							<img
								src={Profile}
								alt="inserir a alto descrição da pessoa"
								className="avatar__image--sm"
							/>
						</div>
					</div>
				</div>
				<Avatar_group />
				<Avatar_tagline />
			</div>
			<Avatar_tagline__group />
		</section>
	);
}
