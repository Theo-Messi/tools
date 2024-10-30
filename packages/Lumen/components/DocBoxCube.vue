<script setup lang="ts">
import { BoxCubeItem, isImage, isExternalLink } from '../types'

const props = defineProps<{ items: BoxCubeItem[] }>()
</script>

<template>
  <!-- 渲染包含多个链接项的容器 -->
  <div class="container">
    <!-- 遍历 `props.items` 数组，渲染每个项目 -->
    <a
      v-for="(item, index) in props.items"
      :key="item.name + index"
      class="link"
      :href="item.link"
      :title="item.name"
      :target="isExternalLink(item.link) ? '_blank' : '_self'"
      rel="noopener"
    >
      <template v-if="item.icon">
        <img v-if="isImage(item.icon)" :src="item.icon" alt="Icon" class="icon" />
        <i v-else :class="item.icon + ' icon'" :style="{ color: item.color }" alt="Icon"></i>
      </template>
      <template v-else>
        <img v-if="item.light" :src="item.light" alt="Icon" class="icon light-only" />
        <img v-if="item.dark" :src="item.dark" alt="Icon" class="icon dark-only" />
      </template>
      <span class="name">{{ item.name }}</span>
      <span class="desc">{{ item.desc }}</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
/**
 * 处理不同模式下的图标显示：暗色模式下隐藏浅色图标，浅色模式下隐藏暗色图标。
 */
:root:not(.dark) .dark-only,
:root:is(.dark) .light-only {
  display: none;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.link {
  width: 8.2rem;
  height: 8.2rem;
  border: 1px solid var(--vp-c-bg-alt);
  background-color: var(--vp-c-bg-alt);
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  -webkit-text-decoration: none !important;
  text-decoration: none !important;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    border-color: var(--vp-c-brand-1);
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1024px) {
    flex: 1 1 calc(25% - 0.5rem);
    max-width: calc(25% - 0.5rem);
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(33.33% - 0.5rem);
    max-width: calc(33.33% - 0.5rem);
  }

  .icon {
    margin-top: -1rem;
    font-size: 2.5em;
    width: 2.5rem;
    color: var(--vp-c-text-1);
  }

  .name {
    position: absolute;
    font-size: 0.875rem;
    bottom: 1.25rem;
  }

  .desc {
    position: absolute;
    font-size: 0.75rem;
    bottom: 0.15rem;
    color: var(--vp-c-text-3);
  }
}
</style>
