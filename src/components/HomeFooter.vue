<script setup lang="ts">
import { FooterData, Icon } from '../types'

// 使用 defineProps 定义属性
const props = defineProps<{ Footer_Data: FooterData }>()
const footer = props.Footer_Data
</script>

<template>
  <footer class="footer">
    <div class="list-container" v-if="footer.group">
      <div class="list-item" v-for="(section, index) in footer.group || []" :key="section.title + index">
        <div class="list-title">
          <template v-if="section.icon">
            <Icon :icon="section.icon" class="iconify" :style="{ color: section.style }" />&nbsp;&nbsp;</template
          >{{ section.title }}
        </div>
        <ul class="list-links">
          <li v-for="(link, idx) in section.links" :key="link.name + idx">
            <template v-if="link.icon"> <Icon :icon="link.icon" :style="{ color: link.style }" />&nbsp; </template>
            <a
              :name="link.name"
              :title="link.name"
              :href="link.href"
              rel="noopener"
              :target="link.target || section.target || '_blank'"
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

    <div class="footer-info">
      <div v-if="footer.beian?.icp || footer.beian?.police" class="info-item">
        <span v-if="footer.beian?.icp">
          <Icon v-if="footer.beian?.showIcon" :icon="footer.beian.icpIcon || 'fluent:globe-shield-48-filled'" />&nbsp;
          <a target="_blank" rel="noopener" href="https://beian.miit.gov.cn/" title="ICP备案">
            {{ footer.beian.icp }}
          </a>
        </span>
        <span class="info-spacing"></span>
        <span v-if="footer.beian?.police">
          <Icon
            v-if="footer.beian?.showIcon"
            :icon="footer.beian.policeIcon || 'fluent:shield-checkmark-48-filled'"
          />&nbsp;
          <a target="_blank" rel="noopener" href="https://beian.mps.gov.cn/" title="公安备案">
            {{ footer.beian.police }}
          </a>
        </span>
      </div>
      <span class="info-spacing-copyright"></span>
      <div v-if="footer.author?.name" class="info-item">
        <span>
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

.list-container {
  margin: 1.25rem 10% 1.25rem 18%;
  display: flex;
  justify-content: space-evenly;
}

.list-item {
  flex-grow: 0.15;
}

.list-title {
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.list-links {
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

.footer-info {
  text-align: center;
  margin: 1.25rem 0 1.25rem 0;
}

.info-item {
  display: inline-block;
}

.info-spacing {
  margin-left: 1rem;
}

.info-spacing-copyright {
  margin-left: 1rem;
}

@media (max-width: 768px) {
  .list-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .list-title {
    font-size: 0.875rem;
  }

  .info-spacing-copyright {
    margin-left: -1rem;
  }
}
</style>
