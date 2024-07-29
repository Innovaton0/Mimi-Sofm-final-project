import landingPage from "./components/LandingPage.vue";
import Home from "./components/Home.vue";


export const routes = [
    {path: "/", name: "landingpage", component: landingPage},
    {path: "/home", name: "home", component: Home},
]