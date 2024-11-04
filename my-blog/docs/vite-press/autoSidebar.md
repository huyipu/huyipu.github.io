---
outline: deep
order: 5
---

# 自动侧边栏

<ArticleMetadata />

:::tip 说明
本文介绍如何使用[vitepress-sidebar]('https://vitepress-sidebar.cdget.com/zhHans/')实现自动生成侧边栏。
:::

## 背景

- vitepress 很方便，但是现在还不能实现根据目录自动生成侧边栏，写一篇文章就要手动增加侧边栏，这实在是太不程序员了，所以我们这边利用 <u>vitepress-sidebar</u> 这款插件来自动生成侧边栏。

## 安装插件

- 使用以下命令进行安装。

::: code-group

```sh [npm]
#npm安装
$ npm i -D vitepress-sidebar
```

```sh [pnpm]
#pnpm安装
$ yarn add -D vitepress-sidebar
```

```sh [yarn]
#yarn安装
$ pnpm i -D vitepress-sideba
```

:::

## 配置侧边栏

- 官网提供两种方式，我个人比较推荐使用 <span class="marker-evy">generateSidebar</span> ，代码侵入性没那么高。接下来，在 `.vitepress/config.mts` 中引入以下代码。

```ts
import { generateSidebar } from "vitepress-sidebar";
```

- 然后在下方的<span class="marker-evy">themeConfig</span> 中添加使用函数。

```ts
themeConfig: {
sidebar: generateSidebar({
    // 侧边栏的根目录，默认为docs
    documentRootPath: "/my-blog/docs",
    // 使用h1的标题作为侧边栏的标题
    useTitleFromFileHeading: true,
    // 使用文件夹的index.md
    useFolderTitleFromIndexFile: true,
    // 指向文件夹的链接
    useFolderLinkFromIndexFile: true,
    // 根据md文件的order进行排序
    sortMenusByFrontmatterOrder: true,
    // 排序之后将不是文件夹的放后面
    sortFolderTo: "top",
    // 菜单展开功能
    collapsed: false,
}),
}
```

- 然后重新启动一下项目，即可看到自动生成的侧边栏。

::: warning 注意

新增菜单和修改 index.md 的 order，都需要重新跑一下项目才会生效。

:::

<LastUpdated time="2024/11/14 22:10:36"/>
