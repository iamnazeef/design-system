import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./packages/index.js")
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "packages/index.js"),
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime"]
    }
  },
  plugins: [react(), libInjectCss(), dts({ include: ["packages"] })]
});
