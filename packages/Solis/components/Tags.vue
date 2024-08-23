<template>
  <div class="tags">
    <span
      @click="toggleTag(key)"
      v-for="(item, key) in data"
      :key="key"
      class="tag"
    >
      {{ key }} <strong>{{ data[key].length }}</strong>
    </span>
  </div>
  <div class="tag-header">{{ selectTag }}</div>
  <a
    v-if="selectTag"
    :href="withBase(article.regularPath)"
    v-for="(article, index) in data[selectTag]"
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
    <div class="date">{{ article.frontMatter.date }}</div>
  </a>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { initTags } from '../types/functions'

const { theme } = useData()

// 对文章数据进行排序，置顶的文章会优先显示
const data = computed(() => {
  const tagData = initTags(theme.value.posts)
  const sortedTagData = {}

  for (const key in tagData) {
    sortedTagData[key] = tagData[key].slice().sort((a, b) => {
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

  return sortedTagData
})

const selectTag = ref(new URLSearchParams(location.search).get('tag') || '')

const toggleTag = (tag: string) => {
  selectTag.value = tag
}
</script>

<style lang="scss" scoped>
.tags {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  padding: 4px 16px;
  margin: 6px 8px;
  font-size: 0.875rem;
  line-height: 25px;
  background-color: var(--vp-c-bg-alt);
  transition: background-color 0.4s ease;
  border-radius: 2px;
  color: var(--vp-c-text-1);
  cursor: pointer;

  strong {
    color: var(--vp-c-brand);
  }
}

.tag-header {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1rem 0;
  text-align: left;
}
</style>
