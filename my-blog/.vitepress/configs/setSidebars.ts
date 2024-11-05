import type { VitePressSidebarOptions } from "vitepress-sidebar";

//公共部分
const publicObj = {
  documentRootPath: "/my-blog/docs",
  //使用h1的标题作为侧边栏的标题
  // useTitleFromFileHeading: true,
  //使用文件夹的index.md作为标题
  useFolderTitleFromIndexFile: true,
  //指向文件夹的链接
  useFolderLinkFromIndexFile: true,
  sortMenusByFrontmatterOrder: true,
  sortFolderTo: "top",
  collapsed: false,
  collapseDepth: 2,
  //将标题-换位空格
  hyphenToSpace: true,
} as VitePressSidebarOptions;

//设置侧边栏
const setSidebars: VitePressSidebarOptions[] = [
  // vue
  {
    ...publicObj,
    scanStartPath: "note/vue3",
    basePath: "/note/vue3/",
    resolvePath: "/note/vue3/",
  },
  // react
  {
    ...publicObj,
    scanStartPath: "note/react",
    basePath: "/note/react/",
    resolvePath: "/note/react/",
  },
  // VitePress
  {
    ...publicObj,
    scanStartPath: "VitePress",
    basePath: "/VitePress/",
    resolvePath: "/VitePress/",
  },
  // 7788
  {
    ...publicObj,
    scanStartPath: "7788",
    basePath: "/7788",
    resolvePath: "/7788",
  },
];

export default setSidebars;
