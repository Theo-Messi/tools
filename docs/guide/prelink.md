---
title: 首页公告栏
---

![首页公告栏 - 效果图](https://i.theojs.cn/docs/202408082101730.png)

## 引入组件

```ts
// .vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
import { Announcement } from '@theojs/lumen' // [!code ++]
import { h } from 'vue' // [!code ++]

export default {
  extends: DefaultTheme,
  Layout() { // [!code ++]
    return h(DefaultTheme.Layout, null, { // [!code ++]
      'home-hero-info-before': () => h(Announcement) // [!code ++]
    }) // [!code ++]
  } // [!code ++]
  ... //其他代码
}
```

## 配置公告栏

修改`index.md`

```md
---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Lumen'
  text: 'Enhanced '
  tagline: 用于VitePress主题美化和集成Vue功能组件
  prelink:// [!code ++]
    title: '<i class="fa-solid fa-bolt" style="color: #63E6BE;"></i> 快速开始<div style="text-align: right; font-weight: bold;"><i class="fas fa-pnpm" style="color: #FFD43B;"></i>pnpm add @theojs/lumen</div>'// [!code ++]
    link: /guide/getting-started// [!code ++]
    target: _blank// [!code ++]
---
```
