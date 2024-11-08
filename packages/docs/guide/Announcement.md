---
title: 首页公告栏
---

![首页公告栏 - 效果图](https://i.theojs.cn/docs/202411071152313.png)

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
  ...
}
```

## 配置公告栏

修改`index.md`

```md
---
layout: home

hero:
  name: Lumen
  text: 'Enhanced '
  textsuffix: 'Theme'
  tagline: ✨ 集成 Vue 功能组件和主题美化的 VitePress 插件
  prelink: // [!code ++]
    title: '<i class="fas fa-bolt" style="color: #63E6BE;"></i> 快速开始 <p>pnpm add @theojs/lumen</p>' // [!code ++]
    link: /guide/getting-started // [!code ++]
    target: _blank // [!code ++]
---
```

## 数据接口说明

|   字段    |   类型   | 描述                                          |
| :-------: | :------: | --------------------------------------------- |
|  `link`   | `string` | 链接的 URL。                                  |
| `target?` | `string` | <Badge type="tip" text="可选" /> 链接的目标。 |
|  `title`  | `string` | 链接的标题。                                  |
