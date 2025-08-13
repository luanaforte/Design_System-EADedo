import React from "react";
import CodeBlockWithCopy from "../../../components/CodeBlockWithCopy";
import Icon from "./Icon";

const Icon_sizes = [
	{
		label: "icon-size-sm",
		cod: `
<svg className="icon-size-sm" xmlns="http://www.w3.org/2000/svg" ...>
		`,
	},
	{
		label: "icon-size-md",
		cod: `
<svg className="icon-size-md" xmlns="http://www.w3.org/2000/svg" ...>
		`,
	},
	{
		label: "icon-size-lg",
		cod: `
<svg className="icon-size-lg" xmlns="http://www.w3.org/2000/svg" ...>
		`,
	},
];

export default function Icon_doc() {
	return (
		<div className="">
			<h2 className="heading2">Icon</h2>
			<p className="paragraph">
				Nossa biblioteca de ícones utiliza um sistema de tamanhos padronizado
				para garantir consistência visual em toda a interface. Existem três
				tamanhos principais:
			</p>
			<ul className="list-ul">
				<li className="list-item">
					<code className="tag">icon-size-sm</code> — ícone pequeno.
				</li>
				<li className="list-item">
					<code className="tag">icon-size-md</code> — ícone médio.
				</li>
				<li className="list-item">
					<code className="tag">icon-size-lg</code> — ícone grande.
				</li>
			</ul>
			<p className="paragraph">
				Para usar um ícone no seu projeto, siga estes passos:
			</p>
			<ol className="list-ol">
				<li className="list-item">Escolha o ícone desejado na biblioteca.</li>
				<li className="list-item">Copie o código SVG que será usado.</li>
				<li className="list-item">
					Adicione a classe de tamanho desejada logo após <code>{`<svg`}</code>{" "}
					e antes de <code>xmlns</code>.
					<br />
					Por exemplo:{" "}
					<code>{`<svg className="icon-size-md" xmlns="http://www.w3.org/2000/svg" ...>`}</code>
				</li>
			</ol>
			<p className="paragraph">
				Isso permite alterar rapidamente o tamanho de qualquer ícone sem
				modificar diretamente o seu código SVG, mantendo a consistência visual e
				facilitando ajustes futuros.
			</p>
			<Icon />
			<CodeBlockWithCopy>
				{`
:root {
  --icon-size-sm: 1rem;
  --icon-size-md: 1.5rem;
  --icon-size-lg: 2rem;
}

.icon-size-sm {
  width: var(--icon-size-sm);
  height: var(--icon-size-sm);
}

.icon-size-md {
  width: var(--icon-size-md);
  height: var(--icon-size-md);
}

.icon-size-lg {
  width: var(--icon-size-lg);
  height: var(--icon-size-lg);
}
`}
			</CodeBlockWithCopy>

			<hr />
			{Icon_sizes.map((item, index) => (
				<div key={index} className="flex flex-col gap-2">
					<p className="paragraph">{item.label}</p>
					<CodeBlockWithCopy>{`${item.cod}`}</CodeBlockWithCopy>
				</div>
			))}
		</div>
	);
}
