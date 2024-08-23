<template>
  <div
    v-for="yearList in data"
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
        {{ article.frontMatter.title }}
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
const data = computed(() => useYearSort(theme.value.posts))
</script>

<style lang="scss" scoped>
.year {
  padding: 14px 0 8px 0;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: var(--date-font-family);
}
</style>
