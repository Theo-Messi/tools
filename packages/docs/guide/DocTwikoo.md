---
title: Twikoo 评论
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

import type { TwikooData } from '@theojs/lumen'

export const Twikoo_Data: TwikooData = {
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
import { h } from 'vue'// [!code ++]

import { Twikoo } from '@theojs/lumen'// [!code ++]
import { Twikoo_Data } from '../data'// [!code ++]

export default {
  extends: DefaultTheme,
  Layout() {// [!code ++]
    return h(DefaultTheme.Layout, null, {// [!code ++]
       'doc-after': () => h(Twikoo, { Twikoo_Data }) // [!code ++]
    }) // [!code ++]
  }// [!code ++]
  ...
}
```

## 在首页使用

```ts
//.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'// [!code ++]

import { Twikoo } from '@theojs/lumen'// [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {// [!code ++]
    app.component('Twikoo', Twikoo)// [!code ++]
  }// [!code ++]
  ...
}
```

```md
---
layout: home

hero:
  name: Lumen
  text: 'Enhanced '
  textsuffix: 'Theme'
  tagline: ✨ 集成 Vue 功能组件和主题美化的 VitePress 插件
---

<!-- 修改成部署的Twikoo地址 -->
<Twikoo :Twikoo_Data="{ envId: 'https://xxxxxx'  }" />
```
