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
import '@theojs/lumen/doc-blocks' /* 容器样式 默认左侧阴影模式 */
import '@theojs/lumen/doc-blocks-border' /* 容器样式 边框 */
import '@theojs/lumen/home' /* 首页样式 */
import '@theojs/lumen/home-blocks' /* 首页按钮 */
import '@theojs/lumen/pic' /* 图片样式 */
import '@theojs/lumen/badge' /* 徽章样式 */
```

:::

:::tip
具体可查看所有主题文件 [Lumen/theme](https://github.com/Theo-Messi/tools/tree/main/packages/Lumen/theme)
:::

## 示例

### 容器

::: tip
容器有两种样式 左侧阴影模式(默认) 和 边框模式

如果需要边框模式 可以在 `theme/index.ts` 中引入 `@theojs/lumen/doc-blocks-border`

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
