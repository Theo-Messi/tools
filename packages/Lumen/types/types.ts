// DocLinks
export interface LinkItem {
  name: string // 链接项的名称
  desc?: string // 链接项的描述（可选）
  link: string // 链接项的 URL
  color?: string | null // 图标的颜色（可选）
  icon?: string | null // 对于 `iconify`或者 `fortawesome` 图标
  image?: string | { light: string; dark: string } // 支持单一图片地址或包含 light 和 dark 两种模式的对象
}

//  DocBoxCube
export interface BoxCubeItem {
  name: string // 项目的名称。
  link: string // 项目的链接。
  desc?: string // 项目的描述（可选）。
  color?: string // 图标的颜色（可选）。
  icon?: string | null // 对于 `iconify`或者 `fortawesome` 图标
  image?: string | { light: string; dark: string } // 支持单一图片地址或包含 light 和 dark 两种模式的对象
}

// DocBox
export interface BoxItem {
  name: string
  link: string
  tag?: string
  color?: string
  icon?: string // 对于 `iconify`或者 `fortawesome` 图标
  image?: string | { light: string; dark: string } // 支持单一图片地址或包含 light 和 dark 两种模式的对象
}

// DocAsideLogo
export interface AsideItem {
  link: string // 链接地址。
  icon: string // 图标地址。
  name?: string // 名称（可选）。
  Activity?: string // 活动名称（可选）。
  hide1?: string // 隐藏信息1（可选）。
  info1?: string // 信息1（可选）。
  hide2?: string // 隐藏信息2（可选）。
  info2?: string // 信息2（可选）。
}

// Announcement.vue
export interface Prelink {
  link: string // 链接的 URL
  target?: string // 链接的目标（可选）
  title: string // 链接的标题
}

// Twikoo 配置数据类型定义
export interface TwikooData {
  envId: string // Twikoo 的环境 ID
}

// HomeFooter
export interface Link {
  icon?: string // 链接图标（可选）
  style?: string // 链接样式（可选）
  name: string // 链接名称
  href: string // 链接地址
  target?: string // 链接打开方式 默认 '_blank'
}

export interface Group {
  icon?: string // 图标（可选）
  style?: string // 图标样式（可选）
  title: string // 分组标题
  target?: string // 链接打开方式 默认 '_blank'
  links: Link[] // 链接数组
}

export interface Beian {
  icp?: string // ICP 备案号（可选）
  police?: string // 公安备案号（可选）
  showIcon?: boolean // 图标（可选）
}

export interface Author {
  name?: string // 作者姓名（可选）
  link?: string // 作者链接（可选）
}

export interface FooterData {
  group?: Group[] // 分组数组（可选）
  beian?: Beian // 备案信息（可选）
  author?: Author // 作者信息（可选）
}
