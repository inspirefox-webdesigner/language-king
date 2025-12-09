import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/language-king/",   // repo name
  plugins: [react(), tailwindcss()],
  build: {
    assetsDir: "", // short paths to FIX ENAMETOOLONG
  }
})