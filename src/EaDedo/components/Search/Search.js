const initSearch = () => {
  const searchBox = document.getElementById("main-search");
  const inputField = document.getElementById("search-input-field");
  const list = document.getElementById("suggestions-list");

  if (!searchBox || !inputField || !list) return;

  const defaultSuggestionsHTML = list.innerHTML;

  window.toggleSearch = (expand) => {

    searchBox.classList.toggle("Search_Box--expanded", expand);
    if (expand) {
      setTimeout(() => inputField.focus(), 50);
    }
  };

  window.handleSearch = (e) => {
    const term = e.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (!term) {
      list.innerHTML = defaultSuggestionsHTML;
      return;
    }


    const containers = document.querySelectorAll(".SessaoTitulo, section, .activity, .block, .card");

    const itemsFound = Array.from(containers)
      .filter(s => {
        const content = s.innerText.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return content.includes(term);
      })
      .map(s => {
        const titleEl = s.querySelector("h1, h2, h3, h4, .heading3, .heading2");
        return {
          title: titleEl?.textContent.trim(),
          id: s.id || titleEl?.id
        };
      })
      .filter(i => i.title && i.id);

    const uniqueItems = Array.from(new Map(itemsFound.map(item => [item.id, item])).values());

    if (uniqueItems.length > 0) {
      list.innerHTML = uniqueItems.map(item => `
        <li class="list-item">
          <button class="Search_Box__suggestion-btn" onclick="scrollToSection('${item.id}')">
            <p class="paragraph--medium">${item.title}</p>
          </button>
        </li>`).join("");
    } else {
      list.innerHTML = `
        <div class="Search_Box__no-results">
          <p class="paragraph--medium">Não foi possível encontrar uma correspondência, tente novamente.</p>
        </div>`;
    }
  };

  window.scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.toggleSearch(false);
    }
  };

  document.addEventListener("click", (e) => {
    if (!searchBox.contains(e.target)) {
      window.toggleSearch(false);
    }
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSearch);
} else {
  initSearch();
}
