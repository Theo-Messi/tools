---
title: 配置VitePress
---

### 全局配置

```ts
// .vitepress/config.mts
import { defineConfig } from 'vitepress'
import { getPosts } from '@theojs/solis/utils' // [!code ++]

const posts = { posts: await getPosts(6) } // [!code ++]

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
   ...// 其他代码
})
```

::: tip
`posts: await getPosts(6)` 代表一页有6篇文章
:::

## 注册页面布局组件

```ts
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

import { Archives, Category, Tags, Page } from '@theojs/solis' // [!code ++]

export default {
    ...// 其他代码
  enhanceApp: ({ app }) => {// [!code ++]
    app.component('Tags', Tags)// [!code ++]
    app.component('Category', Category)// [!code ++]
    app.component('Archives', Archives)// [!code ++]
    app.component('Page', Page)// [!code ++]
  }// [!code ++]
}
```
