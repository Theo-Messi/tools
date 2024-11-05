<script setup lang="ts">
import { BoxItem, isExternalLink } from '../types'
import { Icon } from '@iconify/vue'
const props = defineProps<{ items: BoxItem[] }>()

// 用于检查是否为 Iconify 图标格式的辅助函数
const isIconifyIcon = (icon: string) => icon.includes(':')
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
      <template v-if="item.icon">
        <Icon v-if="isIconifyIcon(item.icon)" :icon="item.icon" class="icon" :style="{ color: item.color }" />
        <i v-else :class="item.icon + ' icon'" :style="{ color: item.color }" alt="Icon"></i>
      </template>
      <template v-else-if="item.img">
        <img v-if="typeof item.img === 'object'" :src="item.img.light" alt="Icon" class="icon light-only" />
        <img v-if="typeof item.img === 'object'" :src="item.img.dark" alt="Icon" class="icon dark-only" />
        <img v-else :src="item.img" alt="Icon" class="icon" />
      </template>
      <span class="name">{{ item.name }}</span>
      <span v-if="item.tag" class="tag">{{ item.tag }}</span>
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
  letter-spacing: -0.02em;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
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

.icon {
  height: 1em;
  font-size: 2em;
  display: flex;
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
