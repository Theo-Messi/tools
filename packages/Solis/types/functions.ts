// functions.ts
import axios from 'axios'

// Post 类型定义
export interface Post {
  frontMatter: {
    date: string
    title: string
    category: string
    tags: string[]
    description: string
    author: string | string[]
    top?: boolean
  }
  regularPath: string
}

// 标签相关函数
/**
/**
 * 初始化一个标签到文章的映射。
 * @param posts - 需要按标签分类的文章数组。
 * @returns 一个记录对象，其中每个键是一个标签，值是与该标签关联的文章数组。
 */
export function initTags(posts: Post[]): Record<string, Post[]> {
  const data: Record<string, Post[]> = {}

  posts.forEach((post) => {
    const tags = post.frontMatter.tags
    // 如果文章有标签，进行分类
    if (tags && Array.isArray(tags)) {
      tags.forEach((tag) => {
        if (!data[tag]) {
          data[tag] = []
        }
        data[tag].push(post) // 将文章添加到对应标签组
      })
    }
  })

  return data
}

// 分类相关函数
/**
 * 初始化一个分类到文章的映射。
 * @param posts - 需要按分类分类的文章数组。
 * @returns 一个记录对象，其中每个键是一个分类，值是与该分类关联的文章数组。
 */
export function initCategory(posts: Post[]): Record<string, Post[]> {
  const data: Record<string, Post[]> = {}

  posts.forEach((post) => {
    const category = post.frontMatter.category
    // 如果文章有分类，进行分类
    if (category) {
      if (!data[category]) {
        data[category] = []
      }
      data[category].push(post) // 将文章添加到对应分类组
    }
  })

  return data
}

// 年份相关函数
/**
 * 按年份对文章进行排序。
 * @param posts - 需要按年份排序的文章数组。
 * @returns 一个二维数组，每个子数组包含同一年份的文章，置顶的文章会被放在该年份组的最前面。
 */
export function useYearSort(posts: Post[]): Post[][] {
  const data: Post[][] = []
  let currentYear = ''
  let index = -1

  posts.forEach((post) => {
    const postYear = post.frontMatter.date.split('-')[0] // 提取文章的年份

    // 如果当前年份与文章年份不同，创建一个新分组
    if (postYear !== currentYear) {
      currentYear = postYear
      data[++index] = [] // 创建一个新年份组
    }

    // 将文章放入对应年份的分组中，置顶文章放在当前年份组的最前面
    if (post.frontMatter.top) {
      data[index].unshift(post) // 置顶文章优先
    } else {
      data[index].push(post)
    }
  })

  return data
}

// 排序相关函数
/**
 * 对文章数据进行排序，置顶的文章优先。
 * @param posts - 需要排序的文章数组。
 * @returns 排序后的文章数组。
 */
export function sortPosts(posts: Post[]): Post[] {
  return posts.slice().sort((a, b) => {
    if (a.frontMatter.top && b.frontMatter.top) {
      return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
    }
    if (a.frontMatter.top) return -1
    if (b.frontMatter.top) return 1
    return 0
  })
}

// URL 相关函数
/**
 * 从 URL 中获取类别。
 * @returns 当前选定的类别。
 */
export function getCategoryFromUrl(): string {
  return new URLSearchParams(location.search).get('category') || ''
}

/**
 * 更新 URL 中的类别。
 * @param category - 要设置的类别。
 */
export function updateCategoryInUrl(category: string): void {
  const url = new URL(window.location.href)
  url.searchParams.set('category', category)
  window.history.pushState({}, '', url.toString())
}

// 格式化相关函数
interface Article {
  frontMatter: {
    date: string
    top?: boolean
    title: string
  }
  regularPath: string
  year?: string
  formattedDate?: string
}

/**
 * 格式化文章以包含年份和格式化日期。
 * @param articles - 需要格式化的文章数组。
 * @returns 格式化后的文章数组。
 */
export function formatArticles(articles: Post[]): (Article & { year: string; formattedDate: string })[] {
  return articles.map((article) => ({
    ...article,
    year: article.frontMatter.date.split('-')[0], // 提取年份
    formattedDate: article.frontMatter.date.slice(5) // 格式化日期
  }))
}

/**
 * 对文章进行排序，置顶的文章优先。
 * @param articles - 需要排序的文章数组。
 * @returns 排序后的文章数组。
 */
export function sortArticlesByTop(articles: Article[]): Article[] {
  return articles.sort((a, b) => {
    if (a.frontMatter.top && b.frontMatter.top) {
      return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
    }
    if (a.frontMatter.top) return -1
    if (b.frontMatter.top) return 1
    return 0
  })
}

// 转换日期的函数
export function convertDate(date: string = new Date().toString()): string {
  let parsedDate = new Date(date)
  if (isNaN(parsedDate.getTime())) {
    parsedDate = new Date() // 无效日期时使用当前日期
  }
  return parsedDate.toISOString().split('T')[0]
}

// 获取 GitHub 用户信息的函数
export async function fetchGitHubUserNames(authors: string[]): Promise<{ [key: string]: string }> {
  const authorName: { [key: string]: string } = {}

  const requests = authors.map(async (author) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${author}`)
      authorName[author] = response.data.name // 获取 GitHub 自定义名称
    } catch (error) {
      console.error('Error fetching GitHub user:', error)
    }
  })

  await Promise.all(requests) // 等待所有请求完成
  return authorName
}

/**
 * 计算显示的分页范围。
 * @param pageCurrent - 当前页码。
 * @param pagesNum - 总页数。
 * @returns 要显示的页码数组。
 */
export function getDisplayPages(pageCurrent: number, pagesNum: number): number[] {
  const maxPagesToShow = 6
  const half = Math.floor(maxPagesToShow / 2)
  let start = Math.max(1, pageCurrent - half)
  let end = Math.min(pagesNum, start + maxPagesToShow - 1)

  if (end - start < maxPagesToShow - 1) {
    start = Math.max(1, end - maxPagesToShow + 1)
  }

  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
}

// Twikoo 相关函数
/**
 * 初始化 Twikoo 评论组件。
 * @param envId - Twikoo 的环境 ID。
 */
export async function initTwikoo(envId: string): Promise<void> {
  try {
    const twikoo = await import('twikoo')
    if (twikoo && twikoo.init) {
      twikoo.init({
        envId: envId,
        el: '#twikoo'
      })
    } else {
      console.error('Twikoo module or init function not found')
    }
  } catch (error) {
    console.error('Failed to load Twikoo:', error)
  }
}

/**
 * 清空 Twikoo 评论组件的内容。
 */
export function clearTwikoo(): void {
  const el = document.querySelector('#twikoo')
  if (el) {
    el.innerHTML = '' // 清空评论组件的内容
  }
}

// Twikoo 配置数据类型定义
export interface TwikooData {
  envId: string // Twikoo 的环境 ID
}
