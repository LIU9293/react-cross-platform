import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.VITE_TARGET": !!process.env.TARO_ENV ? "mini" : "web",
  },
  resolve: {
    extensions: !!process.env.TARO_ENV
      ? [".mini.tsx", ".mini.ts", ".tsx", ".ts", ".json"]
      : [".web.tsx", ".web.ts", ".tsx", ".ts", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})