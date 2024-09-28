---
title: 项目结构
---

## 项目结构

::: tip
按照 [此仓库](https://github.com/Theo-Messi/tools/tree/main/blog) 设置项目结构

在项目根目录创建 `.gitignore` 文件

并写入该行忽略规则`echo '/*.md' >> .gitignore`
:::

```sh
blog/
├── .vitepress/       # 用于配置 VitePress
│   └── config.ts     # VitePress 配置文件（示例）
├── posts/            # 存放文章
│   ├── example.md    # 示例文章文件
│   └── another.md    # 另一个示例文章文件
├── pages/            # 用于设置博客结构
│   ├── archives.md   # 归档页面
│   ├── category.md   # 分类页面
│   └── tags.md       # 标签页面
├── public/           # 存放静态资源
│   ├── icon.png      # 示例图标
│   └── other-resource.jpg # 示例资源
└── .gitignore        # 忽略规则配置文件
```

## pages

设置博客布局结构

`pages`文件夹下创建 `archives.md` `category.md` `tags.md`

::: code-group

```md[archives.md]
---
layout: doc
title: 归档
description: Archive
aside: false
lastUpdated: false
editLink: false
---

<Archives/>

```

```md[category.md]
---
layout: doc
title: 分类
description: Category
aside: false
lastUpdated: false
editLink: false
---

<Category/>

```

```md[tags.md]
---
layout: doc
title: 标签
description: Tags
aside: false
lastUpdated: false
editLink: false
---

<ClientOnly>
<Tags/>
</ClientOnly>

```

:::

## posts

该目录用于存放文章 目录下的`md`后缀文件将识别为文章

## public

放置在 `public` 中的资源将按原样复制到输出目录的根目录中。

请注意，应使用根绝对路径来引用放置在 `public` 中的文件——例如，`public/icon.png` 应始终在源代码中使用 `/icon.png` 引用。

具体请查看 [vitepress](https://vitepress.dev/guide/asset-handling#the-public-directory)
