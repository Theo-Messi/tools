import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

import { Archives, Category, Tags, Page, Twikoo } from '@theojs/solis'
import { Twikoo_Data } from '../data'

export default {
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-after': () => h(Twikoo, { Twikoo_Data })
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
