<template>
  <div class="post-info" v-if="isPostsPath">
    <i class="fa-solid fa-calendar-week" style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"></i>
    {{ $frontmatter.date?.substring(0, 10) }} &nbsp;&nbsp;
    <span v-for="(item, index) in $frontmatter.tags" :key="item">
      <i v-if="index === 0" class="fa-solid fa-tags" style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"></i>
      <a :href="withBase(`/pages/tags.html?tag=${item}`)">
        {{ item }}<span v-if="index < $frontmatter.tags.length - 1">,</span>
      </a>
    </span>
  </div>
</template>

<script setup>
import { withBase, useRoute } from 'vitepress'
import { computed } from 'vue'

const route = useRoute()
const isPostsPath = computed(() => route.path.startsWith('/posts/'))
</script>
