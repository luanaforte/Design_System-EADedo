import React from "react";
import "./Indicator.css";
import Indicator from "./Indicator";
import CodeBlockWithCopy from "../../../components/CodeBlockWithCopy";

export default function Indicator_doc() {
	return (
		<div className="">
			<h2 className="heading2">Indicator</h2>
			<p className="paragraph">
				O <strong>Indicator</strong> é um componente de interface utilizado em
				sliders e carousels. Ele exibe a posição atual do usuário dentro do
				conteúdo e indica visualmente o progresso em relação ao início e ao fim
				do slider ou carousel. Pode ser usado para fornecer feedback de
				navegação e melhorar a usabilidade do componente.
			</p>
			<p className="paragraph">
				Nos componentes em que é utilizado, o <strong>Indicator</strong> é
				inserido automaticamente, sem necessidade de configuração adicional.
			</p>
			<Indicator />
			<CodeBlockWithCopy>
				{`
<div class="indicators">
	<button class="indicator active" onclick="changeSlide(0)"></button>
	<button class="indicator" onclick="changeSlide(1)"></button>
	<button class="indicator" onclick="changeSlide(2)"></button>
</div>
			`}
			</CodeBlockWithCopy>
		</div>
	);
}
