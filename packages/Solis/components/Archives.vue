<template>
  <div
    v-for="yearList in sortedData"
    :key="yearList[0].frontMatter.date.split('-')[0]"
  >
    <div class="year">
      {{ yearList[0].frontMatter.date.split('-')[0] }}
    </div>
    <a
      :href="withBase(article.regularPath)"
      v-for="(article, index) in yearList"
      :key="index"
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
      <div class="date">{{ article.frontMatter.date.slice(5) }}</div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'
import { useYearSort } from '../types/functions'

const { theme } = useData()

// 对文章数据进行排序，置顶的文章会优先显示
const sortedData = computed(() => {
  const yearSortData = useYearSort(theme.value.posts)
  return yearSortData.map((yearList) =>
    yearList.slice().sort((a, b) => {
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
  )
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
