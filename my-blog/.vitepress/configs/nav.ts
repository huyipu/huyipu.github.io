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
      { text: "添加搜索", link: "/vite-press/search" },
      { text: "美化样式", link: "/vite-press/styles-note" },
      { text: "设置中文", link: "/vite-press/set-zh" },
    ],
  },
];

export default nav;
