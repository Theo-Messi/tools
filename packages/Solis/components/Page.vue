<template>
  <div v-for="(article, index) in sortedPosts" :key="index" class="post-list">
    <div class="post-header">
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
        <a :href="withBase(article.regularPath)">
          {{ article.frontMatter.title }}
        </a>
      </div>
    </div>
    <a :href="withBase(article.regularPath)">
      <p class="describe" v-html="article.frontMatter.description"></p>
    </a>
    <div class="post-info">
      <i
        class="fa-solid fa-calendar-week"
        style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"
      ></i>
      {{ article.frontMatter.date }}
      <span>
        <span v-for="(item, index) in article.frontMatter.tags" :key="item">
          <i
            v-if="index === 0"
            class="fa-solid fa-tags"
            style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"
          ></i>
          <a :href="withBase(`/pages/tags.html?tag=${item}`)">
            {{ item
            }}<span v-if="index < article.frontMatter.tags.length - 1">,</span>
          </a>
        </span>
      </span>
    </div>
  </div>

  <div class="pagination">
    <a class="link" :href="withBase('/index.html')" v-if="pageCurrent > 1">
      <i class="fa-solid fa-angles-left"></i>
    </a>
    <a
      class="link"
      :class="{ active: pageCurrent === 1 }"
      :href="
        withBase(
          pageCurrent > 1 ? `/page_${pageCurrent - 1}.html` : '/index.html'
        )
      "
      v-if="pageCurrent > 1"
    >
      <i class="fa-solid fa-angle-left"></i>
    </a>

    <template v-for="i in displayPages" :key="i">
      <a
        class="link"
        :class="{ active: pageCurrent === i }"
        :href="withBase(i === 1 ? '/index.html' : `/page_${i}.html`)"
      >
        {{ i }}
      </a>
    </template>

    <a
      class="link"
      :class="{ active: pageCurrent === pagesNum }"
      :href="
        withBase(
          pageCurrent < pagesNum
            ? `/page_${pageCurrent + 1}.html`
            : `/page_${pagesNum}.html`
        )
      "
      v-if="pageCurrent < pagesNum"
    >
      <i class="fa-solid fa-angle-right"></i>
    </a>
    <a
      class="link"
      :href="withBase(`/page_${pagesNum}.html`)"
      v-if="pageCurrent < pagesNum"
    >
      <i class="fa-solid fa-angles-right"></i>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { withBase } from 'vitepress'
import { computed, PropType } from 'vue'
import { Post } from '../types/functions'

const props = defineProps({
  posts: Array as PropType<Post[]>,
  pageCurrent: { type: Number, default: 1 },
  pagesNum: { type: Number, default: 1 }
})

const sortedPosts = computed(() => {
  return (props.posts ?? []).slice().sort((a, b) => {
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

const displayPages = computed(() => {
  const maxPagesToShow = 6
  const half = Math.floor(maxPagesToShow / 2)
  let start = Math.max(1, props.pageCurrent - half)
  let end = Math.min(props.pagesNum, start + maxPagesToShow - 1)

  if (end - start < maxPagesToShow - 1) {
    start = Math.max(1, end - maxPagesToShow + 1)
  }

  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
})
</script>

<style lang="scss" scoped>
.post-list {
  border-bottom: 1px dashed var(--vp-c-gray-3);
  padding: 20px 0;
}

.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post-title {
  font-size: 1.125rem;
  margin: 0.1rem 0;
  a {
    color: var(--vp-c-text-1);
    &:hover {
      color: var(--vp-c-text-1);
    }
  }
}

.describe {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0.5rem 0;
  line-height: 1.5rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 450;
}

.pagination {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}

.link {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 500 !important;
  width: 24px;
  text-align: center;
  border-radius: 4px;
  color: var(--vp-c-text-1);
  margin: 0 4px;
  transition:
    background-color 0.3s,
    color 0.3s;

  &.active {
    color: var(--vp-c-text-1) !important;
    background-color: var(--vp-c-bg-alt);
  }

  &:hover {
    background-color: var(--vp-c-bg-soft);
  }
}
</style>
