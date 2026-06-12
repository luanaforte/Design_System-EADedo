import React, { useState, useEffect } from "react";
import dados from "../../backend/src/disciplinas_agrupadas";
import "./Disciplinas.css";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function Disciplinas() {
	const [busca, setBusca] = useState("");
	const [filtroModalidade, setFiltroModalidade] = useState("TODAS");
	const [filtrarTutoria, setFiltrarTutoria] = useState(false);
	const [copiadoId, setCopiadoId] = useState(null);
	const [selecionadas, setSelecionadas] = useState([]);
	const [mostrarTopo, setMostrarTopo] = useState(false);
	const [mostrarSelecionadas, setMostrarSelecionadas] = useState(false);

	/* ----------------------------
	SCROLL BOTÃO TOPO
	-----------------------------*/

	useEffect(() => {
		const handleScroll = () => {
			setMostrarTopo(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const voltarTopo = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	/* ----------------------------
	ORGANIZA DADOS
	-----------------------------*/

	const disciplinasArray = Object.keys(dados)
		.filter((key) => dados[key].disciplinas)
		.map((key) => ({
			id: key,
			...dados[key],
		}))
		.sort((a, b) => a.id.localeCompare(b.id));

	/* ----------------------------
	FILTROS
	-----------------------------*/

	const disciplinasFiltradas = disciplinasArray
		.filter((item) => {
			const correspondeBusca =
				item.id.includes(busca) ||
				item.disciplinas.some(
					(d) =>
						d.nome.toLowerCase().includes(busca.toLowerCase()) ||
						d.codigo.toLowerCase().includes(busca.toLowerCase()),
				);

			const correspondeModalidade =
				filtroModalidade === "TODAS" ||
				item.disciplinas.some((d) => d.modalidade === filtroModalidade);

			const correspondeTutoria =
				!filtrarTutoria ||
				item.disciplinas.some((d) => d.tutoria_ia);

			return correspondeBusca && correspondeModalidade && correspondeTutoria;
		})
		.filter((item) => {
			if (!mostrarSelecionadas) return true;
			return selecionadas.includes(item.id);
		});

	/* ----------------------------
	COPIAR CAMINHO
	-----------------------------*/

	const copiarCaminho = (caminho, id) => {
		navigator.clipboard.writeText(caminho).then(() => {
			setCopiadoId(id);
			setTimeout(() => setCopiadoId(null), 2000);
		});
	};

	/* ----------------------------
	SELECIONAR
	-----------------------------*/

	const toggleSelecionada = (id) => {
		setSelecionadas((prev) =>
			prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
		);
	};

	const limparSelecionadas = () => {
		setSelecionadas([]);
	};

	/* ----------------------------
	EXPORTAR EXCEL
	-----------------------------*/

	const exportarExcel = () => {
		const dadosParaExportar =
			selecionadas.length > 0
				? disciplinasArray.filter((d) => selecionadas.includes(d.id))
				: disciplinasArray;

		const linhas = [];

		dadosParaExportar.forEach((grupo) => {
			grupo.disciplinas.forEach((disc) => {
				linhas.push({
					ID: grupo.id,
					Disciplina: disc.nome,
					Codigo: disc.codigo,
					Modalidade: disc.modalidade,
					URL_AVA: disc.url_matriz,
					Tutoria_IA: disc.tutoria_ia ? "Sim" : "Não",
					Beecrowd: disc.beecrowd ? "Sim" : "Não",
					Caminho: grupo.caminho_n,
				});
			});
		});

		const worksheet = XLSX.utils.json_to_sheet(linhas);
		const workbook = XLSX.utils.book_new();

		XLSX.utils.book_append_sheet(workbook, worksheet, "Disciplinas");

		const excelBuffer = XLSX.write(workbook, {
			bookType: "xlsx",
			type: "array",
		});

		const data = new Blob([excelBuffer], {
			type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
		});

		saveAs(data, "disciplinas_unifor.xlsx");
	};

	// Estatísticas Dinâmicas baseadas no Design System
	const totalGrupos = Object.keys(dados).length;
	let totalEAD = 0;
	let totalEADCP = 0;
	let totalATV = 0;
	let totalTutoria = 0;

	disciplinasArray.forEach((bloco) => {
		bloco.disciplinas.forEach((disc) => {
			const mod = String(disc.modalidade).toUpperCase();
			if (mod === "EAD") totalEAD++;
			else if (mod === "EADCP") totalEADCP++;
			else if (mod === "ATV") totalATV++;
			if (disc.tutoria_ia) totalTutoria++;
		});
	});

	return (
		<div className="disciplinas-page PadraoEAD">
			<header className="page-header flexbox__between--center">
				<div className="header-content flexbox__center--column-start">
					<h1 className="heading1 brand-heading font-weight--bold margin-0">Gestão de Disciplinas</h1>
					<p className="paragraph text-neutral-600 font-weight--medium margin-0">Produção EaD UNIFOR</p>
				</div>

				<div className="controls flexbox__wrap">
					<div className="search-container">
						<input
							type="text"
							placeholder="Pesquisar..."
							className="search-input"
							onChange={(e) => setBusca(e.target.value)}
						/>
					</div>

					<select
						className="filter-select"
						value={filtroModalidade}
						onChange={(e) => {
							setFiltroModalidade(e.target.value);
							setFiltrarTutoria(false);
						}}>
						<option value="TODAS">Todas as Modalidades</option>
						<option value="EAD">EAD</option>
						<option value="EADCP">EADCP</option>
						<option value="ATV">Atividades (ATV)</option>
					</select>

					<button className="btn-export" onClick={exportarExcel}>
						📊 Exportar {selecionadas.length > 0 ? "Selecionadas" : "Todas"}
					</button>

					<button
						className="btn-filter-selected"
						onClick={() => setMostrarSelecionadas(!mostrarSelecionadas)}>
						{mostrarSelecionadas
							? "Mostrar Todas"
							: `Mostrar Selecionadas (${selecionadas.length})`}
					</button>

					<button
						className="btn-clear"
						onClick={limparSelecionadas}
						disabled={selecionadas.length === 0}>
						❌ Desmarcar
					</button>
				</div>
			</header>

			{/* PAINEL DE MÉTRICAS DINÂMICAS E INTERATIVAS */}
			<section className="metrics-dashboard flexbox__wrap margin__bottom--default">
				<div 
					className={`metric-card elevation-low clickable ${filtroModalidade === "TODAS" && !filtrarTutoria ? "is-active" : ""}`}
					onClick={() => {
						setFiltroModalidade("TODAS");
						setFiltrarTutoria(false);
					}}
					title="Clique para limpar filtros e mostrar todos os grupos"
				>
					<span className="metric-label font-weight--medium">Todas as disciplinas</span>
					<h2 className="metric-value display text--Marinho font-weight--bold">{totalGrupos}</h2>
					<div className="metric-indicator bg-marinho"></div>
				</div>
				<div 
					className={`metric-card elevation-low clickable ${filtroModalidade === "EAD" ? "is-active" : ""}`}
					onClick={() => {
						setFiltroModalidade("EAD");
						setFiltrarTutoria(false);
					}}
					title="Clique para filtrar apenas disciplinas EAD"
				>
					<span className="metric-label font-weight--medium">Disciplinas EAD</span>
					<h2 className="metric-value display text-blue-600 font-weight--bold">{totalEAD}</h2>
					<div className="metric-indicator bg-ead"></div>
				</div>
				<div 
					className={`metric-card elevation-low clickable ${filtroModalidade === "EADCP" ? "is-active" : ""}`}
					onClick={() => {
						setFiltroModalidade("EADCP");
						setFiltrarTutoria(false);
					}}
					title="Clique para filtrar apenas disciplinas EADCP"
				>
					<span className="metric-label font-weight--medium">Disciplinas EADCP</span>
					<h2 className="metric-value display text-purple-600 font-weight--bold">{totalEADCP}</h2>
					<div className="metric-indicator bg-eadcp"></div>
				</div>
				<div 
					className={`metric-card elevation-low clickable ${filtroModalidade === "ATV" ? "is-active" : ""}`}
					onClick={() => {
						setFiltroModalidade("ATV");
						setFiltrarTutoria(false);
					}}
					title="Clique para filtrar apenas Atividades (ATV)"
				>
					<span className="metric-label font-weight--medium">Atividades (ATV)</span>
					<h2 className="metric-value display text-turquoise-600 font-weight--bold">{totalATV}</h2>
					<div className="metric-indicator bg-atv"></div>
				</div>
				<div 
					className={`metric-card elevation-low tutoria-metric clickable ${filtrarTutoria ? "is-active" : ""}`}
					onClick={() => {
						setFiltrarTutoria(true);
						setFiltroModalidade("TODAS");
					}}
					title="Clique para filtrar apenas disciplinas com Tutoria IA 4.0"
				>
					<span className="metric-label font-weight--medium">Tutoria IA 4.0</span>
					<h2 className="metric-value display purple-gradient-text font-weight--bold">{totalTutoria}</h2>
					<div className="metric-indicator bg-tutoria"></div>
				</div>
			</section>

			{disciplinasFiltradas.length > 0 ? (
				<div className="disciplinas-grid">
					{disciplinasFiltradas.map((bloco) => (
						<div key={bloco.id} className="card-disciplina">
							<div className="card-header">
								<input
									type="checkbox"
									className="select-checkbox"
									checked={selecionadas.includes(bloco.id)}
									onChange={() => toggleSelecionada(bloco.id)}
								/>

								<span className="id-informative">ID {bloco.id}</span>

								<h3 className="heading3">{bloco.disciplinas[0].nome}</h3>
							</div>

							<div className="card-body">
								{bloco.disciplinas.map((disc, idx) => (
									<div key={idx} className="entry-row">
										<div className="entry-info">
											<span
												className={`mod-badge ${disc.modalidade.toLowerCase()}`}>
												{disc.modalidade}
											</span>

											<span className="code-text">{disc.codigo}</span>
											{disc.tutoria_ia && (
												<span className="tutoria-badge">
													Tutoria IA 4.0
												</span>
											)}
											{disc.beecrowd && (
												<span className="beecrowd-badge">
													Beecrowd
												</span>
											)}
											{disc.plataforma && (
												<span className="plataforma-badge">
													Plataforma · {disc.plataforma}
												</span>
											)}
										</div>

										<a
											href={disc.url_matriz}
											target="_blank"
											rel="noreferrer"
											className="btn-ava">
											AVA
										</a>
									</div>
								))}
							</div>

							<div
								className={`card-footer ${
									copiadoId === bloco.id ? "is-copied" : ""
								}`}
								onClick={() => copiarCaminho(bloco.caminho_n, bloco.id)}>
								{copiadoId === bloco.id
									? "✅ Caminho copiado!"
									: `📁 ...\\${bloco.caminho_n.split("\\").pop()}`}
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="empty-state">
					<p className="paragraph">
						Nenhuma disciplina encontrada com esses filtros.
					</p>
				</div>
			)}

			{/* BOTÃO TOPO */}

			{mostrarTopo && (
				<button className="btn-topo" onClick={voltarTopo}>
					↑ Topo
				</button>
			)}
		</div>
	);
}
