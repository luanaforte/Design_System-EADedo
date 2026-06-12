import json
import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DIRETORIO_PUBLIC = os.path.abspath(os.path.join(BASE_DIR, "..", "..", "public"))
NOME_ARQUIVO = "lista_disciplinas_formatada.xlsx"
CAMINHO_FINAL = os.path.join(DIRETORIO_PUBLIC, NOME_ARQUIVO)
ARQUIVO_JSON = os.path.join(BASE_DIR, "disciplinas_agrupadas.json")

def processar():
    # 1. VERIFICAÇÃO DE DEPENDÊNCIAS
    try:
        import pandas as pd
    except ImportError:
        print("❌ Erro: A biblioteca 'pandas' não está instalada.")
        print("Instale executando: pip install pandas")
        return False

    try:
        import openpyxl
    except ImportError:
        print("❌ Erro: A biblioteca 'openpyxl' não está instalada.")
        print("Instale executando: pip install openpyxl")
        return False

    try:
        if not os.path.exists(ARQUIVO_JSON):
            print(f"⚠️ Aviso: Arquivo JSON não encontrado: {ARQUIVO_JSON}")
            return False

        with open(ARQUIVO_JSON, "r", encoding="utf-8") as f:
            json_data = json.load(f)

        dados_para_planilha = []

        # 3. PROCESSAMENTO
        for cod_prod, conteudo in json_data.items():
            if isinstance(conteudo, dict):
                disciplinas = conteudo.get("disciplinas", [])
                caminho_n = conteudo.get("caminho_n", "")
            else:
                disciplinas = []
                caminho_n = ""
                
            task_name = (disciplinas[0].get("nome", "Sem Nome") if disciplinas else conteudo.get("nome", "Sem Nome")).title()
            
            cod_ead = ""
            cod_eadcp = ""
            tem_tutoria = "Não"
            tem_beecrowd = "Não"
            for d in disciplinas:
                mod = str(d.get("modalidade", "")).upper()
                if mod == "EAD": cod_ead = d.get("codigo", "")
                elif mod == "EADCP": cod_eadcp = d.get("codigo", "")
                if d.get("tutoria_ia"):
                    tem_tutoria = "Sim"
                if d.get("beecrowd"):
                    tem_beecrowd = "Sim"

            dados_para_planilha.append({
                "codProd": cod_prod,
                "Task Name": task_name,
                "cod.EAD": cod_ead,
                "Cod.EADCP": cod_eadcp,
                "Tutoria IA 4.0": tem_tutoria,
                "Beecrowd": tem_beecrowd,
                "Caminho Rede (N)": caminho_n 
            })

        # 4. GERAÇÃO
        if not os.path.exists(DIRETORIO_PUBLIC):
            os.makedirs(DIRETORIO_PUBLIC)
            
        df = pd.DataFrame(dados_para_planilha)
        df = df.sort_values(by="codProd")
        df.to_excel(CAMINHO_FINAL, index=False)
        
        print(f"✅ SUCESSO! Arquivo gerado em: {CAMINHO_FINAL}")
        return True

    except Exception as e:
        print(f"❌ Erro crítico: {e}")
        return False

if __name__ == "__main__":
    processar()