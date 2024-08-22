<template>
  <div v-for="(article, index) in posts" :key="index" class="post-list">
    <div class="post-header">
      <div class="post-title">
        <a :href="withBase(article.regularPath)">
          {{ article.frontMatter.title }}</a
        >
      </div>
    </div>
    <p class="describe" v-html="article.frontMatter.description"></p>
    <div class="post-info">
      {{ article.frontMatter.date }}
      <span v-for="item in article.frontMatter.tags"
        ><a :href="withBase(`/pages/tags.html?tag=${item}`)">
          {{ item }}</a
        ></span
      >
    </div>
  </div>

  <div class="pagination">
    <a
      class="link"
      :class="{ active: pageCurrent === i }"
      v-for="i in pagesNum"
      :key="i"
      :href="withBase(i === 1 ? '/index.html' : `/page_${i}.html`)"
      >{{ i }}</a
    >
  </div>
</template>

<script lang="ts" setup>
import { withBase } from 'vitepress'
const props = defineProps({
  posts: Array,
  pageCurrent: Number,
  pagesNum: Number
})
</script>

<style scoped>
.post-list {
  border-bottom: 1px dashed var(--vp-c-divider-light);
  padding: 14px 0 14px 0;
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  color: var(--vp-c-text-2);
  margin: 10px 0;
  line-height: 1.5rem;
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
  border: 1px var(--vp-c-divider-light) solid;
  border-right: none;
  font-weight: 400;
}
.link.active {
  background: var(--vp-c-text-1);
  color: var(--vp-c-neutral-inverse);
  border: 1px solid var(--vp-c-text-1) !important;
}
.link:first-child {
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
}
.link:last-child {
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  border-right: 1px var(--vp-c-divider-light) solid;
}

@media screen and (max-width: 768px) {
  .post-list {
    padding: 14px 0 14px 0;
  }
  .post-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .post-title {
    font-size: 1.0625rem;
    font-weight: 400;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    width: 17rem;
  }
  .describe {
    font-size: 0.9375rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin: 0.5rem 0 1rem;
  }
}
</style>
