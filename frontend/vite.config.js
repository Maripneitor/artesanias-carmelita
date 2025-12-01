// frontend/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración de Vite
export default defineConfig({
  plugins: [react()],
  server: {
    // Puerto que estás usando actualmente
    port: 5173,
    // ⬇️ Nueva configuración para permitir el host de ngrok
    allowedHosts: [
      'soren-nonpresentational-incongrously.ngrok-free.dev',
    ],
  }
});