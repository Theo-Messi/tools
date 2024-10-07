---
title: 快速开始
---

<Box :items="[ { name: '演示站点', link: 'https://share.theojs.cn/', icon: 'https://i.theojs.cn/docs/202405101119004.png'}, ]"/>

## 前置条件

- [vitepress](https://vitepress.dev/) 1.3.2及以上版本
- 完成 [所有步骤](https://vitepress.dev/zh/guide/getting-started#installation) 并且成功启动运行

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
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern'
        }
      }
    }
  }
})
```

```js [vite.config.js]
export default {
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    }
  }
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
