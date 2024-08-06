<template>
  <RouterView />

</template>

<script>
import TattooPage from "./components/TattooPage.vue";
import LandingPage from "./components/LandingPage.vue";
import Home from "./components/Home.vue";
import TattooPage2 from "./components/TattooPage2.vue";
import TattooArtists from "./components/TattooArtists.vue";
import ArtistProfile from "./components/ArtistProfile.vue";
import JoinUs from './components/JoinUs.vue';
import Register from './components/Register.vue';
import Help from './components/Help.vue';
import AboutUs from "./components/AboutUs.vue"
import Search from "./components/Search.vue";


export default {
  name: "App",
  components: { Home, TattooPage, LandingPage, TattooPage2, TattooArtists, ArtistProfile, JoinUs, Register, Help, AboutUs, Search },
  data() {
    return {};
  },
};
</script>

<style>

</style>
