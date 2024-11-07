---
title: 页脚配置
---

![桌面端效果图](https://i.theojs.cn/docs/202411071146149.png)

![移动端效果图](https://i.theojs.cn/docs/202411071155536.png =300x)

## 创建数据

在`.vitepress`目录下新建`data/fooertData.ts`文件，并添加以下内容：

```ts
// .vitepress/data/footerData.ts

import type { FooterData } from '@theojs/lumen'

export const Footer_Data: FooterData = {
  beian: { icp: '备案号', police: '公网安备号', showIcon: true },
  author: { name: 'Theo', link: 'https://' },
  group: [
    {
      title: '外部链接',
      icon: 'fas fa-link', // `iconify`或者 `fortawesome` 图标
      style: 'rgba(255, 87, 51, 1)',
      links: [
        { name: '示例1', href: 'https://', icon: 'fas fa-book' },
        { name: '示例2', href: 'https://' }
      ]
    },
    {
      title: '内部链接',
      internal: true, // `internal`默认为 false , 为 true 时不显示外部链接图标
      icon: 'fas fa-link',
      style: 'rgba(255, 87, 51, 1)',
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

| 字段                                 | 类型    | 描述                                                                                                                                             |
| ------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **group**?                           | Array   | <Badge type="tip" text="可选" /> 链接分组列表。                                                                                                  |
| ├─ icon?                             | string  | <Badge type="tip" text="可选" /> [iconify](https://icon-sets.iconify.design/) 或者 [fortawesome](https://fontawesome.com/search?o=r&m=free) 图标 |
| ├─ style?                            | string  | <Badge type="tip" text="可选" /> 图标样式                                                                                                        |
| ├─ title                             | string  | 分组标题。                                                                                                                                       |
| ├─ internal?                         | boolean | <Badge type="tip" text="可选" /> 该组是否为内部链接，默认 `false`                                                                                |
| └─ links                             | Array   | 分组中的链接列表。                                                                                                                               |
| &nbsp;&nbsp;&nbsp;&nbsp;├─ icon?     | string  | <Badge type="tip" text="可选" /> [iconify](https://icon-sets.iconify.design/) 或者 [fortawesome](https://fontawesome.com/search?o=r&m=free) 图标 |
| &nbsp;&nbsp;&nbsp;&nbsp;├─ style?    | string  | <Badge type="tip" text="可选" /> 图标样式                                                                                                        |
| &nbsp;&nbsp;&nbsp;&nbsp;├─ name      | string  | 链接名称。                                                                                                                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;├─ href      | string  | 链接地址。                                                                                                                                       |
| &nbsp;&nbsp;&nbsp;&nbsp;└─ internal? | boolean | <Badge type="tip" text="可选" /> 是否为内部链接，默认 `false`                                                                                    |
| **beian**?                           | object  | <Badge type="tip" text="可选" /> 备案信息                                                                                                        |
| ├─ icp?                              | string  | <Badge type="tip" text="可选" /> ICP 备案号                                                                                                      |
| ├─ police?                           | string  | <Badge type="tip" text="可选" /> 公安备案号                                                                                                      |
| └─ showIcon?                         | boolean | <Badge type="tip" text="可选" /> 备案图标是否显示，默认 `false`                                                                                  |
| **author**?                          | object  | <Badge type="tip" text="可选" /> 作者信息                                                                                                        |
| ├─ name?                             | string  | <Badge type="tip" text="可选" /> 作者姓名                                                                                                        |
| └─ link?                             | string  | <Badge type="tip" text="可选" /> 作者链接                                                                                                        |
