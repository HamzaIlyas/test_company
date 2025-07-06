import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";          // ← NEW

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");

  return {
    base: "/",                                     // ← NEW (critical for GitHub Pages)
    plugins: [react()],                            // ← NEW (make JSX compile)

    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),         // keep your alias
      },
    },
  };
});

