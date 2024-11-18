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
    app.component('Vid', DocVideoLink) // [!code ++]
  } // [!code ++]
}
```

## 示例

### YouTube 视频

```vue
<Vid form="youtube" id="dQw4w9WgXcQ" />
```

<Vid form="youtube" id="dQw4w9WgXcQ" />

### Bilibili 视频

```vue
<Vid form="bilibili" id="1205847484" />
```

<Vid form="bilibili" id="1205847484" />

### 腾讯视频

```vue
<Vid form="tencent" id="y0035f2sc4s" />
```

<Vid form="tencent" id="y0035f2sc4s" />

### 优酷视频

```vue
<Vid form="youku" id="XNTE5NTc3NjIwMA==" />
```

<Vid form="youku" id="XNTE5NTc3NjIwMA==" />

### vimeo 视频

```vue
<Vid form="vimeo" id="76979871" />
```

<Vid form="vimeo" id='76979871' />

### 其他平台视频

```vue
<Vid src="https://geo.dailymotion.com/player.html?video=x7z0ovx" />
```

<Vid src='https://geo.dailymotion.com/player.html?video=x7z0ovx'  />

## 数据接口说明

| 属性名 | 类型                                                        | 说明                                                                            |
| ------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`   | `string`                                                    | 视频的唯一标识符，只有在选择平台时才需要使用 `id`。                             |
| `form` | `'youtube' \| 'bilibili' \| 'tencent' \| 'youku' \|'vimeo'` | 视频平台类型，值为 `youtube`、`bilibili`、`tencent` 、`youku` 或 `vimeo` 之一。 |
| `src`  | `string`                                                    | 自定义视频链接，只有在 `form` 不存在时才需要提供。                              |
