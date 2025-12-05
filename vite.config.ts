import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      build: {
        sourcemap: false,
      },
      plugins: [
        react(),
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@components': path.resolve(__dirname, './src/components'),
          '@context': path.resolve(__dirname, './src/context'),
          '@data': path.resolve(__dirname, './src/data'),
        }
      }
    };
});
