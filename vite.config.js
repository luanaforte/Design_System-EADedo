import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "",
    rollupOptions: {
      input: {
        style: path.resolve(__dirname, "src/EaDedo/fundamentals/index.css"),
        script: path.resolve(__dirname, "public/Style_moodle.js"),
      },
      output: {
        assetFileNames: "eadedo_style.css", // Nome do CSS gerado
        entryFileNames: "Style_moodle.js", // Nome dos arquivos JS gerados
      },
    },
  },
});
