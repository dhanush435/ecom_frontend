import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: process.env.PORT || 3000,
  },
  server: {
    host: true,
    port: process.env.PORT || 3000,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'ecom-frontend-41xp.onrender.com',
      '.onrender.com'
    ]
  },
})
