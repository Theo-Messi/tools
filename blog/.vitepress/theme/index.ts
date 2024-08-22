import DefaultTheme from 'vitepress/theme'

import { Archives, Category, Tags, Page } from '@theojs/solis'

export default {
  extends: DefaultTheme,

  enhanceApp: ({ app }) => {
    // 注册全局组件
    app.component('Tags', Tags)
    app.component('Category', Category)
    app.component('Archives', Archives)
    app.component('Page', Page)
  }
}
