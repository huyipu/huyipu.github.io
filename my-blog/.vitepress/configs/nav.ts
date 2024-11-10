import type { DefaultTheme } from "vitepress";

const nav: DefaultTheme.Config["nav"] = [
  { text: "首页", link: "/" },
  {
    text: "笔记",
    items: [
      {
        text: "html5",
        link: "/note/html5/html5/html5-概述.html",
      },
      {
        text: "css3",
        link: "/note/css3/css3/css3-概述.html",
      },
      {
        text: "es6",
        link: "/note/es6/es6/es6-概述.html",
      },
      { text: "vue3", link: "/note/vue3/vue/vue-概述.html" },
      { text: "react", link: "/note/react/react/react-介绍.html" },
      { text: "杂七杂八", link: "/7788/杂七杂八/一些杂项.html" },
    ],
  },
  {
    text: "vitePress",
    items: [
      { text: "简介", link: "/VitePress/快速上手/VitePress简介" },
      { text: "美化样式", link: "/VitePress/快速上手/美化VitePress默认样式" },
      { text: "添加搜索", link: "/VitePress/快速上手/给VitePress添加搜索" },
      { text: "设置中文", link: "/VitePress/快速上手/VitePress设置中文" },
      {
        text: "自动侧边栏",
        link: "/VitePress/快速上手/VitePress实现自动侧边栏",
      },
    ],
  },
];

export default nav;
