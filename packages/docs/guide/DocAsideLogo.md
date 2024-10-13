---
title: 侧边栏链接
---

![侧边栏 - 效果图](https://i.theojs.cn/docs/202408081937401.png =400x)

## 创建数据

在`.vitepress`目录下新建`data/AsideData.ts`文件，并添加以下内容：
::: tip
`Aside_Data`数组中，`link`为链接地址，`icon`为图标地址，`Activity`为活动名称

自行替换下方数据
:::

```ts
// .vitepress/data/AsideData.ts

export const Aside_Data = [
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
 ... //其他代码
}
```

## 数据接口说明

```ts
Aside_Data: Array<{
  link: string /* 链接地址。 */
  icon: string /* 图标地址。 */
  name?: string /* 名称。 */
  Activity?: string /* 活动名称 */
  hide1?: string /* 隐藏信息1。（可选） */
  info1?: string /* 信息1。（可选） */
  hide2?: string /* 隐藏信息2。（可选） */
  info2?: string /* 信息2。（可选） */
}>
```
