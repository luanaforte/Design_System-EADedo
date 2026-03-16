import React, { useState, useEffect } from "react";
import dados from "../../backend/src/disciplinas_agrupadas";
import "./Disciplinas.css";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function Disciplinas() {
	const [busca, setBusca] = useState("");
	const [filtroModalidade, setFiltroModalidade] = useState("TODAS");
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

			return correspondeBusca && correspondeModalidade;
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

	return (
		<div className="disciplinas-page">
			<header className="page-header">
				<div className="header-content">
					<h1 className="heading1">Gestão de Disciplinas</h1>
					<p className="paragraph">Produção EaD UNIFOR</p>
				</div>

				<div className="controls">
					<input
						type="text"
						placeholder="Pesquisar..."
						className="search-input"
						onChange={(e) => setBusca(e.target.value)}
					/>

					<select
						className="filter-select"
						onChange={(e) => setFiltroModalidade(e.target.value)}>
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
						❌ Desmarcar Selecionadas
					</button>
				</div>
			</header>

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

								<span className="id-tag">ID {bloco.id}</span>

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
