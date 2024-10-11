import { globby } from 'globby'
import matter from 'gray-matter'
import fs from 'fs-extra'
import { resolve } from 'path'

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

  posts.sort(_compareDate)

  // 分离置顶文章和普通文章
  const [topPosts, regularPosts]: [Post[], Post[]] = posts.reduce(
    ([top, regular], post) => {
      if (post.frontMatter.top) {
        top.push(post)
      } else {
        regular.push(post)
      }
      return [top, regular]
    },
    [[], []] as [Post[], Post[]]
  )

  // 将置顶文章放到普通文章的前面
  const allPosts = [...topPosts, ...regularPosts]

  // 生成分页页面的 markdown 文件
  await generatePaginationPages(allPosts.length, pageSize)

  return allPosts
}

async function generatePaginationPages(total: number, pageSize: number): Promise<void> {
  const pagesNum = Math.ceil(total / pageSize)
  const basePath = resolve('./')

  if (total > 0) {
    const writePromises: Promise<void>[] = []
    for (let i = 1; i <= pagesNum; i++) {
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
const posts = theme.value.posts.slice(${pageSize * (i - 1)},${pageSize * i});
</script>
<Page :posts="posts" :pageCurrent="${i}" :pagesNum="${pagesNum}" />
      `.trim()

      const filePath = resolve(basePath, `page_${i}.md`)
      writePromises.push(fs.writeFile(filePath, pageContent))
    }

    await Promise.all(writePromises)

    // 将 page_1.md 重命名为 index.md 用作首页
    await fs.move(resolve(basePath, 'page_1.md'), resolve(basePath, 'index.md'), {
      overwrite: true
    })
  }
}

function _convertDate(date: string = new Date().toString()): string {
  return new Date(date).toISOString().split('T')[0]
}

function _compareDate(postA: Post, postB: Post): number {
  if (postA.frontMatter.top && !postB.frontMatter.top) return -1
  if (!postA.frontMatter.top && postB.frontMatter.top) return 1
  return postA.frontMatter.date < postB.frontMatter.date ? 1 : -1
}
