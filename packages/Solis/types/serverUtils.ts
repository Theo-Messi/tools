import { globby } from 'globby'
import matter from 'gray-matter'
import fs from 'node:fs/promises'
import { resolve } from 'node:path'

// 定义 FrontMatter 的类型
interface FrontMatter {
  date: string
  top?: boolean
  [key: string]: any
}

// 定义 Post 的类型
interface Post {
  frontMatter: FrontMatter
  regularPath: string
}

export async function getPosts(pageSize: number): Promise<Post[]> {
  const paths = await globby(['posts/**.md'])

  const posts: Post[] = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, 'utf-8')
      const { data } = matter(content)
      const frontMatter: FrontMatter = { ...data, date: _convertDate(data.date) }
      return {
        frontMatter,
        regularPath: `/${item.replace('.md', '.html')}`
      }
    })
  )

  // 根据置顶标记和日期排序文章
  posts.sort(_compareDate)

  // 生成分页页面的 markdown 文件
  await generatePaginationPages(posts, pageSize)

  return posts
}

async function generatePaginationPages(posts: Post[], pageSize: number): Promise<void> {
  const pagesNum = Math.ceil(posts.length / pageSize)
  const basePath = resolve('./')

  const writePromises = Array.from({ length: pagesNum }, (_, i) => {
    const pageContent = `
---
layout: doc
aside: false
lastUpdated: false
editLink: false
---
<script setup>
import { Page } from "@theojs/solis";
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts.slice(${pageSize * i}, ${pageSize * (i + 1)});
</script>
<Page :posts="posts" :pageCurrent="${i + 1}" :pagesNum="${pagesNum}" />
    `.trim()

    const filePath = resolve(basePath, `page_${i + 1}.md`)
    return fs.writeFile(filePath, pageContent)
  })

  await Promise.all(writePromises)

  // 将 page_1.md 重命名为 index.md 作为首页
  await fs.rename(resolve(basePath, 'page_1.md'), resolve(basePath, 'index.md'))
}

function _convertDate(date: string = new Date().toString()): string {
  return new Date(date).toISOString().split('T')[0]
}

function _compareDate(postA: Post, postB: Post): number {
  return (
    (postB.frontMatter.top ? 1 : 0) - (postA.frontMatter.top ? 1 : 0) ||
    (postA.frontMatter.date < postB.frontMatter.date ? 1 : -1)
  )
}
