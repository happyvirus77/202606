import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/202606/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
});
