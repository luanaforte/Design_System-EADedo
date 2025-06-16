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
        script: path.resolve(__dirname, "./public/Style_moodle.js"),
        badge: path.resolve(__dirname, "src/EaDedo/components/Badge/Badge.js"),
        accordions: path.resolve(__dirname, "./src/EaDedo/components/Accordions/Accordions.js"),
        ColapseSection: path.resolve(__dirname, "./src/EaDedo/components/ColapseSection/ColapseSection.js"),
        iframeVideo: path.resolve(__dirname, "src/EaDedo/components/IframeVideo/IframeVideo.js"),
      },
      output: {
        assetFileNames: "eadedo_style.css",
        entryFileNames: "[name].js",
      },
    },
  },
});
