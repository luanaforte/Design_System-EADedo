import React from "react";
import "./ColapseSection.css";
import IframeVideo from "../IframeVideo/IframeVideo.jsx";

export function toggleCollapse() {
	const content = document.getElementById("collapse_section");
	const button = document.getElementById("collapse_section-button");
	const buttonText = document.getElementById("collapse_section-button--text");

	content.classList.toggle("open");
	button.classList.toggle("active");

	const isOpen = content.classList.contains("open");
	buttonText.innerText = isOpen ? "Recolher" : "Ver detalhes";
	buttonText.setAttribute(
		"aria-label",
		isOpen ? "Recolher conteúdo [nome]" : "Ver detalhes do conteúdo [nome]"
	);
}

export default function ColapseSection() {
	return (
		<div className="container-xl EadGraduacao">
			<div className="collapse_section" id="collapse_section">
				<div className="collapse_section-header">
					<div className="flexbox__between--center">
						<div className="header__icon">
							<svg
								className="icon-size-md"
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 32 32"
								fill="none">
								<path
									d="M29.8976 12.1574C29.7726 11.7731 29.5366 11.4344 29.2194 11.1839C28.9022 10.9334 28.5179 10.7824 28.1151 10.7499L20.7401 10.1549L17.8926 3.2687C17.7386 2.89347 17.4765 2.57251 17.1396 2.34662C16.8027 2.12073 16.4063 2.00012 16.0007 2.00012C15.5951 2.00012 15.1987 2.12073 14.8618 2.34662C14.5249 2.57251 14.2628 2.89347 14.1088 3.2687L11.2638 10.1537L3.88508 10.7499C3.48156 10.7841 3.09707 10.9365 2.7798 11.1882C2.46253 11.4399 2.22659 11.7796 2.10153 12.1648C1.97648 12.5499 1.96787 12.9635 2.07679 13.3535C2.18571 13.7436 2.40731 14.0928 2.71383 14.3575L8.33883 19.2112L6.62508 26.4687C6.52924 26.863 6.55271 27.2769 6.69251 27.6578C6.83231 28.0387 7.08214 28.3695 7.41028 28.6082C7.73843 28.8468 8.13009 28.9826 8.53555 28.9983C8.94102 29.014 9.34199 28.9088 9.68758 28.6962L16.0001 24.8112L22.3163 28.6962C22.662 28.9063 23.0622 29.0094 23.4664 28.9926C23.8706 28.9757 24.2608 28.8397 24.5878 28.6015C24.9149 28.3634 25.1641 28.0338 25.3042 27.6542C25.4443 27.2747 25.469 26.8622 25.3751 26.4687L23.6551 19.2099L29.2801 14.3562C29.5891 14.092 29.8127 13.742 29.9226 13.3506C30.0326 12.9592 30.0238 12.5439 29.8976 12.1574ZM27.9801 12.8412L21.8926 18.0912C21.7538 18.2109 21.6505 18.3664 21.5941 18.5407C21.5376 18.7151 21.5302 18.9016 21.5726 19.08L23.4326 26.93C23.4374 26.9408 23.4379 26.953 23.4339 26.9642C23.43 26.9754 23.4219 26.9846 23.4113 26.99C23.3888 27.0075 23.3826 27.0037 23.3638 26.99L16.5238 22.7837C16.3663 22.6868 16.185 22.6356 16.0001 22.6356C15.8152 22.6356 15.6339 22.6868 15.4763 22.7837L8.63633 26.9925C8.61758 27.0037 8.61258 27.0075 8.58883 26.9925C8.57828 26.9871 8.5702 26.9779 8.56625 26.9667C8.56229 26.9555 8.56277 26.9433 8.56758 26.9325L10.4276 19.0825C10.47 18.9041 10.4625 18.7176 10.4061 18.5432C10.3497 18.3689 10.2464 18.2134 10.1076 18.0937L4.02008 12.8437C4.00508 12.8312 3.99133 12.82 4.00383 12.7812C4.01633 12.7424 4.02633 12.7474 4.04508 12.7449L12.0351 12.0999C12.2183 12.0842 12.3937 12.0183 12.5419 11.9093C12.6901 11.8004 12.8054 11.6527 12.8751 11.4824L15.9526 4.0312C15.9626 4.00995 15.9663 3.99995 15.9963 3.99995C16.0263 3.99995 16.0301 4.00995 16.0401 4.0312L19.1251 11.4824C19.1954 11.6527 19.3114 11.8003 19.4603 11.9088C19.6092 12.0173 19.7852 12.0826 19.9688 12.0974L27.9588 12.7424C27.9776 12.7424 27.9888 12.7424 28.0001 12.7787C28.0113 12.8149 28.0001 12.8287 27.9801 12.8412Z"
									fill="#1529FF"
								/>
							</svg>
							<h3 className="heading3 margin-0 text-neutral-950">
								Este é um Título Editável
							</h3>
						</div>
						<button
							className="button-pill button--icon-left button--blue"
							id="collapse_section-button"
							onClick={(e) => {
								e.stopPropagation(); // Garante que o clique no botão não propague
								toggleCollapse();
							}}
							aria-label="Ver detalhes do conteudo [inserir o nome]">
							<span id="collapse_section-button--text">Ver detalhes</span>
							<svg
								className="collapse_section-button--icone"
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none">
								<path
									d="M15.0228 7.14798L9.39779 12.773C9.34555 12.8253 9.28351 12.8668 9.21523 12.8951C9.14694 12.9234 9.07375 12.938 8.99982 12.938C8.9259 12.938 8.85271 12.9234 8.78442 12.8951C8.71613 12.8668 8.6541 12.8253 8.60186 12.773L2.97686 7.14798C2.87131 7.04243 2.81201 6.89927 2.81201 6.75001C2.81201 6.60074 2.87131 6.45759 2.97686 6.35204C3.0824 6.24649 3.22556 6.18719 3.37482 6.18719C3.52409 6.18719 3.66725 6.24649 3.77279 6.35204L8.99982 11.5798L14.2269 6.35204C14.2791 6.29978 14.3412 6.25832 14.4094 6.23004C14.4777 6.20175 14.5509 6.18719 14.6248 6.18719C14.6987 6.18719 14.7719 6.20175 14.8402 6.23004C14.9085 6.25832 14.9705 6.29978 15.0228 6.35204C15.0751 6.4043 15.1165 6.46634 15.1448 6.53463C15.1731 6.60291 15.1876 6.6761 15.1876 6.75001C15.1876 6.82392 15.1731 6.8971 15.1448 6.96539C15.1165 7.03367 15.0751 7.09571 15.0228 7.14798Z"
									fill="#1529FF"
								/>
							</svg>
						</button>
					</div>
					<div>
						<p className="paragraph margin-0 text-neutral-900">
							Use este espaço para guiar o usuário ou apresentar informações
							essenciais com clareza e destaque.
						</p>
					</div>
				</div>
				<div className="collapse_section-content" id="collapse_section-content">
					<IframeVideo />
				</div>
			</div>
		</div>
	);
}
