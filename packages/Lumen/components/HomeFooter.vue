<script setup lang="ts">
import { FooterData, isIconifyIcon, Icon } from '../types'

// 使用 defineProps 定义属性
const props = defineProps<{ Footer_Data: FooterData }>()
const footer = props.Footer_Data
</script>

<template>
  <footer class="footer">
    <div class="list-containe" v-if="footer.group">
      <div class="list-content" v-for="(section, index) in footer.group || []" :key="section.title + index">
        <div class="list-title">
          <template v-if="section.icon">
            <i v-if="section.icon" :class="section.icon" :style="{ color: section.style }"></i>
            <Icon
              v-if="isIconifyIcon(section.icon)"
              :icon="section.icon"
              class="iconify"
              :style="{ color: section.style }"
            />&nbsp;&nbsp;</template
          >{{ section.title }}
        </div>
        <ul class="list-link">
          <li v-for="(link, idx) in section.links" :key="link.name + idx">
            <template v-if="link.icon">
              <i v-if="link.icon" :class="link.icon" :style="{ color: link.style }"></i>
              <Icon v-if="isIconifyIcon(link.icon)" :icon="link.icon" :style="{ color: link.style }" />&nbsp;</template
            >
            <a
              :target="link.target || section.target || '_blank'"
              rel="noopener"
              :name="link.name"
              :title="link.name"
              :href="link.href"
            >
              {{ link.name }}
              <Icon
                v-if="(link.target || section.target || '_blank') === '_blank'"
                icon="heroicons-outline:arrow-sm-up"
                style="color: var(--vp-c-text-3); transform: rotate(45deg); font-size: 1em"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 底部信息栏 -->
    <div class="info-containe">
      <div class="info-content" v-if="footer.beian?.icp || footer.beian?.police">
        <span class="info-link" v-if="footer.beian?.icp">
          <Icon v-if="footer.beian?.showIcon" icon="fluent-color:globe-shield-48" />&nbsp;
          <a target="_blank" rel="noopener" href="https://beian.miit.gov.cn/" title="ICP备案">
            {{ footer.beian.icp }}
          </a>
        </span>
        <span class="info-link" v-if="footer.beian?.police">
          <Icon v-if="footer.beian?.showIcon" icon="fluent-color:shield-checkmark-48" />&nbsp;
          <a target="_blank" rel="noopener" href="https://beian.mps.gov.cn/" title="公安备案">
            {{ footer.beian.police }}
          </a>
        </span>
      </div>
      <div class="info-content" v-if="footer.author?.name">
        <span class="info-link">
          <Icon icon="ri:copyright-line" />&nbsp;{{ new Date().getFullYear() }}
          <a target="_blank" rel="noopener" title="GitHub" :href="footer.author?.link">{{ footer.author?.name }}</a
          >. All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--vp-c-bg-alt);
  font-size: 0.75rem;
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

.list-containe {
  margin: 1.25rem 10% 1.25rem 18%;
  display: flex;
  justify-content: space-evenly;
}

.list-content {
  flex-grow: 0.15;
}

.list-title {
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.list-link {
  margin: 0 0.5rem;
  line-height: 1.7rem;
  opacity: 0.9;
}

.iconify {
  position: relative;
  display: inline-block;
  margin: 0 0 -0.125rem -0.125rem;
  font-size: 1.2em;
}

.info-containe {
  text-align: center;
  margin: 1.25rem 0 1.25rem 0;
}

.info-content {
  display: inline-block;
}

.info-link {
  margin-left: 1rem;
}

@media (max-width: 768px) {
  .list-containe {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .list-title {
    font-size: 0.875rem;
  }
}
</style>
