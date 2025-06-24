import React from "react";
import Image from "../../assets/imgs/image-placeholder.png";

import "./Slider.css";

export default function Slider() {
	return (
		<section id="slider" className="slider-primario">
			<div className="slider-inner-primario margin__bottom--default">
				<div className="slider-item-primario active">
					<div className="container-sm">
						<div className="iframe-video margin__bottom--default">
							<div className="iframe-video__imagem-container" id="imagemVideo5">
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
							<div
								className="iframe-video__loading-icon"
								id="loadingIconVideo5">
								<div className="loader"></div>
							</div>
							<div className="iframe-video__frame hidden" id="iframeVideo5">
								<iframe
									id="videoVideo5"
									src=""
									allow=""
									allowfullscreen=""></iframe>
							</div>
						</div>
						<div className="flexbox__center--column-start">
							<p className="paragraph">Título do Vídeo</p>
							<p className="tags text-neutral-600">Videoaula X - 0 min</p>
						</div>
					</div>
				</div>
				<div className="slider-item-primario">
					<div className="container-sm">
						<div className="iframe-video margin__bottom--default">
							<div className="iframe-video__imagem-container" id="imagemVideo6">
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
							<div
								className="iframe-video__loading-icon"
								id="loadingIconVideo6">
								<div className="loader"></div>
							</div>
							<div className="iframe-video__frame hidden" id="iframeVideo6">
								<iframe
									id="videoVideo6"
									src=""
									allow=""
									allowfullscreen=""></iframe>
							</div>
						</div>
						<div className="flexbox__center--column-start">
							<p className="paragraph">Título do Vídeo</p>
							<p className="tags text-neutral-600">Videoaula X - 0 min</p>
						</div>
					</div>
				</div>
			</div>

			<div className="seta-direcao__secundario-posicao">
				<button
					className="seta-direcao__secundario button__direction--slide prev"
					onclick="moveSlide(-1)">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none">
						<path
							d="M15.5306 18.9694C15.6003 19.039 15.6556 19.1218 15.6933 19.2128C15.731 19.3039 15.7504 19.4014 15.7504 19.5C15.7504 19.5985 15.731 19.6961 15.6933 19.7872C15.6556 19.8782 15.6003 19.9609 15.5306 20.0306C15.4609 20.1003 15.3782 20.1556 15.2872 20.1933C15.1961 20.231 15.0985 20.2504 15 20.2504C14.9014 20.2504 14.8039 20.231 14.7128 20.1933C14.6218 20.1556 14.539 20.1003 14.4694 20.0306L6.96935 12.5306C6.89962 12.461 6.8443 12.3782 6.80656 12.2872C6.76882 12.1961 6.74939 12.0986 6.74939 12C6.74939 11.9014 6.76882 11.8038 6.80656 11.7128C6.8443 11.6217 6.89962 11.539 6.96935 11.4694L14.4694 3.96936C14.6101 3.82863 14.801 3.74957 15 3.74957C15.199 3.74957 15.3899 3.82863 15.5306 3.96936C15.6713 4.1101 15.7504 4.30097 15.7504 4.49999C15.7504 4.69901 15.6713 4.88988 15.5306 5.03061L8.56029 12L15.5306 18.9694Z"
							fill="white"></path>
					</svg>
				</button>
				<button
					className="seta-direcao__secundario button__direction--slide next"
					onclick="moveSlide(1)">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none">
						<path
							d="M17.0306 12.5306L9.53062 20.0306C9.46093 20.1003 9.37821 20.1556 9.28716 20.1933C9.19612 20.231 9.09854 20.2504 8.99999 20.2504C8.90144 20.2504 8.80386 20.231 8.71282 20.1933C8.62177 20.1556 8.53905 20.1003 8.46936 20.0306C8.39968 19.9609 8.34441 19.8782 8.30669 19.7872C8.26898 19.6961 8.24957 19.5985 8.24957 19.5C8.24957 19.4014 8.26898 19.3039 8.30669 19.2128C8.34441 19.1218 8.39968 19.039 8.46936 18.9694L15.4397 12L8.46936 5.03061C8.32863 4.88988 8.24957 4.69901 8.24957 4.49999C8.24957 4.30097 8.32863 4.1101 8.46936 3.96936C8.61009 3.82863 8.80097 3.74957 8.99999 3.74957C9.19901 3.74957 9.38988 3.82863 9.53062 3.96936L17.0306 11.4694C17.1003 11.539 17.1557 11.6217 17.1934 11.7128C17.2312 11.8038 17.2506 11.9014 17.2506 12C17.2506 12.0986 17.2312 12.1961 17.1934 12.2872C17.1557 12.3782 17.1003 12.461 17.0306 12.5306Z"
							fill="white"></path>
					</svg>
				</button>
			</div>
			<div className="slider-indicators flexbox__center--center"></div>
		</section>
	);
}
