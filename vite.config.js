import { defineConfig } from 'vite'

const { resolve } = require('path');
 
export default defineConfig({

  root: resolve('./static/src'),
  base: '/static/',

  // This server is for vite for DEV
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  // building assets for production
  build: {
    outDir: resolve('./static/dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        // js entrypoint
        main: resolve('./static/src/js/main.js'),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
})