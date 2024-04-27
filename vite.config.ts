import path from "path"
import react from "@vitejs/plugin-react"
// import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite'
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".web.tsx", ".web.ts", ".tsx", ".ts", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})