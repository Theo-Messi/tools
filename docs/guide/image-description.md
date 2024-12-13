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
import '@theojs/lumen/pic'
```

:::

### 也可以单独添加样式

<<< @/../src/theme/picture.css

## 使用

```md
![效果图](/Logo.png)
```

![效果图](/Logo.png)
