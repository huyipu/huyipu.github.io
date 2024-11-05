---
outline: deep
order: 4
---

# VitePress 设置中文

<ArticleMetadata />

:::tip 说明
本页面所有设置都可以在 config.mts 里面的提示找到，为了方便写在这里。
:::

- 直接贴一下我的 config.mts 里面的设置，我注释打上原来的英语方便找。

```ts
//默认配置
import { defineConfig } from "vitepress";

export default defineConfig({
  //网站标题
  title: "卡比~ & My Blog",
  //网站描述
  description:
    "在这里记录了我的个人笔记，因为治好了也流口水，所以要经常查询!!!",
  //设置为中文，相当于html标签加lang="zh-CN"
  lang: "zh-CN",
  locales: {
    "/": {
      label: "简体中文",
      lang: "zh-CN",
    },
  },
  //主题配置
  themeConfig: {
    //头上角要主题切换的文字 Appearance
    darkModeSwitchLabel: "切换主题",
    // 文章翻页
    docFooter: {
      prev: "上一篇", //Next page
      next: "下一篇", //Previous page
    },
    //当前页面 On this page
    outlineTitle: "页面内容",

    // 返回顶部 Return to top
    returnToTopLabel: "返回顶部",

    // 菜单  Menu
    sidebarMenuLabel: "菜单",

    //下面这个是搜索相关，我用的是algolia，local也可以用
    search: {
      //搜索用的啥引擎
      provider: "algolia",
      //具体配置，vscode 可以ctrl + 鼠标左键点进去看具体的参数
      options: {
        appId: "********",
        apiKey: "********",
        indexName: "********",
        //搜索框的占位符  Search docs  是点搜索框里面显示的那个
        placeholder: "搜索笔记",

        translations: {
          //外面的搜索按钮  Search
          button: { buttonText: "搜索笔记" },

          //这里就是点击导航栏上面的搜索弹出来的弹框  可以直接跟着改
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
    },

    logo: "/logo.svg",
    nav: [
      //导航配置忽略
    ],

    sidebar: [
      //侧导航配置忽略
    ],

    //404页面的配置
    notFound: {
      title: "页面未找到",
      quote: "哎呀，您好像迷失在网络的小胡同里啦，别着急，赶紧回头是岸！",
      linkText: "返回首页",
    },
  },
});
```

<LastUpdated time="2024/11/1 15:13:20"/>
