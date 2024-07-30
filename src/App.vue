<template>
  <RouterView/>

</template>

<script>
import TattooPage from "./components/TattooPage.vue";
import LandingPage from "./components/LandingPage.vue";
import Home from "./components/Home.vue";
import TattooPage2 from "./components/TattooPage2.vue";

export default {
  name: "App",
  components: { Home, TattooPage, LandingPage, TattooPage2 },
  data() {
    return {};
  },
};
</script>

<style>

</style>