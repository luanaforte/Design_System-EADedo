import React from "react";
import "./Summary.css";

export function Summary() {
	return (
		<div className="summary margin__bottom--default">
			<h3 className=" heading3 text-blue-900 margin-0">Neste Módulo</h3>
			<nav className="summary__list">
				<div className="summary__item">
					<a href="#titulo-1" className="summary__link paragraph">
						Título 1
					</a>
				</div>
				<div className="summary__item">
					<a href="#titulo-2" className="summary__link paragraph">
						Título 1
					</a>
				</div>
				<div className="summary__item">
					<a href="#titulo-3" className="summary__link paragraph">
						Título 1
					</a>
				</div>
				<div className="summary__item">
					<a href="#titulo-4" className="summary__link paragraph">
						Título 1
					</a>
				</div>
				<div className="summary__item">
					<a href="#titulo-5" className="summary__link paragraph">
						Título 1
					</a>
				</div>
			</nav>
		</div>
	);
}

export default Summary;
