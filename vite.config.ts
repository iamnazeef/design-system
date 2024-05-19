import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['tokens'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './main.ts'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
    commonjsOptions: {
      include: [/tokens/, /node_modules/],
    },
  },
  plugins: [
    react(),
    libInjectCss(),
    dts({ include: ['packages'] }),
    tsconfigPaths(),
  ],
});
