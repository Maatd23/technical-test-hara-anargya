import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import "../src/assets/css/index.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import routes from "./router";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const app = createApp(App);
app.use(router);
app.component("Icon", Icon);
app.mount("#app");
