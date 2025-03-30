import Button from "./components/Button";

function App() {
	return (
		<div style={{ padding: "20px" }}>
			<h1>Minha Biblioteca de Componentes</h1>
			<Button label="Clique Aqui" onClick={() => alert("Botão clicado!")} />
		</div>
	);
}

export default App;
