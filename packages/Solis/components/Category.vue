<template>
  <div v-for="(posts, key) in sortedData" :key="key">
    <div class="category">{{ key }}</div>
    <a
      v-for="(article, index) in posts"
      :key="index"
      :href="withBase(article.regularPath)"
      class="posts"
    >
      <div class="post-container">
        <div class="post-dot"></div>
        <div class="post-title">
          <span v-if="article.frontMatter.top" class="top-label">
            <i class="fa-solid fa-fire-flame-simple"></i>
          </span>
          {{ article.frontMatter.title }}
        </div>
      </div>
      <div class="date">{{ article.frontMatter.date }}</div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { initCategory, Post } from '../types/functions'

const { theme } = useData<{ posts: Post[] }>()

const sortedData = computed(() => {
  const categoryData = initCategory(theme.value.posts)
  const sortedCategoryData: Record<string, Post[]> = {}

  for (const key in categoryData) {
    sortedCategoryData[key] = categoryData[key].slice().sort((a, b) => {
      if (a.frontMatter.top && b.frontMatter.top) {
        return (
          new Date(b.frontMatter.date).getTime() -
          new Date(a.frontMatter.date).getTime()
        )
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
