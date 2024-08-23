<template>
  <div v-for="(article, index) in posts" :key="index" class="post-list">
    <div class="post-header">
      <div class="post-title">
        <a :href="withBase(article.regularPath)">
          {{ article.frontMatter.title }}
        </a>
      </div>
    </div>
    <a :href="withBase(article.regularPath)">
      <p class="describe" v-html="article.frontMatter.description"></p>
    </a>
    <div class="post-info">
      {{ article.frontMatter.date }}
      <span v-for="item in article.frontMatter.tags" :key="item">
        <a :href="withBase(`/pages/tags.html?tag=${item}`)">
          {{ item }}
        </a>
      </span>
    </div>
  </div>

  <div class="pagination">
    <a
      class="link"
      :class="{ active: pageCurrent === i }"
      v-for="i in pagesNum"
      :key="i"
      :href="withBase(i === 1 ? '/index.html' : `/page_${i}.html`)"
    >
      {{ i }}
    </a>
  </div>
</template>

<script lang="ts" setup>
import { withBase } from 'vitepress'
import { PropType } from 'vue'
const props = defineProps({
  posts: Array as PropType<
    {
      frontMatter: {
        title: string
        description: string
        date: string
        tags: string[]
      }
      regularPath: string
    }[]
  >,
  pageCurrent: Number,
  pagesNum: Number
})
</script>

<style lang="scss" scoped>
.post-list {
  border-bottom: 1px dashed var(--vp-c-brand-soft);
  padding: 14px 0;
}

.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post-title {
  font-size: 1.125rem;
  font-weight: 500;
  margin: 0.1rem 0;
}

.describe {
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
  margin: 5px 0;
  line-height: 1.5rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
}

.pagination {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}

.link {
  display: inline-block;
  width: 24px;
  text-align: center;
  border-right: none;

  &.active {
    color: var(--vp-c-text-1);
    &:hover {
      color: var(--vp-c-brand-3);
    }
  }

  &:first-child {
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
  }

  &:last-child {
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    border-right: 1px solid var(--vp-c-divider-light);
  }
}
</style>
