import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        corporate: resolve(__dirname, 'index.html'),
        workspace: resolve(__dirname, 'workspace.html'),
      },
    },
  },
});
