import React from "react";
import Image from "../../assets/imgs/image-placeholder.png";
import "./IframeVideo.css";

var video1Url = "https://www.youtube.com/embed/DmHAyQCN0mM?si=mWx6BD5KtMzUluUl";
var video2Url = "";
var video3Url = "";
var video4Url = "";

export function videoAulaProg(clicked_id) {
	console.log("Clicked ID:", clicked_id);

	const imagem = document.querySelector("#imagem" + clicked_id);
	const video = document.querySelector("#video" + clicked_id);
	const iframe = document.querySelector("#iframe" + clicked_id);
	const loadingIcon = document.querySelector("#loadingIcon" + clicked_id);

	if (!imagem || !video || !iframe || !loadingIcon) {
		console.error(
			"Um ou mais elementos não foram encontrados para:",
			clicked_id
		);
		return;
	}

	// Esconde a imagem e mostra o iframe
	imagem.style.display = "none";
	iframe.classList.remove("hidden");

	// 🔥 Pega dinamicamente a variável correspondente
	const videoVarName = clicked_id.toLowerCase() + "url";
	const videoUrl = window[videoVarName] || video1Url;

	console.log("Video URL:", videoUrl);

	// Atualiza o src do iframe
	video.src = videoUrl;
	console.log("Iframe src atualizado para:", video.src);
}

export default function IframeVideo() {
	return (
		<div className="container-xl">
			{/* imframe progress */}
			<div className="iframe-video margin__bottom--default">
				<div
					className="iframe-video__imagem-container"
					id="imagemVideo1"
					onClick={() => videoAulaProg("Video1")}>
					<img
						className="iframe-video__imagem"
						src={Image}
						alt="Imagem Vídeo"
					/>
					<div className="Button_video__play">
						<svg
							className="Button_video__play-icon"
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="33"
							viewBox="0 0 32 33"
							fill="none">
							<path
								d="M30 16.5C30.0008 16.8395 29.9138 17.1735 29.7473 17.4694C29.5808 17.7654 29.3406 18.0132 29.05 18.1888L11.04 29.2063C10.7364 29.3922 10.3886 29.4937 10.0326 29.5003C9.67661 29.5069 9.32532 29.4183 9.015 29.2438C8.70764 29.0719 8.4516 28.8213 8.2732 28.5177C8.09481 28.2141 8.00051 27.8684 8 27.5163V5.48376C8.00051 5.13162 8.09481 4.78597 8.2732 4.48235C8.4516 4.17874 8.70764 3.92812 9.015 3.75626C9.32532 3.5817 9.67661 3.49314 10.0326 3.49973C10.3886 3.50632 10.7364 3.60783 11.04 3.79376L29.05 14.8113C29.3406 14.9869 29.5808 15.2347 29.7473 15.5306C29.9138 15.8265 30.0008 16.1605 30 16.5Z"
								fill="white"
							/>
						</svg>
					</div>
				</div>
				<div className="iframe-video__loading-icon" id="loadingIconVideo1">
					<div className="loader"></div>
				</div>
				<div className="iframe-video__frame hidden" id="iframeVideo1">
					<iframe id="videoVideo1" src="" allow="" allowFullScreen></iframe>
				</div>
			</div>
			{/* iframe */}
			<div className="iframe-video__frame">
				<iframe
					src="https://www.youtube.com/embed/DmHAyQCN0mM?si=mWx6BD5KtMzUluUl"
					allow=""
					allowFullScreen></iframe>
			</div>
		</div>
	);
}
