---
title: 站点统计
---

该插件集成了三种常见的站点统计工具：**谷歌分析 (Google Analytics)**、**百度统计 (Baidu Analytics)** 和 **Umami Analytics**，让你可以轻松地在 VitePress 网站中集成并管理这些分析工具。无论是谷歌分析的强大功能，还是百度统计对中国市场的适配，或者是 Umami 的隐私友好型方案，都可以通过这个插件快速集成并使用。

## 谷歌分析

```ts
// .vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
import { googleAnalytics } from '@theojs/lumen' // [!code ++]

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    googleAnalytics({ id: 'G-******' }) // [!code ++]
  }
}
```

### 获取 Google Analytics ID

1. 访问 [Google Analytics](https://analytics.google.com/) 网站。
2. 登录到你的 Google Analytics 帐号。
3. 创建一个新的 Google Analytics 账户，或者选择已有的账户。
4. 在左下角点击 `Admin`（管理）。
5. 在 `Account`（账户）列下，选择你的账户。
6. 在 `Property`（属性）列下，选择你的站点，或者创建一个新的站点。
7. 在 `Property Settings`（属性设置）中，找到 `Tracking Info`（跟踪信息）。
8. 点击 `Tracking Code`（跟踪代码），你会看到类似 `G-XXXXXXX` 的 ID。

**参考链接：**[Google Analytics 帮助文档](https://support.google.com/analytics/answer/9304153?hl=zh-Hans)

## 百度统计

```ts
// .vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
import { baiduAnalytics, trackPageview } from '@theojs/lumen' // [!code ++]

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    baiduAnalytics({ baiduId: '******' }) // [!code ++]
    if (typeof window !== 'undefined') { // [!code ++]
      trackPageview('******', window.location.href) // [!code ++]
    }// [!code ++]
    ...
  }
}
```

### 获取 Baidu Analytics ID

1. 访问 [百度统计](https://tongji.baidu.com/) 网站。
2. 使用百度账号登录或注册一个新账号。
3. 登录后，点击页面上方的 `我的报告`-`使用设置`-`网站列表`。
4. 输入你的网站 URL，选择适当的分类，然后点击 `保存`
5. 保存后，点击获取代码。会看到类似于 `https://hm.baidu.com/hm.js?******` 的内容
6. 复制链接中`******`部分

**参考链接：** [百度统计官方文档](https://tongji.baidu.com/web/help/article?id=175&type=0)

## Umami

```ts
// .vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
import { umamiAnalytics } from '@theojs/lumen' // [!code ++]

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    umamiAnalytics({ id: '***-***-***-***', src: 'https://*******' }) // [!code ++]
  }
}
```

### 获取 Umami Analytics ID

#### 自建 Umami

1. 首先，你需要搭建 Umami 服务器。你可以参考 [Umami 文档](https://umami.is/docs/guides/hosting) 来进行安装。
2. 在你搭建好的 Umami 实例中，登录到 Umami 仪表盘。
3. 创建一个新的站点，并为其生成一个站点 ID。
4. 获取该站点的 ID 后，就可以在你的网站代码中使用它进行跟踪。

#### 使用公共 Umami 服务

1. 你也可以使用公共的 Umami 服务提供商。例如，Umami 提供了一些第三方的 Umami 实例，允许用户直接使用。
2. 获取到公共实例的 Umami ID 后，可以直接在代码中配置使用。

你的 Umami ID 应该类似于：`123abc456def`

**参考链接：**

- [Umami 文档](https://umami.is/docs/guides/hosting)
- [Umami 公共服务](https://umami.is/)
