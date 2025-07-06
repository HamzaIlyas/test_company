import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",                       // critical for GitHub Pages
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, ".") } },
  build: { rollupOptions: { input: "index.html" } }   // let Vite bundle our HTML
});

