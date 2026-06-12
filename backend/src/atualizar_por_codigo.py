import json
import csv
from collections import defaultdict

arquivo_json = "disciplinas_agrupadas.json"
arquivo_txt = "disciplinas_info.txt"

def formatar_natureza(texto):
    if not texto:
        return texto

    # Remove CCEaD
    texto = texto.replace("CCEaD", "").strip()

    # Deixa minúsculo
    texto = texto.lower()

    # Primeira letra maiúscula
    texto = texto.capitalize()

    return texto

dados_txt = defaultdict(lambda: {
    "carga_horaria": None,
    "natureza": None,
    "cursos": set(),
    "centros": set()
})

with open(arquivo_txt, "r", encoding="utf-8") as f:
    reader = csv.DictReader(f, delimiter="\t")

    for row in reader:
        codigo = row["COD.DISCIPLINA"].strip()

        dados_txt[codigo]["carga_horaria"] = row["CH"].strip()
        dados_txt[codigo]["natureza"] = formatar_natureza(
            row["NATUREZA DISCIPLINA"].strip()
        )
        dados_txt[codigo]["cursos"].add(row["CURSO"].strip())
        dados_txt[codigo]["centros"].add(row["CENTRO"].strip())


# Converter sets para listas
for codigo in dados_txt:
    dados_txt[codigo]["cursos"] = list(dados_txt[codigo]["cursos"])
    dados_txt[codigo]["centros"] = list(dados_txt[codigo]["centros"])


with open(arquivo_json, "r", encoding="utf-8") as f:
    dados_json = json.load(f)

for numero_producao, conteudo in dados_json.items():

    if isinstance(conteudo, dict) and "disciplinas" in conteudo:
        disciplinas = conteudo["disciplinas"]
    elif isinstance(conteudo, list):
        disciplinas = conteudo
    else:
        continue

    for disciplina in disciplinas:
        codigo = disciplina.get("codigo")

        if codigo in dados_txt:
            disciplina.update({
                "carga_horaria": dados_txt[codigo]["carga_horaria"],
                "natureza": dados_txt[codigo]["natureza"],
                "cursos": dados_txt[codigo]["cursos"],
                "centros": dados_txt[codigo]["centros"]
            })

with open(arquivo_json, "w", encoding="utf-8") as f:
    json.dump(dados_json, f, ensure_ascii=False, indent=2)

print("✅ JSON atualizado com informações acadêmicas e natureza formatada!")
