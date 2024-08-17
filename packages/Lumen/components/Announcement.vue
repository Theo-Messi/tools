<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

/**
 * 从 useData 函数中解构出 frontmatter 对象。
 * useData 返回的 frontmatter 是一个 Ref 对象，因此需要通过 .value 访问具体的值。
 */
const { frontmatter } = useData()

/**
 * 计算属性 prelink
 * 如果 hero 和 prelink 存在，则返回 prelink 对象，否则返回 undefined。
 * 使用 computed 保证 prelink 只在 frontmatter 发生变化时重新计算，提升性能。
 */
const prelink = computed(() => frontmatter.value.hero?.prelink)
</script>

<template>
  <a
    v-if="prelink"
    :href="prelink.link"
    :target="prelink.target"
    rel="noopener"
    class="custom-link"
  >
    <span v-html="prelink.title"></span>
  </a>
</template>

<style lang="scss" scoped>
.custom-link {
  display: inline-flex;
  align-items: center;
  border-radius: 0.8rem;
  padding: 0.3rem 1.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  border: 1px solid var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
  text-decoration: none !important;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    border-color: var(--vp-button-alt-hover-border);
    color: var(--vp-button-alt-hover-text);
    background-color: var(--vp-button-alt-hover-bg);
    transform: translateY(-1px);
  }
}
</style>
