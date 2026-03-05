import json
from collections import defaultdict

arquivo_entrada = "disciplinas.txt"
arquivo_saida = "disciplinas_agrupadas.json"


def processar():
    agrupado = defaultdict(list)

    with open(arquivo_entrada, "r", encoding="utf-8") as f:
        linhas = f.readlines()

    for linha in linhas:
        partes = linha.strip().split("\t")

        if len(partes) != 5:
            continue

        modalidade, numero_producao, codigo, nome, url_matriz = partes

        # NÃO incluímos numero_producao dentro do objeto
        disciplina = {
            "modalidade": modalidade,
            "codigo": codigo,
            "nome": nome,
            "url_matriz": url_matriz
        }

        agrupado[numero_producao].append(disciplina)

    # Ordenar pela chave numericamente
    agrupado_ordenado = dict(
        sorted(agrupado.items(), key=lambda x: int(x[0]))
    )

    with open(arquivo_saida, "w", encoding="utf-8") as f:
        json.dump(agrupado_ordenado, f, ensure_ascii=False, indent=2)

    print("✅ JSON gerado com sucesso!")
    print(f"📁 Arquivo criado: {arquivo_saida}")


if __name__ == "__main__":
    processar()
