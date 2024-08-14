---
title: 图片描述
---

![](/TM-FELogo.png '效果图')

## 安装 markdown-it-image-figures 插件

::: code-group

```sh [pnpm]
pnpm add markdown-it-image-figures
```

```sh [npm]
npm install markdown-it-image-figures

```

```sh [yarn]
yarn add markdown-it-image-figures
```

:::

## 配置插件选项

```ts
// .vitepress/config.mts
import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import mdImageFigures from 'markdown-it-image-figures' // [!code ++]

export default defineConfig({
  markdown: {// [!code ++]
    config: (md) => {// [!code ++]
      md.use(mdImageFigures, {// [!code ++]
        figcaption: 'title', // [!code ++]
        copyAttrs: '^class$' // [!code ++]
      }) // [!code ++]
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

  figcaption {
    margin-top: 0.875rem;
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

figure figcaption {
  margin-top: 0.875rem;
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
![](/TM-FELogo.png '效果图')
```

![](/TM-FELogo.png '效果图')
