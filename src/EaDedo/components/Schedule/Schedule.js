/* UTILIDADES*/
function capitalizarPrimeiraLetra(texto) {
	if (!texto) return "";
	return texto.charAt(0).toUpperCase() + texto.slice(1);
}

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

	return mesesIndex[capitalizarPrimeiraLetra(mesNome)];
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

/* ÍCONES*/

function getIcon(ev, dataPassou) {
	let svg = icons[ev.icone];

	if (dataPassou) {
		svg = svg.replace(/fill="[^"]*"/g, "");
		svg = svg.replace(/<svg([^>]*)>/, '<svg$1 fill="#acb4cd">');
	}

	return svg;
}

/* SCHEDULE*/

function montarSchedule() {
	const container = document.getElementById("scheduleContainer");
	const eventosHojeContainer = document.getElementById("eventos_hoje");

	const hoje = new Date();
	const hojeDia = hoje.getDate();
	const hojeMes = hoje.getMonth();

	container.innerHTML = "";
	eventosHojeContainer.innerHTML = "";

	const fragment = document.createDocumentFragment();

	Object.keys(scheduleData).forEach((mes) => {
		const mesCapitalizado = capitalizarPrimeiraLetra(mes);

		const cardMes = document.createElement("div");
		cardMes.className = "schedule__card";
		cardMes.innerHTML = `
			<h4 class="schedule__month heading4">${mesCapitalizado}</h4>
		`;

		const dias = Object.keys(scheduleData[mes]).sort((a, b) => a - b);

		dias.forEach((dia) => {
			const eventos = scheduleData[mes][dia];
			const diaSemana = getDiaSemana(Number(dia), mesCapitalizado);

			const dataEvento = new Date(
				hoje.getFullYear(),
				getMesIndex(mesCapitalizado),
				Number(dia),
			);

			const dataPassou =
				dataEvento <
				new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());

			const blocoDia = document.createElement("div");
			blocoDia.className = "schedule__card_evento";

			blocoDia.innerHTML = `
				<p class="schedule__date legend ${
					dataPassou ? "text-neutral-300" : "text-neutral-600"
				}">
					${diaSemana} - ${dia} de ${mesCapitalizado}
				</p>
			`;

			eventos.forEach((ev) => {
				const item = document.createElement("div");
				item.className = "schedule__item margin__bottom--default";

				item.innerHTML = `
					${getIcon(ev, dataPassou)}
					<p class="schedule__description paragraph margin-0 ${
						dataPassou ? "text-neutral-300" : ""
					}">
						${ev.descricao}
					</p>
				`;

				blocoDia.appendChild(item);

				if (
					Number(dia) === hojeDia &&
					getMesIndex(mesCapitalizado) === hojeMes
				) {
					eventosHojeContainer.appendChild(item.cloneNode(true));
				}
			});

			cardMes.appendChild(blocoDia);
		});

		fragment.appendChild(cardMes);
	});

	container.appendChild(fragment);

	if (!eventosHojeContainer.hasChildNodes()) {
		eventosHojeContainer.innerHTML =
			'<p class="schedule__description paragraph margin__bottom--100">Nenhum evento para hoje</p>';
	}
}

/* DATA DE HOJE*/

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

	elementoData.textContent = `${capitalizarPrimeiraLetra(
		diasSemana[hoje.getDay()],
	)} – ${hoje.getDate()} de ${capitalizarPrimeiraLetra(
		meses[hoje.getMonth()],
	)}`;
}

/* SCROLL PARA PRÓXIMO EVENTO*/

function scrollProximoEvento() {
	const hoje = new Date();
	hoje.setHours(0, 0, 0, 0);

	const eventos = Array.from(
		document.querySelectorAll(".schedule__card_evento"),
	);
	let alvo = null;

	for (const dia of eventos) {
		const texto = dia.querySelector(".schedule__date")?.textContent;
		if (!texto) continue;

		const match = texto.match(/-\s*(\d+)\s+de\s+([^\n]+)/i);
		if (!match) continue;

		const numeroDia = Number(match[1]);
		const mesNome = match[2].trim();

		const dataEvento = new Date(
			hoje.getFullYear(),
			getMesIndex(mesNome),
			numeroDia,
		);
		dataEvento.setHours(0, 0, 0, 0);

		if (dataEvento.getTime() === hoje.getTime()) {
			alvo = dia;
			break;
		}
	}

	if (!alvo) {
		for (const dia of eventos) {
			const texto = dia.querySelector(".schedule__date")?.textContent;
			if (!texto) continue;

			const match = texto.match(/-\s*(\d+)\s+de\s+([^\n]+)/i);
			if (!match) continue;

			const numeroDia = Number(match[1]);
			const mesNome = match[2].trim();

			const dataEvento = new Date(
				hoje.getFullYear(),
				getMesIndex(mesNome),
				numeroDia,
			);
			dataEvento.setHours(0, 0, 0, 0);

			if (dataEvento > hoje) {
				alvo = dia;
				break;
			}
		}
	}

	const container = document.getElementById("scheduleContainer");
	if (!container || !alvo) return;

	const top =
		alvo.getBoundingClientRect().top -
		container.getBoundingClientRect().top +
		container.scrollTop;

	container.scrollTo({
		top: top - container.clientHeight / 4,
		behavior: "smooth",
	});
}

/* FULLCALENDAR*/

function buildEventsFromSchedule(year) {
	const events = [];

	Object.entries(scheduleData).forEach(([mes, dias]) => {
		const mesIndex = getMesIndex(mes);
		if (mesIndex === undefined) return;

		Object.entries(dias).forEach(([dia, eventos]) => {
			eventos.forEach(() => {
				events.push({
					start: new Date(year, mesIndex, Number(dia)),
					display: "block",
				});
			});
		});
	});

	return events;
}

/* INIT*/
document.addEventListener("DOMContentLoaded", () => {
	mostrarDataHoje();
	montarSchedule();

	requestAnimationFrame(() => {
		requestAnimationFrame(scrollProximoEvento);
	});

	const calendar = new FullCalendar.Calendar(
		document.getElementById("calendar"),
		{
			initialView: "dayGridMonth",
			locale: "pt-br",
			initialDate: new Date(),

			headerToolbar: {
				left: "prev",
				center: "title",
				right: "next",
			},

			dayHeaderFormat: {
				weekday: "narrow",
			},

			events: buildEventsFromSchedule(new Date().getFullYear()),

			eventDidMount(info) {
				info.el.innerHTML = '<span class="event-dot"></span>';
			},

			datesSet() {
				const toolbarTitle = document.querySelector(".fc-toolbar-title");
				if (!toolbarTitle) return;

				let subtitle = document.querySelector(".calendar-subtitle");

				if (!subtitle) {
					subtitle = document.createElement("div");
					subtitle.className = "calendar-subtitle";
					toolbarTitle.insertAdjacentElement("afterend", subtitle);
				}

				const today = new Date();

				const weekday = capitalizarPrimeiraLetra(
					calendar.formatDate(today, { weekday: "long" }),
				);

				const day = calendar.formatDate(today, { day: "2-digit" });

				const month = capitalizarPrimeiraLetra(
					calendar.formatDate(today, { month: "long" }),
				);

				subtitle.textContent = `${weekday} – ${day} de ${month}`;
			},
		},
	);

	calendar.render();
});
