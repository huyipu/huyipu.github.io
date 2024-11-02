import type { DefaultTheme } from "vitepress";

const nav: DefaultTheme.Config["nav"] = [
  { text: "首页", link: "/" },
  {
    text: "笔记",
    items: [
      {
        text: "html",
        link: "/html",
      },
      {
        text: "css",
        link: "/css",
      },
      {
        text: "js",
        link: "/note/js",
      },
      { text: "vue3", link: "/note/vue3" },
      { text: "react", link: "/react" },
      { text: "杂七杂八", link: "/7788" },
    ],
  },
  {
    text: "vitePress",
    items: [
      { text: "配置全中文", link: "/vite-press/set-zh" },
      { text: "美化样式", link: "/vite-press/styles-note" },
    ],
  },
];

export default nav;
