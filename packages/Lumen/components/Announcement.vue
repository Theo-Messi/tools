<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

/**
 * 从 `useData` 获取 `frontmatter`，用于访问文档的前置信息。
 *
 * `frontmatter` 是一个包含文档前置信息的对象，通常包括标题、描述、作者等元数据。
 */
const { frontmatter } = useData()

/**
 * 计算属性 `prelink`。
 *
 * 该属性从 `frontmatter` 中获取 `hero` 对象的 `prelink` 属性值。
 * 当 `frontmatter` 发生变化时，`prelink` 会自动重新计算。
 *
 * @returns {string | undefined} 返回 `frontmatter` 中 `hero` 对象的 `prelink` 属性值，如果不存在则为 `undefined`。
 */
const prelink = computed(() => frontmatter.value.hero?.prelink)
</script>

<template>
  <a v-if="prelink" :href="prelink.link" :target="prelink.target" rel="noopener" class="prelink">
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
