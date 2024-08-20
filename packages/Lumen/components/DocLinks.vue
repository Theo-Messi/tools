<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

/**
 * 定义 `Item` 接口，用于描述每个链接项的结构。
 * @interface Item
 * @property {string} name - 链接项的名称。
 * @property {string} link - 链接项的链接。
 * @property {string} [color] - 图标的颜色（可选）。
 * @property {string} [icon] - 图标的 URL 或类名（可选）。
 * @property {string} [light] - 浅色模式下的图标 URL（可选）。
 * @property {string} [dark] - 深色模式下的图标 URL（可选）。
 */
interface Item {
  name: string
  link: string
  color?: string
  icon?: string
  light?: string
  dark?: string
}

/**
 * 定义并导出 `Links` 组件。
 * @component
 * @description 渲染一组链接项，每项包括图标和名称。
 */
export default defineComponent({
  name: 'Links',
  props: {
    /**
     * 链接项数组，包含若干 `Item` 对象，是组件的必需属性。
     * @type {Array<Item>}
     */
    items: {
      type: Array as () => Item[],
      required: true
    }
  },
  methods: {
    /**
     * 判断给定的 URL 是否为图像文件。
     * @param {string} url - 要判断的 URL。
     * @returns {boolean} 如果 URL 是图像文件，则返回 `true`，否则返回 `false`。
     */
    isImage(url: string): boolean {
      return (
        typeof url === 'string' &&
        /\.(png|jpe?g|gif|svg|webp|bmp|tif?f|tiff|ico|avif)(\?.*)?$/.test(url)
      )
    }
  },
  components: {
    Icon
  }
})
</script>

<template>
  <div class="container">
    <a
      v-for="item in items"
      :key="item.name"
      class="link"
      :href="item.link"
      :name="item.name"
      :title="item.name"
      target="_blank"
      rel="noopener"
    >
      <span class="box">
        <!-- 判断并显示不同类型的图标 -->
        <template v-if="item.icon">
          <img
            v-if="item.icon && isImage(item.icon)"
            :src="item.icon"
            alt="Icon"
          />
          <i
            v-else-if="item.icon?.startsWith('fa')"
            :class="item.icon"
            :style="{ color: item.color }"
          ></i>
          <Icon v-else :icon="item.icon" :style="{ color: item.color }"></Icon>
        </template>

        <!-- 如果没有图标，也没有浅色和深色模式图标，则使用默认图标 -->

        <Icon
          v-else-if="!item.light && !item.dark"
          icon="ci:external-link"
        ></Icon>

        <!-- 渲染浅色模式图标 -->
        <img
          v-if="item.light"
          :src="item.light"
          alt="icon"
          class="light-only"
        />

        <!-- 渲染深色模式图标 -->
        <img v-if="item.dark" :src="item.dark" alt="icon" class="dark-only" />
      </span>

      <span class="name">{{ item.name }}</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
/* 在非深色模式下隐藏深色模式图标 */
:root:not(.dark) .dark-only {
  display: none;
}

/* 在深色模式下隐藏浅色模式图标 */
:root:is(.dark) .light-only {
  display: none;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.link {
  width: 100%;
  height: 3rem;
  border: 1px dotted var(--vp-c-bg-alt);
  background-color: var(--vp-c-bg-alt);
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  text-decoration: none !important;

  &:hover {
    border-color: var(--vp-c-brand-1);
  }
}

.box {
  position: relative;

  &:hover .icon,
  .name {
    color: var(--vp-c-brand-1);
  }
}

img {
  width: 2rem;
  margin-left: 1.5rem;
}

.name {
  font-size: 0.87rem;
  margin-left: 1rem;
}

i,
.iconify {
  font-size: 1.8rem;
  margin-left: 1.5rem;
}
</style>
