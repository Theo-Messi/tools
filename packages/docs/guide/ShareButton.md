---
title: 页面分享按钮
---

## 引入组件

```ts
// .vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
import { ShareButton } from '@theojs/lumen' // [!code ++]
import { h } from 'vue'// [!code ++]

export default {
  extends: DefaultTheme,
  Layout() {// [!code ++]
    return h(DefaultTheme.Layout, null, {// [!code ++]
      'aside-outline-before': () => h(ShareButton),// [!code ++]
    })// [!code ++]
  },// [!code ++]
 ...
}
```

## 自定义按钮文本

```ts
import DefaultTheme from 'vitepress/theme'
import { ShareButton } from '@theojs/lumen'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout() {// [!code ++]
    return h(DefaultTheme.Layout, null, {// [!code ++]
      'aside-outline-before': () =>// [!code ++]
        h(ShareButton, {// [!code ++]
          buttonIcon: 'fas fa-share-alt', // 自定义图标 // [!code ++]
          buttonText: '分享此页面', // 自定义按钮文本// [!code ++]
          copiedIcon: 'fas fa-thumbs-up', // 自定义复制成功后的图标// [!code ++]
          copiedText: '链接已复制！' // 自定义复制成功后的文本// [!code ++]
        })// [!code ++]
    })// [!code ++]
  }// [!code ++]
  ...// 其他代码
}
```
