(function() {
 
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
            if (!this.setupElements()) {
                console.warn("❌ Slider could not be fully initialized for element:", this.slider);
                return;
            }
            console.log("✅ Slider initialized:", this.slider);
            this.createIndicators();
            this.attachEvents();
        }

        setupElements() {
            this.indicatorsContainer = this.slider.querySelector(".indicators");
            this.slides = this.slider.querySelectorAll(".slider-primario-item");
            this.prevBtn = this.slider.querySelector("#slider_prevBtn");
            this.nextBtn = this.slider.querySelector("#slider_nextBtn");

         
            return this.indicatorsContainer && this.slides.length && this.prevBtn && this.nextBtn;
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
            console.log("✅ Indicators created for:", this.slider, "Count:", this.indicatorsContainer.children.length);
        }

        updateIndicators() {
            const dots = this.indicatorsContainer?.querySelectorAll(".indicator") || [];
            dots.forEach((dot, idx) => {
                dot.classList.toggle("active", idx === this.currentIndex);
            });
        }

        slideTo(newIndex, direction) {
            if (!this.slides || this.isAnimating || newIndex === this.currentIndex) return;

            const totalSlides = this.slides.length;
            const oldSlide = this.slides[this.currentIndex];
            newIndex = (newIndex + totalSlides) % totalSlides;
            const newSlide = this.slides[newIndex];

            if (!oldSlide || !newSlide) return;

            this.isAnimating = true;

            newSlide.classList.remove("enter-left", "enter-right", "active");
            newSlide.style.transition = "none";
            newSlide.classList.add(direction === "next" ? "enter-right" : "enter-left");

            // Trigger reflow to ensure the class is applied before the transition starts
            void newSlide.offsetWidth;

            oldSlide.style.transition = "transform 0.5s ease, opacity 0.5s ease";
            newSlide.style.transition = "transform 0.5s ease, opacity 0.5s ease";

            oldSlide.classList.add(direction === "next" ? "enter-left" : "enter-right");
            oldSlide.classList.remove("active");

            newSlide.classList.remove("enter-left", "enter-right");
            newSlide.classList.add("active");

            newSlide.addEventListener("transitionend", function handler() {
                oldSlide.classList.remove("enter-left", "enter-right");
                oldSlide.style.transition = "";
                newSlide.style.transition = "";
                newSlide.removeEventListener("transitionend", handler);
                this.currentIndex = newIndex;
                this.updateIndicators();
                this.isAnimating = false;
            }.bind(this), { once: true }); // Use .bind(this) to ensure 'this' refers to the Slider instance
        }

        attachEvents() {
            this.prevBtn.onclick = () => this.slideTo(this.currentIndex - 1, "prev");
            this.nextBtn.onclick = () => this.slideTo(this.currentIndex + 1, "next");
        }

        // Method to re-check and re-create indicators if they disappear
        checkAndRecreateIndicators() {
            const indicatorsExist = this.slider.querySelector(".indicators");
            const indicatorsEmpty = indicatorsExist && indicatorsExist.children.length === 0;

            if (indicatorsExist && indicatorsEmpty) {
                console.warn("⚠️ Indicators disappeared for slider — recreating:", this.slider);
                this.setupElements(); // Re-fetch elements in case the structure changed
                this.createIndicators();
            }
        }
    }

   
    function initializeAllSliders() {
        document.querySelectorAll(".slider-primario").forEach(sliderElement => {
        
            if (!sliderElement.dataset.sliderInitialized) {
                sliders.push(new Slider(sliderElement));
                sliderElement.dataset.sliderInitialized = "true"; 
            }
        });
    }

   
    setInterval(() => {
        sliders.forEach(sliderInstance => {
            sliderInstance.checkAndRecreateIndicators();
        });
    }, 500);

   
    document.addEventListener("DOMContentLoaded", initializeAllSliders);

 
    const observer = new MutationObserver((mutations) => {
        let needsReinitialization = false;
        for (const mutation of mutations) {
            if (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0) {
                needsReinitialization = true;
                break;
            }
        }
        if (needsReinitialization) {
            initializeAllSliders();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();