<<<<<<< HEAD
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { routes } from "./routes.js";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");
=======
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from "./routes.js"


const app = createApp(App);

app.use(routes);
app.mount('#app');
>>>>>>> feat-nacha-home
