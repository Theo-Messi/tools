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
        { src: 'packages/theme/*', dest: 'theme' },
        { src: 'packages/components/*', dest: 'components' }
      ],
      hook: 'writeBundle'
    }),
    deletePlugin({
      targets: ['components/index.js', 'components/index.css'],
      hook: 'writeBundle'
    })
  ],
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'packages/components/index.ts'),
      output: {
        dir: 'components',
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
