<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps<{
  Footer_Data: {
    group: Array<{
      icon?: string /* 图标（可选）。 */
      style?: string /* 图标样式（可选）。 */
      title: string /* 分组标题。 */
      internal?: boolean /* 该组是否为内部链接，默认为 `false`（可选）。 */
      links: Array<{
        icon?: string /* 链接图标（可选）。 */
        style?: string /* 链接样式（可选）。 */
        name: string /* 链接名称。 */
        href: string /* 链接地址。 */
        internal?: boolean /* 是否为内部链接，默认为 `false`（可选）。 */
      }>
    }>
    beian?: {
      icp?: string /* ICP 备案号（可选）。 */
      police?: string /* 公安备案号（可选）。 */
    }
    author?: {
      name?: string /* 作者姓名（可选）。 */
      link?: string /* 作者链接（可选）。 */
    }
  }
}>()

/**
 * 当前打开的 section 索引，`null` 表示没有 section 被打开。
 *
 * @type {Ref<number | null>}
 */
const openSectionIndex = ref<number | null>(null)

/**
 * 当前窗口宽度。
 *
 * @type {Ref<number | null>}
 */
const windowWidth = ref<number | null>(null)

/**
 * 切换 section 的显示状态。
 *
 * @param {number} index - 要切换的 section 的索引。
 */
const toggleSection = (index: number) => {
  openSectionIndex.value = openSectionIndex.value === index ? null : index
}

/**
 * 更新当前窗口宽度。
 */
const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

// 组件挂载时添加 resize 事件监听器
onMounted(() => {
  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', updateWindowWidth)
  }
})

// 组件卸载时移除 resize 事件监听器
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', updateWindowWidth)
  }
})

/**
 * 计算当前窗口是否为大屏幕，宽度大于 768px 时为大屏幕。
 *
 * @type {ComputedRef<boolean>}
 */
const isLargeScreen = computed(() => windowWidth.value > 768)
</script>

<template>
  <footer class="ba">
    <div class="ff">
      <div class="sc" v-for="(section, index) in props.Footer_Data.group" :key="index">
        <div class="st" @click="toggleSection(index)">
          <i v-if="section.icon" :class="section.icon" :style="section.style"></i>
          {{ section.title }}
          <button class="toggle-button">
            {{ openSectionIndex === index ? '−' : '+' }}
          </button>
        </div>
        <ul v-if="openSectionIndex === index || isLargeScreen">
          <li v-for="(link, idx) in section.links" :key="idx">
            <i v-if="link.icon" :class="link.icon" :style="link.style"></i>
            <a
              :class="{ 'external-link': !link.internal && !section.internal }"
              :target="link.internal || section.internal ? '_self' : '_blank'"
              rel="noopener"
              :name="link.name"
              :title="link.name"
              :href="link.href"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 底部信息栏 -->
    <div class="flex" v-if="props.Footer_Data.beian?.icp || props.Footer_Data.beian?.police">
      <span v-if="props.Footer_Data.beian?.icp">
        <i class="fas fa-earth-americas"></i>
        <a target="_blank" rel="noopener" href="https://beian.miit.gov.cn/" title="ICP备案">
          {{ props.Footer_Data.beian.icp }}
        </a>
      </span>
      <span v-if="props.Footer_Data.beian?.police">
        <i class="fas fa-shield"></i>
        <a target="_blank" rel="noopener" href="https://beian.mps.gov.cn/" title="公安备案">
          {{ props.Footer_Data.beian.police }}
        </a>
      </span>
    </div>
    <div class="flex" v-if="props.Footer_Data.author?.name">
      <span>
        <i class="far fa-copyright"></i>{{ new Date().getFullYear() }}
        <a target="_blank" rel="noopener" title="GitHub" :href="props.Footer_Data.author?.link">
          {{ props.Footer_Data.author?.name }}</a
        >. All Rights Reserved.
      </span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  width: 100%;

  a {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      -webkit-text-decoration: underline solid;
      text-decoration: underline solid;
      text-underline-offset: 4px;
      color: var(--vp-c-brand-1);
    }
  }

  .has-sidebar ~ & {
    display: none;
  }
}

span {
  margin-left: 1rem;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.2rem;
  opacity: 0.9;
}

i {
  margin: 0 0.25rem;
}

.external-link {
  position: relative;
  display: inline-block;

  &::after {
    content: '\f061';
    font-family: 'Font Awesome 6 Free';
    font-weight: 900;
    margin-left: 0.25rem;
    font-size: 0.5rem;
    position: absolute;
    color: var(--vp-c-text-3);
    transform: rotate(-45deg);
  }
}

.ba {
  background: var(--vp-c-bg-alt);
  font-size: 0.75rem;
  text-align: center;
  margin: 0 auto;
}

.ff {
  display: flex;
  justify-content: center;
  margin: 1.25rem;
}

.flex {
  display: inline-block;
  margin-bottom: 1.25rem;
}

.sc {
  flex-basis: 20rem;
}

.st {
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.75rem;

  .toggle-button {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    padding: 0;

    @media (min-width: 769px) {
      display: none;
    }
  }
}

@media (max-width: 768px) {
  .ff {
    flex-direction: column;
    align-items: flex-start;
    margin: 2rem 3.5rem;
  }

  .sc {
    width: 100%;
    flex-basis: auto;
  }

  li {
    text-align: left;
    margin-left: 1rem;
    line-height: 1.5rem;
  }

  .st {
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem 0;
    i {
      margin-right: 1rem;
    }
    .toggle-button {
      margin-left: auto;
    }
  }
}
</style>
