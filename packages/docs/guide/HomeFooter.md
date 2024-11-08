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
      target: '_self', // `target`默认打开方式为 _blank , 为 _self 时不会显示外部链接图标
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

### `FooterData` 接口

`FooterData` 是所有组件的顶层接口，包含了以下几个字段：

|   字段   |   类型   | 描述                                                          |
| :------: | :------: | ------------------------------------------------------------- |
| `group`  | `Array`  | <Badge type="tip" text="可选" /> 链接分组数组，包含多个分组。 |
| `beian`  | `Object` | <Badge type="tip" text="可选" /> 备案信息。                   |
| `author` | `Object` | <Badge type="tip" text="可选" /> 作者信息。                   |

### `Group` 接口

`Group` 接口定义了一个链接分组，包括分组的图标、标题及其下的多个链接。

|   字段   |   类型   | 描述                                                                                                                                                                |
| :------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  `icon`  | `string` | <Badge type="tip" text="可选" /> 分组图标名称，支持 [iconify](https://icon-sets.iconify.design/) 或者 [fortawesome](https://fontawesome.com/search?o=r&m=free) 图标 |
| `style`  | `string` | <Badge type="tip" text="可选" /> 图标样式。                                                                                                                         |
| `title`  | `string` | 分组的标题。                                                                                                                                                        |
| `target` | `string` | <Badge type="tip" text="可选" /> 链接打开方式，默认 `_blank`。                                                                                                      |
| `links`  | `Array`  | 该分组包含的链接数组，每个链接是一个 `Link` 对象。                                                                                                                  |

### `Link` 接口

`Link` 接口用于描述具体的链接信息，包括链接的图标、样式、名称、地址及其打开方式。

|   字段   |   类型   | 描述                                                                                                                                                                |
| :------: | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  `icon`  | `string` | <Badge type="tip" text="可选" /> 链接图标名称，支持 [iconify](https://icon-sets.iconify.design/) 或者 [fortawesome](https://fontawesome.com/search?o=r&m=free) 图标 |
| `style`  | `string` | <Badge type="tip" text="可选" /> 图标样式。                                                                                                                         |
|  `name`  | `string` | 链接的名称。                                                                                                                                                        |
|  `href`  | `string` | 链接的地址。                                                                                                                                                        |
| `target` | `string` | <Badge type="tip" text="可选" /> 链接的打开方式，默认 `_blank`。                                                                                                    |

### `Beian` 接口

`Beian` 接口用于表示备案信息，包括 ICP 备案号、公安备案号以及是否显示备案图标。

|    字段    |   类型    | 描述                                                              |
| :--------: | :-------: | ----------------------------------------------------------------- |
|   `icp`    | `string`  | <Badge type="tip" text="可选" /> ICP 备案号。                     |
|  `police`  | `string`  | <Badge type="tip" text="可选" /> 公安备案号。                     |
| `showIcon` | `boolean` | <Badge type="tip" text="可选" /> 是否显示备案图标，默认 `false`。 |

### `Author` 接口

`Author` 接口表示作者信息，包括作者姓名和链接。

|  字段  |   类型   | 描述                                          |
| :----: | :------: | --------------------------------------------- |
| `name` | `string` | <Badge type="tip" text="可选" /> 作者的姓名。 |
| `link` | `string` | <Badge type="tip" text="可选" /> 作者的链接。 |
