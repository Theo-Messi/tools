<script setup lang="ts">
// 定义链接项类型
interface Item {
  link: string // 链接项的链接地址。
  icon: string // 链接项的图标地址或类名。
  name: string // 链接项的名称。
  tag?: string // 链接项的标签（可选）。
  light?: string // 浅色模式下的图标 URL（可选）。
  dark?: string // 深色模式下的图标 URL（可选）。
  color?: string // 图标的颜色（可选）。
}

// 使用 defineProps 定义属性
const props = defineProps<{ items: Item[] }>()

/**
 * 检查给定的 URL 是否为图片链接。
 *
 * @param {string} url - 要检查的 URL。
 * @returns {boolean} - 如果 URL 是图片链接，则返回 `true`，否则返回 `false`。
 */
const isImage = (url: string): boolean => /\.(png|jpe?g|gif|svg|webp|bmp|tif?f|tiff|ico|avif)(\?.*)?$/.test(url)

/**
 * 判断给定的链接是否是外部链接。
 *
 * @param {string} link - 要判断的链接。
 * @returns {boolean} - 如果链接是外部链接，则返回 `true`，否则返回 `false`。
 */
const isExternalLink = (link: string): boolean => /^https?:\/\//.test(link)
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
          <i :class="item.icon + ' fa-2xl'" :style="{ color: item.color }"></i>
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
  padding: 0.8rem 1.6rem;
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
  font-size: 0.9rem;
  line-height: 1;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
}

.tag {
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
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  display: inline-block;
  height: 2em;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
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
