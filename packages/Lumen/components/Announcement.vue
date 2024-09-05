<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

/**
 * 使用 `useData` 直接解构 `frontmatter`。
 */
const { frontmatter } = useData()

/**
 * 优化计算属性 `prelink`。
 * 当 `frontmatter` 发生变化时自动重新计算，使用简洁的箭头函数。
 */
const prelink = computed(() => frontmatter.value.hero?.prelink)
</script>

<template>
  <a
    v-if="prelink"
    :href="prelink.link"
    :target="prelink.target"
    rel="noopener"
    class="prelink"
  >
    <span v-html="prelink.title"></span>
  </a>
</template>

<style lang="scss" scoped>
.prelink {
  display: inline-flex;
  border-radius: 0.8rem;
  padding: 0.3rem 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  background-color: var(--vp-button-alt-bg);
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: var(--vp-button-alt-hover-bg);
    transform: translateY(-1px);
  }
}
</style>
