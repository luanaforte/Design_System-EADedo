import os
import json
from collections import defaultdict

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
arquivo_entrada = os.path.join(BASE_DIR, "disciplinas.txt")
arquivo_saida = os.path.join(BASE_DIR, "disciplinas_agrupadas.json")


def processar():
    agrupado = defaultdict(list)

    with open(arquivo_entrada, "r", encoding="utf-8") as f:
        linhas = f.readlines()

    for linha in linhas:
        partes = linha.strip().split("\t")

        if len(partes) != 5:
            continue

        modalidade, numero_producao, codigo, nome, url_matriz = partes

        # Códigos que possuem Tutoria IA 4.0
        TUTORIA_IA_CODIGOS = {"G405", "G747", "G452", "G370", "G402", "G746", "N680"}

        # Códigos que possuem Beecrowd
        BEECROWD_CODIGOS = {"N683", "N685"}

        # Códigos com plataforma Up Business
        UPBUSINESS_CODIGOS = {"G455"}

        # NÃO incluímos numero_producao dentro do objeto
        disciplina = {
            "modalidade": modalidade,
            "codigo": codigo,
            "nome": nome,
            "url_matriz": url_matriz
        }

        if codigo in TUTORIA_IA_CODIGOS:
            disciplina["tutoria_ia"] = True

        if codigo in BEECROWD_CODIGOS:
            disciplina["beecrowd"] = True

        if codigo in UPBUSINESS_CODIGOS:
            disciplina["plataforma"] = "Up Business"

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
