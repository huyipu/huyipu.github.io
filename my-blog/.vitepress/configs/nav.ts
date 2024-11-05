import type { DefaultTheme } from "vitepress";

const nav: DefaultTheme.Config["nav"] = [
  { text: "首页", link: "/" },
  {
    text: "笔记",
    items: [
      {
        text: "html5",
        link: "/note/html5",
      },
      {
        text: "css3",
        link: "/note/css3",
      },
      {
        text: "js",
        link: "/note/js",
      },
      { text: "vue3", link: "/note/vue3" },
      { text: "react", link: "/note/react" },
      { text: "杂七杂八", link: "/7788" },
    ],
  },
  {
    text: "vitePress",
    items: [
      { text: "简介", link: "/VitePress/快速上手/VitePress简介" },
      { text: "添加搜索", link: "/VitePress/快速上手/给VitePress添加搜索" },
      { text: "美化样式", link: "/VitePress/快速上手/美化VitePress默认样式" },
      { text: "设置中文", link: "/VitePress/快速上手/VitePress设置中文" },
      {
        text: "自动侧边栏",
        link: "/VitePress/快速上手/VitePress设置自动侧边栏",
      },
    ],
  },
];

export default nav;
