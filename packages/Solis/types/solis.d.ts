declare module '@theojs/solis/utils' {
  /**
   * 文章的元数据结构，包含文章标题、日期等。
   */
  interface FrontMatter {
    /** 文章标题 */
    title?: string
    /** 文章发布日期，格式为 YYYY-MM-DD */
    date: string
    /** 其他自定义元数据 */
    [key: string]: any
  }

  /**
   * 表示一篇文章的结构。
   */
  interface Post {
    /** 文章的元数据 */
    frontMatter: FrontMatter
    /** 生成后的文章路径，以 .html 结尾 */
    regularPath: string
  }

  /**
   * 获取所有文章，并对其按日期进行排序。
   *
   * @param pageSize 每页文章的数量，用于生成分页
   * @returns 按日期排序后的文章数组的 Promise
   */
  export function getPosts(pageSize: number): Promise<Post[]>

  /**
   * 生成分页页面的 Markdown 文件。
   *
   * @param total 文章的总数量
   * @param pageSize 每页文章的数量
   * @returns 返回一个 Promise，表示生成分页的操作完成
   */
  export function generatePaginationPages(
    total: number,
    pageSize: number
  ): Promise<void>

  /**
   * 将日期字符串转换为 YYYY-MM-DD 格式。
   *
   * @param date 输入的日期字符串，如果未提供则使用当前日期
   * @returns 格式化后的日期字符串
   */
  export function _convertDate(date?: string): string

  /**
   * 比较两篇文章的日期，用于排序。
   *
   * @param obj1 第一篇文章
   * @param obj2 第二篇文章
   * @returns 如果 obj1 的日期较新则返回 1，否则返回 -1
   */
  export function _compareDate(obj1: Post, obj2: Post): number
}
