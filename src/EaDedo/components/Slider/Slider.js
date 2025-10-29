(function () {
	const sliders = [];

	class Slider {
		constructor(sliderElement) {
			this.slider = sliderElement;
			this.indicatorsContainer = null;
			this.slides = null;
			this.prevBtn = null;
			this.nextBtn = null;
			this.currentIndex = 0;
			this.isAnimating = false;
			this.init();
		}

		init() {
			if (!this.setupElements()) return;
			this.createIndicators();
			this.updateArrowVisibility();
			this.attachEvents();
		}

		setupElements() {
			this.indicatorsContainer = this.slider.querySelector(".indicators");
			this.slides = this.slider.querySelectorAll(".slider-primario-item");

			this.prevBtn = this.slider.querySelector('button[aria-label="Anterior"]');
			this.nextBtn = this.slider.querySelector('button[aria-label="Próximo"]');

			return (
				this.indicatorsContainer &&
				this.slides.length &&
				this.prevBtn &&
				this.nextBtn
			);
		}

		createIndicators() {
			if (!this.indicatorsContainer || !this.slides?.length) return;

			this.indicatorsContainer.innerHTML = "";
			this.slides.forEach((_, index) => {
				const dot = document.createElement("div");
				dot.classList.add("indicator");
				if (index === this.currentIndex) dot.classList.add("active");
				dot.addEventListener("click", () => {
					this.slideTo(index, index > this.currentIndex ? "next" : "prev");
				});
				this.indicatorsContainer.appendChild(dot);
			});
		}

		updateIndicators() {
			const dots =
				this.indicatorsContainer?.querySelectorAll(".indicator") || [];
			dots.forEach((dot, idx) => {
				dot.classList.toggle("active", idx === this.currentIndex);
			});
		}

		updateArrowVisibility() {
			if (!this.prevBtn || !this.nextBtn) return;

			if (this.currentIndex === 0) {
				this.prevBtn.style.display = "none";
				this.nextBtn.style.display = "block";
			} else if (this.currentIndex === this.slides.length - 1) {
				this.prevBtn.style.display = "block";
				this.nextBtn.style.display = "none";
			} else {
				this.prevBtn.style.display = "block";
				this.nextBtn.style.display = "block";
			}
		}

		slideTo(newIndex, direction) {
			if (!this.slides || this.isAnimating || newIndex === this.currentIndex)
				return;

			const totalSlides = this.slides.length;
			const oldSlide = this.slides[this.currentIndex];
			newIndex = (newIndex + totalSlides) % totalSlides;
			const newSlide = this.slides[newIndex];

			if (!oldSlide || !newSlide) return;

			this.isAnimating = true;

			newSlide.classList.remove("enter-left", "enter-right", "active");
			newSlide.style.transition = "none";
			newSlide.classList.add(
				direction === "next" ? "enter-right" : "enter-left"
			);
			void newSlide.offsetWidth;

			oldSlide.style.transition = "transform 0.5s ease, opacity 0.5s ease";
			newSlide.style.transition = "transform 0.5s ease, opacity 0.5s ease";

			oldSlide.classList.add(
				direction === "next" ? "enter-left" : "enter-right"
			);
			oldSlide.classList.remove("active");

			newSlide.classList.remove("enter-left", "enter-right");
			newSlide.classList.add("active");

			newSlide.addEventListener(
				"transitionend",
				function handler() {
					oldSlide.classList.remove("enter-left", "enter-right");
					oldSlide.style.transition = "";
					newSlide.style.transition = "";
					newSlide.removeEventListener("transitionend", handler);

					this.currentIndex = newIndex;
					this.updateIndicators();
					this.updateArrowVisibility();
					this.isAnimating = false;
				}.bind(this),
				{ once: true }
			);
		}

		attachEvents() {
			this.prevBtn.onclick = () => this.slideTo(this.currentIndex - 1, "prev");
			this.nextBtn.onclick = () => this.slideTo(this.currentIndex + 1, "next");
		}

		checkAndRecreateIndicators() {
			const indicatorsExist = this.slider.querySelector(".indicators");
			const indicatorsEmpty =
				indicatorsExist && indicatorsExist.children.length === 0;
			if (indicatorsExist && indicatorsEmpty) {
				this.setupElements();
				this.createIndicators();
				this.updateArrowVisibility();
			}
		}
	}

	function initializeAllSliders() {
		const sliderElements = document.querySelectorAll(".slider-primario");

		sliderElements.forEach((sliderElement) => {
			if (!sliderElement.dataset.sliderInitialized) {
				const sliderInstance = new Slider(sliderElement);
				sliders.push(sliderInstance);
				sliderElement.dataset.sliderInitialized = "true";
			}
		});
	}

	// Checa indicadores
	setInterval(() => {
		sliders.forEach((sliderInstance) => {
			sliderInstance.checkAndRecreateIndicators();
		});
	}, 500);

	document.addEventListener("DOMContentLoaded", initializeAllSliders);

	const observer = new MutationObserver((mutations) => {
		let needsReinit = false;
		for (const mutation of mutations) {
			if (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0) {
				needsReinit = true;
				break;
			}
		}
		if (needsReinit) initializeAllSliders();
	});

	observer.observe(document.body, { childList: true, subtree: true });
})();
