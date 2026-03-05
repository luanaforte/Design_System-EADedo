import React, { useState } from "react";
import dados from "../../backend/src/disciplinas_agrupadas";
import "./Disciplinas.css";

export default function Disciplinas() {
	const [busca, setBusca] = useState("");
	const [filtroModalidade, setFiltroModalidade] = useState("TODAS");
	const [copiadoId, setCopiadoId] = useState(null);

	const disciplinasArray = Object.keys(dados)
		.filter((key) => dados[key].disciplinas)
		.map((key) => ({ id: key, ...dados[key] }))
		.sort((a, b) => a.id.localeCompare(b.id));

	const disciplinasFiltradas = disciplinasArray.filter((item) => {
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
	});

	const copiarCaminho = (caminho, id) => {
		navigator.clipboard.writeText(caminho).then(() => {
			setCopiadoId(id);
			setTimeout(() => setCopiadoId(null), 2000);
		});
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

					{/* Botão de Exportar */}
					<a
						href="/lista_disciplinas_formatada.xlsx"
						download="lista_disciplinas_unifor.xlsx"
						className="btn-export">
						<span>📊 Exportar Excel</span>
					</a>
				</div>
			</header>

			{disciplinasFiltradas.length > 0 ? (
				<div className="disciplinas-grid">
					{disciplinasFiltradas.map((bloco) => (
						<div key={bloco.id} className="card-disciplina">
							<div className="card-header">
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
								className={`card-footer ${copiadoId === bloco.id ? "is-copied" : ""}`}
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
		</div>
	);
}
