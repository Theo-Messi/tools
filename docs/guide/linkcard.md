---
title: 链接卡片
---

## 引入组件

```ts
import DefaultTheme from 'vitepress/theme'

import { DocBox, DocLinks, DocBoxCube } from '@theojs/lumen'// [!code ++]
export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {// [!code ++]
    app.component('Box', DocBox)// [!code ++]
    app.component('Links', DocLinks)// [!code ++]
    app.component('BoxCube', DocBoxCube)// [!code ++]
  }// [!code ++]
  ...
}

```

## Box

### 示例

**输入**

```vue
<Box
  :items="[
    //iconify图标
    { name: 'iconify', link: '#', icon: 'line-md:iconify2-static', color: '#1769AA' },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: { light: 'https://i.theojs.cn/logo/github.svg', dark: 'https://i.theojs.cn/logo/github-dark.svg' }
    },
    //标签
    { name: 'Vue', link: '#', icon: 'vscode-icons:file-type-vue', tag: 'vuejs' }
  ]"
/>
```

**输出**

<Box
  :items="[
    //iconify图标
    { name: 'iconify', link: '#', icon: 'line-md:iconify2-static', color: '#1769AA' },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: { light: 'https://i.theojs.cn/logo/github.svg', dark: 'https://i.theojs.cn/logo/github-dark.svg' }
    },
    //标签
    { name: 'Vue', link: '#', icon: 'vscode-icons:file-type-vue', tag: 'vuejs' }
  ]"
/>

### 参数说明

|  字段   |                     类型                      | 描述                                                                                              |
| :-----: | :-------------------------------------------: | ------------------------------------------------------------------------------------------------- |
| `name`  |                   `string`                    | DocBox 名称。                                                                                     |
| `link`  |                   `string`                    | DocBox 链接。                                                                                     |
|  `tag`  |                   `string`                    | <Badge type="tip" text="可选" /> DocBox 标签。                                                    |
| `color` |                   `string`                    | <Badge type="tip" text="可选" /> 图标的颜色。                                                     |
| `icon`  |                   `string`                    | <Badge type="tip" text="可选" /> 图标名称，支持 [iconify](https://icon-sets.iconify.design/) 图标 |
| `image` | `string` \| `{ light: string; dark: string }` | <Badge type="tip" text="可选" /> 图片地址或包含 light 和 dark 模式的对象。                        |

## Links

### 示例

**输入**

```vue
<Links
  :items="[
    //iconify图标
    { name: 'iconify', link: '#', icon: 'line-md:iconify2-static', color: '#1769AA' },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: { light: 'https://i.theojs.cn/logo/github.svg', dark: 'https://i.theojs.cn/logo/github-dark.svg' }
    },
    // 不使用图标 + 描述
    { name: 'Google', link: 'https://www.google.com', desc: '全球最大的搜索引擎' }
  ]"
/>
```

**输出**
<Links
  :items="[
    //iconify图标
    { name: 'iconify', link: '#', icon: 'line-md:iconify2-static', color: '#1769AA' },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: { light: 'https://i.theojs.cn/logo/github.svg', dark: 'https://i.theojs.cn/logo/github-dark.svg' }
    },
    // 不使用图标 + 描述
    { name: 'Google', link: 'https://www.google.com', desc: '全球最大的搜索引擎' }
  ]"
/>

### 参数说明

|  字段   |                     类型                      | 描述                                                                                                |
| :-----: | :-------------------------------------------: | --------------------------------------------------------------------------------------------------- |
| `name`  |                   `string`                    | DocLinks 名称。                                                                                     |
| `desc`  |                   `string`                    | <Badge type="tip" text="可选" /> DocLinks 描述信息。                                                |
| `link`  |                   `string`                    | DocLinks 链接。                                                                                     |
| `color` |                   `string`                    | <Badge type="tip" text="可选" /> 图标的颜色。                                                       |
| `icon`  |                   `string`                    | <Badge type="tip" text="可选" /> 图标名称，支持 [iconify](https://icon-sets.iconify.design/) 图标。 |
| `image` | `string` \| `{ light: string; dark: string }` | <Badge type="tip" text="可选" /> 支持单一图片地址或包含 light 和 dark 两种模式的对象。              |

## BoxCube

### 示例

**输入**

```vue
<BoxCube
  :items="[
    //iconify图标
    { name: 'iconify', link: '#', icon: 'line-md:iconify2-static', color: '#1769AA' },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: { light: 'https://i.theojs.cn/logo/github.svg', dark: 'https://i.theojs.cn/logo/github-dark.svg' }
    },
    //描述
    { name: 'Vue.js', link: '#', icon: 'devicon:vuejs', desc: 'v3.4.31' }
  ]"
/>
```

**输出**
<BoxCube
  :items="[
    //iconify图标
    { name: 'iconify', link: '#', icon: 'line-md:iconify2-static', color: '#1769AA' },
    //图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      image: 'https://i.theojs.cn/logo/alipay.svg'
    },
    //深浅模式的图片
    {
      name: 'GitHub',
      link: '#',
      image: { light: 'https://i.theojs.cn/logo/github.svg', dark: 'https://i.theojs.cn/logo/github-dark.svg' }
    },
    //描述
    { name: 'Vue.js', link: '#', icon: 'devicon:vuejs', desc: 'v3.4.31' }
  ]"
/>

## 参数说明

|  字段   |                     类型                      | 描述                                                                                                |
| :-----: | :-------------------------------------------: | --------------------------------------------------------------------------------------------------- |
| `name`  |                   `string`                    | BoxCube 名称。                                                                                      |
| `link`  |                   `string`                    | BoxCube 链接。                                                                                      |
| `desc`  |                   `string`                    | <Badge type="tip" text="可选" /> BoxCube 描述。                                                     |
| `color` |                   `string`                    | <Badge type="tip" text="可选" /> 图标的颜色。                                                       |
| `icon`  |                   `string`                    | <Badge type="tip" text="可选" /> 图标名称，支持 [iconify](https://icon-sets.iconify.design/) 图标。 |
| `image` | `string` \| `{ light: string; dark: string }` | <Badge type="tip" text="可选" /> 支持单一图片地址或包含 light 和 dark 模式的对象。                  |
