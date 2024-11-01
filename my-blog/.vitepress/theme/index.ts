import DefaultTheme from "vitepress/theme";
import LastUpdated from "../components/Foo/LastUpdated.vue";
import "./style/index.css"; //引入自定义的样式

export default {
  ...DefaultTheme, //或者这样写也可
  enhanceApp({ app }) {
    app.component("LastUpdated", LastUpdated);
  },
};
