---
title: 主题配置文件
---

::: code-group

```ts [所有主题]
// theme/index.ts

import '@theojs/lumen/theme'
```

```ts [部分主题]
// theme/index.ts

import '@theojs/lumen/icon' /* 图标 */
import '@theojs/lumen/button' /* 按钮 */
import '@theojs/lumen/colors' /* 配色 */
import '@theojs/lumen/doc' /* 文档样式 */
import '@theojs/lumen/doc-blocks' /* 容器(默认):左侧阴影样式 */
import '@theojs/lumen/doc-blocks-border' /* 容器:边框样式 */
import '@theojs/lumen/home' /* 首页样式 */
import '@theojs/lumen/home-blocks' /* 首页按钮 */
import '@theojs/lumen/pic' /* 图片样式 */
import '@theojs/lumen/badge' /* 徽章样式 */
```

:::

:::tip
具体可查看所有主题文件 [Lumen/theme](https://github.com/Theo-Messi/tools/tree/main/packages/Lumen/theme)
:::

## 图标支持

目前支持 <iconify-icon icon="line-md:iconify1"></iconify-icon> [Iconify](https://icon-sets.iconify.design/) 图标

:::details 使用 Iconify 时报错 `[Vue warn]: Failed to resolve component: iconify-icon`

```ts
// .vitepress/config.mts
import { defineConfig } from 'vitepress'
export default defineConfig({
  vue: {// [!code ++]
    template: { compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' } }// [!code ++]
  }// [!code ++]
  ...
})
```

:::

```md
Iconify
<iconify-icon icon="simple-icons:fontawesome"></iconify-icon>
<iconify-icon icon="line-md:iconify1"></iconify-icon>
```

## 示例

### 容器

::: info 容器分为 `左侧阴影样式(默认)` 和 [`边框样式`](./doc-blocks-border.md)

**如需切换至边框样式**，可以在 `theme/index.ts` 中按以下顺序引入

```ts
// theme/index.ts
import '@theojs/lumen/theme'
import '@theojs/lumen/doc-blocks-border' // [!code ++]
```

**注意**: 引入 `doc-blocks-border` 时要放在 `@theojs/lumen/theme` 之后，以确保边框样式覆盖默认样式。**如果放在上方，可能会导致样式融合，不同效果相互影响**。

:::
**输入**

```md
::: info
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: tip
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: warning
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: danger
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: details
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::
```

**输出**
::: info
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: tip
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: warning
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: danger
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

::: details
[这是一个链接](https://doc.theojs.cn/)

这是一段文字
:::

### 自定义容器

**输入**

````md
::: danger STOP
[这是一个链接](https://doc.theojs.cn/)
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
````

**输出**
::: danger STOP
[这是一个链接](https://doc.theojs.cn/)
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::

### 徽章

```vue
<Badge type="info" text="default" />
<Badge type="tip" text="^1.9.0" />
<Badge type="warning" text="beta" />
<Badge type="danger" text="caution" />
```

<Badge type="info" text="default" />
<Badge type="tip" text="^1.9.0" />
<Badge type="warning" text="beta" />
<Badge type="danger" text="caution" />

### GitHub 风格容器

**输入**

```md
> [!NOTE]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!TIP]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!IMPORTANT]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!WARNING]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!CAUTION]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字
```

**输出**

> [!NOTE]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!TIP]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!IMPORTANT]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!WARNING]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

> [!CAUTION]
>
> [这是一个链接](https://doc.theojs.cn/)
>
> 这是一段文字

### 图片浅色与深色模式

**输入**

```md
<!-- 浅色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU){.light-only}

<!-- 深色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU){.dark-only}
```

```md
<!-- 深色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

<!-- 浅色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)
```

**输出**

<!-- 浅色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU){.light-only}

<!-- 深色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU){.dark-only}

<!-- 深色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCHxR2C_q8ugOMQzSmMovD3ni-z1QqTopSjg&usqp=CAU#dark)

<!-- 浅色模式 -->

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-w7jYJD-PBaozaH5WdubTPnBdi-XcQ4N96w&usqp=CAU#light)
