import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, "src/index.html"),
    },
  },
  server: {
    port: 8000,
  },
  publicDir: resolve(__dirname, "public"),
});
