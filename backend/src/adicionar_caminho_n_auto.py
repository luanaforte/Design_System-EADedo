import json
import os
import re

arquivo_json = "disciplinas_agrupadas.json"
base_path = r"N:\7. Graduacao_EaD\Produção EAD UNIFOR"

# Carregar JSON existente (se não existir, cria vazio)
if os.path.exists(arquivo_json):
    with open(arquivo_json, "r", encoding="utf-8") as f:
        dados = json.load(f)
else:
    dados = {}

# Listar pastas do diretório base
pastas = [
    nome for nome in os.listdir(base_path)
    if os.path.isdir(os.path.join(base_path, nome))
]

for pasta in pastas:
    pasta = pasta.strip()

    match = re.match(r"(\d+)\s*-\s*(.*)", pasta)
    if not match:
        continue

    codigo, nome = match.groups()
    codigo = codigo.zfill(3)

    caminho_completo = os.path.join(base_path, pasta)

    if codigo in dados:
        # Se já for objeto estruturado
        if isinstance(dados[codigo], dict):
            dados[codigo]["caminho_n"] = caminho_completo
        else:
            # Se ainda for lista antiga
            dados[codigo] = {
                "caminho_n": caminho_completo,
                "disciplinas": dados[codigo]
            }
    else:
        # Se não existir no JSON
        dados[codigo] = {
            "nome": nome,
            "caminho_n": caminho_completo
        }

# Ordenar numericamente
dados = dict(sorted(dados.items(), key=lambda x: int(x[0])))

with open(arquivo_json, "w", encoding="utf-8") as f:
    json.dump(dados, f, ensure_ascii=False, indent=2)

print("✅ Atualização automática concluída!")
print(f"📁 Total de pastas processadas: {len(pastas)}")
