function getMesIndex(mesNome) {
	const mesesIndex = {
		Janeiro: 0,
		Fevereiro: 1,
		Março: 2,
		Abril: 3,
		Maio: 4,
		Junho: 5,
		Julho: 6,
		Agosto: 7,
		Setembro: 8,
		Outubro: 9,
		Novembro: 10,
		Dezembro: 11,
	};

	return mesesIndex[mesNome];
}

function getDiaSemana(dia, mesNome) {
	const semana = [
		"Domingo",
		"Segunda-feira",
		"Terça-feira",
		"Quarta-feira",
		"Quinta-feira",
		"Sexta-feira",
		"Sábado",
	];
	const data = new Date(new Date().getFullYear(), getMesIndex(mesNome), dia);
	return semana[data.getDay()];
}

function getIcon(ev, dataPassou) {
	let svg = icons[ev.icone];
	if (dataPassou) {
		svg = svg.replace(/fill="[^"]*"/g, "");
		svg = svg.replace(/<svg([^>]*)>/, '<svg$1 fill="#acb4cd">');
	}
	return svg;
}

function montarSchedule() {
	const container = document.getElementById("scheduleContainer");
	const eventosHojeContainer = document.getElementById("eventos_hoje");
	const hoje = new Date();
	const hojeDia = hoje.getDate();
	const hojeMes = hoje.getMonth();

	eventosHojeContainer.innerHTML = "";
	container.innerHTML = "";

	for (const mes in scheduleData) {
		const cardMes = document.createElement("div");
		cardMes.className = "schedule__card";
		cardMes.innerHTML = `<h4 class="schedule__month heading4">${mes}</h4>`;

		const dias = Object.keys(scheduleData[mes]).sort((a, b) => a - b);

		dias.forEach((dia) => {
			const eventos = scheduleData[mes][dia];
			const diaSemana = getDiaSemana(Number(dia), mes);

			// Cria data do evento
			const dataEvento = new Date(
				hoje.getFullYear(),
				getMesIndex(mes),
				Number(dia)
			);

			// Verifica se a data já passou
			const dataPassou =
				dataEvento <
				new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());

			// Cria bloco do dia
			const blocoDia = document.createElement("div");
			blocoDia.className = "schedule__card_evento";
			blocoDia.innerHTML = `<p class="schedule__date legend ${
				dataPassou ? "text-neutral-300" : "text-neutral-600"
			}">${diaSemana} - ${dia} de ${mes}</p>`;

			eventos.forEach((ev) => {
				const item = document.createElement("div");
				item.className = "schedule__item margin__bottom--default";

				const icone = getIcon(ev, dataPassou);
				item.innerHTML = `${icone}<p class="schedule__description paragraph margin-0 ${
					dataPassou ? "text-neutral-300" : ""
				}">${ev.descricao}</p>`;

				blocoDia.appendChild(item);

				// Evento de hoje
				if (Number(dia) === hojeDia && getMesIndex(mes) === hojeMes) {
					const cloneItem = item.cloneNode(true);
					eventosHojeContainer.appendChild(cloneItem);
				}
			});

			cardMes.appendChild(blocoDia);
		});

		container.appendChild(cardMes);
	}

	// Caso não tenha eventos hoje
	if (!eventosHojeContainer.hasChildNodes()) {
		eventosHojeContainer.innerHTML = `<p class="schedule__description paragraph margin__bottom--100">Nenhum evento para hoje</p>`;
	}
}

function mostrarDataHoje() {
	const elementoData = document.getElementById("data_hoje");
	const hoje = new Date();
	const diasSemana = [
		"Domingo",
		"Segunda-feira",
		"Terça-feira",
		"Quarta-feira",
		"Quinta-feira",
		"Sexta-feira",
		"Sábado",
	];
	const meses = [
		"janeiro",
		"fevereiro",
		"março",
		"abril",
		"maio",
		"junho",
		"julho",
		"agosto",
		"setembro",
		"outubro",
		"novembro",
		"dezembro",
	];
	elementoData.textContent = `${
		diasSemana[hoje.getDay()]
	} – ${hoje.getDate()} de ${meses[hoje.getMonth()]}`;
}

function scrollProximoEvento() {
	setTimeout(() => {
		const hoje = new Date();
		let alvo = null;

		document.querySelectorAll(".schedule__card_evento").forEach((dia) => {
			if (alvo) return;

			const texto = dia.querySelector(".schedule__date")?.textContent;
			if (!texto) return;

			// Extrai o número do dia: "Segunda-feira - 6 de Novembro"
			const match = texto.match(/-\s*(\d+)\s+de/i);
			if (!match) return;

			const numeroDia = Number(match[1]);

			const mesNome = dia
				.closest(".schedule__card")
				.querySelector(".schedule__month")
				.textContent.trim();

			const dataEvento = new Date(
				hoje.getFullYear(),
				getMesIndex(mesNome),
				numeroDia
			);

			if (dataEvento >= hoje && !alvo) alvo = dia;
		});

		if (alvo) {
			alvo.scrollIntoView({
				behavior: "smooth",
				block: "center",
			});
		}
	}, 200);
}

document.addEventListener("DOMContentLoaded", () => {
	mostrarDataHoje();
	montarSchedule();
	scrollProximoEvento();
});
