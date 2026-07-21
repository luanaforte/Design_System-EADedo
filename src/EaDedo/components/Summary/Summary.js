/* =========================
   Summary Anchor Script
   ========================= */

(function () {
	function scrollToAnchor(targetId) {
		const cleanId = targetId.replace("#", "");
		const element = document.getElementById(cleanId);
		if (element) {
			const headerOffset = 90;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition =
				elementPosition +
				(window.pageYOffset || document.documentElement.scrollTop) -
				headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	}

	// Delegação de eventos de clique para rolagem suave
	document.addEventListener("click", function (event) {
		const link = event.target.closest(".summary__link");
		if (!link) return;

		const href = link.getAttribute("href");
		if (href && href.startsWith("#") && href.length > 1) {
			const targetId = href.substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				event.preventDefault();
				scrollToAnchor(targetId);
			}
		}
	});
})();
