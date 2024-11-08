---
title: 侧边栏链接
---

![侧边栏 - 效果图](https://i.theojs.cn/docs/202408081937401.png =400x)

## 创建数据

在`.vitepress`目录下新建`data/AsideData.ts`文件，并添加以下内容：

```ts
// .vitepress/data/AsideData.ts

import type { AsideItem } from '@theojs/lumen'

export const Aside_Data: AsideItem[] = [
  {
    link: 'https://example.com/',
    icon: 'https://example.com/icon.png',
    Activity: '活动标题',
    info1: '简介1',
    info2: '简介2' // info1/2 支持 `v-html`语法
  },
  {
    link: 'https://example.com/',
    icon: 'https://example.com/icon.png',
    name: '标题',
    hide1: '隐藏信息1',
    hide2: '隐藏信息2' // hide1/2 支持 `v-html`语法
  },
  {
    link: 'https://example.com/',
    icon: 'https://example.com/icon.png',
    name: '为我赞助'
  }
]
```

## 引入组件

```ts
//.vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
import { h } from 'vue' // [!code ++]
import { DocAsideLogo } from '@theojs/lumen' // [!code ++]
import { Aside_Data } from '../data/AsideData' // [!code ++]
export default {
  extends: DefaultTheme,
  Layout() {// [!code ++]
    return h(DefaultTheme.Layout, null, {// [!code ++]
      'aside-ads-before': () => h(DocAsideLogo, { Aside_Data }) // [!code ++]
    })// [!code ++]
  }// [!code ++]
 ...
}
```

## 数据接口说明

|    字段     |   类型   | 描述                                       |
| :---------: | :------: | ------------------------------------------ |
|   `link`    | `string` | 链接地址                                   |
|   `icon`    | `string` | 图标地址                                   |
|   `name?`   | `string` | <Badge type="tip" text="可选" /> 名称      |
| `activity?` | `string` | <Badge type="tip" text="可选" /> 活动名称  |
|  `hide1?`   | `string` | <Badge type="tip" text="可选" /> 隐藏信息1 |
|  `info1?`   | `string` | <Badge type="tip" text="可选" /> 信息1     |
|  `hide2?`   | `string` | <Badge type="tip" text="可选" /> 隐藏信息2 |
|  `info2?`   | `string` | <Badge type="tip" text="可选" /> 信息2     |
