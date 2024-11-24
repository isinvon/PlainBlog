import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 导入element-plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import "element-plus/theme-chalk/dark/css-vars.css";
// Pinia
import { createPinia } from "pinia";
// 全局样式
const pinia = createPinia();
// Mock
import "./mock";

createApp(App).use(router).use(ElementPlus).use(pinia).mount("#app");
