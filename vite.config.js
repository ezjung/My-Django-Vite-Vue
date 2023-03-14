import { defineConfig } from 'vite'

const { resolve } = require('path');
 
export default defineConfig({

  // Tried with different "base" but Only "static" works
  // @root MUST HAVE 'static/src' contains source files and 'dist' will gets production bundles...

  root: resolve('./static/src'),
  // root: resolve('./my-dvv-demo/src'),
  base: '/static/',
  // base: '/my-dvv-demo/',

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
    // outDir: resolve('./my-dvv-demo/dist'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        // js entrypoint
        main: resolve('./static/src/js/main.js'),
        // main: resolve('./my_dvv_demo/src/js/main.js'),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
})