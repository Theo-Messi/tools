import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import copy from 'rollup-plugin-copy'
import deletePlugin from 'rollup-plugin-delete'

export default defineConfig({
  plugins: [
    vue(),
    copy({
      targets: [
        { src: 'packages/scss/*', dest: 'theme' },
        { src: 'packages/vue/*', dest: 'vue' }
      ],
      hook: 'writeBundle'
    }),
    deletePlugin({
      targets: ['vue/index.js', 'vue/index.css'],
      hook: 'writeBundle'
    })
  ],
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'packages/vue/index.ts'),
      output: {
        dir: 'vue',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
        globals: {
          vue: 'Vue',
          vitepress: 'VitePress'
        }
      },
      external: ['vue', 'vitepress']
    }
  }
})
