import os
import sys
import argparse

# Configuração para evitar erros de encode de caracteres especiais (emojis) no Windows Prompt
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

# Configuração de caminhos para permitir importar scripts de backend/src/
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SRC_DIR = os.path.join(BASE_DIR, "src")
sys.path.append(SRC_DIR)

BANNER = """
======================================================
 ✨  EaDedo Backend CLI - Central de Gerenciamento  ✨
======================================================
"""

def print_section(title, emoji="🚀"):
    print(f"\n{emoji}  \033[1;36m{title}\033[0m")
    print("-" * 50)

def print_success(message):
    print(f"\033[1;32m{message}\033[0m")

def print_error(message):
    print(f"\033[1;31m{message}\033[0m")

def print_warning(message):
    print(f"\033[1;33m{message}\033[0m")

def verificar_dependencias():
    dependencias_faltando = []
    
    try:
        import pandas
    except ImportError:
        dependencias_faltando.append("pandas")
        
    try:
        import openpyxl
    except ImportError:
        dependencias_faltando.append("openpyxl")
        
    if dependencias_faltando:
        print_warning(f"⚠️ Atenção! Dependências ausentes no Python: {', '.join(dependencias_faltando)}")
        print("Para instalar todas as dependências necessárias, execute:")
        print(f"\033[1;34mpip install {' '.join(dependencias_faltando)}\033[0m\n")
        return False
    return True

def run_generate_json():
    print_section("Gerando JSON base a partir de disciplinas.txt", "📄")
    try:
        import gerar_json
        gerar_json.processar()
        print_success("✅ Geração do JSON base concluída com sucesso!")
        return True
    except Exception as e:
        print_error(f"❌ Erro ao gerar JSON: {e}")
        return False

def run_scan_paths():
    print_section("Buscando e mapeando caminhos da rede (Drive N:\\)", "📁")
    try:
        import adicionar_caminho_n_auto
        sucesso = adicionar_caminho_n_auto.processar()
        if sucesso:
            print_success("✅ Mapeamento de caminhos da rede concluído com sucesso!")
        return sucesso
    except Exception as e:
        print_error(f"❌ Erro no mapeamento da rede: {e}")
        return False

def run_merge_academic():
    print_section("Injetando dados acadêmicos e ementas", "🎓")
    try:
        import atualizar_por_codigo
        sucesso = atualizar_por_codigo.processar()
        if sucesso:
            print_success("✅ Informações acadêmicas integradas com sucesso!")
        return sucesso
    except Exception as e:
        print_error(f"❌ Erro ao integrar informações acadêmicas: {e}")
        return False

def run_export_excel():
    print_section("Gerando planilha Excel final para o public/", "📊")
    try:
        import gerar_planilha
        sucesso = gerar_planilha.processar()
        if sucesso:
            print_success("✅ Planilha gerada com sucesso sob a pasta public/!")
        return sucesso
    except Exception as e:
        print_error(f"❌ Erro ao gerar planilha final: {e}")
        return False

def run_check_missing():
    print_section("Verificando disciplinas não listadas", "🔍")
    try:
        import atualizar_web_aula
        sucesso = atualizar_web_aula.processar()
        if sucesso:
            print_success("✅ Verificação de pendências concluída!")
        return sucesso
    except Exception as e:
        print_error(f"❌ Erro na verificação: {e}")
        return False

def run_all():
    print_section("INICIANDO PIPELINE COMPLETO DO BACKEND", "🔥")
    verificar_dependencias()
    
    steps = [
        ("Geração do JSON base", run_generate_json),
        ("Mapeamento do Drive N:", run_scan_paths),
        ("Integração de dados acadêmicos", run_merge_academic),
        ("Geração da planilha Excel final", run_export_excel)
    ]
    
    for name, step_func in steps:
        success = step_func()
        if not success:
            print_error(f"\n❌ O pipeline foi interrompido na etapa: {name}")
            return False
            
    print("\n" + "=" * 50)
    print_success("✨ PIPELINE EXECUTADO COM SUCESSO TOTAL! ✨")
    print("=" * 50)
    return True

def main():
    print(BANNER)
    
    parser = argparse.ArgumentParser(description="CLI unificada para gerenciar o backend do EaDedo.")
    parser.add_argument(
        "comando",
        choices=["run-all", "generate-json", "scan-paths", "merge-academic", "export-excel", "check-missing", "check-deps"],
        help="Escolha o comando/pipeline que deseja executar."
    )
    
    args = parser.parse_args()
    
    if args.comando == "run-all":
        run_all()
    elif args.comando == "generate-json":
        run_generate_json()
    elif args.comando == "scan-paths":
        run_scan_paths()
    elif args.comando == "merge-academic":
        run_merge_academic()
    elif args.comando == "export-excel":
        run_export_excel()
    elif args.comando == "check-missing":
        run_check_missing()
    elif args.comando == "check-deps":
        print_section("Verificando dependências do Python", "🐍")
        if verificar_dependencias():
            print_success("✅ Todas as dependências necessárias estão instaladas!")

if __name__ == "__main__":
    try:
        # Ativar suporte a cores no terminal do Windows se aplicável
        os.system("color")
    except:
        pass
    main()
