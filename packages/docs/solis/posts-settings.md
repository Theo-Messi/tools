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
author: ['Theo-Messi']
tags:
  - 动作
  - 冒险
description: '测试文章1'
---

// 文章内容
```

| 字段            | 值               |
| --------------- | ---------------- |
| **title**       | 标题             |
| **date**        | 发表日期         |
| **category**    | 分类             |
| **top**         | 置顶 默认`false` |
| **author**      | 作者             |
| **tags**        | 标签             |
| **description** | 文章描述         |
