import React from "react";
import "./Table_cell.css";
import "../../fundamentals/index.css";

export function Table_cell() {
	const exemplo1Data = [
		{ bloco: "1 e 2", eixo: "Apresentação e Documentação" },
		{ bloco: "3", eixo: "Organização Institucional" },
		{ bloco: "4", eixo: "Gestão de tempo" },
		{ bloco: "5", eixo: "Encontro de Iniciação à Docência" },
		{ bloco: "6", eixo: "Cidadania" },
		{ bloco: "7", eixo: "Cognição" },
		{ bloco: "8", eixo: "Comunicação" },
		{ bloco: "9", eixo: "Colaboração" },
		{ bloco: "10", eixo: "Relatório" },
	];

	const exemplo2Data = [
		{
			esfera: "Importantes",
			oque: "Atividades que trazem resultados a curto, médio ou longo prazo. Têm prazo definido, mas não geram estresse. Estão ligadas à sua missão.",
			exemplos:
				"Estudar para as provas com antecedência, escrever artigos para encontros acadêmicos, planejar o GED.",
		},
		{
			esfera: "Urgentes",
			oque: "Tarefas cujo prazo terminou ou está curto. Devem ser feitas imediatamente e geram pressão e estresse.",
			exemplos:
				"Estudar para a prova apenas na semana da aplicação; resolver imprevistos de última hora por falta de planejamento.",
		},
		{
			esfera: "Circunstanciais",
			oque: "Atividades que desperdiçam seu tempo. São feitas em excesso, sem vontade ou por pressão de terceiros, sem trazer resultados.",
			exemplos:
				"Excesso de redes sociais (WhatsApp/Instagram), reuniões improdutivas, trânsito excessivo.",
		},
	];

	return (
		<div className="container-lg margin__bottom--default">
			{/* Modelo 1: 2 Colunas */}
			<div className="margin__bottom--default">
				<h4 className="heading4 text-blue-900 margin__bottom--050">
					Modelo 1 (2 Colunas)
				</h4>
				<div className="table-cell-container">
					<div className="table-cell-row">
						<div className="table-cell table-cell--header table-cell--fit">
							<p className="paragraph margin-0">Bloco</p>
						</div>
						<div className="table-cell table-cell--header">
							<p className="paragraph margin-0">Eixo de Formação</p>
						</div>
					</div>

					{exemplo1Data.map((row, index) => (
						<div className="table-cell-row" key={index}>
							<div className="table-cell table-cell--content table-cell--fit">
								<p className="paragraph margin-0">{row.bloco}</p>
							</div>
							<div className="table-cell table-cell--content">
								<p className="paragraph margin-0">{row.eixo}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Modelo 2: 3 Colunas */}
			<div className="margin__bottom--default">
				<h4 className="heading4 text-blue-900 margin__bottom--050">
					Modelo 2 (3 Colunas)
				</h4>
				<div className="table-cell-container">
					<div className="table-cell-row">
						<div className="table-cell table-cell--header table-cell--fit">
							<p className="paragraph margin-0">Esfera</p>
						</div>
						<div className="table-cell table-cell--header">
							<p className="paragraph margin-0">O que é?</p>
						</div>
						<div className="table-cell table-cell--header">
							<p className="paragraph margin-0">Exemplos Práticos</p>
						</div>
					</div>

					{exemplo2Data.map((row, index) => (
						<div className="table-cell-row" key={index}>
							<div className="table-cell table-cell--content table-cell--fit table-cell--center">
								<p className="paragraph font-weight--bold margin-0">
									{row.esfera}
								</p>
							</div>
							<div className="table-cell table-cell--content">
								<p className="paragraph margin-0">{row.oque}</p>
							</div>
							<div className="table-cell table-cell--content">
								<p className="paragraph margin-0">{row.exemplos}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Table_cell;
