import { globby } from 'globby'
import matter from 'gray-matter'
import fs from 'fs-extra'
import { resolve } from 'path'

export async function getPosts(pageSize) {
  const paths = await globby(['posts/**.md'])

  const posts = await Promise.all(
    paths.map(async (item) => {
      const content = await fs.readFile(item, 'utf-8')
      const { data } = matter(content)
      const frontMatter = data
      frontMatter.date = _convertDate(frontMatter.date)
      return {
        frontMatter,
        regularPath: `/${item.replace('.md', '.html')}`
      }
    })
  )

  posts.sort(_compareDate)

  // 分离置顶文章和普通文章
  const topPosts = posts.filter((post) => post.frontMatter.top)
  const regularPosts = posts.filter((post) => !post.frontMatter.top)

  // 将置顶文章放到普通文章的前面
  const allPosts = [...topPosts, ...regularPosts]

  // 生成分页页面的 markdown 文件
  await generatePaginationPages(allPosts.length, pageSize)

  return allPosts
}

async function generatePaginationPages(total, pageSize) {
  const pagesNum = Math.ceil(total / pageSize)
  const paths = resolve('./')

  if (total > 0) {
    for (let i = 1; i <= pagesNum; i++) {
      const page = `
---
page: true
aside: false
---
<script setup>
import Page from "@theojs/solis/page";
import { useData } from "vitepress";
const { theme } = useData();
const posts = theme.value.posts.slice(${pageSize * (i - 1)},${pageSize * i});
</script>
<Page :posts="posts" :pageCurrent="${i}" :pagesNum="${pagesNum}" />
`.trim()

      const file = resolve(paths, `page_${i}.md`)
      await fs.writeFile(file, page)
    }
  }

  // 将 page_1.md 重命名为 index.md 用作首页
  await fs.move(resolve(paths, 'page_1.md'), resolve(paths, 'index.md'), {
    overwrite: true
  })
}

function _convertDate(date = new Date().toString()) {
  const json_date = new Date(date).toJSON()
  return json_date.split('T')[0]
}

function _compareDate(obj1, obj2) {
  if (obj1.frontMatter.top && !obj2.frontMatter.top) return -1
  if (!obj1.frontMatter.top && obj2.frontMatter.top) return 1
  return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1
}
