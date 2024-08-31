import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

import { Archives, Category, Tags, Page, Twikoo } from '@theojs/solis'

export default {
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Twikoo, { envId: 'https://twikoojsorg.imaegoo.com' })
    })
  },
  enhanceApp: ({ app }) => {
    // 注册全局组件
    app.component('Tags', Tags)
    app.component('Category', Category)
    app.component('Archives', Archives)
    app.component('Page', Page)
  }
}
