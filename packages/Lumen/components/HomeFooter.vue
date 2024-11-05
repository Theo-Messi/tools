<script setup lang="ts">
import { ref, computed } from 'vue'
import { FooterData, useWindowWidth, isIconifyIcon, Icon } from '../types'

// 使用 defineProps 定义属性
const props = defineProps<{ Footer_Data: FooterData }>()

// 当前打开的 section 索引
const openSectionIndex = ref<number | null>(null)

// 使用自定义钩子获取窗口宽度
const windowWidth = useWindowWidth()

/**
 * 切换 section 的显示状态。
 *
 * @param {number} index - 要切换的 section 的索引。
 */
const toggleSection = (index: number) => {
  openSectionIndex.value = openSectionIndex.value === index ? null : index
}

/**
 * 计算当前窗口是否为大屏幕，宽度大于 768px 时为大屏幕。
 *
 * @type {ComputedRef<boolean>}
 */
const isLargeScreen = computed(() => windowWidth.value! > 768)
</script>

<template>
  <footer class="ba">
    <div class="ff">
      <div class="sc" v-for="(section, index) in props.Footer_Data.group || []" :key="index">
        <div class="st" @click="toggleSection(index)">
          <template v-if="section.icon">
            <i v-if="section.icon" :class="section.icon" :style="{ color: section.style }"></i>
            <Icon
              v-if="isIconifyIcon(section.icon)"
              :icon="section.icon"
              class="iconify"
              :style="{ color: section.style }"
            />
          </template>

          {{ section.title }}
          <button class="toggle-button">
            {{ openSectionIndex === index ? '−' : '+' }}
          </button>
        </div>
        <ul v-if="openSectionIndex === index || isLargeScreen">
          <li v-for="(link, idx) in section.links" :key="idx">
            <template v-if="link.icon">
              <i v-if="link.icon" :class="link.icon" :style="{ color: link.style }"></i>
              <Icon v-if="isIconifyIcon(link.icon)" :icon="link.icon" :style="{ color: link.style }" />
            </template>
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
        <Icon v-if="props.Footer_Data.beian?.showIcon" icon="fluent-color:globe-shield-48" />
        <a target="_blank" rel="noopener" href="https://beian.miit.gov.cn/" title="ICP备案">
          {{ props.Footer_Data.beian.icp }}
        </a>
      </span>
      <span v-if="props.Footer_Data.beian?.police">
        <Icon v-if="props.Footer_Data.beian?.showIcon" icon="fluent-color:shield-checkmark-48" />
        <a target="_blank" rel="noopener" href="https://beian.mps.gov.cn/" title="公安备案">
          {{ props.Footer_Data.beian.police }}
        </a>
      </span>
    </div>
    <div class="flex" v-if="props.Footer_Data.author?.name">
      <span>
        <Icon icon="ri:copyright-line" />{{ new Date().getFullYear() }}
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

.iconify {
  position: relative;
  display: inline-block;
  margin: 0 0.25rem -0.1rem 0;
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
    font-size: 0.875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem 0;
    i {
      margin-right: 1rem;
    }
    .iconify {
      margin-right: 1rem;
      margin-left: -1rem;
    }
    .toggle-button {
      margin-left: auto;
    }
  }
}
</style>
