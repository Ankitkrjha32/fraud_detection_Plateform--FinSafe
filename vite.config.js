import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      'assets': path.resolve(__dirname, './src/assets'),
      'api': path.resolve(__dirname, './src/api'),
      'routes': path.resolve(__dirname, './src/routes'),
      'themes': path.resolve(__dirname, './src/themes'),
      'layout': path.resolve(__dirname, './src/layout'),
      'contexts': path.resolve(__dirname, './src/contexts'),
      'utils': path.resolve(__dirname, './src/utils'),
      'menu-items': path.resolve(__dirname, './src/menu-items'),
      'config': path.resolve(__dirname, './src/config'),
      '@google/genai': path.resolve(__dirname, 'node_modules/@google/genai')
    }
  },
  optimizeDeps: {
    include: ['@google/genai']
  },
  server: {
    port: 5173,
    host: true
  }
});