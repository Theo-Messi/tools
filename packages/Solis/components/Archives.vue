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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ff5733"
                d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27"
              />
            </svg>
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
