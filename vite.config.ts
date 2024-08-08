import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  plugins: [
    vue(),
    copy({
      targets: [
        { src: 'packages/scss/*', dest: 'scss' },
        { src: 'packages/vue/*', dest: 'vue' }
      ],
      hook: 'writeBundle'
    })
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'packages/vue/index.ts')
      },
      output: {
        dir: 'dist',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        manualChunks: undefined,
        globals: {
          vue: 'Vue',
          vitepress: 'VitePress'
        }
      },
      external: ['vue', 'vitepress']
    }
  }
})
