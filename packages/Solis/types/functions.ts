export type Post = {
  frontMatter: {
    date: string
    title: string
    category: string
    tags: string[]
    description: string
    top?: boolean
  }
  regularPath: string
}

/**
 * 初始化一个标签到文章的映射。
 * @param posts - 需要按标签分类的文章数组。
 * @returns 一个记录对象，其中每个键是一个标签，值是与该标签关联的文章数组。
 */
export function initTags(posts: Post[]): Record<string, Post[]> {
  const data: Record<string, Post[]> = {}

  posts.forEach((post) => {
    const tags = post.frontMatter.tags
    if (tags) {
      tags.forEach((tag) => {
        if (!data[tag]) {
          data[tag] = []
        }
        data[tag].push(post)
      })
    }
  })

  return data
}

/**
 * 初始化一个分类到文章的映射。
 * @param posts - 需要按分类分类的文章数组。
 * @returns 一个记录对象，其中每个键是一个分类，值是与该分类关联的文章数组。
 */
export function initCategory(posts: Post[]): Record<string, Post[]> {
  const data: Record<string, Post[]> = {}

  posts.forEach((post) => {
    const category = post.frontMatter.category
    if (category) {
      if (!data[category]) {
        data[category] = []
      }
      data[category].push(post)
    }
  })

  return data
}

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
    const postYear = post.frontMatter.date.split('-')[0]

    // 如果当前年份与文章年份不同，创建一个新分组
    if (postYear !== currentYear) {
      currentYear = postYear
      data[++index] = []
    }

    // 将文章放入对应年份的分组中，置顶文章放在当前年份组的最前面
    if (post.frontMatter.top) {
      data[index].unshift(post)
    } else {
      data[index].push(post)
    }
  })

  return data
}
