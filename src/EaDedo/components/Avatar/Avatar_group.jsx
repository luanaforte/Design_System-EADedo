import React from "react";
import "./Avatar.css";

export default function Avatar_group() {
	return (
		<section className="EadGraduacao">
			<div className="avatar-group margin__bottom--default">
				<div className="avatar avatar__letter--lg background-blue-900 ">
					<span className="avatar__letter-content--lg">A</span>
				</div>
				<div className="avatar avatar__letter--lg background-blue-600 ">
					<span className="avatar__letter-content--lg">B</span>
				</div>
				<div className="avatar avatar__letter--lg background-blue-300">
					<span className="avatar__letter-content--additional-lg">+4</span>
				</div>
			</div>
			<div className="avatar-group margin__bottom--default">
				<div className="avatar avatar__letter--lg background-blue-900 ">
					<span className="avatar__letter-content--lg">A</span>
				</div>
				<div className="avatar avatar__letter--lg background-blue-600 ">
					<span className="avatar__letter-content--lg">B</span>
				</div>
			</div>
			<div className="avatar-group--sm margin__bottom--default">
				<div className="avatar avatar__letter--sm background-blue-900 ">
					<span className="avatar__letter-content--sm">A</span>
				</div>
				<div className="avatar avatar__letter--sm background-blue-600 ">
					<span className="avatar__letter-content--sm">B</span>
				</div>
				<div className="avatar avatar__letter--sm background-blue-300">
					<span className="avatar__letter-content--additional-sm">+4</span>
				</div>
			</div>
			<div className="avatar-group--sm margin__bottom--default">
				<div className="avatar avatar__letter--sm background-blue-900 ">
					<span className="avatar__letter-content--sm">A</span>
				</div>
				<div className="avatar avatar__letter--sm background-blue-600 ">
					<span className="avatar__letter-content--sm">B</span>
				</div>
			</div>
		</section>
	);
}
