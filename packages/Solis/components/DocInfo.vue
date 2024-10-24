<template>
  <div class="info" v-if="isPostsPath">
    <div class="post-title">
      <span v-if="frontmatter.top" class="top-label">
        <i class="fa-solid fa-fire-flame-simple"></i>
      </span>
      {{ frontmatter.title }}
    </div>

    <div class="post-info" style="display: flex; justify-content: space-between; align-items: center">
      <div style="display: flex; align-items: center">
        <i class="fa-solid fa-calendar-week" style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"></i>
        {{ formattedDate }} &nbsp;&nbsp;
        <span v-for="(tag, index) in frontmatter.tags" :key="tag">
          <i v-if="index === 0" class="fa-solid fa-tags" style="margin-right: 0.25rem; color: var(--vp-c-brand-1)"></i>
          <a :href="withBase(`/pages/tags.html?tag=${tag}`)">
            {{ tag }}<span v-if="index < frontmatter.tags.length - 1">,</span>
          </a>
        </span>
      </div>

      <div class="post-authors" style="display: flex; align-items: center; margin-left: auto" v-if="authors.length">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
          style="margin-right: 0.25rem"
        >
          <g fill="none">
            <path
              d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"
            />
            <path
              fill="currentColor"
              d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 11q.887.002 1.724.12a1 1 0 0 1 .539 1.726a6.98 6.98 0 0 0-2.21 6.022a1 1 0 0 1-1.012 1.123c-2.01-.04-3.89-.216-5.294-.646c-.702-.215-1.364-.517-1.866-.962C2.35 19.913 2 19.28 2 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C6.425 13.695 8.605 13 11 13m10.212 1.034a2.5 2.5 0 0 1 0 3.535l-3.418 3.418a1.5 1.5 0 0 1-.848.424l-2.309.33a1 1 0 0 1-1.132-1.133l.33-2.308a1.5 1.5 0 0 1 .424-.849l3.418-3.418a2.5 2.5 0 0 1 3.535 0Z"
            />
          </g>
        </svg>
        <div style="display: inline-flex; align-items: center">
          <span
            v-for="author in authors"
            :key="author"
            class="post-author"
            style="display: inline-flex; align-items: center; margin-right: 0.5rem"
          >
            <a
              :href="`https://github.com/${author}`"
              target="_blank"
              rel="noopener noreferrer"
              style="display: flex; align-items: center"
            >
              <img
                :src="`https://avatars.githubusercontent.com/${author}`"
                alt="Author"
                style="width: 1.2rem; height: 1.2rem; border-radius: 50%; margin-right: 0.25rem"
              />
              {{ authorName[author] || author }}
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { withBase, useRoute, useData } from 'vitepress'
import { computed } from 'vue'

// 获取 frontmatter
const { frontmatter } = useData()
const route = useRoute()
const isPostsPath = computed(() => route.path.startsWith('/posts/'))

// 转换日期的函数
function convertDate(date: string = new Date().toString()): string {
  return new Date(date).toISOString().split('T')[0]
}

// 计算 formattedDate
const formattedDate = computed(() => {
  // 使用 frontmatter.date 如果存在，否则使用今天的日期
  return convertDate(frontmatter.value.date)
})

// 定义作者名称的响应式对象
const authorName = ref<{ [key: string]: string }>({})

// 处理作者数据
const authors = computed(() => {
  const authorList = frontmatter.value.author
  return Array.isArray(authorList) ? authorList : authorList ? [authorList] : []
})

// 获取 GitHub 用户信息
onMounted(async () => {
  const requests = authors.value.map((author) =>
    axios
      .get(`https://api.github.com/users/${author}`)
      .then((response) => {
        authorName.value[author] = response.data.name // 获取 GitHub 自定义名称
      })
      .catch((error) => {
        console.error('Error fetching GitHub user:', error)
      })
  )
  await Promise.all(requests) // 等待所有请求完成
})
</script>

<style lang="scss" scoped>
.post-title {
  font-size: 1.5rem;
  padding: 0 0 14px;
  font-weight: 900;
}
.info {
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 0 0 14px;
  margin-bottom: 1rem;
}
</style>
