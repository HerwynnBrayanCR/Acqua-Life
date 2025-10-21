import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // ¡ESTO RESUELVE EL WHITE SCREEN!
  build: {
    outDir: 'dist'
  }
})
