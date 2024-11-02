import type { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Config["sidebar"] = [
  {
    text: "js",
    collapsed: false,
    items: [{ text: "ES6", link: "/note/js/ES6" }],
  },
  {
    text: "vue3",
    collapsed: false,
    items: [{ text: "生命周期", link: "/note/vue3/生命周期" }],
  },
  {
    text: "vitePress",
    collapsed: false,
    items: [
      { text: "配置全中文", link: "/vite-press/set-zh" },
      { text: "美化样式", link: "/vite-press/styles-note" },
    ],
  },
  {
    text: "杂七杂八",
    collapsed: false,
    items: [
      { text: "配置全中文", link: "/set-zh" },
      { text: "美化样式", link: "/styles-note" },
    ],
  },
];

export default sidebar;
