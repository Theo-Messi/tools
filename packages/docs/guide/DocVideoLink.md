---
title: 视频组件
---

支持多种主流视频平台，还允许用户通过自定义链接嵌入其他视频源。通过简单的配置，可以轻松将各种视频嵌入到您的页面中，提升用户的观看体验。

- **支持多平台**：内置对 `YouTube`、`Bilibili`、`腾讯视频`、`优酷`和 `Vimeo` 的支持，只需要提供平台标识符和视频 ID 即可。
- **自定义视频链接**：除了主流视频平台外，Vid 还支持直接嵌入 MP4 或其他格式的视频链接。
- **响应式设计**：该组件自动适应不同屏幕尺寸，确保在桌面和移动设备上都能流畅播放。
- **简便易用**：通过简单的配置项，您可以快速将视频内容集成到页面中，无需复杂的代码。

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

## 使用示例

只需要提供平台名称(`form`)和视频 ID（`id`），即可实现视频的嵌入：

```vue
YouTube 视频
<Vid form="youtube" id="dQw4w9WgXcQ" />

Bilibili 视频
<Vid form="bilibili" id="1205847484" />

腾讯视频
<Vid form="tencent" id="y0035f2sc4s" />

优酷视频
<Vid form="youku" id="XNTE5NTc3NjIwMA==" />

vimeo 视频
<Vid form="vimeo" id="76979871" />
```

<Vid form="vimeo" id="76979871" />

### 其他平台视频

```vue
<Vid src="https://geo.dailymotion.com/player.html?video=x7z0ovx" />
<Vid src="https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4" />
```

## 数据接口说明

| 属性名 | 类型                                                        | 说明                                                                            |
| ------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `id`   | `string`                                                    | 视频的唯一标识符，只有在选择平台时才需要使用 `id`。                             |
| `form` | `'youtube' \| 'bilibili' \| 'tencent' \| 'youku' \|'vimeo'` | 视频平台类型，值为 `youtube`、`bilibili`、`tencent` 、`youku` 或 `vimeo` 之一。 |
| `src`  | `string`                                                    | 自定义视频链接，只有在 `form` 不存在时才需要提供。                              |
