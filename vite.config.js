import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Dezyn-aesthetix/', // <- your repo name
  plugins: [react()],
});
