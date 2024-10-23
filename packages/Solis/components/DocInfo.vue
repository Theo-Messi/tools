<template>
  <div class="info" v-if="isPostsPath">
    <div class="post-title">
      <span v-if="frontmatter.top" class="top-label">
        <i class="fa-solid fa-fire-flame-simple"></i>
      </span>
      {{ frontmatter.title }}
    </div>

    <div class="post-info">
      <i class="fa-solid fa-calendar-week" style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"></i>
      {{ formattedDate }} &nbsp;&nbsp;
      <span v-for="(tag, index) in frontmatter.tags" :key="tag">
        <i v-if="index === 0" class="fa-solid fa-tags" style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"></i>
        <a :href="withBase(`/pages/tags.html?tag=${tag}`)">
          {{ tag }}<span v-if="index < frontmatter.tags.length - 1">,</span>
        </a>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withBase, useRoute, useData } from 'vitepress'
import { computed } from 'vue'

// 获取 frontmatter
const { frontmatter } = useData()
const route = useRoute()
const isPostsPath = computed(() => route.path.startsWith('/posts/'))

// 转换日期的函数
function convertDate(date: string = new Date().toString()): string {
  return new Date(date).toISOString().split('T')[0]
}

// 计算 formattedDate
const formattedDate = computed(() => {
  // 使用 frontmatter.date 如果存在，否则使用今天的日期
  return convertDate(frontmatter.value.date)
})
</script>

<style lang="scss" scoped>
.post-title {
  font-size: 1.5rem;
  padding: 0 0 14px;
  font-weight: 900;
}
.info {
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 0 0 14px;
  margin-bottom: 1rem;
}
</style>
