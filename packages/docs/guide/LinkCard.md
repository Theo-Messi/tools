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
    //使用FontAwesome图标 + 颜色
    { name: 'Vue.js', link: '', icon: 'fab fa-vuejs', color: '#4FC08D' },
    //使用FontAwesome图标 + 标签
    { name: 'GitHub', link: '', icon: 'fab fa-github', tag: 'Github' },
    //使用FontAwesome图标 + 标签 + 颜色
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      icon: 'fab fa-alipay',
      color: '#00a1e9',
      tag: '打赏'
    },
    {
      name: '微信',
      link: 'https://i.theojs.cn/docs/202405201752087.jpg',
      icon: 'fab fa-weixin',
      color: '#2ca83c',
      tag: '打赏'
    },
    //使用自定义图标 + 标签
    { name: 'GitHub', link: '', icon: 'https://i.theojs.cn/logo/github.svg', tag: 'Github' },
    //使用自定义图标 + 深浅模式 + 标签
    {
      name: 'GitHub',
      link: '',
      light: 'https://i.theojs.cn/logo/github.svg',
      dark: 'https://i.theojs.cn/logo/github-dark.svg',
      tag: 'Github'
    }
  ]"
/>
```

**输出**
<Box
  :items="[
    //使用FontAwesome图标 + 颜色
    { name: 'Vue.js', link: '', icon: 'fab fa-vuejs', color: '#4FC08D' },
    //使用FontAwesome图标 + 标签
    { name: 'GitHub', link: '', icon: 'fab fa-github', tag: 'Github' },
    //使用FontAwesome图标 + 标签 + 颜色
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/docs/202405201752089.jpg',
      icon: 'fab fa-alipay',
      color: '#00a1e9',
      tag: '打赏'
    },
    {
      name: '微信',
      link: 'https://i.theojs.cn/docs/202405201752087.jpg',
      icon: 'fab fa-weixin',
      color: '#2ca83c',
      tag: '打赏'
    },
    //使用自定义图标 + 标签
    {
      name: 'GitHub',
      link: '',
      icon: 'https://i.theojs.cn/logo/github.svg',
      tag: 'Github'
    },
    //使用自定义图标 + 深浅模式 + 标签
    {
      name: 'GitHub',
      link: '',
      light: 'https://i.theojs.cn/logo/github.svg',
      dark: 'https://i.theojs.cn/logo/github-dark.svg',
      tag: 'Github'
    }
  ]"
/>

### 参数说明

| 字段       | 类型   | 描述                                                    |
| ---------- | ------ | ------------------------------------------------------- |
| **link**   | string | 链接项的链接地址。                                      |
| **icon**   | string | 链接项的图标地址或类名。                                |
| **name**   | string | 链接项的名称。                                          |
| **tag?**   | string | <Badge type="tip" text="可选" /> 链接项的标签。         |
| **light?** | string | <Badge type="tip" text="可选" /> 浅色模式下的图标 URL。 |
| **dark?**  | string | <Badge type="tip" text="可选" /> 深色模式下的图标 URL。 |
| **color?** | string | <Badge type="tip" text="可选" /> 图标的颜色。           |

## Links

### 示例

**输入**

```vue
<Links
  :items="[
    // 使用FontAwesome图标 + 颜色
    { name: '支付宝', link: 'https://www.alipay.com', icon: 'fab fa-alipay', color: '#00a1e9' },
    { name: '微信支付', link: 'https://pay.weixin.qq.com', icon: 'fab fa-weixin', color: '#2ca83c' },
    // 使用自定义图标
    { name: 'GitHub', link: 'https://github.com', icon: 'https://i.theojs.cn/logo/github.svg' },
    // 使用自定义图标 + 深浅模式
    {
      name: 'GitHub',
      link: 'https://github.com',
      light: 'https://i.theojs.cn/logo/github.svg',
      dark: 'https://i.theojs.cn/logo/github-dark.svg',
      desc: '支持深浅模式切换'
    },
    // 不使用图标 + 描述
    { name: 'Google', link: 'https://www.google.com', desc: '全球最大的搜索引擎' }
  ]"
/>
```

**输出**
<Links
  :items="[
    // 使用FontAwesome图标 + 颜色
    { name: '支付宝', link: 'https://www.alipay.com', icon: 'fab fa-alipay', color: '#00a1e9' },
    { name: '微信支付', link: 'https://pay.weixin.qq.com', icon: 'fab fa-weixin', color: '#2ca83c' },
    // 使用自定义图标
    { name: 'GitHub', link: 'https://github.com', icon: 'https://i.theojs.cn/logo/github.svg' },
    // 使用自定义图标 + 深浅模式
    {
      name: 'GitHub',
      link: 'https://github.com',
      light: 'https://i.theojs.cn/logo/github.svg',
      dark: 'https://i.theojs.cn/logo/github-dark.svg',
      desc: '支持深浅模式切换'
    },
    // 不使用图标 + 描述
    { name: 'Google', link: 'https://www.google.com', desc: '全球最大的搜索引擎' }
  ]"
/>

### 参数说明

| 字段       | 类型   | 描述                                                    |
| ---------- | ------ | ------------------------------------------------------- |
| **name**   | string | 链接项的名称。                                          |
| **link**   | string | 链接项的 URL。                                          |
| **color?** | string | <Badge type="tip" text="可选" /> 图标的颜色。           |
| **icon?**  | string | <Badge type="tip" text="可选" /> 图标的 URL 或类名。    |
| **light?** | string | <Badge type="tip" text="可选" /> 浅色模式下的图标 URL。 |
| **dark?**  | string | <Badge type="tip" text="可选" /> 深色模式下的图标 URL。 |
| **desc?**  | string | <Badge type="tip" text="可选" /> 链接项的描述信息。     |

## BoxCube

### 示例

**输入**

```vue
<BoxCube
  :items="[
    //使用FontAwesome图标
    { name: 'Github', link: '', icon: 'fab fa-github' },
    //使用FontAwesome图标 + 副标题
    { name: 'Vue.js', link: '', icon: 'fab fa-vuejs', desc: 'v3.4.31' },
    //使用自定义图标+副标题
    { name: 'Node.js', link: '', icon: 'https://i.theojs.cn/logo/nodejs.svg', desc: 'v20.15.0' },
    //使用自定义图标+深浅模式+副标题
    {
      name: 'Github',
      link: '',
      light: 'https://i.theojs.cn/logo/github.svg',
      dark: 'https://i.theojs.cn/logo/github-dark.svg',
      desc: 'v20.15.0'
    }
  ]"
/>
```

**输出**
<BoxCube
  :items="[
    //使用FontAwesome图标
    { name: 'Github', link: '', icon: 'fab fa-github' },
    //使用FontAwesome图标 + 副标题
    { name: 'Vue.js', link: '', icon: 'fab fa-vuejs', desc: 'v3.4.31' },
    //使用自定义图标+副标题
    {
      name: 'Node.js',
      link: '',
      icon: 'https://i.theojs.cn/logo/nodejs.svg',
      desc: 'v20.15.0'
    },
    //使用自定义图标+深浅模式+副标题
    {
      name: 'Github',
      link: '',
      light: 'https://i.theojs.cn/logo/github.svg',
      dark: 'https://i.theojs.cn/logo/github-dark.svg',
      desc: 'v20.15.0'
    }
  ]"
/>

## 参数说明

| 字段       | 类型   | 描述                                                    |
| ---------- | ------ | ------------------------------------------------------- |
| **icon**   | string | 图标的 URL 或类名。                                     |
| **name**   | string | 项目的名称。                                            |
| **link**   | string | 项目的链接。                                            |
| **desc?**  | string | <Badge type="tip" text="可选" /> 项目的描述。           |
| **color?** | string | <Badge type="tip" text="可选" /> 图标的颜色。           |
| **light?** | string | <Badge type="tip" text="可选" /> 浅色模式下的图标 URL。 |
| **dark?**  | string | <Badge type="tip" text="可选" /> 深色模式下的图标 URL。 |
