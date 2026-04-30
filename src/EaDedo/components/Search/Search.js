const initSearch = () => {
  const searchBox = document.getElementById("main-search");
  const inputField = document.getElementById("search-input-field");
  const list = document.getElementById("suggestions-list");

  if (!searchBox || !inputField || !list) return;


  if (searchBox.dataset.searchInitialized) return;
  searchBox.dataset.searchInitialized = "true";

  const defaultSuggestionsHTML = list.innerHTML;

  window.toggleSearch = (expand, event) => {

    if (event) {
      event.stopPropagation();
    }

    const currentSearchBox = document.getElementById("main-search");
    if (!currentSearchBox) return;

    currentSearchBox.classList.toggle("Search_Box--expanded", expand);
    if (expand) {
      const currentInputField = document.getElementById("search-input-field");
      if (currentInputField) {
        setTimeout(() => currentInputField.focus(), 50);
      }
    }
  };

  window.handleSearch = (e) => {
    const term = e.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const currentList = document.getElementById("suggestions-list");
    if (!currentList) return;

    if (!term) {
      currentList.innerHTML = defaultSuggestionsHTML;
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
      currentList.innerHTML = uniqueItems.map(item => `
        <li class="list-item">
          <button class="Search_Box__suggestion-btn" onclick="scrollToSection('${item.id}')">
            <p class="paragraph--medium">${item.title}</p>
          </button>
        </li>`).join("");
    } else {
      currentList.innerHTML = `
        <div class="Search_Box__no-results">
          <p class="paragraph--medium">Não foi possível encontrar uma correspondência, tente novamente.</p>
        </div>`;
    }
  };

  window.scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      window.toggleSearch(false);
    }
  };


  if (!window.searchGlobalListenerAdded) {
    document.addEventListener("click", (e) => {
      const activeSearchBox = document.querySelector(".Search_Box--expanded");
      if (activeSearchBox && !activeSearchBox.contains(e.target)) {
        window.toggleSearch(false);
      }
    });
    window.searchGlobalListenerAdded = true;
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSearch);
} else {
  initSearch();
}
