import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react()],
    server: {
    allowedHosts: [
      "localhost",
      "harmlessly-paned-marketta.ngrok-free.dev"
    ]
  },
    build: {
    outDir: 'build' // Указываем папку для сборки
  }
})