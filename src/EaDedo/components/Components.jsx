import React from "react";
import { useNavigate } from "react-router-dom";

export default function Components() {
	const navigate = useNavigate();

	const componentes = [
		{
			title: "Accordions",
			path: "Accordions",
			desc: "Componentes colapsáveis para organizar conteúdos em painéis empilhados.",
		},
		{
			title: "Avatar",
			path: "Avatar",
			desc: "Representação visual de usuários, fotos de perfil ou iniciais.",
		},
		{
			title: "Avatar Tagline Group",
			path: "Avatar_tagline__group",
			desc: "Conjunto de avatar acompanhado de nome e descrição de cargo ou status.",
		},
		{
			title: "Badge",
			path: "Badge",
			desc: "Pequenos indicadores numéricos ou de status para notificações e contagens.",
		},
		{
			title: "Banner Alert",
			path: "Banner_alert",
			desc: "Mensagens de destaque para avisos, erros ou comunicações críticas.",
		},
		{
			title: "Banner Image Text",
			path: "Banner_image_text",
			desc: "Bloco promocional ou informativo combinando imagem de fundo e texto.",
		},
		{
			title: "Buttons",
			path: "Button",
			desc: "Elementos de ação primária, secundária e terciária do sistema.",
		},
		{
			title: "Button Direction",
			path: "Button_direction",
			desc: "Botões de navegação direcional (Próximo/Anterior) para fluxos e paginação.",
		},
		{
			title: "Button Section Menu",
			path: "Button_section_menu",
			desc: "Botões estruturados para menus de categoria ou navegação por seções.",
		},
		{
			title: "Cards",
			path: "Cards",
			desc: "Contêineres flexíveis para agrupar informações e ações sobre um tema.",
		},
		{
			title: "Chat IA",
			path: "chat_IA",
			desc: "Interface de balões e campo de entrada para interação com assistentes virtuais.",
		},
		{
			title: "Carousel",
			path: "Carousel",
			desc: "Slider de conteúdo interativo para exibição de múltiplos itens em sequência.",
		},
		{
			title: "Closing Banner",
			path: "Closing_banner",
			desc: "Componente de fechamento de página com call-to-action final.",
		},
		{
			title: "Colapse Section",
			path: "ColapseSection",
			desc: "Seções de conteúdo que podem ser expandidas ou ocultadas pelo usuário.",
		},
		{
			title: "Header Image",
			path: "Header_image",
			desc: "Cabeçalho visual com suporte a preenchimento por imagem e sobreposição.",
		},
		{
			title: "Header Text",
			path: "Header_text",
			desc: "Título e subtítulo de página com foco exclusivo em tipografia.",
		},
		{
			title: "Header Text Image",
			path: "Header_text_image",
			desc: "Composição de cabeçalho unindo texto de impacto e elementos visuais laterais.",
		},
		{
			title: "Icon",
			path: "Icon",
			desc: "Sistema de ícones vetoriais padronizados para suporte visual.",
		},
		{
			title: "Iframe Video",
			path: "IframeVideo",
			desc: "Contêiner responsivo para incorporação de vídeos (YouTube/Vimeo).",
		},
		{
			title: "Indicator",
			path: "Indicator",
			desc: "Sinalizadores visuais de progresso, etapas ou status de sistema.",
		},
		{
			title: "Progress Bar",
			path: "Progress_bar",
			desc: "Barra visual de preenchimento para indicar conclusão de tarefas ou carregamento.",
		},
		{
			title: "Search",
			path: "Search",
			desc: "Barra de busca com sugestões e estados de feedback visual.",
		},
		{
			title: "Slider",
			path: "Slider",
			desc: "Controle deslizante para seleção de valores ou navegação de banners.",
		},

		{
			title: "Tag",
			path: "Tag",
			desc: "Rótulos compactos para categorização, filtros ou metadados simples.",
		},
		{
			title: "Tag Course",
			path: "Tag_course",
			desc: "Tags especializadas para identificação de cursos e modalidades de ensino.",
		},
		{
			title: "Text Header",
			path: "Text_header",
			desc: "Blocos de texto estruturados para introdução de módulos ou capítulos.",
		},
		{
			title: "Toggle Libras",
			path: "ToggleLibras",
			desc: "Botão de acessibilidade para ativação de intérprete virtual de Libras.",
		},
		{
			title: "Tooltip",
			path: "Tooltip",
			desc: "Pequenas caixas de texto flutuantes que surgem ao passar o mouse (hover).",
		},
		{
			title: "Table Cell",
			path: "Table_cell",
			desc: "Células organizacionais de tabela para exibição estruturada de títulos e conteúdos.",
		},
		{
			title: "Summary",
			path: "Summary",
			desc: "Componente de ancoragem e sumário de tópicos para navegação interna de módulos.",
		},
	].sort((a, b) => a.title.localeCompare(b.title));

	return (
		<div className="foundation-page EadGraduacao">
			{/* Header com o padrão Midnight */}
			<header className="foundation-hero">
				<h1 className="display">Componentes</h1>
				<p className="paragraph">
					Nossa biblioteca de componentes reutilizáveis. Construídos sobre os
					fundamentos para garantir consistência e agilidade no desenvolvimento.
				</p>
			</header>

			<div className="foundation-container">
				<div className="foundation-body" style={{ maxWidth: "100%" }}>
					<div className="fundamentals-grid">
						{componentes.map((item) => (
							<div
								key={item.path}
								className="fundamental-card-wrapper"
								onClick={() => navigate(item.path)}>
								<div className="card-info">
									<h4 className="card-title">{item.title}</h4>
									<p className="legend">{item.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
