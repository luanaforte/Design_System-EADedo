import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
build: {
  outDir: "dist",
  assetsDir: "",
  emptyOutDir: true,
  rollupOptions: {
    input: {
      style: path.resolve(__dirname, "src/EaDedo/fundamentals/index.css"),
      badge: path.resolve(__dirname, "src/EaDedo/components/Badge/Badge.js"),
      accordions: path.resolve(__dirname, "./src/EaDedo/components/Accordions/Accordions.js"),
      ColapseSection: path.resolve(__dirname, "./src/EaDedo/components/ColapseSection/ColapseSection.js"),
      iframeVideo: path.resolve(__dirname, "src/EaDedo/components/IframeVideo/IframeVideo.js"),
      Progress_bar: path.resolve(__dirname, "src/EaDedo/components/Progress_bar/Progress_bar.js"),
      Slider: path.resolve(__dirname, "src/EaDedo/components/Slider/Slider.js"),
      ToggleLibras: path.resolve(__dirname, "src/EaDedo/components/toggleLibras/ToggleLibras.js"),
      Carousel: path.resolve(__dirname, "src/EaDedo/components/Carousel/Carousel.js"),
      Welcome: path.resolve(__dirname,"src/EaDedo/components/Welcome/Welcome.js"),
      Chat_IA: path.resolve(__dirname,"src/EaDedo/components/chat_IA/chat_IA.js")
    },
    output: {
      assetFileNames: "eadedo_style.css",
      entryFileNames: "[name].js",
    },
  },
},
});
