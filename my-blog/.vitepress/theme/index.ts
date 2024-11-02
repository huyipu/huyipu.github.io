import DefaultTheme from "vitepress/theme";
import LastUpdated from "../components/Footer/LastUpdated.vue";
import Confetti from "../components/Confetti.vue";
import { inBrowser } from "vitepress";
import busuanzi from "busuanzi.pure.js";
import MyLayout from "./MyLayout.vue";
import "./style/index.css"; //引入自定义的样式

export default {
  ...DefaultTheme, //或者这样写也可
  Layout: MyLayout,
  enhanceApp({ app, router }) {
    app.component("LastUpdated", LastUpdated);
    app.component("Confetti", Confetti);
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
      };
    }
  },
};
