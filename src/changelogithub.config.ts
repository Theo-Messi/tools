import { defineConfig } from 'changelogithub'

export default defineConfig({
  // 定义不同类型提交的显示方式和对应的语义化版本（SemVer）更新级别
  types: {
    feat: { title: 'Features', semver: 'minor' },
    fix: { title: 'Bug Fixes', semver: 'patch' },
    docs: { title: 'Documentation' },
    style: { title: 'Styles' },
    refactor: { title: 'Refactors', semver: 'patch' },
    perf: { title: 'Performance' },
    test: { title: 'Tests' },
    chore: { title: 'Chore', semver: 'patch' },
    build: { title: 'Build', semver: 'patch' },
    ci: { title: 'CI' }
  },

  // 重大更改
  titles: {
    breakingChanges: 'Breaking Changes'
  },

  // 是否包含贡献者列表
  contributors: false,

  // 是否将每条提交信息首字母大写
  capitalize: false,

  // 是否根据提交的作用域分组
  group: false
})
