<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'Footer',
  setup() {
    const Footer_Data = FooterData
    const openSectionIndex = ref<number | null>(null)
    const windowWidth = ref<number | null>(null)

    const toggleSection = (index: number) => {
      openSectionIndex.value = openSectionIndex.value === index ? null : index
    }

    const updateWindowWidth = () => {
      windowWidth.value = window.innerWidth
    }

    onMounted(() => {
      if (typeof window !== 'undefined') {
        windowWidth.value = window.innerWidth
        window.addEventListener('resize', updateWindowWidth)
      }
    })

    onUnmounted(() => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateWindowWidth)
      }
    })

    return { Footer_Data, openSectionIndex, toggleSection, windowWidth }
  }
})
</script>

<template>
  <footer class="ba">
    <div class="ff">
      <div
        class="sc"
        v-for="(section, index) in Footer_Data.group"
        :key="index"
      >
        <div class="st" @click="toggleSection(index)">
          {{ section.title }}
          <button class="toggle-button">
            {{ openSectionIndex === index ? '−' : '+' }}
          </button>
        </div>
        <ul v-if="openSectionIndex === index || windowWidth > 768">
          <li v-for="(link, idx) in section.links" :key="idx">
            <a
              :class="{ 'external-link': !section.internal }"
              :target="section.internal ? '_self' : '_blank'"
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
    <div class="flex">
      <span>
        <i class="fas fa-earth-americas"></i>
        <a
          target="_blank"
          rel="noopener"
          href="https://beian.miit.gov.cn/"
          title="ICP备案"
        >
          {{ Footer_Data.beian.icp }}
        </a>
      </span>
      <span>
        <i class="fas fa-shield"></i>
        <a
          target="_blank"
          rel="noopener"
          href="https://beian.mps.gov.cn/"
          title="公安备案"
        >
          {{ Footer_Data.beian.police }}
        </a>
      </span>
    </div>
    <div class="flex">
      <span>
        Copyright<i class="far fa-copyright"></i>{{ Footer_Data.author.time }} -
        {{ new Date().getFullYear() }}
        <a
          target="_blank"
          rel="noopener"
          title="GitHub"
          :href="Footer_Data.author.link"
          >{{ Footer_Data.author.name }}</a
        >. All Rights Reserved
      </span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
/* 页脚 */
footer {
  width: 100%;

  a {
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
      -webkit-text-decoration: underline dotted;
      text-decoration: underline dotted;
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
  font-size: 0.8rem;
  text-align: center;
  margin: 0 auto;
}

.ff {
  display: flex;
  justify-content: center;
  margin: 1.25rem;

  &-grow-1 {
    flex-grow: 1;
  }
}

.flex {
  display: inline-block;
  margin-bottom: 1.25rem;

  &-grow-1 {
    flex-grow: 1;
  }
}

.sc {
  flex-basis: 20rem;
}

.st {
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.8rem;

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
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem 0;
  }

  .toggle-button {
    padding: 0 0.5rem;
  }
}
</style>
