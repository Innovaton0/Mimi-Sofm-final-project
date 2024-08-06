import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(pinia)
app.use(router);
app.mount("#app");
