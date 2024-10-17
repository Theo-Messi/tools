---
title: 视频组件
---

## 引入组件

```ts
// .vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
import { DocVideoLink } from '@theojs/lumen' // [!code ++]

export default {
  ...
  enhanceApp: ({ app }) => { // [!code ++]
    app.component('VideoLink', DocVideoLink) // [!code ++]
  } // [!code ++]
}
```

## 示例

**输入**

```vue
<VideoLink href="//player.bilibili.com/player.html?aid=1205847484" name="【MV】HELP!! - 可波·卡娜埃露" />
```

**输出**

<VideoLink href="//player.bilibili.com/player.html?aid=1205847484" name="【MV】HELP!! - 可波·卡娜埃露" />
