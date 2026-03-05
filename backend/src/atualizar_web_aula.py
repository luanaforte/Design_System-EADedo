import json
import pandas as pd
import sys

# Garante que o openpyxl esteja disponível
try:
    import openpyxl
except ImportError:
    print("❌ Erro: A biblioteca 'openpyxl' não está instalada.")
    print("Execute o comando: python -m pip install openpyxl")
    sys.exit()

arquivo_json = "disciplinas_agrupadas.json"

# Sua lista de referência (o que deve ser IGNORADO)
lista_referencia = """
Ambiente de Dados 46
Analítica para Negócios 174
Antropologia do Consumo e Neuromarketing 69
Análise de Dados Não Estruturados em Gestão 94
Atividades Extensionistas 073
Big Data em Negócios 42
Ciências de Dados Aplicado à Gestão 52
Compliance e Gestão de Riscos 105
Contabilidade e Negócios 12
Contabilidade Intermediária 34
Controladoria e Orçamento 21
Dados e Tomada de Decisão 135
Desenvolvimento para Plataforma Web 59
Design, Produtos e Soluções 172
Dinâmicas do Empreendedorismo 35
Estrutura de Dados em Analítica 72
Experiência em Contabilidade Aplicada 196
Experiência em Gestão Aplicada 136
Finanças e Orçamento Público 91
Fundamentos de Internet das Coisas (IoT) 159
Gerenciamento da Implantação de Sistemas 108
Gerenciamento Serviços para o Ciberespaço 82
Gestão do Capital de Giro 67
Gestão Processos de Negócios 22
Ideação para Soluções Tecnológicas 162
Inovação, Empreendedorismo e Ética 134
Inteligência de Negócios 37
Legislação e Compliance em Logística 185
Liderança e gestão 123
Marketing Contemporâneo 29
Marketing de Relacionamento 70
Mentoria 119
Mercado e Consumidor 15
Metodologia científica 033
Métricas e Hibridização no Trabalho 182
Pesquisa em Contabilidade 173
Pesquisa Operacional Aplicada à Gestão 120
Postura Profissional e Comunicação Interpessoal 018
Programação Orientada a Objetos 30
Projeto Aplicado de Desenvolvimento de Software – Etapa 2 83
Projeto Aplicado Multiplataforma – Etapa 2 96
Prática Tributária e Trabalhista 130
Raciocínio Lógico e Algorítmico 17
Segurança no Ciberespaço 141
Sistema de Informações 038
Storytelling de Dados 98
Supply Chain e Liderança Logística 90
Tecnologia em Analítica de Negócios 155
Teoria da Contabilidade 129
Técnicas de Integração de Sistemas 87
Técnicas de Programação Linux 58
Valuation 66
Administração e Organizações 3
Ambientes de Desenvolvimento de Software 45
Análise Descritiva de Dados 48
Análise Multivariada de Dados 74
Avaliação Financeira de Empresas e Projetos 64
Capitalismo Consciente 125
Comunicação e Inovação 28
Contabilidade Geral Aplicada 25
Desenvolvimento de Software em Nuvem 76
Desenvolvimento para Plataformas Móveis 81
Estatísticas e Processamentos de Dados 160
Estrutura de Dados 56
Gestão de Operações 41
Gestão de Produto 68
Gestão Estratégica de Pessoas 61
Gestão Tributos Federais 92
Gestão Tributária 85
Inovação em Soluções Computacionais 187
Inteligência Analítica de Negócios 99
Interação Humano-Computador 6
Investigação Científica 198
Matemática para Computação 7
Modelagem Matemática 161
Omnichannel e Trade Marketing 51
Processos de Preparação de Dados 86
Processos e Estruturas da Gestão de Pessoas 93
Programação Funcional 88
Programação para Analítica de Negócios 54
Projeto Aplicado Multiplataforma - Etapa 1 89
Projeto e Arquitetura de Sistemas 55
Requisitos e Modelagem de Sistemas 32
Tendências no Varejo 178
Tópicos de Mineração de Dados e Inteligência Artificial 97
Visualização de Dados para Tomada de Decisão 80
Arte e Cultura Brasileira 71
Branding 43
Contratos Empresariais e Bancários 199
Custos e Formação de Preços 39
Design e Processos Gráficos 27
Direito Empresarial 36
Direitos Humanos 75
Economia da Inovação 19
Educação Ambiental 192
Estratégia Empresarial 049
Experiência em Gestão 124
Experiência Empreendedora 31
Fundamentos de Sistemas Computacionais 16
Gestão de Carreira e Desenvolvimento 181
Gestão de Custos Logísticos 195
Gestão de Projetos 053
Gestão de Vendas 110
Inovação e Negócios Criativos 1
Matemática Financeira 23
Matemática para Empreendedores 2
Mercado de Capitais no Contexto Global 40
Métricas em Marketing 50
Negociação Estratégica 20
Pessoas, Times e Organizações 188
Segurança em Projetos de Software 57
Teste e Validação de Sistemas 77
Ética e Negócios 011
Ética em Computação 139
Biodireito 197
Cenários Econômicos Empresariais 13
Ciência e Pesquisa 10
Consultoria em Gestão de Pessoas 104
Desafios do Ciberespaço 008
Dinâmica de Grupo e Trabalho em Equipe 180
Direito da Infância e da Juventude 148
Direito Urbanístico e das Cidades 201
Ergonomia e Segurança do Trabalho 79
Estrutura e Análise de Demonstrações Contábeis 24
Experiência em Contabilidade 103
Finanças Corporativas e Risco 142
Gerenciamento de Projetos 053
Gestão de Estoques e Fornecedores 177
Infraestrutura e Modais de Transporte 152
Inovação em Soluções Computacionais 060
Libras 127
Logística Global e Comércio Exterior 151
Marketing de Conteúdo 044
Marketing Digital 14
Metodologia Científica 33
Projeto Aplicado de Desenvolvimento de Software - Etapa 1 078
Simulação Empresarial em Ambiente Internacional 126
Sistemas Inteligentes de Apoio à Decisão 109
Tópicos Avançados em Contabilidade 112
Gestão de Mídias Digitais 26
"""

# 1. Criar um conjunto (set) apenas com os códigos que devem ser IGNORADOS
codigos_ignorar = set()
for linha in lista_referencia.strip().split('\n'):
    partes = linha.split()
    if partes:
        cod_limpo = partes[-1].zfill(3)
        codigos_ignorar.add(cod_limpo)

dados_para_planilha = []

try:
    with open(arquivo_json, "r", encoding="utf-8") as f:
        json_data = json.load(f)

    # 2. Percorrer TODO o arquivo JSON
    for cod_prod, conteudo in json_data.items():
        # Se o código do JSON NÃO estiver na lista de ignorar, ele vai para a planilha
        if cod_prod not in codigos_ignorar:
            
            # Pega o nome do grupo (geralmente o nome da primeira disciplina ou extraído do caminho)
            disciplinas = conteudo.get("disciplinas", [])
            task_name = disciplinas[0].get("nome", "Sem Nome") if disciplinas else "Grupo sem disciplinas"
            
            cod_ead = ""
            cod_eadcp = ""

            for d in disciplinas:
                mod = d.get("modalidade", "").upper()
                if mod == "EAD":
                    cod_ead = d.get("codigo", "")
                elif mod == "EADCP":
                    cod_eadcp = d.get("codigo", "")

            dados_para_planilha.append({
                "Task Name": task_name,
                "codProd (text)": cod_prod,
                "cod.EAD (text)": cod_ead,
                "Cod.EADCP (short text)": cod_eadcp
            })

    # 3. Gerar Excel
    if dados_para_planilha:
        df = pd.DataFrame(dados_para_planilha)
        # Ordenar por codProd para ficar organizado
        df = df.sort_values(by="codProd (text)")
        
        nome_arquivo = "disciplinas_nao_listadas.xlsx"
        df.to_excel(nome_arquivo, index=False)
        print(f"✅ Planilha '{nome_arquivo}' gerada!")
        print(f"📊 Foram encontrados {len(dados_para_planilha)} itens no JSON que não estavam na sua lista.")
    else:
        print("🤔 Não sobrou nada! Todos os códigos do JSON estavam na sua lista.")

except Exception as e:
    print(f"❌ Erro: {e}")