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
      {{ article.frontMatter.title }}
    </div>
    <div class="date">{{ article.frontMatter.date }}</div>
  </a>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { initTags } from '../types/functions'

const { theme } = useData()
const data = computed(() => initTags(theme.value.posts))
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
