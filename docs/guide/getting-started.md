---
title: 快速开始
---

## 前置条件

- [vitepress](https://vitepress.dev/) 1.3.2及以上版本
- 完成 [所有步骤](https://vitepress.dev/zh/guide/getting-started#installation) 并且成功启动运行

## 安装

::: code-group

```sh [pnpm]
pnpm add @theojs/lumen
```

```sh [npm]
npm install @theojs/lumen
```

```sh [yarn]
yarn add @theojs/lumen
```

:::

:::details 弃用警告: `The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0.`
在项目根目录创建 `vite.config.js`

```js
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
      name: '导入主题配色',
      link: 'theme',
      icon: 'fas fa-palette',
      color: '#f39c12'
    },
    {
      name: '首页公告栏',
      link: 'Announcement',
      icon: 'fas fa-bullhorn',
      color: '#e74c3c'
    },
    {
      name: '首页下划线',
      link: 'HomeUnderline',
      icon: 'fas fa-underline',
      color: '#3498db'
    },
    { name: '页脚配置', link: 'HomeFooter', icon: 'fas fa-cogs', color: '#2ecc71' },
    {
      name: '侧边栏链接',
      link: 'DocAsideLogo',
      icon: 'fas fa-th-list',
      color: '#9b59b6'
    },
    { name: '视频组件', link: 'DocVideoLink', icon: 'fas fa-video', color: '#e67e22' },
    {
      name: '链接卡片',
      link: 'LinkCard',
      icon: 'fas fa-id-card',
      color: '#1abc9c'
    },
        {
      name: '页面分享按钮',
      link: 'ShareButton',
      icon: 'fas fa-share-alt',
      color: '#3498db'
    },
    {
      name: '图片描述',
      link: 'Image-description',
      icon: 'fas fa-image',
      color: '#2ecc71'
    },
    {
      name: 'Twikoo 评论',
      link: 'DocTwikoo',
      icon: 'fas fa-comments',
      color: '#3498db'
    }
  ]"
/>
