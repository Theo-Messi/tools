/**
 * DocBox 接口
 */
export interface BoxItem {
  /** DocBox 名称。 */
  name: string
  /** DocBox 链接。 */
  link: string
  /** DocBox 标签。 */
  tag?: string
  /** 图标的颜色。 */
  color?: string
  /** 图标名称，支持 `iconify`。 */
  icon?: string
  /** 图片地址或包含 light 和 dark 模式的对象。 */
  image?: string | { light: string; dark: string }
}

/**
 * DocLinks 接口
 */
export interface LinkItem {
  /** DocLinks 名称。 */
  name: string
  /** DocLinks 描述。 */
  desc?: string
  /** DocLinks 链接。 */
  link: string
  /** 图标的颜色。 */
  color?: string | null
  /** 图标名称，支持 `iconify`。 */
  icon?: string | null
  /** 支持单一图片地址或包含 light 和 dark 模式的对象。 */
  image?: string | { light: string; dark: string }
}

/**
 * BoxCube 接口
 */
export interface BoxCubeItem {
  /** BoxCube 名称。 */
  name: string
  /** BoxCube 链接。 */
  link: string
  /** BoxCube 描述。 */
  desc?: string
  /** 图标的颜色。 */
  color?: string
  /** 图标名称，支持 `iconify`。 */
  icon?: string | null
  /** 图片地址或包含 light 和 dark 模式的对象。 */
  image?: string | { light: string; dark: string }
}

/**
 * DocAsideLogo 接口
 */
export interface AsideItem {
  /** 链接地址。 */
  link: string
  /** 图标地址。 */
  icon: string
  /** 名称。 */
  name?: string
  /** 活动名称。 */
  activity?: string
  /** 隐藏信息 1。 */
  hide1?: string
  /** 信息 1。 */
  info1?: string
  /** 隐藏信息 2。 */
  hide2?: string
  /** 信息 2。 */
  info2?: string
}

/**
 * Announcement 接口
 */
export interface Prelink {
  /** 链接的 URL。 */
  link: string
  /** 链接的目标。 */
  target?: string
  /** 链接的标题。 */
  title: string
}

/**
 * Twikoo 配置数据类型接口。
 */
export interface TwikooData {
  /** Twikoo 的环境 ID。 */
  envId: string
}

/**
 * HomeFooter 接口
 */
export interface FooterData {
  /** 链接分组数组。 */
  group?: Group[]
  /** 备案信息。 */
  beian?: Beian
  /** 作者信息。 */
  author?: Author
}

/**
 * HomeFooter Group 接口
 */
export interface Group {
  /** 图标。 */
  icon?: string
  /** 图标样式。 */
  style?: string
  /** 分组标题。 */
  title: string
  /** 链接打开方式，默认 '_blank'。 */
  target?: string
  /** 链接数组。 */
  links: Link[]
}

/**
 * HomeFooter Beian 接口
 */
export interface Beian {
  /** ICP 备案号。 */
  icp?: string
  /** ICP 图标，默认为 'fluent:globe-shield-48-filled'。 */
  icpIcon?: string
  /** 公安备案号。 */
  police?: string
  /** 公安备案图标，默认为 'fluent:shield-checkmark-48-filled'。 */
  policeIcon?: string
  /** 是否显示图标。 */
  showIcon?: boolean
}

/**
 * HomeFooter Author 接口
 */
export interface Author {
  /** 作者姓名。 */
  name?: string
  /** 作者链接。 */
  link?: string
}

/**
 * HomeFooter Link 接口
 */
export interface Link {
  /** 链接图标。 */
  icon?: string
  /** 链接样式。 */
  style?: string
  /** 链接名称。 */
  name: string
  /** 链接地址。 */
  href: string
  /** 链接打开方式，默认 '_blank'。 */
  target?: string
}

/**
 * DocVideoLink 接口
 */
export interface VideoProps {
  /** 可选的 id，当选择平台时需要使用 id */
  id?: string
  /** 可选的平台类型 */
  to?: 'youtube' | 'bilibili' | 'tencent' | 'youku' | 'vimeo'
  /** 自定义视频链接，只有在 `to` 和`id` 不存在时才需要提供。 */
  src?: string
}

/**
 * VideoConfig 接口，用于保存平台的配置信息
 */
export interface VideoConfig {
  /** 获取视频链接的方法，根据不同平台生成不同的链接 */
  src: (id: string) => string
  /** 视频播放器的标题 */
  title: string
}
