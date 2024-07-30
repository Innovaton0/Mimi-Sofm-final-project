import landingPage from "./components/LandingPage.vue";
import Home from "./components/Home.vue";
import TattooPage from "./components/TattooPage.vue";
import TattooPage2 from "./components/TattooPage2.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", name: "landingpage", component: landingPage },
  { path: "/home", name: "home", component: Home },
  { path: "/tattoo", name: "tattoo", component: TattooPage },
  { path: "/tattoo2", name: "tattoo2", component: TattooPage2 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router