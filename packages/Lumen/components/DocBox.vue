<script setup lang="ts">
import { BoxItem, isImage, isExternalLink } from '../types'

const props = defineProps<{ items: BoxItem[] }>()
</script>

<template>
  <!-- 渲染盒子容器，包含多个链接项 -->
  <div class="box-container">
    <!-- 遍历 `props.items` 数组并渲染每个链接项 -->
    <a
      v-for="item in props.items"
      :key="item.link"
      :href="item.link"
      :title="item.name"
      class="box"
      :target="isExternalLink(item.link) ? '_blank' : '_self'"
      rel="noopener"
    >
      <div class="box-content">
        <!-- 如果有标签，则显示标签 -->
        <span v-if="item.tag" class="tag">{{ item.tag }}</span>
        <!-- 如果图标是图片，则显示图片 -->
        <span v-if="isImage(item.icon)">
          <img :src="item.icon" alt="icon" class="icon-container" />
        </span>
        <!-- 如果图标不是图片，则显示 Font Awesome 图标 -->
        <span v-else class="icon">
          <i :class="item.icon" :style="{ color: item.color }"></i>
        </span>
        <!-- 如果有浅色模式图标，则显示 -->
        <img v-if="item.light" :src="item.light" alt="icon" class="icon-container light-only" />
        <!-- 如果有深色模式图标，则显示 -->
        <img v-if="item.dark" :src="item.dark" alt="icon" class="icon-container dark-only" />
        <!-- 显示名称 -->
        <p class="name">{{ item.name }}</p>
      </div>
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

.box-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.box {
  position: relative;
  border: 1px solid var(--vp-c-bg-alt);
  background-color: var(--vp-c-bg-alt);
  padding: 0 1.6rem;
  border-radius: 0.8rem;
  width: 14rem;
  height: 3.5rem;
  display: flex;
  text-decoration: none !important;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    border-color: var(--vp-c-brand-1);
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1024px) {
    flex: 1 1 calc(50% - 0.5rem);
    max-width: calc(50% - 0.5rem);
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 0.5rem);
    max-width: calc(50% - 0.5rem);
  }
}

.box-content {
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
}

.tag {
  line-height: 1;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--vp-c-brand-3);
  color: var(--vp-c-brand-text);
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0 0.7rem 0 0.7rem;
  z-index: 1;
}

.icon-container {
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  display: inline-block;
  font-size: 2em;
  justify-content: center;
  align-items: center;
  color: var(--vp-c-text-1);
}

.name {
  margin-left: 1rem;
  font-size: 0.875rem;
  line-height: 1;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
