---
title: 附件下载
---

## 引入组件

```ts
import DefaultTheme from 'vitepress/theme'

import { DocAttachment } from '@theojs/lumen'// [!code ++]
export default {
  extends: DefaultTheme,
  enhanceApp: ({ app }) => {// [!code ++]
    app.component('File', DocAttachment)// [!code ++]
  }// [!code ++]
  ...//其他代码
}

```

## 示例

**输入**

```vue-html
<File name="Logo" link="/TM-FELogo.png" />
```

**输出**
<File name="Logo" link="/TM-FELogo.png" />
