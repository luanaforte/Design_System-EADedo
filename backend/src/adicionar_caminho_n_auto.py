import json
import os
import re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
arquivo_json = os.path.join(BASE_DIR, "disciplinas_agrupadas.json")

def processar(base_path=r"N:\7. Graduacao_EaD\Produção EAD UNIFOR"):
    # Carregar JSON existente (se não existir, cria vazio)
    if os.path.exists(arquivo_json):
        with open(arquivo_json, "r", encoding="utf-8") as f:
            dados = json.load(f)
    else:
        dados = {}

    # Verificar se o diretório base existe
    if not os.path.exists(base_path):
        print(f"⚠️ Aviso: Caminho de rede não encontrado: {base_path}")
        print("Certifique-se de que a unidade de rede está montada. Pulando mapeamento automático.")
        return False

    try:
        # Listar pastas do diretório base
        pastas = [
            nome for nome in os.listdir(base_path)
            if os.path.isdir(os.path.join(base_path, nome))
        ]
    except Exception as e:
        print(f"❌ Erro ao acessar o diretório base: {e}")
        return False

    # Rastrear novas pastas adicionadas
    novas_adicionadas = []

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
            novas_adicionadas.append((codigo, nome, caminho_completo))

    # Ordenar numericamente
    dados = dict(sorted(dados.items(), key=lambda x: int(x[0])))

    with open(arquivo_json, "w", encoding="utf-8") as f:
        json.dump(dados, f, ensure_ascii=False, indent=2)

    print("✅ Atualização automática concluída!")
    print(f"📁 Total de pastas processadas: {len(pastas)}")

    if novas_adicionadas:
        print("\n✨ Novas pastas detectadas no drive N: que não estavam no JSON e foram adicionadas:")
        print("-" * 75)
        for cod, nme, path in novas_adicionadas:
            print(f"  🔹 [{cod}] {nme}")
            print(f"     📁 Caminho: {path}")
        print("-" * 75)
        print(f"➕ Total de novas pastas inseridas no JSON: {len(novas_adicionadas)}")
    else:
        print("\n✨ Nenhuma nova pasta detectada no drive N: (todas as pastas já constavam no JSON).")

    return True

if __name__ == "__main__":
    processar()
