import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "",
    rollupOptions: {
      input: "./src/EaDedo/fundamentals/index.css",
      output: {
        assetFileNames: "eadedo_style.css", // Gera um único arquivo CSS no `dist/`
      },
    },
  },
});
