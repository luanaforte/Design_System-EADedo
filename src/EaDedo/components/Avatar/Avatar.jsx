import React from "react";
import "./Avatar.css";

import Profile from "../../assets/imgs/profile.png";

export default function Avatar() {
	return (
		<section>
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
			<div className="avatar__tagline margin__bottom--default">
				<img
					src={Profile}
					alt="Foto do perfil do usuário"
					className="avatar__image--lg"
				/>
				<div className="avatar__info">
					<p className="avatar__name">Nome do Usuário</p>
				</div>
			</div>
			<div className="avatar__tagline margin__bottom--default">
				<img
					src={Profile}
					alt="Foto do perfil do usuário"
					className="avatar__image--lg"
				/>
				<div className="avatar__info">
					<p className="avatar__name">Nome do Usuário</p>
					<p className="avatar__tagline-text">Tagline</p>
				</div>
			</div>
		</section>
	);
}
