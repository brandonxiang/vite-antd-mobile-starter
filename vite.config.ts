import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        advancedChunks: {
          groups: [
            { name: 'react', test: /\/react(?:-dom|-router)?/ },
            { name: 'antd', test: /\/antd\/.*/ },
          ],
        },
      },
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    createHtmlPlugin({
      minify: true,
    }),
  ],
});
