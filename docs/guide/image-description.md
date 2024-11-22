---
title: 图片描述
---

![效果图](/Logo.png)

## 安装 @mdit/plugin-figure 插件

::: code-group

```sh [pnpm]
pnpm add -D @mdit/plugin-figure
```

```sh [npm]
npm install -D @mdit/plugin-figure

```

```sh [yarn]
yarn add -D @mdit/plugin-figure
```

:::

## 配置插件选项

```ts
// .vitepress/config.mts

import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { figure } from '@mdit/plugin-figure' // [!code ++]

export default defineConfig({
  markdown: {// [!code ++]
    config: (md) => { // [!code ++]
      md.use(figure, { figcaption: 'alt', copyAttrs: '^class$', lazy: true }) // [!code ++]
    } // [!code ++]
  } // [!code ++]
 ...
})
```

## 导入主题

::: code-group

```ts [所有主题]
// theme/index.ts

import '@theojs/lumen/theme'
```

```ts [单独导入]
// theme/index.ts

import '@theojs/lumen/pic' /* 图片样式 */
```

:::

### 也可以单独添加样式到`css/scss`文件中

::: code-group

```scss [SCSS]
/* markdown-it-image-figures style */

figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    border-radius: 0.5rem;
  }

  figcaption {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: var(--vp-c-text-3);
    font-size: 0.875rem;
    font-weight: 400;

    a {
      color: var(--vp-c-text-3) !important;
    }
  }
}
```

```css [CSS]
/* markdown-it-image-figures style */

figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

figure img {
  border-radius: 0.5rem;
}

figure figcaption {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-3);
  font-size: 0.875rem;
  font-weight: 400;
}

figure figcaption a {
  color: var(--vp-c-text-3) !important;
}
```

:::

## 使用

```md
![效果图](/Logo.png)
```

![效果图](/Logo.png)
