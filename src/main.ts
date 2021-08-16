import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
// import { plugins } from "./element-comp";
import ElementPlus from 'element-plus';
// import "element-plus/packages/theme-chalk/src/base.scss";
import 'element-plus/lib/theme-chalk/index.css';
import { requireComp } from "./components/factory.comp";
import "./styles/common.scss";

const vue = createApp(App);
vue.use(router);
vue.use(ElementPlus)
// plugins.forEach((plugin) => {
//   vue.use(plugin);
// });
vue.mount("#app");
requireComp(vue);