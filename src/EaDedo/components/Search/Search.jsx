import React, { useState } from "react";
import { ConceptSection, ChangelogSection } from "../../../components/ComponentPageLayout";
import CodeBlockWithCopy from "../../../components/CodeBlockWithCopy";
import "./Search.css";

const SearchInput = ({
  placeholder = "Informativo",
  variant = "",
  suggestions = [],
  noResults = false,
  isExpanded = false
}) => {
  const [value, setValue] = useState("");
  const [expanded, setExpanded] = useState(isExpanded);

  const MagnifyingGlassSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M21.5306 20.4693L16.8366 15.7762C18.1971 14.1428 18.8755 12.0478 18.7307 9.92691C18.5859 7.80604 17.629 5.82265 16.0591 4.38932C14.4892 2.95599 12.4272 2.18308 10.3019 2.23138C8.17666 2.27968 6.15184 3.14547 4.64867 4.64864C3.1455 6.15181 2.27971 8.17663 2.23141 10.3019C2.18311 12.4271 2.95602 14.4892 4.38935 16.0591C5.82268 17.629 7.80607 18.5859 9.92734 18.7307C12.0478 18.8755 14.1429 18.1971 15.7763 16.8365L20.4694 21.5306C20.5391 21.6003 20.6218 21.6556 20.7128 21.6933C20.8039 21.731 20.9015 21.7504 21 21.7504C21.0985 21.7504 21.1961 21.731 21.2872 21.6933C21.3782 21.6556 21.4609 21.6003 21.5306 21.5306C21.6003 21.4609 21.6556 21.3782 21.6933 21.2871C21.731 21.1961 21.7504 21.0985 21.7504 21C21.7504 20.9014 21.731 20.8038 21.6933 20.7128C21.6556 20.6218 21.6003 20.539 21.5306 20.4693ZM3.75 10.5C3.75 9.16495 4.14588 7.8599 4.88758 6.74987C5.62928 5.63984 6.68349 4.77467 7.91689 4.26378C9.15029 3.75289 10.5075 3.61922 11.8169 3.87967C13.1262 4.14012 14.329 4.78299 15.273 5.727C16.217 6.671 16.8599 7.87374 17.1203 9.18311C17.3808 10.4925 17.2471 11.8497 16.7362 13.0831C16.2253 14.3165 15.3601 15.3707 14.2501 16.1124C13.1401 16.8541 11.835 17.25 10.5 17.25C8.7104 17.248 6.99466 16.5362 5.72922 15.2708C4.46378 14.0053 3.75199 12.2896 3.75 10.5Z" fill="currentColor" />
    </svg>
  );

  return (
    <div className={`Search_Box ${expanded ? "Search_Box--expanded" : ""} ${variant}`}>
      {!expanded ? (
        <div className="Search_Box__input-wrapper" onClick={() => setExpanded(true)}>
          <input
            type="text"
            className="Search_Box__input"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="Search_Box__icon-btn">
            <MagnifyingGlassSVG />
          </button>
        </div>
      ) : (
        <div className="Search_Box__dropdown">
          <div className="Search_Box__header-expanded">
            <input
              autoFocus
              type="text"
              className="Search_Box__input"
              placeholder={placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={() => !value && !isExpanded && setExpanded(false)}
            />
            <button className="Search_Box__icon-btn" onClick={() => !value && !isExpanded && setExpanded(false)}>
              <MagnifyingGlassSVG />
            </button>
          </div>

          <div className="Search_Box__separator"></div>

          {noResults ? (
            <div className="Search_Box__no-results">
              <p className="paragraph--medium">Não foi possível encontrar uma correspondência, tente novamente.</p>
            </div>
          ) : (
            <ul className="Search_Box__suggestions-list list-ul">
              {suggestions.map((item, index) => (
                <li key={index} className="list-item">
                  <button className="Search_Box__suggestion-btn">
                    <p className="paragraph--medium">{item}</p>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};


export default function Search() {
  const [viewMode, setViewMode] = useState("designer");
  const [placeholderScope, setPlaceholderScope] = useState("Secretaria Virtual");

  const tabs = ["Designer", "Developer", "Changelog"];


  const searchLogs = [
    {
      version: "1.1.0",
      date: "29/04/2026",
      description: "Refatoração das classes CSS para seguir a metodologia BEM (Search_Box).",
    },
    {
      version: "1.0.0",
      date: "29/04/2026",
      description: "Criação inicial do componente de busca com suporte a sugestões e estados de erro.",
    }
  ];

  const htmlCode = `
<!-- Componente de Busca -->
<div class="Search_Box" id="main-search">
  
  <!-- Estado Inicial (Fechado) -->
  <div class="Search_Box__input-wrapper" onclick="toggleSearch(true)">
    <input type="text" class="Search_Box__input" placeholder="Pesquise na ${placeholderScope}" readonly />
    <button class="Search_Box__icon-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21.5306 20.4693L16.8366 15.7762C18.1971 14.1428 18.8755 12.0478 18.7307 9.92691C18.5859 7.80604 17.629 5.82265 16.0591 4.38932C14.4892 2.95599 12.4272 2.18308 10.3019 2.23138C8.17666 2.27968 6.15184 3.14547 4.64867 4.64864C3.1455 6.15181 2.27971 8.17663 2.23141 10.3019C2.18311 12.4271 2.95602 14.4892 4.38935 16.0591C5.82268 17.629 7.80607 18.5859 9.92734 18.7307C12.0478 18.8755 14.1429 18.1971 15.7763 16.8365L20.4694 21.5306C20.5391 21.6003 20.6218 21.6556 20.7128 21.6933C20.8039 21.731 20.9015 21.7504 21 21.7504C21.0985 21.7504 21.1961 21.731 21.2872 21.6933C21.3782 21.6556 21.4609 21.6003 21.5306 21.5306C21.6003 21.4609 21.6556 21.3782 21.6933 21.2871C21.731 21.1961 21.7504 21.0985 21.7504 21C21.7504 20.9014 21.731 20.8038 21.6933 20.7128C21.6556 20.6218 21.6003 20.539 21.5306 20.4693ZM3.75 10.5C3.75 9.16495 4.14588 7.8599 4.88758 6.74987C5.62928 5.63984 6.68349 4.77467 7.91689 4.26378C9.15029 3.75289 10.5075 3.61922 11.8169 3.87967C13.1262 4.14012 14.329 4.78299 15.273 5.727C16.217 6.671 16.8599 7.87374 17.1203 9.18311C17.3808 10.4925 17.2471 11.8497 16.7362 13.0831C16.2253 14.3165 15.3601 15.3707 14.2501 16.1124C13.1401 16.8541 11.835 17.25 10.5 17.25C8.7104 17.248 6.99466 16.5362 5.72922 15.2708C4.46378 14.0053 3.75199 12.2896 3.75 10.5Z" fill="currentColor"/>
      </svg>
    </button>
  </div>

  <!-- Estado Expandido (Dropdown) -->
  <div class="Search_Box__dropdown">
    <div class="Search_Box__header-expanded">
      <input type="text" id="search-input-field" class="Search_Box__input" placeholder="O que você procura?" oninput="handleSearch(this)" />
      <button class="Search_Box__icon-btn" onclick="toggleSearch(false)">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
        </svg>
      </button>
    </div>
    <div class="Search_Box__separator"></div>
    <ul class="Search_Box__suggestions-list" id="suggestions-list">
      <!-- Sugestões Iniciais -->
      <li class="list-item">
        <button class="Search_Box__suggestion-btn" onclick="scrollToSection('Rotulo_percursos')">
          <p class="paragraph--medium">Percursos de Aprendizagem</p>
        </button>
      </li>
      <!-- ... outras sugestões ... -->
    </ul>
  </div>
</div>`.trim();

  return (
    <div className="component-page">
      <header className="foundation-hero">
        <h2 id="introducao" className="heading2">Search</h2>
        <p className="paragraph">
          Componente de busca interativo com suporte a sugestões em tempo real e estados de retorno de dados.
        </p>
      </header>

      <div className="tab-menu">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setViewMode(tab.toLowerCase())}
            className={`tab_button ${viewMode === tab.toLowerCase() ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <main className="foundation-container">
        <div className="content-area">
          {viewMode === "designer" && (
            <div className="designer-view fade-in">
              <ConceptSection 
                title="O que é o Search?"
                description="O componente de busca permite que os usuários localizem conteúdos específicos rapidamente através de palavras-chave, oferecendo sugestões para acelerar o processo."
              />

              <section id="demo" className="margin__bottom--default">
                <h3 className="heading3">Demonstração Interativa</h3>
                <p className="paragraph">Selecione onde deseja pesquisar para ver o placeholder mudar:</p>
                
                <div className="demo-controls">
                  <button 
                    className={`tab_button demo-tab-button ${placeholderScope === "Secretaria Virtual" ? "active" : ""}`}
                    onClick={() => setPlaceholderScope("Secretaria Virtual")}
                  >
                    Secretaria Virtual
                  </button>
                  <button 
                    className={`tab_button demo-tab-button ${placeholderScope === "Biblioteca" ? "active" : ""}`}
                    onClick={() => setPlaceholderScope("Biblioteca")}
                  >
                    Biblioteca
                  </button>
                </div>

                <div className="demo-search-wrapper">
                  <SearchInput 
                    placeholder={`Pesquise na ${placeholderScope}`} 
                    suggestions={["Sugestão 1", "Sugestão 2", "Sugestão 3"]} 
                  />
                </div>
              </section>
            </div>
          )}

          {viewMode === "developer" && (
            <div className="developer-view fade-in">
              <section id="instructions" className="instructions-section">
                <h3 className="heading3">Instruções de Uso</h3>
                <p className="paragraph">
                  O componente utiliza classes CSS flexíveis para se adaptar a diferentes temas. Para o Moodle, utilize a estrutura HTML abaixo.
                </p>
              </section>

              <section id="code" className="margin__top--default">
                <h3 className="heading3">Código HTML (Moodle)</h3>
                <CodeBlockWithCopy language="html">
                  {htmlCode}
                </CodeBlockWithCopy>
              </section>
            </div>
          )}

          {viewMode === "changelog" && (
            <div className="fade-in">
              <ChangelogSection logs={searchLogs} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
