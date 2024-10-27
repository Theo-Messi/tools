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
      <!-- 如果图标是图片，显示图片 -->
      <span v-if="isImage(item.icon)">
        <img :src="item.icon" alt="icon" class="img" />
      </span>
      <!-- 如果图标不是图片，显示 Font Awesome 图标 -->
      <span v-else class="icon">
        <i :class="item.icon + ' fa-2xl'" :style="{ color: item.color }"></i>
      </span>
      <!-- 显示浅色模式下的图标 -->
      <img v-if="item.light" :src="item.light" alt="icon" class="img light-only" />
      <!-- 显示深色模式下的图标 -->
      <img v-if="item.dark" :src="item.dark" alt="icon" class="img dark-only" />
      <!-- 显示项目名称 -->
      <span class="name">{{ item.name }}</span>
      <!-- 显示项目描述 -->
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
    font-size: 1.2rem;
    color: var(--vp-c-text-1);
  }

  .img {
    width: 2.5rem;
    margin-top: -1rem;
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
