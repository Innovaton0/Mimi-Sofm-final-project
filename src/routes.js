import landingPage from "./components/LandingPage.vue";
import Home from "./components/Home.vue";
import TattooPage from "./components/TattooPage.vue";

export const routes = [
  { path: "/", name: "landingpage", component: landingPage },
  { path: "/home", name: "home", component: Home },
  { path: "/tattoo", name: "tattoo", component: TattooPage },
];
