---
title: 页脚配置
---

![首页页脚 - 效果图](https://i.theojs.cn/docs/202408081933196.png)

## 创建数据

在`.vitepress`目录下新建`data/fooertData.ts`文件，并添加以下内容：

```ts
// .vitepress/data/footerData.ts

export const Footer_Data = {
  beian: { icp: '备案号', police: '公网安备号' },
  author: { name: 'Theo', link: 'https://', time: '2019' },
  group: [
    {
      title: '外部链接',
      icon: 'fas fa-link', // Font Awesome 图标类名 具体查看:https://fontawesome.com/
      links: [
        { name: '示例1', href: 'https://' },
        { name: '示例2', href: 'https://' }
      ]
    },
    {
      title: '内部链接',
      internal: true, // `internal`默认为 false , 为 true 时不显示外部链接图标
      icon: 'fas fa-link',
      links: [
        { name: '示例1', icon: 'fas fa-book', href: '/docs' },
        { name: '示例2', href: '/page' }
      ]
    }
  ]
}
```

## 引入组件

::: tip
`.. /data/footerData` 可替换为存放数据的路径
:::

```ts
//.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'// [!code ++]

import { HomeFooter } from '@theojs/lumen'// [!code ++]
import { Footer_Data } from '../data/footerData'// [!code ++]

export default {
  extends: DefaultTheme,
  Layout() {// [!code ++]
    return h(DefaultTheme.Layout, null, {// [!code ++]
      'layout-bottom': () => h(HomeFooter, { Footer_Data }) // [!code ++]
    }) // [!code ++]
  }// [!code ++]
  ...
}
```

## 数据接口说明

```ts
/**
 * Footer 的数据对象。
 */
interface FooterData {
  /**
   * 各个 section 的数据。
   */
  group: Array<{
    /**
     * Section 的标题。
     */
    title: string

    /**
     * 图标的类名（Font Awesome 图标类名）。
     * @default undefined
     */
    icon?: string

    /**
     * 该 section 下的链接。
     */
    links: Array<{
      /**
       * 链接文本。
       */
      name: string

      /**
       * 链接的图标类名（Font Awesome 图标类名）。
       * @default undefined
       */
      icon?: string

      /**
       * 链接地址。
       */
      href: string

      /**
       * 链接是否为内部链接。
       */
      internal: boolean
    }>
  }>

  /**
   * 备案信息。
   * @default undefined
   */
  beian?: {
    /**
     * ICP 备案号。
     * @default undefined
     */
    icp?: string

    /**
     * 公安备案号。
     * @default undefined
     */
    police?: string
  }

  /**
   * 作者信息。
   * @default undefined
   */
  author?: {
    /**
     * 作者名称。
     * @default undefined
     */
    name?: string

    /**
     * 版权年份。
     * @default undefined
     */
    time?: string

    /**
     * 作者的链接。
     * @default undefined
     */
    link?: string
  }
}
```
