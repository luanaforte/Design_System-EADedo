import React, { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";

export default function CodeBlockWithCopy({ children }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		// Remove espaços vazios do início e fim do texto para uma cópia limpa
		const textToCopy = children.trim();

		navigator.clipboard.writeText(textToCopy).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	};

	return (
		<div className="code-block-container">
			<div className="code-block-header">
				<div className="terminal-dots">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<button
					className={`copy-button ${copied ? "copied" : ""}`}
					onClick={handleCopy}>
					{copied ? (
						<>
							<Check size={16} weight="bold" />
							<span>Copiado!</span>
						</>
					) : (
						<>
							<Copy size={16} />
							<span>Copiar</span>
						</>
					)}
				</button>
			</div>
			<div className="code-block-content">
				<pre>
					<code>{children.trim()}</code>
				</pre>
			</div>
		</div>
	);
}
