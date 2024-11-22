import { defineConfig } from 'bumpp'

export default defineConfig({
  tag: 'v%s',
  commit: 'release: v%s',
  sign: true
})
