import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    assetsDir: "",
    rollupOptions: {
      input: "src/styles/index.css",
      output: {
        assetFileNames: "meu-ui.css", // Gera um único arquivo CSS no `dist/`
      },
    },
  },
});
