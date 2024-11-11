import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // Ensure path is imported here

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
