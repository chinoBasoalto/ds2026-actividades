// @ts-ignore: vite may not be installed in the current environment (editor/CI)
import { defineConfig } from 'vite'
// @ts-ignore: vite may not be installed in the current environment (editor/CI)
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite aceptar conexiones desde fuera del contenedor Docker
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true // Permite recargar automáticamente al hacer cambios en Windows/Docker
    }
  }
})