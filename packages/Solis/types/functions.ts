type Post = {
  frontMatter: {
    date: string
    title: string
    category: string
    tags: string[]
    description: string
  }
  regularPath: string
}

export function initTags(posts: Post[]): Record<string, Post[]> {
  const data: Record<string, Post[]> = {}
  posts.forEach((post) => {
    const tags = post.frontMatter.tags
    if (tags) {
      tags.forEach((tag) => {
        if (data[tag]) {
          data[tag].push(post)
        } else {
          data[tag] = [post]
        }
      })
    }
  })
  return data
}

export function initCategory(posts: Post[]): Record<string, Post[]> {
  const data: Record<string, Post[]> = {}
  posts.forEach((post) => {
    const category = post.frontMatter.category
    if (category) {
      if (data[category]) {
        data[category].push(post)
      } else {
        data[category] = [post]
      }
    }
  })
  return data
}

export function useYearSort(posts: Post[]): Post[][] {
  const data: Post[][] = []
  let year = ''
  let num = -1
  posts.forEach((post) => {
    if (post.frontMatter.date) {
      const y = post.frontMatter.date.split('-')[0]
      if (y === year) {
        data[num].push(post)
      } else {
        num++
        data[num] = [post]
        year = y
      }
    }
  })
  return data
}
