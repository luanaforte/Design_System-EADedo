import React, { useState } from "react";
import { Check, Copy, MagnifyingGlass } from "@phosphor-icons/react";
import "./Iconografia.css";
import TableOfContents from "../../../components/TableOfContents";
import CodeBlockWithCopy from "../../../components/CodeBlockWithCopy";

import arrow_down from "../../assets/icons/icon-arrow-down.svg";
import arrow_left from "../../assets/icons/icon-arrow-left.svg";
import arrow_right from "../../assets/icons/icon-arrow-right.svg";
import arrow_up_right from "../../assets/icons/icon-arrow-up-right.svg";
import bell from "../../assets/icons/icon-bell.svg";
import book from "../../assets/icons/icon-book.svg";
import book_bookmark from "../../assets/icons/icon-book-bookmark.svg";
import books from "../../assets/icons/icon-books.svg";
import broadcast from "../../assets/icons/icon-broadcast.svg";
import browser from "../../assets/icons/icon-browser.svg";
import browsers from "../../assets/icons/icon-browsers.svg";
import calendar_blank from "../../assets/icons/icon-calendar-blank.svg";
import calendar_dots from "../../assets/icons/icon-calendar-dots.svg";
import call_bell from "../../assets/icons/icon-call-bell.svg";
import caret_down from "../../assets/icons/icon-caret-down.svg";
import caret_left from "../../assets/icons/icon-caret-left.svg";
import caret_right from "../../assets/icons/icon-caret-right.svg";
import caret_up from "../../assets/icons/icon-caret-up.svg";
import chat_dots from "../../assets/icons/icon-chat-dots.svg";
import check from "../../assets/icons/icon-check.svg";
import check_square from "../../assets/icons/icon-check-square.svg";
import clock_countdown from "../../assets/icons/icon-clock-countdown.svg";
import code from "../../assets/icons/icon-code.svg";
import copy from "../../assets/icons/icon-copy.svg";
import confetti from "../../assets/icons/icon-confetti.svg";
import desktop_tower from "../../assets/icons/icon-desktop-tower.svg";
import download_simple from "../../assets/icons/icon-download-simple.svg";
import envelope from "../../assets/icons/icon-envelope.svg";
import eyedropper_sample from "../../assets/icons/icon-eyedropper-sample.svg";
import file from "../../assets/icons/icon-file.svg";
import file_text from "../../assets/icons/icon-file-text.svg";
import file_pdf from "../../assets/icons/icon-file-pdf.svg";
import file_audio from "../../assets/icons/icon-file-audio.svg";
import film_slate from "../../assets/icons/icon-film-slate.svg";
import folder_open from "../../assets/icons/icon-folder-open.svg";
import folder_plus from "../../assets/icons/icon-folder-plus.svg";
import graduation_cap from "../../assets/icons/icon-graduation-cap.svg";
import graph from "../../assets/icons/icon-graph.svg";
import hand_waving from "../../assets/icons/icon-hand-waving.svg";
import hands_clapping from "../../assets/icons/icon-hands-clapping.svg";
import headset from "../../assets/icons/icon-headset.svg";
import heart from "../../assets/icons/icon-heart.svg";
import info from "../../assets/icons/icon-info.svg";
import law from "../../assets/icons/icon-law.svg";
import lego from "../../assets/icons/icon-lego.svg";
import libras from "../../assets/icons/icon-libras.svg";
import link_simple from "../../assets/icons/icon-link-simple.svg";
import magnifying_glass from "../../assets/icons/icon-magnifying-glass.svg";
import map_pin from "../../assets/icons/icon-map-pin.svg";
import math_operations from "../../assets/icons/icon-math-operations.svg";
import microphone from "../../assets/icons/icon-microphone.svg";
import microphone_desk from "../../assets/icons/icon-microphone-desk.svg";
import microphone_stage from "../../assets/icons/icon-microphone-stage.svg";
import minus from "../../assets/icons/icon-minus.svg";
import monitor_play from "../../assets/icons/icon-monitor-play.svg";
import note from "../../assets/icons/icon-note.svg";
import paperclip from "../../assets/icons/icon-paperclip.svg";
import path from "../../assets/icons/icon-path.svg";
import phone_call from "../../assets/icons/icon-phone-call.svg";
import plus from "../../assets/icons/icon-plus.svg";
import puzzle_piece from "../../assets/icons/icon-puzzle-piece.svg";
import question from "../../assets/icons/icon-question.svg";
import radio_button from "../../assets/icons/icon-radio-button.svg";
import ruler from "../../assets/icons/icon-ruler.svg";
import smiley from "../../assets/icons/icon-smiley.svg";
import star from "../../assets/icons/icon-star.svg";
import swap from "../../assets/icons/icon-swap.svg";
import text_t from "../../assets/icons/icon-text-t.svg";
import users_three from "../../assets/icons/icon-users-three.svg";
import warning_circle from "../../assets/icons/icon-warning-circle.svg";
import waveform from "../../assets/icons/icon-waveform.svg";
import whatsapp_logo from "../../assets/icons/icon-whatsapp-logo.svg";
import x from "../../assets/icons/icon-x.svg";
import Icon from "../../components/Icon/Icon";

export default function Iconografia() {
	const [copied, setCopied] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");

	const tocLinks = [
		{ id: "introducao", label: "Introdução" },
		{ id: "dimensoes", label: "Dimensões" },
		{ id: "biblioteca", label: "Biblioteca de Ícones" },
	];

	async function handleCopySvg(icon) {
		try {
			const res = await fetch(icon.src);
			const svgText = await res.text();
			await navigator.clipboard.writeText(svgText);
			setCopied(icon.name);
			setTimeout(() => setCopied(null), 1500);
		} catch (err) {
			console.error("Erro ao copiar SVG", err);
		}
	}

	const filteredIcons = iconsNavegacao.filter((icon) =>
		icon.name.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<div className="foundation-page">
			<header className="foundation-hero">
				<h2 id="introducao">Iconografia</h2>
				<p>
					Uma linguagem visual clara e universal para guiar o usuário. Nossos
					ícones são desenhados para serem simples, modernos e consistentes.
				</p>
			</header>

			<div className="foundation-container">
				<div className="foundation-body">
					<section id="dimensoes">
						<h3 className="heading3">Dimensões Padronizadas</h3>
						<p className="paragraph">
							Para garantir o alinhamento visual, utilize sempre os tamanhos
							definidos em nossa escala:
						</p>

						<CodeBlockWithCopy>
							{`:root {
  --icon-size-sm: 1rem;   /* 16px */
  --icon-size-md: 1.5rem; /* 24px */
  --icon-size-lg: 2rem;   /* 32px */
}`}
						</CodeBlockWithCopy>
					</section>

					<hr className="margin__bottom--default" />

					<section id="biblioteca">
						<div
							className="flexbox__between--center"
							style={{ marginBottom: "2rem" }}>
							<h3 className="heading3" style={{ margin: 0 }}>
								Biblioteca
							</h3>

							<div className="search-wrapper">
								<MagnifyingGlass size={20} className="search-icon" />
								<input
									type="text"
									placeholder="Buscar ícone..."
									className="search-input-field"
									onChange={(e) => setSearchTerm(e.target.value)}
								/>
							</div>
						</div>

						<p className="paragraph">
							Clique em qualquer ícone para copiar o código{" "}
							<strong>SVG nativo</strong> diretamente para o seu projeto.
						</p>

						<div className="icon-grid">
							{filteredIcons.map((icon, index) => (
								<div
									key={index}
									className="icon-item"
									onClick={() => handleCopySvg(icon)}
									title={icon.name}>
									<img src={icon.src} alt={icon.name} />
									<span className="icon-name">{icon.name}</span>

									<div
										className={`copy-overlay ${copied === icon.name ? "active" : ""}`}>
										<Check size={24} weight="bold" />
										<span>Copiado!</span>
									</div>
								</div>
							))}
						</div>

						{filteredIcons.length === 0 && (
							<div className="search-empty">
								<p>Nenhum ícone encontrado para "{searchTerm}"</p>
							</div>
						)}
					</section>
				</div>

				<TableOfContents items={tocLinks} />
			</div>
		</div>
	);
}

const iconsNavegacao = [
	{ src: arrow_down, name: "arrow-down" },
	{ src: arrow_left, name: "arrow-left" },
	{ src: arrow_right, name: "arrow-right" },
	{ src: arrow_up_right, name: "arrow-up-right" },
	{ src: bell, name: "bell" },
	{ src: book, name: "book" },
	{ src: book_bookmark, name: "book-bookmark" },
	{ src: books, name: "books" },
	{ src: broadcast, name: "broadcast" },
	{ src: browser, name: "browser" },
	{ src: browsers, name: "browsers" },
	{ src: calendar_blank, name: "calendar-blank" },
	{ src: calendar_dots, name: "calendar-dots" },
	{ src: call_bell, name: "call-bell" },
	{ src: caret_down, name: "caret-down" },
	{ src: caret_left, name: "caret-left" },
	{ src: caret_right, name: "caret-right" },
	{ src: caret_up, name: "caret-up" },
	{ src: chat_dots, name: "chat-dots" },
	{ src: check, name: "check" },
	{ src: check_square, name: "check-square" },
	{ src: clock_countdown, name: "clock-countdown" },
	{ src: code, name: "code" },
	{ src: copy, name: "copy" },
	{ src: confetti, name: "confetti" },
	{ src: desktop_tower, name: "desktop-tower" },
	{ src: download_simple, name: "download-simple" },
	{ src: envelope, name: "envelope" },
	{ src: eyedropper_sample, name: "eyedropper-sample" },
	{ src: file, name: "file" },
	{ src: file_text, name: "file-text" },
	{ src: file_pdf, name: "file-pdf" },
	{ src: file_audio, name: "file-audio" },
	{ src: film_slate, name: "film-slate" },
	{ src: folder_open, name: "folder-open" },
	{ src: folder_plus, name: "folder-plus" },
	{ src: graduation_cap, name: "graduation-cap" },
	{ src: graph, name: "graph" },
	{ src: hand_waving, name: "hand-waving" },
	{ src: hands_clapping, name: "hands-clapping" },
	{ src: headset, name: "headset" },
	{ src: heart, name: "heart" },
	{ src: info, name: "info" },
	{ src: law, name: "law" },
	{ src: lego, name: "lego" },
	{ src: libras, name: "libras" },
	{ src: link_simple, name: "link-simple" },
	{ src: magnifying_glass, name: "magnifying-glass" },
	{ src: map_pin, name: "map-pin" },
	{ src: math_operations, name: "math-operations" },
	{ src: microphone, name: "microphone" },
	{ src: microphone_desk, name: "microphone-desk" },
	{ src: microphone_stage, name: "microphone-stage" },
	{ src: minus, name: "minus" },
	{ src: monitor_play, name: "monitor-play" },
	{ src: note, name: "note" },
	{ src: paperclip, name: "paperclip" },
	{ src: path, name: "path" },
	{ src: phone_call, name: "phone-call" },
	{ src: plus, name: "plus" },
	{ src: puzzle_piece, name: "puzzle-piece" },
	{ src: question, name: "question" },
	{ src: radio_button, name: "radio-button" },
	{ src: ruler, name: "ruler" },
	{ src: smiley, name: "smiley" },
	{ src: star, name: "star" },
	{ src: swap, name: "swap" },
	{ src: text_t, name: "text-t" },
	{ src: users_three, name: "users-three" },
	{ src: warning_circle, name: "warning-circle" },
	{ src: waveform, name: "waveform" },
	{ src: whatsapp_logo, name: "whatsapp-logo" },
	{ src: x, name: "x" },
];
