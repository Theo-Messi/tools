<template>
  <div v-for="yearList in sortedData" :key="yearList[0].year">
    <div class="year">
      {{ yearList[0].year }}
    </div>
    <a
      :href="withBase(article.regularPath)"
      v-for="article in yearList"
      :key="article.regularPath"
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
      <div class="date">{{ article.formattedDate }}</div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { useYearSort } from '../types/functions'

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

const { theme } = useData()

// 对文章数据进行排序，置顶的文章会优先显示
const sortedData = computed(() => {
  const yearSortData = useYearSort(theme.value.posts)
  return yearSortData.map((yearList: Article[]) => {
    // 预处理文章数据
    return yearList
      .map((article) => ({
        ...article,
        year: article.frontMatter.date.split('-')[0], // 提取年份
        formattedDate: article.frontMatter.date.slice(5) // 格式化日期
      }))
      .sort((a, b) => {
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
  })
})
</script>

<style lang="scss" scoped>
.year {
  padding: 14px 0 8px 0;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: var(--date-font-family);
}
</style>
