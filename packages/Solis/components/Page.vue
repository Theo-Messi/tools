<template>
  <div v-for="article in sortedPosts" :key="article.regularPath" class="post-list">
    <div class="post-title">
      <span v-if="article.frontMatter.top" class="top-label">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128">
          <rect width="128" height="128" fill="none" />
          <radialGradient
            id="notoFire0"
            cx="68.884"
            cy="124.296"
            r="70.587"
            gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".314" stop-color="#ff9800" />
            <stop offset=".662" stop-color="#ff6d00" />
            <stop offset=".972" stop-color="#f44336" />
          </radialGradient>
          <path
            fill="url(#notoFire0)"
            d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5"
          />
          <radialGradient
            id="notoFire1"
            cx="64.921"
            cy="54.062"
            r="73.86"
            gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".214" stop-color="#fff176" />
            <stop offset=".328" stop-color="#fff27d" />
            <stop offset=".487" stop-color="#fff48f" />
            <stop offset=".672" stop-color="#fff7ad" />
            <stop offset=".793" stop-color="#fff9c4" />
            <stop offset=".822" stop-color="#fff8bd" stop-opacity="0.804" />
            <stop offset=".863" stop-color="#fff6ab" stop-opacity="0.529" />
            <stop offset=".91" stop-color="#fff38d" stop-opacity="0.209" />
            <stop offset=".941" stop-color="#fff176" stop-opacity="0" />
          </radialGradient>
          <path
            fill="url(#notoFire1)"
            d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.1 16.1 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88"
          />
        </svg>
      </span>
      <a :href="withBase(article.regularPath)">
        {{ article.frontMatter.title }}
      </a>
    </div>

    <div class="describe">
      <a :href="withBase(article.regularPath)">
        {{ article.frontMatter.description }}
      </a>
    </div>

    <div class="post-info">
      <i class="far fa-clock" style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"></i>
      {{ article.frontMatter.date }} &nbsp;&nbsp;
      <span>
        <span v-for="(tag, index) in article.frontMatter.tags" :key="tag">
          <i class="fat fa-hashtag" style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"></i>
          <a :href="withBase(`/pages/tags.html?tag=${tag}`)">
            {{ tag }}<span v-if="index < article.frontMatter.tags.length - 1"></span>
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
      :href="withBase(pageCurrent > 1 ? `/page_${pageCurrent - 1}.html` : '/index.html')"
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
      :href="withBase(pageCurrent < pagesNum ? `/page_${pageCurrent + 1}.html` : `/page_${pagesNum}.html`)"
      v-if="pageCurrent < pagesNum"
    >
      <i class="fa-solid fa-angle-right"></i>
    </a>
    <a class="link" :href="withBase(`/page_${pagesNum}.html`)" v-if="pageCurrent < pagesNum">
      <i class="fa-solid fa-angles-right"></i>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { withBase } from 'vitepress'
import { computed, PropType } from 'vue'
import { Post, sortPosts, getDisplayPages } from '../types/functions'

const props = defineProps({
  posts: Array as PropType<Post[]>,
  pageCurrent: { type: Number, default: 1 },
  pagesNum: { type: Number, default: 1 }
})

const sortedPosts = computed(() => {
  return sortPosts(props.posts ?? [])
})

const displayPages = computed(() => {
  return getDisplayPages(props.pageCurrent, props.pagesNum)
})
</script>

<style lang="scss" scoped>
.post-list {
  border-bottom: 1px dashed var(--vp-c-gray-3);
  padding: 20px 0;
}

.post-title {
  font-size: 1.125rem;
  margin: 0.1rem 0;
  a {
    color: var(--vp-c-text-1);
    &:hover {
      color: var(--vp-c-brand-1);
    }
  }
}

.describe {
  margin: 0.5rem 0;
  line-height: 1.5rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
    font-size: 0.9rem;
    color: var(--vp-c-text-2) !important;
    font-weight: 450 !important;
  }
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
