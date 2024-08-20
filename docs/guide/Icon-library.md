---
title: 图标库
---

## 图标库

内置 [<iconify-icon icon="simple-icons:iconify"></iconify-icon>iconify](https://icon-sets.iconify.design/) 和 [<iconify-icon icon="simple-icons:fontawesome"></iconify-icon>fontawesome](https://fontawesome.com/) 图标库

## 使用

```ts
import DefaultTheme from 'vitepress/theme'

import '@theojs/lumen' // [!code ++]
// 或者引入组件
import { DocBox } from '@theojs/lumen' // [!code ++]
```

### 在markdown中 使用

```md
<iconify-icon icon="logos:pnpm"></iconify-icon> <!-- iconify -->

<i class="fab fa-debian"></i> <!-- fontawesome -->
```

**输出**
<iconify-icon icon="logos:pnpm"></iconify-icon> <!-- iconify -->

<i class="fab fa-debian"></i> <!-- fontawesome -->

::: details 使用 iconify-icon 报错❓
在`.vitepress/config.mts`中添加以下内容

```ts
export default defineConfig({
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'iconify-icon'
      }
    }
  }
})
```

:::
