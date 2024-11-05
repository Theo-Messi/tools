---
title: 配置VitePress
---

<Links
  :items="[
    {
      name: '如何部署请查看 Twikoo 文档',
      image: 'https://twikoo.js.org/twikoo-logo-home.png',
      desc: '一个简洁、安全、免费的静态网站评论系统。',
      link: 'https://twikoo.js.org/quick-start.html'
    }
  ]"
/>

## 创建数据

在`.vitepress`目录下新建`data/Twikoo.ts`文件，并添加以下内容：

```ts
// .vitepress/data/Twikoo.ts

export const Twikoo_Data = {
  envId: 'https://xxxxxx' // 修改成部署的Twikoo地址
}
```

## 引入组件

::: tip
`.. /data/Twikoo.ts` 可替换为存放数据的路径
:::

```ts
//.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue' // [!code ++]

import { Twikoo } from '@theojs/solis' // [!code ++]
import { Twikoo_Data } from '../data' // [!code ++]

export default {
  extends: Solistheme,// [!code ++]
  Layout() {// [!code ++]
    return h(DefaultTheme.Layout, null, {// [!code ++]
      'doc-after': () => h(Twikoo, { Twikoo_Data })// [!code ++]
    })// [!code ++]
  }// [!code ++]
  ...
}
```
