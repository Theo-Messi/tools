---
title: 配置VitePress
---

### 全局配置

```ts
// .vitepress/config.mts
import { defineConfig } from 'vitepress'
import { getPosts } from '@theojs/solis/utils' // [!code ++]

const posts = { posts: await getPosts(6) } //代表一页有6篇文章 // [!code ++]

export default defineConfig({
  themeConfig: {
    ...posts, // [!code ++]
    nav: [ // [!code ++]
      { text: '主页', link: '/' }, // [!code ++]
      { text: '分类', link: '/pages/category' }, // [!code ++]
      { text: '归档', link: '/pages/archives' }, // [!code ++]
      { text: '标签', link: '/pages/tags' } // [!code ++]
    ] // [!code ++]
  }
   ...
})
```

## 注册页面布局组件

```ts
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

import { Archives, Category, Tags, Page, Twikoo, Info } from '@theojs/solis' // [!code ++]

export default {
  Layout() {// [!code ++]
    return h(DefaultTheme.Layout, null, {// [!code ++]
      'doc-before': () => h(Info)// [!code ++]
    })// [!code ++]
  },// [!code ++]
  enhanceApp: ({ app }) => {// [!code ++]
    app.component('Tags', Tags)// [!code ++]
    app.component('Category', Category)// [!code ++]
    app.component('Archives', Archives)// [!code ++]
    app.component('Page', Page)// [!code ++]
  }// [!code ++]
}
  ...
```
