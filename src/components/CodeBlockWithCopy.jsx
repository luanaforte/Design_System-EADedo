import React, { useState } from "react";

export default function CodeBlockWithCopy({ children }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(children).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	};

	return (
		<div className="code-block">
			<pre>
				<code>{children}</code>
			</pre>
			<button className="copy-button" onClick={handleCopy}>
				{copied ? "Copiado!" : "Copiar"}
			</button>
		</div>
	);
}
