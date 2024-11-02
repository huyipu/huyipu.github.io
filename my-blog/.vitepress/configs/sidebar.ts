import type { DefaultTheme } from "vitepress";

const sidebar: DefaultTheme.Config["sidebar"] = [
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
