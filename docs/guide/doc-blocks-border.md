<style lang="scss" scoped>
@use '@theojs/lumen/doc-blocks-border' 
</style>

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
