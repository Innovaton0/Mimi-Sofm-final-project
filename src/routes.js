import landingPage from "./components/LandingPage.vue";
import Home from "./components/Home.vue";
import TattooPage from "./components/TattooPage.vue";
import TattooPage2 from "./components/TattooPage2.vue";
<<<<<<< HEAD
import TattooArtists from "./components/TattooArtists.vue";
import ArtistProfile from "./components/ArtistProfile.vue";
import JoinUs from './components/JoinUs.vue';
import Register from './components/Register.vue';
import Help from './components/Help.vue';
import AboutUs from './components/AboutUs.vue';
import NotFound from './components/NotFound.vue';
=======
import { createWebHistory, createRouter } from "vue-router";
>>>>>>> feat-nacha-home

const routes = [
  { path: "/", name: "landingpage", component: landingPage },
  { path: "/home", name: "home", component: Home },
  { path: "/tattoo", name: "tattoo", component: TattooPage },
  { path: "/tattoo2", name: "tattoo2", component: TattooPage2 },
<<<<<<< HEAD
  { path: "/tattooartists", name: "tattooartists", component: TattooArtists },
  { path: "/tattooartists/:id", name:"artistProfile", component: ArtistProfile },
  { path: "/joinus", name: "joinus", component: JoinUs },
  { path: "/register", name: "register", component: Register},
  { path: "/help", name: "help", component: Help },
  { path: "/Us", name: "us", component: AboutUs },
  { path: "/:path(.*)", component: NotFound } 
];
=======
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
>>>>>>> feat-nacha-home
