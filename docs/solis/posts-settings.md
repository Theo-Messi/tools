---
title: 文章配置
---

## 文章命名

`posts`目录下的`md`文件将识别为文章

例如 `posts/test.md` 将输出为 `https://域名/posts/test`

## Frontmatter 配置

```md
---
title: 标题
date: 2024-05-01
category: 电影系列
top: true
tags:
  - 动作
  - 冒险
description: '测试文章1'
---

// 文章内容
```

::: tip

- **title**: 标题 `用于首页展示 不会改变页面路径`
- **date**: 创建时间 `标准格式为 2024-01-01`
- **category**: 分类
- **top**: 置顶文章 `true/false 默认为false`
- **tags**: 标签
- **description**: 描述 `用于首页展示`
  :::
