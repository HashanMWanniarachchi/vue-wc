import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('vue-web-component')
        }
      }
    }),
  ],
  build:{
    lib: {
      entry : './src/wcMain.ce.js',
      name : 'vue-web-component',
      fileName: 'vue-web-component'
    }
  },
  define: {
    'process.env': process.env
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
