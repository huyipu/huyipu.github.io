---
outline: deep
order: 1
---

# 添加搜索

<ArticleMetadata />

:::tip 说明
VitePress 配置里面有两种搜索模式，一个本地搜索，一个是 Algolia 搜索，这里重点介绍 Algolia 搜索。
:::

## 本地搜索

- 按照官网文档的说明，在`.vitepress/config.ts`文件中添加以下配置：

```ts
import { defineConfig } from "vitepress";

export default defineConfig({
  // ...其他配置
  themeConfig: {
    search: {
      provider: "local",
    },
  },
});
```

- 这样你就拥有了一个本地搜索，如下：

![本地搜索](/search/local.png)

## Algolia 搜索

- Algolia 搜索需要先去官网申请一下，地址是: [https://docsearch.algolia.com/apply/]('https://docsearch.algolia.com/apply/')，填写自己的邮箱，通过之后会发邮件到你的邮箱，成功申请之后用申请的邮箱账号登录，会看到一个默认的爬虫，如下：

![爬虫](/search/algolia_1.png)

- 点击爬虫，进入控制台，点击侧边栏的 Editor 进入编辑爬虫，如下：

![控制台](/search/algolia_2.png)

- 然后控制台上面会显示你申请邮件填的`indexName`，并且`appId`、`apiKey`也会显示在这里，将`recordExtractor`的函数重新配置一下，改为如下配置,并且点击右上角 Save 进行保存，再点击保存旁边的 Start Crawl 开始跑爬虫，等待一段时间。

```md
recordExtractor: ({ $, helpers }) => {
return helpers.docsearch({
recordProps: {
lvl1: ".content h1",
content: ".content p, .content li",
lvl0: {
selectors: "",
defaultValue: "文档",
},
lvl2: ".content h2",
lvl3: ".content h3",
lvl4: ".content h4",
lvl5: ".content h5",
},
aggregateContent: true,
recordVersion: "v3",
});
},
```

- 回到项目代码，在`.vitepress/config.ts`文件中添加以下配置：

```ts
import { defineConfig } from "vitepress";

export default defineConfig({
  // ...其他配置
  themeConfig: {
    search: {
      provider: "algolia",
      options: {
        appId: "YOUR_APP_ID",
        apiKey: "YOUR_API_KEY",
        indexName: "YOUR_INDEX_NAME",
      },
    },
  },
});
```

- 这样你就在 vitepress 中添加了 Algolia 搜索，如下：

![Algolia搜索](/search/algolia_3.png)

## 定时自动爬取

- 如果你的文档更新了，Algolia 搜索的索引没有更新，你可以点击爬虫旁边的 Crawl 按钮进行手动爬取，但是这样太麻烦了，我们可以设置定时自动爬取，返回到配置页面，也就是 Editor，在配置里加上定时爬取的配置，参考 [官方文档 schedule 参数说明]('https://www.algolia.com/doc/tools/crawler/apis/configuration/schedule/')，如下：

```md
schedule: "every 1 day at 3:00 pm",
```

- 点击 Save 保存即可自动爬取，这样你就可以不用手动爬取啦。

<LastUpdated time="2024/11/1 15:01:11"/>
