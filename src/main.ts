import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { plugins } from "./element-comp";
import { requireComp } from "./components/factory.comp";
import "./styles/common.scss";

const vue = createApp(App);
vue.use(router);
plugins.forEach((plugin) => {
  vue.use(plugin);
});
vue.mount("#app");
requireComp(vue);
