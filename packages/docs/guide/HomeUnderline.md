---
title: 首页下划线
---

![首页下划线 - 效果图](https://i.theojs.cn/docs/202411071153583.png)

## 引入组件

```ts
// .vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
import { HomeUnderline } from '@theojs/lumen' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {    // [!code ++]
    app.component('Home', HomeUnderline) // [!code ++]
  } // [!code ++]
 ...
}
```

## 使用

```md
---
layout: home

hero:
  name: Lumen
  text: 'Enhanced ' // [!code ++]
  textsuffix: 'Theme' // [!code ++]
  tagline: ✨ 集成 Vue 功能组件和主题美化的 VitePress 插件
---

<Home /> // [!code ++]
```
