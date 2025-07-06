import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";      // ← new

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");

  return {
    // absolute URLs so files load from https://www.folvix.com/*
    base: "/",                                 // ← new (critical for Pages)

    plugins: [react()],                        // ← new

    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});

