import React from "react";
import "./CheckList.css";

export default function CheckList() {
	return (
		<div className="checklist-container">
			<label className="flexbox__start checklist-item">
				<input type="checkbox" className="hidden-checkbox" />
				<span className="checkbox-icon"></span>
				<span className="paragraph checklist-text text-neutral-300">
					Você compreendeu a obrigatoriedade da missão para a sua formatura.
				</span>
			</label>
		</div>
	);
}
