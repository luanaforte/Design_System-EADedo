import CodeBlockWithCopy from "../../../components/CodeBlockWithCopy";
import TableOfContents from "../../../components/TableOfContents";
import Tabela_spaces from "../../../assets/Tabela_spaces.png";
import Use_spacing from "../../../assets/use_spacing.png";
import "./Layout.css";
import React from "react";

export default function Layout() {
	return (
		<div className="outlet__grid" id="Introducao">
			<h2 className="heading2">Layout</h2>
			<p className="paragraph">
				O layout define como os elementos se organizam visualmente na tela,
				garantindo consistência e legibilidade em todas as páginas. Nesta seção,
				apresentamos os tamanhos de containers utilizados para limitar a largura
				do conteúdo e o sistema de espaçamento padronizado, que mantém harmonia
				entre margens, paddings e distâncias internas dos componentes.
			</p>
			<hr />
			<h3 className="heading3" id="containers">
				Containers
			</h3>
			<p className="paragraph">
				Containers são áreas delimitadas que centralizam e organizam o conteúdo
				dentro da página. Eles ajudam a manter o alinhamento e a legibilidade,
				evitando que textos e elementos fiquem muito largos em telas grandes ou
				desorganizados em telas menores. No sistema, utilizamos larguras
				padronizadas para garantir consistência e facilitar o desenvolvimento
				responsivo.
			</p>
			<ul className="list-ul">
				<li className="list-item">
					<span className="tag">.container-lg</span> — largura máxima de
					57.625rem (~922px)
				</li>
				<main className="container-lg">
					<div className="card-layout"></div>
				</main>
				<li className="list-item">
					<span className="tag">.container-md</span> — largura máxima de
					47.875rem (~766px)
				</li>
				<main className="container-md">
					<div className="card-layout"></div>
				</main>
				<li className="list-item">
					<span className="tag">.container-sm</span> — largura máxima de 45rem
					(~720px)
				</li>
				<main className="container-sm">
					<div className="card-layout"></div>
				</main>
			</ul>
			<CodeBlockWithCopy>
				{`
:root {
  --container-lg: 57.625rem; /* 922px */
  --container-md: 47.875rem; /* 766px */
  --container-sm: 45rem;     /* 720px */
}

.container-lg {
  max-width: var(--container-lg);
  margin: auto;
}

.container-md {
  max-width: var(--container-md);
  margin: auto;
}

.container-sm {
  max-width: var(--container-sm);
  margin: auto;
}

  `}
			</CodeBlockWithCopy>
			<p className="paragraph" style={{ marginTop: "2rem" }}>
				As media queries definidas no sistema são para adaptar o layout conforme
				o tamanho da tela, garantindo uma boa experiência em diferentes
				dispositivos:
			</p>
			<ul className="list-ul">
				<li className="list-item">
					Até <strong>425px</strong>: dispositivos pequenos como telefones.
				</li>
				<li className="list-item">
					Até <strong>768px</strong>: tablets na horizontal e dispositivos
					médios.
				</li>
				<li className="list-item">
					Até <strong>900px</strong>: tablets grandes e desktops pequenos.
				</li>
				<li className="list-item">
					Até <strong>1024px</strong>: laptops e desktops médios.
				</li>
				<li className="list-item">
					Até <strong>1440px</strong>: laptops grandes e desktops grandes.
				</li>
			</ul>
			<CodeBlockWithCopy>
				{`

@media (max-width: 425px) {
  /* estilos para telefones pequenos */
}

@media (max-width: 768px) {
  /* estilos para tablets e dispositivos médios */
}

@media (max-width: 900px) {
  /* tablets grandes e desktops pequenos */
}

@media (max-width: 1024px) {
  /* laptops e desktops médios */
}

@media (max-width: 1440px) {
  /* laptops grandes e desktops grandes */
}
  `}
			</CodeBlockWithCopy>
			<hr />
			<h3 className="heading3" id="spaces">
				Espaçamento
			</h3>
			<p className="paragraph">
				Um sistema de espaçamento simplifica a criação de layouts de página e
				interface do usuário.
			</p>
			<h4 className="heading4">Unidade base de 16 pixels</h4>
			<p className="paragraph">
				Nosso sistema de espaçamento é construído em torno de uma unidade
				múltipla de de 4 pixels. Essa unidade base determina a escala de
				espaçamento e garante consistência visual entre os produtos.
			</p>
			<h4 className="heading4">Escala</h4>
			<p className="paragraph">
				Construindo a partir da unidade base de 16px, a fundação principal do
				nosso sistema de espaçamento é a escala de espaçamento. Essa escala é um
				conjunto limitado de valores de espaço que podem ser usados ​​para
				dispor elementos de UI de forma consistente. Cada valor de espaçamento é
				um múltiplo de 4, e a unidade varia de 0px a 64px para permitir
				flexibilidade e, ao mesmo tempo, manter a consistência em diferentes
				layouts.
			</p>
			<h4 className="heading4">Tokens</h4>
			<p className="paragraph margin__bottom--default">
				A unidade base de 16px também forma a base do nosso sistema de tokens
				space. Cada token é um múltiplo desta unidade base, o sufixo numérico o
				número da unidade em rem. Por exemplo, space-100 é 100% do tamanho da
				unidade base, portanto representa 16px ou 1 rem. Cada token de espaço
				deve ser usado no lugar dos valores de pixel bruto ou REM ao adicionar
				espaço entre componentes ou objetos em uma página. Exemplos de uso são
				detalhados abaixo:
			</p>
			<img
				src={Tabela_spaces}
				alt=""
				className="image-fluid margim__bottom--default"
				id="Tabela_spaces"
			/>
			<h3 className="heading3" id="use_spacing">
				Uso de espaçamento
			</h3>
			<p className="paragraph">
				Diferentes casos de uso exigem diferentes faixas de unidades de
				espaçamento para atingir os melhores resultados. Nossa escala de
				espaçamento pode ser dividida em três faixas de tamanho diferentes:
			</p>
			<img
				src={Use_spacing}
				alt=""
				className="image-fluid margim__bottom--default"
			/>
			<h4 className="heading4">Valores pequenos - 0px a 8px</h4>
			<p className="paragraph">
				Use os tokens de <span className="tag">space-0</span> a{" "}
				<span className="tag">space-050</span> (0px a 8px) para partes pequenas
				e compactas da interface do usuário.
			</p>
			<p className="paragraph">Exemplos:</p>
			<ul className="list-ul">
				<li className="list-item">Lacuna entre pequenos ícones e texto</li>
				<li className="list-item">
					Preenchimento de contêiner de pequenos componentes (ou seja, emblemas,
					botões de ícones, células de tabela)
				</li>
				<li className="list-item">
					Lacuna entre elementos repetidos (ou seja, grupos de botões)
				</li>
				<li className="list-item">
					Preenchimento dentro de componentes de entrada
				</li>
				<li className="list-item">
					Espaçamento vertical entre elementos em um cartão (ou seja, um título
					e uma descrição, uma descrição e ações)
				</li>
				<li className="list-item">
					Espaço entre o gatilho e o elemento elevado (ou seja, entre o botão
					suspenso e o menu)
				</li>
			</ul>
			<h4 className="heading4">Valores médios - 12px a 24px</h4>
			<p className="paragraph">
				Use os tokens <span className="tag">space-075</span> de{" "}
				<span className="tag">space-150</span> (12px a 24px) para partes maiores
				e menos densas da interface do usuário.
			</p>
			<p className="paragraph">Exemplos:</p>
			<ul className="list-ul">
				<li className="list-item">
					Preenchimento de contêiner de componentes maiores (por exemplo,
					botões)
				</li>
				<li className="list-item">
					Espaço entre o avatar/ícone grande e o conteúdo (ou seja, mensagens da
					seção)
				</li>
				<li className="list-item">
					Espaçamento vertical entre elementos em cartões
				</li>
				<li className="list-item">
					Espaçamento entre itens em componentes menos densamente compactados ou
					maiores
				</li>
			</ul>
			<h4 className="heading4">Valores grandes - 32px a 80px</h4>
			<p className="paragraph">
				Use os tokens <span className="tag">space-200</span> a{" "}
				<span className="tag">space-400</span> (32px a 64px) para as maiores
				partes da interface do usuário e para elementos de layout.
			</p>
			<p className="paragraph">Exemplos:</p>
			<ul className="list-ul">
				<li className="list-item">
					O espaço entre o conteúdo na página (ou seja, espaçamento entre o topo
					da página e o cabeçalho)
				</li>
				<li className="list-item">
					Alinhamento dentro de partes maiores de conteúdo (ou seja, alinhamento
					de conteúdo em Flag)
				</li>
			</ul>
			<CodeBlockWithCopy>
				{`

:root {
  --space-012: 0.125rem;
  /*2px*/
  --space-025: 0.25rem;
  /*4px*/
  --space-050: 0.5rem;
  /*8px*/
  --space-075: 0.75rem;
  /*12px*/
  --space-100: 1rem;
  /*16px*/
  --space-125: 1.25rem;
  /*20px*/
  --space-150: 1.5rem;
  /*24px*/
  --space-200: 2rem;
  /*32px*/
  --space-250: 2.5rem;
  /*40px*/
  --space-300: 3rem;
  /*48px*/
  --space-350: 3.5rem;
  /*56px*/
  --space-400: 4rem;
  /*64px*/
}
  `}
			</CodeBlockWithCopy>
			<TableOfContents
				headings={[
					{ id: "Introducao", label: "Introdução" },
					{ id: "containers", label: "Containers" },
					{ id: "spaces", label: "Espaçamento" },
					{ id: "Tabela_spaces", label: "Tabela dos Spaces" },
					{ id: "use_spacing", label: "Uso de espaçamento" },
				]}
			/>
		</div>
	);
}
