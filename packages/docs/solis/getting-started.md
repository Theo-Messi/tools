---
title: 快速开始
---

<Links
  :items="[
    {
      name: '演示站点',
      image: 'https://i.theojs.cn/docs/202405101119004.png',
      desc: 'VitePress的博客主题',
      link: 'https://share.theojs.cn/'
    }
  ]"
/>

## 安装

::: code-group

```sh [pnpm]
pnpm add @theojs/solis
```

```sh [npm]
npm install @theojs/solis
```

```sh [yarn]
yarn add @theojs/solis
```

:::

:::details 弃用警告: `The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.`

::: code-group

```ts [config.ts]
import { defineConfig } from 'vitepress'
export default defineConfig({
  vite: {// [!code ++]
    css: { preprocessorOptions: { scss: { api: 'modern' } } }// [!code ++]
  }// [!code ++]
  ...
})
```

```js [vite.config.js]
export default {
  css: { // [!code ++]
    preprocessorOptions: { scss: { api: 'modern' } }// [!code ++]
  }// [!code ++]
  ...
}
```

:::

## 快速开始

<BoxCube
  :items="[
    {
      name: '项目结构',
      link: 'project-structure',
      icon: 'fas fa-sitemap',
      color: '#f39c12'
    },
    {
      name: '配置VitePress',
      link: 'configure-vitepress',
      icon: 'fas fa-cogs',
      color: '#e74c3c'
    },
    {
      name: '文章配置',
      link: 'posts-settings',
      icon: 'fas fa-newspaper',
      color: '#1abc9c'
    },
    {
      name: 'Twikoo 评论',
      link: 'DocTwikoo',
      icon: 'fas fa-comments',
      color: '#3498db'
    }
  ]"
/>
