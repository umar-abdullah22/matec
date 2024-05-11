import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // Automatically loads the paths from tsconfig.json
  ],
  server: {
    host: '0.0.0.0'
  }
})
