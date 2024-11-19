declare global {
  interface Window {
    umami: Function
  }
}

export interface Umami {
  id: string
  src: string
}

export type UmamiOption = Umami | Umami[]

function mountUmami(options: UmamiOption) {
  // 确保只有在生产环境下执行
  if (process.env.NODE_ENV !== 'production') {
    return
  }

  let properties: Umami[] = []

  // 如果是数组，展开并处理
  if (Array.isArray(options)) {
    properties.push(...options)
  } else {
    properties.push(options)
  }

  // 过滤掉没有 id 的属性
  properties = properties.filter((property) => Boolean(property.id))

  // 如果没有有效的 Umami 配置，直接返回
  if (!properties.length) return

  // 创建并插入 script 标签
  for (const property of properties) {
    const script = document.createElement('script')
    script.async = true
    script.defer = true
    script.setAttribute('data-website-id', property.id)
    script.src = property.src
    document.head.appendChild(script)
  }
}

export default (options: UmamiOption) => {
  // 确保只在浏览器环境中运行
  if (typeof window !== 'undefined') {
    mountUmami(options)
  }
}
