<template>
  <div v-for="(posts, category) in sortedData" :key="category">
    <div class="category">{{ category }}</div>
    <a v-for="article in posts" :key="article.regularPath" :href="withBase(article.regularPath)" class="posts">
      <div class="post-container">
        <div class="post-dot"></div>
        <div class="post-title">
          <span v-if="article.frontMatter.top" class="top-label">
            <i class="fa-solid fa-fire-flame-simple"></i>
          </span>
          {{ article.frontMatter.title }}
        </div>
      </div>
      <div class="date">{{ article.formattedDate }}</div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { initCategory, Post } from '../types/functions'

interface Article extends Post {
  formattedDate: string
}

const { theme } = useData<{ posts: Post[] }>()

const sortedData = computed(() => {
  const categoryData = initCategory(theme.value.posts)
  const sortedCategoryData: Record<string, Article[]> = {}

  for (const key in categoryData) {
    sortedCategoryData[key] = categoryData[key]
      .map((article) => ({
        ...article,
        formattedDate: article.frontMatter.date.slice(0, 10) // 提前格式化日期
      }))
      .sort((a, b) => {
        if (a.frontMatter.top && b.frontMatter.top) {
          return new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
        }
        if (a.frontMatter.top) return -1
        if (b.frontMatter.top) return 1
        return 0
      })
  }

  return sortedCategoryData
})
</script>

<style lang="scss" scoped>
.category {
  padding: 14px 0 8px;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: var(--date-font-family);
}
</style>
